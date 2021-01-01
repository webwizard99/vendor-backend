const stringArrayHandler = (function(){
  const stringToArray = (string) => {
    // validate and convert offering ids
    let returnVal = [];
    if (typeof string === 'string' && string !== '') {
      if (!string.includes(',')) {
        returnVal = [Number.parseInt(string)];
      } else {
        returnVal = string.split(',');
      }
    }
    return returnVal
  }

  return {
    getArrayFromString: function(string) {
      return stringToArray(string);
    }
  }
}())

module.exports = stringArrayHandler;