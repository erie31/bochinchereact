
export const productList = [
    {   id:'1',
    nombre:"Inflable Bochinchito",
    tamaño:"Chico",
    catering:"Menú No incluido",
    stock: 10,
    precio:2500,
    imagen: 'https://www.china-inflatable.com/wp-content/uploads/2016/12/DJI_0307-1-280x258.jpg',
    category: 'inflables'
},
{   id:'2',
    nombre:"Inflable Bochinche",
    tamaño:"Grande",
    catering:"Menú Incluido",
    stock: 10,
    precio:3000,
    imagen: 'https://www.china-inflatable.com/wp-content/uploads/2022/07/DJI_0223-280x258.jpg',
    category: 'inflables'
},
{   id:'3',
    nombre:"Inflable BochincheXl",
    tamaño:"Gigante",
    catering:"Menú Incluido",
    stock: 10,
    precio:5000,
    imagen: 'https://www.china-inflatable.com/wp-content/uploads/2022/07/DJI_0257-280x258.jpg',
    category: 'inflables'
},
{    id:'4',
    nombre:"Toro Loco",
    tamaño:"Gigante",
    catering:"No Incluye Menú",
    stock: 10,
    precio:5000,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_810815-MLA31039555959_062019-O.webp',
    category: 'toros'
}

    
]
export const getProductById = (id) =>{
    return new Promise( (resolve) =>{
        resolve (productList.find(prod => prod.id===id))

    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
