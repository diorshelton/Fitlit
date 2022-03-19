import { expect } from 'chai';
import hydrationData from '../src/data/hydration';
import HydrationRepository from '../src/HydrationRepository'

describe('HydrationRepository', () => {
  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  })

  it('should be an array', () =>{
    const hydrationRepo = new HydrationRepository(hydrationData);

    expect(hydrationRepo.data).to.be.an('Array');
  })

  it('should count the number of elements', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);

    expect(hydrationRepo.length).to.equal(22);
  })

  it('should return a user\'s hydration data', () => {

    const hydrationRepo = new HydrationRepository(hydrationData);

    const userOne = hydrationRepo.findUserData(1);

    expect(hydrationRepo.findUserData(2)).to.be.an('Array');
    expect(userOne).to.deep.equal(
      [{userID: 1, date: '2019/06/15', numOunces: 37}, 
        {userID: 1, date: '2019/06/16', numOunces: 69}
      ]);
  })
});