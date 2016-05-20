/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function () {
    var country_names = [];
    var parent_category, child_category;
    var allreports = [];
    $.post(
            'getAllReports',
            {
            },
            function (response) {
                if (response.status == "200") {

                    response.data.forEach(function (d, i) {
                        allreports.push(d);
                    })
                } else {

                }
            }, 'json');
    $("#upload_form").validate({
        rules: {
            id: {
                required: true,
            },
            report: {
                required: true,
            },
            report_month: {
                required: true,
            },
            report_year: {
                required: true,
            },
            file: {
                required: true,
            }
        },
        messages: {
            id: {
                required: " *Plese select client",
            },
            report: {
                required: "* Please select Report Name",
            },
            report_month: {
                required: " *Please select Report Month",
            },
            report_year: {
                required: "* Please select Report Year",
            },
            file: {
                required: "*Please select file to upload"
            }


        },
        submitHandler: function (event)
        {

            var extension = $('#file_data').val().split('.').pop().toLowerCase();
            if (extension == "csv") {
                var existscount = 0;
                var notexistcount = 0;

                allreports.forEach(function (d, i) {


                    if (d.client_id == $('#client').val() && d.report_name == $('#reportname').val() && d.month == $('#month').val() && d.year == $('#year').val()) {
                        existscount++;

                    } else {
                        notexistcount++;
                    }
                })

                if (existscount > 0) {
                    var x = window.confirm("This report already uploaded in same month do you want to continue to replace press ok");
                    if (x) {
                        uploadFile("replace");
                    } else {
                        return false;
                    }
                } else {
                    uploadFile('');
                }
                

            }
            else {
                $('.headingclass').attr('class', 'alert alert-danger headingclass');
                $('.headingclass').text("only csv are allowed");
            }
//event.preventDefault();
//event.immediateStopPropogation();
return false;
        }
    });
//----------------------------------------------------------------------------  
    /*edit report*/
    $("#edit_upload_form").validate({
        rules: {
            edit_month: {
                required: true,
            },
            edit_year: {
                required: true,
            },
            file1: {
                required: true,
            },
        },
        messages: {
            edit_month: {
                required: "Please select month",
            },
            edit_year: {
                required: "*Please select year",
            },
            file1: {
                required: "*Please select file to upload",
            },
        },
        submitHandler: function ()
        {
            var client_id = $('.update_Report_btn').attr('id').split("_")[1];
            var report_name = $('.editreport_heading').text().split('-')[1]
            var extension = $('#edit_file_data').val().split('.').pop().toLowerCase();
            if (extension == "csv") {
                editFile();
            } else {
                $('.edit_headingclass').attr('class', 'alert alert-danger edit_headingclass');
                $('.edit_headingclass').text("only csv are allowed");

            }
            function editFile() {
                var edit_file_data = $('#edit_file_data').prop('files')[0];
                var edit_form_data = new FormData($('#edit_upload_form')[0]);

                edit_form_data.append('file', edit_file_data);
                edit_form_data.append('client_id', client_id);
                edit_form_data.append('report_name', report_name);

                $.ajax({
                    url: 'editreport', // point to server-side PHP script 
                    dataType: 'json', // what to expect back from the PHP script, if anything
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: edit_form_data,
                    type: 'post',
                    success: function (response) {
                        if (response.status == "200") {

                            $('.edit_headingclass').attr('class', 'edit_headingclass alert alert-success');
                            $('.edit_headingclass').text(response.message);
                        }
                    }
                });
            }

        }
    });
    //---------------------------------------------------------------------------
    function getKvd(client_id) {

        $.post(
                'getKvd',
                {
                    'id': client_id
                },
        function (response) {
            var parentcategories = [];
            if (response.status == "200") {
                var array_Data = [];

                response.line_of_text.forEach(function (d, i) {
                    if (i != 0 && i != 1) {


                        array_Data.push({
                            'Identifier': d[0],
                            'Key_Value_Driver': d[1],
                            'KVDName': d[2],
                            'Client': d[3],
                            'Country': d[4],
                            'Product': d[5],
                            'Channel': d[6],
                            'Parent_Category': d[7],
                            'Child_Category': d[8],
                            'Metrics': d[9],
                            'MonthCY': d[10],
                            'MonthLY': d[11],
                            'MTDCYplan': d[12],
                            'MTDDifferenceActuals': d[13],
                            "MTDDev%Actuals": d[14],
                            'Deviation metrics': d[15],
                            '3 mnths Avg CY': d[16],
                            '3 mnths Avg LY': d[17],
                            'Dev % ': d[18],
                            'YTD 2015': d[19],
                            'YTD 2014': d[20],
                            'PlanYTD2015': d[21],
                            'DifferenceYTDActuals': d[22],
                            'YTDDev %Actuals': d[23],
                            'MTDDifferenceplan': d[24],
                            'MTDDev%plan': d[25],
                            'YTDDifferencePlan': d[26],
                            'YTDDev%plan': d[27],
                            'month': d[28],
                            'month-1': d[29],
                            'month-2': d[30],
                            'month-3': d[31],
                            'month-4': d[32],
                            'month-5': d[33],
                            'month-6': d[34],
                            'month-7': d[35],
                            'month-8': d[36],
                            'month-9': d[37],
                            'month-10': d[38],
                            'month-11': d[39],
                            'month-12': d[40],
                            'month-13': d[41],
                            'month-14': d[42],
                            'month-15': d[43],
                            'month-16': d[44],
                            'month-17': d[45],
                            'month-18': d[46],
                            'month-19': d[47],
                            'month-20': d[48],
                            'month-21': d[49],
                            'month-22': d[50],
                            'month-23': d[51],
                            'month-24': d[52]


                        })
                    }
                })

//-----------------------------------------------------------------------------
                /*appending parent and child categories to menu*/
                var nested_data = d3.nest()
                        .key(function (d) {
                            if (d['Parent_Category'] != "" && d['Parent_Category']) {

                                return d['Parent_Category'];
                            }
                        })
                        .entries(array_Data);

                nested_data.forEach(function (d, i) {

                    if (d.key != "undefined") {

                        $('.keyvalue_report' + client_id).append('<li class="root-level-inner2 has-sub"><a href="javascript:void(0);"><span>' + d.key + '</span></a><ul class=' + d.key.split(" ").join("") + "_" + client_id + '></ul></li>')
                        var child_categories = []
                        d.values.forEach(function (d1, i) {
                            if (child_categories.indexOf(d1['Child_Category']) == -1)
                            {
                                child_categories.push(d1['Child_Category'])
//                               $('.' + d.key.split(" ").join("")).append('<li><a href=keyvalue?pare=' + d.key.split(" ").join("") +'&cate='+d1['Child Category'].split(" ").join("")+'><span>' + d1['Child Category'] + '</span></a></li>');
                                $('.' + d.key.split(" ").join("") + "_" + client_id).append('<li class="childcategory"><a href="javascript:void(0);"><span>' + d1['Child_Category'] + '</span></a></li>');
                            }
                        })
                    }
                })
                $(document).on('click', '.root-level-inner2', function (e) {
                    e.stopImmediatePropagation();
                    $(this).parents('.report_names').addClass('opened');
                    $(this).children('.opened').removeClass('opened');
                    $(this).addClass('opened');
                });
                $(document).on('click', '.root-level-inner2.opened', function (e) {
                    e.stopImmediatePropagation();
                    $(this).removeClass('opened');
                });

                /*on click of child categories get parent and child category*/
                $('.childcategory').on('click', function () {

                    $('.executivesummary_report').css({display: 'none'})
                    $('.signup').css({display: 'none'});
                    $('.uploadReport').css({display: 'none'});
                    $('.client_analyst_assign').css({display: 'none'});
                    $('.client_Editing').css({display: 'none'});
                    $('.analyst_Editing').css({display: 'none'});
//                    $('#main-menu li').removeClass('opened');
                    $(this).parent().parent().toggleClass('opened');
                    $('.root-level-inner').addClass('root-level-inner has-sub')
                    $('.homestateofplay').css({display: 'none'})
                    $('.countrynamesdiv').css({display: 'none'});
                    $('.keyvaluereport').css({display: 'block'})

                    child_category = $(this).find('span').text().split(" ").join("");
                    parent_category = $(this).parent().attr('class').split("_")[0];

                    array_Data.forEach(function (d, i) {

                        if (d['Parent_Category']) {

                            if (d['Parent_Category'].split(" ").join("") == parent_category && d['Child_Category'].split(" ").join("") == child_category) {
                                country_names.push(d['Country'])
                            }
                        }

                        jQuery.unique(country_names);
                    })
                    $('.country_names').empty();
                    country_names.forEach(function (d, i) {
                        $('.country_names').append('<option value=' + d + '>' + d + '</option>')
                    })

                    if ($('.country_names').val()) {

                        keyvaluedriverReport(array_Data, $('.country_names').val());
                    }

                });

                /*on change of country select drop down*/
                var country_name;
                $('.country_names').on('change', function () {
                    country_name = $(this).val();
                    $('.table_data').empty();
                    keyvaluedriverReport(array_Data, country_name);
                });
            }

        }, 'json');
    }
    //-------------------------------------------------------------------------
    function keyvaluedriverReport(data, country_name) {

        $('.header_parent_category').empty();
        $('#keyvaluedriver').css({display: 'block'});
        $('.header_parent_category').append('<b><h5>' + parent_category + '</b></h5>');

        $('.table_data_keyvalue').empty();

        data.forEach(function (d, key) {

            var circle_name;
            if (country_name && d['Parent_Category']) {

                if (d['Parent_Category'].split(" ").join("") == parent_category && d['Child_Category'].split(" ").join("") == child_category && d['Country'] == country_name) {
                    /*month - current month and month-12 prev year current month*/
                    var deviation_between_twoyears = ((d['month'].split(',').join("").split('%').join('') - d['month-12'].split(',').join("").split('%').join('')) / d['month'].split(',').join("").split('%').join('')) * 100;
                    if (deviation_between_twoyears != '') {
                        deviation_between_twoyears = deviation_between_twoyears.toFixed(2) + "%";
                    } else {
                        deviation_between_twoyears = ""
                    }
                    var diff = d['month'].split(',').join("").split('%').join('') - d['month-12'].split(',').join("").split('%').join('');
                    if (d['MTDDev%Actuals'] != "N/A" && d['MTDDev%Actuals'] != '') {
                        if (d['MTDDev%Actuals'].split('%')[0] > 0) {

                            if (d['Deviation metrics'] == "Positive") {

                                circle_name = "green_circle"
                            }
                            else {

                                circle_name = "red_circle"
                            }
                        } else if (d['MTDDev%Actuals'].split('%')[0] < 0) {

                            if (d['Deviation metrics'] == "Positive") {

                                circle_name = "red_circle"
                            }
                            else {

                                circle_name = "green_circle"
                            }

                        } else {

                        }
                    }
                    /*if any of these keyvalue drivers make month values positive*/
                    if (d['Key_Value_Driver'] == "Betting Tax" || d['Key_Value_Driver'] == "Bonus Cost" || d['Key_Value_Driver'] == "Marketing Spend") {
                        var month_month1 = Math.abs(Math.abs(d['month-7'].split(',').join("").split('%').join('')) - Math.abs(d['month-19'].split(',').join("").split('%').join('')))
                        var month_month2 = Math.abs(Math.abs(d['month-6'].split(',').join("").split('%').join('')) - Math.abs(d['month-18'].split(',').join("").split('%').join('')))
                        var month_month3 = Math.abs(Math.abs(d['month-5'].split(',').join("").split('%').join('')) - Math.abs(d['month-17'].split(',').join("").split('%').join('')))
                        var month_month4 = Math.abs(Math.abs(d['month-4'].split(',').join("").split('%').join('')) - Math.abs(d['month-16'].split(',').join("").split('%').join('')))
                        var month_month5 = Math.abs(Math.abs(d['month-3'].split(',').join("").split('%').join('')) - Math.abs(d['month-15'].split(',').join("").split('%').join('')))
                        var month_month6 = Math.abs(Math.abs(d['month-2'].split(',').join("").split('%').join('')) - Math.abs(d['month-14'].split(',').join("").split('%').join('')))
                        var month_month7 = Math.abs(Math.abs(d['month-1'].split(',').join("").split('%').join('')) - Math.abs(d['month-13'].split(',').join("").split('%').join('')))
                        var month_month8 = Math.abs(Math.abs(d['month'].split(',').join("").split('%').join('')) - Math.abs(d['month-12'].split(',').join("").split('%').join('')))
                        var trendlines13 = '"' + Math.abs(d['month'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-1'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-2'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-3'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-4'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-5'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-6'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-7'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-8'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-9'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-10'].split(',').join("").split('%').join("")) + ", " + Math.abs(d['month-11'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-12'].split(',').join("").split('%').join('')) + '"';
                        var trends15 = '"' + Math.abs(d['month-7'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-6'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-5'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-4'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-3'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-2'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-1'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month'].split(',').join("").split('%').join('')) + '"'
                        var trends14 = '"' + Math.abs(d['month-19'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-18'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-17'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-16'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-15'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-14'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-13'].split(',').join("").split('%').join('')) + ", " + Math.abs(d['month-12'].split(',').join("").split('%').join('')) + '"'
                    }
                    /*else we need to take as it is*/
                    else {
                        var month_month1 = (d['month-7'].split(',').join("").split('%').join('') - d['month-19'].split(',').join("").split('%').join(''))
                        var month_month2 = (d['month-6'].split(',').join("").split('%').join('') - d['month-18'].split(',').join("").split('%').join(''))
                        var month_month3 = (d['month-5'].split(',').join("").split('%').join('') - d['month-17'].split(',').join("").split('%').join(''))
                        var month_month4 = (d['month-4'].split(',').join("").split('%').join('') - d['month-16'].split(',').join("").split('%').join(''))
                        var month_month5 = (d['month-3'].split(',').join("").split('%').join('') - d['month-15'].split(',').join("").split('%').join(''))
                        var month_month6 = (d['month-2'].split(',').join("").split('%').join('') - d['month-14'].split(',').join("").split('%').join(''))
                        var month_month7 = (d['month-1'].split(',').join("").split('%').join('') - d['month-13'].split(',').join("").split('%').join(''))
                        var month_month8 = (d['month'].split(',').join("").split('%').join('') - d['month-12'].split(',').join("").split('%').join(''))
                        var trendlines13 = '"' + d['month'].split(',').join("").split('%').join('') + ", " + d['month-1'].split(',').join("").split('%').join('') + ", " + d['month-2'].split(',').join("").split('%').join('') + ", " + d['month-3'].split(',').join("").split('%').join('') + ", " + d['month-4'].split(',').join("").split('%').join('') + ", " + d['month-5'].split(',').join("").split('%').join('') + ", " + d['month-6'].split(',').join("").split('%').join('') + ", " + d['month-7'].split(',').join("").split('%').join('') + ", " + d['month-8'].split(',').join("").split('%').join('') + ", " + d['month-9'].split(',').join("").split('%').join('') + ", " + d['month-10'].split(',').join("").split('%').join("") + ", " + d['month-11'].split(',').join("").split('%').join('') + ", " + d['month-12'].split(',').join("").split('%').join('') + '"';
                        var trends15 = '"' + d['month-7'].split(',').join("").split('%').join('') + ", " + d['month-6'].split(',').join("").split('%').join('') + ", " + d['month-5'].split(',').join("").split('%').join('') + ", " + d['month-4'].split(',').join("").split('%').join('') + ", " + d['month-3'].split(',').join("").split('%').join('') + ", " + d['month-2'].split(',').join("").split('%').join('') + ", " + d['month-1'].split(',').join("").split('%').join('') + ", " + d['month'].split(',').join("").split('%').join('') + '"'
                        var trends14 = '"' + d['month-19'].split(',').join("").split('%').join('') + ", " + d['month-18'].split(',').join("").split('%').join('') + ", " + d['month-17'].split(',').join("").split('%').join('') + ", " + d['month-16'].split(',').join("").split('%').join('') + ", " + d['month-15'].split(',').join("").split('%').join('') + ", " + d['month-14'].split(',').join("").split('%').join('') + ", " + d['month-13'].split(',').join("").split('%').join('') + ", " + d['month-12'].split(',').join("").split('%').join('') + '"'
                    }

                    /*appending table data*/

                    $('.table_data_keyvalue').append('<tr><td class="monitoring" style="min-width:230px;">' + d['Key_Value_Driver'] + '</td><td class="metrics">' + d['Metrics'] + '</td><td class="trends" id=' + key + ' style="width:10%;" data-sparkline=' + trendlines13 + '></td><td class="aug_15 rowalignment">' + d['MonthCY'] + '</td><td class="aug_14 rowalignment">' + d['MonthLY'] + '</td><td class="rowalignment"><div class=' + circle_name + '></div></td><td class="dev_14_15 rowalignment">' + d['MTDDev%Actuals'] + '</td><td class="avt_3_months rowalignment">' + d['3 mnths Avg CY'] + '</td><td class="seconcircle"></td><td class="rowalignment">' + d['Deviation % 3 month avg and Month CY'] + '</td><td class="trends_15" data-sparkline=' + trends15 + '></td><td class="trends_14" data-sparkline=' + trends14 + '></td><td class="month_month" data-sparkline=' + '"' + month_month1 + ", " + month_month2 + ", " + month_month3 + ", " + month_month4 + ", " + month_month5 + ", " + month_month6 + ", " + month_month7 + ", " + month_month8 + '"' + '></td><td class="q3_2015 rowalignment"></td><td class="q3_2014 rowalignment"></td><td class="thirdcircle"></td><td class="performance rowalignment"></td></tr>')
//$('.table_data').append('<tr class="keyvaluereport_tr_class"><td class="monitoring" style="min-width:200px;">' + d[0] + '</td><td class="metrics">' + d[4] + '</td><td class="trends" id=' + key + ' style="width:50%;" data-sparkline=' + '"' + d[15] + ", " + d[16]+ ", " + d[17]+ ", " + d[18] + ", " + d[19] + ", " + d[20] + ", " + d[21]+ ", " + d[22] + ", " + d[23] + ", " + d[24] + ", " + d[25] + ", " + d[26] + ", " + d[27] + '"' + '></td><td class="aug_15">' + d[15] + '</td><td class="aug_14" style="min-width:120px;">' + d[27] + '<div class=' + circle_name + '></div></td><td class="dev_14_15">' + deviation_between_twoyears + '</td><td class="avt_3_months">' + d[10] + '</td><td></td><td class="trends_15" data-sparkline=' + '"' + d[22].split(',').join("") + ", " + d[21].split(',').join("") + ", " + d[20].split(',').join("") + ", " + d[19].split(',').join("") + ", " + d[18].split(',').join("") + ", " + d[17].split(',').join("") + ", " + d[16].split(',').join("") + ", " + d[15].split(',').join("") + '"' + '></td><td class="trends_14" data-sparkline=' + '"' + d[34].split(',').join("") + ", " + d[33].split(',').join("") + ", " + d[32].split(',').join("") + ", " + d[31].split(',').join("") + ", " + d[30].split(',').join("") + ", " + d[29].split(',').join("") + ", " + d[28].split(',').join("") + ", " + d[27].split(',').join("") + '"' + '></td><td class="month_month" data-sparkline=' + '"' + month_month1 + ", " + month_month2 + ", " + month_month3 + ", " + month_month4 + ", " + month_month5 + ", " + month_month6 + ", " + month_month7 + ", " + month_month8 + '"' + '></td><td class="q3_2015"></td><td class="q3_2014"></td><td class="performance"></td></tr>');
                }
            }
        })
        /*for sparkline graphs (kvd)*/
        var trends = "true";
        Highcharts.SparkLine = function (options, callback) {

            trends = "false";

            var colors = [];
            var width, margin, height;
            var max = d3.max(options.series[0].data, function (d) {
                return d;
            });
            var min = d3.min(options.series[0].data, function (d) {
                return d;
            });

            if (options.series[0].data.length == 13) {
                width = 120;


                options.series[0].data.forEach(function (d, i) {
                    /*if any month values is negative we are making that as zero so no negative graph will appear*/
                    if (d < 0) {

                        options.series[0].data[i] = 0;
                    }
                    if (d == max) {
                        colors.push("green")
                    } else if (d == min) {
                        colors.push("red")
                    } else {
                        if (i == 0) {
                            colors.push("orange")
                        } else if (i == options.series[0].data.length - 1) {
                            colors.push("orange")
                        }
                        else {
                            colors.push("blue")
                        }
                    }
                })
            } else {
                width = 80
                options.series[0].data.forEach(function (d, i) {
                    /*if any month values is negative we are making that as zero so no negative graph will appear*/
                    if (d < 0) {

                        options.series[0].data[i] = 0;
                    }
                    if (d == max) {
                        colors.push("green")
                    } else if (d == min) {
                        colors.push("red")
                    } else {
                        if (i == 0) {
                            colors.push("blue")
                        } else if (i == options.series[0].data.length - 1) {
                            colors.push("blue")
                        }
                        else {
                            colors.push("blue")
                        }

                    }

                })
            }
            var defaultOptions = {
                chart: {
                    renderTo: (options.chart && options.chart.renderTo) || this,
                    backgroundColor: null,
//                       borderWidth: 0,
                    type: 'column',
                    margin: [1, 2, 0, 2],
                    width: width,
//                    minPointLength:3,
                    height: 20,
                    style: {
                        overflow: 'visible'
                    },
                    skipClone: true
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    lineWidth: 0,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: []
                },
                yAxis: {
                    endOnTick: false,
                    lineWidth: 0,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    hideDelay: 0,
                    shared: true,
                    padding: 0,
                    positioner: function (w, h, point) {
                        return {x: point.plotX - w / 2, y: point.plotY - h};
                    }
                },
                colors: colors,
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        pointWidth: 6,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
//                      negativeColor: '#910000',
                        colorByPoint: true,
//                     borderColor: 'silver,

                        minPointLength: 3
                    },
                },
            };
            options = Highcharts.merge(defaultOptions, options);

            return new Highcharts.Chart(options, callback);
        };

        var start = +new Date(),
                $tds = $("td[data-sparkline]"),
                fullLen = $tds.length,
                n = 0;

        // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
        // can take some seconds, so we split the input into chunks and apply them in timeouts
        // in order avoid locking up the browser process and allow interaction.
        function doChunk() {
            var time = +new Date(),
                    i,
                    len = $tds.length,
                    $td,
                    stringdata,
                    arr,
                    data,
                    chart;

            for (i = 0; i < len; i += 1) {
                $td = $($tds[i]);
                stringdata = $td.data('sparkline');
                arr = stringdata.split('; ');
                data = $.map(arr[0].split(', '), parseFloat);
                chart = {};

                if (arr[1]) {

                    chart.type = arr[1];
                }

                $td.highcharts('SparkLine', {
                    series: [{
                            data: data,
                            pointStart: 1
                        }],
                    tooltip: {
                        headerFormat: '<span style="font-size: 10px"></span><br/>',
                        formatter: function () {
                            return addCommas(this.y);
                        }
                    },
//                   chart: chart

//                        tooltip: {
//                    headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', Q{point.x}:</span><br/>',
//                    pointFormat: '<b>{point.y}.000</b> USD'
//                },
//                chart: chart

                });
                n += 1;

                // If the process takes too much time, run a timeout to allow interaction with the browser
                if (new Date() - time > 500) {

                    $tds.splice(0, i + 1);
                    setTimeout(doChunk, 0);
                    break;
                }

            }
        }
        doChunk();

        function addCommas(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return '<b>' + x1 + x2 + '</b>';
        }

    }
    //-----------------------------------------------------------------------------
     /*function for reading file from form and uploading*/
                 function uploadFile() {
                    $('.headingclass').empty();
                    var file_data = $('#file_data').prop('files')[0];

                    var form_data = new FormData($('#upload_form')[0]);

                    form_data.append('file', file_data);

                    $.ajax({
                        url: 'upload', // point to server-side PHP script 
                        dataType: 'json', // what to expect back from the PHP script, if anything
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,
                        type: 'post',
                        success: function (response) {

                            if (response.status == "200") {

                                $('.headingclass').attr('class', 'alert alert-success headingclass');

                                $('.headingclass').append(response.message);

                                if (response.reportname) {

                                    if (response.reportname == "Key Value Drivers") {
                                        $('#client_view_' + response.client_id).append('<li class="root-level-inner has-sub report_names " id=' + response.client_id + '><a href="javascript:void(0);"><i class="entypo-bag"></i><span>' + response.reportname + '</span></a><ul class=keyvalue_report' + response.client_id + '></ul></li>')
                                        getKvd(response.client_id);
                                    } else if (response.reportname == "Home State Of Play") {
                                        $('#client_view_' + response.client_id).append('<li class="report_names home_report" id=' + response.client_id + '><a href="javascript:void(0);"><i class="entypo-bag"></i><span>' + response.reportname + '</span></a></li>')
                                    } else if (response.reportname == "Executive Summary") {
                                        $('#client_view_' + response.client_id).append('<li class="report_names executive_report" id=' + response.client_id + '><a href="javascript:void(0);"><i class="entypo-bag"></i><span>' + response.reportname + '</span></a></li>')
                                    }
                                    /* appending report and client edit reprot view*/

                                    $('#client_edit_' + response.client_id).append('<li class="edit_report_names" id=' + response.client_id + '@' + reportname + '><a href="javascript:void(0);"><i class="entypo-bag"></i><span>' + response.reportname + '</span></a></li>')


                                } else {

                                }
                            }
                        }
                    });
                }
 //-----------------------------------------------------------------------

})


