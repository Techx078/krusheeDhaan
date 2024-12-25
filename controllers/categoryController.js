module.exports.catget=(req, res) => res.render("category");
module.exports.catpost= (req, res) => {
    const user = req.body.user;
    
    if (user.c === "Farmer") return res.render("form");
    if (user.c === "Simple-User") return res.render("roote");
    res.redirect("/category");
  };