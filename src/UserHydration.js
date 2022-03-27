class UserHydration {
  constructor(data) {
    this.data = data;
  }
  ozOnThisDay(date) {
    let ounces = 0
    this.data.filter( el => {
      if (el.date === date) {
        ounces += el.numOunces
      }
    });
    return ounces;
  }
}
module.exports = UserHydration;
