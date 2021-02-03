module.exports = app => {
  
  const Productos = app.db.modelos.Productos;

  app.route('/productos')
    .get((req, res) => {
      Productos.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .post((req, res) => {
      Productos.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });

  app.route('/productos/:id')
    .get((req, res) => {
      Productos.findOne({where: req.params})
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .put((req, res) => {
      Productos.update(req.body, {where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
      Productos.destroy({where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(204).json({msg: error.message});
        });
    });

};
