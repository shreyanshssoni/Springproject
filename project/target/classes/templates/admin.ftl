<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title>Admin</title>

<link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css" /> 
<link href="mytheme/css/style.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="mytheme/bower_components/datatables.net-dt/css/jquery.dataTables.min.css"> 
<link href="mytheme/css/custom.css" rel="stylesheet"> 

<script type = "text/javascript" >
   function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.onunload=function(){null};
</script>


</head>
<body class="app aside-menu-hidden">
	<div id="header">
		<#include "/header.ftl">
	</div>

<div class="app-body">
	<!-- Main content -->
		<main class="main">
			<div class="container-fluid">
				<div class="animated fadeIn">
					<div class="row">
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header">
									<i class="fa fa-align-justify"></i> USER
									
										<button type="button" class="btn btn-sm btn-primary" id ="logbtn">
											<a href="logout"><i class="fa fa-dot-circle-o"></i> Logout</a>
										</button>
								</div>
								
								<div class="card-body">
									
									<table id="example6" class="display" cellspacing="0" width="100%">
										<thead>
											<tr>
												<th>Id</th>
												<th>UserName</th>
												<th>Email</th>
												<th>Gender</th>
												<th>Contact</th>
												<th>Image</th>		
												<th>Edit Action</th>
												<th>Delete Action</th>	
											</tr>
										</thead>	
										<tbody>   
											<#list UserModel as UserModel> 
											 <tr>  
												<td>${UserModel.id}</td>
												<td>${UserModel.userName}</td>
												<td>${UserModel.email}</td>
												<td>${UserModel.gender}</td>
												<td>${UserModel.contact}</td>
												<td><img src="data:image/png;base64,${UserModel.base64image}" style="width: 100px; height: 100px" /></td> 																
												<td><form method="post" class="form-horizontal" action = "edit">
													<input type="hidden"  name="username" value="${UserModel.userName}">
													<button class = "btn btn-secondary"> Edit </button></td>
													</form>
											    <td class = "deleteuser"><button  id = "delbtn" value = "${UserModel.id}" class = "btn btn-sm btn-primary btn"> Delete</button></td>
											   </tr>
											    </#list>											
										</tbody> 
 									 </table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
	<div id="footer">
		<#include "/footer.ftl">
	</div>

<script src="mytheme/bower_components/jquery/dist/jquery.min.js"></script> 
<script src="mytheme/bower_components/tether/dist/js/tether.min.html"></script>
<script src="mytheme/bower_components/bootstrap/dist/js/bootstrap.min.js"></script> 
<script src="mytheme/js/ajax.js"></script>
<script type="text/javascript" charset="utf8" src="mytheme/js/views/jquerydatatables.js"></script>
<script type="text/javascript" charset="utf8" src="mytheme/bower_components/datatables.net-dt/js/jquery.dataTables.min.js"></script> 
</body>
</html>
