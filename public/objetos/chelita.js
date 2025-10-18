import *as THREE from "./three.module.js";

export default function chelita({ x,y,z}){


 // base
var base = new THREE.CylinderGeometry(0.6, 0.7, 2.2, 32);
var baseMat = new THREE.MeshPhongMaterial({ color: 0x688539, transparent: true, opacity: 0.8 });
var baseMesh = new THREE.Mesh(base, baseMat);
baseMesh.position.set(0, 0, 0);
//scene.add(baseMesh);

// cilindro
var cuello = new THREE.CylinderGeometry(0.25, 0.3, 0.7, 32);
var cuelloMat = new THREE.MeshPhongMaterial({ color: 0x688539, transparent: true, opacity: 0.8});
var cuelloMesh = new THREE.Mesh(cuello, cuelloMat);
cuelloMesh.position.set(0, 1.45, 0);
//scene.add(cuelloMesh);

// tapita
var tapaGeo = new THREE.CylinderGeometry(0.27, 0.27, 0.1, 32);
var tapaMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
var tapaMesh = new THREE.Mesh(tapaGeo, tapaMat);
tapaMesh.position.set(0, 1.85, 0);
//scene.add(tapaMesh);

// etiqueta 
var loader = new THREE.TextureLoader();
var etiquetaTextura = loader.load('imagenes/etiqueta.png'); // 👈 cambia esta ruta por la de tu imagen

var etiquetaMat = new THREE.MeshBasicMaterial({
    color: 0xC4B63F,
    map: etiquetaTextura,
    side: THREE.DoubleSide
});

var etiquetaGeo = new THREE.PlaneGeometry(0.8, 0.6);
var etiqueta = new THREE.Mesh(etiquetaGeo, etiquetaMat);
etiqueta.position.set(0, 0.2, 0.7); // un poquito al frente del cuerpo
//scene.add(etiqueta); 

const CH= new THREE.Group();
    CH.add(baseMesh,cuelloMesh,tapaMesh,etiqueta);
    CH.position.set(x,y,z);
    
    
    
    return CH;

}