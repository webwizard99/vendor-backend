const validation = (function(){
  return {
    validateInteger: function(num) {
      if (typeof num === 'number') {
        return num;
      } else {
        return Number.parseInt(num);
      }
    },
    validateString: function(str) {
      if (str === undefined || str === null) return false;
      if (typeof str === 'string') {
        return str;
      } else {
        return str.toString();
      }
    }
  }
}());

module.exports = validation;