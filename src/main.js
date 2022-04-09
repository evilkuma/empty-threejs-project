
import * as THREE from 'three';

import { App3D } from "./App3D";

const app3D = new App3D();

const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
);

app3D.scene.add(box);
app3D.camera.position.z = 2;
