$(document).ready(function(){
    ShowTime();
    var welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
    var lan="ar-eg";
                
                $('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");
                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html(" امسح بطاقة الصعود للطائرة ");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
              if(readCookie("lang")=="arabic"){
                writeCookie("lang","arabic");
              
                var welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                var lan="ar-eg";

                $('#change-us').removeClass('active');
                $('#change-ar').addClass('active');

              
                $('#content_fly').text("اضغط هنا للبدء");

                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html(" امسح بطاقة الصعود للطائرة ");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
                //$('#content_dance').html("صورتك في <br>الوجه الآلي");
              }
              else if(readCookie("lang")=="english"){
                writeCookie("lang","english");

                welcomeMessage="Hi. Welcome to our airport. To begin, please press one of the buttons below.";
                lan="en-us"; 
                //$('#change-us').toggleClass('active');
                //$('#change-ar').toggleClass('active');
                
                $('#change-us').addClass('active');
                $('#change-ar').removeClass('active');

                //$('#content_term').text("Terminal A");
                //$('#content_air').text("Riyadh Airport");
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");
                $('#content_map').html("TERMINAL MAP");
                $('#content_info').text("INFORMATION");

                $('#content_flights').html("FLIGHTS");
                $('#content_scan').html("SCAN YOUR<br> BOARDING PASS");
                $('#content_avatar').text("CHANGE AVATAR");
                $('#content_selfie').text("TAKE SELFIE");                
                
              }
                      
              //Change to English
              $('#change-us').click(function(){
                // PlaySpeech("hello"); #337ab7
                writeCookie("lang","english");
                welcomeMessage="Hi. Welcome to our airport. To begin, please press one of the buttons below.";
                lan="en-us"; 
                
                $('#change-us').addClass('active');
                $('#change-ar').removeClass('active');

                //$('#content_term').text("Terminal A");
                
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");

                $('#content_info').text("INFORMATION");
                $('#content_map').html("TERMINAL MAP");

                $('#content_flights').html("FLIGHTS");
                $('#content_scan').html("SCAN YOUR<br> BOARDING PASS");
                $('#content_avatar').text("CHANGE AVATAR");
                $('#content_selfie').text("TAKE SELFIE");
                //$('#content_dance').text("Dance");
              
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                lan="ar-eg";
                writeCookie("lang","arabic");
                $('#change-us').removeClass('active');
                $('#change-ar').addClass('active');

                $('.fly').text("رحلات طيران");
                $('.scan').text("مسح الصعود تمريرة الخاص بك");
                $('.map').text("خريطة المحطة الطرفية");
                $('.lang').text("Change Language");

                //$('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");
                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html("امسح بطاقة الصعود للطائرة");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
               
              });
              $('#content_fly').click(function(){
                   ChangeLanguage("lan");
                    window.external.ChangeLanguage(lan);
                    PlaySpeech(welcomeMessage);
              });
             
          });

 
       /* function ShowTime()  
        {  
            var dt = new Date();  
            var localeSpecificTime = dt.toLocaleTimeString();
            localeSpecificTime=localeSpecificTime.replace(/:\d+ /, ' ');
            document.getElementById("content_air")  
                .innerHTML = localeSpecificTime; 
            window.setTimeout("ShowTime()", 1000); // Here 1000(milliseconds) means one 1 Sec  
        }*/