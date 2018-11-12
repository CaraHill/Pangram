function isPangram(arg) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  if(arg == '') { return false; }

  let result = [];

  let argArray = arg.toLowerCase().replace(/[^a-z]+/g, '').split('');
  console.log(argArray)

  argArray.forEach(function(letter) {
    result.push(alphabet.includes(letter));
  });

  let allIncluded = [];

  alphabet.forEach(function(letter) {
    allIncluded.push(argArray.includes(letter));
  });

  if(result.includes(false) || allIncluded.includes(false)) {
    return false;
  } else {
    return true;
  }
}

export { isPangram }
