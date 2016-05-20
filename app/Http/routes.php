<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register all of the routes for an application.
  | It's a breeze. Simply tell Laravel the URIs it should respond to
  | and give it the controller to call when that URI is requested.
  |
 */


/*Routes for all view pages*/

Route::get('login', function () {
    return view('userlogin');
});


Route::any('signup', function () {
     if (Auth::check()) {
        
         return view('userregister');
    } else {
        
        return view('userlogin');
    }
  
});
Route::any('editclient', function () {
     if (Auth::check()) {
        
         return view('editclient');
    } else {
        
        return view('userlogin');
    }
  
});
Route::any('editreport', function () {
     if (Auth::check()) {
        
         return view('editreport');
    } else {
        
        return view('userlogin');
    }
  
});

Route::any('editanalyst', function () {
     if (Auth::check()) {
        
         return view('editanalyst');
    } else {
        
        return view('userlogin');
    }
  
});

Route::get('clienthome', function () {
    if (Auth::check()) {
        
        return view('clienthome');
    } else {
        
        return view('userlogin');
    }
});
 
Route::get('adminhome', function () {
    if (Auth::check()) {
        
        return view('adminhome');
    } else {
        
        return view('userlogin');
    }
   
});

Route::get('analysthome', function () {
     if (Auth::check()) {
        
     return view('analysthome');
    } else {
        
        return view('userlogin');
    }
   
    
});

Route::any('upload', function () {
    if (Auth::check()) {
        
    return view('uploadreport');
    } else {
        
        return view('userlogin');
    }
    
});
Route::any('uploadbyanalyst',function(){
    if (Auth::check()) {
        
   return view('uploadbyanalyst');
    } else {
        
        return view('userlogin');
    }
    
});
Route::any('assignclient',function(){
    if (Auth::check()) {
        
    return view('assignclient');
    } else {
        
        return view('userlogin');
    }
  
});
Route::any('reportview',function(){
    if (Auth::check()) {
       
    return view('reportview');
    } else {
        
        return view('userlogin');
    }
  
});
Route::any('analystreportview',function(){
    if (Auth::check()) {
        
    return view('analystreportview');
    } else {
        
        return view('userlogin');
    }
  
});
Route::any('keyvalue',function(){
    if (Auth::check()) {
        
    return view('keyvalue');
    } else {
        
        return view('userlogin');
    }
  
});
Route::any('keyvalueadminview',function(){
    if (Auth::check()) {
        
    return view('keyvalueadminview');
    } else {
        
        return view('login');
    }
  
});
Route::any('keyvalueanalystview',function(){
    if (Auth::check()) {
        
    return view('keyvalueanalystview');
    } else {
        
        return view('login');
    }
  
});

Route::any('forgotpassword',function(){  
    return view('forgotpassword');
 
});
Route::any('resetpassword',function(){  
    return view('resetpassword');
 
});
Route::any('changepassword',function(){  
    return view('changepassword');
 
});


//------------------------------------------------------------------------------------------

/*Routes for controller*/
Route::controller('user', 'UserController');

Route::controller('dataanalyst', 'DataAnalystController');
Route::controller('client', 'ClientController');


//------------------------------------------------------------------------------------------
/*Routes for controller methods*/
/*for registraton*/
Route::post('register_user', 'UserController@register_user');
 /*Get all clients and respective reports kvd*/
Route::post('getAllClientsReports', 'ClientController@getAllClientsReports');
/*all reports */
Route::post('getAllReports','ClientController@getAllReports');
/*get clients for show report on client page*/
Route::post('getclient', 'ClientController@getData');
/*get clients to edit by admin*/
Route::post('getclientstoedit','ClientController@getClients');
/*get analysts to edit by admin*/ 
Route::post('getanalyststoedit','DataAnalystController@getAnalysts');
/*updateclient edited by admin*/
Route::post('editUser','UserController@editUser');
/*getAllclietns for particualr analyst*/
Route::post('getAllclientswithanalystid','ClientController@getAllclients');
/*get all clients vs analysts for assignment of clint to analyst*/
Route::post('getClientsAnalysts','ClientController@getClientsAll');
/*update assign clients to da*/
Route::post('addupdateassigning','DataAnalystController@updateAssigning');
/*activate user*/
Route::post('active','UserController@activateUser');
/*in activate user*/
Route::post('inactive','UserController@inactivateUser');
/*to check email exist or not in forgot password*/
Route::post('postCheck','UserController@postCheck');
/*to reset password*/
Route::post('postReset','UserController@postReset');
/*to change password*/
Route::post('postChange','UserController@postChange');
/*getKvd(key value drivers report)*/
Route::post('getKvd','ClientController@getKvd');
/*change state of play report with year and month*/
Route::post('changeReport','ClientController@changeReport');
/*upload*/

Route::post('upload','DataAnalystController@uploadReport');
/*editreport*/
Route::post('getReportDetails','ClientController@getReportDetails');
/*get report details for edit report*/
Route::post('editreport','DataAnalystController@editReport');
/*GET executive sumary report data*/
Route::post('getExecutiveSummaryReport','ClientController@getExecutiveSummaryReport');
/*for update text in executive report for particular client*/
Route::post('updateText','ClientController@updateText');
/*get all clients only*/
Route::post('getAllOnlyClients','ClientController@getAllOnlyClients');
/*get all analyst only*/
Route::post('getAllOnlyAnalysts','ClientController@getAllOnlyAnalysts');



//------------------------------------------------------------------------------------------
