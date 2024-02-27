const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  permissionRoutes: state => state.route.routes
}

export default getters