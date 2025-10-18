import *as THREE from "./three.module.js";

export default function vaso_tequilero ({ x,y,z}){








//  Material (vidrio)
var vidrio = new THREE.MeshPhongMaterial
({ color: 0xf1e6b3, transparent: true, opacity: 0.7 });

// Cuerpo del vaso 
var geometriaVaso = new THREE.CylinderGeometry(0.8, 1.1, 3, 32);
var vaso = new THREE.Mesh(geometriaVaso, vidrio);
//scene.add(vaso);

//  Base sólida 
var geometriaBase = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 32);
var base = new THREE.Mesh(geometriaBase, new THREE.MeshPhongMaterial({ color: 0xd9c89a }));
base.position.y = -1.4;
//scene.add(base);

//  Pequeño borde
var geometriaBorde = new THREE.TorusGeometry(0.8, 0.05, 16, 100);
var borde = new THREE.Mesh(geometriaBorde, new THREE.MeshPhongMaterial({ color: 0xd2b48c }));
borde.rotation.x = 1.57;
borde.position.y = 1.5;
//scene.add(borde);
   

 const VT= new THREE.Group();
    VT.add(vaso,base,borde);
    VT.position.set(x,y,z);
    
    
    
    return VT;

}
