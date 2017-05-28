var app=angular.module("myapp",[]);
app.controller("appcontroller",["$scope",function($scope){

}])

app.directive("message",function($interpolate){

    return {
        compile: function(tElement,tAttribute){
            console.log(tAttribute.text +"in compile");
            tElement.css("border","1px solid black");  
           return {
            pre :function(scope,iElement,iAttributes,controller){
                console.log(iAttributes.text+"in pre");
            },

            post:function(scope,iElement,iAttributes,controller){
                console.log(iAttributes.text+"in post");

                if(iAttributes.text==="3"){
                    iElement.css("border","1px solid red");
                }
                iElement.on("click",scope.btnClick);//but the elemenets are available only inside pre
                //post so we didn't wrote the envoking inside controller
            }
           }
         },
       
     controller: function($scope,$element,$attrs){
       console.log($attrs.text+"in controller");

       var v=$interpolate($attrs.text)($scope);
       console.log(v);
       $scope.btnClick=function () {  //if any functional requirment is there it 
           //needs to be written in controller
           alert(v);
       }
         },

}
})






app.directive("message",function($interpolate){
// if we don't have pre compile and controller this is another way to write
    return function(scope,iElement,iAttributes,controller){
                console.log(iAttributes.text+"in post");

                if(iAttributes.text==="3"){
                    iElement.css("border","1px solid red");
                }
                iElement.on("click",scope.btnClick);//but the elemenets are available only inside pre
                //post so we didn't wrote the envoking inside controller
            }
        
 

})
        

