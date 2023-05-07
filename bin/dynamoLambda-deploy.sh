#! /usr/bin/env bash
set -e # stop the execution of the script if it fails

DDB_PATH="/workspace/cloud-resume-challenge/cfn/dynamodb.yaml"
echo $DDB_PATH

cfn-lint validate $DDB_PATH

aws cloudformation deploy \
  --stack-name "CRC-ddbLambdaApi" \
  --s3-bucket cfmtn-stacks-2023 \
  --template-file "$DDB_PATH" \
  --no-execute-changeset \
  --tags group=crc-stuff \
  --capabilities CAPABILITY_NAMED_IAM