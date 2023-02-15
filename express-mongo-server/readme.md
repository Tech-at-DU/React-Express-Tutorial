# Express Mongo Server

This is an example server that serves data for the React client apps. It is using https://www.mongodb.com to host the mongo database. 

## Getting started

Create an account on https://www.mongodb.com. 

Follow the getting started guide: https://www.mongodb.com/docs/drivers/node/current/quick-start/

When you have a database setup you can import a JSON file to populate it. If you want to start with the SFPOPOS data you can import that from express-server/sfpopos-data.json. 

Find your project under: "Projects". Click: "Connect". Then click: "Connect using MongoDB Compass". This should give a connection string, something like: 

```
mongodb+srv://<user>:<password>@cluster0.q7yehdv.mongodb.net/?retryWrites=true&w=majority
```

Add a `.env` file then add an environment variable: 

```
DATABASE_URL=mongodb+srv://<user>:<password>.mongodb.net/test
```





