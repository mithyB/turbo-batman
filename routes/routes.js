(function (moduleId, valueId, ng) {
    'use strict';

    var value = [
        {
            url: '/',
            config: {
                controller: 'main as vm',
                templateUrl: 'templates/main.html'
            }
        },
        {
            url: '/threejs',
            config: {
                controller: 'threejs as vm',
                templateUrl: 'templates/threejs.html'
            }
        },
        {
            url: '/tutorials',
            config: {
                controller: 'tutorials as vm',
                templateUrl: 'templates/tutorials.html'
            }
        }
    ];

    ng.module(moduleId).constant(valueId, value);

})(appName, 'routes', angular)
