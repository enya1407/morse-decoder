const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr = expr.split("");
  let result = "";

  function fromBinaryToSymbol(arr) {
    let Morse = "";
    let i = 0;
    while (arr[i] === "0") {
      arr.shift(arr[i]);
      i++;
    }
    while (i < arr.length) {
      if (arr[i + 1] === "0") {
        Morse += ".";
      } else {
        Morse += "-";
      }
      i += 2;
    }
    result += MORSE_TABLE[Morse];
  }

  let i = 0;
  while (i < arr.length) {
    if (arr[i] === "*") {
      result += " ";
      i += 10;
    } else {
      let res = arr.slice(i, i + 10);
      fromBinaryToSymbol(res);
      i += 10;
    }
  }

  return result;
}

module.exports = {
  decode,
};