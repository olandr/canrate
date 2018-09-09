
var firebaseHeadingRef = firebase.database().child("coffee/1234567891011/name")

firebaseHeadingRef.on('value', funciton(datasnapshot) {
  fireHeading.innerText = datasnapshot.val());
});
