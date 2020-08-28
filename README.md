###
* 
MEAN-Angular-NODEJS
https://github.com/Tushar-MS/MEAN-Angular-NODEJS.git
This is a MEAN Besics Dev CRUD Operations Insert Update Delete and Read 


Server
https://www.mongodb.com/try/download/community

GUI tool
https://www.mongodb.com/try/download/compass

1) 
install NodeJS

2)
install MongoDB Server => to start mongodb server

create batch file startMongoDB.batch
cd C:\Program Files\MongoDB\Server\4.4\bin
mongod.exe --dbpath C:\D\MEAN\mongo-data

3)
instaill Mongo Compass  or Robo Mongo

connect to Host
		Create Database : - CrudEmployeeDB
		Collection Name - Employees
		Create Database
		
		
4) Angular CLI

	nmp install -g angular/cli
	ng new my-dream-app
	cd my-dream-app
	ng serve
	
	
5) Create NodJS in VSC ( connect Mongo DB )

   in CMD file
   1) npm init
       enter enter 
   2) yes   
   3) npm install express mongoose body-parser --save -> hit enter, 
		3.1) create db.js to connect mongoDB 
		
   4) monggose.connect('mongodb://loalhost:27017/CrudEmployeeDB', (err) => {
   
		}
	5) node db.js  or 
	6) nodemon db.js
	7} create index.js, 
		7.1) use express, bodyParser, monggose require(./db.js)
		
		express.use(bodyParser)
		express.listen(3000, ()=> console.log(server started on :3000 ));
		express.use('/empoyees', emplyeeCtrl);
		
	8) run cmd -> nodemon index.js
	
	9) create Modals folder 
		create Employee.js
	10) create contollers
		create EmployeeCtrl.js
		
		
	
6) Create Angular App
		ng new AngularApp, 
		cd AngularApp
		ng serve --open
		
		
7) Materializecss.com
   Materialize design
   
   
   
   
 Add in NodeJS=> index.js
https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
 
 // NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

