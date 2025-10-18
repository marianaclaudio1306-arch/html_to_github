import *as THREE from "./three.module.js";

export default function papel ({ x,y,z}){




//texturita
var loader = new THREE.TextureLoader();
var texturaPapel = loader.load('imagenes/papel.png'); 
var papelMat = new THREE.MeshBasicMaterial({
    color: 0x21F8FF, 
    map: texturaPapel,    
    side: THREE.DoubleSide 
});

// planito
var papelGeo = new THREE.PlaneGeometry(4, 2);
var papel = new THREE.Mesh(papelGeo, papelMat);
papel.position.set(0, 2, 0);
//scene.add(papel);


const P= new THREE.Group();
    P.add(papel);
    P.position.set(x,y,z);
    
    
    
    return P;

}