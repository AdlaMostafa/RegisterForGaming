export const PATHS = {
  HOME: "/",
  LOGIN: "/users/login",
  SIGNUP: "/users/signup",
  PROFILE: "/users/profile",
  USERS: {
    ROOT: "/users",
    DELETE: "/users/:id", // Replace :id with the actual user ID when deleting
  },
  ADMIN: {
    ROOT: "/admin",
    LIST: "/admin/users",
  },
  ERRORS: {
    NOT_FOUND: "/404",
  },
};
