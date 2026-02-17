import express from 'express';
import { createProduct, getAllProducts, deleteProduct , updateProduct , getProductById} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts)
productRouter.post('/', createProduct)
productRouter.get("/search" , ()=>{
    console.log("Search API")
})
productRouter.delete("/:productId", deleteProduct)
productRouter.put("/:productId", updateProduct)
productRouter.get("/:productId", getProductById)


/* productId is a parameter that will be passed in the URL to identify which product to 
delete and you can put any name to it but it should be the same as the one you will use in the controller to access it using req.params.
productId and you can also add update route here if you want to update a product by its id 
and you can use the same parameter for that as well and in the controller you can use req.params.
productId to access it and then you can use it to find the product and update
it with the new data that you will receive in the request body and then you can send a response back to the client with the updated
product or a success message depending on your preference. */



export default productRouter;