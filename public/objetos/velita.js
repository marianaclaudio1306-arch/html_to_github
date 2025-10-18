import *as THREE from "./three.module.js";

export default function velita ({ x,y,z}){




    
    var geometriaVela = new THREE.CylinderGeometry(0.3, 0.3, 2, 20);
    var materialVela = new THREE.MeshPhongMaterial({ color: 0xffffff });
    var vela = new THREE.Mesh(geometriaVela, materialVela);
    //scene.add(vela);

     // esfera pequeña arriba
    var geometriaLlama = new THREE.SphereGeometry(0.15, 16, 16);
    var materialLlama = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    var llama = new THREE.Mesh(geometriaLlama, materialLlama);
    llama.position.y = 1.1;
    //scene.add(llama);

    const VL= new THREE.Group();
    VL.add(vela,llama);
    VL.position.set(x,y,z);
    
    
    
    return VL;

}