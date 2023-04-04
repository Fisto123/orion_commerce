import Order from "../model/order.js";

export const createOrder = async (req, res) => {
  try {
    const orderInfo = req.body;

    const order = new Order(orderInfo);
    const savedOrder = await order.save();
    return res.status(200).send(savedOrder);
  } catch (error) {
    console.log(error);
  }
};
