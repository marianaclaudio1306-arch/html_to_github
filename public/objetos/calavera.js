import *as THREE from "./three.module.js";

export default function calavera ({ x,y,z}){




// Espacio para colocar los objetos



// Cabeza


var cabecita = new THREE.SphereGeometry(1, 32, 32);
var cabecitaMat = new THREE.MeshBasicMaterial({ color: 0xffffe0 });
var cabecitaMesh = new THREE.Mesh(cabecita, cabecitaMat);
cabecitaMesh.scale.set(1, 1.2, 1);
cabecitaMesh.position.set(0, 0, 0);
//scene.add(cabecitaMesh);


//mandibula
var mandi = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
var mandiMat = new THREE.MeshBasicMaterial({ color: 0xffffe0 });
var mandibula = new THREE.Mesh(mandi, mandiMat);
mandibula.position.set(0, -0.75, 0);
//scene.add(mandibula);

// Ojos
var ojo = new THREE.CircleGeometry(0.25, 32);
var ojoMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

var derojo = new THREE.Mesh(ojo, ojoMat);
derojo.position.set(-0.4, 0.2, 1);
//scene.add(derojo);

var izqojo = new THREE.Mesh(ojo, ojoMat);
izqojo.position.set(0.4, 0.2, 1);
//scene.add(izqojo);

// Nariz
var nariz = new THREE.CircleGeometry(0.08, 16);
var narizMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

var nariIzq = new THREE.Mesh(nariz, narizMat);
nariIzq.position.set(-0.1, -0.1, 1);
//scene.add(nariIzq);

var nariDer = new THREE.Mesh(nariz, narizMat);
nariDer.position.set(0.1, -0.1, 1);
//scene.add(nariDer);

// Boca 
var boca = new THREE.BoxGeometry(0.8, 0.05, 0.05);
var bocaMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
var bocaMesh = new THREE.Mesh(boca, bocaMat);
bocaMesh.position.set(0, -0.4, 1);
//scene.add(bocaMesh);

// Dientes
var dienteGeo = new THREE.BoxGeometry(0.02, 0.2, 0.05);
var dienteMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

var diente1 = new THREE.Mesh(dienteGeo, dienteMat);
diente1.position.set(-0.32, -0.4, 1.01);
//scene.add(diente1);

var diente2 = new THREE.Mesh(dienteGeo, dienteMat);
diente2.position.set(-0.16, -0.4, 1.01);
//scene.add(diente2);

var diente3 = new THREE.Mesh(dienteGeo, dienteMat);
diente3.position.set(0, -0.4, 1.01);
//scene.add(diente3);

var diente4 = new THREE.Mesh(dienteGeo, dienteMat);
diente4.position.set(0.16, -0.4, 1.01);
//scene.add(diente4);

var diente5 = new THREE.Mesh(dienteGeo, dienteMat);
diente5.position.set(0.32, -0.4, 1.01);
//scene.add(diente5);

 const CV= new THREE.Group();
    CV.add(cabecitaMesh,mandibula,derojo,izqojo,nariIzq,nariDer,bocaMesh,
     diente1,diente2,diente3,diente4,diente5);
    CV.position.set(x,y,z);
    
    
    
    return CV;

}
