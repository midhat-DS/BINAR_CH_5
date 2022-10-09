# BINAR_CH_5
Challenge 5
CRUD dashboard

# How to run Backend (orm_ch5)
 - npm install
 - open (config/config.json) to update db config 
 - use command (sequelize/npx sequelize-cli db:create) if database doesn't exist
 - use command (sequelize/npx sequelize-cli db:migrate) to run the migration
 - use command (sequelize/npx sequelize-cli db:seed:all) to run the seeder
 - run the server with command (npm start/ nodemon indexjs) in the orm_ch5 terminal

# How to run front end (FE)
 - npm install
 - run server by using command (npm start/ nodemon indexjs) in the FE terminal
 - open the frontend on browser (localhost:[port])

# Endpoint
  - POST/cars to add cars
  - GET/cars to list cars
  - GET/cars/:id to get cars id
  - PUT/cars/:id to update cars id
  - DELETE/cars/:id to delete cars id
  
  # db Diagram
 
![Untitled (1)](https://user-images.githubusercontent.com/111718306/194738227-95c48327-09da-4e46-9584-5a6be65cf548.png)
