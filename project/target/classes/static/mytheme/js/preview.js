
$(document).ready(function() {
	
	
	//data future date disabled
	$("#dateofbirth").focus(function() {
	    var dtToday = new Date();

	    var month = dtToday.getMonth() + 1;
	    var day = dtToday.getDate();
	    var year = dtToday.getFullYear();

	    if(month < 10)
	        month = '0' + month.toString();
	    if(day < 10)
	        day = '0' + day.toString();

	    var maxDate = year + '-' + month + '-' + day;    
	    $('#dateofbirth').attr('max', maxDate);
	});
	
	

	//for image preview...................
	var readURL = function(input) {  
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.profile-pic').attr('src', e.target.result);
			}      
			reader.readAsDataURL(input.files[0]);
		}
		flag = true;
	}




//	for image validation;...................................	
	$("#submitimage").change(function() {
		//$('.profile-pic').attr('src', "");
		var a = $(this).val();
		var a = isImage(a);
		if(a == false){
			$('.profile-pic').attr('src', "mytheme/img/download.png");
			return false;
		}
		var b =(this.files[0].size);
		if(b > 1000000) {
			$("#submitimage").val("");
			$(".profile-pic").text("");
			$("#imagecheck").text("pls select picture of less than 1 MB size");
			$("#imagevalid").text("pls select picture of less than 1 MB size");
			return false;
		} else{
			$("#imagecheck").text("");
			$("#imagevalid").text("");
		}
		var c = readURL(this);        
		function getExtension(filename) {
			var parts = filename.split('.');
			return parts[parts.length - 1];
		}
		function isImage(filename) {
			var ext = getExtension(filename);
			switch (ext.toLowerCase()) {
			case 'jpg':
			case 'gif':
			case 'bmp':
			case 'png':
				$("#imagecheck").text("");
				return true;
			}
			$("#submitimage").val("");
			$("#imagecheck").text("only images(jpg.bmp,png,jpeg files are allowed");
			$("#imagevalid").text("only images(jpg.bmp,png,jpeg files are allowed");
			return false;
		}
	});
});	
