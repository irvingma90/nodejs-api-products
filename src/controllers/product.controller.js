import Product from '../models/products';

export const createProduct = async (req,res) => {
    const {name, category, price, imgURL} = req.body;

    const newProduct = new Product({name, category, price, imgURL});

   const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
}

export const getProduct = async (req,res) => {
    const products = await Product.find();
    res.json(products);
}

export const getProductById = async (req,res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
}

export const updateProduct = async (req,res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    });
    res.status(204).json(updatedProduct);
}

export const deleteProduct = async (req,res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);

    res.status(204).json(deletedProduct);
    
}