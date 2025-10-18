


import *as THREE from "./three.module.js";

export default function pancito ({ x,y,z}){

// Base 
var panbase = new THREE.SphereGeometry(0.8, 16, 16);
var panMat = new THREE.MeshBasicMaterial({ color: 0xe0a060 }); // color pan dorado
var pancito = new THREE.Mesh(panbase, panMat);
pancito.scale.set(1.3, 0.7, 1.3);
pancito.position.set(0, -0.5, 0);
//scene.add(pancito);

// Bolita
var bolita = new THREE.SphereGeometry(0.25, 16, 16);
var bolitaMat = new THREE.MeshBasicMaterial({ color: 0xd18b47 });
var bolitita = new THREE.Mesh(bolita, bolitaMat);
bolitita.position.set(0, 0.1, 0);
//scene.add(bolitita);

//  huesitos
var huesito = new THREE.SphereGeometry(0.15, 16, 16);
var huesitoMat = new THREE.MeshBasicMaterial({ color: 0xd18b47 });

// Huesito 1
var huesito1 = new THREE.Mesh(huesito, huesitoMat);
huesito1.scale.set(1.8, 0.5, 0.5);
huesito1.rotation.z = Math.PI / 0.1;
huesito1.position.set(0.4, 0.1, 0);
//scene.add(huesito1);

// Huesito 2
var huesito2 = new THREE.Mesh(huesito, huesitoMat);
huesito2.scale.set(1.8, 0.5, 0.5);
huesito2.rotation.z = -Math.PI / 0.1;
huesito2.position.set(-0.4, 0.1, 0);
//scene.add(huesito2);

// Huesito 3 (al frente)
var huesito3 = new THREE.Mesh(huesito, huesitoMat);
huesito3.scale.set(1.8, 0.5, 0.5);
huesito3.rotation.y = Math.PI / 2;
huesito3.position.set(0, 0.1, 0.4);
//scene.add(huesito3);

// Huesito 4 (atrás)
var huesito4 = new THREE.Mesh(huesito, huesitoMat);
huesito4.scale.set(1.8, 0.5, 0.5);
huesito4.rotation.y = -Math.PI / -2;
huesito4.position.set(0, 0.1, -0.4);
//scene.add(huesito4);

   const PANCITO= new THREE.Group();
    PANCITO.add(pancito, bolitita,huesito1,huesito2,huesito3,huesito4 );
    PANCITO.position.set(x,y,z);
    
    
    
    return PANCITO;

}