---
title: Git For Class Cheatsheet
description: Cheatsheet for Class Git Usage
---

## Getting Git Initially Setup

- Create a github.com account
- make sure git is installed `git --version`
- configure github commiter info
```
git config --global user.name "Your Name"
git config --global user.email "name@email.com"
```
- Add an SSH-Key for your github account
  - navigate to .ssh folder `cd ~/.ssh`
  - create an ssh key in the .ssh folder with the right encryption for github security and you github account email
  ```
  ssh-keygen -t ed25519 -C "your_email@example.com"
  ```
  - get the contents of the public key `cat key.pub`
  - copy the public key into github.com at settings > ssh & gpg keys


## Git For Homework

### Creating the Repo
1. create an empty folder `mkdir <name>`
2. cd into that folder `cd <name>`
3. initialized the repo `git init`

### Committing your work
1. add files to staging `git add .`
2. commit `git commit -m "message"`

### Push work to github.com
1. Create a new repo github.com
2. copy the url https/ssh for the repo
3. add the remote repo to your local repo `git remote add origin <url>`
4. push up the commits `git push origin main` or `git push origin master`

### After remote is setup you just to send updates
1. `git add .`
2. `git commit -m "message"`
3. `git push origin main`

### misc commands
1. see the status of your repo `git status`
1. see what branch you are on `git branch`
1. see previous commits `git log`
1. see list of remotes `git remote -v`
1. remove the origin remote so you can readd it `git remote rm origin`