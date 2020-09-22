const validation = (function(){
  return {
    validateInteger: function(num) {
      if (typeof num === 'number') {
        return num;
      } else {
        return Number.parseInt(num);
      }
    }
  }
}());

module.exports = validation;