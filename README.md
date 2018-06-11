# Employsure rest api for jumble function.

Jumble function expects a string input and an integer n that is between
1 and 1000. It will transform each character of the input string
using the following instructions:

```
If it is a letter of the alphabet(a,b..z) shift to the right by n letters,
if you reach z return to a and continue, however many times is required.

If it is a number(1,2,3..) or space leave it the same.
Example :

   jumble('test 123',0) == 'test 123'
   jumble('test 123',1) == 'uftu 123'
   jumble('test 123',100) == 'paop 123'
   jumble('test 123',26) == 'test 123'

```

The rest api's for the jumble function implementation are located
on the root directory and is named server.js





## server.js has 1 Post and 1 Get api.

```
     // request

     POST /api/jumble/1

     {

     "message": "test 123"

     }

     // response

     200 OK

     {

     "jumbled": "uftu 123"

     }

     // request
     GET /api

     {
      "message: 'Welcome to Employsure api!'"

     }
```


  - The server.js contains the router for the above api's.
  - To run the application without Docker
  ```
   From project root directory type:

      $node server.js

   The server.js is set to listen on port 8090.
   Feel free to change to whatever port desired.

   Running and testing the api's:
   I've used Google Postman to connect and pass the required parameter
   and the required JSON body to the server.js rest api.

   To install Google Chrome Postman from Chrome browser navigate to :
     chrome.google.com/webstore/details/postman
   Click on launch the app and it will install it under Chrome apps.

   To use Postman :
           After installation go to your chrome apps,
           click on Postman.
           Click on new to create a new request.
           Select POST.
           Enter the url :
           http://localhost:8090/api/jumble/1
           Click on the body option.
           Select application/Json
           Select raw
           Enter the request json body as :
             {
              "letters":"test 123"
              }
           Click on Send
           You should receive a response bellow as :
           200 Ok
           {"jumbled":"uftu 123"}




   ```


Dockernising server.js

```
   Install Docker locally by :

      $sudo apt install docker.io

   Create an image for the project :

      $sudo docker build -t node-projects .

   Enter the docker command :

      $sudo docker images

   Copy the image_id and run docker with your image :

      $sudo docker run -p 80:8090 <copied image_id>

   You can now run from Postman as above, without the PORT Number example :

       http://localhost/api/jumble/1

   You can also use a browser to test the GET request as :

      http://localhost/api

   You will get a succesfull response :

      {"message":"Welcome to Employsure api!"}


```
 Deploying to AWS :

```
    First commit the node-projects to git.

    Login to AWS and select an Ubuntu ec2 instance.
    Change the security groub inbound ports.
    Add http,https,ssh and Custom tcp rule for port 8090.
    Create and download a .pem key.
    Use putty if on windows to ssh into ec2 instance.
    You can click on the connect from the ec2 instance and follow
    how to ssh into your instance.
    Make sure you have change the permission of your generated .pem
    file by entering chmod 400 <your .pem file>

    Once you have succesfully ssh into your ec2 instance,install Node.js
    enter Curl -sL https://deb.nodesource.com/
                    setup_8.x | sudo -E bash -
    sudo apt-get install -y node.js
    sudo apt-get update

    Now clone the project from git repository.
    Change directory to the project folder root dir.
    Build the project as :

       $sudo docker build -t node-projects .
       $sudo docker images
       Copy image_id
       $sudo docker run -p 80:8090 <copied image_id>

   My public dns name where you can connect and test this app is :

       http://ec2-52-63-217-117.ap-southeast-2.compute.amazonaws.com/api/jumble/1
       Use as above from Postman.

       To check from a browser using a GET :
       http://ec2-52-63-217-117.ap-southeast-2.compute.amazonaws.com/api/
       Response will be :
       {"message":"Welcome to Employsure api!"}
```
Project dependencies :

```
  I've used Joi for rest api Validations.
  Please see https://www.npmjs.com/package/joi
  for more information.
  Installation :
    $npm install joi
  Other dependencies installed are :
    Mocha, Chai, body-parser and Express.
  Please look at package.json for versions.
```
## Question 5.  429 Too Many Request solution.

To protect your Hypernode from all kinds of attacks, bots, brute forces and scriptkiddies causing downtime.
Methods for rate limiting use :

```
On Hypernodes we currently use two sorts of rate limiting:

   Rate limiting per user agent to protect your node from bots and crawlers that are exhausting server resources.

   Rate limiting per IP to protect your node from scriptkiddies, overenthousiastic SEO analyzers and testing tools
   running wild depleting all FPM workers.

   These two rate limiting methods both are defined using a rate limit zone. A zone is an allocation in memory where
   Nginx stores it’s connection data to verify whether a useragent or IP should be rate limited.

There are lot's of Hypernode tools and plugins available for searching Nginx server logins and nodes.
Some more frequently used are Hypernodes and Hypernodes-vagrant.
```

## Public AWS url for testing the application :

```
   For testing the GET request :

http://ec2-52-63-217-117.ap-southeast-2.compute.amazonaws.com/api/

   Response :
   {"message":"Welcome to Employsure api!"}

  For the post request using Google Postmen:

http://ec2-52-63-217-117.ap-southeast-2.compute.amazonaws.com/api/jumble/1
Create the Json request body as :
   {
    "letters":"test 123"
   }

```
