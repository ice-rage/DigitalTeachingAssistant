export const useMainStore = defineStore("main", () => {
  const userRoles = {
    admin: "Администратор",
    user: "Пользователь",
  };

  return userRoles;
});
