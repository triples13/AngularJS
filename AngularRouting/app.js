var app=angular.module("myapp",["ngRoute"]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when("/first",{
        templateUrl:"info-msg.htm",
        controller:"message",
    })
    .when("/second",{
        templateUrl:"info-msg1.htm",
        controller:"message1",
    })
    .when("/",{
        template:"click the left pannel"
    })
    .when("/third",{
        templateUrl:"info-msg3.htm",
        controller:"message2",
    })
    .otherwise({
      //  template:"<strong>No message is available</strong>"
      redirectTo:function(){
          alert("hello functionality is not implemented");
          return "/";
      }
    })
}]);

app.controller("message",["$scope",function($scope){
    $scope.a=10;
    $scope.b=20;
}])

app.controller("message1",["$scope",function($scope){
    $scope.c=20;
    $scope.d=30;
}])

app.controller("message2",["$scope",function($scope){
    $scope.e=90;
    $scope.f=60;
}])
