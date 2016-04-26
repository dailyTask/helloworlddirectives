/**
 * Created by Sufiyan on 4/26/2016.
 */
(function () {
  var app=angular.module('HelloDirectiveApp',[]);
   app.directive('helloWorld', function () {
      return{
          template:'<h1>Hello Sufiyan Welcome to Our First Custom Directives</h1>'

      }



   });





}());