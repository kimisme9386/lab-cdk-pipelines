import { Construct, Stack, StackProps } from '@aws-cdk/core';
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from '@aws-cdk/pipelines';

/**
 * The stack that defines the application pipeline
 */
export class CdkpipelinesDemoPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      // The pipeline name
      pipelineName: 'MyServicePipeline',

      // How it will be built and synthesized
      synth: new ShellStep('Synth', {
        // Where the source can be found
        input: CodePipelineSource.connection(
          'kimisme9386/lab-cdk-pipelines',
          'main',
          {
            connectionArn:
              'arn:aws:codestar-connections:ap-northeast-1:482631629698:connection/6a6dd11d-2713-4129-9e5d-23289c8968d6',
          },
        ),

        // Install dependencies, build and run cdk synth
        commands: [
          'yarn global add aws-cdk@1.119.0',
          'yarn --frozen-lockfile',
          'yarn compile',
          'cdk synth',
        ],
      }),
    });

    // This is where we add the application stages
    // ...
  }
}
