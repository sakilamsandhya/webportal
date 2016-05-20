/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function () {

    /*on click of add user li*/
    $('#user_register').click(function () {
        $('.signup').css({display: 'block'});
        $('.register_heading').empty()
        $('.uploadReport').css({display: 'none'});
        $('.client_analyst_assign').css({display: 'none'});
        $('.client_Editing').css({display: 'none'});
        $('.analyst_Editing').css({display: 'none'});
        $('.editreport').css({display: 'none'});
        $('.countrynamesdiv').css({display: 'none'})
        $('.executivesummary_report').css({display: 'none'})
        $('.homestateofplay').css({display: 'none'})
        $('.keyvaluereport').css({display: 'none'})

    })
    //-------------------------------------------------------  

    /*on click of upload report li*/
    $('#upload_report').click(function () {

        $('.uploadReport').css({display: 'block'});
        $('.headingclass').empty();
        $('.signup').css({display: 'none'});
        $('.client_analyst_assign').css({display: 'none'});
        $('.client_Editing').css({display: 'none'});
        $('.analyst_Editing').css({display: 'none'});
        $('.editreport').css({display: 'none'});
        $('.countrynamesdiv').css({display: 'none'})
        $('.executivesummary_report').css({display: 'none'})
        $('.homestateofplay').css({display: 'none'})
        $('.keyvaluereport').css({display: 'none'})
        /*get all clietns for upload report*/
        $.post(
                'getAllOnlyClients',
                {
                },
                function (response) {
                    if (response.status == "200") {
                        if (response.data != '') {
                            $('.selectdropdownforclients').empty();

                            response.data.forEach(function (d, i) {

                                $('.selectdropdownforclients').append('<option value=' + d.id + '>' + d.name + '</option>');

                            })

                        }
                    }

                }, 'json');

    })

    //-------------------------------------------------------- 
    /*on click of assing analyst */
    $('#assign_client_to_da').click(function () {
        $('.client_analyst_assign').css({display: 'block'});
        $('.uploadReport').css({display: 'none'});
        $('.signup').css({display: 'none'});
        $('.client_Editing').css({display: 'none'});
        $('.analyst_Editing').css({display: 'none'});
        $('.editreport').css({display: 'none'});
        $('.countrynamesdiv').css({display: 'none'})
        $('.executivesummary_report').css({display: 'none'})
        $('.homestateofplay').css({display: 'none'})
        $('.keyvaluereport').css({display: 'none'})

        /*get all analyst to show all analyst in in assigning client to da table*/
        $.post(
                'getAllOnlyAnalysts',
                {
                },
                function (response) {
                    if (response.status == "200") {
                        if (response.data != '') {
                            $('.selectdropdownforanalysts').empty();

                            response.data.forEach(function (d, i) {

                                $('.selectdropdownforanalysts').append('<option value=' + d.id + '>' + d.name + '</option>')

                            })

                        }
                    }

                }, 'json');

    })


//===========================script for anayst assign ==========================

    /*script is for assign anaylst page*/
    var assinged_array = [];
    var unassigned_array = [];
    var allclients_array = [];
    var analyst_id;




    /**Get all clients vs analyst for assing client to analyst*/
    $.post(
            'getClientsAnalysts',
            {
            },
            function (response) {
                if (response.status == "200") {
                    if (response.clients_analysts != '') {
                        $('.divforclientanalyst').css({display: 'block'});
                    }

                    response.clients_analysts.forEach(function (d, i) {
                        $('.allcl_ana').append('<tr><td id=' + d.client_id + '>' + d.client_name + '</td><td id=' + d.analyst_id + '>' + d.analyst_name + '</td></tr>')
                    })
                    $('#myTable').DataTable();
                }
            }, 'json');




    /*on change of analyst*/
    $('#analyst').on('change', function () {
        $('#successdiv').hide();
        analyst_id = $(this).val();
        /*Get All clients*/
        $.post(
                'getAllclientswithanalystid',
                {
                    'id': analyst_id
                },
        function (response) {
            if (response.status == "200") {

                $('.asingunasing').css({"display": "block"})
                assinged_array = response.assigned;
                unassigned_array = response.unassigned;
                allclients_array = response.all;

                $('.assigned').empty();
                response.assigned.forEach(function (d) {

                    $('.assigned').append('<tr id=tr' + d.id + '><td>' + d.name + '</td><td><button class="btn btn-danger assingedbtn btn-xs" id=' + d.id + '>Remove</button></td></tr>');
                })
                $('.unassigned').empty();
                response.unassigned.forEach(function (d) {
                    $('.unassigned').append('<tr id=tr' + d.id + '><td>' + d.name + '</td><td><button class="btn btn-success unassignedbtn btn-xs" id=' + d.id + '>Assign</button></td></tr>');
                })

            } else {

            }


        }, 'json');
    })



    /*on click of assign button*/
    $('body').on('click', '.assingedbtn', function () {

        var currentid = $(this).attr('id');

        allclients_array.forEach(function (d, i) {



            if (currentid == d.id) {

                unassigned_array.push(d);

                assinged_array.forEach(function (d1, i) {

                    if (currentid == d1.id) {

                        assinged_array.splice(i, 1);
                    }
                })

                $('#tr' + currentid).remove();

                $('.unassigned').append('<tr id=tr' + d.id + '><td>' + d.name + '</td><td><button class="btn btn-success unassignedbtn btn-xs" id=' + d.id + '>Assign</button></td></tr>');
            }
        })

    });



    /*on click of unassign button*/
    $('body').on('click', '.unassignedbtn', function () {

        var currentid = $(this).attr('id');
        allclients_array.forEach(function (d, i) {
            if (currentid == d.id) {

                assinged_array.push(d)

                unassigned_array.forEach(function (d1, i) {

                    if (currentid == d1.id) {

                        unassigned_array.splice(i, 1);
                    }
                })

                $('#tr' + currentid).remove();
                $('.assigned').append('<tr id=tr' + d.id + '><td>' + d.name + '</td><td><button class="btn btn-danger assingedbtn btn-xs" id=' + d.id + '>Remove</button></td></tr>');
            }
        })

    });



    /*on click of update button after assigning*/
    $('#updateassigning').click(function () {

        $('#successdiv').show();
        $.ajax({
            type: 'post',
            cache: false,
            url: 'addupdateassigning',
            data: {result: JSON.stringify(assinged_array), result1: analyst_id},
            success: function (resp) {
                if (resp.status == "200") {

                    $('#successdiv').attr('class', "text-center col-lg-5 col-lg-offset-3 alert alert-success");
                    $('#successdiv').html(resp.message);
                    $('.allcl_ana').empty();
                    if (resp.client_analysts != '') {
                        $('.divforclientanalyst').css({display: 'block'});
                    }

                    resp.client_analysts.forEach(function (d, i) {

                        $('.allcl_ana').append('<tr><td id=' + d.client_id + '>' + d.client_name + '</td><td id=' + d.analyst_id + '>' + d.analyst_name + '</td></tr>')
                    })
//                     $('#myTable').DataTable();



                } else {
                    $('#successdiv').attr('class', "text-center col-lg-5 col-lg-offset-3 alert alert-success");
                    $('#successdiv').html(resp.message);
                }
            }

        });
    })

//===========================script for edit report===========================

    /*on click of edit report names*/
    $('body').on('click', '.edit_report_names', function () {

        $('.editreport_heading').empty();
        $('.editreport').css({display: 'block'});
        $('.uploadReport').css({display: 'none'});
        $('.client_analyst_assign').css({display: 'none'});
        $('.client_Editing').css({display: 'none'});
        $('.analyst_Editing').css({display: 'none'});
        $('.homestateofplay').css({display: 'none'});
        $('.keyvaluereport').css({display: 'none'});
        $('.executivesummary_report').css({display: 'none'})
        $('.signup').css({display: 'none'});

        var current_client_id = $(this).attr('id').split('@')[0];
        var current_report_name = $(this).attr('id').split('@')[1].split('_').join(" ");
        $('.editreport_heading').append("Edit Report -" + current_report_name);
        $('.update_Report_btn').attr('id', "upload_" + current_client_id);
        /*request to get uploaded details of report for current client id and current report name*/
        $.post(
                'getReportDetails',
                {
                    current_client_id: current_client_id,
                    current_report_name: current_report_name
                },
        function (response) {
            if (response.status == "200") {
                $('.editreports_table_body').empty();
                var years_unique = []
                $('#edit_report_months').empty();
                $('#edit_report_years').empty();
                response.reportdetails.forEach(function (d, i) {

                    $('.editreports_table_body').append('<tr><td>' + response.client_name + '</td><td>' + d.month + '</td><td>' + d.year + '</td></tr>');
                    $('#edit_report_months').append('<option value=' + d.month + '>' + d.month + '</option>');
                    if (years_unique.indexOf(d.year) == -1)
                    {
                        years_unique.push(d.year);
                        $('#edit_report_years').append('<option value=' + d.year + '>' + d.year + '</option>');
                    }
                })
            }
        }, 'json');

    })
//===========================script for  registration===================
    /*on click of register on admin page*/
    $("#register_form").validate({
        rules: {
            user_name: {
                required: true,
            },
            user_email: {
                required: true,
                email: true,
            },
            user_password: {
                required: true,
            },
            password_confirmation: {
                required: true,
            },
            user_role: {
                required: true,
            }
        },
        messages: {
            user_name: {
                required: "User name is required",
            },
            user_email: {
                required: "Email is required",
            },
            user_password: {
                required: "Password is required",
            },
            password_confirmation: {
                required: "Confirm password is required",
                equalTo: "#pwd",
            },
            user_role: {
                required: "User Type is required",
            },
        },
        submitHandler: function ()
        {
            var reg_user_data = new FormData($('#register_form')[0]);

            $.ajax({
                url: 'register_user', // point to server-side PHP script 
                dataType: 'json', // what to expect back from the PHP script, if anything
                cache: false,
                contentType: false,
                processData: false,
                data: reg_user_data,
                type: 'post',
                success: function (response) {
                    if (response.status == "200") {
                        $('.register_heading').attr('class', 'register_heading alert alert-success');
                        if (response.client_Role == "Client") {
                            $('.client_names_added').append('<li class="root-level-inner has-sub"><a href="javascript:void(0);"><span>' + response.client_name + '</span></a><ul class="client_names_for_viewreport" id=client_view_' + response.iduser + '></ui></li>');
                            $('.client_names_added_for_editreport').append('<li class="root-level-inner has-sub"><a href="javascript:void(0);"><span>' + response.client_name + '</span></a><ul class="client_names_for_editreport" id=client_edit_' + response.client_id + '></ul></li>');
                        }
                        $('.register_heading').append(response.message);

                    } else {
                        $('.register_heading').attr('class', 'register_heading alert alert-danger');
                        $('.register_heading').append(response.message);
                    }
                }
            });

        }
    });
})


