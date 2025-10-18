
import *as THREE from "./three.module.js";

export default function canasta ({ x,y,z}){

//CANASTA
var baseGeo = new THREE.CylinderGeometry(5, 5, 1, 32);
var baseMat = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
var base = new THREE.Mesh(baseGeo, baseMat);
//scene.add(base);
base.position.set(0, -2, 0);

var paredGeo = new THREE.CylinderGeometry(7, 3, 6, 32, 1);
var paredMat = new THREE.MeshLambertMaterial({ color: 0xA0522D, side: THREE.DoubleSide });
var pared = new THREE.Mesh(paredGeo, paredMat);
//scene.add(pared);
pared.position.set(0, 1, 0);

var asaGeo = new THREE.TorusGeometry(6.3, 0.3, 16, 100, Math.PI);
var asaMat = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
var asa = new THREE.Mesh(asaGeo, asaMat);
//scene.add(asa);
asa.position.set(0, 3.5, 0);

//MANZANA
var manzanaGeo = new THREE.SphereGeometry(2, 32, 32);
var manzanaMat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
var manzana = new THREE.Mesh(manzanaGeo, manzanaMat);
//scene.add(manzana);
manzana.position.set(-4, 4, 0);

var talloGeo = new THREE.CylinderGeometry(0.3, 0.1, 1, 10);
var talloMat = new THREE.MeshLambertMaterial({ color: 0x4B2E05 });
var tallo = new THREE.Mesh(talloGeo, talloMat);
//scene.add(tallo);
tallo.position.set(-4, 6, 0);



//UVAS 
var uva1Geo = new THREE.SphereGeometry(0.8, 16, 16);
var uva1Mat = new THREE.MeshLambertMaterial({ color: 0x6A0DAD });
var uva1 = new THREE.Mesh(uva1Geo, uva1Mat);
//scene.add(uva1);
uva1.position.set(1, 4.5, -2);

var uva2Geo = new THREE.SphereGeometry(0.8, 16, 16);
var uva2 = new THREE.Mesh(uva2Geo, uva1Mat);
//scene.add(uva2);
uva2.position.set(2, 4.5, -2);

var uva3Geo = new THREE.SphereGeometry(0.8, 16, 16);
var uva3 = new THREE.Mesh(uva3Geo, uva1Mat);
//scene.add(uva3);
uva3.position.set(1.5, 4.5, -1);

var uva4Geo = new THREE.SphereGeometry(0.8, 16, 16);
var uva4 = new THREE.Mesh(uva4Geo, uva1Mat);
//scene.add(uva4);
uva4.position.set(3.2, 4.5, -2.3);


var uva5Geo = new THREE.SphereGeometry(0.8, 16, 16);
var uva5 = new THREE.Mesh(uva5Geo, uva1Mat);
//scene.add(uva5);
uva5.position.set(3, 4.5, -1);

var uva6Geo = new THREE.SphereGeometry(0.8, 16, 16);
var uva6 = new THREE.Mesh(uva6Geo, uva1Mat);
//scene.add(uva6);
uva6.position.set(2, 4.5, -3);

//NARANJA
var naranjaGeo = new THREE.SphereGeometry(1.8, 32, 32);
var naranjaMat = new THREE.MeshLambertMaterial({ color: 0xB35D00});
var naranja = new THREE.Mesh(naranjaGeo, naranjaMat);
//scene.add(naranja);
naranja.position.set(0, 4.5, 2);

var tallo2Geo = new THREE.CylinderGeometry(0.3, 0.1, 1, 10);
var tallo2Mat = new THREE.MeshLambertMaterial({ color: 0x4B2E05 });
var tallo2 = new THREE.Mesh(tallo2Geo, talloMat);
//scene.add(tallo2);
tallo2.position.set(0, 6.3, 2);


///PERA
var peraGeo = new THREE.SphereGeometry(1.2, 16, 16);
var peraMat = new THREE.MeshLambertMaterial({ color: 0x0C4F01});
var pera = new THREE.Mesh(peraGeo, peraMat);
//scene.add(pera);
pera.scale.set(1, 1.5, 1);
pera.position.set(-3, 5, 4);

var tallo3Geo = new THREE.CylinderGeometry(0.3, 0.1, 1, 10);
var tallo3Mat = new THREE.MeshLambertMaterial({ color: 0x4B2E05 });
var tallo3 = new THREE.Mesh(tallo3Geo, talloMat);
//scene.add(tallo3);
tallo3.position.set(-3, 6.5, 4);

//FRESA
var fresaCuerpoGeo = new THREE.SphereGeometry(1, 16, 16);
var fresaCuerpoMat = new THREE.MeshLambertMaterial({ color: 0xD22B2B }); // rojo
var fresaCuerpo = new THREE.Mesh(fresaCuerpoGeo, fresaCuerpoMat);
fresaCuerpo.scale.set(1, 1.3, 1);
fresaCuerpo.position.set(3, 5, 4.5);
//scene.add(fresaCuerpo);



// Hojas verdes arriba
var hojaGeo = new THREE.ConeGeometry(0.4, 0.8, 6);
var hojaMat = new THREE.MeshLambertMaterial({ color: 0x228B22 }); // verde
var hoja1 = new THREE.Mesh(hojaGeo, hojaMat);
hoja1.position.set(2.7, 6.5, 4.5);
//scene.add(hoja1);
var hoja2 = new THREE.Mesh(hojaGeo, hojaMat);
hoja2.position.set(3, 6.5, 4.5);
//scene.add(hoja2);
var hoja3 = new THREE.Mesh(hojaGeo, hojaMat);
hoja3.position.set(3.4, 6.5, 4.5);
//scene.add(hoja3);



//PIÑA CON FORMA
// Parte central 
var pinaCentroGeo = new THREE.CylinderGeometry(1.3, 1.1, 2.5, 16);
var pinaCentroMat = new THREE.MeshLambertMaterial({ color: 0xFFB347 }); // naranja dorado
var pinaCentro = new THREE.Mesh(pinaCentroGeo, pinaCentroMat);
//scene.add(pinaCentro);
pinaCentro.position.set(-3, 5, -3.5);


var pinaArribaGeo = new THREE.SphereGeometry(1.1, 16, 16);
var pinaArribaMat = new THREE.MeshLambertMaterial({ color: 0xFFA94D });
var pinaArriba = new THREE.Mesh(pinaArribaGeo, pinaArribaMat);
//scene.add(pinaArriba);
pinaArriba.position.set(-3, 6, -3.5);



// Hojas superiores 
var hoja1Geo = new THREE.ConeGeometry(0.6, 1.3, 12);
var hoja1Mat = new THREE.MeshLambertMaterial({ color: 0x1E8449 }); // verde oscuro
var hoja1 = new THREE.Mesh(hoja1Geo, hoja1Mat);
//scene.add(hoja1);
hoja1.position.set(-3, 7,  -3.5);

var hoja2Geo = new THREE.ConeGeometry(0.5, 1.2, 12);
var hoja2 = new THREE.Mesh(hoja2Geo, hoja1Mat);
//scene.add(hoja2);
hoja2.position.set(-3.5, 7.4,  -3.5);

var hoja3Geo = new THREE.ConeGeometry(0.5, 1.2, 12);
var hoja3 = new THREE.Mesh(hoja3Geo, hoja1Mat);
//scene.add(hoja3);
hoja3.position.set(-2.5, 7.4, -3.5);

 const CANASTA= new THREE.Group();
    CANASTA.add(base, pared, asa,manzana, tallo, uva1,uva2,uva3,uva4,uva5, uva6, 
      naranja, tallo2,  pera, tallo3,  fresaCuerpo, hoja1, hoja2, hoja3, pinaCentro, 
      pinaArriba, hoja1, hoja2, hoja3
    );
    CANASTA.position.set(x,y,z);
    
    
    
    return CANASTA;

}
