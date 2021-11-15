# RoadTrip

Welcome to RoadTrip, RoadTrip is an AirBnb clone. Instead of renting houses, it is cars. 

Live link to the site: https://road-trip-aa.herokuapp.com

RoadTrip, so far, has two full CRUD features. All users can view all listings of cars. Upon signing in, they can reserve the car for specific dates. Sign in as a demo user to get a full feel for the website.

Wiki: https://github.com/Vour123/RoadTrip/wiki <-------  You can find my database schema and my features list there.

Clone Repo Locally:
`https://github.com/Vour123/RoadTrip.git`
CD into the `/frontend` folder and `/backend` folder. `npm install` in both directories
Create an env file utilizing the .env.example file as an example. Make sure to create it in `/backend`
Setup a database and user in PostgreSQL using the information you made in the .env file.
Using Sequelize, create the database by running `npx dotenv sequelize db:create` inside of the `/backend` directory
Migrate your database by running `npx dotenv sequelize db:migrate`
Next, seed your data. Do this by running `npx dotenv sequelize db:seed:all`

Finally, start the server by running `npm start` in both the frontend and backend directory.


