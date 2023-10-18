---
title: Shell (Bash/Powershell) Cheatsheet
description: Cheatsheet for Terminal
---

# Typical Terminal Operations: Bash vs. PowerShell

| Operation                 | Bash Command                  | PowerShell Command           |
|---------------------------|------------------------------|-----------------------------|
| **File Operations**       |                              |                             |
| Create a Directory        | `mkdir directory_name`        | `New-Item -Type Directory directory_name` |
| Create a File             | `touch file.txt`              | `New-Item -Type File file.txt` |
| List Files and Directories| `ls` or `ls -l`               | `Get-ChildItem` or `dir`     |
| Remove a File             | `rm file.txt`                 | `Remove-Item file.txt`      |
| Remove a Directory        | `rm -r directory_name`        | `Remove-Item -Recurse directory_name` |
| **Navigation**            |                              |                             |
| Change Directory          | `cd path/to/directory`        | `Set-Location path\to\directory` |
| Current Directory         | `pwd`                        | `Get-Location`              |
| **Text Processing**       |                              |                             |
| Display File Contents     | `cat file.txt`                | `Get-Content file.txt`      |
| Search for Text           | `grep pattern file.txt`       | `Select-String pattern file.txt` |
| **System Information**    |                              |                             |
| System Info               | `uname -a`                   | `Get-ComputerInfo`          |
| **Process Management**    |                              |                             |
| List Running Processes    | `ps`                         | `Get-Process`               |
| Kill a Process            | `kill PID`                   | `Stop-Process -Id PID`      |
| **Environment Variables** |                              |                             |
| Display Variable Value    | `echo $VAR_NAME`             | `echo $env:VAR_NAME`        |
| Set Variable              | `VAR_NAME=value`             | `$env:VAR_NAME = value`     |
| **Script Execution**      |                              |                             |
| Execute Script            | `./script.sh`                | `.\script.ps1`              |
| Run as Administrator (sudo)| `sudo command`             | `Start-Process powershell -ArgumentList "command" -Verb RunAs` |
| **File Permissions**       |                              |                                  |
| Change File Permissions    | `chmod 755 file.txt`          | `Set-ItemProperty file.txt -Name IsReadOnly $false` |
| List File Permissions      | `ls -l file.txt`              | `Get-Acl file.txt`               |
| **File Manipulation**      |                              |                                  |
| Copy File                  | `cp source.txt dest.txt`      | `Copy-Item source.txt dest.txt`  |
| Move File                  | `mv source.txt dest.txt`      | `Move-Item source.txt dest.txt`  |
| Rename File                | `mv oldname.txt newname.txt`  | `Rename-Item oldname.txt newname.txt` |
| **File Compression**       |                              |                                  |
| Create Zip Archive         | `zip -r archive.zip folder/`   | `Compress-Archive -Path folder -DestinationPath archive.zip` |
| Extract Zip Archive        | `unzip archive.zip`           | `Expand-Archive -Path archive.zip -DestinationPath folder` |
| **Text Editing**           |                              |                                  |
| Create/Edit Text File      | `nano file.txt`               | `notepad file.txt`               |
| **Networking**             |                              |                                  |
| Check Network Connection   | `ping example.com`            | `Test-Connection example.com`    |
| **User Management**        |                              |                                  |
| Create User                | `useradd username`            | `New-LocalUser -Name username`   |
| Delete User                | `userdel username`            | `Remove-LocalUser -Name username` |
| **Package Management**     |                              |                                  |
| Update Package Database    | `sudo apt-get update`         | `Update-Package`                |
| Install Package            | `sudo apt-get install pkg`    | `Install-Package pkg`           |
| Remove Package             | `sudo apt-get remove pkg`     | `Uninstall-Package pkg`         |
| **System Services**        |                              |                                  |
| Start Service              | `sudo systemctl start service`| `Start-Service service`         |
| Stop Service               | `sudo systemctl stop service` | `Stop-Service service`          |
| **Environment Setup**      |                              |                                  |
| Set Environment Variable   | `export VAR_NAME=value`       | `$env:VAR_NAME = "value"`       |
| **SSH**                    |                              |                                  |
| SSH to Remote Host         | `ssh user@hostname`           | `Enter-PSSession -ComputerName hostname -Credential user` |
| **File Search**            |                              |                                        |
| Find Files by Name         | `find /path -name "pattern"`  | `Get-ChildItem -Path /path -Filter pattern` |
| Find Files by Type         | `find /path -type f`          | `Get-ChildItem -Path /path -File`      |
| Find Directories           | `find /path -type d`          | `Get-ChildItem -Path /path -Directory` |
| **File Permissions**       |                              |                                        |
| Change Ownership           | `chown user:group file`       | `Set-Acl file -Owner user`              |
| **File Comparison**        |                              |                                        |
| Compare Two Files          | `diff file1.txt file2.txt`    | `Compare-Object -ReferenceObject (Get-Content file1.txt) -DifferenceObject (Get-Content file2.txt)` |
| **Text Manipulation**      |                              |                                        |
| Count Lines in a File      | `wc -l file.txt`              | `Get-Content file.txt | Measure-Object -Line` |
| **File Permissions**       |                              |                                        |
| Change File Permissions    | `chmod 644 file.txt`          | `Set-Acl file.txt -AclObject (Get-Acl file.txt) -PermissionSet "Read" |
| **File Size**              |                              |                                        |
| Get File Size              | `stat -c %s file.txt`         | `(Get-Item file.txt).Length`           |
| **Time and Date**         |                              |                                        |
| Display Current Date       | `date`                        | `Get-Date`                             |
| **Package Management**     |                              |                                        |
| List Installed Packages    | `dpkg -l`                     | `Get-Package`                          |
| **System Information**    |                              |                                        |
| List System Information    | `lscpu`                       | `Get-WmiObject -Class Win32_ComputerSystem` |
| **Network Configuration**  |                              |                                        |
| Show Network Interfaces   | `ifconfig`                    | `Get-NetAdapter`                       |
| **Service Management**     |                              |                                        |
| List Running Services      | `systemctl list-units --type=service` | `Get-Service`                   |
| **User Management**        |                              |                                        |
| Change User Password       | `passwd username`             | `Set-LocalUser -Name username -Password (ConvertTo-SecureString -AsPlainText "newpassword" -Force)` |
| **File Archiving**         |                              |                                        |
| Create Tar Archive         | `tar -cvf archive.tar folder/` | `Compress-Archive -Path folder -DestinationPath archive.tar` |
| Extract Tar Archive        | `tar -xvf archive.tar`         | `Expand-Archive -Path archive.tar -DestinationPath folder` |
| **Clipboard Operations**   |                              |                                        |
| Copy to Clipboard          | `echo "text" | xclip -sel clip` | `Set-Clipboard -Value "text"`         |
| Paste from Clipboard      | `xclip -o -sel clip`          | `Get-Clipboard`                        |
| **File Permissions**       |                              |                                        |
| Check File Permissions     | `ls -l file.txt`              | `Get-Acl file.txt`                    |

