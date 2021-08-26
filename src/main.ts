import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from './cdkpipelines-demo-pipeline-stack';

// for development, use account/region from cdk cli
// const devEnv = {
//   account: process.env.CDK_DEFAULT_ACCOUNT,
//   region: process.env.CDK_DEFAULT_REGION,
// };

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: '482631629698', region: 'ap-northeast-1' },
});

app.synth();
