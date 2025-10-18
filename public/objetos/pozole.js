
import *as THREE from "./three.module.js";

export default function pozole ({ x,y,z}){


//PLATO / BOWL 
// plato (base plana)
var platoGeo = new THREE.CylinderGeometry(7, 7, 0.6, 32);
var platoMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
var plato = new THREE.Mesh(platoGeo, platoMat);
//scene.add(plato);
plato.position.set(0, -1.5, 0);

// fondo del tazón (base interna)
var bowlBaseGeo = new THREE.CylinderGeometry(5.5, 5.5, 0.5, 32);
var bowlBaseMat = new THREE.MeshLambertMaterial({ color: 0xF5F5F0 });
var bowlBase = new THREE.Mesh(bowlBaseGeo, bowlBaseMat);
//scene.add(bowlBase);
bowlBase.position.set(0, -0.9, 0);

// pared del tazón (hueca)
var bowlWallGeo = new THREE.CylinderGeometry(6.0, 6.0, 2.2, 32, 1, true);
var bowlWallMat = new THREE.MeshLambertMaterial({ color: 0xA0522D, side: THREE.DoubleSide });
var bowlWall = new THREE.Mesh(bowlWallGeo, bowlWallMat);
//scene.add(bowlWall);
bowlWall.position.set(0, 0.2, 0);

//CALDO 
var caldoGeo = new THREE.CylinderGeometry(5.0, 5.0, 0.4, 32);
var caldoMat = new THREE.MeshLambertMaterial({ color: 0xE25822 }); // color rojo-anaranjado del pozole
var caldo = new THREE.Mesh(caldoGeo, caldoMat);
//scene.add(caldo);
caldo.position.set(0, -0.2, 0);

// GRANOS 
var granoGeo = new THREE.SphereGeometry(0.22, 12, 12);
var granoMat = new THREE.MeshLambertMaterial({ color: 0xFFF5E1 }); // color maíz

var g1 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g1); 
g1.position.set(-1.6, -0.05, 1.2);
var g2 = new THREE.Mesh(granoGeo, granoMat);
 //scene.add(g2); 
 g2.position.set(-0.6, -0.03, 1.4);
var g3 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g3); 
g3.position.set(0.4, -0.02, 1.3);
var g4 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g4); 
g4.position.set(1.4, -0.04, 1.0);
var g5 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g5); 
g5.position.set(2.0, -0.06, 0.3);

var g6 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g6); 
g6.position.set(1.1, -0.03, -0.6);
var g7 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g7); 
g7.position.set(0.2, -0.02, -1.0);
var g8 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g8);
 g8.position.set(-0.8, -0.03, -0.9);
var g9 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g9); 
g9.position.set(-1.8, -0.04, -0.5);

var g10 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g10); 
g10.position.set(-2.3, -0.05, 0.3);
var g11 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g11); 
g11.position.set(-1.0, -0.02, 0.0);
var g12 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g12); 
g12.position.set(-0.2, -0.01, 0.5);
var g13 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g13);
 g13.position.set(0.8, -0.02, 0.6);
var g14 = new THREE.Mesh(granoGeo, granoMat);
 //scene.add(g14); 
 g14.position.set(2.3, -0.05, -0.1);

var g15 = new THREE.Mesh(granoGeo, granoMat);
 //scene.add(g15);
  g15.position.set(1.6, -0.03, 0.9);
var g16 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g16);
 g16.position.set(0.0, -0.01, -0.4);
var g17 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g17); 
g17.position.set(-1.2, -0.02, 0.8);
var g18 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g18); 
g18.position.set(-0.4, -0.01, -0.3);
var g19 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g19);
 g19.position.set(0.6, -0.02, -0.8);

var g20 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g20); 
g20.position.set(2.6, -0.05, 0.6);
var g21 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g21); 
g21.position.set(-2.0, -0.04, 1.1);
var g22 = new THREE.Mesh(granoGeo, granoMat);
 //scene.add(g22); 
 g22.position.set(1.9, -0.04, -0.8);
var g23 = new THREE.Mesh(granoGeo, granoMat); 
//scene.add(g23); 
g23.position.set(-0.9, -0.02, -1.2);

//  TROZOS DE CARNE 
var carneGeo = new THREE.BoxGeometry(0.9, 0.4, 0.6);
var carneMat = new THREE.MeshLambertMaterial({ color: 0x8B3A2F });

var c1 = new THREE.Mesh(carneGeo, carneMat);
 //scene.add(c1); 
 c1.position.set(0.6, 0.1, 0.2);
var c2 = new THREE.Mesh(carneGeo, carneMat); 
//scene.add(c2); 
c2.position.set(-0.8, 0.1, -0.2);
var c3 = new THREE.Mesh(carneGeo, carneMat); 
//scene.add(c3); 
c3.position.set(1.2, 0.1, -0.6);

// TIRAS DE LECHUGA (chapas finas)
var lechGeo = new THREE.BoxGeometry(1.4, 0.05, 0.6);
var lechMat = new THREE.MeshLambertMaterial({ color: 0x28A745 });

var l1 = new THREE.Mesh(lechGeo, lechMat); 
//scene.add(l1); 
l1.position.set(-1.2, 0.12, 0.5);
var l2 = new THREE.Mesh(lechGeo, lechMat);
 //scene.add(l2); 
 l2.position.set(0.3, 0.12, 0.9);
var l3 = new THREE.Mesh(lechGeo, lechMat); 
//scene.add(l3); 
l3.position.set(1.6, 0.12, 0.1);

//TOQUE FINAL: RODAJAS DE LIMÓN (pequeñas)
var limGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.05, 12);
var limMat = new THREE.MeshLambertMaterial({ color: 0xFFF176 });

var lim1 = new THREE.Mesh(limGeo, limMat); 
//scene.add(lim1); 
lim1.position.set(-2.7, 0.05, -0.8);
var lim2 = new THREE.Mesh(limGeo, limMat);
 //scene.add(lim2); 
 lim2.position.set(2.8, 0.05, 0.8);


const POZOLE= new THREE.Group();
POZOLE.add(plato, bowlBase,bowlWall, caldo,g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21,g22,g23 ,
    c1,c2,c3,l1,l2,l3,lim1,lim2
);
POZOLE.position.set(x,y,z);



return POZOLE;
 }