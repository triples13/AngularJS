var app=angular.module("mainapp",[]);
  app.controller("calculator",calculatorcontroller);

  function calculatorcontroller(){
      this.result=0;
     this.plus=function(){
         this.showOpeation="+";
     }
     this.substract=function() {
         this.showOpeation="-";
     }
     this.divide=function () {
         this.showOpeation="/";
     }
     this.multiply=function () {
          this.showOpeation="*";
     }
     this.getResult=function() {
         var num1=parseFloat(this.firstNumber);
         var num2=parseFloat(this.secondNumber);
         console.log(num1);
         console.log(num2);
         if(this.showOpeation==="+"){
             this.result=num1+num2;
         }
         else if(this.showOpeation==="-"){
             this.result=num1-num2;
         }
          else if(this.showOpeation==="*"){
             this.result=num1*num2;
         }
            else if(this.showOpeation==="/"){
             this.result=num1/num2;
         }
     }
  }