angular.module('fboystories.scopeControl', [])
    .controller('storyController', function($scope, httpFactory) {
    
      $scope.data = {};
      $scope.getStories = function(){
        httpFactory.getAll()
          .then(function(data) {
            $scope.data.data = data;
          });
      };

      $scope.getStories();
      
      $scope.addStory = function(){
          httpFactory.addOne($scope.inputStory)
               .then(function(resp){
                  console.log(resp);
                  $scope.getStories();
              });
      
      };

      $scope.upVote = function(id){
        console.log(id)
          httpFactory.updateVotes(id)
               .then(function(resp){
                  console.log(resp);

                  $scope.getStories();
              });
      
      }
    });  



