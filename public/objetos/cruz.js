import *as THREE from "./three.module.js";

export default function cruz({ x,y,z}){



// Espacio para colocar los objetos
    
      // CRUZ 
var materialCruz = new THREE.MeshLambertMaterial(
    { color: 0x996703, side: THREE.DoubleSide });

// Parte vertical
var geometryVertical = new THREE.BoxGeometry(2, 20, 2);
var cruzVertical = new THREE.Mesh(geometryVertical, materialCruz);
//scene.add(cruzVertical);
cruzVertical.position.set(0, 15, 0);

// Parte horizontal
var geometryHorizontal = new THREE.BoxGeometry(10, 2, 2);
var cruzHorizontal = new THREE.Mesh(geometryHorizontal, materialCruz);
//scene.add(cruzHorizontal);
cruzHorizontal.position.set(0, 18, 0);

// Agrupamos las dos partes en un solo objeto
var cruz = new THREE.Group();
cruz.add(cruzVertical);
cruz.add(cruzHorizontal);
//scene.add(cruz);

// Posición de toda la cruz
cruz.position.set(0, 0, -20);

  const CRUZ= new THREE.Group();
    CRUZ.add(cruzVertical,cruzHorizontal,cruz);
    CRUZ.position.set(x,y,z);
    
    
    
    return CRUZ;

}

