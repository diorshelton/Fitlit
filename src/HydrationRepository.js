class HydrationRepository {
  constructor(data) {
    this.data = data;
    this.length = this.data.length;
  }
  findUserData(id) {
    //Return only user data that matches ID
    return this.data.filter( user => user.userID === id)
  }
}
module.exports = HydrationRepository;