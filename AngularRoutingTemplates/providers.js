app.config(["employeeServiceProvider",function(employeeServiceProvider){
  employeeServiceProvider.config('http://localhost:8080/pos');
}]);

app.provider("employeeService",function(){

var url='';
  this.config= function(baseUrl){
     url=baseUrl;
  }
  this.$get=["$http","$log",function($http,$log){   //this $get will be automatically called by angular js
    var showemployee={};

console.log(typeof url);
    showemployee.getDetails=function(id){
                         //http means making an ajax request
      return $http.get(url+'/getEmployees/'+id);
    }

    return showemployee;
  }];
});
