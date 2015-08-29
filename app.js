var app = angular.module('mouseOverDirectiveApp', [])


app.directive('gsChangeBackground', function() {
  return {

    link: function(scope, element, attrs) {
      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', scope.color);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }
  };
});

app.controller('images', ['$scope', function($scope) {
  $scope.images = ["https://images.unsplash.com/photo-1438576714005-7372d9c25c93?q=80&fm=jpg&s=b54271de24c7347eb5d7923b72f65f34",
    "https://images.unsplash.com/photo-1438480478735-3234e63615bb?q=80&fm=jpg&s=8fddc1c4c240e145cf6b65a21ae92087",
    "https://images.unsplash.com/photo-1438027316524-6078d503224b?q=80&fm=jpg&s=c3e74eeed2e7149f057755bd54bfdd7e"
  ]
  $scope.next = function() {
    $scope.i ++;
    if ($scope.i === $scope.images.length) {
      $scope.i = 0;
    }
  }
  $scope.prev = function() {
    $scope.i --;
    if ($scope.i === -1) {
      $scope.i = $scope.images.length-1;
    }
  }

}])

app.directive('imageCarousel', function() {
  return {
    templateUrl: 'imagesTemplate.html',
    link: function(scope, element, attrs) {
      scope: {}
    }
  }
})
