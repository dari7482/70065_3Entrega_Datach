const { Router } = require("express")
const mongoose = require('../db/cartMd')
const { productModel } = require('../models/product.model')


const router = Router()


router.get("/api/products", async (req, res) => {
    try {
        let page = ""
        page = parseInt(req.query.page) || 1
        let limit = parseInt(req.query.limit) || 8
        let criterio = parseInt(req.query.stock)


        let sort = {}
        if (req.query.sort) {
            const sortValue = parseInt(req.query.sort);
            if (!isNaN(sortValue)) {
                sort = { price: sortValue };
            }
        }

        let filter = {}
        if (criterio > 0 || (!isNaN(criterio))) {
            filter = { stock: { $gt: `${criterio}` } };
        } else {
            filter = { stock: { $gt: 0 } };

        }

        let productList = await productModel.paginate(filter, { page, limit, lean: true, sort });
        productList.prevLink = productList.hasPrevPage ? `http://localhost:8080/api/products?page=${productList.prevPage}&limit=${limit}&sort=${sort}` : '';
        productList.nextLink = productList.hasNextPage ? `http://localhost:8080/api/products?page=${productList.nextPage}&limit=${limit}&sort=${sort}` : '';
        productList.isValid = !(page <= 0 || page > productList.totalPages)

        res.render('index', productList)
    } catch (error) {
        console.error(error)
    }
})






module.exports = router
