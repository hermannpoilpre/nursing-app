angular.module('Nursing', [
    'ui.router',
    'ui.bootstrap',
    'header',
    'sidebar',
    'dashboard'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('nursing', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
;
