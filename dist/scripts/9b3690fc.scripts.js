"use strict";angular.module("launchApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider","$httpProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.defaults.useXDomain=!0,delete b.defaults.headers.common["X-Requested-With"]}]),angular.module("launchApp").controller("MainCtrl",["$scope","ServicioEmail",function(a,b){a.enviado=!1,a.enviarEmail=function(c){b.enviar(c),a.enviado=!0}}]),angular.module("launchApp").service("ServicioEmail",["$http",function(a){function b(){d.estado="exito"}function c(){d.estado="error"}var d=this;this.estado=null,this.enviar=function(d){a.post("http://dip-api.herokuapp.com/email",{email:d}).success(b).error(c)}}]);