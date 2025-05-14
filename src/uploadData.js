const { collection, addDoc } = require("firebase/firestore");
const { db } = require("./firebaseConfig.node");

const products = [
{ id: 12, name: "Smartwatch D20", brand: "Generico", price: "9100", description: "-Control de sueño-Medidor de pulsaciones-Redes Sociales -Calorias-Resistente al agua .Y muchos mas",image:
"https://i.imgur.com/cVmmmx6.jpeg", category: "Accesorios" },
{ id: 13, name: "Cargador Portatil Linterna", brand: "Suono", price: "18700", description: "-Android o iPhone-6000mAh para más de 3 cargas completas de teléfono-Linterna Led 3 niveles-Con medidor de Carga de Bateria",image:
"https://i.imgur.com/CKz7KY3.jpeg", category: "Accesorios" }
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