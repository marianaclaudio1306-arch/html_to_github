import *as THREE from "./three.module.js";

export default function papel2 ({ x,y,z}){




//texturita
var loader = new THREE.TextureLoader();
var texturaPapel = loader.load('imagenes/papel.png'); 
var papelMat = new THREE.MeshBasicMaterial({
    color: 0xF54A0C, 
    map: texturaPapel,    
    side: THREE.DoubleSide 
});

// planito
var papelGeo = new THREE.PlaneGeometry(4, 2);
var papel = new THREE.Mesh(papelGeo, papelMat);
papel.position.set(0, 2, 0);
//scene.add(papel);


const P2= new THREE.Group();
    P2.add(papel);
    P2.position.set(x,y,z);
    
    
    
    return P2;

}