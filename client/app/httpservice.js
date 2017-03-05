
 angular.module('fboystories.httpModule', [])
.factory('httpFactory', function ($http) {

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/createdAt'
    })
    .then(function (resp) {
      return resp;
    });
  };

  var addOne = function (story ) {
    return $http({
      method: 'POST',
      url: '/api/postto',
      data: { story : story,
              location : "NYC" }
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };

});


// something needs to call someFactory.getAll
// something needs to call someFactory.addOne(story) <--- story will be an object. 




