
export const productList = [
    {   id:'1',
    nombre:"Inflable Bochinchito",
    tamaño:"Chico",
    catering:"Menú No incluido",
    stock: 10,
    imagen: 'https://www.china-inflatable.com/wp-content/uploads/2016/12/DJI_0307-1-280x258.jpg'
},
{   id:'2',
    nombre:"Inflable Bochinche",
    tamaño:"Grande",
    catering:"Menú Incluido",
    stock: 10,
    imagen: 'https://www.china-inflatable.com/wp-content/uploads/2022/07/DJI_0223-280x258.jpg'
},
{   id:'3',
    nombre:"Inflable BochincheXl",
    tamaño:"Gigante",
    catering:"Menú incluido",
    stock: 10,
    imagen: 'https://www.china-inflatable.com/wp-content/uploads/2022/07/DJI_0257-280x258.jpg'
}
    
]
export const getProductById = (id) =>{
    return new Promise( (resolve) =>{
        resolve (productList.find(prod => prod.id===id))

    })
}