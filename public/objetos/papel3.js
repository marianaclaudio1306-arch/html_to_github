import *as THREE from "./three.module.js";

export default function papel3 ({ x,y,z}){




//texturita
var loader = new THREE.TextureLoader();
var texturaPapel = loader.load('imagenes/papel.png'); 
var papelMat = new THREE.MeshBasicMaterial({
    color: 0xE00CEB, 
    map: texturaPapel,    
    side: THREE.DoubleSide 
});

// planito
var papelGeo = new THREE.PlaneGeometry(4, 2);
var papel = new THREE.Mesh(papelGeo, papelMat);
papel.position.set(0, 2, 0);
//scene.add(papel);

const P3= new THREE.Group();
    P3.add(papel);
    P3.position.set(x,y,z);
    
    
    
    return P3;

}