
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CAMERA_MODES = {
    PERSPECTIVE: 0
};

export class App3D {
    constructor(domElement = document.body) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this._cameraP = new THREE.PerspectiveCamera();

        this.domElement = domElement;
        this._cameraMode = CAMERA_MODES.PERSPECTIVE;

        this.controls = new OrbitControls(this._cameraP, this.domElement);

        this.renderer.setAnimationLoop(() => {
            this.renderer.render(this.scene, this.camera);
        });
    }

    get domElement() {
        return this.renderer.domElement.parentNode;
    }

    set domElement(domElement) {
        const { clientWidth: width, clientHeight: height } = domElement;

        this.renderer.setSize(width, height);

        this._cameraP.fov = 75;
        this._cameraP.aspect = width / height;
        this._cameraP.near = 0.1;
        this._cameraP.far = 1000;
        this._cameraP.updateProjectionMatrix();

        domElement.appendChild(this.renderer.domElement);
    }

    get camera() {
        if (this._cameraMode === CAMERA_MODES.PERSPECTIVE) {
            return this._cameraP;
        }
    }

    set camera(mode) {
        this._cameraMode = mode;
    }
}
