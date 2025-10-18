
import *as THREE from "./three.module.js";

export default function cerveza ({ x,y,z}){


//CUERPO DE LA BOTELLA
var cuerpoGeo = new THREE.CylinderGeometry(1, 1, 6, 16)
var cuerpoMat = new THREE.MeshLambertMaterial({
  color: 0x8b4513,
  transparent: true,
  opacity: 0.85
})
var cuerpo = new THREE.Mesh(cuerpoGeo, cuerpoMat)
cuerpo.position.set(0, 3, 0)
//scene.add(cuerpo)


//CUELLO DE LA BOTELLA
var cuelloGeo = new THREE.CylinderGeometry(0.5, 0.7, 2.5, 12)
var cuelloMat = new THREE.MeshLambertMaterial({
  color: 0x8b4513,
  transparent: true,
  opacity: 0.85
})
var cuello = new THREE.Mesh(cuelloGeo, cuelloMat)
cuello.position.set(0, 7, 0)
//scene.add(cuello)

//TAPA METÁLICA
var tapaGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.3, 16)
var tapaMat = new THREE.MeshLambertMaterial({ color: 0xc0c0c0 })
var tapa = new THREE.Mesh(tapaGeo, tapaMat)
tapa.position.set(0, 8.4, 0)
//scene.add(tapa)

// BASE DE LA BOTELLA 
var baseGeo = new THREE.SphereGeometry(1, 16, 16)
var baseMat = new THREE.MeshLambertMaterial({
  color: 0x8b4513,
  transparent: true,
  opacity: 0.85
})
var base = new THREE.Mesh(baseGeo, baseMat)
base.position.set(0, 0, 0)
//scene.add(base)


 const CERVEZA= new THREE.Group();
    CERVEZA.add(cuerpo,cuello,tapa,  base );
    CERVEZA.position.set(x,y,z);
    
    
    
    return CERVEZA;

}