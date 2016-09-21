/**
 * Created by gehua on 2016/9/20.
 */
var NewsController = require('../controllers/news.server.controller');

module.exports = function(app){
    app.route('/news')
        .get(NewsController.list)
        .post(NewsController.create);

    app.route('/newsUpdate')
        .post(NewsController.update);

    app.route('/newsDelete/:did')
        .get(NewsController.delete);
    app.param('did', NewsController.removeById);

    app.route('/news/:nid')
        .get(NewsController.get);
    app.param('nid', NewsController.getById);

}