# Deployment

## Class Structure
- Welcome to Class
- Do the warm up exercise
- Go over Learning Objectives
- Deliver Lesson
- Go over Learning Objectives
- Review the Final Project
- Closing Questions / Tying up loose ends
- Exit Tickets


## Deployment
__Cover the basics of deployment__
Deployment is the process of getting the application on to the internet - broadly speaking.

Little more nuanced than that -  our application is going to run on a server somewhere - just like it does on our own laptops - with all the dependencies we need, with a database set up, and any other environment configuration that we need.

If you've ever hosted a website with something like BlueHost or GoDaddy, this is the exact same thing. Except, we need a little bit more control of the server itself.

That said - not every site we've built has relied on a server and not every website uses a "server" like express.

Deploying and hosting these different kinds of sites/applications is different. Hosting options are different.

I'm going to talk about static deployment and hosting and Christine is going to talk about dynamic hosting and deployment.

### Static deployment and hosting
__Hosting on GitHub Pages, branching, static sites, etc__
Static applications are harder and harder to define now-a-days, but basically it means that we either don't need a server and database to run our application or that our application is decoupled from our server and database.

If we look at the diagram of a full stack application - if the front end is not delivered by the back end, then we can deliver the front end statically.

What this means it that our final HTML, CSS and JS all already exist - we're not doing any compilation at run time - so we can serve these and any other assets statically - as they are.

An example of a static application that we've built is Pixart. For that application, we had a single html file, css file and js file and all the logic for that application was contained within those three files. In this case, there is no communication with a backend. So we can deliver this application to our users with a static hosting option - like a content delivery network (CDN).

For this, we're going to use GitHub Pages, which is an option for hosting static sites straight from the repository where the code is maintained and is free for GitHub users.

### Deploying to GH Pages
- create a repository
- clone that repository locally
- add some files to it ( add the pixart application )
- push that up to master and check to see if it's working
- check out the gh-pages branch and push the gh-pages branch
- navigate to the website and see it live

### Dynamic deployment and hosting (Heroku)

Dynamic websites differ from static websites in that they do more things that our web browsers can identify. For example - if you are buying something online, it's easy to understand that the prices and the availability of that item are dynamically recovered from some data, generally stored in databases.

This process of recovering data and processing it before responding to our browsers as web pages containing that information, is called server-side processing.

With the advent of processing server-side scripts, came forward Web Content Management Systems, allowing us to create and maintain databases connected to the internet. Websites with server-side processing are referred to as web applications.

The downside of server-side based websites is their vulnerabilities. Security issues are common among them and there are a lot of measures we need to take to prevent attacks.We need to protect our users, our site, and our server.

(Show the comparison between static and dynamic image)

-The client sends an HTTP request to the server - which dispatches the request to the application server
-The application server may request data from a database first, and then constructs the HTTP response based on the data recovered from the database
-The response is passed back to the web server, which returns the HTML file, constructed by the application server, to the client, via HTTP response
** This is called server-side processing

The big takeaway is, dynamic webpages are not served as-is by the web server as static pages are. They are constructed for every HTTP request sent by each client.


### Environments
- Development Environment:
- Typically developers should have their own development computer (physical or virtual) with the necessary software installed.
- Testing Environment:
- Unit testing can be completed in a Virtual Server environment. You should, however, conduct your performance testing in a physical environment with hardware and software that is identical to the production environment.
- Staging Environment:
- You typically use the staging environment to "unit test" the actual deployment of the solution. The software installed in the staging environment should closely match the software installed in the production environment. It may, however, be acceptable to use computers running Virtual Server in the staging environment since this environment is not to be used for measuring performance.
- Production Environment
  The production environment is the "live" environment that will host the running application. The production environment is the final endpoint in the release management process and should only host applications that have previously undergone development, unit testing, load testing, and staging in the other environments. Thorough unit testing, load testing, and staging beforehand will help ensure maximum performance and uptime for the application in the production environment.


#### What is Heroku
- Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps
- Heroku can deploy applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP
- An application is a collection of source code written in one of these languages,perhaps a framework, and some dependency description that instructs a build system as to which additional dependencies are needed in order to build and run the application (i.e.: your package.json file)
- Your source code, along with the dependency file should provide enough information for the Heroku platform to build your application, to produce something that can be executed
- You don't need to make any changes to an application in order to run it on Heroku- one requirement is informing the platform as to which parts of your application are runnable
- If you’re using some established framework, Heroku can figure it out. For example, in Ruby on Rails, it’s typically rails server, in Django it’s python <app>/manage.py runserver and in Node.js it’s the main field in package.json.



#### Deploying applications
- Git is the powerful, distributed version control system that we've all been using to manage and version our source code
- Heroku uses git as the primary means for deploying applications
- When you create an application on Heroku, it associates a new git remote, typically named 'heroku', with the local git repository for your application
- As a result, deploying code is just the familiar 'git push', but to the heroku remote instead: $ git push heroku master



#### Building applications
- When the Heroku platofrm receives the application source, it initiates a build of the source application.
- The build mechanism is typically language specific, but follows the same pattern, typically retrieving the specified dependenceis and creating any necessary assets
- The source code for your applicaiton, together with the fetched dependencies and output of the build phase such as generated assets of compiled code, as well as the language and framework, are assembled into a 'Slug' - the bundle of all these parts ready for execution
- These slugs are fundamental to what happens during application execution, they contain your compiled, assembled application - ready to run - together with the instructions(the Procfile) oh what you may want to execute



#### Running applications on dynos
- Heroku executes applications by running a command you specified in the Procfile, on a dyno that's been preloaded with your prepared slug
- Think of a running dyno as a lightweight, secure, virtualized Unix container that contains your application slug in its file system. They provide the environment required to run an application
- Generally, if you deploy for the first time, Heroku will run 1 web dyno automatically. In other words, it will boot a dyno, load it with your slug, and exercute the command you've associated with the web rpocess type in your Procfile
- Dynos are an important means of scaling your application.

#### Config vars
- An application's configuration is everything that is likely to var between environments (staging, production, dev environments etc) This includes backing services such as databases, credentials, or env variables that provide some specific information to your application
- Heroku lets you run your application with a customizable configuration - the config sits outside of your application code and can be changed independently of it
- The config for an application is stored in config vars. At runtime, all of the config vars are exposed as environment variables so they can be easily extracted programatically. All dynos in an  application will have access to the exact same set of config vars at runtime
