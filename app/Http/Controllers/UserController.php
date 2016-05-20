<?php

namespace App\Http\Controllers;

use Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Storage;
use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use File;

class UserController extends Controller {
/**
 * Function for strore data in db after registeris
 * @param Request $request
 * @return 
 */
    public function postRegister(Request $request) {
        $params = $request->all();

        $v = User::validateRegister($params);

        if ($v->fails()) {
            return redirect()->back()->withErrors($v->errors());
        } else {
            $user = User::create(array('name' => $params['name'], 'email' => $params['email'],
                        'password' => bcrypt($params['password']), 'role' => $params['role']));
           $update = DB::table('users')
                ->where('id', $user->id)
                ->update(array("status" => 'active'));
            $status = $user->save();

            $role = $user->role;

            if ($role == 'Client') {
                $directory = Storage::makeDirectory($params['name'] . $user->id);

                $url = $params['name'] . $user->id;

                User::find($user->id)->update(['client_folder_name' => $url]);
            }

            if ($status == true) {
                return redirect()->back()->with(Session::flash('success', "$role Created Successfully"));
            }
        }
    }

    //------------------------------------------------------------------------
    /*
     * Function for redirecting homepages after login
     */
    public function postLogin(Request $request) {
        $params = $request->all();

        $v = User::validateLogin($params);

        if ($v->fails()) {
            return redirect()->back()->withErrors($v->errors());
        } else {
            $remember = ($request->has('remember')) ? true : false;


            if (Auth::attempt(['email' => $params['email'], 'password' => $params['password']], $remember)) {
                // Authentication passed...
                $user = User::whereEmail($request->input('email'))->get()->first();
                $userId = $user->id;

                if ($user->role == 'Analyst') {
//         return Redirect::route('analysthome')->with('name', $userId);
                    Session::put('analyst_id', $userId);
                    return redirect('analysthome');
                } elseif ($user->role == 'Client') {
                    Session::put('client_id', $userId);
//                    return view('clienthome', compact('userId'));
//                                    ->with('name', $user->id);
                    return redirect('clienthome');
                } elseif ($user->role == 'Admin') {
                    return redirect('adminhome')
                                    ->with('Success', 'admin');
                }
            } else {
                return redirect()->back()->with(Session::flash('message', "The email and password you entered do not match."));
            }
        }
    }

//===============================================================================
    /**
     * Function for logout
     * @param Request $request
     * @return type
     */
    public function getLogout(Request $request) {

        Auth::logout();

        session_unset();

        return redirect('http://localhost/chisquare')->with('success', 'loggedout');
    }

//===============================================================================
    /*
     * Function for assing client to data analyst
     */
    public function postAssign(Request $request) {
        $params = $request->all();
        

        $id = DB::table('analyst_client')->insert([
            ['analyst_id' => $params['anlyst'], 'client_id' => $params['client']]
        ]);
        if ($id) {
            return redirect()->back()->with(Session::flash('success', "Client Assigned Successfully"));
        }
    }

    //===========================================================================
    /*
     * Function for edit user
     */
    public function editUser() {
        $update = DB::table('users')
                ->where('id', $_POST['id'])
                ->update(array("name" => $_POST['name'], "email" => $_POST['email']));

        if ($update) {
            $arrResponse['status'] = "200";
            $arrResponse['message'] = "success";
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }

        return $arrResponse;
    }

//------------------------------------------------------------------------------
    /* 
     * function for actiate user 
     */
    public function activateUser() {

        $update = DB::table('users')
                ->where('id', $_POST['id'])
                ->update(array("status" => 'active'));
        if ($update) {
            $arrResponse['status'] = "200";
            $arrResponse['message'] = "success";
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }
        return $arrResponse;
    }

//------------------------------------------------------------------------------
    /* 
     * function for inactivate user 
     */
    public function inactivateUser() {

        $update = DB::table('users')
                ->where('id', $_POST['id'])
                ->update(array("status" => 'inactive'));
        if ($update) {
            $arrResponse['status'] = "200";
            $arrResponse['message'] = "success";
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }
        return $arrResponse;
    }

//-----------------------------------------------------------------------------
    /*
     * function to check email if user forgets password
     */
    public function postCheck(){
 
      $check= DB::table('users')
                ->where('email', $_POST['email'])
               ->get();
  
      if($check){
       
            $arrResponse['redirect'] = 'resetpassword';
            $arrResponse['status']="200";
            $arrResponse['message']="success";
       }
      else{
         
          $arrResponse['status']="300";
            $arrResponse['message']="Email does not exists";       
      }
     
   
       return $arrResponse;
    }
    //=-------------------------------------------------------------------------
    /*
     * function to  reset password
     */
    public function postReset(){
       $check= DB::table('users')
                ->where('email', $_POST['email'])
               ->get();
       if($check){
           $update=DB::table('users')
                ->where('email', $_POST['email'])
               ->update(array("password" => bcrypt($_POST['password'])));
     if($update){
            $arrResponse['redirect'] = 'login';
            $arrResponse['status']="200";
            $arrResponse['message']="Your password is reset successfully";
       }
       }else{
           $arrResponse['status']="300";
            $arrResponse['message']="Email does not exists";  
       }
       
       return $arrResponse;
    }
    //--------------------------------------------------------------------------
    /*
     * function to  change password
     */
    public function postChange(){
           if(Auth::attempt(['email' => $_POST['email'], 'password' => $_POST['old_password']])) {
              $newpassword=$_POST['new_password'];
              $update=DB::table('users')
                ->where('email', $_POST['email'])
               ->update(array("password" => bcrypt($_POST['new_password'])));

            $arrResponse['redirect'] = 'login';
            $arrResponse['status']="200";
            $arrResponse['message']="Your password is changed successfully";
    
              }
           else{
             $arrResponse['status']="300";
            $arrResponse['message']="email or password does not match ";
           }
          
       return $arrResponse;
    }
    //---------------------------------------------------------------------------
    /*
     * Function for register user
     */
    function register_user(){

      $user=User::create(array('name' => $_POST['user_name'], 'email' => $_POST['user_email'],
                        'password' => bcrypt($_POST['user_password']), 'role' => $_POST['user_role']));
      $update = DB::table('users')
                ->where('id', $user->id)
                ->update(array("status" => 'active'));
            $status = $user->save();

            $role = $user->role;

            if ($role == 'Client') {
                $directory = Storage::makeDirectory($_POST['user_name'] . $user->id);

                $url = $_POST['user_name']. $user->id;

                User::find($user->id)->update(['client_folder_name' => $url]);
            }

            if ($status == true) {
               $arrResponse['status'] ="200";
               $arrResponse['message'] ="Registered sucessfully";
               $arrResponse['client_name']=$_POST['user_name'];
               $arrResponse['client_Role']=$_POST['user_role'];
               $arrResponse['iduser']=$user->id;
            }else{
                $arrResponse['status'] ="300";
                $arrResponse['message']="failed";
            }
            return $arrResponse;
    }
//-----------------------------------------------------------------------------
}
