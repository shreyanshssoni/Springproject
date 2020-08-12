
	var flag = true;
	
	//firstname validation
		function firstnameValidate(){ 
		
		var letters = /^[A-Za-z]+$/;
		var user = $("#firstname").val();

		if(user =="") {
			$('#firstnamecheck').text("**Please enter the Firstname");
			e.preventDefault();
			flag = false;
			return false;
		}
		else if ((user.length < 5)  || (user.length >= 15)) {
			$('#firstnamecheck').text("**Please enter proper Firstname length betwen 5 to 15");
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
		
	}
	
	//lastname validation
		function lastnameValidate() {
			
			var letters = /^[A-Za-z]+$/;
			var user = $("#lastname").val();

			if(user =="") {
				$('#lastnamecheck').text("**Please enter the Firstname");
				e.preventDefault();
				flag = false;
				return false;
			}
			else if ((user.length < 4)  || (user.length >= 15)) {
				$('#lastnamecheck').text("**Please enter proper Firstname length betwen 4 to 15");
				flag = false;
				return false;
			}
			else if (user.match(letters)) {
				$('#lastnamecheck').text("");
				flag = true;
				return true;
			}
			else {
				$('#lastnamecheck').text("Firstname contains characters only");
				flag = false;
				return false;
			}	
		
		
	}
		
		//username validation
		function usernameValidate() {
			
			var letters = /^[A-Za-z]+$/;
			var user = $("#username").val();

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
			
			
		}

		//passwordvalidation
		function passwordValidate() {	
			
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
		}
	
		//dataofbirth validation
		function dateofbirthValidate() {	

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
		}
		
		//gendervalidation
		 function genderValidate(form) {	
			 
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
			}
		
		 //hobbyvalidation
		 function hobbyValidate(form) {	
			 
				if ( ( form.hobby[0].checked == false ) && ( form.hobby[1].checked == false ) && ( form.hobby[2].checked == false ) ) {
					$('#hobbycheck').text("**Please Select the Hobby");
					flag = false;
					return false;
				}
				else {
					$('#hobbycheck').text("");
					flag = true;
					return true;
				}	
			}
		
		
		 		function emailValidate(){	


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
			}
		
		 		//contact validation
		 		 function contactValidate() {	

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
		 		}
		 		 
		 		 
		 		 //street validation
		 		 function streetValidate(id) {
		 			
		 			 var id = id.split(".");
		 			 id = id[0];
		 			 
		 			var letters = /^[A-Za-z]+$/;
		 			var user = document.getElementById(id+".street").value;
		 		     	 			 
		 			if(user =="") {
		 				document.getElementById(id+".streetcheck").innerHTML = "**Please enter the streetAddress";
						flag = false;
						return false;
					}
					else if (user.length > 45) {					
						document.getElementById(id+".streetcheck").innerHTML = "**Please enter proper lastname length betwen 10 to 45";
						flag = false;
						return false;
					}
					else if (/^[a-zA-Z0-9- ]*$/.test(user) == false) {
						document.getElementById(id+".streetcheck").innerHTML = "**streetaddress contains characters and letters only";
						flag = false;
						return false;
					}
					else {
						document.getElementById(id+".streetcheck").innerHTML = "";
						flag = true;
						return true;
					}	
		 		 }
		 		

				
				//landmark validation
		 		function landmarkValidate(id) {
		 			
		 			var id = id.split(".");
		 			 id = id[0];
		 			 
		 			var user = document.getElementById(id+".landmark").value;
		 			if(user =="") {
		 				document.getElementById(id+".landmarkcheck").innerHTML = "**Please enter the landmark";
		 				flag = false;
		 				return false;
		 			}
		 			else if ((user.length < 10)  || (user.length > 20)){
		 				document.getElementById(id+".landmarkcheck").innerHTML = "**Please enter proper landmark length betwen 10 to 50";
		 				flag = false;
		 				return false;
		 			}
		 			else if (/^[a-zA-Z0-9- ]*$/.test(user) == false) {
		 				document.getElementById(id+".landmarkcheck").innerHTML = "Landmark contains characters and letters only";
		 				flag = false;
		 				return false;
		 			}
		 			else {
		 				document.getElementById(id+".landmarkcheck").innerHTML = "";
		 				flag = true;
		 				return true;
		 			}	
		 			 		 			 
		 		 }
		 		 
		 		 
		 		
		 		//pincode validation
		 		 function pincodeValidate(id) {
		 			 
		 			var id = id.split(".");
		 			 id = id[0];
		 			 
		 			var user = document.getElementById(id+".pincode").value;
		 			
		 			if(user == "") {
		 				document.getElementById(id+".pincodecheck").innerHTML = "**Please enter the pincode";
		 				flag = false;
		 				return false;
		 			}
		 			else if ((user.length < 6)  || (user.length > 6)) {
		 				document.getElementById(id+".pincodecheck").innerHTML = "**Please enter proper pincode length only 6";
		 				flag = false;
		 				return false;
		 			}
		 			else {
		 				document.getElementById(id+".pincodecheck").innerHTML = "";
		 				flag = true;
		 				return true;
		 			}
		 		 }
		 		 
		 		 
		 		 //country validation
		 		 function countryValidate(id) {
		 			 
		 			var id = id.split(".");
		 			 id = id[0];
		 			 
		 			var user = document.getElementById(id+".country").value;
		 			
		 			if(user == "") {
		 				document.getElementById(id+".countrycheck").innerHTML = "**Please enter the Country";
		 				flag = false;
		 				return false;
		 			}
		 			else if ((user.length < 3)  || (user.length > 20)) {
		 				document.getElementById(id+".countrycheck").innerHTML = "**Please enter proper country name length betwen 10 to 20";
		 				flag = false;
		 				return false;
		 			}
		 			else if (/^[a-zA-Z]*$/.test(user) == false) {
		 				document.getElementById(id+".countrycheck").innerHTML = "**Country contains characters  only";
		 				flag = false;
		 				return false;
		 			}
		 			else {
		 				document.getElementById(id+".countrycheck").innerHTML = "";
		 				flag = true;
		 				return true;
		 			}	
		 		 }
	 		 
		 		 function validateMyForm() {
		
		 			
		 			 
		 			 
		 			$('[id *="check"]').each(function(i) {
		 				var g = $(this).text();		 				
		 				if(g !== "") {
		 					flag = false;
		 				}
		 			});
		 			if(flag == false) {
		 				return false;
		 			}
		 			
		 		 }
		 		 
	
	