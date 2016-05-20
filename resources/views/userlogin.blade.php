<!DOCTYPE html>
<html>
    <head>

        <title>LogIn</title>

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
             
            <div class="login-box-body">
            <p class="resetpasword"></p>
          @if(Session::has('message'))
	  <p class="alert {{ Session::get('alert-class', 'alert-danger text-center') }}">{{ Session::get('message') }}</p>
	  @endif 
             <p class="login-box-msg">SIGN IN</p>
                <form method="post" action="{{ URL::to('user/login') }}"role="form">
                    <div class="form-group has-feedback">
                        <input type="email" class="form-control" placeholder="Email" name="email" value="{{ old('email') }}" id="username"/>
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                          <p>{{ $errors->first('email') }}
                    </div>
                                     
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Password" name="password" id="password"/>
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        <p>{{ $errors->first('password')  }}
                    </div>
                      <div class="row remember">
                        <div class="col-xs-8">    
                            <div class="checkbox icheck">
                                <label>
                                    <input type="checkbox" name="remember"> Remember Me
                                </label>
                            </div>                        
                      </div>
                      <div class="col-xs-4">
                            <button type="submit" class="btn btn-primary btn-block btn-flat" id="contact-submit">Log In</button>
                        </div>
                    </div>
                </form>
                <a href="forgotpassword">I forgot my password</a><br>
       </div> </div>
        <!-- Bottom Scripts -->
        <script src={{ asset('/js/gsap/main-gsap.js') }}></script>
        <script src={{ asset('/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js')}}></script>
        <script src={{ asset('/js/bootstrap.js') }}></script>
        <script src={{ asset('/js/joinable.js') }}></script>
        <script src={{ asset('/js/resizeable.js') }}></script>
        <script src={{ asset('/js/neon-api.js') }}></script>
        <script src={{ asset('/js/jvectormap/jquery-jvectormap-1.2.2.min.js') }}></script>
        <script src={{ asset('/js/jvectormap/jquery-jvectormap-europe-merc-en.js') }}></script>
        <script src={{ asset('/js/neon-chat.js') }}></script>
        <script src={{asset('/js/neon-custom.js') }}></script>
        <script src={{ asset('/js/neon-demo.js') }}></script>
</body>
</html>