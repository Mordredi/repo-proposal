#!/bin/sh -l
cd api
echo *
ami_name="$INPUT_NAME-$INPUT_VERSION"
echo $ami_name
echo "::set-output name=amiName::$ami_name"