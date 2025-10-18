import *as THREE from "./three.module.js";

export default function jarrita ({ x,y,z}){



// Espacio para colocar los objetos


//CUERPO 
var cuerpoGeo = new THREE.CylinderGeometry(1.4, 1.8, 4, 32)
var cuerpoMat = new THREE.MeshLambertMaterial({ color: 0xA0522D }) // color barro
var cuerpo = new THREE.Mesh(cuerpoGeo, cuerpoMat)
//scene.add(cuerpo)
cuerpo.position.set(0, 2, 0)

//BASE
var baseGeo = new THREE.CylinderGeometry(0.9, 1.4, 0.6, 32)
var baseMat = new THREE.MeshLambertMaterial({ color: 0x8B4513 })
var base = new THREE.Mesh(baseGeo, baseMat)
//scene.add(base)
base.position.set(0, 0.3, 0)

//CUELLO
var cuelloGeo = new THREE.CylinderGeometry(1.1, 1.2, 1.2, 32)
var cuelloMat = new THREE.MeshLambertMaterial({ color: 0xA0522D })
var cuello = new THREE.Mesh(cuelloGeo, cuelloMat)
//scene.add(cuello)
cuello.position.set(0, 4.6, 0)

//BORDE SUPERIOR
var bordeGeo = new THREE.TorusGeometry(1.1, 0.15, 16, 100)
var bordeMat = new THREE.MeshLambertMaterial({ color: 0x8B4513 })
var borde = new THREE.Mesh(bordeGeo, bordeMat)
//scene.add(borde)
borde.position.set(0, 5.2, 0)

//ASA 
var asaGeo = new THREE.TorusGeometry(0.9, 0.15, 16, 100, Math.PI)
var asaMat = new THREE.MeshLambertMaterial({ color: 0x8B4513 })
var asa = new THREE.Mesh(asaGeo, asaMat)
//scene.add(asa)
asa.position.set(1, 2.5, 0)
asa.rotation.z = -1.57

const J= new THREE.Group();
    J.add(cuerpo,base,cuello,borde,asa);
    J.position.set(x,y,z);
    
    
    
    return J;

}