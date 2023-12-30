const ProductModel = require("../models/product");

exports.createProduct = async ( req, res) => {
try{
 const { title, description, price, imgUrl } = req.body;

  let newProduct = new ProductModel({
    title,
    description,
    price,
    imgUrl,
    });
 

 newProduct = await newProduct.save();

res.status(200).json(newProduct);
} catch (e) {
    res.status(500).json({error: e.message})
}
};

exports.products=async ( req, res) => {
  try{ 
    const products = await ProductModel.find({});
    res.json(products);
   
  } catch (e) {
      res.status(500).json({error: e.message})
  }
  };

  exports.singleProduct = async ( req, res) => {
    try{ 
      const productId = req.params.id;

     const singleProduct = await ProductModel.findById(productId);

      if(!singleProduct) {
        return res.status(404).json({message:`No such product found`})

      }


     res.status(200).json(singleProduct);
     

    } catch (e) {
        res.status(500).json({error: e.message})
    }
    };

    exports.deleteProduct = async ( req, res) => {
      try{ 
        const productId = req.params.id;
  
        await ProductModel.findByIdAndRemove(productId)
  
       res.status(200).json({message: `Product with id ${productId} deleted successfully`})
       
  
      } catch (e) {
          res.status(500).json({error: e.message})
      }
      }; 

      exports.updateProduct =async ( req, res) => {
        try{ 
          const { title, description, price, imgUrl } = req.body;
          const productId = req.params.id;

          let updatedProduct = new ProductModel({
            title,
            description,
            price,
            imgUrl,
            _id: productId
            });
         
        
       await ProductModel.findByIdAndUpdate(productId, updatedProduct);

         res.status(200).json({message: `product with id ${productId} updated succseefully`});
    
        } catch (e) {
            res.status(500).json({error: e.message})
        }
        }; 
  