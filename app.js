angular.module('zombie', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('weapons',{
        templateUrl:'index.html',
        controller:'weaponsCtrl',
        url:'/weapons'
      });
  });
