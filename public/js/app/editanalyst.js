/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function () {
    /*on click of edit analyst get all analysts and update for analyst table*/
       $('#edit_analyst_user').click(function(){
        $('.analyst_Editing').css({display: 'block'}); 
       $('.uploadReport').css({display: 'none'});
       $('.signup').css({display: 'none'});
       $('.client_analyst_assign').css({display: 'none'}); 
       $('.client_Editing').css({display: 'none'}); 
      
       $('.editreport').css({display: 'none'});
       $('.countrynamesdiv').css({display: 'none'})
        $('.executivesummary_report').css({display: 'none'})
        $('.homestateofplay').css({display: 'none'})
        $('.keyvaluereport').css({display: 'none'})
        /*get all analyst to show all analyst in table*/
        $.post(
             'getAllOnlyAnalysts',
                {
                    
                },
                 function(response) {
                     if(response.status == "200"){
                        if(response.data != ''){
                            $('.tbodyforeditanalyst').empty();
                         $('.divforeditanalyst').css({display: 'block'});
                         response.data.forEach(function(d,i){
                           
                             if(d.status == "active"){
                               $('.tbodyforeditanalyst').append('<tr id='+"tr"+d.id+'><td>'+d.name+'</td><td>'+d.email+'</td><td><button type="button" class="active btn btn-info btn-xs editanalyst" id='+d.id+'>Edit</button></td><td><button type="button" class="btn btn-danger btn-xs deleteanalyst" id=disable_'+d.id+'>Disable</button><button style="display:none" type="button" class="btn btn-info btn-xs enable_analyst" id=enable_'+d.id+'>Enable</button></td>"</tr>');  
                             }else{
                                 $('.tbodyforeditanalyst').append('<tr id='+"tr"+d.id+'><td>'+d.name+'</td><td>'+d.email+'</td><td><button type="button" class="inactive btn btn-info btn-xs editanalyst" id='+d.id+'>Edit</button></td><td><button type="button" style="display:none" class="btn btn-danger btn-xs deleteanalyst" id=disable_'+d.id+'>Disable</button><button type="button" class="btn btn-info btn-xs enable_analyst" id=enable_'+d.id+'>Enable</button></td></tr>');
                             }
  
                         })

                     } 
                     }
                     
                },'json');
       
    });


  /*------------------------------------------------------------*/  

/*on click of edit button for client  data*/
$('body').on('click','.editanalyst',function(){
    console.log("ehee",$('.editanalyst').attr('class').split(" ")[0])
   if($('.editanalyst').attr('class').split(" ")[0] == "inactive"){
       alert("cannot edit inactive analyst")
   }else{
$.post(
             'getanalyststoedit',
                {
                    'id':$(this).attr('id')
                },
                 function(response) {
   response.clients.forEach(function(d,i){
   	
  $('.modal #analyst_name').val(d.name);
  $('.modal #analyst_mailid').val(d.email);
  $('#analyst_name').attr('class',d.id);

$('#myModal2').modal('show');

   })
                      
                },'json');
            }

});
//------------------------------------------------------------------------------

/*on click of edit button after edit*/
$('.useredit_analyst').on('click',function(){
    
// console.log($(this).attr('id'));
var id=$('#analyst_name').attr('class');
var name=$('.modal #analyst_name').val();
var email=$('#analyst_mailid').val();
	$.post(
             'editUser',
                {
                    'name':  $('.modal #analyst_name').val(),
                    'email':$('#analyst_mailid').val(),
                    'id':$('.editanalyst').attr('id')
                },
                 function(response) {
                     	$('#tr'+id).empty();
                 	if(response.status == "200"){
                            console.log(id)
                            console.log($('.modal #analyst_name').val())
                 	
                                
                 		$('#tr'+id).append('<td>'+$('.modal #analyst_name').val()+'</td><td>'+$('#analyst_mailid').val()+'</td><td><button type="button" class="btn btn-info btn-xs editanalyst" id='+id+'>Edit</button></td><td><button type="button" class="btn btn-danger btn-xs deleteanalyst" id="disable_"'+id+'>Disable</button></td>');
                 	
                 	}
                
                },'json');

})
//------------------------------------------------------------------------------
/*on click of delte button in edit clint */
$('body').on('click','.deleteanalyst',function(){
    
     var current_id = $(this).attr('id');
      console.log(current_id.split('_')[1]);
    $.post(
             'inactive',
                {
                    'id':current_id.split('_')[1]
                },
                 function(response) {
                if(response.status == "200"){

                $('#enable_' + current_id.split('_')[1]).css({"display": "block"});
                $('#' + current_id).css({"display": "none"});
               
                $('#'+current_id).closest('tr').find('.editanalyst').attr('class',"inactive btn btn-info btn-xs editanalyst")
                }else{
                    
                }
                      
                },'json');
    
});
//-------------------------------------------------------------------------------
/*on click of enable button in edit client page*/
$('body').on('click','.enable_analyst',function(){
    var current_id = $(this).attr('id');
    console.log(current_id.split('_')[1]);
     $.post(
             'active',
                {
                    'id':current_id.split('_')[1]
                },
                 function(response) {
                if(response.status == "200"){
                
                $('#' + current_id).css({"display": "none"});
                $('#disable_' + current_id.split('_')[1]).css({"display": "block"});
                $('#'+ current_id.split('_')[1]).css({"display": "block"});
                $('#'+current_id).closest('tr').find('.editanalyst').attr('class',"active btn btn-info btn-xs editanalyst")
                }else{
                    
                }
                      
                },'json');
    
});
//------------------------------------------------------------------------------
});