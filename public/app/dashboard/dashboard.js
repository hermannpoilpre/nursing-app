angular.module('dashboard', [])
    .config(function($stateProvider){
        $stateProvider
            .state('nursing.dashboard', {
                url: '/',
                views: {
                    'content@': {
                        controller: 'DashboardCtrl as dashboardCtrl',
                        templateUrl: 'app/dashboard/dashboard.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('DashboardCtrl', function DashboardCtrl(){
        var dashboardCtrl = this;
    })
;
