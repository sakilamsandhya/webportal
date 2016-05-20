<!DOCTYPE html>
<html>
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Neon Admin Panel" />
        <meta name="author" content="" />

        <title>Forgot password</title>

        <link rel="stylesheet" href={{ asset('/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css')}}>
        <link rel="stylesheet" href={{ asset('/css/font-icons/entypo/css/entypo.css')}}>
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic">

        <link rel="stylesheet" href={{ asset('/css/neon-core.css')}}>
        <link rel="stylesheet" href={{ asset('/css/neon-theme.css')}}>
        <link rel="stylesheet" href={{ asset('/css/neon-forms.css')}}>
        <link href={{ asset('/css/app/app.v1.css')}} rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href={{asset('/css/bootstrap.css')}}>
        <link rel="stylesheet" href={{ asset('/css/custom.css')}}>
        <link href={{ asset('/css/app/style.css') }} rel="stylesheet" type="text/css"/>
        <script src={{ asset('/js/jquery-1.11.0.min.js')}}></script>
        <link href={{ asset('/css/app/style.css') }} rel="stylesheet" type="text/css"/>    

    </head>
    <body class="login-page">
         
        <div class="login-box">
       
            
            
            <div class="login-logo">
            </div><!-- /.login-logo -->
            <div class="login-box-body">
            <div id="notexists"></div>
                <p class="login-box-msg">Forgot Password</p>
                <form method="post" role="form" id="resetlink">
                    <div class="form-group has-feedback">
                    <label class="control-label">Enter Email id</label>
                     <input type="email" name="email" id="email_id" class="form-control" placeholder="Email">
                    </div>       
                    <div class="form-group has-feedback">
                    <button type="submit" class="btn btn-default"  value="submit">Reset Password</button>     
           
                    </div>
                        
                </form>
              

        <!-- Bottom Scripts -->
        <script src={{ asset('/js/gsap/main-gsap.js') }}></script>
        <script src={{ asset('/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js')}}></script>
        <script src={{ asset('/js/bootstrap.js') }}></script>
        <script src={{ asset('/js/joinable.js') }}></script>
        <script src={{ asset('/js/resizeable.js') }}></script>
        <script src={{ asset('/js/neon-api.js') }}></script>
        <script src={{ asset('/js/jvectormap/jquery-jvectormap-1.2.2.min.js') }}></script>
        <script src={{ asset('/js/jvectormap/jquery-jvectormap-europe-merc-en.js') }}></script>
<!--    <script src={{ asset('/js/jvectormap/jquery-jvectormap-world-mill-en.js')}}></script>
        <script src={{ asset('/js/jquery.sparkline.min.js')}}></script>
        <script src={{ asset('/js/rickshaw/vendor/d3.v3.js') }}></script>
        <script src={{ asset('/js/rickshaw/rickshaw.min.js') }}></script>-->
        <script src={{ asset('/js/neon-chat.js') }}></script>
        <script src={{asset('/js/neon-custom.js') }}></script>
        <script src={{ asset('/js/neon-demo.js') }}></script>
        <script src={{ asset('/js/app/reset.js') }}></script>
           <script src={{ asset('/js/jquery.validate.min.js')}}></script>
         
    </body>
</html>