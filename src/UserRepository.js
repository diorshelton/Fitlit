class UserRepository {
  constructor(data) {
    this.data = data;
  }
  findUserData(id) {
    let index = id - 1;   
    return this.data[index];
  }
  getAverageUserStepGoal() {
    let averageSteps = 0;
    this.data.forEach(users => {
      averageSteps += users.dailyStepGoal;
    })
    return averageSteps;
  }
}

export default UserRepository;