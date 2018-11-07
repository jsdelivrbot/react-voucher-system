
alert('hi');

var app = angular.module('myApp', [      
  'ngRoute'
]);
 
     
app.config(['$routeProvider', function ($routeProvider) {
  
              $routeProvider.when('/mmm', {
                  templateUrl: 'templates/dashboard.html',
                  controller: 'myController',
                  controllerAs: 'dashboard'
              }).otherwise({
                redirectTo: '/'
            });
                            
}]).config(['$locationProvider', function($locationProvider) {
     $locationProvider.hashPrefix('');
}]);



app.controller('myController', function($scope, $http, $window, $timeout, $location, $routeParams) {

  // $window.alert('hi');
  

});