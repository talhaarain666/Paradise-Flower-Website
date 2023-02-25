// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOLfCd9sx92zaFcXNX4lJ3IAFaQ3JKxc8",
    authDomain: "flowersweb-498cf.firebaseapp.com",
    projectId: "flowersweb-498cf",
    storageBucket: "flowersweb-498cf.appspot.com",
    messagingSenderId: "782773943101",
    appId: "1:782773943101:web:dbb6a2930aed81a2732354",
    measurementId: "G-SSNLKXTYX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// ====================== My Work ====================================

var cntctSbmtMsg = document.getElementById("cntctSbmtMsg")
var cntctSbmtBtn = document.getElementById("cntctSbmtBtn")

// Contact Form
var fullName = document.getElementById("fullName")
var phoneNo = document.getElementById("phoneNo")
var msgTextArea = document.getElementById("msgTextArea")

var nameValidMsg = document.getElementById("nameValidMsg")
var phoneValidMsg = document.getElementById("phoneValidMsg")

// Submit Button
var fbFullName = document.getElementById("fbFullName")
var fbEmail = document.getElementById("fbEmail")
var fbMsg = document.getElementById("fbMsg")

var fBSbmtMsg = document.getElementById("fBSbmtMsg")
var fBSubmitBtn = document.getElementById("fBSubmitBtn")


window.checkValue = function (e) {

    e.preventDefault();
    if (fullName.value == " " || fullName.value == "" || fullName.value.length < 3) {
        // alert("chk kr bhai")
        nameValidMsg.style.display = "block"
        return;
    }

    if (phoneNo.value.length < 11) {
        // alert("Enter 11 Digits Phone Number")
        phoneValidMsg.style.display = "block"
        return;
    }

    if (isNaN(phoneNo.value)) {
        alert("Enter Numeric Value")
        return;
    }else {
        cntctSbmtBtn.style.display = "none";
        cntctSbmtMsg.style.display = "block";
    }

    // =============================== FIREBASE WORK ======================================

    var objct = {};

    objct.fullName = fullName.value;
    objct.phoneNumber = phoneNo.value;
    objct.UserMessage = msgTextArea.value;

    const ContactFormRef = ref(db, 'ContactForm');
    const newPostRef = push(ContactFormRef);
    objct.id = newPostRef.key;
    set(newPostRef, objct)


    // smtp server

    Email.send({
        Host : "smtp.gmail.com",
        Username : "talha123malik1@gmail.com",
        Password : "789123..",
        To : 'manzoorbhai085@gmail.com',
        From : "talha123malik1@gmail.com",
        Subject : "New Order",
        Body : "Name: " + document.getElementById("fullName").value +
        "<br> Phone Number: " + document.getElementById("phoneNo").value +
        "<br> Message: " + document.getElementById("msgTextArea").value 

    })

};

window.inptsonblurDnone = function () {

    if (fullName.value.length >= 3) {
        nameValidMsg.style.display = "none"
    }
    if (phoneNo.value.length >= 11) {
        phoneValidMsg.style.display = "none"
    }
};


window.ChkFBValue = function (e) {

    e.preventDefault();

    if (true) {
        fBSubmitBtn.style.display = "none"
        fBSbmtMsg.style.display = "block"
    }

    // Latest++++++++++++++++++++++++++++++++
    var objFb = {};
    objFb.fullName = fbFullName.value;
    objFb.email = fbEmail.value;
    objFb.feedback = fbMsg.value;

    const FeedbackFormRef = ref(db, 'FeedBackForm');
    const newPostRef = push(FeedbackFormRef);
    objFb.id = newPostRef.key;
    set(newPostRef, objFb)
};