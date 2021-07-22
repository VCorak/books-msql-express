# My way to downfall project:  Connect database and build API

## MISSION 

1. **Create database of favourite books in DataGrip**
    
### Obstacles on board: 
* made a nice table with favourite books, created id, name, author, genre and review part
* first I did not notice I have to add a password at all so Sicco had to intervene and remind me- had to change my actual password to new one because of...
* then I changed my mind and tried different approach with starting all over again

2. **Create API with express.js**

### Obstacles on board:

* figure out how to actually do it with having mysql on your way... 🙄

## STEPS

1. Created structure of my project, boilerplate with directories and files
2. Connect server to port 3000 (should I create .env for password??)
3. Make a GitHub repo called books-msql-express and commit so far
4. Add some comments in every file to actually understand what they are for
5. Link Node.js server with mysql

### Obstacles on board:
* what is difference between mysql2 and mysql?? Do I need an upgrade?
- stackoverflow says it is just faster and securer, so maybe I don't need it for now...and pooling is better, whatever that means...have to check that out.

6. In helper.js I added some methods to return offset of pagination and used help from this page (https://www.sqlshack.com/learn-mysql-what-is-pagination/)
* maybe it was not necessary for this small project, but I wanted to check it out
7. Connect the database and enable running queries on database in services/db.js
8. At services/books.js wrote the bridge between route and database
9. Creating route to get books from db, if not show error
10. Wiring up books endpoint and running app again with node index.js, in the browser http://localhost:3000/books
### Obstacles on board:
* could not connect to database, got some strange errors, Sicco hopped in to help, managed to resolved it but now I can just see empty data array...sooo
something is wrong again...
* (https://www.npmjs.com/package/mysql2#using-connection-pool) - on this link tried to find is it maybe something in this execute function...maybe is database itself??
* still get the 'undefined' on localhost:3000/books...have to move on, will come back to it later
* not getting undefined more but not sure if it is working yet...
  ![Moving on...](https://gph.is/2Af28gy)
  
11. Post, add a new book
12. Update book
13. Delete book

## CONCLUSION

* I followed instructions from blog https://blog.logrocket.com/node-js-express-js-mysql-rest-api-example/ step by step and can say I do understand what is going on. I took my time for this, even more than I should, tried my best to understand errors but just can not display books data for now.
* Do I understand backend now more (with express, php is still no no)? Yes, I do (even if it's not working). Do I like it? No. Will I make this work one day? Maybe, really want to get it what is going on here... 

## BIGGER CONCLUSION

Api does not work, still can not see any data, don't know what is wrong with my life and sorry backend but have to let it go for now, my frontend is suffering...
![Giving up...](http://gph.is/145mpu6)