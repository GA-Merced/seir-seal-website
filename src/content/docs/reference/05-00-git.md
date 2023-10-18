---
title: Git Reference
description: Reference for using Git to version control code
---

### Git Explanation:
Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to collaborate on a project efficiently by providing a history of changes, enabling branching and merging, and ensuring data integrity. Git is widely used in software development to manage code repositories.

### Git Commands:

| Command                  | Description                               | Example Usage                                    |
|--------------------------|-------------------------------------------|--------------------------------------------------|
| `git init`               | Initializes a new Git repository.         | `git init`                                       |
| `git clone`              | Creates a copy of a remote repository.     | `git clone https://github.com/user/repo.git`     |
| `git add`                | Stages changes for commit.                | `git add file.txt`                               |
| `git commit`             | Records staged changes in the repository. | `git commit -m "Add new feature"`                |
| `git pull`               | Fetches changes from a remote repository  | `git pull origin master`                         |
| `git push`               | Pushes local changes to a remote repo.     | `git push origin master`                         |
| `git branch`             | Lists all local branches.                 | `git branch`                                     |
| `git checkout`           | Switches to a specific branch or commit.   | `git checkout feature-branch`                    |
| `git merge`              | Merges changes from one branch into another.| `git merge feature-branch`                      |
| `git status`             | Shows the status of the working directory.| `git status`                                    |
| `git log`                | Displays a history of commits.            | `git log`                                        |
| `git remote`             | Lists remote repositories.                | `git remote -v`                                 |
| `git fetch`              | Retrieves changes from a remote repo.     | `git fetch origin`                               |
| `git reset`              | Unstages changes but keeps them in working directory.| `git reset file.txt`                   |
| `git revert`             | Creates a new commit to reverse previous changes.| `git revert <commit>`                        |
| `git tag`                | Lists or creates annotated tags.          | `git tag -a v1.0 -m "Initial release"`           |
You can copy and paste this raw Markdown code into your document or Markdown-enabled 

### The Role of GitHub:
GitHub is a web-based platform for hosting and managing version-controlled repositories using Git. It serves as a central hub for collaboration, allowing multiple contributors to work on a project simultaneously. GitHub provides features such as code hosting, issue tracking, pull requests, and more, making it an essential tool for software development and collaboration.

#### Here's how GitHub fits into the Git workflow:

**Repository Creation:** GitHub allows users to create remote repositories. These remote repositories serve as a central location where project code and files are stored, and they can be accessed by multiple collaborators.

**Collaboration:** Developers can clone (copy) a remote repository to their local machine, make changes, and then push those changes back to the remote repository on GitHub. Collaboration and code review often happen through pull requests, where changes are proposed and reviewed before being merged into the main branch.

**Version Control:** GitHub provides version control features, allowing developers to track changes, view commit history, and manage different branches of the codebase. This ensures that the project remains organized and that changes can be tracked and reverted if needed.

#### Working with Remotes Using Git Locally:
Now, let's delve into how to work with remotes using Git locally, focusing on git remote, git push, and git pull:

**git remote:**

`git remote` is a Git command used to manage remote repositories.

It allows you to list, add, rename, or remove remote repositories associated with your local repository.
Common git remote commands:

- **git remote -v:** Lists all remote repositories along with their URLs.
- **git remote add <name> <url>:** Adds a new remote repository with a name and URL.
- **git remote rename <old-name> <new-name>:** Renames an existing remote repository.
- **git remote remove <name>:** Removes a remote repository from your local configuration.


**git push:**

`git push` is used to push local changes to a remote repository.

It takes the local changes in your current branch and sends them to the corresponding branch on the remote repository.

Syntax: `git push <remote-name> <branch-name>`

Example: `git push origin main` pushes local changes from the "main" branch to the "main" branch on the remote named "origin."


**git pull:**

git pull is used to fetch and integrate changes from a remote repository into your local branch.

It combines git fetch (to retrieve changes) and git merge (to merge changes into your branch) in a single command.

Syntax: `git pull <remote-name> <branch-name>`

Example: `git pull origin main` fetches changes from the "main" branch on the remote named "origin" and merges them into your current branch.

##### Workflow Example:
Clone a remote repository from GitHub to your local machine using `git clone <repository-url>`.

Make changes to your local copy of the code.

Use git add and git commit to stage and commit your changes locally.

To push your changes to GitHub, use `git push <remote-name> <branch-name>`. For example, `git push origin main`.

If another collaborator has made changes on GitHub, you can fetch and merge those changes into your local branch using `git pull <remote-name> <branch-name>`.

Working with remotes allows you to collaborate effectively with others and keep your local and remote repositories in sync, ensuring a smooth and organized development process.

