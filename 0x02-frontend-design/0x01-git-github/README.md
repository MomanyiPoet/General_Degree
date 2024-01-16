## INTRODUCTION TO GIT CLI, GITHUB

## Table of contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Screenshot](#screenshot)
- [Setting Up Git](#setting-up-git)
- [Basic Git Commands](#basic-git-commands)
- [Branching and Merging](#branching-and-merging)
- [Working with Remote Repositories](#working-with-remote-repositories)
- [Collaboration on GitHub](#collaboration-on-gitHub)
- [GitHub Workflow](#gitHub-workflow)
- [Advanced Git Topics](#advanced-git-topics)
- [Best Practices](#best-practices)
- [Conclusion](#conclusion)
- [Author](#author)


## Overview

### Introduction
- **Git** is a distributed version control system used to track changes in source code during software development. It allows multiple developers to collaborate on projects while keeping a complete history of changes.

- **GitHub** is a web-based platform for hosting Git repositories. It offers collaboration features such as issue tracking, pull requests, and code review, making it a popular choice for open-source and private projects.


### Screenshot
![Alt text](githubgit.png)


## Setting Up Git
- Install Git: Download and install Git from the official website (https://git-scm.com/).
- Configure Git: Set your username and email address, which will be associated with your Git commits.
```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
- Authentication: If you plan to use GitHub, set up SSH keys or token-based authentication for secure access.


## Basic Git Commands
```bash
git init #Initializes a new Git repository in the current directory.

git clone #Creates a local copy of a remote repository.
git clone https://{personal-access-token}@github.com/MomanyiPoet/learning_git.git

git status #Shows the current status of your working directory, including untracked and modified files.

git add #Stages changes for commit.
git add README.md
git add .

git commit -m "Commit message" #Commits staged changes with a descriptive message.

git push origin #Pushes commits to a remote repository.

git pull origin #Fetches changes from a remote repository and merges them into the current branch.
```


## Branching and Merging
```bash
git branch #Lists existing branches and shows the current branch with an asterisk (*).

git checkout (branchname) #Switches to an existing branch.

git checkout -b (newbranchname) #Creates and switches to a new branch.

git merge (branchname) #Merges changes from one branch into the current branch.

git rebase (branchname) #Incorporates changes from one branch into another by replaying commits.
```


## Working with Remote Repositories
```bash
git remote add origin (repository-url) #Links your local repository to a remote repository.

git fetch origin #Retrieves changes from the remote repository without merging.

git pull origin (branch) #Fetches and merges changes from a remote branch.

git push origin (branch) #Pushes local commits to a remote branch.
```


## Collaboration on GitHub
```bash
Forking #Create a personal copy of a repository on GitHub to work on changes independently.

Pull Requests (PRs) #Propose changes by submitting a pull request from your fork to the original repository.

Code Reviews #Collaborators review and discuss proposed changes in PRs.

Issues #Report and track bugs, feature requests, and tasks.
```


## GitHub Workflow
- Fork the repository on GitHub.
- Clone your forked repository to your local machine.
- Create a new branch for your feature or bug fix.
- Make changes, commit, and push them to your fork.
- Create a pull request on GitHub.
- Collaborate, review, and make additional commits if necessary.
- Once approved, your changes are merged into the main repository.


## Advanced Git Topics
```bash
Stashing #\Temporarily save changes that are not ready for commit.
Reset and Revert #Undo changes in your repository.
Cherry-Pick #Apply specific commits from one branch to another.
Submodules #Include other Git repositories as submodules within your project.
```


## Best Practices
- Keep commits focused and concise with clear commit messages.
- Use branches for different features or bug fixes.
- Regularly pull changes from the main repository to keep your fork up-to-date.
- Collaborate effectively through comments, PR reviews, and issue tracking.


## Conclusion
> Mastering Git and GitHub is essential for modern software development and collaboration. This guide provides a solid foundation to get started with Git and GitHub, but there's much more to explore. As you gain experience, you'll discover additional features and workflows that enhance your productivity and effectiveness as a developer.


### Useful Resources
- Git and GitHub - [freecodecamp](https://www.youtube.com/watch?v=RGOj5yH7evk)
- Git, GitHub, GitHub Desktop - [Coder Coder](https://www.youtube.com/watch?v=8Dd7KRpKeaE&t=666s)

**More content to be added, feel free to add any engaging content**

## Author

- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)