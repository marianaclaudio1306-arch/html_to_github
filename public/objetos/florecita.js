
import *as THREE from "./three.module.js";

export default function flor ({ x,y,z}){


//  FLORECITA 


//  MATERIALES 
var materialPetalo = new THREE.MeshLambertMaterial({ color: 0xFF8D30 }); // rosa pastel
var materialCentro = new THREE.MeshLambertMaterial({ color: 0xFFDD00}); // amarillo cálido
var materialTallo  = new THREE.MeshLambertMaterial({ color: 0x2E8B57 }); // verde natural

// CENTRO DE LA FLOR
var centro = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), materialCentro);
//scene.add(centro);
centro.position.set(0, 12, -25);

// PÉTALOS
var petalo1 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo1.position.set(3, 12, -25);
//scene.add(petalo1);

var petalo2 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo2.position.set(-3, 12, -25);
//scene.add(petalo2);

var petalo3 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo3.position.set(0, 15, -25);
//scene.add(petalo3);

var petalo4 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo4.position.set(0, 9, -25);
//scene.add(petalo4);

var petalo5 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo5.position.set(2.2, 14, -25);
//scene.add(petalo5);

var petalo6 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo6.position.set(-2.2, 14, -25);
//scene.add(petalo6);

var petalo7 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo7.position.set(-2, 10, -25);
//scene.add(petalo7);

var petalo8 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), materialPetalo);
petalo8.position.set(2, 10, -25);
//scene.add(petalo8);


// TALLO
var tallo = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 15, 16), materialTallo);
//scene.add(tallo);
tallo.position.set(0, 4.5, -25);

      



const FLOR= new THREE.Group();
    FLOR.add(centro, petalo1, petalo2, petalo3, petalo4, petalo5,petalo6, petalo7, petalo8, tallo);
   FLOR.position.set(x,y,z);
    
    
    
    return FLOR;

}