(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [
        '$scope',
        controller
    ]);

    function controller($scope) {
        var vm = this;

        $.get('data/tutorial.md').then(success, failed);

        function success(data) {
            vm.tutorial = markdown.toHTML(data);
            $scope.$apply();
        }

        function failed(error) {
            console.log(error);
        }
    }

})(appName, 'tutorials', angular);