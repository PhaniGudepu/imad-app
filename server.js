var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 
var articles={ 
'getone':{
    title:'articleOne',
    heading:'Article-One',
    date:'sept 1 2017',
    content:`
    <p>
      This is content to the article One. This is content to the article One.
       This is content to the article One. This is content to the article One.
        This is content to the article One. This is content to the article One.
    `
},
'gettwo':{
     title:'articleTwo',
    heading:'Article-Two',
    date:'sept 1 2017',
    content:`
    <p>
      This is content to the article Two. This is content to the article Two.
       This is content to the article Two. This is content to the article Two.
        This is content to the article Two. This is content to the article Two.
        </p>
        `
},
'getthree':{
     title:'articleThree',
    heading:'Article-three',
    date:'sept 1 2017',
    content:`
    <p>
      This is content to the article Three.This is content to the article Three.
      This is content to the article Three.This is content to the article Three.
      This is content to the article Three.This is content to the article Three.
        </p>
        `
}
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`
    <html>
    <head>
    <title>
    ${title}
    </title>
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
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/sunmit/:name', function (req, res) {
    var name = req.params.name;
    names.push(name);
      res.send(JSON.Stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
