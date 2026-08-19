/**
 * @module Login-Script
 * @type {HTMLElement}
 */
const loginFormElement = document.querySelector('#loginForm');

/**
 * @type {HTMLElement}
 */
const inputEmailElement = document.querySelector('#inputEmail');

/**
 * @type {HTMLElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');

/**
 * @type {string}
 */
const expectedEmail = 'admin@dicoding.com';

/**
 * @type {string}
 */
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  /**
   * @type {string}
   */
  const email = inputEmailElement.value;
  
  /**
   * @type {string}
   */
  const password = inputPasswordElement.value;

  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
