import *as THREE from "./three.module.js";

export default function flauta ({ x,y,z}){



//PLATO 
var platoGeo = new THREE.CylinderGeometry(7, 7, 0.5, 32);
var platoMat = new THREE.MeshLambertMaterial({ color: 0xC9975D });
var plato = new THREE.Mesh(platoGeo, platoMat);
//scene.add(plato);
plato.position.set(0, -1.5, 0);

//BASE DE SALSA VERDE 
var salsaGeo = new THREE.CylinderGeometry(5.5, 5.5, 0.1, 32);
var salsaMat = new THREE.MeshLambertMaterial({ color: 0x6BAE4F });
var salsa = new THREE.Mesh(salsaGeo, salsaMat);
//scene.add(salsa);
salsa.position.set(0, -1.25, 0);

//ENCHILADAS (tortillas enrolladas)
var enchiladaMat = new THREE.MeshLambertMaterial({ color: 0xD9B77E }); // color tortilla

var e1 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 3, 20), enchiladaMat);
//scene.add(e1);
e1.position.set(-2, -1.0, 0);
e1.rotation.z = 1.57;

var e2 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 3, 20), enchiladaMat);
//scene.add(e2);
e2.position.set(0, -1.0, 0);
e2.rotation.z = 1.57;

var e3 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 3, 20), enchiladaMat);
//scene.add(e3);
e3.position.set(2, -1.0, 0);
e3.rotation.z = 1.57;



// CEBOLLA (aros blancos) 
var cebollaGeo = new THREE.TorusGeometry(0.4, 0.07, 8, 16);
var cebollaMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

var o1 = new THREE.Mesh(cebollaGeo, cebollaMat); 
//scene.add(o1); o1.position.set(-2, -0.6, 0.3);
var o2 = new THREE.Mesh(cebollaGeo, cebollaMat); 
//scene.add(o2); o2.position.set(0, -0.6, 0.2);
var o3 = new THREE.Mesh(cebollaGeo, cebollaMat); 
//scene.add(o3); o3.position.set(2, -0.6, 0.3);

//AGUACATE Y LIMÓN 
var aguacateGeo = new THREE.SphereGeometry(0.5, 16, 16);
var aguacateMat = new THREE.MeshLambertMaterial({ color: 0x568203 });
var aguacate = new THREE.Mesh(aguacateGeo, aguacateMat);
//scene.add(aguacate);
aguacate.position.set(-4, -1.0, 1);

var limonGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
var limonMat = new THREE.MeshLambertMaterial({ color: 0xC0FF66 });
var limon = new THREE.Mesh(limonGeo, limonMat);
//scene.add(limon);
limon.position.set(4, -1.1, -1);



const FLAU= new THREE.Group();
    FLAU.add(plato, salsa, e1, e2,e3, o1,o2,o3,aguacate,limon);
   FLAU.position.set(x,y,z);
    
    
    
    return FLAU;

}