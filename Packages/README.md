What is npm?
node package Manager , used to install,update Javascript packages 

what is npm init?
--> It generates Package.json file into the directory. 

Bundler:
Tool combines the all JS code files into Single One that is shipped to production.
types -> parcel,webpack,browserfiy
ex: create-react-app uses webpack bundler behind the scenes.

Package Manager:
To install packages we need to install npm or yarn 
Ex: npm install package__name

Package.json file: It is a configuration file for npm .
--> It contains information about name of project, version, description, test, git repository, Keyowrds,lincense or meta information about project.

Package-lock.json vs Package.json:
--> In package.json the versions are minor updated.
--> In package-lock.json ,it maintains the exact version of those packages even it updated to latest version.

Dependency:Two Types
1. Dev Dependency --> use it in Development Phase(ex:parcel:"^2.9.0" or ex:parcel:"~2.9.0")
2. Normal Dependency --> use it in Production Phase(ex:parcel:"2.9.0")

^ vs ~:
^: only minor updates happen in version
~: major updates happen in versions
so use only ^ for minor updates because when major updates happend it will break our code

                                    parcel
npm i -D parcel --> get package-lock.json

** Parcel features at a glance:**
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

node_modules:
its a npm database
each folder has its own package.json and dependencies
