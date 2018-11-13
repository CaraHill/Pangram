const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function isPangram(arg) {
  if(arg == '') { return false; }

  let argArray = arg.toLowerCase().replace(/[^a-z]+/g, '').split('');

  let resultArray = alphabet.map(function(letter) {
     return argArray.includes(letter);
  });

  return !resultArray.includes(false);
}

export { isPangram }
