/**
 * Created by gehua on 2016/9/20.
 */
var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(){
    var db = mongoose.connect(config.mongodb);

    require('../app/models/news.server.model');

    return db;
}
