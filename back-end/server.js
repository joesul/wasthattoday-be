var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5555;

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

let api_key = "SEM3EEC2DA334F75EF02D2191073E2758F8C";
let api_secret = 'MDBjYmVkNGE2NGVlMWY4YzczMjdmNGExMGZkYzM5OWU';
let sem3 = require('semantics3-node')(api_key, api_secret);

app.get('/search', function(request, response){

  sem3.products.products_field("search", "necklace");

    sem3.products.get_products(
      function(err, products){
        if(err){
           return;
        }
        response.send(JSON.stringify(products))
    })
  })


app.listen(PORT, function(){
  console.log("listening on port ",  PORT);
});
