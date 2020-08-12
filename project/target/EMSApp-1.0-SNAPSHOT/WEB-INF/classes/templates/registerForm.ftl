<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Registration</title>

<!-- Icons -->

<link href="mytheme/css/font-awesome.min.css" rel="stylesheet">
<link href="mytheme/css/simple-line-icons.css" rel="stylesheet">

<!-- Main styles for this application -->
<link href="mytheme/css/style.css" rel="stylesheet">
<link href="mytheme/css/custom.css" rel="stylesheet">

</head>
<#assign session = (Session.login)!""/>
<body class="app aside-menu-hidden">
	<div id="header">
		 <#include "/header.ftl">
	</div>
<div class="app-body">
	<main class="main">
		<div class="container-fluid">
			<div class="animated fadeIn">
				<div class="row">
					<div class="col-md-12">
						<div class="card">
							<div class="card-header">
								<strong>Add New User</strong>
								<div>
									<span class="text-danger font-weight-bold"></span>
								</div>
							</div>
							
							  
							<form method="post" action="<#if session?has_content>update<#else>save</#if>" autocomplete="off" class="form-horizontal" enctype="multipart/form-data" onsubmit="return validateMyForm()">
								<div class="card-body">					
									<div class="form-group row">
										<label class="col-md-2 form-control-label">First Name:</label>
										<div class="col-md-9">
											<input type="text" name="firstName" class="form-control"
												autocomplete="off" placeholder="First Name" id="firstname"
												value = "${(user.firstName)!""}"  onblur="firstnameValidate()" required> 
												<span id="firstnamecheck" class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("firstName"))??> ${(error.getFieldError("firstName").defaultMessage)} </#if>
												 </span>
										</div> 
									</div>

									<div class="form-group row">
										<label class="col-md-2 form-control-label">Last Name:</label>
										<div class="col-md-9">
											<input type="text" name="lastName" class="form-control"
												placeholder="Last Name" id="lastname"
												value="${(user.lastName)!""}" onblur="lastnameValidate()" required> 
												<span id="lastnamecheck" class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("lastName"))??> ${(error.getFieldError("lastName").defaultMessage)} </#if>
												 </span>
										</div>
									</div>

									<div class="form-group row">
										<label class="col-md-2 form-control-label">Username:</label>
										<div class="col-md-9">
											<input type="text" name="userName" class="form-control"
												placeholder="UserName" id="username"
												value="${(user.userName)!""}" onblur="usernameValidate()" required> 
												<span id="ajaxGetUserServletResponsecheck" class="text-danger font-weight-bold"></span>
												<span id="usernamecheck" class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("userName"))??> ${(error.getFieldError("userName").defaultMessage)} </#if>
												 </span>
												<input type="hidden" id = "usernameexist" value="">
										</div>
									</div>
		
									<#if session == "adminuser">
										<input type="hidden" name="password" value="${(user.password)!""}"> 
									<#else>
										<div class="form-group row">
										<label class="col-md-2 form-control-label">Password:</label>
										<div class="col-md-9">
											<input type="password" name="password" class="form-control"
												placeholder="Password" id="password"
												value="${(user.password)!""}" onblur="passwordValidate()" required>
												<span id="passwordcheck" class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("password"))??> ${(error.getFieldError("password").defaultMessage)} </#if>
												 </span>
										</div>
									</div>
									</#if>
										
									<div class="form-group row">
										<label class="col-md-2 form-control-label">DateOfBirth:</label>
										<div class="col-md-9">
											<input type="date" name="dateofbirth" class="form-control"
												placeholder="yyyy-mm-dd" id="dateofbirth"
												value="${(user.dateofbirth)!""}" onblur="dateofbirthValidate()" required>
												<span id="dateofbirthcheck" class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("dateofbirth"))??> ${(error.getFieldError("dateofbirth").defaultMessage)} </#if>
												 </span>
                    							
							            </div>
									</div>

									<#assign gender= (user.gender)!"null"/>
									<div class="form-group row">
										<label class="col-md-2 form-control-label">Gender:</label>
										<div class="col-md-9">
											<input type="radio" name="gender" value="male" id="gender"
											<#if gender == "male">checked</#if>
												onblur="genderValidate(this.form)">
											Male <input type="radio" name="gender" value="female"
											<#if gender == "female">checked</#if> />
												
											Female <input type="radio" name="gender" value="others"
											<#if gender == "others">checked</#if>>
												 
											Others <span id="gendercheck"
												class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("gender"))??> ${(error.getFieldError("gender").defaultMessage)} </#if>
												 </span>
										</div>
									</div>
										
									<#assign hobby= (user.hobby)!""/>
									<div class="form-group row">
										<label class="col-md-2 form-control-label">Hobbies:</label>
										<div class="col-md-9">
											<input type="checkbox" name="hobby" value="sports" id="sport" 
											<#if hobby?contains("sport")>checked</#if> onblur="hobbyValidate(this.form)"/>	
											<label>Sports</label>
											<input type="checkbox" name="hobby" value="music" id="music"
											<#if hobby?contains("music")>checked</#if> onblur="hobbyValidate(this.form)"	/> 
											<label for="music">Music</label>
											<input type="checkbox" name="hobby" value="reading" id="read"
											<#if hobby?contains("reading")>checked</#if>  onblur="hobbyValidate(this.form)"/>
											 <label for="read">Reading</label> <span id="hobbycheck"
												class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("hobby"))??> ${(error.getFieldError("hobby").defaultMessage)} </#if>
												 </span>
										</div>
									</div>


									<div class="form-group row">
										<label class="col-md-2 form-control-label" for="text-input">Email:</label>
										<div class="col-md-9">
											<input type="email" name="email" class="form-control"
												placeholder="Email" id="email"
												value="${(user.email)!""}" onblur="emailValidate()" required> 
												<span id="emailcheck" class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("email"))??> ${(error.getFieldError("email").defaultMessage)} </#if>
												 </span>
										</div>
									</div>


									<div class="form-group row">
										<label class="col-md-2 form-control-label" for="text-input">Contact:</label>
										<div class="col-md-9">
											<input type="number" name="contact" class="form-control"
												placeholder="Contact" id="contactno"
												value="${(user.contact)!""}" onblur="contactValidate()" required> 
												<span id="contactcheck" class="text-danger font-weight-bold"></span>
												 <span class="text-danger font-weight-bold"><#if (error.getFieldError("contact"))??> ${(error.getFieldError("contact").defaultMessage)} </#if>
												 </span>
										</div>
									</div>
									<hr>

                                    <#--------------------------------------------------- address for update data------------------------------->
                                  	<#if user?has_content>
                                   	
									 <div id="example1" class="controls">
									 	<#assign x = 1> 
									 	<#assign y = 0>
									 	
										<#list user.addressModel as add>  	
									 	<div class="list-item">
											<div class="form-group row" id="addressrow">
												<label class="col-md-2 form-control-label" for="text-input">Address${x}</label>
												<div class="col-md-9" id = "">
													<input type="text" id="${add?index}.street" name="addressmodel[${add?index}].street"
													class="form-control" placeholder="Street" 
													value="${add.street}"  onblur="streetValidate(id)" required>
													<span id="${add?index}.streetcheck" class="text-danger font-weight-bold"></span>
   													<span class="text-danger font-weight-bold"><#if (adderror.getFieldError("addressmodel["+y+"].street"))??> ${(adderror.getFieldError("addressmodel["+y+"].street").defaultMessage)} </#if>
   													
												 </span>
												</div>
											<#-- remove button -->
												<div id="repeater">
													<button type="button" class="btn btn-danger list-remove" value = "">Remove</button>
									    		</div>

												<label class="col-md-2 form-control-label" for="text-input">Landmark:</label>
													<div class="col-md-9 add1" id ="">
														<input type="text" id="${add?index}.landmark" name="addressmodel[${add?index}].landmark"
														class="form-control" placeholder="LandMark"
														value="${add.landmark}" onblur="landmarkValidate(id)" required/>
														<span id="${add?index}.landmarkcheck" class="text-danger font-weight-bold"></span>
														<span class="text-danger font-weight-bold"><#if (adderror.getFieldError("addressmodel["+y+"].landmark"))??> ${(adderror.getFieldError("addressmodel["+y+"].landmark").defaultMessage)} </#if>
												 </span>
													</div>

												<div class="row" id="row">
													<#--for pincode and city-->
													<div class="col-sm" id="fix">
														<#assign city = add.city!""/>
														<div class ="add2" id = "">
															<select class ="form-control" id = "${add?index}.city" name="addressmodel[${add?index}].city">
   																<option value="Ahmedabad" <#if city?contains("Ahmedabad")>selected</#if>>
   																 Ahmedabad</option>
    															<option value="Vaddora" <#if city?contains("Vadodra")>selected</#if>>
    															Vadodra</option>
																<option value="Rajkot" <#if city?contains("Rajkot")>selected</#if>>
																Rajkot</option>
																<option value="Surat" <#if city?contains("Surat")>selected</#if>>
																Surat</option>
															</select>
											
															<span id="${add?index}.citycheck" class="text-danger font-weight-bold"></span>
														</div>

														<div class ="add2" id = "">
															<input type="number" id="${add?index}.pincode" name="addressmodel[${add?index}].pincode"
															class="form-control" placeholder="PostalCode"
															value="${add.pincode}" onblur="pincodeValidate(id)" required/>
															<span id="${add?index}.pincodecheck" class="text-danger font-weight-bold"></span>	
															<span class="text-danger font-weight-bold"><#if (adderror.getFieldError("addressmodel["+y+"].pincode"))??> ${(adderror.getFieldError("addressmodel["+y+"].pincode").defaultMessage)} </#if>
														 </span>
														</div>
													</div>
													
											<#--for state and country-->
													<div class="col-sm" id="fix1">
														<#assign state = add.state!""/>
														<div class ="add2">
															<select class ="form-control" id = "${add?index}.state" name="addressmodel[${add?index}].state">
   																<option value="Gujarat" <#if state?contains("Gujarat")>selected</#if>>Gujarat</option>
    															<option value="Maharashtra"<#if state?contains("Maharashtra")>selected</#if>>Maharshtra</option>
																<option value="Himachal"<#if state?contains("Himachal")>selected</#if>>Himachal</option>
																<option value="Mp"<#if state?contains("Mp")>selected</#if>>Mp</option>
															</select>
												
															<span id="${add?index}.statecheck" class="text-danger font-weight-bold"></span>
														</div>

														<div class ="add2" id = "">
															<input type="text" id="${add?index}.country" name="addressmodel[${add?index}].country"
																class="form-control" placeholder="Country"
																value="${add.country}" onblur="countryValidate(id)" required />
															<span id="${add?index}.countrycheck" class="text-danger font-weight-bold"></span>
															<span class="text-danger font-weight-bold"><#if (adderror.getFieldError("addressmodel["+y+"].country"))??> ${(adderror.getFieldError("addressmodel["+y+"].country").defaultMessage)} </#if>
												 			</span>					
														</div>
													</div>												
													<input type="hidden" name="addressmodel[${add?index}].id" value="${add.id!""}"> 
												</div>												
											</div>				
										<hr>
									</div>
									<#assign y++>
									<#assign x++>
									</#list>
									<#-- add button -->
										<div id="repeater">
											<button type="button"  class="btn btn-primary pt-2 pull-right list-add"> Add Address</button>
										</div>
									</div>
									
									<#--=====-----end of address for update-----=====-->
<#-- ----------------------------------------------------------------------------------------------------------------- -->
									<#else>
									

									 <div id="example1" class="controls">	
									 	<div class="list-item">
											<div class="form-group row" id="addressrow">
												<label class="col-md-2 form-control-label" for="text-input">Address</label>
												<div class="col-md-9">
													<input type="text"  name="addressmodel[0].street" id= "0.street"
													class="form-control" placeholder="Street" 
													 onblur="streetValidate(id)" required/>
													<span id="0.streetcheck" class="text-danger font-weight-bold"></span>
											</div>
											<#-- remove button -->
											<div id="repeater">
												<button type="button" id="fstaddress" class="btn btn-danger list-remove" value = "">Remove</button>
									    	</div>

											<label class="col-md-2 form-control-label" for="text-input">Landmark:</label>
												<div class="col-md-9 add1">
													<input type="text"  name="addressmodel[0].landmark" id="0.landmark"
													class="form-control" placeholder="LandMark"
													 onblur="landmarkValidate(id)" required/>
													<span id="0.landmarkcheck" class="text-danger font-weight-bold"></span>
												</div>

											<div class="row" id="row">
												<#--for pincode and city-->
												<div class="col-sm" id="fix">
													<div class ="add2" id = "">
														<select class ="form-control" id = "0.city" name="addressmodel[0].city">
   															<option value="Ahmedabad">Ahmedabad</option>
    														<option value="Vaddora">Vadodra</option>
															<option value="Rajkot">Rajkot</option>
															<option value="Surat">Surat</option>
														</select>
											
														<span id="0.citycheck" class="text-danger font-weight-bold"></span>
													</div>

													<div class ="add2" id = "">
														<input type="number" id="0.pincode" name="addressmodel[0].pincode"
														class="form-control" placeholder="PostalCode"
														value="" onblur="pincodeValidate(id)" required/>
														<span id="0.pincodecheck" class="text-danger font-weight-bold"></span>	
													</div>
												</div>
													
											<#--for state and country-->
												<div class="col-sm" id="fix1">
													<div class ="add2">
														<select class ="form-control" id = "0.state" name="addressmodel[0].state">
   															<option value="Gujarat">Gujarat</option>
    														<option value="Maharashtra">Maharshtra</option>
															<option value="Himachal">Himachal</option>
															<option value="Mp">Mp</option>
														</select>
												
														<span id="0.statecheck" class="text-danger font-weight-bold"></span>
													</div>

													<div class ="add2">
														<input type="text" id="0.country" name="addressmodel[0].country"
															class="form-control" placeholder="Country"
															value="" onblur="countryValidate(id)" required/>
														<span id="0.countrycheck" class="text-danger font-weight-bold"></span>
														
													</div>
												</div>												
											</div>												
										</div>				
									<hr>
									</div>
									<#-- add button -->
										<div id="repeater">
											<button type="button" id="rbtn" class="btn btn-primary pt-2 pull-right list-add"> Add Address</button>
										</div>
									</div>
									</#if>
								<#--=====-----end of address for register-----=====-->									

																
									<div class="form-group row" id="profilepicture">
										<label class="col-md-2 form-control-label" id="profileimage"
											for="text-input">Profile Picture:</label>
										<div class="col-md-7">
											
											<input type="file" id="submitimage" name="file"
											class="form-control op" placeholder="Image"/ <#if user??>""<#else>required</#if>>
											
											<input type="hidden" name="base64image" value="${(user.base64image)!""}"/> 
												<#if user?has_content>
											<input type="hidden" name="id" id = "u_id" value="${(user.id)!""}" /> 
												</#if>
											<span id=<#if user?has_content>"imagevalid"<#else>"imagecheck"</#if> class="text-danger font-weight-bold"></span>
											
										</div>
										
										<#if user?has_content>
										<div class="image-container">
											<img class="profile-pic"
											src="data:image/jpeg;base64,${(user.base64image)!""}"
											style="width: 150px; height: 150px" class="img-thumbnail"/>
										</div>
										<#else>
										<div class="image-container">
											<img class="profile-pic"
											src="mytheme/img/download.png"
											style="width: 150px; height: 150px" class="img-thumbnail"/>
										</div>
										</#if>
										
										
									</div>
								</div>
								
								<div class="card-footer">
									<input type="hidden" name = "DataName" id="deletedvalues" value="">
       						
         							<button type="submit" name="btn1" id = "registerbtn"
										value=""
										class="btn btn-sm btn-primary">
										<i class="fa fa-dot-circle-o"></i>
										<#if session?has_content>Update<#else>Register</#if>
									</button>
						
             						<button type="button" id = "cancel" class="btn btn-sm btn-primary">
										<a href="login"><font color="white">Cancel</font></a> 
									</button>   
									  						
								</div>					
							</form>
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
   
<!-- Bootstrap and necessary plugins -->
<script src="mytheme/bower_components/jquery/dist/jquery.min.js"></script>
<script src="mytheme/bower_components/tether/dist/js/tether.min.html"></script>
<script src="mytheme/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<#--  <script src="./resources/mytheme/js/repeater.js"></script>-->
<script src="mytheme/js/preview.js"></script>
<script src="mytheme/js/ajax.js"></script>
<script src="mytheme/js/jquery.dynamiclist.js" type="text/javascript"></script>
<script src="mytheme/js/Validation.js"></script>
</body>
</html>


