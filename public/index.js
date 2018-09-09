var config = {
  apiKey: "AIzaSyBADCA-2rhJkaoqsoHHT3_zbVRElyjzdE0",
  authDomain: "thinger-thinger.firebaseapp.com",
  databaseURL: "https://thinger-thinger.firebaseio.com",
  projectId: "thinger-thinger",
  storageBucket: "thinger-thinger.appspot.com",
  messagingSenderId: "413403817750"
};
firebase.initializeApp(config);
/*
(function() {

  var firebaseHeadingRef = firebase.database().ref().child('coffee/');
  var head = document.getElementById('head');

  //firebaseHeadingRef.on('value', snap => console.log(snap.val()));
  firebaseHeadingRef.on('value', snap => {
    head.innerText = JSON.stringify(snap.val(), null, 3);
  });

}());
*/

function getThing(){
  var input = document.getElementById("barcode").value;
  var formRef = firebase.database().ref().child('coffee/' + input);

  var res_company = document.getElementById("company");
  var res_name = document.getElementById("name");
  var res_slogan = document.getElementById("slogan");
  var res_10vote = document.getElementById("10vote");
  var res_10less_water = document.getElementById("10less_water");
  var res_10LWcomment = document.getElementById("10LWcomment");
  var res_10more_water = document.getElementById("10more_water");
  var res_10MWcomment = document.getElementById("10MWcomment");
  var res_buyagain = document.getElementById("buyagain");

  var resultList = document.querySelectorAll("h1");
  formRef.on('value', snap => {
    res_name.innerText = snap.child('name/').val();
    res_company.innerText = snap.child('company/').val();
    res_slogan.innerText = snap.child('slogan/').val();
    res_10vote.innerText = snap.child('10vote/').val();
    res_10less_water.innerText = snap.child('10less_water/').val();
    res_10LWcomment.innerText = snap.child('10LWcomment/').val();
    res_10more_water.innerText = snap.child('10more_water/').val();
    res_10MWcomment.innerText = snap.child('10MWcomment/').val();
    res_buyagain.innerText = snap.child('buyagain/').val();
  });
};
