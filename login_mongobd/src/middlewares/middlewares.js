exports.middlewareGlobal = (req, res, next) => {
  res.locals.user = req.session.user;
  res.locals.loginError = req.session.loginError;
  next();
}


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
