var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

app.get('/', function(request, response){
    response.send("Get request received at '/'");
});
app.listen(port, function(){
    console.log('Listening on port 3000');
});
var quotes = [
    {id: 1,
    quote: "The best is yet to come",
    author: "Unknown",
    year: 2000},
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
];
app.get('/quotes/:id',function(req,res){
    
    console.log('return quote with the ID: '+ req.params.id);
    res.send('return quote with ID: '+ req.params.id);
});



app.get('/quotes',function(req,res){
    if(req.query.year){
        res.send("Return a list of quotes from the year: " + req.query.year);
      }
      else{
          res.json(quotes);
      }
    
});

app.use(bodyParser.urlencoded({extended:true}));
app.post('/quotes', function(req,res){
    console.log("Insert a new quote: "+ req.body.quote);
    res.json(req.body);
});

