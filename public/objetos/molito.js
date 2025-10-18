import *as THREE from "./three.module.js";

export default function molito ({ x,y,z}){





// Espacio para colocar los objetos

// Plato
var plato = new THREE.CylinderGeometry(1.2, 1.2, 0.1, 32);
var platoMat = new THREE.MeshBasicMaterial({ color: 0xD1CFCF });
var platoMesh = new THREE.Mesh(plato, platoMat);
platoMesh.position.set(-0.2, -1, 0);
//scene.add(platoMesh);

// Muslito
var musli = new THREE.SphereGeometry(0.4, 22, 16);
var musliMat = new THREE.MeshBasicMaterial({ color: 0x733E01 }); // color naranja caricatura
var musliMesh = new THREE.Mesh(musli, musliMat);
musliMesh.scale.set(1, 0.8, 1);
musliMesh.position.set(0, -0.6, 0);
//scene.add(musliMesh);

// Huesito
var huesito = new THREE.CylinderGeometry(0.1, 0.1, 0.7, 20);
var huesitoMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
var huesitoMesh = new THREE.Mesh(huesito, huesitoMat);
huesitoMesh.rotation.z = Math.PI / 2;
huesitoMesh.position.set(-0.5,-0.6, 0);
//scene.add(huesitoMesh);

var huesitofin = new THREE.SphereGeometry(0.15, 16, 16);
var huesitofinMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
var huesitofinMesh = new THREE.Mesh(huesitofin, huesitofinMat);
huesitofinMesh.position.set(-0.80, -0.6, 0.1);
//scene.add(huesitofinMesh);

var huesitofinMesh2 = new THREE.Mesh(huesitofin, huesitofinMat);
huesitofinMesh2.position.set(-0.80, -0.6, -0.1);
//scene.add(huesitofinMesh2);

//molito
var molito = new THREE.CylinderGeometry(1, 1, 0., 32);
var molitoMat = new THREE.MeshBasicMaterial({ color: 0x944F00});
var molito = new THREE.Mesh(molito, molitoMat);
molito.position.set(-0.2, -0.90, 0);
//scene.add(molito);


    const ML= new THREE.Group();
    ML.add(platoMesh,musliMesh,huesitoMesh,huesitofinMesh,huesitofinMesh2,
      molito);
    ML.position.set(x,y,z);
    
    
    
    return ML;

}