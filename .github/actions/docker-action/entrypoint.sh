#!/bin/sh -l
printenv
echo *
echo "$1"
echo "$2"
version = $1
name = $2
ami_name="${name}-${version}"
echo "::set-output amiName=ami_name::$ami_name"