#!/bin/sh -l
echo *
ami_name="$INPUT_NAME-$INPUT_VERSION"
echo "::set-output amiName=ami_name::$ami_name"