import Product from "../model/product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, images, inStock, desc, price, category, color } = req.body;
    const products = new Product({
      name,
      inStock,
      category,
      desc,
      price,
      color,
      images,
    });
    const savedProduct = await products.save();
    return res.status(200).send(savedProduct);
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find().sort({ _id: -1 });
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getProductById = async (req, res) => {
  let id = req.params.id;
  try {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      const product = await Product.findById(req.params.id);
      !product
        ? res.status(404).send({ message: "Product does not exist" })
        : res.status(200).send(product);
    } else {
      return res.status(404).send({ message: "product isnt valid" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProdCategory = async (req, res) => {
  const q = req.query;
  const filters = {
    ...(q.cat && { category: { $regex: q.cat, $options: "i" } }),
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gte: q.min }), ...(q.max && { $lte: q.max }) },
    }),
  };

  try {
    const products = await Product.find(filters).sort({ [q.sort]: 1 });
    if (products.length === 0) {
      return res.status(404).send({ message: "No product yet" });
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getReccomendedProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ _id: -1 }).limit(18);
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const searchProduct = async (req, res) => {
  const q = req.query;
  const filters = {
    ...(q.search && { name: { $regex: q.search, $options: "i" } }),
  };
  try {
    const products = await Product.find(filters).sort({ [q.sort]: -1 });
    if (products.length === 0) {
      return res.status(404).send({ message: "No search result" });
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
