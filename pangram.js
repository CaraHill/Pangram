function isPangram(arg) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if(arg == '') { return false; }

  return alphabet.includes(arg);
}

export { isPangram }
