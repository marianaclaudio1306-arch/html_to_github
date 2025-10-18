
import *as THREE from "./three.module.js";

export default function hamburguesa ({ x,y,z}){


//HAMBURGUESA 

// Plato
var platoGeo = new THREE.CylinderGeometry(4, 4, 0.25, 64);
var platoMat = new THREE.MeshStandardMaterial({ color: 0xffffff});
var plato = new THREE.Mesh(platoGeo, platoMat);
// scene.add(plato);
plato.position.set(0, -1.7, 0);

// Pan de abajo
var panAbajoGeo = new THREE.CylinderGeometry(2.5, 2.5, 0.6, 32);
var panAbajoMat = new THREE.MeshStandardMaterial({ color: 0xA97433});
var panAbajo = new THREE.Mesh(panAbajoGeo, panAbajoMat);
// scene.add(panAbajo);
panAbajo.position.set(0, -1.4, 0);

// Carne
var carneGeo = new THREE.CylinderGeometry(2.3, 2.3, 0.5, 32);
var carneMat = new THREE.MeshStandardMaterial({ color: 0x4B2E05 });
var carne = new THREE.Mesh(carneGeo, carneMat);
// scene.add(carne);
carne.position.set(0, -0.9, 0);

// Queso
var quesoGeo = new THREE.BoxGeometry(2.7, 0.1, 2.7);
var quesoMat = new THREE.MeshStandardMaterial({ color: 0xFFD700});
var queso = new THREE.Mesh(quesoGeo, quesoMat);
// scene.add(queso);
queso.position.set(0, -0.65, 0);

// Jitomate
var jitomateGeo = new THREE.CylinderGeometry(2.4, 2.4, 0.15, 32);
var jitomateMat = new THREE.MeshStandardMaterial({ color: 0xC73E1D});
var jitomate = new THREE.Mesh(jitomateGeo, jitomateMat);
// scene.add(jitomate);
jitomate.position.set(0, -0.5, 0);

// Lechuga
var lechugaGeo = new THREE.CylinderGeometry(2.5, 2.5, 0.15, 32);
var lechugaMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
var lechuga = new THREE.Mesh(lechugaGeo, lechugaMat);
// scene.add(lechuga);
lechuga.position.set(0, -0.35, 0);

// Pan de arriba
var panArribaGeo = new THREE.SphereGeometry(2.5, 32, 32, 0, 6.2832, 0, 1.5708);
var panArribaMat = new THREE.MeshStandardMaterial({ color: 0xA97433,});
var panArriba = new THREE.Mesh(panArribaGeo, panArribaMat);
// scene.add(panArriba);
panArriba.position.set(0, -0.3, 0);



const HAMBUR= new THREE.Group();
    HAMBUR.add(plato, panAbajo,carne, queso,jitomate, panArriba,lechuga);
   HAMBUR.position.set(x,y,z);
    
    
    
    return HAMBUR;

}