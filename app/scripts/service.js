var module = angular.module('dinpApp', []);
 
module.service('userService', function(){
    this.users = ['John', 'James', 'Jake'];
    this.square = function(a,b) { return a*b };
});