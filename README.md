#on terminal type
install cli to create simple react app
```sh
sudo npm install -g create-react-app
create-react-app
```

define app name (folder)
```sh 
create-react-app aplikasi-sederhana-reactjs-basic

```

go to "code-learnreact-basic" folder with terminal & type
```sh
git init
git commit -m "first commit setup using create-react-app tool"
git remote add origin https://github.com/<username>/code-learnreact-basic.git
git push -u origin master
```

to start app 
```sh
cd aplikasi-sederhana-reactjs-basic
yarn start
```

# install & setup eslint
```sh
sudo npm i -g eslint
eslint --init
```

on process choose javascript so the file will named with .js
install plugin vscode so can add user setting

* setup on vscode  on user setting
```js 
"eslint.autoFixOnSave": true,
```

# install & add eslint-plugin-react
```sh
sudo npm install -g eslint-plugin-react
```

* add on .eslintrc.json on field of "extends"
```json
"extends": [
    "eslint:recommended",
    "plugin:react/recommended"
]
```

to create production should run yarn build
```sh
sudo yarn build
```

# reactstrap
installation
```sh
npm install --save bootstrap@4.1.1
npm install --save reactstrap
```

set css on index.js
```js
import 'bootstrap/dist/css/bootstrap.css'
```

# storybook
it's place to explain react UI component
install storybook cli
```sh
sudo npm i -g @storybook/cli
getstorybook
yarn run storybook
```

# react router
```sh
npm install --save react-router-dom
```