const products = [
    {   id:'1',
    nombre:"Inflable Bochinchito",
    tamaño:"Chico",
    catering:"Menú No incluido",
    stock: 10,
    image: 'https://www.china-inflatable.com/wp-content/uploads/2016/12/DJI_0307-1-280x258.jpg'
},
{   id:'2',
    nombre:"Inflable Bochinche",
    tamaño:"Grande",
    catering:"Menú Incluido",
    stock: 10,
    image: 'https://www.china-inflatable.com/wp-content/uploads/2022/07/DJI_0223-280x258.jpg'
},
{   id:'3',
    nombre:"Inflable BochincheXl",
    tamaño:"Gigante",
    catering:"Menú incluido",
    stock: 10,
    image: 'https://www.china-inflatable.com/wp-content/uploads/2022/07/DJI_0257-280x258.jpg'
}
    
]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}