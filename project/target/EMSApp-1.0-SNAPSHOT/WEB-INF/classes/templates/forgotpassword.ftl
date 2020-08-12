<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ForgotPassword</title>

<!-- Icons -->

<link href="mytheme/css/font-awesome.min.css" rel="stylesheet">
<link href="mytheme/css/simple-line-icons.css" rel="stylesheet">
<!-- Main styles for this application -->
<link href="mytheme/css/style.css" rel="stylesheet">
</head>
<body class="app flex-row align-items-center" style="background-color: #25c1f7;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <div class="card-body">
                                <h1>Forgot Password</h1>
                                <form class = "forgot"method="post">
                                    <div class="input-group mb-3" id = "fgot">
                                        <span class="input-group-addon"><i class="icon-user"></i></span>
                                        <input type="text" class="form-control" id ="uname" placeholder="Username" name="fgotusername">
                                    </div> 
                                     <div class="input-group mb-4">
                                        <span class="input-group-addon"><i class="icon-lock"></i>
                                        </span>
                                        <input type="text" class="form-control" id = "pas" placeholder="Password" name="txtadm_pass">
                                        <span id = "response"></span>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <button type="button"  id="forgot" class="btn btn-primary px-4">Show Password</button>
                                        </div>
                                        <div class="col-4 text-right">
                                            <a href="login" class="btn btn-link px-0"><-Back to Login</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- Bootstrap and necessary plugins -->
<script src="mytheme/bower_components/jquery/dist/jquery.min.js"></script>
<script src="mytheme/bower_components/tether/dist/js/tether.min.html"></script>
<script src="mytheme/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="mytheme/js/ajax.js"></script>
</body>
</html>