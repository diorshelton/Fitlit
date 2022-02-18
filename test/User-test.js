import { expect } from "chai";
import userData from "../src/data/users";
import User from '../src/User';
import UserRepository from "../src/UserRepository";

describe('User', () => {
  it('should be a function',  () => {
    expect(User).to.be.a('function');
  })
  it('should be an object',  () => {

    const userRepo = new UserRepository(userData);

    const firstUser = userRepo.findUserData(1);

    const user = new User(firstUser);

    expect(firstUser).to.be.an('object');
    expect(user).to.be.instanceOf(User);
  })
  it('should hold on to the user properties', () => {

    const userRepo = new UserRepository(userData);

    const firstUser = userRepo.findUserData(1);

    const user = new User(firstUser);

    expect(user.id).to.equal(1);  
    expect(user.name).to.be.a('string');  
    expect(user.address).to.be.a('string');  
    expect(user.email).to.be.a('string');  
    expect(user.strideLength).to.be.a('number');  
    expect(user.dailyStepGoal).to.be.a('number');  
    expect(user.friends).to.be.an('array');  
  })
  it('should return user/s first name',  () => {
    const userRepo = new UserRepository(userData);

    const firstUser = userRepo.findUserData(1);

    const user = new User(firstUser);
    
    expect(user.getUserFirstName()).to.equal('Luisa');
  })
})