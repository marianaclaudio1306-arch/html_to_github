

import *as THREE from "./three.module.js";

export default function coca ({ x,y,z}){

/// LATA DE REFRESCO

// CUERPO (con textura)
var textura = new THREE.TextureLoader().load('./imagenes/cocaa.jpg'); 
var cuerpoGeo = new THREE.CylinderGeometry(5, 5, 12, 32);
var cuerpoMat = new THREE.MeshLambertMaterial({ map: textura });
var cuerpo = new THREE.Mesh(cuerpoGeo, cuerpoMat);
//scene.add(cuerpo);
cuerpo.position.set(0, 0, 0);

// TAPA SUPERIOR
var tapaSupGeo = new THREE.CylinderGeometry(5, 5, 0.5, 32);
var tapaSupMat = new THREE.MeshLambertMaterial({ color: 0x595959});
var tapaSup = new THREE.Mesh(tapaSupGeo, tapaSupMat);
//scene.add(tapaSup);
tapaSup.position.set(0, 6.3, 0);

// TAPA INFERIOR
var tapaInfGeo = new THREE.CylinderGeometry(5, 5, 0.5, 32);
var tapaInfMat = new THREE.MeshLambertMaterial({ color: 0x595959});
var tapaInf = new THREE.Mesh(tapaInfGeo, tapaInfMat);
//scene.add(tapaInf);
tapaInf.position.set(0, -6.3, 0);

/// PEQUEÑO BOTÓN DE ALUMINIO 
var botonGeo = new THREE.BoxGeometry(2, 0.2, 1);
var botonMat = new THREE.MeshLambertMaterial({ color: 0x999999 });
var boton = new THREE.Mesh(botonGeo, botonMat);
//scene.add(boton);
boton.position.set(0, 6.7, 2);

const COCA= new THREE.Group();
    COCA.add(cuerpo, tapaSup, tapaInf,boton );
    COCA.position.set(x,y,z);
    
    
    
    return COCA;
}