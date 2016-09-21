/**
 * Created by gehua on 2016/9/20.
 */
angular.module('webapp')
    .controller('NewsController',['$scope','NewsService',NewsController])

function NewsController($scope, NewsService){
    $scope.list = [];

    $scope.current = {};
    $scope.new = {};

    //保存新闻并更新
    $scope.save = function(){
        if(!$scope.new.title){
            $scope.editorMessage ="Title is require";
            return;
        }
        if(!$scope.new.content){
            $scope.editorMessage ="content is require";
            return;
        }
        $scope.editorMessage = '';

        NewsService.save($scope.new).then(
            function(data){
                $("#modal-editor").modal('hide');
                $scope.loadNews();
                $scope.new = {};
            },
            function(err){
                $scope.editorMessage = err;
            }
        )

    };

    //新增新闻
    $scope.createNews = function(){
        $("#modal-editor").modal('show');
    };



    //查看新闻详情
    $scope.openNewsDetail = function(id){
        $("#modal-detail").modal('show');
        $scope.loadDetail(id);
    };
    //展示新闻详情
    $scope.loadDetail = function(id){
        NewsService.detail(id).then(
            function(data){
                $scope.current = data;
            }
        )
    };

    //更新展现页
    $scope.NewsUpdate = function(uid){
        $("#modal-detail-update").modal('show');
        $scope.loadDetail(uid);
    };
    
    //更新方法
    $scope.update = function () {
        if(!$scope.current.title){
            $scope.editorMessage ="Title is require";
            return;
        }
        if(!$scope.current.content){
            $scope.editorMessage ="content is require";
            return;
        }
        $scope.editorMessage = '';
        NewsService.update($scope.current).then(
            function(data){
                $("#modal-detail-update").modal('hide');
                $scope.loadNews();
                $scope.new = {};
            },
            function(err){
                $scope.editorMessage = err;
            }
        )
    };

    //删除新闻
    $scope.NewsDelete = function(id){
        var x = confirm('确定删除这条新闻吗？');
        if(x){
            NewsService.delete(id).then(
                function (data) {
                    $scope.loadNews();
                },
                function(err){
                    console.log(err)
                }
            )
        }
    }

    //时间的格式化
    $scope.formatTime = function (time) {
        return moment(time).format('lll');
    };

    //查看所有新闻列表
    $scope.loadNews = function(){
        NewsService.list().then(
            function (data) {
                $scope.list = data;
            },
            function(err){}
        );
    };
    $scope.loadNews();
}