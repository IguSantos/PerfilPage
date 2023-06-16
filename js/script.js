function toggleMode() {

 const body = document.documentElement;
 const photo = document.querySelector('#profile img');

 if(body.classList.contains("light")) {
    body.classList.remove("light")
   
   
 } else {
    body.classList.add("light")
    
 }


}