import *as THREE from "./three.module.js";

export default function alfombra2 ({ x,y,z}){

// Espacio para colocar los objetos

  var luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.set(5, 5, 5);
scene.add(luz);
  

//texturita
var loader = new THREE.TextureLoader();
var texturafondra = loader.load('imagenes/alfombra2.jpeg'); 
var alfombraMat = new THREE.MeshBasicMaterial({
    
    map: texturafondra,    
    side: THREE.DoubleSide 
});

    var geometryPlano = new THREE.PlaneGeometry(20, 20, 10, 10);
var materialPlano = new THREE.MeshLambertMaterial({
    color: 0xFFD500, side: THREE.DoubleSide
});
var meshPlano = new THREE.Mesh(geometryPlano, alfombraMat);
scene.add(meshPlano);
meshPlano.rotation.x = -1.57;
meshPlano.position.set(0, 0, 0);  



const A2= new THREE.Group();
    A2.add(meshPlano);
    A2.position.set(x,y,z);
    
    
    
    return A2;

}