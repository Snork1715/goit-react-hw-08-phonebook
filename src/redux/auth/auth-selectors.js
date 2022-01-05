const getName = (state) => state.auth.user.name;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const authSelectors = {
  getName,
  getIsLoggedIn,
};

export default authSelectors;
