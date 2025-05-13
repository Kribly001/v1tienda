import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const fetchProducts = async () => {
  const productosCollection = collection(db, "productos");
  const productosSnapshot = await getDocs(productosCollection);
  const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(productosList);
  return productosList;
};

fetchProducts();

const data = await fetchProducts();

const dataHTML =data.map( (e) => {return "Elemento HTML"} )


// data.forEach( (elemento) => {
//     console.log(elemento.name)
// })

// for (let i = 0 ; i < data.length; i++){
//     console.log(data[i].name);
// }

// const mostrarData = () => {
//     return data
// }

// console.log(mostrarData());

// const promesa = new Promise((resolve, reject) => {
//     resolve("La clase del viernes se realizara exitosamente")
// })

// promesa.then((dataPrueba) => { console.log(dataPrueba); }).catch((err) => {console.log(err);});