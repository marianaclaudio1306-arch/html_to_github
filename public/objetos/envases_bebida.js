
import *as THREE from "./three.module.js";

export default function envases({ x,y,z}){




//BOTELLA DE VIDRIO
var cuerpoBotella = new THREE.Mesh(
  new THREE.CylinderGeometry(1.2, 1.5, 7, 16),
  new THREE.MeshLambertMaterial({ color: 0x8CC3A3, transparent: true, opacity: 0.6 })
);
//scene.add(cuerpoBotella);
cuerpoBotella.position.set(-4, 3.5, 0);

var cuelloBotella = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.8, 2, 12),
  new THREE.MeshLambertMaterial({ color: 0x8CC3A3, transparent: true, opacity: 0.6 })
);
//scene.add(cuelloBotella);
cuelloBotella.position.set(-4, 7, 0);

var tapaBotella = new THREE.Mesh(
  new THREE.CylinderGeometry(0.6, 0.6, 0.4, 12),
  new THREE.MeshLambertMaterial({ color: 0xC0A060 })
);
//scene.add(tapaBotella);
tapaBotella.position.set(-4, 8, 0);

//LATA DE REFRESCO
var cuerpoLata = new THREE.Mesh(
  new THREE.CylinderGeometry(1.5, 1.5, 5, 20),
  new THREE.MeshLambertMaterial({ color: 0xDD3333 })
);
//scene.add(cuerpoLata);
cuerpoLata.position.set(0, 2.5, 0);

var tapaLata = new THREE.Mesh(
  new THREE.CylinderGeometry(1.5, 1.5, 0.2, 20),
  new THREE.MeshLambertMaterial({ color: 0xCCCCCC })
);
//scene.add(tapaLata);
tapaLata.position.set(0, 5.1, 0);

var baseLata = new THREE.Mesh(
  new THREE.CylinderGeometry(1.5, 1.5, 0.2, 20),
  new THREE.MeshLambertMaterial({ color: 0xCCCCCC })
);
//scene.add(baseLata);
baseLata.position.set(0, 0, 0);

//ENVASE DE JUGO (cartón)
var cuerpoJugo = new THREE.Mesh(
  new THREE.BoxGeometry(3, 6, 3),
  new THREE.MeshLambertMaterial({ color: 0xFFD580 })
);
//scene.add(cuerpoJugo);
cuerpoJugo.position.set(5, 3, 0);

var tapaJugo = new THREE.Mesh(
  new THREE.CylinderGeometry(0.4, 0.4, 0.6, 12),
  new THREE.MeshLambertMaterial({ color: 0xFFA500 })
);
//scene.add(tapaJugo);
tapaJugo.position.set(5, 6.5, 1);


const ENVA= new THREE.Group();
    ENVA.add(cuerpoBotella,cuelloBotella, tapaBotella, cuerpoLata, tapaLata, baseLata, cuerpoJugo, tapaJugo);
   ENVA.position.set(x,y,z);
    
    
    
    return ENVA;

}