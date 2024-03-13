// Middleware para verificar a existência da página
exports.checkPageExistence = (req, res, next) => {
  const err = new Error('Página não encontrada');
  err.status = 404;
  next(err);
};

// Middleware de tratamento de erro
exports.errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).render("404");
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

// exports.checkCsrfError = (err, req, res, next) => {
//   if(err) {
//     return res.render('login');
//   }
//   next()
// };

// exports.csrfMiddleware = (req, res, next) => {
//   res.locals.csrfToken = req.csrfToken();
//   next();
// };