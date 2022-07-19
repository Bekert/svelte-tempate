#!/bin/bash
echo "Enter path to static folder. NOTE: This command will REPLACE everything in this folder"
read folder_path
rm -rf $folder_path
cp -r dist $folder_path
