const { collection, addDoc } = require("firebase/firestore");
const { db } = require("./firebaseConfig.node");

const products = [
{ id: 14, name: "Cargador Turbo", brand: "A-Pro", price: "6200", description: "Tipo C-15 watt -Carga Rápida -Muy buena Calidad ",image:
"https://i.imgur.com/xDur2cY.jpeg", category: "Accesorios" }
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