# Bandseeker

This single page app is a job seeker for musicians. 
Members of a band who are looking to fill in a position (drummer, guitarist, bass player ....) can find it with the help of this app. 
Musicians who want to join a band can search for different bands that are registered and choose the ones they want to join.

Stack: React, Nextjs, Styled Components, Graphql, Nodejs, Mongodb

## Setup instructions

Clone the repository to your local machine:

`git clone https://github.com/chingu-voyages/v34-bears-team-09`

Install the dependencies locally:

`cd v34-bears-team-09/ && npm i`

To use this project you must have a Mongodb database.

## Mongodb database

In your Mongodb Atlas account find the Uri of your database.

Add it in the .env file (see the .env_sample file in the root folder as a reference).

Your code must be like this:

```
MONGODB_URI=="Mongo uri"
```

Refs: [find uri mongodb docs](https://docs.mongodb.com/manual/reference/connection-string/)

## Running the app

Run the command `npm run dev` to start the app.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployments

- https://bandseeker.netlify.app/ - production build of main branch

## Contributing

Bandseeker all was developed by [@oakeem](https://github.com/akeemoduola), [@zxcv](https://github.com/zxcv3) and [@davide-ravasi](https://github.com/davide-ravasi).

If you like the app, feel free to fork this repository or open a pull request
