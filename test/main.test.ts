import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../src/cdkpipelines-demo-pipeline-stack';

test('Snapshot', () => {
  const app = new App();
  const stack = new CdkpipelinesDemoPipelineStack(app, 'test', {
    env: { account: '482631629698', region: 'ap-northeast-1' },
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
