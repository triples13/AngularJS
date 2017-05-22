var app=angular.module("mainapp",[]);
  app.controller("todoctrl",todocontroller);

  function todocontroller(){
     this.addTodoList=[
       "hello",
       "angular js",
       "angular js 2"
     ];
       this.addTodo=function(){
       this.addTodoList.push(this.textvalue);
      this.textvalue="";
      }

      
      this.editMode=false;
     this.showEdited=function () {
      this.editMode=!this.editMode;
      
     }

     this.deleteValue=function (todo) {
       var index = this.addTodoList.indexOf(todo);
       console.log(index);
  this.addTodoList.splice(index, 1);     
}
     
      }
  