## Shop and merchant management 

## PROJECT SETUP

## Local Environment Setup
- [Git
- [Node.js v14.5.0]
- [Yarn v1.22.5]
- [MySql 2]
- [PostMan]
- [Visual Studio Code]

## Environment Variables for Local Development

> Create a .env file and adjust the following environment variables. DONOT include the file in the source control.

```bash
DB_NAME=<value>
DB_USER=<value>
DB_PASSWORD=<value>
COOKIE_SECRET=<value>
TOKEN_SECRET=<value>
PORT=<value>
```

> Create a database in mysql of XAMPP, put the name on DB_NAME
> 
## NPM Scripts

```bash
$ yarn install          # install dependencies
$ yarn seed             # generate required database schemas
$ yarn start            # run project with nodemon
```

## API Documentation
