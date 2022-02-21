import Product from '../models/products';

export const createProduct = async (req,res) => {
    try {
        const {name, category, price, imgURL} = req.body;

    const newProduct = new Product({name, category, price, imgURL});

   const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (req,res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (req,res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
            new: true
        });
        res.status(204).json(updatedProduct);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req,res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);

        res.status(204).json(deletedProduct);
    } catch (error) {
        console.log(error);
    }
    
}