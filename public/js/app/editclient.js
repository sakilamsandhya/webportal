/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function () {
    /*on click of edit client*/
    $('#edit_client_user').click(function () {
        $('.client_Editing').css({display: 'block'});
        $('.uploadReport').css({display: 'none'});
        $('.signup').css({display: 'none'});
        $('.client_analyst_assign').css({display: 'none'});
        $('.analyst_Editing').css({display: 'none'});
        $('.editreport').css({display: 'none'});
        $('.countrynamesdiv').css({display: 'none'})
        $('.executivesummary_report').css({display: 'none'})
        $('.homestateofplay').css({display: 'none'})
        $('.keyvaluereport').css({display: 'none'})
        /*get all client to show all client in table*/
        $.post(
                'getAllOnlyClients',
                {
                },
                function (response) {
                    if (response.status == "200") {
                        if (response.data != '') {
                            $('.tbodyforeditclient').empty();
                            $('.divforeditclient').css({display: 'block'});
                            response.data.forEach(function (d, i) {

                                if (d.status == "active") {
                                    $('.tbodyforeditclient').append('<tr id=' + "tr" + d.id + '><td>' + d.name + '</td><td>' + d.email + '</td><td><button type="button" class="active btn btn-info btn-xs editclient" id=' + d.id + '>Edit</button></td><td><button type="button" class="btn btn-danger btn-xs delete_client" id=disable_' + d.id + '>Disable</button><button style="display:none" type="button" class="btn btn-info btn-xs enable_client" id=enable_' + d.id + '>Enable</button></td>"</tr>');
                                } else {
                                    $('.tbodyforeditclient').append('<tr id=' + "tr" + d.id + '><td>' + d.name + '</td><td>' + d.email + '</td><td><button type="button" class="inactive btn btn-info btn-xs editclient" id=' + d.id + '>Edit</button></td><td><button type="button" style="display:none" class="btn btn-danger btn-xs delete_client" id=disable_' + d.id + '>Disable</button><button type="button" class="btn btn-info btn-xs enable_client" id=enable_' + d.id + '>Enable</button></td></tr>');
                                }

                            })

                        }
                    }

                }, 'json');

    });
  /*--------------------------------------------------------------------*/

    /*on click of edit button for client  data*/
    $('body').on('click', '.editclient', function () {
        if ($(this).attr('class').split(" ")[0] == "inactive") {
            alert("cannot edit inactive client")
        } else {
            $.post(
                    'getclientstoedit',
                    {
                        'id': $(this).attr('id')
                    },
            function (response) {
                response.clients.forEach(function (d, i) {

                    $('.modal #client_name').val(d.name);
                    $('.modal #client_mailid').val(d.email);
                    $('#client_name').attr('class', d.id);

                    $('#myModal1').modal('show');

                })

            }, 'json');
        }

    });
//-------------------------------------------------------------------------------

    /*on click of edit button after edit*/
    $('.useredit_client').on('click', function () {

        var id = $('#client_name').attr('class');

        var name = $('.modal #client_name').val();
        var email = $('#client_mailid').val();
        $.post(
                'editUser',
                {
                    'name': $('.modal #client_name').val(),
                    'email': $('#client_mailid').val(),
                    'id': id
                },
        function (response) {
            if (response.status == "200") {

                var delclass = "disable_" + id;
                ($('#tr' + id).empty());
                ($('#tr' + id).append('<td>' + name + '</td><td>' + email + '</td><td><button type="button" class="btn btn-info btn-xs editclient" id=' + id + '>Edit</button></td><td><button type="button"  class="btn btn-danger btn-xs delete_client\n\
       "id=' + delclass + '>Disable</button></td>'));

            }

        }, 'json');

    })
//------------------------------------------------------------------------------
    /*on click of delte button in edit clint */
    $('body').on('click', '.delete_client', function () {

        var current_id = $(this).attr('id');

        $.post(
                'inactive',
                {
                    'id': current_id.split('_')[1]
                },
        function (response) {
            if (response.status == "200") {

                $('#enable_' + current_id.split('_')[1]).css({"display": "block"});
                $('#' + current_id).css({"display": "none"});

                $('#' + current_id).closest('tr').find('.editclient').attr('class', "inactive btn btn-info btn-xs editclient")

            } else {

            }

        }, 'json');

    });
//-------------------------------------------------------------------------------
    /*on click of enable button in edit client page*/
    $('body').on('click', '.enable_client', function () {
        var current_id = $(this).attr('id');

        $.post(
                'active',
                {
                    'id': current_id.split('_')[1]
                },
        function (response) {
            if (response.status == "200") {

                $('#' + current_id).css({"display": "none"});
                $('#disable_' + current_id.split('_')[1]).css({"display": "block"});
                $('#' + current_id.split('_')[1]).css({"display": "block"});
                $('#' + current_id).closest('tr').find('.editclient').attr('class', "active btn btn-info btn-xs editclient")
            } else {

            }

        }, 'json');

    });
//------------------------------------------------------------------------------
});