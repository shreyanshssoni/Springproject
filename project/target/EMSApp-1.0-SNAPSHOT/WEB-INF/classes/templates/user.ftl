<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>User Profile</title>

<link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css"/> 
<link href="mytheme/css/style.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="mytheme/bower_components/datatables.net-dt/css/jquery.dataTables.min.css"> 
<link href="mytheme/css/custom.css" rel="stylesheet"> 

<script type = "text/javascript" >
   window.history.forward();
	function noBack() { window.history.forward(); }
</script>

</head>
<body>

<div id="header">
	<#include "/header.ftl">
</div>
<div class="container">
	<div class="row">
		<div class="col-12">
			<div class="card-body">
				<!-- Card title-------------- -->
				<div class="card-title mb-4">
					<div class="d-flex justify-content-start">
						<div class="image-container">
							<img src="data:image/jpeg;base64,${(user.base64image)!""}"
								style="width: 150px; height: 150px" class="img-thumbnail" />
							</div>
							
							<div class="userData ml-3">
								<h2 class="d-block"
									style="font-size: 1.5rem; font-weight: bold">${user.firstName}
										${user.lastName}</h2>						
							</div>
							

					</div>	
				</div>


				<div class="row">
					<div class="col-12">
						<ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
							<li class="nav-item">
								<div class="nav-link active" id="basicInfo-tab"
									data-toggle="tab" href="#basicInfo" role="tab"
									aria-controls="basicInfo" aria-selected="true">Basic
									Info
								</div>
							</li>
						</ul>
						
						<div class="tab-content ml-1" id="myTabContent">
							<div class="tab-pane fade show active" id="basicInfo"
								role="tabpanel" aria-labelledby="basicInfo-tab">


								<div class="row">
									<div class="col-sm-3 col-md-2 col-5">
										<label style="font-weight: bold;">First Name</label>
									</div>
									
									<div class="col-md-8 col-6">${user.firstName}</div>
										<input type="hidden" id="namedel" value="">			
									</div>
									<hr/>
							
									<div class="row">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">Last Name</label>
										</div>
										<div class="col-md-8 col-6">${user.lastName}</div>
									</div>
									<hr/>

									<div class="row">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">UserName</label>
										</div>
										<div class="col-md-8 col-6">${user.userName}</div>										
									</div>
									<hr/>
			
									<div class="row">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">Birth Date</label>
										</div>
										<div class="col-md-8 col-6">${user.dateofbirth}</div>
									</div>
									<hr/>

									<div class="row">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">Gender</label>
										</div>
										<div class="col-md-8 col-6">${user.gender}</div>
									</div>
									<hr/>

									<div class="row">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">Hobbies</label>
										</div>
										<div class="col-md-8 col-6">${user.hobby}</div>
									</div>
									<hr/>
									
									<div class="row">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">Email</label>
										</div>
										<div class="col-md-8 col-6">${user.email}</div>
									</div>
									<hr/>
									
									<div class="row">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">Contact No</label>
										</div>
										<div class="col-md-8 col-6">${user.contact}</div>
									</div>
									<hr/>
									
									
									<#assign x = 1> 
									<#list user.addressModel as add>  
									<div class="row" id = "address">
										<div class="col-sm-3 col-md-2 col-5">
											<label style="font-weight: bold;">Address${x} :</label>
										</div>
										<div class="col-md-8 col-6" id = "streetlandmark">${add.street},${add.landmark}</div>							
										<div class="col-md-8 col-6 addresspart" id = "citystate">${add.city},${add.pincode}</div>
										<div class="col-md-8 col-6 addresspart" id = "pincodecountry">${add.state},${add.country}</div>
										<input type="hidden" id="custId" name="addID" value="">
										<hr>		
									</div>
									<#assign x++>
										<hr/>
									</#list>
									 
									<form method="post" class="form-horizontal" action = "edit">
										<input type="hidden"  name="username" value="${user.userName}">
									<button type="submit" class="btn btn-sm btn-primary">
										<i class="fa fa-dot-circle-o"></i> Edit
									</button>
									</form>

									<button type="submit" class="btn btn-sm btn-primary" id="logbtn" onclick = "preventBack()">
										<a href="logout"><i class="fa fa-dot-circle-o"></i>Logout</a>
									</button>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		   <input type="hidden" id="totaladd" name="Username" value="">						
		</div>
	</div>
</div>
<div id="footer">
	<#include "/footer.ftl">
</div>
<script src="mytheme/bower_components/jquery/dist/jquery.min.js"></script> 
<script src="mytheme/bower_components/tether/dist/js/tether.min.html"></script>
<script src="mytheme/bower_components/bootstrap/dist/js/bootstrap.min.js"></script> 
</body>
</html>
