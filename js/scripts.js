function beepBoop(numberInput) {
  for (var i=0; i<=numberInput; i++) {
    if (i.toString().includes("3")) {
      newArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("2")) {
      console.log("boop!")
    } else if (i.toString().includes("1")) {
      console.log("beep!")
    } else {
      console.log(i);
}
};
}''