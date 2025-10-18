import *as THREE from "./three.module.js";

export default function alfombra ({ x,y,z}){


    //texturita
var loader = new THREE.TextureLoader();
var texturafondra = loader.load('imagenes/alfombra.jpeg'); 
var alfombraMat = new THREE.MeshBasicMaterial({
    
    map: texturafondra,    
    side: THREE.DoubleSide 
});

    var geometryPlano = new THREE.PlaneGeometry(20, 20, 10, 10);
var materialPlano = new THREE.MeshLambertMaterial({
    color: 0xFFD500, side: THREE.DoubleSide
});
var meshPlano = new THREE.Mesh(geometryPlano, alfombraMat);
//scene.add(meshPlano);
meshPlano.rotation.x = -1.57;
meshPlano.position.set(0, 0, 0);

const A= new THREE.Group();
    A.add(meshPlano);
    A.position.set(x,y,z);
    
    
    
    return A;

}