'use strict';

var dueloApp = angular.module('dueloApp', ['ngRoute']);

dueloApp.factory('PersonajesRest', function($http) {
    return function(errorHandler) {
        this.findAll = function(callback) {
            $http.get('/personajes').success(callback).error(errorHandler);
        }
    }
});

dueloApp.controller('PersonajesController', function ($scope, $timeout, $http, PersonajesRest) {
    var personajes = new PersonajesRest(function(data, status) { 
        if (data.error) {
            $scope.notificarError("Error: " + data.error);
        }
        else {
            $scope.notificarError(status + ": " + data);
        }
    });
    
    $scope.errors = [];
    $scope.notificarError = function(mensaje) {
        $scope.errors.push(mensaje);
        $timeout(function(){
            while($scope.errors.length > 0) $scope.errors.pop();
        }, 3000);
    }
});

dueloApp.config(['$routeProvider',
                 function($routeProvider) {
                   $routeProvider.
                     when('/', {
                       templateUrl: '../src/main/webapp/login.html',
                       controller: 'DueloDeLeyendasController'
                     }).
                     otherwise({
                       redirectTo: '/'
                     });
});