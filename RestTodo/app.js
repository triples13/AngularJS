var angularmodule=angular.module("myapp",[]);

angularmodule.controller("restcontroller",["$scope","restcontrollerservice",function($scope,restcontrollerservice){
$scope.doSearch=function(){
    restcontrollerservice.findEmployee($scope.employeeId,function(resp){
        $scope.employeename=resp.name;
        $scope.enployeenumber=resp.empno;
        $scope.salary=resp.sal;
    })
   
}
}])

angularmodule.service("restcontrollerservice",["$http","$log",function($http,$log){
     this.findEmployee=function(empno,cb){
         $http({
             url:'http://localhost:8080/pos/getEmployees/'+empno,
             method:'GET',
            
         }).then(function(resp){
 console.log(resp.data);
             cb(resp.data);
         },function(resp){
             $log.error("Eror occured"); 
         })
     }
}])