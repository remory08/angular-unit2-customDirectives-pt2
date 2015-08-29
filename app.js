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
    "https://images.unsplash.com/photo-1438027316524-6078d503224b?q=80&fm=jpg&s=c3e74eeed2e7149f057755bd54bfdd7e",
    "https://images.unsplash.com/photo-1436564989038-18b9958df72b?q=80&fm=jpg&s=63f82ffb3fa7effd45c79e0379dbdee6",
    "https://images.unsplash.com/photo-1438368915865-a852ef86fc42?q=80&fm=jpg&s=15e4744077e36852ba57f46f4660dc7a",
  ];

  $scope.a= $scope.images.length -2;
  $scope.b = $scope.images.length -1;
  $scope.c = 0;
  $scope.d = $scope.c + 1;
  $scope.e = $scope.c +2;

  $scope.next = function() {
    $scope.i ++;
    if ($scope.i === $scope.images.length) {
      $scope.i = 0;
    }
    $scope.a ++;
    if ($scope.a === $scope.images.length) {
      $scope.a = 0;
    }
    $scope.b ++;
    if ($scope.b === $scope.images.length) {
      $scope.b = 0;
    }
    $scope.c ++;
    if ($scope.c === $scope.images.length) {
      $scope.c = 0;
    }
    $scope.d ++;
    if ($scope.d === $scope.images.length) {
      $scope.d = 0;
    }
    $scope.e ++;
    if ($scope.e === $scope.images.length) {
      $scope.e = 0;
    }

  }

  $scope.prev = function() {
    $scope.i --;
    if ($scope.i === -1) {
      $scope.i = $scope.images.length-1;
    }
    $scope.a --;
    if ($scope.a === -1) {
      $scope.a = $scope.images.length-1;
    }
    $scope.b --;
    if ($scope.b === -1) {
      $scope.b = $scope.images.length-1;
    }
    $scope.c --;
    if ($scope.c === -1) {
      $scope.c = $scope.images.length-1;
    }
    $scope.d --;
    if ($scope.d === -1) {
      $scope.d = $scope.images.length-1;
    }
    $scope.e --;
    if ($scope.e === -1) {
      $scope.e = $scope.images.length-1;
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
