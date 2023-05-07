#! /usr/bin/env bash
set -e # stop the execution of the script if it fails

aws dynamodb put-item \
    --table-name site-views \
    --item '{"ID": {"S": "1"}, "views": {"N": "1"}}' \
    --return-consumed-capacity TOTAL \
    --return-item-collection-metrics SIZE \
    --region us-east-1
