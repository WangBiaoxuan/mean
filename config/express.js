/**
 * Created by gehua on 2016/9/20.
 */
var express = require('express');
var bodyParse = require('body-parser');

module.exports = function () {
    console.log('init express');
    var app = express();

    app.use(bodyParse.json());

    app.use(express.static('./public'));

    require('../app/routers/news.server.routers')(app);

    app.use(function(req, res, next){
        res.status(404);
        try{
            return res.json('not found');
        }catch(e) {
            console.error('404 set header header after send');
        }
    });

    app.use(function(err, req, res, next){
        if(!err){return next();}
        res.status(500);
        try{
            return res.json(err.message || 'server error');
        }catch(e) {
            console.error('500 set header header after send');
        }
    });


    return app;

};