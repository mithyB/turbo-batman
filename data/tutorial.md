# Web Development
In this tutorial I'll describe how to set up a environment for web development. We are going to use the following tools to achieve this:
* Git
* Visual Studio Community
* Node.js

# Set up Git and GitHub
Firstly download [Git](http://git-scm.com/downloads). I highly recommend to register over at [GitHub](https://github.com/), so you can manage your code online.
Create a new folder on your hard disk. This will be your development folder. Open the Git Bash console window and use the following command to navigate to your directory:
```
cd /path/to/dev
```
If your development directory is on a secondary disk (e.g. D:\Development) use the following command to switch to your directory:
```
cd /D/Development
```
Now, go to [GitHub.com](https://github.com/) and create a new repository. Once you chose a suiting name for your future work copy the 'clone URL' from the sidebar on your right.
In your Git Bash console window use the following command to clone your repository to your local hard disk:
```
git clone "<URL you just copied>"
```
Execute the command `git pull` to be prompted to enter your GitHub credentials. Aaaand your done! You can now use the Git commands to pull and push commits to GitHub.

# Set up Visual Studio Community
TBD

# Set up Node.js
TBD

# Git Commands
TBD

# Git merge gh-pages
```javascript
git checkout gh-pages // go to the gh-pages branch
git merge master // bring gh-pages up to date with master
git push origin gh-pages // commit the changes
git checkout master // return to the master branch
```
source: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/
