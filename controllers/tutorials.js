(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [
        controller
    ]);

    function controller() {
        var vm = this;

        $.get('data/tutorial.md').then(success, failed);

        function success(data) {
            vm.tutorial = markdown.toHTML(data);
        }

        function failed(error) {
            console.log(error);
        }
    }

})(appName, 'tutorials', angular);