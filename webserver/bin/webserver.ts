#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebserverStack } from '../lib/webserver-stack';

const app = new cdk.App();
new WebserverStack(app, 'WebserverStack', {
  env: {
    account: '652065397850',
    region: 'ap-south-1'
  },
});