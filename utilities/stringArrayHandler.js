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

  const stringArrayToIntArray = (strArray) => {
    if (!Array.isArray(strArray)) {
      return false;
    }
    strArray.forEach(string => {
      string = Number.parseInt(string);
    });
    return strArray;
  }

  return {
    getArrayFromString: function(string) {
      return stringToArray(string);
    },
    getIntArrayFromStringArray: function(stringArray) {
      return stringArrayToIntArray(stringArray);
    }
  }
}())

module.exports = stringArrayHandler;