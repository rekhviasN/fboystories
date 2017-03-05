angular.module('fboystories.scopeControl', [])
    .controller('storyController', function($scope, httpFactory) {
  
      $scope.data = {};
      $scope.test = "testing"

      $scope.getStories = function(){
        httpFactory.getAll()
          .then(function(data) {
            $scope.data.data = data;
          });
      };

      $scope.getStories();

      $scope.addStory = function(inputText){
        $scope.test= "test";
        httpFactory.addOne(inputText);
        $scope.inputStory="";
      };
   
   
    });  



