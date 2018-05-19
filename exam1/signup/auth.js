var config = {
    apiKey: "AIzaSyBbk4H_iZN1nfCY6G3w7etclC6jR2GrcJ8",
    authDomain: "springbreak-15d67.firebaseapp.com",
    databaseURL: "https://springbreak-15d67.firebaseio.com",
    projectId: "springbreak-15d67",
    storageBucket: "springbreak-15d67.appspot.com",
    messagingSenderId: "60752389591"
};
firebase.initializeApp(config);

//comment: Before we need to connect firebase, get api key for project from firebase.

function handleSignUp() {
    //step 1 : Get the email/ password entered by users
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    //step 2 : Validate
    if (email.length < 4) {
        alert("Please enter a valid email address");
        return;
    }
    if (password.length < 4) {
        alert("Please use a stronger password");
        return;
    }

    //comment: Second, give a id for 'form-email' , 'form-password', whenever user entered input firebase bring value from it and store them.

    //Step 3 : Create 
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            //success
            function () {
                alert("user created");
            }
        )
        .catch(
            function (error) {
                alert(error.message);
            }


        )
}
//comment: Finally, firebase.auth() send a information of email, password to firebase authentification.


