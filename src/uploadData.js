const { collection, addDoc } = require("firebase/firestore");
const { db } = require("./firebaseConfig.node");

const products = [
{ id: 7, name: "Mouse rgb", brand: "A-Pro", price: "ARS 3950", description: "-Conector Usb-Apto para netbook, notebook, pc-Excelente Sensibilidad-Materiales excelente calidad",image:
"https://i.imgur.com/SpciaFg.jpeg", category: "Informatica" },
{ id: 8, name: "Mouse Inalambrico", brand: "A-Pro", price: "ARS 6150", description: "-Excelente Calidad-Color Negro-Inalambrico BT",image:
"https://i.imgur.com/lH27G44.jpeg", category: "Informatica" }
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