/*#######################################
              Importaciones
#########################################*/

//Modulos

//Estilos
import './ItemList.css'
//Componentes
import Item from '../item/Item'

//Core


/*#######################################
                Logica
#########################################*/


const ItemList = (props) => { //Funcion contructora

    const listaDeProductos = [
        {
            id: 1,
            name: "Remera negra",
            brand: "Nike",
            price: "900",
            description: "Remera negra de algodón de la marca Nike",
            category: "Remeras",
            image: "/images/ropa1.png"
        }, {
            id: 2,
            name: "Pantalón cargo",
            brand: "Adidas",
            price: "1500",
            description: "Pantalón cargo de mezclilla de la marca Adidas",
            category: "Pantalones",
            image: "/images/ropa2.png"
        }, {
            id: 3,
            name: "Zapatillas",
            brand: "Puma",
            price: "2500",
            description: "Running con tecnología de amortiguación",
            category: "Zapatillas",
            image: "/images/ropa3.png"
        }, {
            id: 4,
            name: "Remera blanca",
            brand: "Nike",
            price: "800",
            description: "Remera blanca de algodón de la marca Nike",
            category: "Remeras",
            image: "/images/ropa4.png"
        }, {
            id: 5,
            name: "Pantalón jogger",
            brand: "Adidas",
            price: "1300",
            description: "Pantalón jogger de algodón de la marca Adidas",
            category: "Pantalones",
            image: "/images/ropa5.png"
        }, {
            id: 6,
            name: "Zapatillas casual",
            brand: "Puma",
            price: "2000",
            description: "Zapatillas casual con suela antideslizante",
            category: "Zapatillas",
            image: "/images/ropa6.png"
        }, {
            id: 7,
            name: "Remera rayada",
            brand: "Nike",
            price: "950",
            description: "Remera rayada de algodón de la marca Nike",
            category: "Remeras",
            image: "/images/ropa7.png"
        }, {
            id: 8,
            name: "Pantalón chino",
            brand: "Adidas",
            price: "1200",
            description: "Pantalón chino de mezclilla de la marca Adidas",
            category: "Pantalones",
            image: "/images/ropa8.png"
        }, {
            id: 9,
            name: "Zapatillas skate",
            brand: "Puma",
            price: "2300",
            description: "Zapatillas skate con suela reforzada",
            category: "Zapatillas",
            image: "/images/ropa9.png"
        }, {
            id: 10,
            name: "Estampada",
            brand: "Nike",
            price: "1000",
            description: "Remera estampada de algodón de la marca Nike",
            category: "Remeras",
            image: "/images/ropa10.png"
        }, {
            id: 11,
            name: "Pantalón cargo",
            brand: "Nike",
            price: "1500",
            description: "Pantalón cargo de mezclilla militar",
            category: "Pantalones",
            image: "/images/ropa11.png"
        }, {
            id: 12,
            name: "Remera negra",
            brand: "Nike",
            price: "900",
            description: "Remera negra de algodón de la marca Nike",
            category: "Remeras",
            image: "/images/ropa12.png"
        },
    ]

    let listaPorCategoria;
    let listaDeProductosRenderizables;

    if(props.category === "Todo"){
        listaDeProductosRenderizables = listaDeProductos.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)
    }else{
        listaPorCategoria = listaDeProductos.filter(objeto => objeto.category === props.category)
        listaDeProductosRenderizables = listaPorCategoria.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)
    }


    return (
        <div>
            {listaDeProductosRenderizables}
        </div>
    )
}
/*#######################################
              Exportaciones
#########################################*/
export default ItemList