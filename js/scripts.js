$(document).ready(function () {
  $("form#enterNumber").submit(function (event) {
    event.preventDefault();
    var numberInput = parseInt($("input").val());
    var result = beepBoop(numberInput)
    console.log(result)
    $("#responces1").html(result)
  });
});
function beepBoop(numberInput) {
  var newArray = [];
  if ((numberInput.toString().split('')).includes("3")){
    newArray.push("Won't you be my neighbor?");
    console.log(newArray)
  }
  else if ((numberInput.toString().split('')).includes("2")){
    newArray.push("boop!")
  }
  else if ((numberInput.toString().split('')).includes("1")) {
    newArray.push("beep!")
  } else {
    for (var i = 0; i <= numberInput; i++) {
      if (i.toString().includes("3")) {
        newArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes("2")) {
        newArray.push("boop!")
      } else if (i.toString().includes("1")) {
        newArray.push("beep!")
      } else {
        newArray.push(i + ',');
      }
    };
    return newArray;

  };
  console.log(newArray)
  return newArray;

};