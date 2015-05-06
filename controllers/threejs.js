(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, [controller]);

    function controller() {
        var vm = this;

        var cameraRot = 0;

        var screenWidth = 600; //window.innerWidth
        var screenHeight = 400; //window.innerHeight

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(45, screenWidth / screenHeight, 0.1, 100);
        
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(screenWidth, screenHeight);
        renderer.setClearColor(0xffffff, 1);
        renderer.shadowMapEnabled = true;
        renderer.shadowMapSoft = true;
        document.getElementById('threejs-canvas').appendChild(renderer.domElement);

        var dynLight = getLight();
        //scene.add(new THREE.AmbientLight(0x808080));        
        scene.add(new THREE.AmbientLight(0xaaaaaa));
        scene.add(dynLight);
        scene.fog = new THREE.Fog(0xffffff, 6, 16);

        scene.add(getPlane());
        scene.add(getPlatform());
        scene.add(getRoof());
        scene.add(getPillar(2.5));
        scene.add(getPillar(-2.5));

        camera.position.set(8, 3, 8);
        camera.lookAt(new THREE.Vector3(0, 2, 0));

        var render = function () {
            requestAnimationFrame(render);

            cameraRot += .5;
            camera.position.x = 8 * Math.cos(cameraRot * Math.PI / 180);
            camera.position.z = 8 * Math.sin(cameraRot * Math.PI / 180);
            camera.lookAt(new THREE.Vector3(0, 2, 0));

            renderer.render(scene, camera);
        };

        render();
    }

    function getLight() {
        var light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(5, 10, 1.5);
        light.castShadow = true;

        light.shadowDarkness = 0.5;
        light.shadowCameraNear = 0;
        light.shadowCameraFar = 50;

        light.shadowCameraLeft = -7;
        light.shadowCameraRight = 7;
        light.shadowCameraTop = 7;
        light.shadowCameraBottom = -7;

        light.shadowMapWidth = 1024;
        light.shadowMapHeight = 1024;
        return light;
    }

    function getPlane() {
        var geometry = new THREE.PlaneGeometry(20, 20);
        var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        return mesh;
    }

    function getPlatform() {
        var geometry = new THREE.BoxGeometry(5, .5, 10);
        var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = -5;
        mesh.position.y = .25;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        return mesh;
    }

    function getRoof() {
        var geometry = new THREE.BoxGeometry(5, .5, 10);
        var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = -5;
        mesh.position.y = 4.75;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        return mesh;
    }

    function getPillar(z) {
        var geometry = new THREE.BoxGeometry(.5, 5, .5);
        var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = -2.5;
        mesh.position.z = z;
        mesh.position.y = 2.5;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        return mesh;
    }

})('turbo-batman', 'threejs', angular);