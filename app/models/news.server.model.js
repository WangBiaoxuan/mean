/**
 * Created by gehua on 2016/9/20.
 */
var mongoose =require('mongoose');

var NewsSchema = new mongoose.Schema({
    title : String,
    content : String,
    createTime : {type: Date, default: Date.now}
});

var News = mongoose.model('News',NewsSchema);
