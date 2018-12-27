# express-handlebars 项目模板

```shell
$ git clone https://github.com/haobingwang/express-handlebars.git --depth=1
```

Then install dependencies:

```shell
$ cd express-handlebars
$ npm install
```

On MacOS or Linux, run the app with this command:

```shell
$ DEBUG=myapp:* npm start
```

On Windows, use this command:

```shell
> set DEBUG=myapp:* & npm start
```

Then load http://localhost:3000/ in your browser to access the app.

## 初始化过程

```shell
$ express --view=hbs express-handlebars

create : express-handlebars\
create : express-handlebars\public\
create : express-handlebars\public\javascripts\
create : express-handlebars\public\images\
create : express-handlebars\public\stylesheets\
create : express-handlebars\public\stylesheets\style.css
create : express-handlebars\routes\
create : express-handlebars\routes\index.js
create : express-handlebars\routes\users.js
create : express-handlebars\views\
create : express-handlebars\views\error.hbs
create : express-handlebars\views\index.hbs
create : express-handlebars\views\layout.hbs
create : express-handlebars\app.js
create : express-handlebars\package.json
create : express-handlebars\bin\
create : express-handlebars\bin\www

change directory:
    $ cd express-handlebars

install dependencies:
    $ npm install

run the app:
    $ DEBUG=express-handlebars:* npm start
```