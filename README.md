# aws-cdk-multi-app-stack
Deploying the multiple apps using the aws cdk


![image](https://github.com/SUBBARAMIREDDY-K/aws-cdk-multi-app-stack/assets/91323223/13b18593-0bce-42b1-bf47-376ede69fc4e)

To implement solution in CDK with Approach 1, need to:
1. Create the Resource (in the CDK) that needs to be used by other Stack or App such as VPC in this example.
2. Provision the SSM Parameter Store using CDK and store the values
3. Read values from the Systems Manager Parameter Store, use either :
• `StringParameter.fromStringParameterName` (Reads SSM values at Deployment time – supported by limited AWS Services)
• `StringParameter.valueFromLookup` methods (Reads SSM values at Synthesis time – supported by limited AWS Services) 
• If the value is not already cached in cdk.json or passed on the command line, it is retrieved from the current AWS account. 
• Provide explicit Account and Region information. 
4. Retrieve SSM Value
• const versionOfStringToken = ssm.StringParameter.valueForStringParameter(this, 'my-plain-parameter-name', 1); // version 1
https://docs.aws.amazon.com/cdk/v2/guide/get_ssm_value.html
