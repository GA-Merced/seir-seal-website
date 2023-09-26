---
title: Terminal Reference
description: Reference for Typical Terminal Commands
---

### Computer File Systems

Computer file structures, also known as file systems, are hierarchical structures that organize and store data on a computer's storage devices, such as hard drives, solid-state drives, or network drives. The most commonly used file system on Unix-like operating systems, including Linux, is called the File Hierarchy Standard (FHS).

Here's an explanation of computer file structures with an ASCII art depiction of a file system and how commands like "cd" relate to it:

```
        Root Directory (/)
       /                \
  /home              /etc
    |                 /    \
   /user1         /config   /data
     |             /         /     \
    file1.txt   apache/    settings.conf
                httpd.conf
```

**Root Directory (/):** At the top of the hierarchy is the root directory, denoted by a forward slash (/). It is the starting point for the entire file system and contains all other directories and files.

**/home:** This directory typically contains user-specific directories. Each user has their own directory within /home, such as /home/user1. Users can store their personal files and folders within their respective home directories.

**/etc:** The /etc directory stores system-wide configuration files and scripts. It contains various subdirectories and files that configure the behavior of the system and applications.

**/etc/config:** An example of a subdirectory within /etc. This subdirectory may contain configuration files for a specific application or service.

**/etc/data:** Another subdirectory within /etc. It may store data files or additional configuration files related to system settings.

**/etc/data/settings.conf:** An example of a file within the /etc/data directory. This file may contain configuration settings for a particular system component.

**Commands like "cd" (Change Directory):** In this file system structure, the "cd" command is used to navigate between directories. For example:

To move from the root directory to the /home directory, you would use: `cd /home`.

To go from /etc to /etc/config, you would use: `cd /etc/config`.

The "cd" command allows you to change your current working directory within the file system, making it easier to access and manipulate files and directories. You can use absolute paths (starting from the root directory) or relative paths (based on your current directory) with "cd" to navigate the file system.

This hierarchical structure helps users and system administrators organize and manage files and directories effectively. It also serves as the foundation for many file-related commands in the Unix-like operating systems, allowing users to interact with the file system efficiently.

### File Paths

Relative and absolute paths are ways to specify the location of a file or directory within a file system. They are used in various computing contexts, including operating systems, web development, and programming. Here's an explanation of both with examples:

##### Relative Paths:
Relative paths specify the location of a file or directory relative to your current working directory. They are typically shorter and more concise than absolute paths because they rely on your current context.

**Here are some key points about relative paths:**

- They do not begin with a forward slash (/) or drive letter (on Windows).
- They are used when you want to reference files or directories in relation to your current position in the file system.
- You can use special notations like . (current directory) and .. (parent directory) to navigate.

**Examples of relative paths:**

- `./file.txt`: This references a file named "file.txt" in the current directory.
- `../folder/`: This points to a directory named "folder" in the parent directory.
- `../folder/file.txt`: This specifies a file named "file.txt" inside the "folder" directory in the parent directory.

##### Absolute Paths:

Absolute paths provide the full, unambiguous path to a file or directory from the root of the file system. They are not dependent on your current working directory and are used to specify an exact location in the file system.

**Here are some key points about absolute paths:**

- They begin with a forward slash (/) on Unix-like systems (Linux, macOS) or a drive letter (e.g., C:) on Windows.
- They are used when you need to specify the exact location of a file or directory, regardless of your current working directory.

**Examples of absolute paths:**

- `/home/user/documents/file.txt`: This is an absolute path to a file named "file.txt" in the user's "documents" directory on a Unix-like system (Mac or Linux).
- `C:\Users\User\Documents\file.txt`: This is an absolute path to a file named "file.txt" in the "Documents" folder on a Windows system.

##### When to Use Each:

**Relative Paths:** Use relative paths when you want to reference files or directories within the same project or when writing scripts that should be portable and not tied to specific directory structures. They are more flexible and maintainable in these cases.

**Absolute Paths:** Use absolute paths when you need to specify an exact, fixed location. For example, when configuring system settings, specifying files outside your project, or when working with scripts or commands that must consistently reference the same file or directory.

Understanding the difference between relative and absolute paths is crucial for effective file and directory navigation in various computing contexts. Your choice of path type depends on the specific task and requirements of your project or system.

### Basic Commands

| Command   | Description                          | Example Usage                          |
|-----------|--------------------------------------|----------------------------------------|
| `ls`      | List files and directories.          | `ls -l /path/to/directory`             |
| `cd`      | Change directory.                    | `cd /path/to/directory`                |
| `pwd`     | Print the current working directory. | `pwd`                                  |
| `touch`   | Create an empty file.                | `touch newfile.txt`                    |
| `mkdir`   | Create a new directory.              | `mkdir new_directory`                  |
| `rm`      | Remove files or directories.         | `rm file.txt` or `rm -r directory/`   |
| `cp`      | Copy files or directories.           | `cp file.txt newfile.txt`             |
| `mv`      | Move or rename files or directories. | `mv file.txt newfile.txt` or `mv oldname.txt newname.txt` |

### File Manipulation

| Command   | Description                                      | Example Usage                                |
|-----------|--------------------------------------------------|----------------------------------------------|
| `cat`     | Concatenate and display file contents.          | `cat file.txt`                               |
| `head`    | Display the beginning of a file.                | `head -n 10 file.txt`                        |
| `tail`    | Display the end of a file.                      | `tail -n 10 file.txt`                        |
| `nano`    | Text editor for creating/editing files.         | `nano newfile.txt`                           |
| `vim`     | Text editor for creating/editing files.         | `vim newfile.txt`                            |
| `grep`    | Search for text patterns in files.              | `grep "pattern" file.txt`                    |
| `find`    | Search for files and directories.               | `find /path/to/search -name "*.txt"`         |
| `chmod`   | Change file permissions.                         | `chmod 755 file.txt`                         |
| `chown`   | Change file ownership.                           | `chown user:group file.txt`                  |

### System Information

| Command   | Description                         | Example Usage          |
|-----------|-------------------------------------|------------------------|
| `top`     | Display system processes.           | `top`                  |
| `ps`      | List running processes.            | `ps aux`               |
| `df`      | Display disk space usage.          | `df -h`                |
| `du`      | Show directory space usage.        | `du -sh /path/to/dir`  |
| `free`    | Display memory usage.              | `free -m`              |
| `uname`   | Show system information.           | `uname -a`             |

### Networking

| Command   | Description                            | Example Usage                |
|-----------|----------------------------------------|------------------------------|
| `ping`    | Test network connectivity.              | `ping google.com`            |
| `ifconfig`| Display network configuration.          | `ifconfig`                   |
| `ip`      | Display network configuration.          | `ip addr show`               |
| `ssh`     | Securely connect to remote servers.    | `ssh username@hostname`      |
| `scp`     | Securely copy files over SSH.          | `scp file.txt remote:~/`     |
| `curl`    | Download files from the internet.     | `curl -O https://example.com/file.txt` |
| `wget`    | Download files from the internet.     | `wget https://example.com/file.txt`    |
| `netstat` | Network statistics.                    | `netstat -tuln`              |

### Package Management

| Command     | Description                                          | Example Usage                    |
|-------------|------------------------------------------------------|----------------------------------|
| `apt-get`   | Package manager for Debian/Ubuntu systems.           | `apt-get install package_name`  |
| `yum`       | Package manager for CentOS/RHEL systems.            | `yum install package_name`      |
| `dpkg`      | Package management tool for Debian/Ubuntu systems.  | `dpkg -i package.deb`           |
| `rpm`       | Package management tool for CentOS/RHEL systems.    | `rpm -i package.rpm`            |

### Process Control

| Command             | Description                                | Example Usage              |
|---------------------|--------------------------------------------|----------------------------|
| `kill`              | Terminate processes.                       | `kill process_id`         |
| `killall`           | Terminate processes by name.               | `killall process_name`    |
| `ps aux \| grep process_name` | Find and kill a specific process.  | `ps aux \| grep process_name` |

### Compression and Archiving

| Command   | Description                                  | Example Usage            |
|-----------|----------------------------------------------|--------------------------|
| `tar`     | Create and extract tarballs.                | `tar -cvf archive.tar files` or `tar -xvf archive.tar` |
| `zip`     | Compress and decompress ZIP files.          | `zip archive.zip file.txt` or `unzip archive.zip`   |
| `gzip`    | Compress and decompress files using gzip.   | `gzip file.txt` or `gunzip file.txt` or `zcat file.txt.gz` |

### File Transfer

| Command   | Description                                    | Example Usage                  |
|-----------|------------------------------------------------|--------------------------------|
| `ftp`     | Transfer files over FTP protocol.             | `ftp ftp.example.com`          |
| `sftp`    | Transfer files over SFTP protocol.            | `sftp username@hostname`      |
| `rsync`   | Synchronize files and directories.            | `rsync -av source/ destination/` |

## Terminal Text Editors (Nano/VIM)

Terminal text editors are command-line tools that allow you to create, edit, and manipulate text files directly from a terminal or shell. They are useful for a wide range of tasks, from writing code to editing configuration files. Two popular terminal text editors are Vim and Nano. Here's an overview of how to use them:

### Vim
#### Opening Vim:
To open a file in Vim, use the vim command followed by the filename:

```shell
vim filename.txt
```

#### Modes:
Vim has different modes for navigation and editing:

- **Normal mode:** Used for navigation and issuing commands.
- **Insert mode:** Used for editing and typing text.
- **Visual mode:** Used for selecting text.
Basic Navigation:

- **h, j, k, l:** Move left, down, up, or right respectively.
- **w, b:** Move forward or backward by word.
- **0, $:** Move to the beginning or end of the line.
- **gg, G:** Move to the beginning or end of the file.

#### Basic Editing:

- **i:** Enter insert mode before the cursor.
- **a:** Enter insert mode after the cursor.
- **o, O:** Open a new line below or above the current line.
- **x:** Delete the character under the cursor.
- **dd:** Delete the current line.
- **yy:** Copy the current line.
- **p:** Paste copied or cut text after the cursor.

#### Saving and Quitting:

- **:w:** Save changes.
- **:q:** Quit Vim.
- **:wq or :x:** Save and quit.
- **:q!:** Quit without saving.

#### Search and Replace:

- **/search-term:** Search for a term (use n for next occurrence).
- **:s/search-term/replacement:** Replace a term with another.
- **:%s/search-term/replacement/g:** Replace all occurrences in the file.
#### Visual Mode:

- **v:** Enter visual mode to select text.
- **V:** Enter visual line mode to select entire lines.
Selected text can be copied, cut, or replaced.

#### Customization:
Vim is highly customizable. You can configure it by editing the ~/.vimrc file.

### Nano
Opening Nano:
To open a file in Nano, use the nano command followed by the filename:

```shell
nano filename.txt
```

#### Basic Navigation:

- **Arrow keys:** Navigate within the text.
- **Ctrl + F, Ctrl + B:** Scroll forward and backward.
- **Ctrl + U, Ctrl + D:** Page up and down.
- **Ctrl + A, Ctrl + E:** Move to the beginning and end of the line.

Basic Editing:

- Type to insert or edit text.
- **Ctrl + O:** Save changes.
- **Ctrl + X:** Exit Nano.

Search and Replace:

- **Ctrl + W:** Search for a term.
- **Ctrl + \:** Replace a term.
- **Ctrl + T:** Open the search and replace menu.
#### Customization:
Nano is relatively simple compared to Vim but can be customized by editing the ~/.nanorc file.

Both Vim and Nano have many more features and commands to explore. Choosing between them often comes down to personal preference and the complexity of your text editing tasks. Vim is known for its steep learning curve but offers powerful text manipulation capabilities, while Nano is more straightforward and beginner-friendly.



