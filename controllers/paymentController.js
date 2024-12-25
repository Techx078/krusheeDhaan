module.exports.payop=(req, res) => res.render("payoption");
module.exports.ispay=(req, res) => res.render("payment");

module.exports.submit=(req, res) => {
    const { cropName, quantity, price, purchaseDate, market, payment_option } =
      req.body;
    console.log("Crop Purchase Details:", {
      cropName,
      quantity,
      price,
      purchaseDate,
      market,
      payment_option,
    });
    res.render("payment");
  };
