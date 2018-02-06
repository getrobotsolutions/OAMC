$(document).ready(function(){

  $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
  $("#btn").hide();
  $("#mapBtn").hide();
  $("#btn").click(function () {
    ShowPopup($("#btn").attr('dir'));
    //$("$list1").show();

  });
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));
    //$("$list1").show();

  });
  /*$('#restau').text("Restaurants");
  $('#c3').text("KFC");
  $('#c4').text("McDonalds");
  $('#c5').text("Spice Kitchen");
  $('#c6').text("Plenty");
  $('#c7').text("The Irish House");
  $('#c8').text("Moka & More");
  $('#c9').text("Sadaf");
  $('#c10').text("Subway");*/
                
  $('#c3').click(function(){
    $('.part2 #icon').attr("src","photo/Caribou-Coffee.jpg");
    $('.bdy #title').text("KFC");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("well known fried chicken concept for the best taste and if you are in hurry.");
    $("#btn").show();
    $("#btn").attr('dir','photo/Caribou-Coffee-Prices.png');
    $("#mapBtn").attr('dir','photo/maps/aribou-Coffee.jpg');
    $("#mapBtn").show();
  });
  $('#c4').click(function(){
    $('.part2 #icon').attr("src","photo/Costa Coffee.jpg");
    $('.bdy #title').text("McDonalds");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("for burger and fast food lovers, enjou mcdonalds with movement of planes next to you.");
    $("#btn").show();
    $("#btn").attr('dir','photo/costa-drinks.png');
    $("#mapBtn").show();
                
  });
  $('#c5').click(function(){
    $('.part2 #icon').attr("src","photo/DQ Grill & Chill.jpg");
    $('.bdy #title').text("Spice Kitchen");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Indian Cuisine in a fast food concept for spicy food lovers.");
    $("#btn").show();
    $("#btn").attr('dir','photo/dq-menu-prices.png');
    $("#mapBtn").show();
  });
  $('#c6').click(function(){
    $('.part2 #icon').attr("src","photo/Food Court.jpg");
    $('.bdy #title').text("Plenty");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Healthy Concious? We have what you need. Just drop in and you calories will be maintained by us.");
    //$('.list2').toggle();
  });
  $('#c61').click(function(){
    $('.part2 #icon').attr("src","photo/Food Court.jpg");
    $('.bdy #title').text("Noor");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Fine Arabic Cuisine, enjoy the breathtaking food and decoration where your eyes will love the food before your palates.");
  });
  $('#c62').click(function(){
    $('.part2 #icon').attr("src","photo/Food Court.jpg");
    $('.bdy #title').text("Tickerdaze");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("casual dinning with sports and bubbly beverages. Enjoy matches before boarding you fligth.");
  });
  $('#c63').click(function(){
    $('.part2 #icon').attr("src","photo/Food Court.jpg");
    $('.bdy #title').text("Luna");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("ala cart Tapas Restaurant with Fine Beverages and quite zones with beautiful view of Muscat Beaches.");
  });
  $('#c7').click(function(){
    $('.part2 #icon').attr("src","photo/The Irish House.jpg");
    $('.bdy #title').text("Mazoon");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Café with premium coffee just for you and your palates");
    $("#btn").show();
    $("#btn").attr('dir','photo/irish-menu.png');
    $("#mapBtn").show();             
  });
  $('#c8').click(function(){
    $('.part2 #icon').attr("src","photo/Moka & More.jpg");
    $('.bdy #title').text("Café Nero");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("want to try the best coffee? Visit Café Nero and you will not regret it");
  });
  $('#c9').click(function(){
    $('.part2 #icon').attr("src","photo/Sadaf.jpg");
    $('.bdy #title').text("Caribou Coffee");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("ACaffeine Junkie? Boost your energy with Caribou Coffee");
    $("#btn").show();
    $("#btn").attr('dir','photo/sadaf-menu.png');
    $("#mapBtn").show();
  });
  $('#c10').click(function(){
    $('.part2 #icon').attr("src","photo/Subway.jpg");
    $('.bdy #title').text("Qahwaji Coffee");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Traditional Omani Café with best Omani Coffee and a chance to taste Oman before leaving Muscat.");
    $("#btn").show();
    $("#btn").attr('dir','photo/menu/subway-en.png');
  });
  $('#c11').click(function(){
    $('.part2 #icon').attr("src","photo/Subway.jpg");
    $('.bdy #title').text("Travelers Club");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Café with relaxing seating to sip your coffee and enjoy your snacks.");
    $("#btn").show();
    $("#btn").attr('dir','photo/menu/subway-en.png');
  });
  $('#c12').click(function(){
    $('.part2 #icon').attr("src","photo/Subway.jpg");
    $('.bdy #title').text("Cakes & Bakes");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Bakery and café for pasty lovers");
    $("#btn").show();
    $("#btn").attr('dir','photo/menu/subway-en.png');
  });
  $('#c13').click(function(){
    $('.part2 #icon').attr("src","photo/Subway.jpg");
    $('.bdy #title').text("Seaside Park");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("kids heaven and amazing play ground and snacks.");
    $("#btn").show();
    $("#btn").attr('dir','photo/menu/subway-en.png');
  });
  $('#c14').click(function(){
    $('.part2 #icon').attr("src","photo/Subway.jpg");
    $('.bdy #title').text("Prime Class Lounge");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("CIP Passenger? Relax, dine, nap, shower, play and more in our world class lounge.");
    $("#btn").show();
    $("#btn").attr('dir','photo/menu/subway-en.png');
  });
  $('#c15').click(function(){
    $('.part2 #icon').attr("src","photo/Subway.jpg");
    $('.bdy #title').text("Aerotel Muscat Hotel");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("have long layover or want to sleep without any disturbance? Then visit Aerotel Muscat and you will enjoy the best rooms or swim in an In-Door swimming pool.");
    $("#btn").show();
    $("#btn").attr('dir','photo/menu/subway-en.png');
  });
              

              //Change to English
              //$('#change-us').click(function(){
               
                /*$('.titl1').text("Oman Airport Eat page");
                $('#txt1').text("Here you can discover all of our food and beverage options, where they are located, and what's on the menu.");
                $('#txt2').text("Select a button on the down left to get started.");

                $('#cafe').text("Cafe");
                $('#restau').text("Restaurants");
                $('#arloung').text("Airport Lounges");
                $('#inside').text("Inside Airport");
                $('#outside').text("Outside Airport");

                $('#c3').text("Caribou Coffee");
                $('#c4').text("Costa Coffee");
                $('#c5').text("DQ Grill & Chill");
                $('#c6').text("Food Court");
                $('#c7').text("The Irish House");
                $('#c8').text("Moka & More");
                $('#c9').text("Sadaf");
                $('#c10').text("Subway");

                $('#r11').text("Burger King");
                $('#r12').text("Chicken Restaurant");
                $('#r13').text("Pinkberry");
                $('#r14').text("Domino's Pizza");
                $('#r15').text("The Globe Restaurant");
                $('#r16').text("Piatto");
                $('#r17').text("Najd Village");
                $('#r18').text("Outback");

                $('#10').text("Alfursan Lounges");
                $('#11').text("Lounge 1");
                $('#12').text("Lounge 2");
                $('#btn').text("View Menu");*/
                
            //});

              //Change to Arabic
              $('#change-ar').click(function(){
                location.href = "index.htm";
                writeCookie("lang","arabic");
              });


                    //$('#btn').hide();
                    //$('#leftmenu ul').hide();        
                $('#leftmenu h3,h5').click( 
                  function() {
                    var $this = $(this);
                            /*$this.next('ul').siblings('ul').slideUp();
                            $this.next('ul').find('ul').slideUp();
                            $this.next().slideToggle(300); */
                    });
    $('.part2 #icon').attr("src","photo/Caribou-Coffee.jpg");
    $('.bdy #title').text("KFC");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("well known fried chicken concept for the best taste and if you are in hurry.");
    $("#btn").show();
    $("#btn").attr('dir','photo/Caribou-Coffee-Prices.png');
    $("#mapBtn").show();

         /* function display(data)
          { 
            console.log(data);

                  for(var i=3; i<=10; i++){
                      function clickHandler_eat(num){
                        //For Eat 
                          /* $('#c'+i).click(function()
                           {      
                               $('#icon').hide();                          
                                var url = data.Sheet1[num].IMG_SRC;
                               //photo/submenu/buyuk/cafe.png
                               // var url = "photo/submenu/buyuk/dunkin.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 80%"});
                               
                                    $('#title').text(data.Sheet1[num].NAME_BASE);
                                    $('#location').text("Location : "+data.Sheet1[num].ADDRESS_BASE);
                                    $('#desc').text(data.Sheet1[num].DETAIL_BASE);
                                    $("#btn").show();
                              });
                         }///clickhandler ends here
                         //clickHandler_eat(i);
                  } //for loop ends here

                  
                  


        

          }*/


            /*$.ajax({
              type: "GET",

              url: "https://api.myjson.com/bins/91xm1",
            
              dataType: "JSON",
              success: function(data) {
                //display(data);
                $('#change-us').click(function(event){
                    display(data);
                  });
                
                $('#change-ar').click(function(event){
                  //display_ar(data);
                });
                // console.log(data);
                // console.log(data.Sheet1[1]);
             }                
        });*/

     });

function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="700" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}