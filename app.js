var app = angular.module('mouseOverDirectiveApp', [])


app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {
      // console.log(element);
      var oldColor = element.css('background-color');
      element.on('mouseenter', function(event) {
        element.css('background-color', 'scope.color');
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }
  };
});
