(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [
        '$location',
        controller
    ]);

    function controller($location) {
        var vm = this;

        vm.isActive = function(route) {
            return route === $location.path();
        };
    }

})('turbo-batman', 'shell', angular);