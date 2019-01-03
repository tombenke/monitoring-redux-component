#!/bin/bash
testBaseDir=${HOME}/tmp
destDir=${testBaseDir}/test-redux-component
cwd=`pwd`
echo Executing kickoff -a .kickoff.test.yml -f . -d destDir
rm $destDir -rf
kickoff -a .kickoff.test.yml -f . -d $destDir
cd $destDir
echo $destDir
pwd
sh ./.kickoff.sh
npm install
npm run test
npm run build
cd $cwd
