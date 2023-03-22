const Order = require("../models/order");
const Cart = require("../models/cart");
const addOrder = async (req, res) => {
  const { user_id, status, price } = req.body;
  try {
    if (!user_id || !price) throw Error("All fields must be filled");

    const cart = await Cart.findOne({ user_id });

    const products = cart.products;

    const order = await Order.create({
      user_id,
      products,
      status,
      price,
    });

    res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { addOrder };
