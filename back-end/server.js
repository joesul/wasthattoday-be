let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();
let PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

let api_key = process.env.api_key;
let api_secret = process.env.api_secret;
let sem3 = require('semantics3-node')(api_key, api_secret);

app.get('/search/:productName', function(request, response){
  sem3.products.products_field("search", request.params.productName);
    sem3.products.get_products(
      function(err, products){
        if(err){
          console.log("Error has occurred", err);
           return;
        }
        response.send(products);
    })
  })


app.listen(PORT, function(){
  console.log("listening on port ",  PORT);
});
