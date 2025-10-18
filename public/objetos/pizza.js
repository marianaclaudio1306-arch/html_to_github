import *as THREE from "./three.module.js";

export default function pizza({ x,y,z}){





//BASE DE LA PIZZA
var baseGeo = new THREE.CylinderGeometry(6, 6, 0.6, 32);
var baseMat = new THREE.MeshLambertMaterial({ color: 0xC68642 });
var basePizza = new THREE.Mesh(baseGeo, baseMat);
//scene.add(basePizza);
basePizza.position.set(0, -1.5, 0);

//SALSA
var salsaGeo = new THREE.CylinderGeometry(5.7, 5.7, 0.2, 32);
var salsaMat = new THREE.MeshLambertMaterial({ color: 0xB22222 });
var salsa = new THREE.Mesh(salsaGeo, salsaMat);
//scene.add(salsa);
salsa.position.set(0, -1.2, 0);

//QUESO 
var quesoGeo = new THREE.CylinderGeometry(5.5, 5.5, 0.2, 32);
var quesoMat = new THREE.MeshLambertMaterial({ color: 0xFFF68F });
var queso = new THREE.Mesh(quesoGeo, quesoMat);
//scene.add(queso);
queso.position.set(0, -1.0, 0);

// REBANADAS 
var corte1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 6), baseMat);
//scene.add(corte1);
corte1.position.set(0, -0.9, 0);
corte1.rotation.y = 0;

var corte2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 6), baseMat);
//scene.add(corte2);
corte2.position.set(0, -0.9, 0);
corte2.rotation.y = 1.05;

var corte3 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 6), baseMat);
//scene.add(corte3);
corte3.position.set(0, -0.9, 0);
corte3.rotation.y = 2.1;

// PEPERONI 
var peperoniMat = new THREE.MeshLambertMaterial({ color: 0xA52A2A });

var p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.2, 20), peperoniMat);
//scene.add(p1);
p1.position.set(2, -0.8, 1);

var p2 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.2, 20), peperoniMat);
//scene.add(p2);
p2.position.set(-1, -0.8, -2);

var p3 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.2, 20), peperoniMat);
//scene.add(p3);
p3.position.set(0, -0.8, 3);

var p4 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.2, 20), peperoniMat);
//scene.add(p4);
p4.position.set(-2, -0.8, 1);

// ACEITUNAS 
var aceitunaMat = new THREE.MeshLambertMaterial({ color: 0x2E8B57 });

var a1 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), aceitunaMat);
//scene.add(a1);
a1.position.set(1.5, -0.7, -1);

var a2 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), aceitunaMat);
//scene.add(a2);
a2.position.set(-2.5, -0.7, 0.5);

var a3 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), aceitunaMat);
//scene.add(a3);
a3.position.set(0.5, -0.7, 2);


const PZZ= new THREE.Group();
PZZ.add(basePizza, salsa,queso, corte1,corte2,corte3,p1,p2,p3,p4,a1,a2,a3);
PZZ.position.set(x,y,z);



return PZZ;
 }