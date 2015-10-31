dueloApp.controller('DueloDeLeyendasController',`['DueloService', '$scope', function(DueloService, $scope){
    
    DueloService.loggedIn = true;
    $scope.personajeSeleccionado = {};

    $scope.seleccionarPersonaje = function(personaje) {          
        $scope.personajeSeleccionado = personaje;
    }
  }
]);




dueloApp.controller('DueloLoginCtrl',`['DueloService', '$scope', function(DueloService, $scope){

}]);


dueloApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../src/main/webapp/login.html',
        controller: 'DueloLoginCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);