import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { readFileSync } from 'fs';
import * as ssm from 'aws-cdk-lib/aws-ssm';


export class WebserverStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpcId = ssm.StringParameter.valueFromLookup(this,'demoVPCID')
     //Security Group

     const demoVPC = ec2.Vpc.fromLookup(this, 'newVPC', { vpcId: vpcId})

    const demoSG = new ec2.SecurityGroup(this,'demoSG',{
      vpc: demoVPC,
      securityGroupName: 'Allow http traffic',
      allowAllOutbound:true,
    })
    // Ingress for SG
    demoSG.addIngressRule(ec2.Peer.anyIpv4(),ec2.Port.tcp(80),'allow http traffic')
    demoSG.addIngressRule(ec2.Peer.anyIpv4(),ec2.Port.tcp(22),'allow SSH')

    const userData = readFileSync('./lib/userdata.sh','utf8');
    //Ec2 Instance
    const demoEC2 = new ec2.Instance(this,'demoEc2',{
      vpc:demoVPC,
      vpcSubnets: { subnetType:ec2.SubnetType.PUBLIC},
      securityGroup: demoSG,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2,ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      keyName: 'terraform-key',
    })
    demoEC2.addUserData(userData);

  }
}
