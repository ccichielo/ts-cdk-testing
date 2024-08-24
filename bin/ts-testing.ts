#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { TsSimpleStack } from "../lib/ts-testing-stack";
import { PolicyChecker } from "../lib/PolicyChecker";

const app = new cdk.App();
const simpleStack = new TsSimpleStack(app, "TsTestingStack", {});
cdk.Tags.of(simpleStack).add("stage", "test");
cdk.Tags.of(simpleStack).add("storage", "main", {
  includeResourceTypes: ["AWS::S3::Bucket"],
});

cdk.Aspects.of(app).add(new PolicyChecker());
