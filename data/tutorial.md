#Web Development
In this tutorial I'll describe how to set up a environment for web development. We are going to use the following tools to achieve this:
* Git
* Visual Studio Community
* Node.js

#Set up Git and GitHub
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

#Set up Visual Studio Community
Viusal Studio Community is a free version of Visual Studio. Click [here](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) to download.
The installation itself is not demanding. However creating a new web project might be tricky if you're new to the Visual Studio Development Environment.
To create a new web page chose `FILE > New > Web Site...` from the menu-bar. Chose 'ASP.NET Empty Web Site' and don't forget to change the project path to your development directory.
Once this is done you are basically ready to go. Add an `index.html` file and start your local web server by pressing the play button on the menu-bar to check if it's working.

#Set up Node.js
Node.js is required to use [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/), which are two handy tools when it comes to web development. [Get Node.js here](https://nodejs.org/) first.
After installing Node.js open your Git Bash, switch to your dev directory and enter `npm init` to initialize your project. After the initialization has finished enter the following command:
```
npm install bower --save-dev
```
This command will install the package manager Bower and saves its dependencies to the package.json. 
Enter `bower init` to initialize Bower. You can now install packages by using Bower:
```
bower install <package-name> --save

//for example
bower install angular --save
```

The `--save` parameter saves the package and its dependencies to the bower.json. This comes handy when we're using Grunt and `wiredep`. But more to that later. ;)

#Git Commands
TBD

##Git merge gh-pages
If your repository contains a web page and you want to publish it on [GitHub Pages](https://pages.github.com/) you need to create a branch called `gh-pages` in your repository.
To keep your master branch and your gh-pages branch in sync, use the following command:
```javascript
git checkout gh-pages // go to the gh-pages branch
git merge master // bring gh-pages up to date with master
git push origin gh-pages // commit the changes
git checkout master // return to the master branch
```
_Source: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/_

You can now access your web page via `<username>.github.io/<repo-name>`.

>**Pro-Tip:** Create a repository called `<username>.github.io` (replace [<]username[>] with your username) to create a home-page which can be accessed by `<username>.github.io`.
