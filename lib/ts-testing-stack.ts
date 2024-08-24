import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, Runtime } from "aws-cdk-lib/aws-lambda";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TsSimpleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new cdk.aws_lambda.Function(this, "SimpleLambda", {
      code: Code.fromInline("console.log()"),
      handler: "index.handler",
      runtime: Runtime.NODEJS_20_X,
    });

    const bucket = new cdk.aws_s3.Bucket(this, "SimpleBucket", {
      versioned: false,
    });

    bucket.grantRead(lambda);
  }
}
