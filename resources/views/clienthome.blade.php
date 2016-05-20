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
        <link rel="stylesheet" href={{ asset('/css/bootstrap.css')}}>
        <link rel="stylesheet" href={{ asset('/css/custom.css')}}>
        <link href={{ asset('/css/app/style.css') }} rel="stylesheet" type="text/css"/>
        <script src={{ asset('/js/jquery-1.11.0.min.js')}}></script>
        <link href={{ asset('/css/app/style.css') }} rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href={{ asset('/css/jquery-te-1.4.0.css')}}>
       
    </head>
    <body class="page-body  page-left-in">
         <div id="tooltip"></div>
           <?php
                $client_id = Session::get('client_id');
                 $currentMonth = date('F');
               $prevmonth=Date('F', strtotime($currentMonth . " last month"));
               $prevm=substr($prevmonth, 0, 3);
                 ?>
     
        <div class="page-container"><!-- add class "sidebar-collapsed" to close sidebar by default, "chat-visible" to make chat appear always -->	

            <div class="sidebar-menu" >
            <div class="sidebar-inner">


                
                <header class="logo-env pad0">

                    <!-- logo -->
                    
                    <div class="logo">
                    <div class="navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
    
                        <li style="cursor:pointer;">
                            <span id="logoutdropdown" role="button" data-toggle="dropdown" data-target="#" class=""> 
                               Welcome Client  <i class="caret"></i>
                            </span><ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu" id="annotation_options">
                                <li class="features"><a style="cursor:pointer" tabindex="-1" data-toggle="modal" data-target="">Setting</a></li>         
                                <li class="dropdown-submenu features"><a style="cursor:pointer" tabindex="-1" href="changepassword">Change password</a></li>        
                                <li><a href="{{ URL::to('user/logout') }}" tabindex="-1" id="logout" style="cursor:pointer">Logout </a></li>
                            </ul>
                        </li>
                
                    </ul>                     
                      </div>
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
                    </div><br/>

        
                </header> 
                <ul id="main-menu" class={{$client_id}}>
                    <!-- add class "multiple-expanded" to allow multiple submenus to open -->
                    <!-- class "auto-inherit-active-class" will automatically add "active" class for parent elements who are marked already with class "active" -->
                    <!-- Search Bar -->

                    <li id={{$client_id}} class="home_report">
                        <a href="javascript:void(0);">
                        <i class="entypo-bag"></i>
                            <span>Home State Of Play</span>
                        </a>
                    </li>
                    <li id={{$client_id}} class="executive_report">
                        <a href="javascript:void(0);">
                        <i class="entypo-bag"></i>
                            <span>Executive Summary</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="entypo-bag"></i>
                            <span>Customer Model Analysis</span>

                        </a>
                    </li>
                    
                <li>
		<a href="#">
		<i class="entypo-bag"></i>
	         <span>Key Value Drivers</span>
	         </a>
                <ul class=keyvalue_report{{$client_id}}>
         

                </ul>
               </li>
                    <li>
                        <a href="#">
                        <i class="entypo-bag"></i>
                            <span>Customer Profitobility Analysis</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="entypo-bag"></i>
                            <span>Product Performance Analysis</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="entypo-bag"></i>
                            <span>Conversion Funnel</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="entypo-bag"></i>
                            <span>Ad Hoc Analysis</span>
                                </a>
                    </li>


                </ul>


            </div>
            </div>
<!-- homestate of play div -->  
           
<div class="table-responsive main-content homestateofplay" style="overflow-x: auto;">
                <div class="row">

                    <!-- Profile Info and Notifications -->
                    <div class="col-md-6 col-sm-8 clearfix">

                        <ul class="user-info pull-left pull-none-xsm">
                            <ul class="user-info pull-left pull-right-xs pull-none-xsm">
                                </div>

                                </div>

                                <div class="warper container-fluid">

                                    <!-- Nav tabs -->
                                    <div class="chart-nav-tabs">
                                       

                                        <!-- Tab panes -->
                                        <div class="tab-content">
                                            <div class="row">
                                                <div class="head-section">
                                                    <div class="col-md-2 col-xs-3">
                                                        <select class="form-control report_years">
                                                            <option value="">Select Year</option>
                                                            <option value="2015">2015</option>
                                                            <option value="2014">2014</option>
                                                            <option value="2013">2013</option>
                                                            <option value="2012">2012</option>
                                                            <option value="2011">2011</option>
                                                            <option value="2010">2010</option>
                                                            <option value="2009">2009</option>
                                                            <option value="2008">2008</option>
                                                            <option value="2007">2007</option>
                                                            <option value="2006">2006</option>
                                                            <option value="2005">2005</option>
                                                            <option value="2004">2004</option>
                                                            <option value="2003">2003</option>
                                                            <option value="2002">2002</option>
                                                            <option value="2001">2001</option>
                                                            <option value="2000">2000</option>
                                                        </select>
                                                <p class="month_year"><b></b></p>
                                                    </div>
                                                    <div class="col-md-offset-2 col-md-4 col-xs-6">

                                                        <h4 style="margin-left:103px;">State of Play</h4>

                                                    </div>
                                                    <div class="col-md-offset-2 col-md-2 col-xs-3">
                                                        <select class="form-control report_months">
                                                     <option value="">Select Month</option>
                                                     <option value="january">January</option>
                                                    <option value="february">February</option>
                                                    <option value="march">March</option>
                                                    <option value="april">April</option>
                                                    <option value="may">May</option>
                                                    <option value="june">June</option>
                                                    <option value="july">July</option>
                                                    <option value="august">August</option>
                                                    <option value="september">September</option>
                                                   <option value="october">October</option>
                                                   <option value="november">November</option>
                                                    <option value="december">December</option>
                                                        </select>
                                                
                                                <button  class="btn btn-info btn-xs change_report_btn" id="Home_State_Of_Play">change report</button>
                                                    </div>
                                             
                                                </div>
                                            </div>
                                            <div class="category-wrapper">     
                                                <!-- Nav tabs -->
                                                <ul class="nav nav-tabs text-center" id="myTabs" role="tablist">
                                                    <li role="presentation"  class="active"><a href="#revenue" aria-controls="revenue" role="tab" data-toggle="tab">Revenue</a></li>
                                                    <li role="presentation"><a href="#newPlayer" aria-controls="newPlayer" role="tab" data-toggle="tab">New Player</a></li>
                                                    <li role="presentation"><a href="#database" aria-controls="database" role="tab" data-toggle="tab">Database</a></li>
                                                    <li role="presentation"><a href="#playerValues" aria-controls="playerValues" role="tab" data-toggle="tab">Player Values</a></li>
                                                    <li role="presentation"><a href="#bonusCost" aria-controls="bonusCost" role="tab" data-toggle="tab">Bonus Cost</a></li>
                                                    <li role="presentation"><a href="#marketingSpend" aria-controls="marketingSpend" role="tab" data-toggle="tab">Marketing Spend</a></li>
                                                </ul>


                                            </div><hr>
                                                   <div class="table-responsive">

                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Poland</th>
                                                                <th>Slovakia</th>
                                                                <th>Czech Republic</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="table_data">


                                                        </tbody>
                                                    </table>
                                                </div>
                                                    <br/>    <hr>
                                                     <ul class="nav nav-tabs" role="tablist">
                                           
                                            <li role="presentation" class="active"><a href="#graphical" aria-controls="profile" role="tab" data-toggle="tab">Graphical View</a></li>
                                              <li role="presentation"><a href="#table" aria-controls="table" role="tab" data-toggle="tab">Tabular View</a></li>
                                        </ul>
                                          <div role="tabpanel" class="tab-pane active" id="graphical">
                                               
                                                <div class="row">
                                                    <div class="row">
                                                        <h4 style="margin-left:375px;">Channel Wise Revenue Distribution</h4>
                                                        <div class="col-lg-4 chartview" id="chart_channel1"></div>
                                                        <div class="col-lg-4 chartview" id="chart_channel2"></div>
                                                        <div class="col-lg-4 chartview" id="chart_channel3"></div>
                                                    </div>
                                                    <br/><hr>
                                                    <div class="row">
                                                        <h4 style="margin-left:375px;">Product Wise Revenue Distribution</h4>
                                                        <div class="col-lg-4 chartview" id="chart_revenue1"></div>
                                                        <div class="col-lg-4 chartview" id="chart_revenue2"></div>
                                                        <div class="col-lg-4 chartview" id="chart_revenue3"></div>
                                                    </div>
                                                    <br/><hr>
                                                    <div class="row">
                                                        <h4 style="margin-left:375px;">Revenue Distirbution by player Age</h4>
                                                        <div class="col-lg-4 chartview" id="chart_age1"></div>
                                                        <div class="col-lg-4 chartview" id="chart_age2"></div>
                                                        <div class="col-lg-4 chartview" id="chart_age3"></div>
                                                    </div>
                                                    <br/><hr>
                                                    <div class="row">
                                                        <h4 style="margin-left:375px;">Product Variant Revenue Distribution</h4>
                                                        <div class="col-lg-4 chartview" id="product_variant1"></div>
                                                        <div class="col-lg-4 chartview" id="product_variant2"></div>
                                                        <div class="col-lg-4 chartview" id="product_variant3"></div>
                                                    </div>
                                                    <br/><hr>
                                                    <div class="row">
                                                        <h4 style="margin-left:375px;">Source of Traffic  Revenue Distribution</h4>
                                                        <div class="col-lg-4 chartview" id="source_traffic1"></div>
                                                        <div class="col-lg-4 chartview" id="source_traffic2"></div>
                                                        <div class="col-lg-4 chartview" id="source_traffic3"></div>
                                                    </div>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div role="tabpanel" class="tab-pane " id="table">
                                                <div class="table-responsive">

                               
                                                    
                                                    <h4 style="margin-left:375px;">Channel Wise Revenue Distribution</h4>
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Poland</th>
                                                                <th>Slovakia</th>
                                                                <th>Czech Republic</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="table_channel">


                                                        </tbody>
                                                    </table>
                                                    <hr>
                                                    <h4 style="margin-left:375px;">Product Wise Revenue Distribution</h4>
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Poland</th>
                                                                <th>Slovakia</th>
                                                                <th>Czech Republic</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="table_product">


                                                        </tbody>
                                                    </table>
                                                    <br/> <hr>
                                                    <h4 style="margin-left:375px;">Revenue Distirbution by player Age</h4>
                                                    <table class="table table-bordered ">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Poland</th>
                                                                <th>Slovakia</th>
                                                                <th>Czech Republic</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="table_revenue">


                                                        </tbody>
                                                    </table>
                                                    <br/><hr>
                                                    <h4 style="margin-left:375px;">Product Variant Revenue Distribution</h4>
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Poland</th>
                                                                <th>Slovakia</th>
                                                                <th>Czech Republic</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="table_productv">


                                                        </tbody>
                                                    </table>
                                                    <br/> <hr>
                                                    <h4 style="margin-left:375px;">Source of Traffic  Revenue Distribution</h4>
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Poland</th>
                                                                <th>Slovakia</th>
                                                                <th>Czech Republic</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="table_source">


                                                        </tbody>
                                                    </table>


                                                </div>
                                            </div>
                                            

                                            <!-- Warper Ends Here (working area) -->


                                        </div>

                                    </div>
                                </div>
                                </div>
                        
 
 <!-- keyvaluer driver report div -->  
 
 <div class="main-content keyvaluereport" style="display:none;">
                                               <div class="col-lg-2 col-lg-offset-7" style="margin-left:85%; margin-top:2%;">
                                                    
                                                      <select class="form-control country_names">
                                                          
                                                            
                                                        </select></div>
                                  <div class="table-responsive" id="keyvaluedriver"  style="display:none;margin-top:8%;overflow-x: ;">
                                           
                                                    <table class="table table-responsive" id="table-sparkline">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="3"><h4><b>Key Value Driver Monitoring<b></h4></th>
                                                                <th colspan="5"></th>
                                                                <th colspan="6"></th>
                                                               
                                                            </tr>
                                                             <tr>
                                                                <th class="header_parent_category"><h5><b></b></h5></th>
                                                               
                                                                <th class="center"><h6><b>Metrics</b></h6></th>
                                                                     <th class="center"><h6><b>Trends</b></h6></th>
                                                                <th class="center"><h6><b>{{$prevm}} 15</b></h6></th>
                                                                <th class="center"><h6><b>{{$prevm}} 14</b></h6></th>
                                                                <th class="center" colspan="2"><h6><b>Dev %</b></h6></th>        
                                                                <th class="center"><h6><b>3months avg</b></h6></th>
                                                                <th class="center" colspan="2"><h6><b>Dev %</b></h6></th>
                                                                 <th class="center"><h6><b>2015trends</b></h6></th>
                                                                <th class="center"><h6><b>2014trends</b></h6></th>
                                                                <th class="center"><h6><b>month on month</b></h6></th>
                                                                <th class="center"><h6><b>Q3 2015</b></h6></th>
                                                                <th class="center"><h6><b>Q3 2014</b></h6></th>
                                                                <th class="center" colspan="2"><h6><b>Dev %</b></h6></th> 
                                                                    
                                                              </tr>
                                                        </thead>
                                                        <tbody class="table_data_keyvalue" id="tbody-sparkline">
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
 
                                </div>
  
 <!-- --------------------div for Executive Summary rEPORT------------------- -->  
  <div class="main-content executivesummary_report" style="display:none;">
  <div class="row text-right">
  <div class="col-lg-2 pull-right countrynamesdiv">
   <select class="form-control contry_names_for_exe">
  </select>
 </div>
 </div>
 
  <div class="tab-content">
  
  <ul class="nav nav-tabs" role="tablist">
                                           
    <li role="presentation" class="active"><a href="#executivesum" aria-controls="profile" role="tab" data-toggle="tab">Executive Summary</a></li>
    <li role="presentation"><a href="#overallbus" aria-controls="table" role="tab" data-toggle="tab">Overall Business Summary</a></li>
    <li role="presentation"><a href="#onlinebus" aria-controls="profile" role="tab" data-toggle="tab">Online Business Summary</a></li>
  <li role="presentation"><a href="#retailbus" aria-controls="profile" role="tab" data-toggle="tab">Retail Business Summary</a></li>
  <li role="presentation"><a href="#revenuebus" aria-controls="profile" role="tab" data-toggle="tab">Revenue Bridge</a></li>
   </ul>
                                        
  
<div role="tab" class="tab-pane active" id="executivesum"><!-- div for first tab -->
  
 <!--  div FOr heading -->
 
<div class="row" style="background-color:#C4D9F2;">
<div class="col-lg-8">
<h4><b>Executive Summary </b></h4>
</div>
<div class="col-lg-4">

<h4>For The Month Of {{$prevmonth}}  2015 </h4>
</div>
</div>

 <!-- ------- div FOr first row tables----------- -->
  <div class="table-responsive">
  <div class="row overallsmallheding"></div>
<div class="row">
<div class="col-lg-4 display-table-cell">

 <div class="table-responsive">
 
 <table class="table spacingbwtd" style="border-spacing:10px;">
    <thead>
  
  <tr style="background-color:rgba(238, 216, 244, 0.49);padding:2px;"><th class="center" colspan="5"><h6><b>Overall Financial Summary      For the Month Of {{$prevmonth}} 2015</b></h6></th>
  
 <tr/>
  
       <tr>
             <th style="background-color: #C4D9F2" class="center">vsPlan</td></th>
                         
             <th style="background-color: #C4D9F2" class="center" colspan="2">MTD</th>
                
             <th style="background-color: #C4D9F2" class="center" colspan="2">YTD</th>  
      </tr>  
      <tr><th></th>
         
          <th class="center">vsPlan</th>
          <th class="center">%</th>
         <th class="center">vsPlan</th>
          <th class="center">%</th>
                  </tr>
   </thead> 
    <tbody id="overal_financial_table_data1"></tbody>         
 </table>   
 
 </div>
 <div class="table-responsive">
 <table class="table spacingbwtd">
    <thead>
     <tr style="background-color: #C4D9F2">
             <th class="center">vs2014</th>
              <th class="center" colspan="2">MTD</th>
             <th class="center" colspan="2">YTD</th>  
      </tr>
       </tr>  
      <tr><th></th>
          <th class="center">vsLy</th>
          <th class="center">%</th>
         <th class="center">vsPlan</th>
          <th class="center">%</th>
       </tr>               
    </thead> 
    <tbody id="overal_financial_table_data2"></tbody>         
 </table>
 </div>
 </div>
<div class="col-lg-4 display-table-cell">
<div class="table-responsive">

 <table class="table spacingbwtd">
  <thead>
 
 <tr style="background-color:rgba(238, 216, 244, 0.49);padding:2px;"><th class="center" colspan="5"><h6><b>Online Business Financial Summary      For the Month Of {{$prevmonth}} 2015</b></h6></th>
  
 <tr/>
              
 
       <tr style="background-color: #C4D9F2">
             <th class="center">vsPlan</td></th>
             <th class="center" colspan="2">MTD</th>
             <th class="center" colspan="2">YTD</th>  
      </tr>  
      <tr><th></th>
          <th class="center">vsPlan</th>
          <th class="center">%</th>
         <th class="center">vsPlan</th>
          <th class="center">%</th>
                  </tr>
   </thead>
   <tbody id="online_financial_table_data1"></tbody>        
 </table>
 
 </div>
 
 <div class="table-responsive">
 <table class="table spacingbwtd">
   <thead>
     <tr style="background-color: #C4D9F2">
             <th class="center">vs2014</th>
              <th class="center" colspan="2">MTD</th>
             <th class="center" colspan="2">YTD</th>  
      </tr>
       </tr>  
      <tr><th></th>
          <th class="center">vsLy</th>
          <th class="center">%</th>
         <th class="center">VsPlan</th>
          <th class="center">%</th>
       </tr>               
    </thead> 
    <tbody id="online_financial_table_data2"></tbody>         
 </table>
 </div>
</div>
<div class="col-lg-4 display-table-cell">
<div class="table-responsive">

 <table class="table spacingbwtd">
   <thead>

   <tr style="background-color:rgba(238, 216, 244, 0.49);padding:2px;"><th class="center" colspan="5"><h6><b>Retail Business Financial Summary   For The Month Of {{$prevmonth}} 2015</b></h6></th>
  
 <tr/>
             
 
    
       <tr style="background-color: #C4D9F2">
             <th class="center">vsPlan</th>
             <th class="center" colspan="2">MTD</th>
             <th class="center" colspan="2">YTD</th>  
      </tr>  
      <tr><th></th>
          <th class="center">vsPlan</th>
          <th class="center">%</th>
         <th class="center">VsPlan</th>
          <th class="center">%</th>
                  </tr>
   </thead>
   <tbody id="retail_financial_table_data1"></tbody>
 </table>
 
 </div>
 
 <div class="table-responsive">
 <table class="table spacingbwtd">
   <thead>
     <tr style="background-color: #C4D9F2">
             <th class="center">vs2014</th>
              <th class="center" colspan="2">MTD</th>
             <th class="center" colspan="2">YTD</th>  
      </tr>
       </tr>  
      <tr><th></th>
          <th class="center">vsLy</th>
          <th class="center">%</th>
         <th class="center">VsPlan</th>
          <th class="center">%</th>
       </tr>               
    </thead> 
   <tbody id="retail_financial_table_data2"></tbody>
 </table>
 
 </div>
</div>
</div>
</div>
<br/></br>

 <!------ div FOr second row tables--------- -->
 <div class="row" style="width:1000px">
 <div class="col-lg-5">
 <div class="row"><div class="col-lg-6"><h4><b>Market Share Analysis</b></div><div class="col-lg-3 marketsmallheading"></div><div class="col-lg-3"><h4></h4></div></div>
 
 <div class="table-responsive">
 <table class="table decreasepadding">
   <thead>
       <tr>
             <th>Overall Sports</th>
             <th class="rowalignment">2014</th>
             <th class="rowalignment">2015</th> 
             <th class="rowalignment" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th colspan="2" class="center">Net Change</th>  
      </tr>  
   </thead>
   <tbody id="market_share_analysis1"></tbody>
 </table>
 
 </div><br/>
 <div class="table-responsive">
 <table class="table boldheading">
   <thead>
       <tr>
             <th>Online Business</th>
             <th class="rowalignment">2014</th>
             <th class="rowalignment">2015</th>  
                 <th class="rowalignment" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th colspan="2" class="center">Net Change</th>  
      </tr>  
   </thead>
   <tbody id="market_share_analysis2"></tbody>
 </table>
 
 </div><br/>
 <div class="table-responsive">
 <table class="table boldheading">
   <thead>
       <tr>
             <th>Retail Business</th>
             <th class="rowalignment">2014</th>
             <th class="rowalignment">2015</th>  
                 <th class="rowalignment" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
            <th colspan="2" class="center">Net Change</th>   
      </tr>  
   </thead>
   <tbody id="market_share_analysis3"></tbody>
 </table>
 
 </div>
 </div>
 <div class="col-lg-7">
 <div name="textarea" id="text1_executive" style="min-width:900px;">           
</div> 

 </div>
 </div>
 
</div><!-- end for first tab -->
 
 <!-- -------------------------------------------------------------------------- -->  
<div role="tab" class="tab-pane" id="overallbus"><!-- div for second tab -->

 <!-- ----------div FOR executive summary graph------- -->

<div class="table-responsive" style="overflow-x: ;" id="overallbusinessdiv">

<!-- for table -->
<div class="table-responsive">

 <table class="table table-striped boldheading decreasepadding headingpaddingclaass" style="width:1300px;">
   <thead>
        <tr style="background-color:#DAEEF3" class="headingpadingdecrease">
             <th class="" colspan="1" style="font-size:14px;">Overall Business Summary</th>
              <th colspan="8"></th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;"></th>
            </tr>
    <tr style="background-color:#DAEEF3" class="headingpadingdecrease bordertoop">
                <th colspan="2"></th>
            <th class="center" colspan="7" style="font-size:11px;">For The Month Of  {{$prevmonth}}</th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;">YTD</th>
          </tr>
         
     <tr class="">
    <th colspan="9">
        <div class="row">
     <div class="col-lg-3">Graph Legends</div>
         <div class="col-lg-3">
         <div style="width:15px;height:15px;border:1px solid #000;background:green;float: left;"></div> 
        <div style="margin-left:20px"><small>Highest Datapoint</small>
        </div>  
         </div>
        <div class="col-lg-3">
        <div style="width:15px;height:15px;border:1px solid #000;background:red;float: left;"></div>
        <div style="margin-left:20px"><small>Lowest Datapoint</small></div>
        </div>
        <div class="col-lg-3">
        <div  style="width:15px;height:15px;border:1px solid #000;background:orange;float: left;"></div>
        <div style="margin-left:20px"><small>First and Last Datapoint</small></div>
        </div>
        </div>
        
        
    </th>

    <th colspan="1" class="center" style="background-color: white; border:none; min-width: 0px;">&nbsp;</th>
        <th colspan="7">
<div class="row">
    <div class="col-lg-4"><div class="executive_green_circle pull-left"></div><div>+vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_yellow_circle pull-left"></div><div> <-2.5% vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_red_circle pull-left"></div><div> >-2.5vsPlan</div></div>
</div>
    </th>

     
</tr>
       <tr class="headingpadingdecrease">
      <th class=""><b><div class="smallheadigsecondtab"></div></b><br/><span class="hadingcolor">Financials</span></th>  
      <th class="hadingcolor">Trends 12 Months</th>
      <th class="center ">Actual<br/><span class="hadingcolor">{{$prevm}}-15<span></th>
      <th class="center ">Plan<br/><span class="hadingcolor">{{$prevm}}-15</th>
      <th colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual Last Year<br/><span class="hadingcolor">{{$prevm}}-14</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center hadingcolor" style="background-color: transparent; border:none; min-width: 0px;">&nbsp;</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2015</span></th>
      <th class="center ">Plan YTD<br/><span class="hadingcolor">2015<span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2014</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      
      </tr>
   </thead>
   <tbody id="overall_business_graph"></tbody>
 </table>
 
 </div>
</div><br/><br/>
 
<!-- ------div FOR  Customer  model- --------------------------------------- -->

<!-- for table -->

<div class="table-responsive" style="overflow-x: ;">
 <table class="table table-striped table-responsive boldheading decreasepadding headingpaddingclaass" style="width:1300px;">
   <thead>
        <tr style="background-color:#DAEEF3" class="headingpadingdecrease">
             <th class="" colspan="1" style="font-size:14px;">Customer Model : Overall</th>
              <th colspan="8"></th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;"></th>
      </tr>  
    <tr style="background-color:#DAEEF3" class="headingpadingdecrease bordertoop">
                <th colspan="2"></th>
            <th class="center" colspan="7" style="font-size:11px;">For The Month Of  {{$prevmonth}}</th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;">YTD</th>
          </tr>
         
        <tr>
    <th colspan="9">
        <div class="row">
     <div class="col-lg-3">Graph Legends</div>
         <div class="col-lg-3">
         <div style="width:15px;height:15px;border:1px solid #000;background:green;float: left;"></div> 
        <div style="margin-left:20px"><small>Highest Datapoint</small>
        </div>  
         </div>
        <div class="col-lg-3">
        <div style="width:15px;height:15px;border:1px solid #000;background:red;float: left;"></div>
        <div style="margin-left:20px"><small>Lowest Datapoint</small></div>
        </div>
        <div class="col-lg-3">
        <div  style="width:15px;height:15px;border:1px solid #000;background:orange;float: left;"></div>
        <div style="margin-left:20px"><small>First and Last Datapoint</small></div>
        </div>
        </div>
        
        
    </th>

    <th colspan="1" class="center" style="background-color: white; border:none; min-width: 0px;">&nbsp;</th>
        <th colspan="7">
<div class="row">
    <div class="col-lg-4"><div class="executive_green_circle pull-left"></div><div>+vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_yellow_circle pull-left"></div><div> <-2.5% vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_red_circle pull-left"></div><div> >-2.5vsPlan</div></div>
</div>
    </th>

     
</tr>
     <tr class="headingpadingdecrease">
      <th class=""><b><div class="smallheadigsecondtab"></div><br/><span class="hadingcolor">Financials</span></th>  
      <th class="hadingcolor">Trends 12 Months</th>
      <th class="center ">Actual<br/><span class="hadingcolor">{{$prevm}}-15<span></th>
      <th class="center ">Plan<br/><span class="hadingcolor">{{$prevm}}-15</th>
      <th colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual Last Year<br/><span class="hadingcolor">{{$prevm}}-14</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center hadingcolor" style="background-color: transparent; border:none; min-width: 0px;">&nbsp;</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2015</span></th>
      <th class="center ">Plan YTD<br/><span class="hadingcolor">2015<span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2014</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      
      </tr>
   </thead>
   <tbody id="overall_customermodel_graph"></tbody>
   </table>
 
 </div><br/><br/>
 <!-- div for customer model line chart -->
 <h3>Trend Graphs</h3><br/>
 
 <!-- ------------------------- ----------------------------------------------->
<div class="table-responsive" style="overflow-x: ;">
    <table class="table boldheading" style="border-collapse:collapse !important; width: 1250px;">            
        <tbody>
            <tr>
                <td colspan="6"><h4 style="background-color:#F2F2F2;padding: 5px;"><b>Cusotmer Model Analysis : Overall</b></h4></td>
            </tr>
            <tr>
                <td>
                    <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block;float: left;" id="UniqueActivePlayers_overall"></div>
                </td>
                <td>
                    <img src={{ asset('/img/multiply.png') }} style="width:20px;position: absolute;margin-left: -8px;"></img>
                </td>       

                <td>
                    <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block;float: left;" id="PlayerYield_overall"></div>
                </td>
                <td>
                    <img src={{ asset('/img/equal.png') }} style="width:20px;position: absolute;margin-left: -8px;"></img>
                </td>


                <td colspan="2"><div class="" style="min-width: 620px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display:inline-block;" id="NetGamingRevenue_overall"></div></td>

            </tr>

<!-- ---------------------------------------------------------------------- -->
            <tr>
                <td>
                    <div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/equal.png') }} style="height:20px;width:20px;"></img></div>
                </td>
                <td></td>
                <td>
                    <div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/equal.png') }} style="height:20px;width:20px;"></img></div>
                </td>
                <td></td>

                <td colspan="2" style="">
                    <div style="background-color:#DAEEF3;padding:2px;border: 2px solid #DAEEF3;text-align:center;"><h5><b>Revenue Breakdown By Channel</b></h5></div></td>
                 </tr>
            <tr>

                <td>
                <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block;float: left;" id="DatabasePlayers_overall"></div>

                </td>
                <td></td>
                <td>
                    <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block;float: left;" id="NetGrossWinMargin_overall"></div>

                </td>
                <td></td>

                <td>
                    <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display:inline-block;" id="RevenueShare_retail"><h6 style="background-color:aliceblue;">Revenue Breakdown By Channel</h6></div>
                </td>
                <td>
                    <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display:inline-block;" id="RevenueShare_online"></div>
                </td>
            </tr>
<!-- ------------------------------------------------------------------------- -->
            <tr>
            <tr>
                <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/plus.png') }} style="height:20px;width:20px;"></img></div></td>
                <td></td>
                <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td> 
                <td></td>
                <td colspan="2" style=""><div style="background-color:#DAEEF3;padding:2px;border: 2px solid #DAEEF3;text-align:center;"><h5><b>Revenue Breakdown Online - Mobile vs Web</b></h5></div></td></tr>
        <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display:inline-block;" id="FirstTimeDepositors_overall"></div></td>
        <td></td>
        <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display:inline-block;" id="StakeAmountPerActivePlayerDays_overall"></div></td>
        <td></td>

        <td><div class="" style="min-width:300px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display:inline-block;" id="WebRevenueShare_online"><h6 style="background-color:aliceblue;">Revenue Breakdown Online-Mobile vs Web</h6></div></td>
        <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display:inline-block;" id="MobileRevenueShare_online"></div></td>
        </tr>
<!-- ---------------------------------------------------------------------- -->
        <tr>
        <tr>
  <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td>
  <td></td>
 <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td> 
 <td></td>
 <td colspan="2" style=""><div style="background-color:#DAEEF3;padding:2px;border: 2px solid #DAEEF3;text-align:center;"><h5><b>Revenue Breakdown By Product Variants</b></h5></div></td>
        </tr>
        <td>
            <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display:inline-block;" id="PlayerChurnRate_overall"></div></td>
        <td></td>
        <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display:inline-block;" id="PlayerFrequency_overall"></div></td>
        <td></td>
        <td><div class="" style="min-width:300px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display:inline-block;" id="PrematchRevenueShare_prematch"><h6 style="background-color:aliceblue;">Revenue Breakdown By Product Variants</h6></div></td>
        <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display:inline-block;" id="LivebookRevenueShare_livebook"></div></td>
        </tr>
        </tbody>
    </table>
</div>
 
</div><!-- end for second tab -->
  <!-- -------------------------------------------------------------------------- -->  
 <div role="tab" class="tab-pane" id="onlinebus"><!-- div for third tab -->

 <!-- ----------div FOR executive summary graph------- -->

<div class="table-responsive" style="overflow-x: ;" id="executive_graph">
<!-- for table -->
<div class="table-responsive">

 <table class="table table-striped boldheading decreasepadding headingpaddingclaass" style="width:1300px;">
   <thead>
        <tr style="background-color:#DAEEF3" class="headingpadingdecrease">
             <th class="" colspan="1" style="font-size:14px;">Online Business Summary</th>
              <th colspan="8"></th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;"></th>
      </tr>  
    <tr style="background-color:#DAEEF3" class="headingpadingdecrease bordertoop">
                <th colspan="2"></th>
            <th class="center" colspan="7" style="font-size:11px;">For The Month Of  {{$prevmonth}}</th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;">YTD</th>
          </tr>
         
        <tr>
    <th colspan="9">
        <div class="row">
     <div class="col-lg-3">Graph Legends</div>
         <div class="col-lg-3">
         <div style="width:15px;height:15px;border:1px solid #000;background:green;float: left;"></div> 
        <div style="margin-left:20px"><small>Highest Datapoint</small>
        </div>  
         </div>
        <div class="col-lg-3">
        <div style="width:15px;height:15px;border:1px solid #000;background:red;float: left;"></div>
        <div style="margin-left:20px"><small>Lowest Datapoint</small></div>
        </div>
        <div class="col-lg-3">
        <div  style="width:15px;height:15px;border:1px solid #000;background:orange;float: left;"></div>
        <div style="margin-left:20px"><small>First and Last Datapoint</small></div>
        </div>
        </div>
        
        
    </th>

    <th colspan="1" class="center" style="background-color: white; border:none; min-width: 0px;">&nbsp;</th>
        <th colspan="7">
<div class="row">
    <div class="col-lg-4"><div class="executive_green_circle pull-left"></div><div>+vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_yellow_circle pull-left"></div><div> <-2.5% vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_red_circle pull-left"></div><div> >-2.5vsPlan</div></div>
</div>
    </th>

     
</tr>
    <tr class="headingpadingdecrease">
      <th class=""><b><div class="smallheadigsecondtab"></div></b><br/><span class="hadingcolor">Financials</span></th>  
      <th class="hadingcolor">Trends 12 Months</th>
      <th class="center ">Actual<br/><span class="hadingcolor">{{$prevm}}-15<span></th>
      <th class="center ">Plan<br/><span class="hadingcolor">{{$prevm}}-15</th>
      <th colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual Last Year<br/><span class="hadingcolor">{{$prevm}}-14</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center hadingcolor" style="background-color: transparent; border:none; min-width: 0px;">&nbsp;</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2015</span></th>
      <th class="center ">Plan YTD<br/><span class="hadingcolor">2015<span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2014</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      
      </tr>
   </thead>
   <tbody id="online_business_graph"></tbody>
 </table>
 
 </div>
</div><br/><br/>
 
<!-- ------div FOR  Customer  model- ----- -->

<!-- for table -->
<div class="table-responsive" style="overflow-x: ;">

 <table class="table table-striped boldheading decreasepadding headingpaddingclaass" style="width:1300px;">
   <thead>
        <tr style="background-color:#DAEEF3" class="headingpadingdecrease bordertoop">
             <th class="" colspan="1" style="font-size:14px;">Customer Model : Online</th>
              <th colspan="8"></th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;"></th>
      </tr>  
      
    <tr style="background-color:#DAEEF3" class="headingpadingdecrease bordertoop">
                <th colspan="2"></th>
            <th class="center" colspan="7" style="font-size:11px;">For The Month Of  {{$prevmonth}}</th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;">YTD</th>
          </tr>
         
  <tr>
    <th colspan="9">
        <div class="row">
     <div class="col-lg-3">Graph Legends</div>
         <div class="col-lg-3">
         <div style="width:15px;height:15px;border:1px solid #000;background:green;float: left;"></div> 
        <div style="margin-left:20px"><small>Highest Datapoint</small>
        </div>  
         </div>
        <div class="col-lg-3">
        <div style="width:15px;height:15px;border:1px solid #000;background:red;float: left;"></div>
        <div style="margin-left:20px"><small>Lowest Datapoint</small></div>
        </div>
        <div class="col-lg-3">
        <div  style="width:15px;height:15px;border:1px solid #000;background:orange;float: left;"></div>
        <div style="margin-left:20px"><small>First and Last Datapoint</small></div>
        </div>
        </div>
        
        
    </th>

    <th colspan="1" class="center" style="background-color: white; border:none; min-width: 0px;">&nbsp;</th>
        <th colspan="7">
<div class="row">
    <div class="col-lg-4"><div class="executive_green_circle pull-left"></div><div>+vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_yellow_circle pull-left"></div><div> <-2.5% vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_red_circle pull-left"></div><div> >-2.5vsPlan</div></div>
</div>
    </th>

     
</tr>
    <tr class="headingpadingdecrease">
      <th class=""><b><div class="smallheadigsecondtab"></div></b><br/><span class="hadingcolor">Financials</span></th>  
      <th class="hadingcolor">Trends 12 Months</th>
      <th class="center ">Actual<br/><span class="hadingcolor">{{$prevm}}-15<span></th>
      <th class="center ">Plan<br/><span class="hadingcolor">{{$prevm}}-15</th>
      <th colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual Last Year<br/><span class="hadingcolor">{{$prevm}}-14</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center hadingcolor" style="background-color: transparent; border:none; min-width: 0px;">&nbsp;</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2015</span></th>
      <th class="center ">Plan YTD<br/><span class="hadingcolor">2015<span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2014</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      
      </tr>
   </thead>
   <tbody id="online_customermodel_graph"></tbody>
   </table>
 
 </div><br/><br/>
 
 <!-- div for customer model line chart -->
 <h3>Trend Graphs</h3><br/>
 
 <!-- -------------------------------------------------------------------- -->
 <div class="table-responsive" style="overflow-x: ;">
   <table class="table boldheading" style="border-collapse:collapse !important; width: 1250px;">
    <tbody>
        <tr><td colspan="6"><h4 style="background-color:#F2F2F2;padding: 5px;"><b>Cusotmer Model Analysis : Online</b></h4></td></tr>
        <tr>
            <td><div class="" style="width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block;float: left;" id="UniqueActivePlayers_onlines"></div></td>
            <td><img src={{ asset('/img/multiply.png') }} style="width:20px;position: absolute;margin-left: -8px;"></img></td>
            <td><div class="" style="width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block;float: left;" id="PlayerYield_onlines"></div></td>
            <td><img src={{ asset('/img/equal.png') }} style="width:20px;position: absolute;margin-left: -8px;"></img></div></td>
            <td colspan="2"><div class="" style="width: 620px;height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block" id="NetGamingRevenue_onlines"></div></td>
        </tr>
 <!-- --------------------------------------------------------------------- -->
        <tr>
            <td colspan="2"><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/equal.png') }} style="height:20px;width:20px;"></img></div></td>
            <td colspan="2"><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/equal.png') }} style="height:20px;width:20px;"></img></div></td>
            <td colspan="2"></td></tr>
        <tr>
            <td><div class="" style="width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block" id="Database_onlines"></div></td>
            <td></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block" id="NetGrossWinMargin_onlines"></div></td>
            <td></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block" id="MobileStakeAmountShare_onlines"></div></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block" id="WebStakeAmountShare_onlines"></div></td>
        </tr>
<!-- --------------------------------------------------------------------- -->
        <tr>
            <td colspan="2"><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/plus.png') }} style="height:20px;width:20px;"></img></div></td>
            <td colspan="2"><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td>
            <td colspan="2"></td></tr>
        <tr>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block" id="FirstTimeDepositors_onlines"></div></td>
            <td></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #ECB7BA solid" id="StakeAmountPerActivePlayerDays_onlines"></div></td>
            <td></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block" id="MobileRevenueShare_onlines"></div></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block" id="WebRevenueShare_onlines"></div></td>
        </tr>
 <!-- -------------------------------------------------------------------- -->
        <tr>
            <td colspan="2"><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td>
            <td colspan="2"><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td>
            <td colspan="2"></td></tr>
        <tr>
            <td><div class="" style=" width: 300px;height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block" id="PlayerChurnRate_onlines"></div></td>
            <td></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block" id="PlayerFrequency_onlines"></div></td>
            <td></td>
            <td><div class=""  style="width: 300px;height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block" id="MobileNetGrossWinMargins_onlines"><h6 style="background-color:aliceblue;">Revenue Breakdown by Product Variants</h6></div></td>
            <td><div class="" style="width: 300px;height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block" id="WebNetGrossWinMargins_onlines"></div></td>
        </tr>
    </tbody>
</table>
 </div>

 
</div><!-- end for third tab --> 

<!-- -------------------------------------------------------------------------- --> 
<div role="tab" class="tab-pane" id="retailbus"><!-- div for fourth tab -->

 <!-- ----------div FOR executive summary graph------- -->

<div class="table-responsive" style="overflow-x: ;" id="executive_graph">

<!-- for table -->
<div class="table-responsive">

 <table class="table table-striped boldheading decreasepadding headingpaddingclaass" style="width:1300px;">
   <thead>
        <tr style="background-color:#DAEEF3" class="headingpadingdecrease">
             <th class="" colspan="1" style="font-size:14px;">Retail Business Summary</th>
              <th colspan="8"></th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;"></th>
      </tr> 
    <tr style="background-color:#DAEEF3" class="headingpadingdecrease bordertoop">
                <th colspan="2"></th>
            <th class="center" colspan="7" style="font-size:11px;">For The Month Of  {{$prevmonth}}</th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;">YTD</th>
          </tr>
         
        <tr>
    <th colspan="9">
        <div class="row">
     <div class="col-lg-3">Graph Legends</div>
         <div class="col-lg-3">
         <div style="width:15px;height:15px;border:1px solid #000;background:green;float: left;"></div> 
        <div style="margin-left:20px"><small>Highest Datapoint</small>
        </div>  
         </div>
        <div class="col-lg-3">
        <div style="width:15px;height:15px;border:1px solid #000;background:red;float: left;"></div>
        <div style="margin-left:20px"><small>Lowest Datapoint</small></div>
        </div>
        <div class="col-lg-3">
        <div  style="width:15px;height:15px;border:1px solid #000;background:orange;float: left;"></div>
        <div style="margin-left:20px"><small>First and Last Datapoint</small></div>
        </div>
        </div>
        
        
    </th>

    <th colspan="1" class="center" style="background-color: white; border:none; min-width: 0px;">&nbsp;</th>
        <th colspan="7">
<div class="row">
    <div class="col-lg-4"><div class="executive_green_circle pull-left"></div><div>+vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_yellow_circle pull-left"></div><div> <-2.5% vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_red_circle pull-left"></div><div> >-2.5vsPlan</div></div>
</div>
    </th>

     
</tr>
      <tr class="headingpadingdecrease">
      <th class=""><b><div class="smallheadigsecondtab"></div></b><br/><span class="hadingcolor">Financials</span></th>  
      <th class="hadingcolor">Trends 12 Months</th>
      <th class="center ">Actual<br/><span class="hadingcolor">{{$prevm}}-15<span></th>
      <th class="center ">Plan<br/><span class="hadingcolor">{{$prevm}}-15</th>
      <th colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual Last Year<br/><span class="hadingcolor">{{$prevm}}-14</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center hadingcolor" style="background-color: transparent; border:none; min-width: 0px;">&nbsp;</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2015</span></th>
      <th class="center ">Plan YTD<br/><span class="hadingcolor">2015<span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2014</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      
      </tr>
   </thead>
   <tbody id="retail_business_graph"></tbody>
 </table>
 
 </div>
</div><br/><br/>
 
<!-- ------div FOR  Customer  model- ----- -->

<!-- for table -->
<div class="table-responsive" style="overflow-x: ;">

 <table class="table table-striped boldheading decreasepadding headingpaddingclaass" style="width:1300px;">
   <thead>
        <tr style="background-color:#DAEEF3" class="headingpadingdecrease">
             <th class="" colspan="1" style="font-size:14px;">Customer Model : Retail</th>
              <th colspan="8"></th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;"></th>
      </tr>  
    <tr style="background-color:#DAEEF3" class="headingpadingdecrease bordertoop">
                <th colspan="2"></th>
            <th class="center" colspan="7" style="font-size:11px;">For The Month Of  {{$prevmonth}}</th>
             <th class="center" style="background-color: white; border:none; min-width: 5px;">&nbsp;</th>
             <th class="center" colspan="7" style="font-size:11px;">YTD</th>
          </tr>
         
       <tr>
    <th colspan="9">
        <div class="row">
     <div class="col-lg-3">Graph Legends</div>
         <div class="col-lg-3">
         <div style="width:15px;height:15px;border:1px solid #000;background:green;float: left;"></div> 
        <div style="margin-left:20px"><small>Highest Datapoint</small>
        </div>  
         </div>
        <div class="col-lg-3">
        <div style="width:15px;height:15px;border:1px solid #000;background:red;float: left;"></div>
        <div style="margin-left:20px"><small>Lowest Datapoint</small></div>
        </div>
        <div class="col-lg-3">
        <div  style="width:15px;height:15px;border:1px solid #000;background:orange;float: left;"></div>
        <div style="margin-left:20px"><small>First and Last Datapoint</small></div>
        </div>
        </div>
        
        
    </th>

    <th colspan="1" class="center" style="background-color: white; border:none; min-width: 0px;">&nbsp;</th>
        <th colspan="7">
<div class="row">
    <div class="col-lg-4"><div class="executive_green_circle pull-left"></div><div>+vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_yellow_circle pull-left"></div><div> <-2.5% vsPlan</div></div>
    <div class="col-lg-4"><div class="executive_red_circle pull-left"></div><div> >-2.5vsPlan</div></div>
</div>
    </th>

     
</tr>
     <tr class="headingpadingdecrease">
      <th class=""><b><div class="smallheadigsecondtab"></div></b><br/><span class="hadingcolor">Financials</span></th>  
      <th class="hadingcolor">Trends 12 Months</th>
      <th class="center ">Actual<br/><span class="hadingcolor">{{$prevm}}-15<span></th>
      <th class="center ">Plan<br/><span class="hadingcolor">{{$prevm}}-15</th>
      <th colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual Last Year<br/><span class="hadingcolor">{{$prevm}}-14</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center hadingcolor" style="background-color: transparent; border:none; min-width: 0px;">&nbsp;</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2015</span></th>
      <th class="center ">Plan YTD<br/><span class="hadingcolor">2015<span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2014</span></th>
      <th  colspan="2" class="center hadingcolor">Dev%</th>
      
      </tr>
   </thead>
   <tbody id="retail_customermodel_graph"></tbody>
   </table>
 
 </div>
 <br/><br/>
 <!--       --------------------------------------------------------------- -->
 <div class="table-responsive">
 <table class="table table-striped boldheading decreasepadding headingpaddingclaass" style="width:1300px;">
 <thead> <tr>
     <th class=""><h5><b>Anonymous Customers</b></h5></th>  
      <th class="hadingcolor">Trends 12 Months</th>
      <th class="center ">Actual<br/><span class="hadingcolor">{{$prevm}}-15<span></th>
      <th class="center ">Plan<br/><span class="hadingcolor">{{$prevm}}-15</th>
      <th class="center hadingcolor" colspan="2">Dev%</th>
      <th class="center ">Actual Last Year<br/><span class="hadingcolor">{{$prevm}}-14</span></th>
      <th class="center hadingcolor" colspan="2">Dev%</th>
      <th class="center hadingcolor" style="background-color: transparent; border:none; min-width: 0px;">&nbsp;</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2015</span></th>
      <th class="center ">Plan YTD<br/><span class="hadingcolor">2015<span></th>
      <th class="center hadingcolor" colspan="2">Dev%</th>
      <th class="center ">Actual YTD<br/><span class="hadingcolor">2014</span></th>
      <th colspan="2" class="center hadingcolor">Dev%</th>
      
      </tr>
     </thead>
     <tbody id="anonymousdata"></tbody>
             </table>
 </div>
 
               <br/><br/>

<!-- div for customer model line chart -->
<div class="table-responsive" style="overflow-x: ;">
    <h3>Trend Graphs</h3><br/>

    <table class="table boldheading" style="border-collapse:collapse !important; width: 1250px;">
        <tr><td colspan="6"><h4 style="background-color:#F2F2F2;padding: 5px;"><b>Cusotmer Model Analysis : Retail</b></h4></td></tr>
        <tr>
            <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block;float:left;" id="UniqueActivePlayers_retails"></div></td>
            <td> <img src={{ asset('/img/multiply.png') }} style="width:20px;position: absolute;margin-left: -8px;"></img></td>
            
            <td>
                <div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block;float:left;" id="PlayerYield_retails"></div></td>
            <td><img src={{ asset('/img/equal.png') }} style="width:20px;position: absolute;margin-left: -8px;"></img></td>
      
            <td colspan="2"><div class="" style="min-width: 620px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block;" id="NetGamingRevenue_retails"></div></td>
        </tr>
       
        <tr>
            <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/equal.png') }} style="height:20px;width:20px;"></img></div></td>
            <td></td>
            <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/equal.png') }} style="height:20px;width:20px;"></img></div></td>
            <td></td>
            <td colspan="2"></td></tr><tr>
            <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block;" id="Database_retails"></div></td>
            <td></td>
            <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block;" id="NetGrossWinMargin_retails"></div></td>
 <td></td>
            <td><div class="" style="min-width: 620px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block;" id="AnonymousPlayerStakeShare_retails"></div></td>

        </tr>
       
        <tr>
            <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/plus.png') }} style="height:20px;width:20px;"></img></div></td>
            <td></td>
            <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td>
            <td></td>
            <td colspan="2"></td></tr>
          <tr>
            <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block;" id="FirstTimeDepositors_retails"></div></td>
            <td></td>
            <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #ECB7BA solid;display: inline-block;" id="StakeAmountPerActivePlayerDays_retails"></div></td>
            <td></td>
            <td><div class="" style="min-width: 620px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block;" id="AnonymousPlayerRevenueShare_retails"></div></td>
          </tr>
     
        <tr>
            <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td>
            <td></td>
            <td><div style="display: inline-block;margin-left: 43%;"><img src={{ asset('/img/multiply.png') }} style="height:20px;width:20px;"></img></div></td>     
            <td></td>
            <td colspan="2"></td></tr><tr>
            <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px #BAD0E4 solid;display: inline-block;" id="PlayerChurnRate_retails"></div></td>
            <td></td>
            <td><div class="" style="min-width: 300px; height: 250px; margin: 0 auto;border:6px rgba(255, 192, 203, 0.78) solid;display: inline-block;" id="PlayerFrequency_retails"></div></td>
            <td></td>
            <td><div class=""  style="min-width: 620px; height: 250px; margin: 0 auto;border:6px #EBEFDE solid;display: inline-block;" id="AnonymousPlayerMargins_retails"><h6 style="background-color:aliceblue;">Revenue Breakdown By Product Variants</h6></div></td>

        </tr>
    </table>
</div>

</div><!-- end for fourth tab --> 

<!-- ----------------------------------------------------------------- -->
<div role="tab" class="tab-pane" id="revenuebus"><!-- div for fifth tab -->
</div>
<!-- ------------------------------------------------------------------------ -->
 </div>
 </div>
                        <!-- Footer -->
                                <footer class="main">


                                </footer>


                                </div>

                                <!-- Bottom Scripts -->
         <script src={{ asset('/js/gsap/main-gsap.js')}}></script>
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
        <script src={{ asset('/js/jquery-te-1.4.0.min.js') }}></script>
       <!--<script src={{ asset('/js/app/client.js') }}></script>-->
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <!--<script src="http://code.jquery.com/jquery-1.9.1.js"></script>-->
        <!--<script src="http://code.highcharts.com/highcharts.js"></script>-->
        <script src={{ asset('/js/app/admin.js') }}></script>
        <!--<script src={{ asset('/js/app/keyvalue.js') }}></script>-->
        <script>
        
        </script>
        </body>

        </html>