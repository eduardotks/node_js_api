const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna todos os produtos",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Usando um POST dentro da rota de produtos",
  });
});

router.post("/:id_produtos", (req, res, next) => {
  const id = req.params.id_produtos;

  if (id === "especial") {
    res.status(200).send({
      mensagem: "Você descobriu o ID especial",
      id: id,
    });
  } else {
    res.status(200).send({
      message: "Você passou um ID",
    });
  }
});

module.exports = router;
