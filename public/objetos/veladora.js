
import *as THREE from "./three.module.js";

export default function veladora ({ x,y,z}){


//CUERPO DE LA VELADORA (vidrio)
var vasoGeo = new THREE.CylinderGeometry(1.5, 1.6, 4, 32)
var vasoMat = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.4
})
var vaso = new THREE.Mesh(vasoGeo, vasoMat)
//scene.add(vaso)
vaso.position.set(0, 2, 0)

//CERA (parte interna)
var ceraGeo = new THREE.CylinderGeometry(1.4, 1.4, 3.2, 32)
var ceraMat = new THREE.MeshLambertMaterial({ color: 0xFFF8DC })
var cera = new THREE.Mesh(ceraGeo, ceraMat)
//scene.add(cera)
cera.position.set(0, 2, 0)

//MECHA
var mechaGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8)
var mechaMat = new THREE.MeshLambertMaterial({ color: 0x000000 })
var mecha = new THREE.Mesh(mechaGeo, mechaMat)
//scene.add(mecha)
mecha.position.set(0, 3.1, 0)

//FLAMA
var flamaGeo = new THREE.SphereGeometry(0.25, 12, 12)
var flamaMat = new THREE.MeshLambertMaterial({ color: 0xFFA500 })
var flama = new THREE.Mesh(flamaGeo, flamaMat)
//scene.add(flama)
flama.position.set(0, 3.5, 0)


const VELADORA= new THREE.Group();
    VELADORA.add(vaso,cera, mecha,flama );
    VELADORA.position.set(x,y,z);
    
    
    
    return VELADORA;

}