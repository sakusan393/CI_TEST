#!/bin/sh

echo e1 $$
echo e2 $!
echo e3 $#
echo e3 $2
echo e4 $0
echo e5 $?
echo e6 `ls -l`
history