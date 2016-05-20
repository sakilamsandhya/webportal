<?php

namespace App\Http\Controllers;

use Session;
use App\User;
use App\ClientReport;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\DataAnalyst;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class DataAnalystController extends Controller {
  /**
   * Function for stroing report after uploadeing
   * @param Request $request
   * @return type
   */
    public function postReport(Request $request) { 
         
        
        $params = $request->all();

              $v = DataAnalyst::validateFileUpload($params);
              
        if ($v->fails()) {
          
            return redirect()->back()->withErrors($v->errors());
        } else {
           
               $ext = $request->file('file')
                    ->getClientOriginalExtension();
            $folder_name = User::find($params['id'])->client_folder_name;
            $ext = $request->file('file')
                    ->getClientOriginalExtension();
            if ($ext != "csv") {
                return redirect()->back()->with(Session::flash('failed', "only csv files are allowed"));
            }
            $reportName = $params['report'];
            $user = User::find($params['id']);

            $userprevreports= DB::table('client_reports')
                ->where('client_id','=', $params['id'])->where('report_name','=',$reportName)
                    ->where('month','=',$params['report_month'])->where('year','=',$params['report_year'])
                ->get();
           
           if($userprevreports){
               
               $update=DB::table('client_reports')
                ->where('client_id','=', $params['id'])->where('report_name','=',$reportName)
                    ->where('month','=',$params['report_month'])->where('year','=',$params['report_year'])
                   ->update(array("month" => $params['report_month'], "year" => $params['report_year']));
          
               $report_id=$userprevreports[0]->id;
               
               $reportName = str_replace(" ", "", $reportName);
            $fileName = $reportName . '.' . $request->file('file')
                            ->getClientOriginalExtension();
           $reportName=$fileName."_".$report_id;
          
           unlink(base_path() . "/storage/app/$folder_name/$reportName");
              $status = $request->file('file')->move(
                    base_path() . "/storage/app/$folder_name/", $reportName
            );

    
                return redirect()->back()->with(Session::flash('success', "You already uploaded report in september. Replaced with current report"));
           
           }
       else{
           
//          $report = ClientReport::Create(['client_id' => $params['id'], 'report_name' => $reportName,'month' =>"september",'year'=>"2015"]);
            $report=DB::table('client_reports')->insertGetId(array(
                'client_id' => $params['id'],
                'report_name' => $reportName,
                'month'=>$params['report_month'],
                'year'=>$params['report_year']
            ));

         
            $reportName = str_replace(" ", "", $reportName);
            $fileName = $reportName . '.' . $request->file('file')
                            ->getClientOriginalExtension();
            $fileName=$fileName."_".$report;
             
            $status = $request->file('file')->move(
                    base_path() . "/storage/app/$folder_name/", $fileName
            );

            if ($report) {
                return redirect()->back()->with(Session::flash('success', "File Uploaded Successfully"));
            }
        }
        }
    }

//------------------------------------------------------------------------------
    /**
     * FUnction for get analyst by its id
     * @return string
     */
    public function getAnalysts() {

        $analysts = DB::table('users')
                ->where('id', $_POST['id'])
                ->get();
        if ($analysts) {
            $arrResponse['status'] = "200";
            $arrResponse['clients'] = $analysts;
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }
        return $arrResponse;
    }

    //--------------------------------------------------------------------------
    /* 
     * Function for edit report 
     */
    public function postEdit(Request $request) {
          $params = $request->all();
       
      if($params['report'] == ""){
         return redirect()->back()->with(Session::flash('failedreport', "report field is required")); 
      }
      
           $ext = $request->file('file')
                    ->getClientOriginalExtension();
        
          if($ext != "csv"){
             
             return redirect()->back()->with(Session::flash('failed', "only csv files are allowed"));
          }
      
        $folder_name = User::find($params['name'])->client_folder_name;
        $prevfilename = DB::table('client_reports')->where('id', $params['report_id'])->get();
        $prev_file = str_replace(" ", "", $prevfilename[0]->report_name);
        $delete = DB::table('client_reports')->where('id', '=', $params['report_id'])->delete();
        $reportName = $params['report'];
        if ($delete) {
            unlink(base_path() . "/storage/app/$folder_name/$prev_file" . ".csv");
        }

        if ($delete) {
            
             $user = User::find($params['name']);
             $report = ClientReport::firstOrCreate(['id'=>$params['report_id'],'client_id' => $params['name'], 'report_name' => $reportName,]);
            $report->client()->associate($user);
            $reportStatus = $report->save();
        }
        $reportname = str_replace(" ", "", $reportName);
        $fileName = $reportname . '.' . $request->file('file')
                        ->getClientOriginalExtension();

        $status = $request->file('file')->move(
                base_path() . "/storage/app/$folder_name/", $fileName
        );

        if ($reportStatus) {
            return redirect()->back()->with(Session::flash('success', "File Updated Successfully"));
        }
        
    }

 //-------------------------------------------------------------------------
    /*
     *  Function for update assigning clients to analyst
     *  */
    public function updateAssigning() {
        $data = $_POST["result"];
        $analyst_id = $_POST["result1"];

        $delete = DB::table('analyst_client')->where('analyst_id', '=', $analyst_id)->delete();
        $data = json_decode("$data", true);

        foreach ($data as $value) {

            $insert = DB::table('analyst_client')->insert(array(
                'analyst_id' => $analyst_id,
                'client_id' => $value['id'],
            ));
        }
        if($data){
            $client_analysts=DB::table('analyst_client')->get();
           $client_analyst_array=array();
            foreach($client_analysts as $key=>$value){
            $analyst_names=DB::table('users')->where('id',$value->analyst_id)->select('name','id')->get();
            $client_names=DB::table('users')->where('id',$value->client_id)->select('name','id')->get();
            foreach($client_names as $key=>$value1){
                $client_name=$value1->name;
            }
            foreach($analyst_names as $key=>$value1){
                $analyst_name=$value1->name;
            }
            
              array_push($client_analyst_array ,array('client_id'=>$value->client_id,'analyst_id'=>$value->analyst_id,'client_name'=>$client_name,'analyst_name'=>$analyst_name)
            );
            }

        }
        if($data){
             $arrResponse['status'] = "200";
             $arrResponse['message']="Successfully Assigned";
             $arrResponse['client_analysts']=$client_analyst_array;
        }else{
            $arrResponse['status'] = "400";
            $arrResponse['message'] = "Something Wrong in db";
        }
        return $arrResponse;
    }

    //--------------------------------------------------------------------------
    /**
     * Function for upload report by data analyst
     * @return string
     */
    public function uploadReport(){
        
    $user = User::find($_POST['id']);
    /*current client folder name*/
    $current_Folder_name= $user->client_folder_name; 
    /*check whether current client uploaded same file in same month and year*/
     $userprevreports= DB::table('client_reports')
                ->where('client_id','=', $_POST['id'])->where('report_name','=',$_POST['report'])
                 ->where('month','=',$_POST['report_month'])->where('year','=',$_POST['report_year'])
                ->get();
     
     /*if already exists same report in same month and year delting and inserign new row*/
     if($userprevreports){
        
       $report_id=$userprevreports[0]->id;
      
       $delete=DB::table('client_reports')->where('client_id','=',$_POST['id'])->where('report_name','=',$_POST['report'])
                 ->where('month','=',$_POST['report_month'])->where('year','=',$_POST['report_year'])->delete();
      
       if($delete){
           $path = $_FILES['file']['name'];
           $ext = pathinfo($path, PATHINFO_EXTENSION);

          $reportName = str_replace(" ", "", $_POST['report']);
          $reportName = $reportName . '.' . $ext;
          $reportName=$reportName."_".$report_id;
          if(unlink(base_path() . "/storage/app/$current_Folder_name/$reportName")){
            $insert=DB::table('client_reports')->insert(array(
                'id'=>$report_id,
                'client_id' => $_POST['id'],
                
                'report_name' => $_POST['report'],
                'month'=>$_POST['report_month'],
                'year'=>$_POST['report_year']
            ));
            if($insert){
                $move=move_uploaded_file($_FILES['file']['tmp_name'], base_path() . "/storage/app/$current_Folder_name/" . $reportName);
                if($move){
                    $arrResponse['status'] ="200";
                    $arrResponse['message']="succesfully Replaced";
                    
                }
            }
          }
       }
         
     }else{
//         insertGetId
         $path = $_FILES['file']['name'];
           $ext = pathinfo($path, PATHINFO_EXTENSION);

          $reportName = str_replace(" ", "", $_POST['report']);
          $reportName = $reportName . '.' . $ext;
          $reportexists=DB::table('client_reports')->where('client_id','=',$_POST['id'])->where('report_name','=',$_POST['report'])->get();
                  if($reportexists){
                     
                   
                  }else{
                     
                    $arrResponse['reportname']=$_POST['report'];
                    $arrResponse['client_id']=$_POST['id'];
                    $arrResponse['client_name']=$user->name;
                  }
          $insert=DB::table('client_reports')->insertGetId(array(
              
               'client_id' => $_POST['id'],
             
                'report_name' => $_POST['report'],
                'month'=>$_POST['report_month'],
                'year'=>$_POST['report_year']
            ));
          $reportName=$reportName."_".$insert;
            if($insert){
                $move=move_uploaded_file($_FILES['file']['tmp_name'], base_path() . "/storage/app/$current_Folder_name/" . $reportName);
                if($move){
                    $arrResponse['status'] ="200";
                    $arrResponse['message']="succesfully Uplaoded";
                  
                  
                }
            }
     }
    
     return $arrResponse;

    }
 //--------------------------------------------------------------------------
    /**
     * Function for edit report
     * @return string
     */
    public function editReport(){
        
    $user = User::find($_POST['client_id']);
      $report_name=$_POST['report_name'];
    $userprevreports= DB::table('client_reports')
                ->where('client_id','=', $_POST['client_id'])->where('report_name','=',$report_name)
                 ->where('month','=',$_POST['edit_month'])->where('year','=',$_POST['edit_year'])
                ->get();
    $report_id=$userprevreports[0]->id;
       /*current client folder name*/
    $current_Folder_name= $user->client_folder_name; 
  
    $delete=DB::table('client_reports')->where('client_id','=',$_POST['client_id'])->where('report_name','=',$report_name)
                 ->where('month','=',$_POST['edit_month'])->where('year','=',$_POST['edit_year'])->delete();
    
    if($delete){
        
        /*after deleting make entry for new replaced report*/
         $insert=DB::table('client_reports')->insertGetId(array(
                'id'=>$report_id,
                'client_id' =>$_POST['client_id'],
                'report_name' => $report_name,
                'month'=>$_POST['edit_month'],
                'year'=>$_POST['edit_year']
            ));
         if($insert){
           $path = $_FILES['file1']['name'];
           $ext = pathinfo($path, PATHINFO_EXTENSION);

          $reportName = str_replace(" ", "", $report_name);
          $reportName = $reportName . '.' . $ext;
          $reportName=$reportName."_".$insert;
         
          if(unlink(base_path() . "/storage/app/$current_Folder_name/$reportName")){
           
           
                $move=move_uploaded_file($_FILES['file']['tmp_name'], base_path() . "/storage/app/$current_Folder_name/" . $reportName);
                if($move){
                    $arrResponse['status'] ="200";
                    $arrResponse['message']="succesfully Replaced";
                }
            
          }
         }
           $arrResponse['status'] = "200";
           $arrResponse['message']="Successfully updated";
       }
       else{
           $arrResponse['status'] = "400";
       }
       return $arrResponse;
    }
//------------------------------------------------------------------------------
}

