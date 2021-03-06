dueloApp.controller('dueloDeLeyendasController',function($scope) {
      	$scope.personajeSeleccionado = {};
      	
      	$scope.posicionesDuelos = [
      	       {nombre:'TOP'},
      	       {nombre:'BOT'},
      	       {nombre:'JUNGLE'},
      	       {nombre:'MID'},
      	   ];
      	
      	$scope.personajes = [ 
      	                     {id:1, 
      	                     nombre: 'Rengar',
      	                     imagenSrc: 'images/Rengar.jpg',
      	                     especialidades: 'Poder de Defensa',
      	                     debilidades: 'Poder de Ataque',
      	                     mejorPosicion: 'Jungle',
      	                     estadiscaticas: [12,10,7,9,14,'Mid',1115]},
      	                     {id:2, 
      	                     nombre: 'Amumu',
      	                     imagenSrc: 'images/Amumu2.jpg',
      	                     especialidades: 'Poder de Habilidad',
      	                     debilidades: 'Poder de Ataque',
      	                     mejorPosicion: 'Mid',
      	                     estadiscaticas: [7,10,4,9,18,'Top',2005]},
      	                     {id:3, 
      	                     nombre: 'Ashe',
      	                     imagenSrc: 'images/Ashe2.jpg',
      	                     especialidades: 'Poder de Ataque',
      	                     debilidades: 'Poder de Habilidad',
      	                     mejorPosicion: 'Bot',
      	                     estadiscaticas: [6,10,7,9,2,'Bot',419]},
      	                     {id:4, 
      	                     nombre: 'Renekton',
      	                     imagenSrc: 'images/Renekton.jpg',
      	                     especialidades: 'Poder de Defensa',
      	                     debilidades: 'Poder de Ataque',
      	                     mejorPosicion: 'Top',
      	                     estadiscaticas: [12,10,7,9,14,'Mid',1078]},
      	                     {id:5, 
      	                     nombre: 'Sub 0',
      	                     imagenSrc: 'images/sub0.jpg',
      	                     especialidades: 'Poder de Habilidad',
      	                     debilidades: 'Poder de Ataque',
      	                     mejorPosicion: 'Top',
      	                     estadiscaticas: [17,10,7,9,18,'Jungle',1444]},
      	                     {id:6, 
      	                     nombre: 'Shana',
      	                     imagenSrc: 'images/shana.jpeg',
      	                     especialidades: 'Poder de Ataque',
      	                     debilidades: 'Poder de Habilidad',
      	                     mejorPosicion: 'Jungle',
      	                     estadiscaticas: [8,10,7,9,21,'Bot',780]},
      	                     {id:7, 
      	                     nombre: 'Acuagirl',
      	                     imagenSrc: 'images/acuaman.jpeg',
      	                     especialidades: 'Poder de Defensa',
      	                     debilidades: 'Poder de Ataque',
      	                     mejorPosicion: 'Mid',
      	                     estadiscaticas: [15,10,7,9,14,'Mid',322]},
      	                     {id:8, 
      	                     nombre: 'Alan',
      	                     imagenSrc: 'images/alan.jpg',
      	                     especialidades: 'Poder de Ataque',
      	                     debilidades: 'Poder de Defensa',
      	                     mejorPosicion: 'Bot',
      	                     estadiscaticas: [56,10,7,9,19,'Jungle',916]},
      	                   ];
      	
      	$scope.seleccionarPersonaje = function(personaje) {          
              $scope.personajeSeleccionado = personaje;
          }
      }

  );