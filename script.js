var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};







  let Name  = prompt('Enter your name')
document.getElementById('name').innerHTML = Name

let Country = prompt('Enter Your Country')
document.getElementById('country').innerHTML = Country
 
//let Following = promp('Enter Your Following '+"(◕‿◕)")
//document.getElementById('count').innerHTML = Following

//India
