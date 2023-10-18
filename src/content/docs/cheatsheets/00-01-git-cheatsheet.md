---
title: Git Cheatsheet
description: Git Cheatsheet
---

# Git Commands and Flags

## Creating a Git Repo

| Command                        | Description                        |
|--------------------------------|------------------------------------|
| `git init`                     | Initialize a new Git repository.  |
| `git init <directory>`         | Create a Git repository in the specified directory. |
| `git clone <repository>`       | Clone an existing Git repository from a URL. |

## Adding Files to Staging

| Command                        | Description                        |
|--------------------------------|------------------------------------|
| `git add <file>`               | Add a specific file to the staging area. |
| `git add .`                    | Add all changes in the current directory to the staging area. |
| `git add -A`                   | Add all changes in the working directory to the staging area, including untracked files. |
| `git add -u`                   | Add all changes in the working directory to the staging area, excluding untracked files. |

## Committing Files

| Command                        | Description                        |
|--------------------------------|------------------------------------|
| `git commit -m "message"`      | Commit changes with a descriptive message. |
| `git commit -a -m "message"`   | Commit all changes (both staged and tracked) with a message. |
| `git commit --amend`           | Amend the last commit by adding staged changes to it. |
| `git commit --amend -m "new message"` | Amend the last commit and change its commit message. |
| `git commit --allow-empty -m "message"` | Create an empty commit with a message. |

# Rolling Back and Reverting in Git

## Rolling Back Commits

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git reset <commit>`                | Move the branch pointer to a specific commit, discarding subsequent commits. |
| `git reset --hard <commit>`         | Reset the branch pointer and working directory to a specific commit, discarding all changes. |
| `git reset --soft <commit>`         | Reset the branch pointer to a specific commit, keeping changes staged for a new commit. |

## Reverting Commits

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git revert <commit>`               | Create a new commit that undoes changes introduced by a specific commit. |
| `git revert -n <commit>`            | Revert a commit but do not automatically commit the changes, allowing you to modify them before committing. |

# Working with Remote Repositories

## Managing Remote Repositories

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git remote add <name> <url>`      | Add a remote repository with a specified name and URL. |
| `git remote -v`                    | List all remote repositories with their URLs. |
| `git remote rename <old> <new>`    | Rename a remote repository. |
| `git remote remove <name>`          | Remove a remote repository. |

## Fetching and Pulling

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git fetch <remote>`               | Fetch changes from a remote repository without merging them. |
| `git pull <remote> <branch>`       | Fetch changes from a remote branch and merge them into the current branch. |

## Pushing Changes

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git push <remote> <branch>`       | Push local commits to a remote branch. |
| `git push -u <remote> <branch>`    | Set the upstream branch for the current branch, simplifying future pushes. |
| `git push --tags`                  | Push tags to a remote repository. |

# Viewing Git Logs

## Viewing Commit Logs

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git log`                          | Display a detailed log of all commits in the current branch. |
| `git log --oneline`                | Display a concise log with one commit per line. |
| `git log --graph`                  | Visualize the commit history as a graph. |
| `git log --author=<author>`        | View commits by a specific author. |
| `git log --since=<date>`           | View commits since a specific date. |
| `git log --grep=<pattern>`         | Search for commits containing a specific pattern in the commit message. |

## Viewing File Changes

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git diff`                         | Display the differences between the working directory and the last commit. |
| `git diff <commit>`                | Display differences between the working directory and a specific commit. |
| `git diff <commit1>..<commit2>`    | Display differences between two specific commits. |
| `git log -p`                       | View commit log with detailed changes (patch). |

# Branching and Merging

## Branching

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git branch`                       | List all local branches.               |
| `git branch <branch>`              | Create a new branch.                  |
| `git branch -d <branch>`           | Delete a local branch.                |
| `git branch -m <new-name>`         | Rename the current branch.            |

## Switching Branches

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git checkout <branch>`            | Switch to an existing branch.         |
| `git checkout -b <new-branch>`     | Create and switch to a new branch.    |

## Merging

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git merge <branch>`               | Merge changes from another branch into the current branch. |
| `git merge --no-ff <branch>`       | Perform a non-fast-forward merge, preserving the branch's history. |

## Resolving Merge Conflicts

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git status`                       | Check the status of merge conflicts.  |
| Resolve conflicts manually         | Edit conflicting files, then `git add` and `git commit`. |
| `git merge --abort`                | Abort a merge in progress.            |

# Rebasing

## Rebasing

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git rebase <branch>`              | Rebase the current branch onto another branch. |
| `git rebase -i <commit>`           | Interactive rebase to edit, squash, or reorder commits. |

## Interactive Rebase Commands

In an interactive rebase (`git rebase -i`), you can choose commands for each commit:

- `pick`: Use the commit as-is.
- `edit`: Pause rebase to make changes.
- `squash` or `fixup`: Combine a commit with the previous one.
- `reword`: Change the commit message.
- `drop`: Remove a commit.

# Cherrypicking

## Cherrypicking

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git cherry-pick <commit>`         | Apply changes from a specific commit to the current branch. |
| `git cherry-pick -x <commit>`      | Cherrypick and include a reference to the original commit. |

## Cherrypicking Ranges

| Command                            | Description                            |
|------------------------------------|----------------------------------------|
| `git cherry-pick <start>..<end>`   | Apply a range of commits to the current branch. |
| `git cherry-pick <commit1> <commit2> ...` | Cherrypick multiple individual commits. |

# Configuring Git Settings

## User Configuration

| Command                                    | Description                            |
|--------------------------------------------|----------------------------------------|
| `git config --global user.name "Your Name"` | Set the global Git username.           |
| `git config --global user.email "you@example.com"` | Set the global Git email address. |
| `git config user.name "Your Name"`         | Set the repository-specific Git username. |
| `git config user.email "you@example.com"`   | Set the repository-specific Git email address. |

## Aliases

| Command                                    | Description                            |
|--------------------------------------------|----------------------------------------|
| `git config --global alias.<alias-name> "<actual-command>"` | Create a global Git alias. |
| `git config alias.<alias-name> "<actual-command>"` | Create a repository-specific Git alias. |

## Default Branch Name

| Command                                    | Description                            |
|--------------------------------------------|----------------------------------------|
| `git config --global init.defaultBranch "main"` | Set the default branch name for new repositories globally. |
| `git config init.defaultBranch "main"`      | Set the default branch name for new repositories in the current directory. |

## Editor Configuration

| Command                                    | Description                            |
|--------------------------------------------|----------------------------------------|
| `git config --global core.editor "editor-command"` | Set the global text editor for Git commit messages. |
| `git config core.editor "editor-command"`   | Set the repository-specific text editor for Git commit messages. |

## Display Configuration

| Command                                    | Description                            |
|--------------------------------------------|----------------------------------------|
| `git config --global color.ui "auto"`       | Enable colorized output for Git commands globally. |
| `git config color.ui "auto"`                | Enable colorized output for Git commands in the current repository. |
| `git config --global core.pager "pager-command"` | Set the global pager (for long output) for Git commands. |
| `git config core.pager "pager-command"`     | Set the repository-specific pager for Git commands. |

## Ignore Files

| Command                                    | Description                            |
|--------------------------------------------|----------------------------------------|
| `git config --global core.excludesfile "~/.gitignore"` | Set a global `.gitignore` file for patterns to ignore. |
| `git config core.excludesfile ".gitignore"` | Set a repository-specific `.gitignore` file. |

