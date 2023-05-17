#! /usr/bin/env bash
set -e # stop the execution of the script if it fails

aws s3 sync ./website-prod s3://warnerbell.com