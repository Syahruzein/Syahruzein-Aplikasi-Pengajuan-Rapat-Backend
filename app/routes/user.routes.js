const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", controller.allAccess);
  app.get(
    "/api/test/kaprodi",
    [authJwt.verifyToken, authJwt.isKaprodi],
    controller.kaprodiBoard
  );
  app.get(
    "/api/test/kadep",
    [authJwt.verifyToken, authJwt.isKadep],
    controller.kadepBoard
  );
  app.get(
    "/api/test/wadir",
    [authJwt.verifyToken, authJwt.isWadir],
    controller.wadirBoard
  );
  app.get(
    "/api/test/director",
    [authJwt.verifyToken, authJwt.isDirector],
    controller.directorBoard
  );
  app.get(
    "/api/test/staff",
    [authJwt.verifyToken, authJwt.isStaff],
    controller.staffBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};