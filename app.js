angular.module('zombie', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        templateUrl:'home.html',
        controller:'mainCtrl',
        url:'/'
      })
        .state('foam',{
          templateUrl:'./weapons/foam/sword.html',
          controller: 'swordCtrl',
          url:'/foam'
        });
      });
