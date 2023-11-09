
"use strict";
$( () => {
    $("#arrival_date").focus();
    $("#reservation_form").submit( evt => {

    var isValid = true;

    
	

    

    //Validating Name
    var name = $("#name").val().trim();
    if (name == "") {
        $("#name").next().text("This field is required.");
        isValid = false;
    } 
    else {
        $("#name").next().text("");
    }

    //Validating Email Address Text Box:    
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var email = $("#email").val().trim();

    if(email == "") {
        $("#email").next().text("This field is required.");
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        $("#email").next().text("Must be a valid email address.");
        isValid = false;
    }
    else {
        $("#email").next().text("");
    }

    //Validating Phone Number
	var phoneno = /^\d{10}$/;
    var phone = $("#phone").val().trim();
    if (phone == "") {
        $("#phone").next().text("This field is required.");
        isValid = false;
    } 
	else if (!phoneno.test(phone)) {
        $("#phone").next().text("Must be a Valid phone numeber");
        isValid = false;
    }
    else {
        $("#phone").next().text("");
    }

    if(isValid == false) {
        evt.preventDefault(); }
    });
});