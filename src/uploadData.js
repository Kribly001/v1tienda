const { collection, addDoc } = require("firebase/firestore");
const { db } = require("./firebaseConfig.node");

const products = [
{ id: 9, name: "Combo Gamer 4 en 1", brand: "Noga", price: "27900", description: "Teclado-Mouse -Auriculares -Mouse pad-Retroiluminado",image:
"https://i.imgur.com/GXiSQWY.jpeg", category: "Informatica" },
{ id: 10, name: "Mouse Inalambrico", brand: "Time", price: "6300", description: "-Excelente calidad-Múltiples Colores-Inalambricos BT -Excelente Sensibilidad ",image:
"https://i.imgur.com/K50PKMD.jpeg", category: "Informatica" },
{ id: 11, name: "Teclado RGB", brand: "Noga", price: "11500", description: "-Cantidad de teclas: 104.-Interface: USB 2.0.-Cable: 140cm.-Medida: 43.6x13.1x2.5cm",image:
"https://i.imgur.com/VqrsMnI.jpeg", category: "Informatica" }
];

const uploadProducts = async () => {
  const collectionRef = collection(db, "productos");
  for (let product of products) {
    try {
      await addDoc(collectionRef, product);
      console.log(`Producto ${product.name} subido correctamente`);
    } catch (error) {
      console.error("Error subiendo producto:", error);
    }
  }
};

uploadProducts();