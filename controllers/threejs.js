(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [controller]);

    function controller() {
        var vm = this;

        var screenWidth = 600; //window.innerWidth
        var screenHeight = 400; //window.innerHeight

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(65, screenWidth / screenHeight, 0.1, 10);
        //var camera = new THREE.OrthographicCamera(screenWidth / -400, screenWidth / 400, screenHeight / 400, screenHeight / -400, 1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(screenWidth, screenHeight);
        renderer.setClearColor(0xffffff, 1);
        document.getElementById('threejs-canvas').appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(10, 5, 3);
        scene.add(directionalLight);

        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(-10, -5, 3);
        scene.add(directionalLight);

        camera.position.z = 2;
        cube.rotation.x = 35;

        var render = function () {
            requestAnimationFrame(render);

            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        render();
    }

})('turbo-batman', 'threejs', angular);