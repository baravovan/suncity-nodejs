# suncity-nodejs
### Project description

Aplication is used to get information about cities time of sunrise/sunset according to It's coordinates. Two services were implemented:
1. CitiesService, which provide opportunities: 
  - to add city      to the DB
  - to delete city from the DB
2. SunCityService, which provides opportunity to get information about time of sunrise/sunset
  - to get info
  Parameters: 
    - action = sunset | sunset | both
    - date   = today | yyyy-mm-dd (example 2020-03-03)
    - city (example city=TestCity)
  
### Prerequisites 
- node.js
- npm
- Git

### Run 
to Start: 
 - install node.js and npm;
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
 - clone repository
 - from app directory start terminal and run commands
```
npm install 
npm start
```
This will install modules and start client application on 
http://localhost:4200

- to get access to DB need to start server side application 
```
cd /server
npm install
node start.js
```
It will start server app. 

Now try to register and use client app to retrieve info about cities sunrise/sunset time.



SunCity is developed by [Volodymyr Baranov] 2020.
