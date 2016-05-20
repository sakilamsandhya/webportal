/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
   
//    validation for forgotpassword page
    $("#resetlink").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Plese enter email",
                email:"please enter valid email"
            },
            
        },
        submitHandler: function ()
        {
         
            var emailid=$('#email_id').val();
              
            $.post('postCheck', {
               email:emailid
            },
            function (response) {
                if(response.status == "200"){
                     location.href = response.redirect;
                }else{
                  
                    $('#notexists').attr('class',"alert alert-danger");
                    $('#notexists').html(response.message);
                }
            }, 'json'
                    );

        }
    });
    //validation for resetpassword page
    
     $("#reset_form").validate({
        rules: {
            reset_email: {
                required: true,
                email: true
            },
            reset_password:{
                required:true,
            },
            reset_confirm_password:{
                 required:true,
                       equalTo : "#pwd",
            }
           
        },
        messages: {
            reset_email: {
                required: "Plese enter email",
                email:"please enter valid email"
            },
            reset_password:{
                required: "Plese enter password",
              
            },
            reset_confirm_password:{
                required: "Please enter confirm password",
           
               
            }
            
        },
        submitHandler: function ()
        {
          
            var emailid=$('#email').val();
            var password=$('#pwd').val();
            var confirm_pwd=$('#cpwd').val();
              
            $.post('postReset', {
               email:emailid,
               password:password,
               confirm_pwd:confirm_pwd,
            },
            function (response) {
                if(response.status == "200"){
                       location.href = response.redirect;
                     
                }else{
                    $('#reset').attr('class',"alert alert-danger");
                    $('#reset').html(response.message);
                }
            }, 'json'
                    );

        }
    });
    
    //validation for change password page
    
     $("#changepassword_form").validate({
       
        rules: {
            change_email: {
                required: true,
                email: true
            },
            old_password:{
                required:true,
            },
             change_password:{
                required:true,
            },
            change_confirm_password:{
                 required:true,
                 equalTo : "#chpwd",
            },
           
        },
        messages: {
            change_email: {
                required: "Plese enter email",
                email:"please enter valid email"
            },
            old_password:{
                required: "Plese enter old password",
              
            },
            change_password:{
                required: "Plese enter new password", 
            },
            change_confirm_password:{
                required: "Please enter confirm password",
           
               
            },
            
        },
        submitHandler: function ()
        {
     
            var emailid=$('#change_email').val();
            var old_password=$('#choldpwd').val();
            var new_password=$('#chpwd').val();
         
              
            $.post('postChange', {
               
               email:emailid,
               old_password:old_password,
               new_password:new_password,
            },
            function (response) {
                if(response.status == "200"){
                       location.href = response.redirect;
                     
                }else{
                    $('#change').attr('class',"alert alert-danger");
                    $('#change').html(response.message);
                }
            }, 'json'
                    );

        }
    });
});