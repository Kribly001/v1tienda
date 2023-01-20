const data = [

    {
        id: 1,
        name: "Remera negra",
        brand: "Nike",
        price: "ARS 900",
        description: "Remera negra de algodón de la marca Nike"
    },
    {
        id: 2,
        name: "Pantalón cargo",
        brand: "Adidas",
        price: "ARS 1500",
        description: "Pantalón cargo de mezclilla de la marca Adidas"
    },
    {
        id: 3,
        name: "Zapatillas running",
        brand: "Puma",
        price: "ARS 2500",
        description: "Zapatillas running con tecnología de amortiguación de la marca Puma"
    },
    {
        id: 4,
        name: "Remera blanca",
        brand: "Nike",
        price: "ARS 800",
        description: "Remera blanca de algodón de la marca Nike"
    },
    {
        id: 5,
        name: "Pantalón jogger",
        brand: "Adidas",
        price: "ARS 1300",
        description: "Pantalón jogger de algodón de la marca Adidas"
    },
    {
        id: 6,
        name: "Zapatillas casual",
        brand: "Puma",
        price: "ARS 2000",
        description: "Zapatillas casual con suela antideslizante de la marca Puma"
    },
    {
        id: 7,
        name: "Remera rayada",
        brand: "Nike",
        price: "ARS 950",
        description: "Remera rayada de algodón de la marca Nike"
    },
    {
        id: 8,
        name: "Pantalón chino",
        brand: "Adidas",
        price: "ARS 1200",
        description: "Pantalón chino de mezclilla de la marca Adidas"
    },
    {
        id: 9,
        name: "Zapatillas skate",
        brand: "Puma",
        price: "ARS 2300",
        description: "Zapatillas skate con suela reforzada de la marca Puma"
    },
    {
        id: 10,
        name: "Remera estampada",
        brand: "Nike",
        price: "ARS 1000",
        description: "Remera estampada de algodón de la marca Nike"
    }

]

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