const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const cartRouter = require("./routes/cart.routes.js")
const productRouter = require("./routes/product.routes.js")
const methodOverride = require('method-override');
const { productModel } = require("./models/product.model")


const { MongoClient } = require('mongodb');

const mongoose = require('mongoose');

const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'));

app.use("/", cartRouter)
app.use("/", productRouter)


async function main() {
    const uri = 'mongodb+srv://Dario:XQr2vgqNA7zcJgQJ@cluster0.pmc2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('miBaseDeDatos');
        const collection = database.collection('productos');


        const productos = [

            {
                name: "IronicPunis",
                price: 1000,
                stock: 20,
                description: "Producto 1",
                cantidad: 5,
                thumbnail: "/img/01.png"
            },
            {
                name: "Donut",
                price: 1100,
                stock: 30,
                description: "Producto 2",
                cantidad: 10,
                thumbnail: "/img/02.png"
            },
            {
                name: "Island",
                price: 1200,
                stock: 40,
                description: "Producto 3",
                cantidad: 15,
                thumbnail: "/img/03.png"
            },
            {
                name: "Homer",
                price: 1300,
                stock: 50,
                description: "Producto 4",
                cantidad: 20,
                thumbnail: "/img/04.png"
            },
            {
                name: "IronicPunis",
                price: 1400,
                stock: 60,
                description: "Producto 5",
                cantidad: 25,
                thumbnail: "/img/05.png"
            },
            {
                name: "Family",
                price: 1500,
                stock: 70,
                description: "Producto 6",
                cantidad: 30,
                thumbnail: "/img/06.png"
            },
            {
                name: "Radictvie Man",
                price: 1600,
                stock: 80,
                description: "Producto 7",
                cantidad: 35,
                thumbnail: "/img/07.png"
            },
            {
                name: "House of  error",
                price: 1700,
                stock: 90,
                description: "Producto 8",
                cantidad: 40,
                thumbnail: "/img/08.png"
            },
            {
                name: "Homer-s car",
                price: 1800,
                stock: 100,
                description: "Producto 9",
                cantidad: 45,
                thumbnail: "/img/09.png"
            },
            {
                name: "IronicPunis",
                price: 1900,
                stock: 110,
                description: "Producto 10",
                cantidad: 50,
                thumbnail: "/img/10.png"
            },
            // Segunda repetición
            {
                name: "IronicPunis",
                price: 1000,
                stock: 20,
                description: "Producto 1",
                cantidad: 5,
                thumbnail: "/img/01.png"
            },
            {
                name: "Donut",
                price: 1100,
                stock: 30,
                description: "Producto 2",
                cantidad: 10,
                thumbnail: "/img/02.png"
            },
            {
                name: "Island",
                price: 1200,
                stock: 40,
                description: "Producto 3",
                cantidad: 15,
                thumbnail: "/img/03.png"
            },
            {
                name: "Homer",
                price: 1300,
                stock: 50,
                description: "Producto 4",
                cantidad: 20,
                thumbnail: "/img/04.png"
            },
            {
                name: "IronicPunis",
                price: 1400,
                stock: 60,
                description: "Producto 5",
                cantidad: 25,
                thumbnail: "/img/05.png"
            },
            {
                name: "Family",
                price: 1500,
                stock: 70,
                description: "Producto 6",
                cantidad: 30,
                thumbnail: "/img/06.png"
            },
            {
                name: "Radictvie Man",
                price: 1600,
                stock: 80,
                description: "Producto 7",
                cantidad: 35,
                thumbnail: "/img/07.png"
            },
            {
                name: "House of  error",
                price: 1700,
                stock: 90,
                description: "Producto 8",
                cantidad: 40,
                thumbnail: "/img/08.png"
            },
            {
                name: "Homer-s car",
                price: 1800,
                stock: 100,
                description: "Producto 9",
                cantidad: 45,
                thumbnail: "/img/09.png"
            },
            {
                name: "IronicPunis",
                price: 1900,
                stock: 110,
                description: "Producto 10",
                cantidad: 50,
                thumbnail: "/img/10.png"
            },
            // Tercera repetición
            {
                name: "IronicPunis",
                price: 1000,
                stock: 20,
                description: "Producto 1",
                cantidad: 5,
                thumbnail: "/img/01.png"
            },
            {
                name: "Donut",
                price: 1100,
                stock: 30,
                description: "Producto 2",
                cantidad: 10,
                thumbnail: "/img/02.png"
            },
            {
                name: "Island",
                price: 1200,
                stock: 40,
                description: "Producto 3",
                cantidad: 15,
                thumbnail: "/img/03.png"
            },
            {
                name: "Homer",
                price: 1300,
                stock: 50,
                description: "Producto 4",
                cantidad: 20,
                thumbnail: "/img/04.png"
            },
            {
                name: "IronicPunis",
                price: 1400,
                stock: 60,
                description: "Producto 5",
                cantidad: 25,
                thumbnail: "/img/05.png"
            },
            {
                name: "Family",
                price: 1500,
                stock: 70,
                description: "Producto 6",
                cantidad: 30,
                thumbnail: "/img/06.png"
            },
            {
                name: "Radictvie Man",
                price: 1600,
                stock: 80,
                description: "Producto 7",
                cantidad: 35,
                thumbnail: "/img/07.png"
            },
            {
                name: "House of  error",
                price: 1700,
                stock: 90,
                description: "Producto 8",
                cantidad: 40,
                thumbnail: "/img/08.png"
            },
            {
                name: "Homer-s car",
                price: 1800,
                stock: 100,
                description: "Producto 9",
                cantidad: 45,
                thumbnail: "/img/09.png"
            },
            {
                name: "IronicPunis",
                price: 1900,
                stock: 110,
                description: "Producto 10",
                cantidad: 50,
                thumbnail: "/img/10.png"
            }


        ];

        const result = await productModel.insertMany(productos);
        console.log(`${result.insertedCount} productos insertados`);
    } finally {

    }
}



//main()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})




