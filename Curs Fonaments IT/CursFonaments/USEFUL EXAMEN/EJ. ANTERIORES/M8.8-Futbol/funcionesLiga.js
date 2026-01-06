const equips = [];
const patrocinadors = [];
const jugadors = [];
const personal = [];

// ✅ Crear un objecte
let eq1 = new Equip("Madrid", 200, "España");
let pa1 = new Patrocinador("Ikea", 500);
let ju1 = new Jugador("Delantero", 50);
let fi1 = new Fisio("Mercedes", "Lopez", 20, 5);
let en1 = new Entrenador("Juan", "Dominguez", 40, 4);

equips.push(eq1);
patrocinadors.push(pa1);
jugadors.push(ju1);
personal.push(fi1);
personal.push(en1);

eq1.jugadors.push(ju1);
eq1.patrocinadors.push(pa1);
eq1.personal.push(fi1);
eq1.personal.push(en1);

// ✅ Mostrar info
console.log(equips);
console.log(patrocinadors);
console.log(jugadors);
console.log(personal);
console.log(eq1);

// ✅ Comprovar tipus
console.log(fi1 instanceof Fisio); // true ✅
console.log(en1 instanceof Fisio); // true ✅

// ✅ Provar mètodes
console.log(pa1.toString());
console.log(eq1.toString());
console.log(fi1.toString());
console.log(en1.toString());
console.log(ju1.toString());
