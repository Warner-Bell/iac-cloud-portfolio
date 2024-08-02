#! /usr/bin/env bash
set -e # stop the execution of the script if it fails

aws cloudfront create-invalidation --distribution-id E2WF56K88USHWA --paths "/*"

