<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>Log in</title>

 <!-- Icons -->
<link href="mytheme/css/font-awesome.min.css" rel="stylesheet">
<link href="mytheme/css/simple-line-icons.css" rel="stylesheet">
<!-- Main styles for this application -->
<link href="mytheme/css/style.css" rel="stylesheet">


<script type = "text/javascript" >
   function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.onunload=function(){null};
</script>

</head>
<#assign session = (Session.login)!""/>
 
<body class="app flex-row align-items-center" style="background-color: #25c1f7;">
  	<div class="container">
    	<div class="row justify-content-center">
         	<div class="col-md-6">
             	<div class="card-group mb-0">
                	<div class="card p-4">
                     	<div class="card-body">
                        	<h1>Login</h1>
                             <p class="text-muted">Sign In to your account</p>       
                             <span id  class="text-danger font-weight-bold">${success!""}</span> 
                                <form name="frm" action="filter" method="post">
                                	<div class="input-group mb-3">
                                        <span class="input-group-addon"><i class="icon-user"></i></span>
                                        <input type="text" class="form-control" placeholder="Username" id="uname" name="username" onblur="lognameValidate(); loginvalidation();">
                                    </div>
                                    <span id ="unamecheck" class="text-danger font-weight-bold"></span>
                                    <span id ="upasscheck" class="text-danger font-weight-bold"></span>
                                    <div class="input-group mb-4">
                                        <span class="input-group-addon"><i class="icon-lock"></i>
                                        </span>
                                        <input type="password" class="form-control" placeholder="Password" id = "upass" name="password" onblur = "logpassValidate(); loginvalidation();">
                                    </div>
                                    <div class="row">
                                     	<div class="col-4">
                                        <input type="submit"class="btn btn-primary px-4" id = "login" name="btn" value="Login"/>
                                        </div>
                                        <div class="col-4 text-right">
                                            <a href="forgotpassword" class="btn btn-link px-0" rel="link">Forgot password?</a>
                                        </div>
                                    </div>
                                    <div class = "Register">
                               			 <a href="registerform" class="btn btn-link px-0">Not Registered?Create an account </a>
                                		 <div id ="response"></div>
                                 	</div>
                          		</form>
                    	 </div>
                	</div>
            	</div>
        	</div>
     	</div>
	</div>
	<!-- Bootstrap and necessary js -->
	 <script src="mytheme/bower_components/jquery/dist/jquery.min.js"></script>
     <script src="mytheme/bower_components/tether/dist/js/tether.min.html"></script>
     <script src="mytheme/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
     <script src="mytheme/js/Validation.js"></script>
</body>
</html>