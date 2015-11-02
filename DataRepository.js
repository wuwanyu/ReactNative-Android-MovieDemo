/*
DataRepository
* */
'use strict';

var React = require('react-native');

var {
  AsyncStorage,
} = React;

function DataRepository() { // Singleton pattern
  if (typeof DataRepository.instance === 'object') {
    return DataRepository.instance;
  }

  DataRepository.instance = this;
}

DataRepository.prototype.setItem = function(key: string,value:string) {
  return new Promise((resolve, reject) => {
  	 AsyncStorage.mergeItem(key,value);
  });
};

DataRepository.prototype.getItem = function(key: string) {
  return  AsyncStorage.getItem(key);
};

DataRepository.prototype.removeItem = function(key: string) {
  return  AsyncStorage.removeItem(key);
};

DataRepository.prototype.getAllKeys = function() {
  return  AsyncStorage.getAllKeys();
};





module.exports = DataRepository;