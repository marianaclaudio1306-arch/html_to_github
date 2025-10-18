import *as THREE from "./three.module.js";

export default function vaso_agua ({ x,y,z}){





// Parte exterior del vaso (un cilindro transparente)
var geometryVaso = new THREE.CylinderGeometry(6, 5, 12, 32, 1, true); 
var materialVaso = new THREE.MeshPhongMaterial({
  color: 0x87CEFA,     // tono azul claro
  transparent: true,
  opacity: 0.3,        // transparente
  side: THREE.DoubleSide
});
var vaso = new THREE.Mesh(geometryVaso, materialVaso);
//scene.add(vaso);
vaso.position.set(0, 6, 0);

// Base del vaso
var geometryBase = new THREE.CircleGeometry(5, 32);
var materialBase = new THREE.MeshPhongMaterial({
  color: 0xA9A9A9, side: THREE.DoubleSide
});
var base = new THREE.Mesh(geometryBase, materialBase);
//scene.add(base);
base.rotation.x = 1.5708;
base.position.set(0, 0, 0);

// Agua (otro cilindro dentro del vaso)
var geometryAgua = new THREE.CylinderGeometry(5.2, 4.5, 6, 32);
var materialAgua = new THREE.MeshPhongMaterial({
  color: 0x1E90FF,     // azul agua
  transparent: true,
  opacity: 0.6,
  side: THREE.DoubleSide
});
var agua = new THREE.Mesh(geometryAgua, materialAgua);
//scene.add(agua);
agua.position.set(0, 3, 0);

// Borde del vaso (solo decorativo)
var geometryBorde = new THREE.TorusGeometry(5.8, 0.2, 16, 100);
var materialBorde = new THREE.MeshLambertMaterial({
  color: 0xB0C4DE
});
var borde = new THREE.Mesh(geometryBorde, materialBorde);
//scene.add(borde);
borde.position.set(0, 12, 0);
borde.rotation.x = 1.5708;


const VA= new THREE.Group();
    VA.add(vaso,base,agua,borde);
    VA.position.set(x,y,z);
    
    
    
    return VA;

}