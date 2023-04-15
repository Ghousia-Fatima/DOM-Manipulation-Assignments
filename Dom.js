// // Accessing by tagname 
var x = document.getElementsByTagName('h1')
console.log(x)
x[0].innerHTML="<i>This is Dom Manipulated First Heading(Italic)</i>"
x[1].innerText="This is Dom Manipulated Second Heading(Normal)"

// // Accessing by ID
document.getElementById('para1').style.color="blue"

// Accessing by class
var x = document.getElementsByClassName('paragraph')
x[1].style.color="pink"
x[0].style.color="blue"


// // Accessing by QUERY selector ()
document.querySelectorAll('div')[1].style.backgroundColor="orange"
document.querySelectorAll('div')[2].style.backgroundColor="cyan"

// Arranging the Divs horizontally using DOM

var container = document.getElementsByClassName('container')[0]
container.style.display = "flex"




