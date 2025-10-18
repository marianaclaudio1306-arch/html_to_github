import *as THREE from "./three.module.js";

export default function botellita({ x,y,z}){

// Espacio para colocar los objetos


//  Materiales
var vidrio = new THREE.MeshPhongMaterial({ color: 0xedd599, transparent: true, opacity: 0.8 });
var tapaMat = new THREE.MeshPhongMaterial({ color: 0xcc2b1d });
var etiquetaMat = new THREE.MeshPhongMaterial({ color: 0xf6d34b });
var etiquetitaMat = new THREE.MeshPhongMaterial({ color: 0x557a3b });

//  Botella base 
var Base = new THREE.CylinderGeometry(1.5, 1.8, 5, 32);
var base = new THREE.Mesh(Base, vidrio);
//scene.add(base);

// Cuellito
var Cuello = new THREE.CylinderGeometry(0.7, 1.0, 2, 32);
var cuello = new THREE.Mesh(Cuello, vidrio);
cuello.position.y = 3.5;
//scene.add(cuello);

// Tapa 
var Tapa = new THREE.CylinderGeometry(0.8, 0.8, 1, 32);
var tapa = new THREE.Mesh(Tapa, tapaMat);
tapa.position.y = 5;
//scene.add(tapa);

//Etiqueta 
var etiqueta = new THREE.BoxGeometry(2, 1.5, 0.05);
var etiquetita = new THREE.Mesh(etiqueta, etiquetaMat);
etiquetita.position.set(0, 0.5, 1.65);
//scene.add(etiquetita);

// dibujito
var dibujito= new THREE.BoxGeometry(1.5, 1.2, 0.03);
var etiquetadibujito = new THREE.Mesh(dibujito, etiquetitaMat);
etiquetadibujito.position.set(0, 0.5, 1.7);
//scene.add(etiquetadibujito);

  const BT= new THREE.Group();
    BT.add(base,cuello,tapa,etiquetita,etiquetadibujito);
    BT.position.set(x,y,z);
    
    
    
    return BT;

}