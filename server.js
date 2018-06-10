// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const Joi = require('joi');                    // Use for validations
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const jumble = require('./caesarCipher/jumble.js'); // Call Jumble function
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const port = process.env.PORT || 8090;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8090/api)
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Employsure api!' });
});

// more routes for our API will happen here

// on routes that end in /jumble
// ----------------------------------------------------
router.route('/jumble/:counter')

    // accessed at POST http://localhost:8090/api/jumble/1)
    .post(function(req, res) {
      const bodySchema = {
         letters: Joi.string().min(1).required()

      };
      const paramsSchema = {
          counter: Joi.number().integer().min(1).max(1000).required()
      };
      const msg = {
          letters: req.body.letters
       };

      const bodyResult = Joi.validate(req.body, bodySchema);
      const paramsResult = Joi.validate(req.params, paramsSchema);

      if(bodyResult.error){
         res.status(400).send(bodyResult.error.details[0].message);
         return;
      }

      if(paramsResult.error){
         res.status(400).send(paramsResult.error.details[0].message);
         return;
      }

      const counter = parseInt(req.params.counter);

      res.json({ jumbled: jumble(msg.letters,counter)});

    });



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Listening on port ${port}..`);
