import *as THREE from "./three.module.js";

export default function copa_vino({ x,y,z}){

//// COPA DE VINO ////


// BASE
var geometryBase = new THREE.CylinderGeometry(5, 5, 0.5, 32);
var materialBase = new THREE.MeshLambertMaterial({
    color: 0xD3D3D3,
    side: THREE.DoubleSide
});
var base = new THREE.Mesh(geometryBase, materialBase);
//scene.add(base);
base.position.set(0, 0, 0);


// TALLO
var geometryTallo = new THREE.CylinderGeometry(0.5, 0.5, 5, 32);
var materialTallo = new THREE.MeshLambertMaterial({
    color: 0xC0C0C0,
    side: THREE.DoubleSide
});
var tallo = new THREE.Mesh(geometryTallo, materialTallo);
//scene.add(tallo);
tallo.position.set(0, 2.5, 0);


// COPA (media esfera orientada hacia arriba)
var geometryCopa = new THREE.SphereGeometry(5, 32, 32, 0, 6.2831, 1.57, 1.57); 
var materialCopa = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.2,
    side: THREE.DoubleSide
});
var copa = new THREE.Mesh(geometryCopa, materialCopa);
//scene.add(copa);
copa.position.set(0, 10, 0);


// BORDE 
var geometryBorde = new THREE.TorusGeometry(4.9, 0.1, 16, 100);
var materialBorde = new THREE.MeshLambertMaterial({
    color: 0xD3D3D3
});
var borde = new THREE.Mesh(geometryBorde, materialBorde);
//scene.add(borde);
borde.position.set(0, 10, 0);
borde.rotation.x = 1.5708; // 90 grados



//LIQUIDO 

var geometryVino = new THREE.CylinderGeometry(4.6, 2.5, 4, 40);
var materialVino = new THREE.MeshPhongMaterial({
    color: 0x8B0000,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide
});
var vino = new THREE.Mesh(geometryVino, materialVino);
//scene.add(vino);
vino.position.set(0, 8, 0);

 const V= new THREE.Group();
    V.add(base,tallo,copa,borde,vino);
    V.position.set(x,y,z);
    
    
    
    return V;

}