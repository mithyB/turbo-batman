(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [
        '$scope',
        '$location',
        '$anchorScroll',
        controller
    ]);

    function controller($scope, $location, $anchorScroll) {
        var vm = this;

        $.get('data/tutorial.md').then(success, failed);

        function success(data) {
            var regexOutput = data.replace(/\(#([a-z0-9\-]*)\)/gi,
                    '(javascript:scrollTo&#40;&apos;$1&apos;&#41;)');
            vm.tutorial = marked(regexOutput);

            window.scrollTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };

            $scope.$apply();
        }

        function failed(error) {
            console.log(error);
        }
    }

})(appName, 'tutorials', angular);