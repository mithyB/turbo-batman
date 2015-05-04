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
        }
    ];

    ng.module(moduleId).constant(valueId, value);

})('turbo-batman', 'routes', angular)
