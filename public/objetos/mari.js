import *as THREE from "./three.module.js";

export default function mari ({ x,y,z}){


// Espacio para colocar los objetos
    var loader = new THREE.TextureLoader();
var fotoTextura = loader.load('imagenes/mari.jpeg'); // 👈 cambia esta ruta por tu imagen


var fotoMat = new THREE.MeshBasicMaterial({
    map: fotoTextura,
    side: THREE.DoubleSide
});

// Plano
var foto = new THREE.PlaneGeometry(3, 2);
var fotito = new THREE.Mesh(foto, fotoMat);
fotito.position.set(0, 0, 0);
//scene.add(fotito);


// Marco 
var marco = new THREE.PlaneGeometry(3.3, 2.3);
var marcoMat = new THREE.MeshBasicMaterial({
    color: 0x8b4513, // café tipo madera
    side: THREE.DoubleSide
});
var marco = new THREE.Mesh(marco, marcoMat);
marco.position.set(0, 0, -0.05); // detrás de la foto
//scene.add(marco);

// Borde 
var borde= new THREE.BoxGeometry(3.4, 2.4, 0.1);
var bordeMat = new THREE.MeshBasicMaterial({ color: 0x5a3a1a });
var borde = new THREE.Mesh(borde, bordeMat);
borde.position.set(0, 0, -0.1);
//scene.add(borde);
      
      
const MARI= new THREE.Group();
    MARI.add(fotito,marco,borde);
    MARI.position.set(x,y,z);
    
    
    
    return MARI;

}

