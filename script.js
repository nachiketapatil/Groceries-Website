let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

function message(){

    alert('Your Order is Received. Our team will Contact You Soon.');
}

const firebaseConfig = {
    apiKey: "AIzaSyCap_yjf4q_OUHrewThgHi_XntsTkcHweo",
    authDomain: "grocerynew-cccab.firebaseapp.com",
    databaseURL: "https://grocerynew-cccab-default-rtdb.firebaseio.com",
    projectId: "grocerynew-cccab",
    storageBucket: "grocerynew-cccab.appspot.com",
    messagingSenderId: "73904089101",
    appId: "1:73904089101:web:3538b661dff8d4396a4d44",
    measurementId: "G-31K216WKZH"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase)

  document.querySelector(".contact").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    //   Get input Values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mob").value;
    var address = document.getElementById("add").value;
    var order = document.getElementById("list").value;
    console.log(name, email, mobile, address, order);

    firebase.database().ref("Infos").child(name).update({
        Name : name,
        EMail : email,
        Mobile : mobile,
        Address : address,
        Order : order
    })
    console.log(firebase)
} 




