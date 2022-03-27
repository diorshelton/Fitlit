/* eslint-disable max-len */
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
  it('should return total oz of water user has consumed', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);

    const total = hydrationRepo.totalConsumed(1);

    expect(total).to.equal(106);
  })
  it('should count the number of days that a user has hydration records', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);
    
    const days = hydrationRepo.totalDays(1);

    expect(days).to.equal(2);
  })
  it('should return the average fluid ounces consumed per day for all time', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);
    
    let totalAverage = hydrationRepo.allTimeDailyAverage(1);

    expect(totalAverage).to.equal(53);
  })
});