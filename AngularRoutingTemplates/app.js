var app=angular.module("myapp",["ngRoute"]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when("/sum/:a/:b",{
        templateUrl:"info-msg1.htm",
        controller:"sumUrl",
    })
   .when("/suminput",{
       templateUrl:"info-msg.htm",
       controller:"inputsum"
})

   .when("/",{
       template:"welcome to app",
   })
   .when("/showEmp",{
     templateUrl:"show-detail.htm",
     controller:"employeeController",//resolve part is executed first that is data is retrived before template is shown
     resolve:{                            //promise will be resolved here before the controller executes
       result:function(employeeService){
        return employeeService.getDetails(12);//promise is getting resolved here
       }
     }
   })
}]);

app.controller("employeeController",['$scope','result',function($scope,result){
  $scope.result=result;
}])

app.controller("sumUrl",["$scope","$routeParams",function($scope,$routeParams){
    $scope.a=$routeParams.a;
    $scope.b=$routeParams.b;
}])

/*app.controller("employeeController",["$scope","employeeService",function($scope,employeeService){
$scope.getEmployeeDetails=function(id){
 employeeService.getDetails($scope.id).then(function(result){
    $scope.result=result;
  })
}
}])*/

app.controller("inputsum",["$scope","$location","$interpolate",function($scope,$location,$interpolate){

$scope.doSum=function(){

    var url=$interpolate("/sum/{{a}}/{{b}}")($scope);
    $location.path(url);
}
}])
