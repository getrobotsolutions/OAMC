  function Setting() {
          location.href = "../../Config/Config.htm";
      }
 
     function CheckVal(bar_code){
                       /* var bar_code = $("#bar_code").val();*/
                       var bar_code = bar_code; 
                       /*console.log(bar_code);*/
                        $(".wrapper1").show();
                        $(".inst-img").hide();
                   
                        var len = bar_code.length;
                        var parts = bar_code.split("/");
                       /* lname = parts[0].substr(2);*/

                        var parts_p = parts[1].split(" ");
                        

                        /*var parts_p1 = parts_p.filter(function(v){return v!==''});
                        fname = parts_p[0].substr(0,7)+" "+parts_p[1];*/
                        /*console.log(fname);*/
                        
                        bar_code = bar_code.replace(/\s+/g, ' ');
                        barCode_arr = bar_code.split(' ');
                        /*console.log(barCode_arr);*/
                        var index = barCode_arr.indexOf('MR'); // 1
                        if (index == -1) {  index = barCode_arr.indexOf('MRS'); }
                        /*console.log(index);*/
                        

                        Name_arr = barCode_arr.slice(0,index);
                        /*console.log(Name_arr);*/
                        Other_arr = barCode_arr.slice(index);
                        /*console.log(Other_arr);*/
                        /*console.log(barCode_arr);*/
                        if(Name_arr.length == 1) {
                          var name_parts = Name_arr.toString().split("/");
                          var fname = name_parts[1];
                          var lname = name_parts[0].substr(2);
                          var name = fname +" "+lname;
                       }
                       if(Name_arr.length > 1){
                          var fnameNlname = Name_arr[0].toString().split("/");
                          var fname = fnameNlname[1];  
                          var lname = fnameNlname[0].substr(2);
                          var mname = Name_arr[1];
                          var mname1 = (Name_arr[2] != null) ? Name_arr[2] : ''; 
                          var mname2 = (Name_arr[3] != null) ? Name_arr[3] : ''; 
                          var name = fname+" "+mname + " " + mname1 + " " + mname2 +" " + lname;
                       }

                       /*Flight Info*/
                       var flight_arr = Other_arr[2];
                       var org = flight_arr.substr(0,3);
                       var des = flight_arr.substr(3,3);
                       var arr = flight_arr.substr(6);

                       /*Flight No*/
                       var flightNum = Other_arr[3];
                       var flightDis = arr+" "+flightNum;

                        var flightNo = flightNum.substr(1);
                        console.log(flightNo);
                        var mdata = getGate(flightNo);

                        $('<p style="text-align:center;">'+name+'</p>').appendTo('.name');
                        $('<p>'+flightDis+'</p>').appendTo('.airline');
                        $('<p>'+des+'</p>').appendTo('.dest'); 
                        $('<p>'+org+'</p>').appendTo('.src');
    }
      
    
     function getGate(flight){
      /*console.log(flight); */
      var searchItem = flight;
                        var today = new Date();
                        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var mon = monthNames [today.getMonth()].substring(0,3);
                        var fday = today.getDate();
                        /*var lday = fday+1;*/
                        var fhrs, fhr, lhrs;
                        var fhrs1 = today.getHours();
                        

                        fhrs = fhrs1 - 5;
                        /*Setting the flights window range of 10 hrs- 5 back 5 forward*/
                        if(fhrs1<5){
                          fhrs = fhrs + 24;
                        }

                        /*console.log(fhrs);*/
                        /*For time zone Muscat*/
                        if((fhrs>4) && (fhrs<23)){
                          fhr  = fhrs - 4;
                          lhrs = fhr + 10;

                        }
                        else{
                          fhr = fhrs + 20;
                          lhrs = fhr +10;
                        }
                        

                        if(lhrs>24){
                          fday1=fday+1;
                          lhrs = lhrs-24;
                        }else{fday1 = fday;}

                        /*console.log(today);
                        console.log(fhr);console.log(lhrs);*/
                        var from_date = fday+'-'+mon+'-'+today.getFullYear()+'-'+fhr;
                        var to_date = fday1+'-'+mon+'-'+today.getFullYear()+'-'+lhrs;

                       /* console.log(from_date);
                        console.log(to_date);*/



                        var appId = "7j985537jyreeeswq65432fvRGp09fXqBB";
                        var url = "https://apps.omanairports.com/weps_PublicApp/OAMCPublic.svc/GetFlightsOpen/"+appId+"/"+from_date+"/"+to_date+"/MCT";
                       /* console.log(url);*/


                       
                            $.ajax({
                              type: "GET",
                              async: false,
                              url: url,
                              dataType: "json",
                              crossDomain: true,
                                success: function(response) {
                                  $("#loading").hide();
                                  $(".fArr").show();

                                    var airport = "Oman Airport(OM)";
                                    var data = JSON.stringify(response);
                                    sdata = JSON.parse(data);
                                    mdata = sdata['Data'];
                                 /*console.log(mdata);*/
 
                                    /*Filter based on flightNO*/
                                    var details1 = mdata.filter(function (i){
                                      if(i.FlightNo === searchItem) return i
                                    });

                                    /*Re-filter only Departing flights*/
                                    var details = details1.filter(function(i){
                                      if(i.Nature === 'DEPARTURE') return i
                                    });

                                    est_dep = details[0].ScheduledDeparture;
                                    console.log(details);

                                    var depTime = est_dep.split("T").pop();
                                   /* console.log(depTime);*/
                                    depTime1 = depTime.slice(0, -3);
                                    

                                    var H = +depTime1.substr(0, 2);
                                    var h = H % 12 || 12;
                                    
                                    /*for check IN*/
                                    var h1 = h;
                                    var ch_h = h1 -1;
                                    if(ch_h == 0){ch_h = 12;}
                                    if(ch_h == -1){ch_h = 11;}
                                    
                                    

                                    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
                                    depTime = h + depTime.substr(2, 3) + ampm+ " ("+H+":"+depTime1.substr(3,2)+")";



                                    checkin = ch_h + depTime1.substr(2, 3) + ampm + " ("+(H-1)+":"+depTime1.substr(3,2)+")"; 
                                    gate = (details[0].Gate) ? (details[0].Gate) : "N/A";
                                    
                                    /*console.log(checkin);console.log(gate);*/

                                    $('<p>'+depTime+'</p>').appendTo('.txt-dep');
                                    $('<p>'+checkin+'</p>').appendTo('.txt-checkin');
                                    $('<p>'+gate+'</p>').appendTo('.gate');
            

                                   
                      /*Searching the especific FlightNo. and getting the GATE and checkin time*/
                    
                      },
            });
      
      }


//TO DO - to get the date and time and gate
        $(document).ready(function() {
             $(".wrapper1").hide();
             $("#bar_code").focus();

              var dNow = new Date();
              var month = dNow.getMonth()+1;
              var day = dNow.getDate();
              var year = dNow.getFullYear();
              var hour = dNow.getHours();
              var min = dNow.getMinutes();
                


            $.ajax({
                type: "GET",
                url:url,
                dataType: "JSONP",
                success: function(data) {
                  /*console.log(data);*/
                  }
            });

               
            });                
  
            $( function() {
                  $('.submit').click(function(e) {
                      e.preventDefault();
                      var bar_code = $("#bar_code").val();
                      /*var bar_code = 'M1TAN/KOR SENG HEI MUR MR     EDXHNQG MCTBKKWY 0817 081J011J0073 147>1181RO8081BWY              299102113959648 0   EY 100106871583   ';*/
                      /*var bar_code = 'M1ELSHEEMY/AHMED MR   EPHNVDI MCTCAIWY 0407 081Y017D0018 147>1181RO8081BWY              299105337980569 0   ';*/
                      /*var bar_code = 'M1AHMAD/WAQAR MR      EDXYPEI MCTDMMWY 0695 081Y016F0027 347>1181RO8081BWY              299102113772898 0';*/
                      /*console.log(bar_code);*/
                      /*var bar_code = 'M1DELAROSA/MONDALEMR   AFYENQ MCTDXBOV 0103 327Y004F00';*/
                  //    console.log(bar_code);
                      
                    if(bar_code.length>0){
                        
                        CheckVal(bar_code);

                      }   

                      else{
                        /*alert("Please put the Barcode scanner on the right position and try again.");*/
                        /*location.reload();*/
                        $("#bar_code").val() = '';
                      }                     
              });
                 
                    setTimeout(function() {
                      $('#submit').trigger('click');
                      }, 5000);
                 
        });