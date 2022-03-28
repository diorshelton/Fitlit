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

    expect(hydrationRepo.length).to.equal(77);
  })

  it('should return a user\'s hydration data', () => {

    const hydrationRepo = new HydrationRepository(hydrationData);

    const userOne = hydrationRepo.findUserData(1);

    expect(hydrationRepo.findUserData(2)).to.be.an('Array');
    expect(userOne).to.deep.equal(
      [
        { userID: 1, date: '2019/06/15', numOunces: 37 },
        { userID: 1, date: '2019/06/16', numOunces: 69 },
        { userID: 1, date: '2019/06/17', numOunces: 96 },
        { userID: 1, date: '2019/06/18', numOunces: 61 },
        { userID: 1, date: '2019/06/19', numOunces: 91 },
        { userID: 1, date: '2019/06/20', numOunces: 50 },
        { userID: 1, date: '2019/06/21', numOunces: 50 }
      ]);
  })
  it('should return total oz of water user has consumed', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);

    const total = hydrationRepo.totalConsumed(1);

    expect(total).to.equal(454);
  })
  it('should count the number of days that a user has hydration records', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);
    
    const days = hydrationRepo.totalDays(1);

    expect(days).to.equal(7);
  })
  it('should return the average fluid ounces consumed per day for all time', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);
    
    let totalAverage = hydrationRepo.allTimeDailyAverage(1);

    expect(totalAverage).to.equal(64.8);
  })
});