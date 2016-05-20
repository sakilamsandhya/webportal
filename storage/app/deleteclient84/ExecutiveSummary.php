<!DOCTYPE html>
<html lang="en">
				<head>
								<meta charset="utf-8">
								<meta http-equiv="X-UA-Compatible" content="IE=edge">

								<meta name="viewport" content="width=device-width, initial-scale=1.0" />
								<meta name="description" content="Neon Admin Panel" />
								<meta name="author" content="" />

								<title>Infographic</title>

								
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

								<!--[if lt IE 9]><script src="assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

								<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
								<!--[if lt IE 9]>
																<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
																<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
								<![endif]-->

				</head>
				<body class="page-body  page-left-in" data-url="http://neon.dev">
								<div id="tooltip"></div>
								<?php
								$clients = DB::table('users')
																->where('role', 'client')
																->get();
								$reports=DB::table('client_reports')->get();

								?>
								<div class="page-container"><!-- add class "sidebar-collapsed" to close sidebar by default, "chat-visible" to make chat appear always -->   

												<div class="sidebar-menu">


																<header class="logo-env">

																				<!-- logo -->
																				<div class="logo">

																								<h4> Welcome Admin </h4>


																				</div>  

																				<!-- logo collapse icon -->

																				<div class="sidebar-collapse">
																								<a href="#" class="sidebar-collapse-icon with-animation"><!-- add class "with-animation" if you want sidebar to have animation during expanding/collapsing transition -->
																												<i class="entypo-menu"></i>
																								</a>
																				</div>
																				<!-- open/close menu icon (do not remove if you want to enable menu on mobile devices) -->
																				<div class="sidebar-mobile-menu visible-xs">
																								<a href="#" class="with-animation"><!-- add class "with-animation" to support animation -->
																												<i class="entypo-menu"></i>
																								</a>
																				</div><br>
																				<div>
		<form  method="GET" action="{{ URL::to('user/logout') }}" class="form-horizontal" role="form">

																<div class="form-group m0">
																				<div class="col-xs-12 text-center" style="margin-left: 118px; margin-top: 9px;">
																								<button class="btn-xs login-btn contact-submit btn btn-primary" id="create-submit" type="submit">Logout</button>
																				</div>
																</div>
												</form>
											</div> 
																</header>  

																<ul id="main-menu" class="">
																				<!-- add class "multiple-expanded" to allow multiple submenus to open -->
																				<!-- class "auto-inherit-active-class" will automatically add "active" class for parent elements who are marked already with class "active" -->
																				<!-- Search Bar -->


																				<li>
																								<a href="signup">
																												<i class="entypo-gauge"></i>
																												<span>Add User</span>
																								</a>

																				</li>

																				<li>
																								<a href="">
																												<i class="entypo-gauge"></i>
																												<span>Edit User</span>
																								</a>
																																																<ul>
																											
																												<li>
																																<a href="editclient">
																																			<span>Client</span>
																																</a>
																																</li>
																																<li>
																																				<a href="editanalyst">
																																				<span>Analyst</span>
																																</a>
																																</li>
																																</ul>

																				</li>



																				<li>
																								<a href="upload">
																												<i class="entypo-window"></i>
																												<span>Upload Report</span>
																								</a>
																				</li>

																					<li>
																								<a href="editreport">
																												<i class="entypo-gauge"></i>
																												<span>Edit Report</span>
																								</a>
																				</li>
																				<li>
																								<a href="assignclient">
																												<i class="entypo-window"></i>
																												<span>Assign Client To DA</span>
																								</a>
																				</li>

																				<li>
																								<a href="#">
																												<i class="entypo-bag"></i>
																												<span>View Reports</span>

																								</a>
																								<ul>
																												@forelse($clients as $f)
																												<li>
																																<a href="#">
																																				<span>{{$f->name}}</span>
																																</a>
																																<ul>
<?php
$reportnames = DB::table('client_reports')
								->where('client_id', $f->id)
								->get();
?>  


																																				@forelse($reportnames as $r)
																																				<li id={{$f->id}} class="report_names"> 
																																				
<?php echo "<a href='reportview?id=$f->id'>"; ?>
																																					<i class="entypo-bag"></i>
																																					<span>{{$r->report_name}}</span></a>

																																								</li>
																																								@empty
																																								@endforelse


																																</li>
																												</ul>
																								</li>

																								@empty
																								@endforelse

																				</ul>
																				</li>
																				</ul>

																</div>  
<div class="main-content">

																				<div class="row">

																								<!-- Profile Info and Notifications -->
																								<div class="col-md-12  col-sm-12 clearfix">

																												<h3>Edit Report</h3>
																												<br />

																												<div class="panel panel-primary" data-collapsed="0">

																																

																																<div class="panel-body">
																					<div class="table-responsive">        
																																							<table class="table table-striped table-bordered">
																																																								<thead>
																																																												<tr>
																																																																<th>Client_id</th>
																																																																<th>Report Name</th>
																																																																<th>Date</th>

																																																																

																																																																	<th>Action</th>
																																																												</tr>
																																																								</thead>
																																																								<tbody class="">
																																				@forelse($reports as $r)
																																									<tr id={{"tr".$r->client_id}}>
																																									<td>{{$r->client_id}}</td>
																																									<td>{{$r->report_name}}</td>
																																									<td>{{$r->created_at}}</td>
																																									
							<td><button type="button" class="btn btn-info btn-xs edit" id="{{$r->client_id}}">Edit</button></td>                                 
																																					</tr>
																																										
																																				@empty
																																								@endforelse

																																																								</tbody>
																																																				</table>
																																																				</div>

																																</div>

																												</div><!-- Footer -->
																												<div class="warper container-fluid">


																												</div>
																												
																								</div>


																				</div>
<div class="modal" id="myModal1" role="dialog">
				<div class="modal-dialog modal-lg">
						<div class="modal-content">
								<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										<h4 class="modal-title">Edit Here</h4>
								</div>
								<div class="modal-body">
                                       

<form role="form" class="form-horizontal form-groups-bordered" action="{{URL::to('dataanalyst/edit')}}" method="post" enctype="multipart/form-data">
   <p class="col-sm-10 alert-danger">{{ $errors->first('id') }}</p>
 <div class="form-group">
                                            <label class="col-sm-3 control-label">client</label>
                                            <div class="col-sm-6">
                                                <input type="text" name="id" id="client_id">
                                            </div>
                                        </div>
                                         <p class="col-sm-10 alert-danger">{{ $errors->first('report') }}</p>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Client Report</label>
                                            <div class="col-sm-6">
                                                <select class="col-sm-12" style="min-height: 30px;" id="client" name="report">
                                                    <option value='Home State Of Play'>Home State Of Play</option>
                                                    <option value='Executive Summary'>Executive Summary</option>
                                                    <option value='Customer Model Analysis'>Customer Model Analysis</option>
                                                    <option value='Key Value Drivers'>Key Value Drivers</option>
                                                    <option value='Customer Profitobility Analysis'>Customer Profitobility Analysis</option>
                                                    <option value='Product Performance Analysis'>Product Performance Analysis</option>
                                                    <option value='Conversion Funnel'>Conversion Funnel</option>
                                                    <option value='Ad Hoc Analysis'>Ad Hoc Analysis</option>
                                                </select>  

                                            </div>
                                            </div>
                                              <p class="col-sm-10 alert-danger">{{ $errors->first('file') }}</p>
                                       <div class="form-group">
                                            <label class="col-sm-3 control-label">Upload Report</label>
                                            <div class="col-sm-6">
                                                <input type="file" name="file" class="filerep00">
                                            </div>
                                        </div>
                                         <div class="modal-footer">
              <button type="submit" class="btn btn-default useredit" id="contact-submit">Update</button>
        </div>
                                    
                                        </form>
        </div>
							
						</div>
				</div>
		</div>
</div>
																			
																</div>
												<footer class="main">


																																&copy; 2015 <strong>chiSquareInfographic</strong> @<a href="#"> Ahex</a>

																												</footer>
												</div>





																																								<!-- Bottom Scripts -->
																																							  <script src={{ asset('/js/gsap/main-gsap.js') }}></script>
        <script src={{ asset('/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js')}}></script>
        <script src={{ asset('/js/bootstrap.js') }}></script>
        <script src={{ asset('/js/joinable.js') }}></script>
        <script src={{ asset('/js/resizeable.js') }}></script>
        <script src={{ asset('/js/neon-api.js') }}></script>
        <script src={{ asset('/js/jvectormap/jquery-jvectormap-1.2.2.min.js') }}></script>
        <script src={{ asset('/js/jvectormap/jquery-jvectormap-europe-merc-en.js') }}></script>
        <script src={{ asset('/js/jvectormap/jquery-jvectormap-world-mill-en.js')}}></script>
        <script src={{ asset('/js/jquery.sparkline.min.js')}}></script>
        <script src={{ asset('/js/rickshaw/vendor/d3.v3.js') }}></script>
        <script src={{ asset('/js/rickshaw/rickshaw.min.js') }}></script>
        <script src={{ asset('/js/neon-chat.js') }}></script>
        <script src={{asset('/js/neon-custom.js') }}></script>
        <script src={{ asset('/js/neon-demo.js') }}></script>
		<script src={{ asset('/js/app/editreport.js') }}></script>

																																<!--        <script src="../resources/assetsnew/js/app/admin.js"></script>-->

																																								</body>

																																								</html>