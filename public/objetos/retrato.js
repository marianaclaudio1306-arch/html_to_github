import *as THREE from "./three.module.js";

export default function retr ({ x,y,z}){





/////////////////////////////////////////////// MARCO DEL RETRATO

var geometryMarco = new THREE.BoxGeometry(30, 40, 1);
var materialMarco = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
var marco = new THREE.Mesh(geometryMarco, materialMarco);
//scene.add(marco);
marco.position.set(0, 20, -1); // detrás del retrato

/////////////////////////////////////////////// RETRATO

// Cabeza
var geometryCabeza = new THREE.SphereGeometry(10, 32, 32);
var materialCabeza = new THREE.MeshLambertMaterial({ color: 0xFFD1A4 });
var cabeza = new THREE.Mesh(geometryCabeza, materialCabeza);
//scene.add(cabeza);
cabeza.position.set(0, 20, 0);

// Ojos
var geometryOjo = new THREE.SphereGeometry(1.5, 16, 16);
var materialOjo = new THREE.MeshLambertMaterial({ color: 0x000000 });

var ojoIzq = new THREE.Mesh(geometryOjo, materialOjo);
var ojoDer = new THREE.Mesh(geometryOjo, materialOjo);
//scene.add(ojoIzq, ojoDer);
ojoIzq.position.set(-4, 22, 9);
ojoDer.position.set(4, 22, 9);

// Nariz
var geometryNariz = new THREE.ConeGeometry(1, 3, 8);
var materialNariz = new THREE.MeshLambertMaterial({ color: 0xFFB380 });
var nariz = new THREE.Mesh(geometryNariz, materialNariz);
//scene.add(nariz);
nariz.position.set(0, 20, 9);


// Boca
var geometryBoca = new THREE.BoxGeometry(6, 1, 0.5);
var materialBoca = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
var boca = new THREE.Mesh(geometryBoca, materialBoca);
//scene.add(boca);
boca.position.set(0, 16, 9);

// Cabello (cilindro hueco)
var geometryCabello = new THREE.CylinderGeometry(11, 11, 4, 32, 1, true);
var materialCabello = new THREE.MeshLambertMaterial({ color: 0x331A00, side: THREE.DoubleSide });
var cabello = new THREE.Mesh(geometryCabello, materialCabello);
//scene.add(cabello);
cabello.position.set(0, 27, 0);

// Cuello
var geometryCuello = new THREE.CylinderGeometry(3, 3, 4, 20);
var materialCuello = new THREE.MeshLambertMaterial({ color: 0xFFD1A4 });
var cuello = new THREE.Mesh(geometryCuello, materialCuello);
//scene.add(cuello);
cuello.position.set(0, 12, 0);


const RT= new THREE.Group();
RT.add(marco,cabeza,ojoIzq,ojoDer,nariz,boca,cabello,cuello);
RT.position.set(x,y,z);



return RT;
 }