import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export class SsmStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    //Creation of SSM Parameters
    const demossm = new ssm.StringParameter(this,"SSMParameters",{
      parameterName: 'demoVPCID', // Key Name
      stringValue: 'vpc-0c1e78a91afb3d41f'
    });
  }
}
