const router = require("express").Router();
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser
} = require("../utils/Auth");

// Users Registeration Route
router.post("/register-employee", async (req, res) => {

  await userRegister(req.body, "employee", res);
});

// Admin Registration Route
router.post("/register-supervisor", async (req, res) => {
  await userRegister(req.body, "supervisor", res);
});

// Super Admin Registration Route
router.post("/register-administrator", async (req, res) => {
  await userRegister(req.body, "administrator", res);
});

// Users Login Route
router.post("/login-employee", async (req, res) => {
  await userLogin(req.body, "employee", res);
});

// Admin Login Route
router.post("/login-supervisor", async (req, res) => {
  await userLogin(req.body, "supervisor", res);
});

// Super Admin Login Route
router.post("/login-administrator", async (req, res) => {
  await userLogin(req.body, "administrator", res);
});

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

// Users Protected Route
router.get(
  "/employee-protectd",
  userAuth,
  checkRole(["employee"]),
  async (req, res) => {
    return res.json("Hello employee");
  }
);

// Supervisor Protected Route
router.get(
  "/supervisor-protectd",
  userAuth,
  checkRole(["supervisor"]),
  async (req, res) => {
    return res.json("Hello supervisor");
  }
);

// Administrator Protected Route
router.get(
  "/administrator-protectd",
  userAuth,
  checkRole(["administrator"]),
  async (req, res) => {
    return res.json("Hello Administrator");
  }
);

// Super Admin Protected Route
router.get(
  "/administrator-and-supervisor-protectd",
  userAuth,
  checkRole(["administrator", "supervisor"]),
  async (req, res) => {
    return res.json("Administrator and Supervisor");
  }
);

module.exports = router;
