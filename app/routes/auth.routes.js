const { verifySignUp, verifyMeet } = require("../middleware");
const controller = require("../controllers/auth.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post(
    "/api/auth/signupdirector",
    [
      verifySignUp.checkDuplicateUsernameOrEmailOrField,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post("/api/auth/signin", controller.signin);
  app.get("/api/auth/user", controller.getAuth);
  app.get("/api/auth/user-all", controller.getAuthAll);
  app.get("/api/auth/user-invite/:username", controller.getAuthExcept);
  app.get("/api/auth/user-invite-submission/:username/:position", controller.getAuthExceptSubmission);
  app.get("/api/auth/director", controller.getAuthDirector);
  app.get("/api/auth/director-wadir", controller.getAuthExecutive);
  app.get("/api/auth/user-by-position/:position", controller.getAuthName)
  // app.post("/meeting", [
  //     verifyMeet.checkDuplicateDate
  //   ],
  //   controller.createSubmission
  // );
};