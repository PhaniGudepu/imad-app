var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'article-one',
    heading: 'Article One',
    date: '1st augest 2017',
    content: `
            <p>
                This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.
            </p>
            <p>
                This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.
            </p>
            <p>
                This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.This the first article in imad training and I am excited.
            </p>`
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.cotent;
var htmlTemplate=
    `<html>
    <head>
    ${title}
        <meta name="viewport" content="width-device-width, intial-scale=1"/>
        
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <div>
            <h3>
            ${heading}
            </h3>
        </div>
        <div>
        ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>

    `;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/getone', function (req, res){
    res.send(createTemplate(articleOne));
});
app.get('/gettwo', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});
app.get('/getthree', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
