/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function () {
    /*initializing required variables in this page*/
    var country_names = [];
    var parent_category, child_category;

    /*for side bar menu scroll*/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 0) {
            $('body').addClass("fixed-sidebar");
        }
    });

    /*for jquery text editor*/
    $('.jqte-test').jqte();

    /* settings of status for jquery editor*/
    var jqteStatus = true;
    $(".status").click(function ()
    {
        jqteStatus = jqteStatus ? false : true;
        $('.jqte-test').jqte({"status": jqteStatus})
    });




    /*from adminpage and analysty page*/
    if ($('.report_names').attr('id')) {

        var client_id = $('.report_names').attr('id');

        getallrkvdrepotdata();
    }
    /*from clien page*/
    else if ($('#main-menu').attr('class')) {

        var client_id = $('#main-menu').attr('class');
        getHomeReport(client_id);
        getKvd(client_id);
    } else {
//        window.location = "login";
    }

//--------------------------------------------------------------------------
    /*
     * Function for Get all clients and respective reports where report name is key value driver report
     * get data for appending key value driver report data categories to menu for all clients
     * 
     */
    function getallrkvdrepotdata() {
        $.post(
                'getAllClientsReports',
                {
                },
                function (response) {
                    if (response.status == "200") {
                        response.data.forEach(function (d, i) {
                            getKvd(d.client_id);
                        })
                    } else {

                    }
                }, 'json');

    }


//------------------ONCLICK OF HOMESTATE OF PLAY REPORT-------------------------
    /*on click of home report*/
    $('body').on('click', '.home_report', function () {
        $('.homestateofplay').css({display: 'block'})
        var client_id = $(this).attr('id');
        $('.uploadreport_by_analyst').css({display: 'none'});
        $('.executivesummary_report').css({display: 'none'});
        $('.countrynamesdiv').css({display: 'none'});
        $('.editreport').css({display: 'none'});

        $('.keyvaluereport').css({display: 'none'});
        $('.signup').css({display: 'none'});
        $('.uploadReport').css({display: 'none'});
        $('.client_analyst_assign').css({display: 'none'});
        $('.client_Editing').css({display: 'none'});
        $('.analyst_Editing').css({display: 'none'});



        getHomeReport(client_id);
    })
//--------------------ONCLICK OF EXECUTIVE SUMMARY REPORT------------------------
    /*on click of executive summary report */

    $('body').on('click', '.executive_report', function () {

        $('.homestateofplay').css({display: 'none'});
        $('.keyvaluereport').css({display: 'none'});
        $('.keyvaluereport').css({display: 'none'});
        $('.signup').css({display: 'none'});
        $('.uploadReport').css({display: 'none'});
        $('.client_analyst_assign').css({display: 'none'});
        $('.client_Editing').css({display: 'none'});
        $('.analyst_Editing').css({display: 'none'});
        $('.editreport').css({display: 'none'});

        var clientid = $(this).attr('id');
        $('#gamingrevenue_tbody').empty();
        $('#executivesummary_graph').empty();
        $('#customermodel_graph').empty();
        $('#bridge_ytd').empty();
        $('.linechart').empty();

        getExecutiveSumary('', clientid);
    })
//------------------------------------------------------------------------------
    /*on click of upload report on analyst page*/
    $('#upload_report_analyst').on('click', function () {

        $('.homestateofplay').css({display: 'none'});
        $('.keyvaluereport').css({display: 'none'});
        $('.executivesummary_report').css({display: 'none'});
        $('.uploadreport_by_analyst').css({display: 'block'});

    })
    //-----------------------------------------------------------------------
    /* function for request for get keyvalue driver report with client id
     * to give suboptions(parent category) for keyvalue drivers
     * @param {integer} client_id
     * @returns 
     */

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
                handleDataForNan(response.line_of_text)
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
                            'month-24': d[52],
                            '3 month avg diff with Month CY': d[53],
                            'Deviation % 3 month avg and Month CY': d[54],
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

                        $('.keyvalue_report' + client_id).append('<li class="root-level-inner has-sub"><a href="javascript:void(0);"><span>' + d.key + '</span></a><ul class=' + d.key.split(" ").join("") + "_" + client_id + '></ul></li>')
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

                /*on click of menu items on side bar menu*/
                $(document).on('click', '.root-level-inner', function () {

                    $(this).parent().children('.opened').removeClass('opened');
                    $(this).toggleClass('opened');
                });
                $(document).on('click', '.root-level-inner.opened', function () {
                    $(this).removeClass('opened');
                });


                /*on click of child categories get parent and child category*/
                $('.childcategory').on('click', function () {
                    $('.editreport').css({display: 'none'});
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
                    console.log("parent category", parent_category);

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
//--------------------------------------------------------------------------
    /*
     * Function for get home report
     * @param {type} client_id
     * @returns {}
     */
    function getHomeReport(client_id) {

        $('.month_year').empty();
        $.post(
                'getclient',
                {
                    'id': client_id
                },
        function (response) {

            var report = response.report;
            var folder = response.folder;

            $('.month_year').append(response.month_year);

            dataPreparation(response.line_of_text)

        }, 'json');
    }
    //-----------------------------------------------------------------------------   

    /*on change of year and month*/
    var selected_report_year;
    var selected_report_month;
    $('.report_years').on('change', function () {
        selected_report_year = $(this).val();

    })
    $('.report_months').on('change', function () {
        selected_report_month = $(this).val();
    })

//------------------------------------------------------------------------------
    /*on click of change report*/
    $('.change_report_btn').on('click', function () {
        var reportname = $(this).attr('id').split('_').join(" ");
        console.log(reportname)
        if (selected_report_year && selected_report_year != "" && selected_report_month && selected_report_month != "") {

            $.post(
                    'changeReport',
                    {
                        'id': client_id,
                        'year': selected_report_year,
                        'month': selected_report_month,
                        'report': reportname,
                    },
                    function (response) {
                        if (response.status == "200") {
                            $('.month_year').empty();
                            $('.month_year').append(response.month_year);
                            if (reportname == "Home State Of Play") {
                                dataPreparation(response.line_of_text)
                            } else if (reportname == "Executive Summary") {
                                getExecutiveSumary(response.report_id, client_id)
                            }

                        } else {
                            alert("No Report Available")
                        }

                    }, 'json');

        } else {
            alert("Please select year and month")
        }
    })

//------------------------------------------------------------------------------
    /*
     * Function for data preparation for homestate of play
     * @param {type} data
     * @returns {undefined}
     */
    function dataPreparation(data) {

        /*empty the table view on each change for report based on month and year*/
        $('.table_source').empty();
        $('.table_productv').empty();
        $('.table_revenue').empty();
        $('.table_product').empty();
        $('.table_channel').empty();

        data.forEach(function (d, i) {
            if (d[0] == "Channel Wise Revenue Distribution") {

                $('.table_channel').append('<tr><td>' + d[1] + '</td><td>' + d[2] + '</td><td>' + d[3] + '</td><td>' + d[4] + '</td></tr>');
            }
            if (d[0] == "Product Wise Revenue Distribution") {

                $('.table_product').append('<tr><td>' + d[1] + '</td><td>' + d[2] + '</td><td>' + d[3] + '</td><td>' + d[4] + '</td></tr>');
            }
            if (d[0] == "Revenue Distirbution by player Age") {

                $('.table_revenue').append('<tr><td>' + d[1] + '</td><td>' + d[2] + '</td><td>' + d[3] + '</td><td>' + d[4] + '</td></tr>');
            }
            if (d[0] == "Product Variant Revenue Distribution") {

                $('.table_productv').append('<tr><td>' + d[1] + '</td><td>' + d[2] + '</td><td>' + d[3] + '</td><td>' + d[4] + '</td></tr>');
            }
            if (d[0] == "Source of Traffic  Revenue Distribution") {

                $('.table_source').append('<tr><td>' + d[1] + '</td><td>' + d[2] + '</td><td>' + d[3] + '</td><td>' + d[4] + '</td></tr>');
            }
        });

        var channel_poland = [];
        var channel_Slovakia = [];
        var channel_Czech = [];
        var revenue_poland = [];
        var revenue_Slovakia = [];
        var revenue_Czech = [];
        var playerAge_poland = [];
        var playerAge_Slovakia = [];
        var playerAge_Czech = [];
        var productvarian_poland = []
        var productvarian_Slovakia = []
        var productvarian_Czech = []
        var sourcetraffic_poland = []
        var sourcetraffic_Slovakia = []
        var sourcetraffic_Czech = []
        /*empty the table on each change for report based on month and year*/
        $('.table_data').empty();
        /*empty the pie chart divs on each change for report based on month and year*/
        $('.chartview').empty();

        data.forEach(function (d, i) {

            if (d[0] == "State of Play Data") {

                $('.table_data').append('<tr><td>' + d[1] + '</td><td>' + d[2] + '</td><td>' + d[3] + '</td><td>' + d[4] + '</td></tr>');
            }
            if (d[0] == "Channel Wise Revenue Distribution") {

                channel_poland.push({current: d[2], prev: d[5]});
                channel_Slovakia.push({current: d[3], prev: d[6]});
                channel_Czech.push({current: d[4], prev: d[7]});
            }
            if (d[0] == "Product Wise Revenue Distribution") {
                revenue_poland.push({current: d[2], prev: d[5]});
                revenue_Slovakia.push({current: d[3], prev: d[6]});
                revenue_Czech.push({current: d[4], prev: d[7]});
            }
            if (d[0] == "Revenue Distirbution by player Age") {
                playerAge_poland.push({current: d[2], prev: d[5]});
                playerAge_Slovakia.push({current: d[3], prev: d[6]});
                playerAge_Czech.push({current: d[4], prev: d[7]});

            }
            if (d[0] == "Product Variant Revenue Distribution") {
                productvarian_poland.push({current: d[2], prev: d[5]});
                productvarian_Slovakia.push({current: d[3], prev: d[6]});
                productvarian_Czech.push({current: d[4], prev: d[7]});

            }
            if (d[0] == "Source of Traffic  Revenue Distribution") {
                sourcetraffic_poland.push({current: d[2], prev: d[5]});
                sourcetraffic_Slovakia.push({current: d[3], prev: d[6]});
                sourcetraffic_Czech.push({current: d[4], prev: d[7]});

            }
        })

        renderPie(channel_poland, 'chart_channel1', 'channel', 'Poland')

        renderPie(channel_Slovakia, 'chart_channel2', 'channel', 'Slovakia')
        renderPie(channel_Czech, 'chart_channel3', 'channel', 'Czech')

        renderPie(revenue_poland, 'chart_revenue1', 'revenue', 'poland')
        renderPie(revenue_Slovakia, 'chart_revenue2', 'revenue', 'Slovakia')
        renderPie(revenue_Czech, 'chart_revenue3', 'revenue', 'Czech')
        renderPie(playerAge_poland, 'chart_age1', 'age', 'poland')
        renderPie(playerAge_Slovakia, 'chart_age2', 'age', 'Slovakia')
        renderPie(playerAge_Czech, 'chart_age3', 'age', 'Czech')
        renderPie(productvarian_poland, 'product_variant1', 'productvariant', 'poland')
        renderPie(productvarian_Slovakia, 'product_variant2', 'productvariant', 'Slovakia')
        renderPie(productvarian_Czech, 'product_variant3', 'productvariant', 'Czech')
        renderPie(sourcetraffic_poland, 'source_traffic1', 'sourcetraffic', 'poland')
        renderPie(sourcetraffic_Slovakia, 'source_traffic2', 'sourcetraffic', 'Slovakia')
        renderPie(sourcetraffic_Czech, 'source_traffic3', 'sourcetraffic', 'Czech')

        /*
         * Function for render  pie chart
         * @param {array} data
         * @param {integer} chartid
         * @param {string} chart
         * @param {string} county
         * @returns {}
         */
        function renderPie(data, chartid, chart, county) {

            var Donut3D = {};

            function pieTop(d, rx, ry, ir) {

                if (d.endAngle - d.startAngle == 0)
                    return "M 0 0";
                var sx = rx * Math.cos(d.startAngle),
                        sy = ry * Math.sin(d.startAngle),
                        ex = rx * Math.cos(d.endAngle),
                        ey = ry * Math.sin(d.endAngle);

                var ret = [];
                ret.push("M", sx, sy, "A", rx, ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "1", ex, ey, "L", ir * ex, ir * ey);
                ret.push("A", ir * rx, ir * ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "0", ir * sx, ir * sy, "z");
                return ret.join(" ");
            }

            function pieOuter(d, rx, ry, h) {
                var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
                var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);

                var sx = parseInt(rx * Math.cos(startAngle)),
                        sy = parseInt(ry * Math.sin(startAngle)),
                        ex = parseInt(rx * Math.cos(endAngle)),
                        ey = parseInt(ry * Math.sin(endAngle))

                var ret = [];
                ret.push("M", sx, h + sy, "A", rx, ry, "0 0 1", ex, h + ey, "L", ex, ey, "A", rx, ry, "0 0 0", sx, sy, "z");
                return ret.join(" ");
            }

            function pieInner(d, rx, ry, h, ir) {
                var startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
                var endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);

                var sx = ir * rx * Math.cos(startAngle),
                        sy = ir * ry * Math.sin(startAngle),
                        ex = ir * rx * Math.cos(endAngle),
                        ey = ir * ry * Math.sin(endAngle);

                var ret = [];
                ret.push("M", sx, sy, "A", ir * rx, ir * ry, "0 0 1", ex, ey, "L", ex, h + ey, "A", ir * rx, ir * ry, "0 0 0", sx, h + sy, "z");
                return ret.join(" ");
            }

            function getPercent(d) {
                return (d.endAngle - d.startAngle > 0.2 ?
                        Math.round(1000 * (d.endAngle - d.startAngle) / (Math.PI * 2)) / 10 + '%' : '');
            }

            Donut3D.transition = function (id, data, rx, ry, h, ir) {
                function arcTweenInner(a) {
                    var i = d3.interpolate(this._current, a);
                    this._current = i(0);
                    return function (t) {
                        return pieInner(i(t), rx + 0.5, ry + 0.5, h, ir);
                    };
                }
                function arcTweenTop(a) {
                    var i = d3.interpolate(this._current, a);
                    this._current = i(0);
                    return function (t) {
                        return pieTop(i(t), rx, ry, ir);
                    };
                }
                function arcTweenOuter(a) {
                    var i = d3.interpolate(this._current, a);
                    this._current = i(0);
                    return function (t) {
                        return pieOuter(i(t), rx - .5, ry - .5, h);
                    };
                }
                function textTweenX(a) {
                    var i = d3.interpolate(this._current, a);
                    this._current = i(0);
                    return function (t) {
                        return 0.6 * rx * Math.cos(0.5 * (i(t).startAngle + i(t).endAngle));
                    };
                }
                function textTweenY(a) {
                    var i = d3.interpolate(this._current, a);
                    this._current = i(0);
                    return function (t) {
                        return 0.6 * rx * Math.sin(0.5 * (i(t).startAngle + i(t).endAngle));
                    };
                }

                var _data = d3.layout.pie().sort(null).value(function (d) {
                    return d.value;
                })(data);

                d3.select("#" + id).selectAll(".innerSlice").data(_data)
                        .transition().duration(750).attrTween("d", arcTweenInner);

                d3.select("#" + id).selectAll(".topSlice").data(_data)
                        .transition().duration(750).attrTween("d", arcTweenTop);

                d3.select("#" + id).selectAll(".outerSlice").data(_data)
                        .transition().duration(750).attrTween("d", arcTweenOuter);

                d3.select("#" + id).selectAll(".percent").data(_data)
                        .duration(750)
                        .attrTween("x", textTweenX).attrTween("y", textTweenY).text(getPercent);
                d3.select("#" + id).selectAll(".midlabels").data(_data)
                        .duration(750)

                d3.select('#' + id).selectALl('.polyLine').data(_data).duration(750);
                d3.select('#' + id).selectAll('.tooltips').data(_data).duration(750);
            }

            Donut3D.draw = function (id, label, line, data, x /*center x*/, y/*center y*/,
                    rx/*radius x*/, ry/*radius y*/, h/*height*/, ir/*inner radius*/) {

                var _data = d3.layout.pie().sort(null).value(function (d) {
                    return d.current;
                })(data);

                var slices = d3.select("#" + id).append("g").attr("transform", "translate(" + x + "," + y + ")")
                        .attr("class", "slices")


                slices.selectAll(".innerSlice").data(_data).enter().append("path").attr("class", "innerSlice")
                        .style("fill", function (d) {
                            return d3.hsl(d.data.color).darker(0.7);
                        }).style('opacity', 0.6)
                        .attr("d", function (d) {
                            return pieInner(d, rx + 0.5, ry + 0.5, h, ir);
                        })
                        .each(function (d) {
                            this._current = d;
                        });

                slices.selectAll(".topSlice").data(_data).enter().append("path").attr("class", "topSlice")
                        .style("fill", function (d) {
                            return d.data.color;
                        })
                        .style("stroke", function (d) {
                            return d.data.color;
                        }).style('opacity', 0.6)
                        .attr("d", function (d) {
                            return pieTop(d, rx, ry, ir);
                        })
                        .each(function (d) {
                            this._current = d;
                        }).on('mouseover', function (d) {
                    $("#tooltip")
                            .html("<span style='text-align:center;display:block;'><b>" + d.data.label + "</b></span><hr style='margin-top:2px;margin-bottom:4px;'>Current :<b>" + d.data.current + "%</b></br>Prev :<b>" + d.data.prev + "%</b>")
                            .show();
                })
                        .on('mousemove', function (d) {
                            $("#tooltip")
                                    .css('left', (d3.event.pageX + 10) + "px")
                                    .css('top', (d3.event.pageY - 10) + "px")
                        })
                        .on('mouseout', function (d) {
                            $("#tooltip").html('').hide();
                        });

                slices.selectAll(".outerSlice").data(_data).enter().append("path").attr("class", "outerSlice")
                        .style("fill", function (d) {
                            return d3.hsl(d.data.color).darker(0.7);
                        })
                        .attr("d", function (d) {
                            return pieOuter(d, rx - .5, ry - .5, h);
                        })
                        .each(function (d) {
                            this._current = d;
                        });


                slices.selectAll(".percent").data(_data).enter().append("text").attr("class", "percent")

                        .attr("x", function (d) {
                            var firx = 1.2 * rx * Math.cos(0.5 * (d.startAngle + d.endAngle));

                            if (firx < 0) {
                                var lastx = parseInt(firx) - 12;

                            } else {
                                var lastx = parseInt(firx) + 12
                            }

                            return lastx;
                        })
                        .attr("y", function (d) {
                            var firy = 1.2 * ry * Math.sin(0.5 * (d.startAngle + d.endAngle));
                            if (firy < 0) {
                                var lasty = parseInt(firy) - 12;

                            } else {
                                var lasty = parseInt(firy) + 12
                            }
                            return lasty
                        })
                        .text(function (d) {
                            if (d.data.current) {
                                return d.data.label;
                            }
                        })


                slices.selectAll(".polyline").data(_data).enter().append('polyline').attr('class', 'polyline')
                        .attr("points", function (d) {
                            var firx = 1.2 * rx * Math.cos(0.5 * (d.startAngle + d.endAngle));
                            var firy = 1.2 * ry * Math.sin(0.5 * (d.startAngle + d.endAngle));

                            var secx = 1 * rx * Math.cos(0.5 * (d.startAngle + d.endAngle));
                            var secy = 1 * ry * Math.sin(0.5 * (d.startAngle + d.endAngle));
                            var lastx, lasty;

                            if (firx < 0) {
                                var lastx = parseInt(firx) - 10;

                            } else {
                                var lastx = parseInt(firx) + 10
                            }

                            if (firy < 0) {
                                var lasty = parseInt(firy) - 10;

                            } else {
                                var lasty = parseInt(firy) + 10
                            }
                            if (d.data.current) {
                                return  secx + "," + secy + "," + firx + "," + firy + "," + lastx + "," + lasty;
                            }

                        }).style("fill", "none").attr('stroke', "#000000").style('stroke-width', '1px');

            }

            this.Donut3D = Donut3D;

            if (chart == "channel") {
                var labels = ['Retail', 'Mobile', 'Web']
                var colors = ['#3366CC', '#DC3912', '#FF9900']
            }
            if (chart == "revenue") {
                var labels = ['Sportsbook', 'Poker', 'Casino']
                var colors = ['#3366CC', '#DC3912', '#FF9900']
            }
            if (chart == "age") {
                var labels = ['Concrete', 'Plaster', 'Paint', 'Customer']
                var colors = ['#3366CC', '#DC3912', '#FF9900', '#109618']
            }
            if (chart == "productvariant")
            {
                var labels = ["Sports", "Prematch", "Livebook", "Casino", "Live", "Virtual", "Casino"]
                var colors = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#cd82ad', '#2f4074']
            }
            if (chart == "sourcetraffic") {
                var labels = ["Affiliates", "Direct", "Channels", "Misc"]
                var colors = ['#3366CC', '#DC3912', '#FF9900', '#109618']
            }
            var svg = d3.select('#' + chartid).append('svg:svg').attr("width", 350).attr("height", 250);
            svg.append('g').attr("id", chartid + 'g').attr('class', 'gclass');
            var currentid = chartid + 'g';
            svg.append('g').attr('id', chartid + 'lablel');
            var lebelid = chartid + 'lablel';
            svg.append('g').attr('id', chartid + 'line');
            svg.append('text').attr('x', parseInt(svg.attr('width') / 2) - 45).attr('y', parseInt(svg.attr('height') / 2) + 30).text(county);
            var lineid = chartid + 'line';
            Donut3D.draw(currentid, lebelid, lineid, randomData(), 150, 150, 92, 50, 13, 0.6);
            function randomData() {
                return data.map(function (d, i) {
                    return {label: labels[i], current: d.current, prev: d.prev, color: colors[i]};

                });
            }

        }
    }
    //-----------------------------------------------------------------------------
    /*
     * Function for data preparation for keyvalu driver report
     * @param {array} data
     * @param {string} country_name
     * @returns {}
     */
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
                }
            }
        })
        /*for sparkline graphs (kvd)*/
        var trends = "true";
        Highcharts.SparkLine = function (a, b, c) {
            console.log(a, b, c)
            trends = "false";

            var colors = [];
            var width, margin, height;
            var max = d3.max(b.series[0].data, function (d) {
                return d;
            });
            var min = d3.min(b.series[0].data, function (d) {
                return d;
            });

            if (b.series[0].data.length == 13) {
                width = 120;


                b.series[0].data.forEach(function (d, i) {
                    /*if any month values is negative we are making that as zero so no negative graph will appear*/
                    if (d < 0) {

                        b.series[0].data[i] = 0;
                    }
                    if (d == max) {
                        colors.push("green")
                    } else if (d == min) {
                        colors.push("red")
                    } else {
                        if (i == 0) {
                            colors.push("orange")
                        } else if (i == b.series[0].data.length - 1) {
                            colors.push("orange")
                        }
                        else {
                            colors.push("blue")
                        }
                    }
                })
            } else {
                width = 80
                b.series[0].data.forEach(function (d, i) {
                    /*if any month values is negative we are making that as zero so no negative graph will appear*/
                    if (d < 0) {

                        b.series[0].data[i] = 0;
                    }
                    if (d == max) {
                        colors.push("green")
                    } else if (d == min) {
                        colors.push("red")
                    } else {
                        if (i == 0) {
                            colors.push("blue")
                        } else if (i == b.series[0].data.length - 1) {
                            colors.push("blue")
                        }
                        else {
                            colors.push("blue")
                        }

                    }

                })
            }
            var hasRenderToArg = typeof a === 'string' || a.nodeName,
                    options = arguments[hasRenderToArg ? 1 : 0],
                    defaultOptions = {
                        chart: {
                            renderTo: (options.chart && options.chart.renderTo) || this,
                            backgroundColor: null,
                            type: 'column',
                            margin: [1, 2, 0, 2],
                            width: width,
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
                                colorByPoint: true,
                                minPointLength: 3
                            },
                        },
                    };
            options = Highcharts.merge(defaultOptions, options);

            return hasRenderToArg ?
                    new Highcharts.Chart(a, options, c) :
                    new Highcharts.Chart(options, b);

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

        /*Function for add commas
         * 
         * @param {string} nStr
         * @returns {String}
         */
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
//--------------------------------------------------------------------------------
    /*
     * Function for get data for executive report and handle for plot
     * @param {integer} reportid
     * @param {integer} clientid
     * @returns {}
     */
    function getExecutiveSumary(reportid, clientid) {

        $.blockUI({css: {color: '#0088cc'}, overlayCSS: {backgroundColor: 'transparent'}, message: '<img src="img/ajax-loader.gif"></img>'});

        /*appending client id to text area*/
        $('#text1_executive').attr('class', "text_" + clientid);
        if (reportid != '') {
            var current_reportid = reportid
        } else {
            var current_reportid = '';
        }

        $.post(
                'getExecutiveSummaryReport',
                {
                    'id': clientid,
                    'report_id': current_reportid
                },
        function (response) {
            if (response.status == "200") {
                var array_Data_executivesummary = [];
                var country_names_for_exe = [];
                $('#text1_executive').empty();

                response.text_Report.forEach(function (d, i) {

                    $('.jqte_editor').append(d.text1);
                    $('#text1_executive').append(d.text1);

                })
                handleDataForNan(response.line_of_text)
                response.line_of_text.forEach(function (d, i) {
                    if (i != 0 && i != 1)
                        array_Data_executivesummary.push({
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
                            'month-24': d[52],
                            '3 month avg diff with Month CY': d[53],
                            'Deviation % 3 month avg and Month CY': d[54],
                        })

                });
                /*country names*/

                array_Data_executivesummary.forEach(function (d, i) {

                    if (country_names_for_exe.indexOf(d['Country']) == -1 && d['Country']) {
                        country_names_for_exe.push(d['Country'])
                    }
                })
                $('.contry_names_for_exe').empty();
                if (country_names_for_exe != '') {

                    country_names_for_exe.forEach(function (d, i) {

                        $('.contry_names_for_exe').append('<option value=' + d + '>' + d + '</option>');
                    })
                    if ($('.contry_names_for_exe').val() != '') {
                        var contryname = $('.contry_names_for_exe').val();

                        executiveReportHandling(contryname, array_Data_executivesummary)
                    }
                    $('.contry_names_for_exe').on('change', function () {
                        executiveReportHandling($(this).val(), array_Data_executivesummary);
                    })
                }

            } else {

            }
        }, 'json');
    }
//------------------------------------------------------------------------------
    /*
     * Function for draw line
     * @param {type} title
     * @param {type} id
     * @param {type} d1
     * @returns {}
     */
    function drawLine(title, id, d1) {
        var d = new Date();

        var prevmonthNum = d.getMonth();

        /*handling for nan and empty month values*/
        var i = 0;
        for (i = 1; i <= 24; i++) {

            if (d1['month-' + i] == '' || d1['month-' + i] == 'N/A' || d1['month-' + i].indexOf('#') != -1 || d1['month-' + i] == "#DIV/0!" || d1['month-' + i] == "NaN") {

                d1['month-' + i] = "0";
            }

        }

        /*calculation for indicators*/
        var indicator = deviationCaluclationForIndicators(d1['MTDDev%Actuals'].split('%')[0], d1['Deviation metrics'])


        var data_2014 = [];
        var data_2015 = [];
        for (i = prevmonthNum; i <= parseInt(prevmonthNum) + 11; i++) {
            var currentarray = ["", parseInt(d1['month-' + i].split(',').join("").split('%').join(''))];
            data_2014.push(currentarray);


        }

        for (i = prevmonthNum - 1; i >= 1; i--) {

            var currentarray = ["", parseInt(d1['month-' + i].split(',').join("").split('%').join(''))];
            data_2015.push(currentarray)
        }
        data_2015.push(["", parseInt(d1['month'].split(',').join("").split('%').join(''))])

        var chart = new Highcharts.Chart({
            chart: {
                renderTo: id,
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        fontSize: '8px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
            },
            title: {
                text: '<div class=' + indicator + ' ></div>',

            },
            plotOptions: {
                series: {
                    showInLegend: true,
                    marker: {
                        enabled: true
                    },
                }
            },
            series: [{
                    name: '2014' + title,
                    color: '#FF0000',
                    dashStyle: 'solid',
                    fontSize: '9px',
                    data: data_2014,
                    lineWidth: 1,
//                  showInLegend : false,
                    marker: {enabled: false}, /*for giving below required marker*/
                    marker : {symbol: 'circle', radius: 2},
                }, {
                    name: '2015' + title,
                    color: '#0066FF',
                    fontSize: '9px',
                    dashStyle: 'solid',
                    data: data_2015,
                    lineWidth: 1,
                    marker: {enabled: false}, /*for giving below required marker*/
                    marker : {symbol: 'circle', radius: 2},
                }],
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + ":" + addCommas(this.y) + '</b>';
                }
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'top',
                itemStyle: {
                    fontWeight: 'bold',
                    fontSize: '9px'
                }
     
            }

        });
        /*for appending indicator*/
        var lastrowbigarray = ['NetGamingRevenue_overall', 'NetGamingRevenue_onlines', 'NetGamingRevenue_retails', 'AnonymousPlayerStakeShare_retails', 'AnonymousPlayerRevenueShare_retails', 'AnonymousPlayerMargins_retails']
        if (indicator) {
            if (lastrowbigarray.indexOf(id) != -1) {
                $('#' + id).append('<div class=' + indicator + ' style="margin-top:-39%;margin-left:97%"></div>');
            }
            else {
                $('#' + id).append('<div class=' + indicator + ' ></div>');
            }

        }
       
    $('#' + id).css({'height':"280px"});

    }
//--------------------------------------------------------------------
    /*
     * Function for column chart 
     * @returns {chart }
     */
    function columnChart() {
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'bridge_ytd',
                type: 'column'
            },
            title: {
                text: "Czec Republic Revenue Bridge YTD 2015 vs YTD 2014"
            },
            xAxis: {
                categories: ['YTD 2014', 'Retail Business Perfromance', 'Mobile Growth', 'Web Channel Performance', 'Bonus Cost Impact', 'Tax Liablity Impact', 'Increase in cross channel Activity', 'Other Reasons', 'YTD 2015']
            },
            yAxis: {tickInterval: 50000, min: 600000, max: 800000},
            plotOptions: {
                series: {
                    showInLegend: false,
                    pointWidth: 50
                }
            },
            series: [{
                    data: [{
                            low: 600000,
                            y: 783618,
                            color: "blue",
                        }, {
                            low: 720000,
                            y: 783618,
                            color: "red",
                        }, {
                            low: 720000,
                            y: 750000,
                            color: "green",
                        }, {
                            low: 750000,
                            y: 790000,
                            color: "green",
                        },
                        {
                            low: 780000,
                            y: 790000,
                            color: "red",
                        },
                        {
                            low: 780000,
                            y: 790000,
                            color: "red",
                        },
                        {
                            low: 780000,
                            y: 790000,
                            color: "green",
                        },
                        {
                            low: 780000,
                            y: 790000,
                            color: "green",
                        },
                        {
                            low: 600000,
                            y: 783631,
                            color: "blue",
                        },
                    ]
                }]

        });
    }
    /*------------------------------------------------------------------------------*/
    /*
     * Function for add commas
     * @param {number} nStr
     * @returns {String}
     */
    function addCommas(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
//---------------------on click of update on textarea---------------------------
    $('#update_text_executive').on('click', function () {
        var text1 = $('#text1_executive').val();


        var current_client_id = $('#text1_executive').attr('class').split('_')[1];

        $.post(
                'updateText',
                {
                    'id': current_client_id,
                    'text1': text1,
                },
                function (response) {



                }, 'json');
    });
//-----------------------------------------------------------------------------
    /**
     * Function for finding circle color based on deviation percentage and metric
     * @param {string} devitaionpercentage
     * @param {string} metric
     * @returns {String}
     */
    function deviationCaluclation(devitaionpercentage, metric) {
        if (devitaionpercentage > 0) {
            if (metric == "Positive") {
                var circle1 = "executive_green_circle";
            } else {
                var circle1 = "executive_red_circle";
            }

        } else {
            if (devitaionpercentage != "N/A" && devitaionpercentage != '') {

                if (devitaionpercentage > -2.5) {
                    if (metric == "Positive") {
                        var circle1 = "executive_red_circle";
                    } else {
                        var circle1 = "executive_green_circle";
                    }

                } else {
                    if (metric == "Positive") {
                        var circle1 = "executive_yellow_circle";
                    }

                    else if (metric == "Negative") {
                        var circle1 = "executive_green_circle";
                    }
                }
            }
        }
        return circle1
    }
//-----------------------------------------------------------------------------
    /*
     * function for handle data when nan and empty values 
     * and also handling divide by 1000 
     * and also add commas for total data (for executive and keyvalue drive report)
     * @param {type} data
     * @returns {}
     */
    /*Function to handle data before applying code for data*/
    function handleDataForNan(data) {
        var j;
        data.forEach(function (d, i) {
            if (i > 1 && d && d.length > 0) {
                /*for rounding values*/
                for (j = 10; j <= 56; j++) {
                    if (j != 15 && j != 14 && j != 18 && j != 23 && j != 25 && j != 27) {
                        if (d[j] && d[j].indexOf('%') == -1 && d[j] != "N/A" && d[j] != '') {

                            data[i][j] = addCommas(Math.round(d[j].split(',').join("")))
                        }
                    }
                    if (d[j] && d[j] != '' && d[j].indexOf('%') != -1) {
                        data[i][j] = parseFloat(d[j].split('%').join("")).toFixed(1) + "%"
                    }
                }

//------------------------------------------------------------------------------
                /*divide by 1000 */
                for (j = 10; j <= 56; j++) {

                    if (j == 24 || j == 26 || j == 13 || j == 22) {
                        if (d[j] && d[j].indexOf('%') == -1 && d[j] != "N/A" && d[j] != '') {

                            data[i][j] = addCommas(Math.round(((d[j].split(',').join("")) / 1000)))
                        }

                    }
                    if (j == 14 || j == 18 || j == 23 || j == 25 || j == 27) {
                        if (d[j] && d[j] != "N/A" && d[j] != '') {
                            data[i][j] = parseFloat(d[j].split('%').join("")).toFixed(1) + "%"
                        }

                    }

                }

                for (j = 2; j <= 56; j++) {

  /*for common in overal/retail /online channels*/
                    var commonArray = ['MarketShare', 'UniqueActivePlayers', 'PlayerYield', 'ActivePlayerDays', 'StakeAmountPerActivePlayerDays', 'PlayerFrequency', 'NetGrossWinMargin', 'BonusCostAs%OfNetGrossWin', 'FirstTimeDepositors']

                    if (commonArray.indexOf(d[2]) == -1) {

                        if (j == 11 || j == 21 || j == 20) {
                            if (d[j] && d[j].indexOf('%') == -1 && d[j] != "N/A" && d[j] != '') {
                                data[i][j] = addCommas(Math.round(((d[j].split(',').join("")) / 1000)));
                            }

                        }
                    }
                    if (commonArray.indexOf(d[2]) == -1) {
                        if (j == 10 || j == 12 || j == 19) {
                            if (d[j] && d[j].indexOf('%') == -1 && d[j] != "N/A" && d[j] != '') {
                                if (d[6] == "Overall") {
                                    if (d[2] != "" && d[2] != "") {

                                        data[i][j] = addCommas(Math.round(((d[j].split(',').join("")) / 1000)));
                                    }
                                } else if (d[6] == "Online") {
                                    data[i][j] = addCommas(Math.round(((d[j].split(',').join("")) / 1000)));

                                } else if (d[6] == "Retail") {
                                    if (j == 10 || j == 12) {
                                        if (d[2] != "") {
                                            data[i][j] = addCommas(Math.round(((d[j].split(',').join("")) / 1000)));
                                        }
                                    } else {
                                        data[i][j] = addCommas(Math.round(((d[j].split(',').join("")) / 1000)));

                                    }

                                }
                            }

                        }
                    }
                }
            }

        })

        return data;
    }


    //--------------------------------------------------------------------------
    /*
     * Function for executive report handling
     * @param {string} currentcountry
     * @param {array} array_Data_executivesummary
     * @returns {}
     */

    function executiveReportHandling(currentcountry, array_Data_executivesummary) {
        var circle1 = '';
        var circle3 = '';
        var circle2 = '';
        var circle4 = '';
        $('.executivesummary_report').css({display: 'block'});
        $('.countrynamesdiv').css({display: 'block'});
        $.unblockUI();
        /*----------------------apending data to top 3 tables --------------*/
        $('#overal_financial_table_data1').empty();
        $('#overal_financial_table_data2').empty();
        $('#online_financial_table_data1').empty();
        $('#online_financial_table_data2').empty();
        $('#retail_financial_table_data1').empty();
        $('#retail_financial_table_data2').empty();
        $('.retailsmallheading').empty();
        $('.overallsmallheding').empty();
        $('.onlinesmallheding').empty();
        $('.smallheadigsecondtab').empty();
        var marketshareanalysis_array = ['Gross Win', 'H2GC Market Size'];
        var customermodel_Array_overall = ['Unique Active Players', 'Database Players', 'First Time Depositors', 'Player Churn Rate', 'Player Yield', 'Active Player Days', 'Stake Amount', 'Stake Amount Per Active Player Days', 'Player Frequency', 'Net Gross Win Margin', 'Bonus Cost As % Of Net Gross Win']
        var customermodel_Array_online = ['Unique Active Players', 'Player Yield', 'Active Player Days', 'Stake Amount', 'Stake Amount Per Active Player Days', 'Player Frequency', 'Net Gross Win Margin', 'Bonus Cost As % Of Net Gross Win']
        var customermodel_Array_retail = ['Unique Active Players', 'Player Yield', 'Active Player Days', 'Stake Amount', 'Stake Amount Per Active Player Days', 'Player Frequency', 'Gross Win', 'Net Gross Win']
        var businesssummary_array_overall = ['Gross Win', 'Betting Tax', 'Net Gross Win', 'Bonus Cost', 'Net Gaming Revenue', 'Marketing Spend', 'Net Contribution', 'EBITDA']
        var businesssummary_array_online = ['Gross Win', 'Betting Tax', 'Net Gross Win', 'Bonus Cost', 'Net Gaming Revenue', 'Marketing Spend', 'Net Contribution']
        var businesssummary_array_retail = ['Gross Win', 'Betting Tax', 'Net Gross Win', 'Bonus Cost', 'Net Gaming Revenue', 'Marketing Spend', 'Net Contribution', 'Stake Amount', 'Net Gross Win Margin', 'Bonus Cost As % Of Net Gross Win']
        var linechart_array = ['Unique Active Players', 'Database Players', 'First Time Depositors', 'Player Churn Rate', 'Player Yield', 'Stake Amount Per Active Player Days', 'Player Frequency', 'Net Gross Win Margin', 'Net Gaming Revenue']
        var linechart_array_online = ['Mobile Stake Amount Share', 'Web Stake Amount Share', 'Mobile Revenue Share', 'Web Revenue Share', 'Mobile Net Gross Win Margins', 'Web Net Gross Win Margins', 'Unique Active Players', 'Database', 'First Time Depositors', 'Player Churn Rate', 'Player Yield', 'Stake Amount Per Active Player Days', 'Player Frequency', 'Net Gross Win Margin', 'Net Gaming Revenue']
        var linechart_array_retail = ['Anonymous Player Stake Share', 'Anonymous Player Revenue Share', 'Anonymous Player Margins', 'Unique Active Players', 'Database', 'First Time Depositors', 'Player Churn Rate', 'Player Yield', 'Stake Amount Per Active Player Days', 'Player Frequency', 'Net Gross Win Margin', 'Net Gaming Revenue']
/*------------------------------------------------------------------------------*/

        var financial_array = ['net gaming revenue', 'net contribution']

        /*appending cournty names to tables*/
        if (currentcountry == "CZ") {
            $('.overallsmallheding').append("<h5>(+/- Revenues and NetContribution vsPlan and Last Year) in 000' " + "     " + currentcountry + "kr</h5>");
            $('.smallheadigsecondtab').append("<b>in 000'" + currentcountry + "kr</b>")
        } else if (currentcountry == "PL") {
            $('.overallsmallheding').append("<h5>(+/- Revenues and NetContribution vsPlan and Last Year) in 000' " + "     " + currentcountry + "N</h5>");
            $('.smallheadigsecondtab').append("<b>in 000'" + currentcountry + "N</b>")
        } else if (currentcountry == "SK") {
            $('.overallsmallheding').append("<h5>(+/- Revenues and NetContribution vsPlan and Last Year) in 000' EURO</h5>");
            $('.smallheadigsecondtab').append("<b>in 000' EURO</b>")
        }

        $('.onlinesmallheding').append("");
        $('.retailsmallheading').append("");

        /*for finanical tables for overall ,online, retail*/
        array_Data_executivesummary.forEach(function (d1, i) {
            if (d1['Country'] == currentcountry) {
                /*for overall*/
                if (financial_array.indexOf(d1['Key_Value_Driver'].toLowerCase()) != -1 && d1['Channel'] == "Overall") {
                    financialtablesappending(d1, 'overal_financial_table_data1', 'overal_financial_table_data2')
                }
                /*for online*/
                if (financial_array.indexOf(d1['Key_Value_Driver'].toLowerCase()) != -1 && d1['Channel'] == "Online") {
                    financialtablesappending(d1, 'online_financial_table_data1', 'online_financial_table_data2')
                }
                /*for retail*/
                if (financial_array.indexOf(d1['Key_Value_Driver'].toLowerCase()) != -1 && d1['Channel'] == "Retail") {
                    financialtablesappending(d1, 'retail_financial_table_data1', 'retail_financial_table_data2')
                }
            }
        });
//-------------------------------------------------------------------------------

        $('.marketsmallheading').empty();
        $('#market_share_analysis1').empty();
        $('#market_share_analysis2').empty();
        $('#market_share_analysis3').empty();
        if (currentcountry == "CZ") {
            $('.marketsmallheading').append("<h5>in 000'" + currentcountry + "kr</h5>");
        } else if (currentcountry == "PL") {
            $('.marketsmallheading').append("<h5>in 000'" + currentcountry + "N</h5>");
        } else if (currentcountry == "SK") {
            $('.marketsmallheading').append("<h5>in 000' EURO</h5>");
        }

        /*for market share analysis*/
        array_Data_executivesummary.forEach(function (d1, i) {

            if (d1['Country'] == currentcountry) {
//---------------------for overall sports---------------------------------
                if (marketshareanalysis_array.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Overall") {

                    marketshareanalysisappending(d1, 'market_share_analysis1');
                }

                if (d1['Key_Value_Driver'] == "Market Share" && d1['Channel'] == "Overall") {
                    marketshareanalysisappending(d1, 'market_share_analysis1');

                    $('#market_share_analysis1').append('<tr><td></td><td></td><td></td><td></td><td></td></tr>')
                }
                if (d1['Key_Value_Driver'] == "Market Share" && d1['Channel'] == "Online") {
                    marketshareanalysisappending(d1, 'market_share_analysis1');


                    $('#market_share_analysis1').append('<tr><td></td><td></td><td></td><td></td><td></td></tr>')
                }
                if (d1['Key_Value_Driver'] == "Market Share" && d1['Channel'] == "Retail") {
                    marketshareanalysisappending(d1, 'market_share_analysis1');

                }
            }

//---------------------for online business--------------------------------------
            if (d1['Country'] == currentcountry) {
                if (marketshareanalysis_array.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Online") {
                    marketshareanalysisappending(d1, 'market_share_analysis2');

                }
//---------------------for Retail business--------------------------------------
                if (marketshareanalysis_array.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Retail") {
                    marketshareanalysisappending(d1, 'market_share_analysis3');

                }
            }
        });
//------------------overall business // online business // retails business-----
        $('#overall_business_graph').empty();
        $('#online_business_graph').empty();
        $('#retail_business_graph').empty();

        businesssummary_array_overall.forEach(function (d) {

            var currenttrid = d.split(' ').join("").split('%').join("")
            $('#overall_business_graph').append('<tr id=overallbusiness' + currenttrid + '></tr>')
        })
        businesssummary_array_online.forEach(function (d) {

            var currenttrid = d.split(' ').join("").split('%').join("")
            $('#online_business_graph').append('<tr id=onlinebusiness' + currenttrid + '></tr>')
        });
        businesssummary_array_retail.forEach(function (d) {

            var currenttrid = d.split(' ').join("").split('%').join("")
            $('#retail_business_graph').append('<tr id=retailbusiness' + currenttrid + '></tr>')
        })
        array_Data_executivesummary.forEach(function (d1, i) {

            if (d1['Country'] == currentcountry) {
                if (businesssummary_array_overall.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Overall") {
                    businesssummarytables(d1, 'overallbusiness');
                }
                if (businesssummary_array_online.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Online") {
                    businesssummarytables(d1, 'onlinebusiness')

                }
                if (businesssummary_array_retail.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Retail") {
                    businesssummarytables(d1, 'retailbusiness')


                }
            }
        });

//-------------------------Customer model graph overall /online/retail----------
        $('#overall_customermodel_graph').empty();
        $('#online_customermodel_graph').empty();
        $('#retail_customermodel_graph').empty();
        customermodel_Array_overall.forEach(function (d) {
            var currenttrid = d.split(' ').join("").split('%').join("")

            $('#overall_customermodel_graph').append('<tr id=overallcustomer' + currenttrid + '></tr>')
        })
        customermodel_Array_online.forEach(function (d) {

            var currenttrid = d.split(' ').join("").split('%').join("")
            $('#online_customermodel_graph').append('<tr id=onlinecustomer' + currenttrid + '></tr>')
        });
        customermodel_Array_retail.forEach(function (d) {

            var currenttrid = d.split(' ').join("").split('%').join("")
            $('#retail_customermodel_graph').append('<tr id=retailcustomer' + currenttrid + '></tr>')
        })

        array_Data_executivesummary.forEach(function (d1, i) {
            if (d1['Country'] == currentcountry) {
                if (customermodel_Array_overall.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Overall") {

                    businesssummarytables(d1, 'overallcustomer');


                }
                if (customermodel_Array_online.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Online") {
                    businesssummarytables(d1, 'onlinecustomer');


                }
                if (customermodel_Array_retail.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Retail") {
                    businesssummarytables(d1, 'retailcustomer')

                }
            }
        });
//--------------customer model analysis line chart----------------------------

        var revenue_Array = ['Revenue Share', 'Web Revenue Share', 'Mobile Revenue Share']
        array_Data_executivesummary.forEach(function (d1, i) {
            if (d1['Country'] == currentcountry) {
                /* overall line chart tab */
                if (linechart_array.indexOf(d1['Key_Value_Driver']) != -1) {

                    if (d1['Channel'] == "Overall") {
                        var idforlinehcartdiv = d1['KVDName'] + "_overall"

                        drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                        if (d1['Key_Value_Driver'] == "Player Churn Rate") {

                        }
                    }
                }
                if (d1['Key_Value_Driver'] == "Revenue Share (Net Gross Win share)" && d1['Channel'] == "Retail") {
                    var idforlinehcartdiv = "RevenueShare_retail"

                    drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                }

                if (revenue_Array.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Online") {
                    var idforlinehcartdiv = d1['KVDName'] + "_online"

                    drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                }
                if (revenue_Array.indexOf(d1['Key_Value_Driver']) != -1 && d1['Channel'] == "Online") {
                    var idforlinehcartdiv = d1['KVDName'] + "_online"

                    drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                }
                if (d1['Key_Value_Driver'] == "Prematch Revenue Share" && d1['Product'] == "Prematch") {
                    var idforlinehcartdiv = d1['KVDName'] + "_prematch"

                    drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                }
                if (d1['Key_Value_Driver'] == "Livebook Revenue Share" && d1['Product'] == "Livebook") {
                    var idforlinehcartdiv = d1['KVDName'] + "_livebook"

                    drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                }
  /*------------------------------------------------------------------------------*/
                /* online line chart tab*/
                if (linechart_array_online.indexOf(d1['Key_Value_Driver']) != -1) {
                    if (d1['Channel'] == "Online") {

                        var idforlinehcartdiv = d1['KVDName'] + "_onlines"

                        drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                    }
                }
 /*----------------------------------------------------------------------------------*/
                /*retail line chart tab*/
                if (linechart_array_retail.indexOf(d1['Key_Value_Driver']) != -1) {
                    if (d1['Channel'] == "Retail") {
                        var idforlinehcartdiv = d1['KVDName'] + "_retails"

                        drawLine(d1['Key_Value_Driver'], idforlinehcartdiv, d1);
                    }
                }
            }

        });
//-------------------------------------------------------------------------------
        /*for anonymous customers for retail*/
        $('#anonymousdata').empty();
        var anonymousarray = ['Stake Amount', 'Gross Win', 'Net Gross Win']
        anonymousarray.forEach(function (d) {

            var currenttrid = d.split(' ').join("").split('%').join("")
            $('#anonymousdata').append('<tr id=retailanonymous' + currenttrid + '></tr>')
        })
        array_Data_executivesummary.forEach(function (d, i) {
            if (d['Channel'] == "Retail" && d['Country'] == currentcountry) {
                if (anonymousarray.indexOf(d['Key_Value_Driver']) != -1) {
                    businesssummarytables(d, "retailanonymous");
                }
            }
        })
//---------------------------------------------------------------------------
        /*for sparkline executive graphs*/
        var trends = "true";
        Highcharts.SparkLine = function (a, b, c) {

            trends = "false";

            var colors1 = [];
            var width, margin, height;
            var max = d3.max(b.series[0].data, function (d) {
                return d;
            });
            var min = d3.min(b.series[0].data, function (d) {
                return d;
            });

            if (b.series[0].data.length == 12) {
                width = 120;


                b.series[0].data.forEach(function (d, i) {
                    if (d < 0) {

                        b.series[0].data[i] = 0;
                    }
                    if (d == max) {

                        colors1.push("green")
                    } else if (d == min) {
                        colors1.push("red")
                    } else {
                        if (i == 0) {

                            colors1.push("orange")
                        } else if (i == b.series[0].data.length - 1) {
                            colors1.push("orange")
                        }
                        else {
                            colors1.push("blue")
                        }
                    }
                })
            }
            var hasRenderToArg = typeof a === 'string' || a.nodeName,
                    options = arguments[hasRenderToArg ? 1 : 0],
                    defaultOptions = {
                        chart: {
                            renderTo: (options.chart && options.chart.renderTo) || this,
                            backgroundColor: null,
//                              borderWidth: 0,
                            type: 'column',
                            margin: [1, 2, 0, 2],
                            width: width,
//                             
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
                        colors: colors1,
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
                                colorByPoint: true,
                                minPointLength: 3

                            },
                        },
                    };
            options = Highcharts.merge(defaultOptions, options);

            return hasRenderToArg ?
                    new Highcharts.Chart(a, options, c) :
                    new Highcharts.Chart(options, b);
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
                            return '<b>' + addCommas(this.y) + '</b>';
                        }
                    },
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

//-----------------------------------------------------------------------------      
        /*
         * Function for appending all financial tables  based on data and id's
         * for executive summary report
         * @param {array} d1
         * @param {string} id1
         * @param {string} id2
         * @returns {}
         */
        function financialtablesappending(d1, id1, id2) {

            circle1 = deviationCaluclation(d1['MTDDev%plan'].split('%')[0], d1['Deviation metrics']);
            circle2 = deviationCaluclation(d1['YTDDev%plan'].split('%')[0], d1['Deviation metrics']);
            circle3 = deviationCaluclation(d1['MTDDev%Actuals'].split('%')[0], d1['Deviation metrics']);
            var circle4 = deviationCaluclation(d1['YTDDev %Actuals'].split('%')[0], d1['Deviation metrics']);
            $('#' + id1).append('<tr style="background-color:#F2F2F2"><td style="min-width: 150px;">' + d1['Key_Value_Driver'] + '</td><td class="rowalignment">' + addCommas(d1['MTDDifferenceplan']) + '</td><td style="min-width: 100px"><div class=' + circle1 + '></div><div class="counter">' + d1['MTDDev%plan'] + '</div></td><td class="rowalignment">' + d1['YTDDifferencePlan'] + '</td><td style="min-width: 100px";><div class=' + circle2 + '></div><div class="counter">' + d1['YTDDev%plan'] + '</div></td></tr>');
            $('#' + id2).append('<tr style="background-color:#F2F2F2"><td style="min-width: 150px;">' + d1['Key_Value_Driver'] + '</td><td class="rowalignment">' + addCommas(d1['MTDDifferenceActuals']) + '</td><td style="min-width: 100px"><div class=' + circle3 + '></div><div class="counter">' + d1['MTDDev%Actuals'] + '</div></td><td class="rowalignment">' + d1['DifferenceYTDActuals'] + '</td><td style="min-width: 100px"><div class=' + circle4 + '></div><div class="counter">' + d1['YTDDev %Actuals'] + '</div></td></tr>');
        }

//-----------------------------------------------------------------------------
        /*
         * Function for appending market share analysis table with based on id 
         * for execution summary report
         * and data
         * @param {data} d1
         * @param {id} id
         * @returns {}
         */
        function marketshareanalysisappending(d1, id) {
            var kvdname = ''
            var bckgcolor = '';
            circle1 = deviationCaluclation(d1['YTDDev %Actuals'].split('%')[0], d1['Deviation metrics']);
            /*based on kvd names*/
            if (d1['Key_Value_Driver'] == "Gross Win" && d1['Channel'] == "Overall") {
                kvdname = "Fortuna's" + " " + d1['Key_Value_Driver'];

            } else if (d1['Key_Value_Driver'] == "Market Share") {
                if (d1['Channel'] == "Online") {
                    kvdname = "Online Market Share (%)";
                    bckgcolor = "#C4D9F2"
                } else if (d1['Channel'] == "Overall") {
                    kvdname = "Market Share (%)";
                    bckgcolor = "#C4D9F2"
                } else {
                    kvdname = "Retail Market Share (%)";
                    bckgcolor = "#C4D9F2"
                }

            } else if (d1['Key_Value_Driver'] == "H2GC Market Size") {
                if (d1['Channel'] != "Overall") {
                    kvdname = "Market Size";
                    bckgcolor = "#C4D9F2"
                } else {
                    kvdname = "Market Size";
                }
            } else {
                kvdname = d1['Key_Value_Driver'];
            }
            /*endof kvd names conditions*/

            $('#' + id).append('<tr style="background-color:' + bckgcolor + '"><td>' + kvdname + '</td><td class="rowalignment">' + d1['YTD 2014'] + '</td><td class="rowalignment">' + d1['YTD 2015'] + '</td><td style="background-color: white; border:none;">&nbsp;</td><td class="rowalignment"><div class=' + circle1 + '></div></td><td class="rowalignment">' + d1['YTDDev %Actuals'] + '</td></tr>')
        }
//----------------------------------------------------------------------------

        /*Function for appending data to overall/retail/online business summary 
         * tables (second ,third, fourth tabs of execution 
         * summary report
         * @param {array} d1
         * @param {string} id
         * @returns {}
         */
        function  businesssummarytables(d1, id) {
            var minwidth = '';
            var minwidth1 = '';
            if (id == "retailanonymous") {
                minwidth = '220px';
                minwidth1 = '170px';
            } else {
                minwidth = '194px';
                minwidth1 = ''
            }
            var bckg_color = '';
            var fontweight = '';
            if (d1['Key_Value_Driver'] == "Unique Active Players" || d1['Key_Value_Driver'] == "Player Yield") {
                bckg_color = "#C4D9F2";
                fontweight = "bold";

            }
            var trendlines_array = '';
            circle1 = deviationCaluclation(d1['MTDDev%plan'].split('%')[0], d1['Deviation metrics']);
            circle3 = deviationCaluclation(d1['YTDDev%plan'].split('%')[0], d1['Deviation metrics']);
            circle2 = deviationCaluclation(d1['MTDDev%Actuals'].split('%')[0], d1['Deviation metrics']);
            circle4 = deviationCaluclation(d1['YTDDev %Actuals'].split('%')[0], d1['Deviation metrics']);
            if (d1['Key_Value_Driver'] == "Betting Tax" || d1['Key_Value_Driver'] == "Bonus Cost" || d1['Key_Value_Driver'] == "Marketing Spend") {
                trendlines_array = '"' + Math.abs(d1['month'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-1'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-2'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-3'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-4'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-5'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-6'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-7'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-8'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-9'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-10'].split(',').join("").split('%').join('')) + ", " + Math.abs(d1['month-11'].split(',').join("").split('%').join('')) + '"';
            } else {
                trendlines_array = '"' + d1['month'].split(',').join("").split('%').join('') + ", " + d1['month-1'].split(',').join("").split('%').join('') + ", " + d1['month-2'].split(',').join("").split('%').join('') + ", " + d1['month-3'].split(',').join("").split('%').join('') + ", " + d1['month-4'].split(',').join("").split('%').join('') + ", " + d1['month-5'].split(',').join("").split('%').join('') + ", " + d1['month-6'].split(',').join("").split('%').join('') + ", " + d1['month-7'].split(',').join("").split('%').join('') + ", " + d1['month-8'].split(',').join("").split('%').join('') + ", " + d1['month-9'].split(',').join("").split('%').join('') + ", " + d1['month-10'].split(',').join("").split('%').join('') + ", " + d1['month-11'].split(',').join("").split('%').join('') + '"';
            }
            $('#' + id + d1['Key_Value_Driver'].split(' ').join("").split('%').join("")).append('<td style="min-width:' + minwidth + ';background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['Key_Value_Driver'] + '</td><td class="trends" style="min-width:' + minwidth1 + ';background-color:' + bckg_color + ';font-weight:' + fontweight + '" data-sparkline=' + trendlines_array + '></td><td class=rowalignment style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['MonthCY'] + '</td><td class=rowalignment style="font-style:italic;background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['MTDCYplan'] + '</td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '"><div class=' + circle1 + ' ></div></td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['MTDDev%plan'] + '</td><td class=rowalignment style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['MonthLY'] + '</td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '"><div class=' + circle2 + ' ></div></td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['MTDDev%Actuals'] + '</td><td  style="background-color: white; border:none;">&nbsp;</td><td class=rowalignment style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['YTD 2015'] + '</td><td class=rowalignment style="font-style:italic;background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['PlanYTD2015'] + '</td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '"><div class=' + circle3 + ' ></div></td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['YTDDev%plan'] + '</td><td class=rowalignment style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['YTD 2014'] + '</td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '"><div class=' + circle4 + '></div></td><td class="rowalignment" style="background-color:' + bckg_color + ';font-weight:' + fontweight + '">' + d1['YTDDev %Actuals'] + '</td>')

        }
//------------------------------------------------------------------------------
    }

    /*Function for calculation of circle color 
     * for indicators on line charts 
     * for executive summary report
     * @param {String} devitaionpercentage
     * @param {String} metric
     */
    function deviationCaluclationForIndicators(devitaionpercentage, metric) {
        if (devitaionpercentage > 0) {
            if (metric == "Positive") {
                var circle1 = "green_indicator";
            } else {
                var circle1 = "red_indicator";
            }

        } else {
            if (devitaionpercentage != "N/A" && devitaionpercentage != '') {

                if (devitaionpercentage > -2.5) {
                    if (metric == "Positive") {
                        var circle1 = "red_indicator";
                    } else {
                        var circle1 = "green_indicator";
                    }

                } else {
                    if (metric == "Positive") {
                        var circle1 = "yellow_indicator";
                    }

                    else if (metric == "Negative") {
                        var circle1 = "green_indicator";
                    }
                }
            }
        }
        return circle1
    }
//------------------------------------------------------------------------------

});




