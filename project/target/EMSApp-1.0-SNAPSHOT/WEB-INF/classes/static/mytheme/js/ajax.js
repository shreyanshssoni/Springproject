


$(document).ready(function() {

	//delete user with address by admin
	$(".deleteuser").click(function() {
		
		if (confirm("Are you sure want to delete User!")) {

		} else {
			return false;
		}
		
		var userid = $(this).children('#delbtn').val();
		var a = $('#example6').DataTable();
		a.row($(this).closest("tr")).remove();
			
		$.ajax({
		    type : "DELETE",
		    url : "deleteuser" + userid,
		    success: function(data)
			{	
				
				a.draw();
			},
			error : function(data) {
				alert("error");
			}
		});
	
	});
	
	$("#username").blur(function() {
		
		var uid = $("#u_id").val();
		var username = $(this).val();
	
		if(username == "") {
			return false;
		}
		else {
		
		if(uid == null){
			uid = 0;
		}

		$.ajax({
			type :"POST",
			url : "userexist",
			data : {
				userName : $('#username').val() ,userid : uid
			},
			success : function(responseText) {
				$('#ajaxGetUserServletResponsecheck').text(responseText);
			}
		});
		
		}
	});

	//forgot  password fetching using ajax
	$("#forgot").click(function() {

		var text = $("#uname").val(); 

		if(text == ""){
			return false;
		}
		else {

			$.ajax({
				type: "POST",
				url: "passwordfetch",
				data : {
					username : text
				},
				success: function(data)
				{	
					if(data == ""){
						alert("enter proper username")
						return false;
					}else {
						text = data;
						$("#pas").val(text); 
					}

				},
				error : function(data) {

				}
			});
		}
	});
	
	
	
});


