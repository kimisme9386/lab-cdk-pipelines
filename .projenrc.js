const { AwsCdkTypeScriptApp, DependenciesUpgradeMechanism } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.120.0',
  cdkVersionPinning: true,
  defaultReleaseBranch: 'main',
  name: 'lab-cdk-pipelines',
  releaseWorkflow: false,
  buildWorkflow: false,
  stale: false,
  depsUpgrade: DependenciesUpgradeMechanism.NONE,
  cdkDependencies: [
    '@aws-cdk/pipelines',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-codebuild',
    '@aws-cdk/aws-codepipeline',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-s3',
    '@aws-cdk/core',
    '@aws-cdk/aws-ecr',
  ],
  devDeps: [
    '@types/aws-lambda@^8.10.72',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    '@types/js-yaml@^3.12.5',
    'aws-lambda',
  ],
  deps: ['js-yaml@^3.14.1'],
  context: {
    '@aws-cdk/core:newStyleStackSynthesis': true,
  },
});
project.synth();
