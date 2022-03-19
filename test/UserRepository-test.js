import { expect } from 'chai';
import userData from '../src/data/users';
import UserRepository from '../src/UserRepository';

describe('UserRepository', () => {
  it('should be a function',  () => {

    expect(UserRepository).to.be.a('function');
  });

  it('should have a parameter to take in user data', () => {
    const userRepo = new UserRepository(userData);

    expect(userRepo.data).to.be.an('array');
    expect(userRepo.data[0]).to.be.an('Object');
  });

  it('should return a user/s data when given an ID as a parameter',  () => {
    const userRepo = new UserRepository(userData);

    userRepo.findUserData(1);
   
    expect(userRepo.findUserData).to.be.a('function');
    expect(userRepo.findUserData(1)).to.deep.equal(userData[0]);
  });

  it('should return average step goal amongst all users',  () => {
    const userRepo = new UserRepository(userData);

    expect(userRepo.getAverageUserStepGoal).to.be.a('function');
    expect(userRepo.getAverageUserStepGoal()).to.equal(6700);
  });
});