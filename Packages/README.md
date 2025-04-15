# What is npm?
Node package Manager.
It is used to install, update Javascript packages.

# what is npx?
It is a tool that executes node packages.
ex:npx parcel index.html

# what is npm init?
It generates Package.json file into the directory. 

# Bundler:
Tool combines the all JS code files into Single One that is shipped to production.

Types of bundlers -> parcel, webpack, browserfiy

Ex: create-react-app uses webpack bundler behind the scenes.

# Package Manager:
Bundlers are packages. If we want to use a package in our code, we have to use a package manager.
We use a package manager known as npm or yarn

Ex: npm install package__name

# Package.json file:
It is a configuration file for npm .

--> It contains information about name of project, version, description, test, git repository, Keyowrds,lincense or meta information about project.

# What is difference between package.json and package.lock.json?
In package. json we have information about generic version of installed packages whereas in package.lock.json we have information 
about the specific or exact version of installed packages

# What is difference between `dependencies` vs `devDependencies`?

✔ Use dependencies → If the package is needed in production Phase (e.g., react, express).
✔ Use devDependencies → If the package is only for development Phase (e.g., eslint, jest, webpack,parcel).

# ^ vs ~:

^: only minor updates happen in versions.

~: major updates happen in versions.

so use only ^ for minor updates because when major updates happend it will break our code

# parcel
npm i -D parcel --> get package-lock.json and node_modules

# Parcel features at a glance:
1. Hot Module Replacement (HMR) --> when file is saved automaticaly updates the content
2. File Watcher Algorithm - C++ --> tracks of all files which are changing in real-time
3. Bundling
4. Minify Code
5. Cleaning our code
6. Dev and production build --> npx parcel build index.html
7. Super fast build algorithm
8. Image Optimization
9. Caching while development
10. Compression
11. Compatible with older browser versions
12. Https on dev 
13. Image Optimization
14. Port No --> it will create server like localhost:1234
15. Consistency Hashing Algorithm
16. Zero Config
17. Tree Shaking --> It removes unused code from file
this all features of parcel makes the react app faster

# node_modules:
its a npm database
each folder has its own package.json and dependencies

# package-lock.json:
Package-lock.json locks the exact version of packages being used in the project.

# What is .parcel-cache?
The .parcel-cache/ folder is created by Parcel, a zero-config bundler for JavaScript, CSS, HTML, and assets.
If we make any code changes and save the application, another build will be triggered which might take even less time than the previous build.
This reduction of time is due to parcel cache.
Purpose of .parcel-cache/
It stores cached build files to speed up future builds.
Parcel reuses unchanged files instead of rebuilding everything from scratch, making incremental builds much faster.
It helps reduce compilation time, especially for large projects.

# What is the `dist` folder? 
It creates a lot of things, minify your file.And the parcel will build all the production files to the dist folder

# Tree Shaking:
Tree shaking is a process of removing the unwanted code that we do not use while developing the application. 
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

# Hot Module Replacement (HMR):
It means that parcel will keep a track of all the files which you are updating.
There is File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and it 
tells the server to reload.These are all done by PARCEL
