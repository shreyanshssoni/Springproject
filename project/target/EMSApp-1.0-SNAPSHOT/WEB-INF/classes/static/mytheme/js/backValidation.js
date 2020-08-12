
var flag;
$(document).ready(function() {


	
	
	function checking(e) {
		var val = $("#ajaxGetUserServletResponse").text();
		
		if(val != "") {
		e.preventDefault();
		}
		}
	
	
	
	
	
	function validation(e) {
		var a =   $('input[name="first_name"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		a =   $('input[name="last_name"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		a =   $('input[name="user_name"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		a =   $('input[name="password"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		a =   $('input[name="dateofbirth"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		a =   $('input[name="gender"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		a =   $('input[name="email"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		a =   $('input[name="contact"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}
		
		$('input[name *="street"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				flag = false;
				return false;
			}

		});
		
		$('input[name *="address"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				flag = false;
				return false;
			}

		});
		
		
		
		$('input[name *="landmark"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				flag = false;
				return false;
			}

		});
		
		$('input[name *="city"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				flag = false;
				return false;
			}

		});
		
		$('input[name *="pincode"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				flag = false;
				return false;
			}

		});
		
		$('input[name *="state"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				flag = false;
				return false;
			}

		});
		
		$('input[name *="country"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				flag = false;
				return false;
			}
		});
		
	
	}
	
	
	
	




//	when registering..............................................................	
	$(document).on("click","#registerbtn", function(e)  {

		
		if(flag == false) {
			e.preventDefault();
			return false;
		}
		var a =   $('input[name="first_name"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		a =   $('input[name="last_name"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		a =   $('input[name="user_name"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		a =   $('input[name="password"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		a =   $('input[name="dateofbirth"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		a =   $('input[name="gender"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		a =   $('input[name="email"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		a =   $('input[name="contact"]').val();
		if(a == "") {
			e.preventDefault();
			alert("please fill up all necessary field");
			return false;
		}

		$('input[name *="street"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				alert("please fill up all necessary field");
				return false;
			}

		});	
		
		$('input[name *="landmark"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				alert("please fill up all necessary field");
				return false;
			}

		});

		$('input[name *="city"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				alert("please fill up all necessary field");
				return false;
			}

		});

		$('input[name *="pincode"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				alert("please fill up all necessary field");
				return false;
			}

		});

		$('input[name *="state"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				alert("please fill up all necessary field");
				return false;
			}

		});

		$('input[name *="country"]').each(function() {
			a =   $(this).val();
			if(a == "") {
				e.preventDefault();
				alert("please fill up all necessary field");
				return false;
			}

		});

	});









//	username check------------------------



	/*-----------------------------------------------------------------------------------------------------*/
//	function for login disable
	function loginvalidation() {
		if(lognameValidate()) {
			document.getElementById("login").disabled = false;
//			button disabled
		}
		else {
			document.getElementById("login").disabled = true;
//			button enabled
		}
	}

//	logusername validation
	function lognameValidate() {	
		var user = $("#uname").val();
		if(user =="") {
			$('#unamecheck').text("**Please enter the Username");
			return false;
		}
		else if (user.length >= 15) {
			$('#unamecheck').text("**Please enter proper Username");
			return false;
		}
		else {
			$('#unamecheck').text(" ");
			return true;
		}	
	}

//	logpass validation
	function logpassValidate() {
		var user = $("#upass").val();
		if(user =="") {
			$('#upasscheck').text("**Please enter the Password");
			return false;
		}
		else {
			$('#upasscheck').text("");
			return true;
		}
	}
	/*--------------------------------------------------------------------------------------------------------------------------*/

	 $("#firstname").blur(function() {	


		var letters = /^[A-Za-z]+$/;
		var user = $("#firstname").val();

		if(user =="") {
			$('#firstnamecheck').text("**Please enter the Firstname");
			e.preventDefault();
			flag = false;
			return false;
		}
		else if (user.length >= 12) {
			$('#firstnamecheck').text("**Please enter proper Firstname length betwen 2 to 12");
			flag = false;
			return false;
		}
		else if (user.match(letters)) {
			$('#firstnamecheck').text("");
			flag = true;
			return true;
		}
		else {
			$('#firstnamecheck').text("Firstname contains characters only");
			flag = false;
			return false;
		}	
	});


	 $("#lastname").blur(function() {	

		var letters = /^[A-Za-z]+$/;
		var user = $("#lastname").val();

		if(user =="") {
			$('#lastnamecheck').text("**Please enter the lastname");
			flag = false;
			return false;
		}
		else if (user.length >= 12) {
			$('#lastnamecheck').text("**Please enter proper lastname length betwen 2 to 12");
			flag = false;
			return false;
		}
		else if (user.match(letters)) {
			$('#lastnamecheck').text("");
			flag = true;
			return true;
		}
		else {
			$('#lastnamecheck').text("Lastname contains characters only");
			flag = false;
			return false;
		}	
	});



	 $("#userName").blur(function() {	

		var letters = /^[A-Za-z]+$/;
		var user = $("#userName").val();

		if(user =="") {
			$('#usernamecheck').text("**Please enter the Username");
			flag = false;
			return false;
		}
		else if ((user.length < 5)  || (user.length >= 15)) {
			$('#usernamecheck').text("**Please enter proper Username length betwen 5 to 12");
			flag = false;
			return false;
		}
		else if (/^[a-zA-Z0-9- ]*$/.test(user) == false) {
			$('#usernamecheck').text("Username contains characters and letters only");
			flag = false;
			return false;
		}
		else {
			$('#usernamecheck').text("");
			flag = true;
			return true;
		}	
	});



	 $("#password").blur(function() {	

		//var letters = /^[A-Za-z]+$/;
		var user = $("#password").val();

		if(user =="") {
			$('#passwordcheck').text("**Please enter the Password");
			flag = false;
			return false;
		}
		else if ((user.length < 8)  || (user.length > 8)) {
			$('#passwordcheck').text("**Password shoud contains 8 digits only");
			flag = false;
			return false;
		}
		else if (user.indexOf(' ')>=0) {
			$('#passwordcheck').text("**Password shoud not contains space");
			flag = false;
			return false;
		}
		else {
			$('#passwordcheck').text("");
			flag = true;
			return true;
		}	
	});


	 $("#dateofbirth").blur(function() {	

		var user = $("#dateofbirth").val();

		if(user =="") {
			$('#dateofbirthcheck').text("**Please enter the Birthdate");
			flag = false;
			return false;
		}
		else if (user.indexOf(' ')>=0) {
			$('#dateofbirthcheck').text("**Password shoud not contains space");
			flag = false;
			return false;
		}
		else {
			$('#dateofbirthcheck').text("");
			flag = true;
			return true;
		}	
	});

	 $("#gender").blur(function() {	

		if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) && ( form.gender[2].checked == false ) ) {
			$('#gendercheck').text("**Please Select the Gender");
			flag = false;
			return false;
		}
		else {
			$('#gendercheck').text("");
			flag = true;
			return true;
		}	
	});


	 $("#email").blur(function(){	


		var user = $("#email").val();

		var letters = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

		if(user == "") {
			$('#emailcheck').text("**Please enter the Email");
			flag = false;
			return false;
		}
		else if (user.length > 50) {
			$('#emailcheck').text("**Email should contains only 5o digits");
			flag = false;
			return false;
		}
		else if (user.indexOf(' ')>=0) {
			$('#emailcheck').text("**Email shoud not contains space");
			flag = false;
			return false;
		}
		else if(user.match(letters)) {
			$('#emailcheck').text("");
			flag = true;
			return true;
		}
		else {
			$('#emailcheck').text("ex:shreyansh@gmail.com");
			flag = false;
			return false;
		}	
	});







	 $("#contactno").blur(function() {	

		var user = $("#contactno").val();
		var letters = /^[A-Za-z]+$/;

		if(user == "") {
			$('#contactcheck').text("**Please enter the contact no");
			flag = false;
			return false;
		}
		else if ((user.length < 10)  || (user.length > 10)) {
			$('#contactcheck').text("**Contact should contains only 10 digits");
			flag = false;
			return false;
		}
		else if (user.indexOf(' ')>=0) {
			$('#contactcheck').text("**Contact shoud not contains space");
			flag = false;
			return false;
		}
		else if(user.match(letters)) {
			$('#contactcheck').text("only Digits");
			flag = false;
			return false;
		}
		else {
			$('#contactcheck').text("");
			flag = true;
			return true;
		}	
	});




	function streetValidatei(x,id) {
		var id = id;
		var x = x;

		if (id === undefined) {
			id = event.target.id;
		}  
		if (x === undefined) {
			x = "";
		}  
	
		var letters = /^[A-Za-z]+$/;
		var user = $("#"+id+"").val();

		if(user =="") {
			$("#streetcheck"+x+"").text("**Please enter the streetAddress");
			flag = false;
			return false;
		}
		else if (user.length > 45) {
			$("#streetcheck"+x+"").text("**Please enter proper lastname length betwen 10 to 45");
			flag = false;
			return false;
		}
		else if (/^[a-zA-Z0-9- ]*$/.test(user) == false) {
			$("#streetcheck"+x+"").text("streetaddress contains characters and letters only");
			flag = false;
			return false;
		}
		else {
			$("#streetcheck"+x+"").text("");
			flag = true;
			return true;
		}	
	}



	function landmarkValidatei(x,id) {	
		var id = id;
		var x = x;
	
		if (id === undefined) {
			id = event.target.id;
		}  
		if (x === undefined) {
			x = "";
		} 

		var user = $("#"+id+"").val();
		if(user =="") {
			$("#landmarkcheck"+x+"").text("**Please enter the landmark");
			flag = false;
			return false;
		}
		else if ((user.length < 10)  || (user.length > 20)){
			$("#landmarkcheck"+x+"").text("**Please enter proper landmark length betwen 10 to 50");
			flag = false;
			return false;
		}
		else if (/^[a-zA-Z0-9- ]*$/.test(user) == false) {
			$("#landmarkcheck"+x+"").text("Landmark contains characters and letters only");
			flag = false;
			return false;
		}
		else {
			$("#landmarkcheck"+x+"").text("");
			flag = true;
			return true;
		}	
	}


	function cityValidatei(x,id) {	
		
		var id = id;
		var x = x;
		if (id === undefined) {
			id = event.target.id;
		}  


		if (x === undefined) {
			x = "";
		} 

		var user = $("#"+id+"").val();

		if(user == "") {
			$("#citycheck"+x+"").text("**Please enter the city");
			flag = false;
			return false;
		}
		else if ((user.length < 9)  || (user.length > 20)) {
			$("#citycheck"+x+"").text("**Please enter proper city name length betwen 10 to 20");
			flag = false;
			return false;
		}
		else if (/^[a-zA-Z0-9- ]*$/.test(user) == false) {
			$("#citycheck"+x+"").text("City contains characters and letters only");
			flag = false;
			return false;
		}

		else {
			$("#citycheck"+x+"").text("");
			flag = true;
			return true;
		}	
	}




	function pincodeValidatei(x,id) {	
		var id = id;
		var x = x;

		if (id === undefined) {
			id = event.target.id;
		}  


		if (x === undefined) {
			x = "";
		} 


		var user = $("#"+id+"").val();


		if(user =="") {
			$("#pincodecheck"+x+"").text("**Please enter the pincode");
			flag = false;
			return false;
		}
		else if ((user.length < 6)  || (user.length > 6)) {
			$("#pincodecheck"+x+"").text("**Please enter proper pincode length only 6");
			flag = false;
			return false;
		}
		else {
			$("#pincodecheck"+x+"").text("");
			flag = true;
			return true;
		}	
	}



	function stateValidatei(x,id) {	

		var id = id;
		var x = x;

		if (id === undefined) {
			id = event.target.id;
		}  

		if (x === undefined) {
			x = "";
		} 
		
		var user = $("#"+id+"").val();
		
		
		if(user == "") {
			
			$("#statecheck"+x+"").text("**Please enter the state");
			flag = false;
			return false;
		}
		else if ((user.length < 5)  || (user.length > 20)) {
			$("#statecheck"+x+"").text("**Please enter proper state name length betwen 10 to 20");
			flag = false;
			alert(flag);
			return false;
		}
		else if (/^[a-zA-Z]*$/.test(user) == false) {
			$("#statecheck"+x+"").text("State contains characters and letters only");
			flag = false;
			return false;
		}

		else {
			$("#statecheck"+x+"").text("");
			flag = true;
			return true;
		}	
	}




	function countryValidatei(x,id) {	

		var id = id;
		var x = x;

		if (id === undefined) {
			id = event.target.id;
		}  


		if (x === undefined) {
			x = "";
		} 

		var user = $("#"+id+"").val();


		if(user == "") {
			$("#countrycheck"+x+"").text("**Please enter the Country");
			flag = false;
			return false;
		}
		else if ((user.length < 3)  || (user.length > 20)) {
			$("#countrycheck"+x+"").text("**Please enter proper country name length betwen 10 to 20");
			flag = false;
			return false;
		}
		else if (/^[a-zA-Z]*$/.test(user) == false) {
			$("#countrycheck"+x+"").text("Country contains characters  only");
			flag = false;
			return false;
		}
		else {
			$("#countrycheck"+x+"").text("");
			flag = true;
			return true;
		}	
	}



	$('[id ^="street"]').blur(function() {
		var x = $(this).parent().attr('id');
		var id = event.target.id;
		streetValidatei(x, id);
	});

	$('[id ^="landmark"]').blur(function() {
		var x = $(this).parent().attr('id');
		var id = event.target.id;
		landmarkValidatei(x, id);
		
		
	});

	$('[id ^="city"]').blur(function() {
		
		var x = $(this).parent().attr('id');
		
		if(x == 'add2'){
			x = "";
		}
		var id = event.target.id;
		cityValidatei(x, id);
		
	});

	$('[id ^="state"]').blur(function() {
		
		var x = $(this).parent().attr('id');
		
		if(x == 'add2'){
			x = "";
		}
		var id = event.target.id;
		
		stateValidatei(x, id);
		
	});

	$('[id ^="pincode"]').blur(function() {
		
		var x = $(this).parent().attr('id');
		if(x == 'add2'){
			x = "";
		}
		var id = event.target.id;
		pincodeValidatei(x, id);
	
		if(flag == false) {
			flag = false;
			
			return false;
		}
	});

	$('[id ^="country"]').blur(function() {	
		var x = $(this).parent().attr('id');
		if(x == 'add2'){
			x = "";
		}
		var id = event.target.id;
		countryValidatei(x, id);
	});
	
	$(document).on('blur', "[class*= newstreet]", function() { 
	var x = $(this).parent().attr('id');
	var id = event.target.id;
	streetValidatei(x,id);
	
	});
	
	$(document).on('blur', "[class*= newlandmark]", function() { 
		var x = $(this).parent().attr('id');
		var id = event.target.id;
		landmarkValidatei(x,id);
	});
	
	$(document).on('blur', "[class*= newcity]", function() { 
		var x = $(this).parent().attr('id');
		var id = event.target.id;
		cityValidatei(x,id);
	});
	
	$(document).on('blur', "[class*= newstate]", function() { 
		var x = $(this).parent().attr('id');
		var id = event.target.id;
		stateValidatei(x,id);
	});
	
	$(document).on('blur', "[class*= newpostal]", function() { 
		var x = $(this).parent().attr('id');
		var id = event.target.id;
		pincodeValidatei(x,id);
	});
	
	$(document).on('blur', "[class*= newcountry]", function() { 
		var x = $(this).parent().attr('id');
		var id = event.target.id;
		countryValidatei(x,id);
	});
	
	

	$("#formbtn").click(function(e) {
		
		$('[id *="landmarkcheck"]').each(function(i) {

			var g = $(this).text();
			

			if(g != "") {

				e.preventDefault();
				falg = false;
				return false;
			}
		});	
		
		$('[id *="statecheck"]').each(function(i) {

			var g = $(this).text();
			

			if(g != "") {

				e.preventDefault();
				falg = false;
				return false;
			}
		});
		
		$('[id *="citycheck"]').each(function(i) {

			var g = $(this).text();
			

			if(g != "") {

				e.preventDefault();
				falg = false;
				return false;
			}
		});
		
		$('[id *="pincodecheck"]').each(function(i) {

			var g = $(this).text();
			

			if(g != "") {

				e.preventDefault();
				falg = false;
				return false;
			}
		});
		
		
		if(flag == false) {
			e.preventDefault();
			return false;
		}
		
	    validation(e);
	    checking(e);
	    addAddress();
	    
	   // return false;
	    //deleteaddress();
	    //alert("all done");
	  
	});
	

	
});








