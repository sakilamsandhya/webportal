<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Client;
use Storage;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class ClientController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request) {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param  int $id
     * @return Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id) {
        //
    }
 //-----------------------------------------------------------------------------
/**
 * getAllClients and reports per client
 */
    public function getAllClientsReports(){
        $all_reports=DB::table('client_reports')->get();
        $reports_Data=array();
        foreach($all_reports as $value){
            if($value->report_name == "Key Value Drivers"){
               array_push($reports_Data,$value);
            }
           
        }
        if($reports_Data){
            $arrResponse['status'] = "200";
            $arrResponse['data']=$reports_Data;
        }else{
            
            $arrResponse['status'] = "300";
            $arrResponse['message']="No reports";
        }
         return $arrResponse;
        
    }
//------------------------------------------------------------------------------
    /**
     * Get the client report names and folder names for particular client
     *
     * @param  int $id
     * @return Response
     */
    public function getData() {


        $reportname = DB::table('client_reports')
                
                ->where('client_id', $_POST['id'])
                ->where('report_name',"Home State Of Play")
                
//                ->select('report_name')
                ->get();
       
      /*to get recent report in loop taking last value*/
       if(count($reportname) >1){
          foreach($reportname as $value){

          $reportname=  $value->report_name.".csv_".$value->id;
          $month_year=$value->year."  ".$value->month;
        }
       }
       /*if there are only one report just taking one value*/
       else{
           foreach($reportname as $value){
          $reportname=  $value->report_name.".csv_".$value->id;
          $month_year=$value->year." ".$value->month;
        }
       }

           $foldername = DB::table('users')
                ->where('id', $_POST['id'])
                ->select('client_folder_name')
                ->get();
        foreach($foldername as $value){
          $foldername=  $value->client_folder_name;
        }
        
         
        $reportname = str_replace(" ", "", $reportname);
        
        if ($reportname && $foldername) {
            $path=storage_path()."/app/".$foldername."/";

	$file_handle = fopen(storage_path()."/app/".$foldername."/".$reportname, 'r');
	while (!feof($file_handle) ) {
		$line_of_text[] = fgetcsv($file_handle, 1024);
	}
	fclose($file_handle);

            $arrResponse['status'] = "200";
            $arrResponse['report'] = $reportname;
            $arrResponse['folder'] = $foldername;
            $arrResponse['path']=$path;
            $arrResponse['line_of_text']=$line_of_text;
            $arrResponse['month_year']=$month_year;
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }

        return $arrResponse;
        
    }

//-------------------------------------------------------------------------------
    /**
     * Get the clients for edit
     *
     * @param  int $id
     * @return Response
     */
    public function getClients() {
        
        $clients = DB::table('users')
                ->where('id', $_POST['id'])
                ->get();
        
        if ($clients) {
           
            $arrResponse['status'] = "200";
            $arrResponse['clients'] = $clients;
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }
        return $arrResponse;
    }

    //---------------------------------------------------------------------------
    /**
     * Function for get all clients with id 
     * @return string
     */
    public function getAllclients() {

        /* get clients for particular da id from analyst_client table */
        $assigned = DB::table('analyst_client')
                ->where('analyst_id', $_POST['id'])
                ->get();
        $assignedClients = array();
        
        $onlyids=array();
        foreach ($assigned as $value) {

            $clients = DB::table('users')->where('id', $value->client_id)->get();
            $ids=DB::table('users')->select('id')->where('id', $value->client_id)->get();
            array_push($assignedClients, $clients);
            array_push($onlyids,$ids);
        }
        $unasinedids=array();
        foreach($onlyids as $value){
            foreach($value as $key=>$value1){
                 array_push($unasinedids,$value1->id);
            }
           
        }

        /* getting all clients */
        $clients = DB::table('users')
                ->where('role', 'client')
                ->get();
        $allclients=$clients;
       
        foreach ($clients as $key=>$value) {
            if (in_array($value->id, $unasinedids)) {
               unset($clients[$key]);
            }else{
           
            }
        }
        $unassingedClients=array();
       foreach($clients as $value){

            array_push($unassingedClients,$value);
        }
        $assinged_Clients=array();
        foreach($assignedClients as $value){
            foreach($value as $key=>$value1){
                array_push($assinged_Clients,$value1); 
            }
           
        }

        if ($clients) {
            $arrResponse['status'] = "200";
            $arrResponse['unassigned'] = $unassingedClients;
            $arrResponse['assigned'] = $assinged_Clients;
            $arrResponse['all']=$allclients;
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }
        
        return $arrResponse;
    }

    //--------------------------------------------------------------------------
    /*function to get all clients*/
    public function getClientsAll(){
              
        $client_analysts=DB::table('analyst_client')->get();
        
           $client_analyst_array=array();
            foreach($client_analysts as $key=>$value){
            $analyst_names=DB::table('users')->where('id',$value->analyst_id)->select('name','id')->get();
            $client_names=DB::table('users')->where('id',$value->client_id)->select('name','id')->get();
            foreach($client_names as $key =>$value1){
                 $client_name=$value1->name;
               
            }
            foreach($analyst_names as $key =>$value1){
                $analyst_name=$value1->name;
            }
            
          
              array_push($client_analyst_array ,array('client_id'=>$value->client_id,'analyst_id'=>$value->analyst_id,'client_name'=>$client_name,'analyst_name'=>$analyst_name)
            );
            }

       if($client_analysts){
            $arrResponse['status'] = "200";
             $arrResponse['clients_analysts'] = $client_analyst_array;
                    }else{
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
       }
  
        return $arrResponse;
    }
 //-----------------------------------------------------------------------------
    /*GET ALL REPORTS*/
    public function getAllReports(){
         $reports=DB::table('client_reports')->get();
       
         if($reports){
             $arrResponse['status'] ="200";
             $arrResponse['data']=$reports;
         }else{
             
         }
         return $arrResponse;
    }
    //----------------------------------------------------------------------------
    /*
     * function for get key value driver report values
     */
    public function getKvd(){
        $reportname=DB::table('client_reports')
                ->where('client_id', $_POST['id'])
                ->where('report_name',"Key Value Drivers")
//                ->select('report_name')
                ->get();
        
        $foldername = DB::table('users')
                ->where('id', $_POST['id'])
                ->select('client_folder_name')
                ->get();
        foreach($foldername as $value){
          $foldername=  $value->client_folder_name;
        }
         foreach($reportname as $value){
          $reportname=  $value->report_name.".csv_".$value->id;
        }
        $reportname = str_replace(" ", "", $reportname);

        if ($reportname && $foldername) {
            $path=storage_path()."/app/".$foldername."/";

	$file_handle = fopen(storage_path()."/app/".$foldername."/".$reportname,'r');
	while (!feof($file_handle) ) {
		$line_of_text[] = fgetcsv($file_handle, 1024);
	}
	fclose($file_handle);

            $arrResponse['status'] = "200";
            $arrResponse['report'] = $reportname;
            $arrResponse['folder'] = $foldername;
            $arrResponse['path']=$path;
            $arrResponse['line_of_text']=$line_of_text;
        } else {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }

        return $arrResponse;
    }//------------------------------------------------------------------------
    /*
     * change report with month and year on clienthome page
     */
    public function changeReport(){
        
       $report=DB::table('client_reports')
                ->where('client_id', $_POST['id'])
                ->where('report_name',$_POST['report'])
                ->where('year',$_POST['year'])
                ->where('month',$_POST['month'])
            
                ->get();
      if($report){
          $report_name;$report_id;
          foreach($report as $value){
            $report_name=$value->report_name;
            $report_id=$value->id;   
            $month_year=$value->year."  ".$value->month;
          }
        $reportname=  $report_name.".csv_".$report_id;
        $foldername = DB::table('users')
                ->where('id', $_POST['id'])
                ->select('client_folder_name')
                ->get();  
         foreach($foldername as $value){
          $foldername=  $value->client_folder_name;
        }
       $report_name = str_replace(" ", "", $reportname);
       $path=storage_path()."/app/".$foldername."/";

	$file_handle = fopen(storage_path()."/app/".$foldername."/".$report_name, 'r');
	while (!feof($file_handle) ) {
		$line_of_text[] = fgetcsv($file_handle, 1024);
	}
	fclose($file_handle);
            $arrResponse['status'] = "200";
            $arrResponse['report'] = $report_name;
            $arrResponse['folder'] = $foldername;
            $arrResponse['path']=$path;
            $arrResponse['line_of_text']=$line_of_text;
            $arrResponse['month_year']=$month_year;
            $arrResponse['report_id']=$report_id;
        } else {
            $arrResponse['status'] = "103";
            $arrResponse['message'] = "Report Not available";
        }
         return $arrResponse;
     
    }
    //---------------------------------------------------------------------------
    /*
     * funciton to get report details for edit report
     * to show in table
     */
    public function getReportDetails(){
        $client_id=$_POST['current_client_id'];
        $report_name=$_POST['current_report_name'];
       $client_name=DB::table('users')->where('id',$client_id)->select('name')->get();
       $client_name=$client_name[0]->name;
       
      $reprotDetails= DB::table('client_reports')
                ->where('client_id', $client_id)
                ->where('report_name',$report_name)            
                ->get();
      
  if($reprotDetails){
      $arrResponse['status']="200";
      $arrResponse['reportdetails']=$reprotDetails;
      $arrResponse['client_name']=$client_name;
      
  }else{
      
  }
  
      return $arrResponse;
    }
//------------------------------------------------------------------------------
    /*
     * get data of executive summary report for particular client id
     */
    public function getExecutiveSummaryReport(){
        if($_POST['report_id'] !=''){
            
         $reportname = DB::table('client_reports')
                
                ->where('client_id', $_POST['id'])
                 ->where('id',$_POST['report_id'])
                ->where('report_name',"Executive Summary")
                
                ->get();
         
        }else{
              $reportname = DB::table('client_reports')
                
                ->where('client_id', $_POST['id'])
                ->where('report_name',"Executive Summary")
                
                ->get();
        }
         
        $foldername = DB::table('users')
                ->where('id', $_POST['id'])
                ->select('client_folder_name')
                ->get();
        
//        /*to get recent report in loop taking last value*/
       if(count($reportname) >1){
          foreach($reportname as $value){
          $report_name=  $value->report_name;
         $report_id=$value->id;
            
        }
        
       }
       /*if there are only one report just taking one value*/
       else{
           foreach($reportname as $value){
          $report_name=  $value->report_name;
          
          $report_id=$value->id;
              
        }
       }
        foreach($foldername as $value){
          $folder_name=  $value->client_folder_name;
        }

        
        $reporName=  $report_name.".csv_".$report_id;
         $reporName = str_replace(" ", "", $reporName);
        $path=storage_path()."/app/".$folder_name."/";

	$file_handle = fopen(storage_path()."/app/".$folder_name."/".$reporName, 'r');
	while (!feof($file_handle) ) {
		$line_of_text[] = fgetcsv($file_handle, 1024);
	}
        fclose($file_handle);
        $text_Report=DB::table('executive_text')->where('client_id',$_POST['id'])->get();
        if($line_of_text){
           $arrResponse['status'] = "200";          
            $arrResponse['line_of_text']=$line_of_text; 
            $arrResponse['text_Report']=$text_Report;
        }else
        {
            $arrResponse['status'] = "104";
            $arrResponse['message'] = "DB ERROR";
        }

        return $arrResponse;
    }
//------------------------------------------------------------------------------
    /*
     * update text in text area for particular client id
     */
    public function updateText(){
        $text=DB::table('executive_text')
                
                ->where('client_id', $_POST['id'])
              
                
                ->get();
        if($text){
            
             $update = DB::table('executive_text')
                ->where('client_id', $_POST['id'])
                ->update(array("text1" => $_POST['text1']));
             
        }else{
          
            $insert = DB::table('executive_text')
               
            ->insert(array("text1" => $_POST['text1'] ,"client_id" =>$_POST['id'] ));
        }
    }
 //------------------------------------------------------------------------------
  /**
   * to get all clients for client edit table
   */

    public function getAllOnlyClients(){
        $clients = DB::table('users')
		->where('role', 'Client')
		->get();
         if($clients){
            $arrResponse['status'] = "200";          
           $arrResponse['data']=$clients;
         }else{
             $arrResponse['status'] = "300";          
              
         }    
         
         return $arrResponse;
    }
 //------------------------------------------------------------------------------
     /*
      * Function to get all analyst for analyst edit table
      * 
      */
   
    public function getAllOnlyAnalysts(){
        $analysts = DB::table('users')
		->where('role', 'Analyst')
		->get();
         if($analysts){
            $arrResponse['status'] = "200";          
           $arrResponse['data']=$analysts;
         }else{
             $arrResponse['status'] = "300";          
              
         }    
         
         return $arrResponse;
    }
    
}
