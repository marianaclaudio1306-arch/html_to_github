
import *as THREE from "./three.module.js";

export default function retratodelastres({ x,y,z}){



//COLORES DEL MARCO
var colorMarco = new THREE.MeshLambertMaterial({ color: 0x8B4513 }) 

//MARCO DEL RETRATO
var arriba = new THREE.Mesh(new THREE.BoxGeometry(8, 0.4, 0.4), colorMarco)
//scene.add(arriba)
arriba.position.set(0, 4, 0)

var abajo = new THREE.Mesh(new THREE.BoxGeometry(8, 0.4, 0.4), colorMarco)
//scene.add(abajo)
abajo.position.set(0, -4, 0)

var izquierda = new THREE.Mesh(new THREE.BoxGeometry(0.4, 8, 0.4), colorMarco)
//scene.add(izquierda)
izquierda.position.set(-3.8, 0, 0)

var derecha = new THREE.Mesh(new THREE.BoxGeometry(0.4, 8, 0.4), colorMarco)
//scene.add(derecha)
derecha.position.set(3.8, 0, 0)

//IMAGEN
var textura = new THREE.TextureLoader().load('imagenes/3.jpg') 
var fondoMat = new THREE.MeshLambertMaterial({ map: textura })
var fondoGeo = new THREE.PlaneGeometry(7, 7)
var fondo = new THREE.Mesh(fondoGeo, fondoMat)
//scene.add(fondo)
fondo.position.set(0, 0, -0.21) 



const MLG= new THREE.Group();
MLG.add(arriba, abajo, derecha, izquierda, fondo);
MLG.position.set(x,y,z);



return MLG;
 }