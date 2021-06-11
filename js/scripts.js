function beepBoop(numberInput) {
  var newArray = [];
  for (var i=0; i<=numberInput; i++) {
    if (i.toString().includes("3")) {
      newArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("2")) {
      newArray.push("boop!")
    } else if (i.toString().includes("1")) {
      newArray.push("beep!")
    } else {
      newArray.push(i);
}
};
return newArray;
};