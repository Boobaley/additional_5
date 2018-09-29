module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2) {
    return false;
  }
  const specialCharacters = new Set(['(', ')', '{', '}', '[', ']', '|']);

  function createRegExpGroup(config) {
    const leftChar = config[0];
    const rightChar = config[1];

    return (specialCharacters.has(leftChar) ? '\\' + leftChar : leftChar) +  (specialCharacters.has(rightChar) ? '\\' + rightChar : rightChar);
  }
  
  let pairsToGo = str.length / 2;

  const regExp = new RegExp(bracketsConfig.map(config => createRegExpGroup(config)).join('|'), 'g');

  while(pairsToGo && str) {
    str = str.replace(regExp, '');
    pairsToGo -= 1;
  }

  return !str;
}
