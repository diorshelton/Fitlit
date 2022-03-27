/* eslint-disable max-len */
import { expect } from 'chai';
import hydrationData from '../src/data/hydration';
import HydrationRepository from '../src/HydrationRepository';
import UserHydration from '../src/UserHydration'

describe('UserHydration', () => {
  it('should be a function', () => {
    expect(UserHydration).to.be.a('function');
  })

  it('should have a data property', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);

    const user1 = hydrationRepo.findUserData(1);

    const luisa = new UserHydration(user1);

    expect(luisa.data).to.be.an('Array');
  })

  it('should return fluid ounces consumed on specified day', () => {
    const hydrationRepo = new HydrationRepository(hydrationData);

    const user1 = hydrationRepo.findUserData(1);

    const luisa = new UserHydration(user1);
    
    const today = luisa.ozOnThisDay('2019/06/16');

    expect(today).to.equal(69);
  })
})
