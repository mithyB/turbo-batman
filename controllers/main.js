(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [controller]);

    function controller() {
        var vm = this;

        $.get('README.md').then(success, failed);

        function success(data) {
            vm.readme = markdown.toHTML(data);
        }

        function failed(error) {
            console.log(error);
        }
    }

})(appName, 'main', angular);