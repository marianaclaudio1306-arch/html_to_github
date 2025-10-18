import *as THREE from "./three.module.js";

export default function jugo ({ x,y,z}){

//ENVASE DE JUGO 
var texturaJugo = new THREE.TextureLoader().load('imagenes/h.jpg'); 
var materialJugo = new THREE.MeshLambertMaterial({ map: texturaJugo });

var cuerpoJugo = new THREE.Mesh(
  new THREE.BoxGeometry(3, 6, 3),
  materialJugo
);
//scene.add(cuerpoJugo);
cuerpoJugo.position.set(0, 3, 0);

//TAPA DEL JUGO
var tapaJugo = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.5, 0.6, 12),
  new THREE.MeshLambertMaterial({ color: 0x000000})
);
//scene.add(tapaJugo);
tapaJugo.position.set(0, 6, 1);


const JUGO= new THREE.Group();
    JUGO.add(cuerpoJugo, tapaJugo,);
    JUGO.position.set(x,y,z);
    
    
    
    return JUGO;

}