#Web Development
This tutorial will cover the basics on how to set up a development environment for web development. The following tools are going to be used:
* Git
* Visual Studio Community
* Node.js

###Contents
* Set up Git and GitHub
* Git commands
	* Merge gh-pages
* Set up Visual Studio Community
* Set up Node.js
	* Bower
	* Grunt
* Angular
	* Creating a SPA
	* More Angular
* Bootstrap
	* Header
	* Footer (Sticky Footer)


#Set up Git and GitHub
Firstly download [Git](http://git-scm.com/downloads). I highly recommend to register on [GitHub](https://github.com/), so you can manage your code online.  
Create a new folder on your hard disk. This will be your development folder. Open the Git Bash console window and use the following command to navigate to your directory:
```
cd <path to your dev folder>
```
If your development directory is on a secondary disk (e.g. D:\Development) use the following command to switch to your directory:
```
cd /D/Development
```
Now, go to [GitHub.com](https://github.com/) and create a new repository. Once you chose a suiting name for your project copy the 'clone URL' from the sidebar on your right.
In your Git Bash console window use the following command to clone your repository to your local hard disk:
```
git clone "<URL you just copied>"
```
Execute the command `git pull` to be prompted to enter your GitHub credentials. Aaaand your done! You can now use the Git commands to pull and push commits to GitHub.

#Git Commands
Git provides many commands to manage your repositories, create branches, commit changes and merge it all together. 
However there are some commands you can not avoid using when working with the Git Bash command window. You're about to being introduced to a few of them:
```
git status // shows the status of your current repository
git add <file> // adds a file to your repo
git add --all // adds all files in the directory to your repo
git commit -m "<comment>" // commits all changes; write a comment what changed
git push // pushes all local commits to GitHub (if your repo is linked to GitHub)
git pull // pulls the remote repo and synchronizes with your local repo
git checkout <branch> // change your current branch
```
If you need further information or assistance, these links might be helpful:
* [Cheat-sheet by GitHub](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf) 
* [Simple Git guide](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow)
* [Complete list of Git commands](https://git-scm.com/docs)
* [Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow)

##Merge gh-pages
If your repository contains a web page and you want to publish it on [GitHub Pages](https://pages.github.com/) you need to create a branch called `gh-pages` in your repository.
To keep your master branch and your gh-pages branch in sync, use the following four commands:
```
git checkout gh-pages // go to the gh-pages branch
git merge master // bring gh-pages up to date with master
git push origin gh-pages // commit the changes
git checkout master // return to the master branch
```
_Source: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/_

You can now access your web page via `<username>.github.io/<repo-name>`.

>**Pro-Tip:** Create a repository called `<username>.github.io` (replace `<username>` with your username) to create a home-page which can be accessed by `<username>.github.io`.

#Set up Visual Studio Community
Visual Studio Community is a free version of Visual Studio. Click [here](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) to download.
The installation itself is not demanding. However creating a new web project might be tricky if you're new to the Visual Studio development environment.
To create a new web page chose `FILE > New > Web Site...` from the menu-bar. Chose 'ASP.NET Empty Web Site' and don't forget to change the project path to your development directory.
Once this is done you are basically ready to go. Add an `index.html` file and start your local web server by pressing the play button on the menu-bar to check if it's working.

>**Pro-Tip:** You can already upload your work by now. Use `git add --all` to add all files from your branch. Use `git commit -m "<comment>"` to commit your changes and upload them to GitHub with `git push`. Do this very frequent during development to minimize conflicts.

#Set up Node.js
Node.js is required to use [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/), which are two handy tools when it comes to web development. [Get Node.js here](https://nodejs.org/) first.
After installing Node.js open your Git Bash, switch to your dev directory and enter `npm init` to initialize your project. The node package manager (npm) provides numbers of packages, which can be found [here](https://www.npmjs.com/).
One of them is Bower. Let's take a closer look at it.

##Bower
Bower is a package manager, which let's you download and manage libraries for your project. Furthermore you can update all of the installed packages by one command.
But first, let us set up bower. Use this command:
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

Use `bower search <query>` or go to [their website](http://bower.io/search/) to search through all the packages. Here are some more helpful commands:
```
bower list // lists all installed packages
bower update // updates all installed packages
bower uninstall <package-name> --save // removes a package
```

Some packages you might want to take a look at:
* [jQuery](http://jquery.org/)
* [Angular](http://angularjs.org/)
* [Bootstrap](http://getbootstrap.com/)
* [FontAwesome](http://fontawesome.io/)

##Grunt
Grunt let's you automate simple tasks such as minifying javascript files, process less files or wire dependencies. Especially the last one is extremely helpful.
Let's get a look at how we can set this up.  
First we need to install Grunt by using the command `npm install grunt-cli --save-dev`. Once this is done we need a Gruntfile which contains the tasks.
Create a new JavaScript file next to your index.html and copy the following into the Gruntfile:
```
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('default', []);

};
```
This is the base of a Gruntfile. Now let's install this "wiredep" you heard of before. Execute the following command:
```
npm install grunt-wiredep
```
To configure and load this task we need to make some additions to our Gruntfile:
```javascript
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		wiredep: { // define and configure the task
            task: {
                src: [
                    '**/*.html'
                ],

                options: {

                }
            }
        }
    });
	
    grunt.loadNpmTasks('grunt-wiredep'); // load the task
	
    grunt.registerTask('default', [
        'wiredep' // register the defined task
    ]);
};
```
Once this is done your almost ready to go. Make the following changes to your index.html:
```html
<!DOCTYPE html>
<html ...>
	<head ...>
		...
		<!-- bower:css -->
		<!-- endbower -->
		...
	</head>
	<body ...>
		...
		<!-- bower:js -->
		<!-- endbower -->
		...
	</body>
</html>
```
When now running the command `grunt` in your Git Bash window, the default task will run. And as we registered `wiredep` to the `default` task, it will be executed.
This command will now find all JavaScript and CSS files thanks to the `--save` parameter from Bower and refer to their location. Try it!

#Angular
[Angular](https://angularjs.org/) is a framework by Google. Angular (or AngularJS) let's you create controllers, services and filters. I know, this doesn't sound very promising. 
But wait until you see what you can do with these. Let's make a SPA (single page application) powered by Angular out of our lame webpage. 

##Creating a SPA
The first thing you need to do after installing `angular` and `angular-route` with Bower is to create an `app.js` JavaScript file. This file contains the following:
```javascript
var appName = 'app';  // 'app' can be changed to whatever you want to name your SPA

(function(moduleId, ng) {
    'use strict'; // to use the strict mode

    var app = ng.module(moduleId, [
		// modules go here
		'ngRoute'
    ]);

    app.run(['$route', main]);
	
	function main($route) { }

})(appName, angular);
```
Go to the index.html and add `ng-app="app"` to the HTML-element as an attribute. Note that the value of `ng-app` must be the same as the one in the app.js. Add a reference to the `app.js` so things get initialized.
Oh, and while you're here in the index.html: There's a thing I want you to do. Clear all content elements from your index.html as the content will be on the individual pages and not the "master page".
Just make your index.html look similar to the following:
```html
<!DOCTYPE html>
<html ng-app="app">
	<head>
		<title>Homepage</title>
        <meta charset="UTF-8">
		
		<!-- bower:css -->
        <link rel="stylesheet" href="path/to/style.css" />
        ...
        <!-- endbower -->
	</head>
	<body>
		<!-- bower:js -->
        <script src="bower_components/angular/angular.js"></script> <- this should be added automatically after running grunt
		...
        <!-- endbower -->
		
		<!-- app.js -->
        <script src="app.js"></script>
	</body>
</html>
```
You see, everything but the references to the JavaScript and CSS files have been removed. Of course you can keep META-Tags and the Title.
But no DIVs or any content element will be placed in your index.html from now on... Except for the following:
```html
<div ng-include="src='shell/shell.html'"></div>
```
Place this element as the first element inside of the HTML body. The path to the shell.html can vary. It depends on how you structure your website.
But let's keep this structure for this tutorial. So, you need to create a folder called "shell" and create a "shell.html" file in it.
This shell.html basically contains header, footer and content and looks like the following:
```html
<div>
	<div ng-include="src='shell/header.html'"></div>

	<div class="container">
		<div ng-view></div>
	</div>
	
	<div ng-include="src='shell/footer.html'"></div>
</div>
```
The header.html and footer.html can contain whatever you like. The DIV-element with the `ng-view` attribute however **must be empty**. This element will render the current route.
More to that later. The `container` class is part of Bootstrap. Check it out as it provides various styling options.

Next up, we're adding "routing". The advantage of Angular routing is that we can access a route which is not physically existent. For example `example.com/#/about` is still the same page,
but the page displays the content of the route `about` using the `ng-view` attribute. Sounds a bit confusing? Don't worry. I'm here to guide you ;)

So, let's start by defining our routes. Create a new folder called `routes` and create the JavaScript file `routes.js` in it.
Routes are configured as following:
```javascript
(function (moduleId, valueId, ng) {
    'use strict';

    var value = [
        {
            url: '/', // default route
            config: {
                controller: 'home as vm', // controller for this route ('as vm' declares an alias for the controller)
                templateUrl: 'templates/home.html' // the template html file which contains the content to this route
            }
        },
        {
            url: '/about', // 'about' route (example.com/#/about
            config: {
                controller: 'about as vm',
                templateUrl: 'templates/about.html'
            }
        }
    ];

    ng.module(moduleId).constant(valueId, value); // object array is set to a global constant called 'routes'

})(appName, 'routes', angular);
```
These lines of code defined two routes: The default route and the `about` route. Are things getting clearer? Don't forget to add the reference of `routes.js` to the index.html.
So, we defined our routes. The next step is to load them into the Angular `$routesProvider`. The following snippet can be copy-pasted:
```javascript
(function (moduleId, ng) {
    'use strict';

    ng.module(moduleId).config([
        '$routeProvider',
        'routes', // global routes constant
        config
    ]);

    function config($routeProvider, routes) {
        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({redirectTo: '/'})
    }

})(appName, angular);
```
Save the above to a new file and name it something like `routes.config.js` or so and put it in the `routes` folder.
Refer to the file in the index.html so it gets called. Now we are almost done. All we need is a controller and the associated template.
Let's get the controller done first as it is quite simple. The controller is used to bind data to the view (or template). Controllers are created like this:
```javascript
(function(moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [
		// inject services here
    ]);

    function controller(mainService, webSocketService) {
        var vm = this;

		vm.title = 'Welcome, Home!';
		
        // code, code, code...
    }

})(appName, 'home', angular); // change 'home' to whatever you need to

```
This is basically the controller base. Note that the name of the controller you set when defining your routes is the same as the controllers name you set here.
Save the controller as `home.js` in the `controllers` folder and refer to it in the index.html. Controller done, let's move on.

The template to our controller is actually simpler because all you need to do is create an HTML file.
You end up with the following `home.html` template:
```html
<div>
	<h1>{{vm.title}}<h1>

	<!-- content, content, content ...-->
</div>
```
Create a new folder called `templates` and save this to it. Et voilà! All set up. You can now do the same process to the `about` route and check if it's working.
If you want to link to another route, do it like this: `<a href="#/about">About</a>`. The `#` is important, because we are only on a "virtual" route.

##Want more Angular?
The above shows only one of the many features Angular provides. However explaining every single of them would end up in a tutorial on its own.
Therefore I link you the most useful sites right here (I'm so kind):
* [Services](https://docs.angularjs.org/guide/services)
* [Filters](https://docs.angularjs.org/guide/filter)
* [Directives](https://docs.angularjs.org/guide/directive)
* [Controllers](https://docs.angularjs.org/guide/controller)
* More
	* [API Reference](https://docs.angularjs.org/api)
	* [Developer Guide](https://docs.angularjs.org/guide)

#Bootstrap
Bootstrap provides a number of controls for you HTML page. It features navbars, dropdowns and many more. The style and colors are fully customizable and make your website look good on both, desktop and mobile.
To cover all features and templates would take a tutorial on its own. So I recommend [checking out their website](http://getbootstrap.com/) to pick the controls which suit best for your demands.
BUT... our site still needs a header and a footer. So here is how it's done.

##Header
First create the `header.html` and `footer.html` files in the `shell` folder if you haven't already. As our header we are going to use the navbar template. This is how it looks:
```html
<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="#/" class="navbar-brand">
                <i class="fa fa-play-circle-o"></i>
                My Website
            </a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#/">Home</a></li>
                <li><a href="#/about">About</a></li>
            </ul>
            <form action="http://google.ch/search" class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <div class="input-group">
                        <input name="q" type="text" class="form-control" placeholder="Search on Google...">
                        <div class="input-group-btn">
                            <button type="submit" class="btn btn-primary">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</nav>
```
With this template you already have a nice looking header. 
If you want to change it a bit (and I'm sure you do) I recommend checking out the [Bootstrap docs](http://getbootstrap.com/components/#navbar).
Now, let's move on the footer.

##Footer (Sticky Footer)
Unfortunately Bootstrap does not provide a finished template for footers. So we kinda have to create our own. The good thing is we are going to create a "sticky footer".
This means our footer will always stay at the bottom of the page. No matter how big the window is or how much content the page presents.
[Here is an example](http://getbootstrap.com/examples/sticky-footer/) if you didn't quite understand what a sticky footer is supposed to look like.  
Now let's get one done by ourself. Firstly, we need a little bit of CSS:
```css
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 50px; /* Margin bottom by footer height */
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;  
  height: 50px; /* Set the fixed height of the footer here */
  background-color: #f5f5f5;
}

.footer > .container > p {
    margin: 15px 0;
}
```
Save these lines of CSS into a file called `sticky-footer.css` or so and put it into the `css` folder. Refer to this file on the `index.html`.
It's important that the **`footer.height` and the `body.margin-bottom` have the same value**, because the footer has a fixed height.
We are now ready to set the `footer.html`. Put something similar to this in your footer.html:
```html
<div>
	<div class="footer"> <- footer class
		<div class="container">
			<p>
				<a href="#/about">About</a>
			</p>
		</div>
	</div>
</div>
```
The `about` route can now be accessed via our newly created footer. Simple, isn't it? Notice that the `footer` class must be set.
Otherwise the sticky footer will not work as intended. You can also customize the `sticky-footer.css` to create a footer which suits best for your page.

#Finally...
Phew... So, that's about it. Now you've been introduced to web development. I hope you enjoyed this tutorial and wish you the best for your future projects :D

Sincerely Michael

PS: I'd like to get some feedback about this tutorial. So if you got time, [send me a mail](mailto:michael.buholzer@zeitag.ch). Of course you can also ask for help if you're stuck or request further information and resources. ;)