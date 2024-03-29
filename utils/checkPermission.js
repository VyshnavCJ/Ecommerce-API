const CustomError = require("../errors");

const checkPermission = (requestUser, resourceUserId) => {
  if (requestUser.role === "admin") return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new CustomError.UnauthenticatedError(
    "Your are not authorized to access this routes"
  );
};

module.exports = checkPermission;
