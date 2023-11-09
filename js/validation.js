"use strict";
 $(document).ready( () => {
 
 $("#name").focus();
  $("#reservation_form").submit( event => { 
	let isValid = true;

 const emailPattern =/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
 
 const email = $("#email").val().trim(); 
 if (email == "") {
	 
 $("#email").next().text("This field is required."); 
 isValid = false;
 } else if ( !emailPattern.test(email) ) {
 $("#email").next().text("Must be a valid email address."); 
 isValid = false;
 } else { 
 $("#email").next().text(""); 
 } 
 $("#email").val(email);
 
 
 
 const name = $("#name").val().trim(); 
 if ( name =="") {
 $("#name").next().text("This field is required."); 
 isValid = false;
 } else {
 $("#name").next().text("");
 }
 $("#name").val(name);
 
 if (isValid == false) { 
	 event.preventDefault();
 } 
 }); 
 }); 
