//Exercise 5 Marquee of 'w3resource'

//Create a scrolling marquee of the text in an element by ID
//implement using 'onclick' on the element and click to activate
//or onload="function('id')" on the body element

//originally, in the anonymous function of setInterval, I set the following:
//text = text[text.length - 1] + text.substring(0, text.length - 1);
//this text[] bracket notation isn't supported in IE7 and I found the charAt(text.length - 1)
//is a better notation.

//Create funtion with id agrument
function scrollingMarquee(id) {
  //store element by ID is variable
  var elem = document.getElementById(id);
  //store the text of that element in variable
  var text = elem.innerHTML;

  //using predefined setInterval function, pass an anonymous function as first arg and 
  //interval (milsecs) as second arg
  //this anon function runs every 200 milsecs
  setInterval(function() {
    //get the character at text length - one
    //concat that with the 'substring' starting at 0 (first char) up to and NOT including the last character
    //this gives the appearance of the tring scrolling 
    text = text.charAt(text.length - 1) + text.substring(0, text.length - 1);
    //each time the anon function runs, it changes the elem.innerHTML into the newly defined text from above
    elem.innerHTML = text;
  }, 200);
}
