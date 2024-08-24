#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { TsSimpleStack } from "../lib/ts-testing-stack";

const app = new cdk.App();
const simpleStack = new TsSimpleStack(app, "TsTestingStack", {});
cdk.Tags.of(simpleStack).add("stage", "test");
cdk.Tags.of(simpleStack).add("storage", "main", {
  includeResourceTypes: ["AWS::S3::Bucket"],
});
