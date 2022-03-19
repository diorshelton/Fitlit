/* eslint-disable max-len */
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData, "<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';

import User from './User';

const userRepo = new UserRepository(userData);

const userObject = userRepo.findUserData(1);

const sampleUser = new User(userObject);



function sampleUserCard() {
  let welcome = document.getElementById('user-welcomed');
  let fullName = document.querySelector('.contact-name');
  let address = document.querySelector('.contact-address');
  let email = document.querySelector('.contact-email');
  let stepGoal = document.querySelector('.user-steps');
  let avgStepGoal = document.querySelector('.avg-steps-per-user');

  welcome.innerText`` = sampleUser.getUserFirstName();
  fullName.innerText = " " + sampleUser.name;
  address.innerText = " " + sampleUser.address;
  email.innerText = " " + sampleUser.email;
  stepGoal.innerText = " " + sampleUser.dailyStepGoal + ' steps';
  avgStepGoal.innerText = userRepo.getAverageUserStepGoal();
}
sampleUserCard();