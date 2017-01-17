export default (['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('layout', {
                template: '<layout-directive></layout-directive>'
            })
            .state('layout.main', {
                url: '/',
                template: '<main-directive></main-directive>'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
]);
