class UserRepository {
  constructor(data) {
    this.data = data;
  }
  findUserData(id) {
    return this.data[id - 1];
  }
  getAverageUserStepGoal() {
    let averageSteps = 0;
    this.data.forEach(users => {
      averageSteps += users.dailyStepGoal;
    })
    return averageSteps / this.data.length;
  }
}

export default UserRepository;