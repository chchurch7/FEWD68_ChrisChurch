var tempC = 10;

var tempF = tempC * 9 / 5 + 32;

var thresh = 10;

if(tempF > thresh) {
  document.body.setAttribute('style', 'background-color: red;');
  document.write(tempF);
}

else {
  document.body.setAttribute("style", "background-color: yellow;");
  document.write(tempF);
}

