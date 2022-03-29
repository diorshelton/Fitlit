class HydrationRepository {
  constructor(data) {
    this.data = data;
    this.length = this.data.length;
  }
  findUserData(id) {
    //Return only user data that matches ID
    return this.data.filter( user => user.userID === id)
  }
  totalConsumed(id) {
    let totalOz = 0;
    let userData = this.findUserData(id);
    userData.forEach(user => totalOz += user.numOunces);
    return totalOz;
  }
  totalDays(id) {
    let dates = [];
    let userData = this.findUserData(id);
    userData.forEach(user => {
      dates.push(user.date)
    })
    return dates.length;
  }
  allTimeDailyAverage(id) {
    let consumed = this.totalConsumed(id);
    let numberOfDays = this.totalDays(id);
    return  Math.round(consumed / numberOfDays);
  }
}
module.exports = HydrationRepository;