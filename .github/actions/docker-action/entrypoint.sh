#!/bin/sh -l
echo *
ami_name="$INPUT_NAME-$INPUT_VERSION"
echo "::set-output name=amiName::$ami_name"