function isLogin(req, res, next) {
  if (req.sessions.isloggedin) {
    next();
    return;
  } else {
    req.sessions.destroy(() => {
      res.redirect("/login");
    });
  }
}

function isLogout(req, res, next) {
  if (!req.sessions.isloggedin) {
    next();
    return;
  }
  res.redirect("/");
}
module.exports = {
  isLogin,
  isLogout,
};
