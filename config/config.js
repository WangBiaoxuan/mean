/**
 * Created by gehua on 2016/9/20.
 */
var config = null;
if(process && process.env && process.env.NODE_ENV){
    config = require('./env/' + process.env.NODE_ENV+'.js');
}else{
    config = require('./env/develepment.js');
}
module.exports = config;
