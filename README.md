Устанавливаем на компьютер NODE.JS - LTS VERSION
https://nodejs.org/en/

Установить GIT
https://github.com/git-guides/install-git

Установить последнюю версию Google Chrome
https://www.google.ru/chrome/

Установить VSCODE
https://code.visualstudio.com/download

Инициализируем проект и создаем GIT репозиторий

git init
git add .
git commit -m "Initial commit"

<!-- project url для GIT, в нашем случае # node_express_angular_fs -->

git branch -M main
git remote add origin https://github.com/GreenBigem/owlsys.git <!-- git remote add origin <project url> -->
git push -u origin main

<!-- Создаем .gitignore, чтобы не отправлять в репощиторий не нужные файлы. -->

Check npm version
npm -v

Initializing project
npm init

then create entry point, for example index.js

Because of our app will use epress, we need to install express.js
npm install express

To see changes while working with app, we install NODEMON
npm instal nodemon --save-dev

Install body-parser
npm i body-parser

npm install cors

npm install morgan

npm install mongoose

for jwt
google bcryptjs
npm install bcryptjs

install json web token
Look jwt.io
npm install jsonwebtoken

passport.js
npm install passport

https://www.passportjs.org/packages/passport-jwt/
npm install passport-jwt

npm install multer

npm install moment

FULL GIT

Quick setup — if you’ve done this kind of thing before
or
https://github.com/GreenBigem/wolsys.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# wolsys" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/GreenBigem/wolsys.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/GreenBigem/wolsys.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

---

ANGULAR

install Angular Cli
npm install -g @angular/cli

Create workspace:
ng new [PROJECT NAME] // ng new client

To start angular go to folder cd client
cd client
cpm run start

Install concurrently
npm i -D concurrently
