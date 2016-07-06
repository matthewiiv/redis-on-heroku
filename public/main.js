'use strict'

const SERVER_URL = 'http://basic-db-queries';

const setButton = document.getElementById('set');
const getButton = document.getElementById('Vget');
const setField = document.getElementById('setField');
const getField = document.getElementById('getField');
const setValue = document.getElementById('setValue');

function sendSet(key, value, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
      if (value === 'cheddar') {
        while (true === true) {
          console.log('unacceptable');
        }
      }
      if (typeof callback === 'function') callback(JSON.parse(xhr.responseText));
    }
  };

  xhr.open('GET', `${SERVER_URL}/set?q=${key}&${value}`);
  xhr.send();
}

function sendGet(key, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
      if (typeof callback === 'function') callback(JSON.parse(xhr.responseText));
    }
  };

  xhr.open('GET', `${SERVER_URL}/get?q=${key}`);
  xhr.send();
}

setButton.addEventListner('click', sendSet(setField, setValue, (word) => {
  console.log(word);
}));
getButton.addEventListner('click', sendGet(getField, (word) => {
  console.log(word);
}));
