const http = require('http');
const express = require('express');
const albumData = require('./albums');
const es6Renderer = require('express-es6-template-engine');


const app = express();
const server = http.createServer(app);

const PORT = 3000;

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

function getTitle (anObj){
    return anObj.title
}

function getSongsTitles(){
   const arrayOfSongs = albumData.albums[0].songs;
   const arrayOfTitles = arrayOfSongs.map(getTitle);
    return(arrayOfTitles);
}

const locals = {title: 'this is home'}

app.get('/', (req, res) => {
    // res.send(getSongsTitles());
    res.render('home', {
        locals: {title: getSongsTitles()},
    })
})







server.listen(PORT, () => {
    console.log('im listening');
});