const { collection, addDoc } = require("firebase/firestore");
const { db } = require("./firebaseConfig.node");

const products = [
  { id: 1, name: "Remera negra", brand: "Nike", price: "ARS 900", description: "Remera negra de algodón de la marca Nike", image:
"https://via.placeholder.com/150" },
  { id: 2, name: "Pantalón cargo", brand: "Adidas", price: "ARS 1500", description: "Pantalón cargo de mezclilla de la marca Adidas",image:
"https://via.placeholder.com/150" },
  { id: 3, name: "Zapatillas running", brand: "Puma", price: "ARS 2500", description: "Zapatillas running con tecnología de amortiguación de la marca Puma",image:
"https://via.placeholder.com/150" },
  { id: 4, name: "Remera blanca", brand: "Nike", price: "ARS 800", description: "Remera blanca de algodón de la marca Nike",image:
"https://via.placeholder.com/150" },
  { id: 5, name: "Pantalón jogger", brand: "Adidas", price: "ARS 1300", description: "Pantalón jogger de algodón de la marca Adidas",image:
"https://via.placeholder.com/150" },
  { id: 6, name: "Zapatillas casual", brand: "Puma", price: "ARS 2000", description: "Zapatillas casual con suela antideslizante de la marca Puma",image:
"https://via.placeholder.com/150" },
  { id: 7, name: "Remera rayada", brand: "Nike", price: "ARS 950", description: "Remera rayada de algodón de la marca Nike",image:
"https://via.placeholder.com/150" },
  { id: 8, name: "Pantalón chino", brand: "Adidas", price: "ARS 1200", description: "Pantalón chino de mezclilla de la marca Adidas",image:
"https://via.placeholder.com/150" },
  { id: 9, name: "Zapatillas skate", brand: "Puma", price: "ARS 2300", description: "Zapatillas skate con suela reforzada de la marca Puma",image:
"https://via.placeholder.com/150"},
  { id: 10, name: "Remera estampada", brand: "Nike", price: "ARS 1000", description: "Remera estampada de algodón de la marca Nike",image:
"https://via.placeholder.com/150" },
  { id: 11, name: "Prueba estampada", brand: "Nike", price: "ARS 1000", description: "Remera estampada de algodón de la marca Nike",image:
"https://via.placeholder.com/150" }
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