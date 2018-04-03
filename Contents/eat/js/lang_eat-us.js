$(document).ready(function(){
ShowTime();
  $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
  $("#btn").hide();
  //$("#mapBtn").hide();
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
    $('.part2 #icon').attr("src","photo/KFC_logo.png");
    $('.bdy #title').text("KFC");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Fast food restaurant specializing in fried chicken</p><p><b>Menu:</b> Chicken specialties, chicken burger, salads and sweet treats.</p><p><b>STYLE:</b> SELF-SERVICE</p><p><b>DEPARTURE LEVEL AIR SIDE</b> – Food Hall</p>");
    

    $("#mapBtn").attr('dir','photo/maps/aribou-Coffee.jpg');
    $("#mapBtn").hide();
  });
  $('#c4').click(function(){
    $('.part2 #icon').attr("src","photo/Mcdonalds.png");

    $('.bdy #title').text("McDonalds");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>McDonald’s products consist of high quality ingredients from the four essential food groups required for a well-balanced diet, including many essential vitamins, minerals and other nutrients. McDonald’s is committed to Quality, Service, Cleanliness and Value in every aspect of its operation.</p><p>McDonald’s restaurant provides breakfast from 4am to 11am along with its Chicken Range. The regular menu is served from 11am onwards.</p> <p><b>Menu:</b> Ala-Carte, meal, beverages and desserts.</p><p><b>STYLE:</b> SELF-SERVICE </p><p><b>EPARTURE LEVEL AIR SIDE</b> – Food Hall</p>");
    $("#mapBtn").hide();
                
  });
  $('#c5').click(function(){
    $('.part2 #icon').attr("src","photo/spice-kitchen.png");

    $('.bdy #title').text("Spice Kitchen");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>This walk-through food court concept offers a variety of delicious, Indian, Asian and Mediterranean street food items with genuinly authentic flavors. In Spice Kitchen, you can truly experience the livelyhood of a spice market.</p> <p><b>Menu:</b>Tastes from India: Tikka, biryani, samosas, curries… From Asia: Chinese crepes, rice balls, soups, spring rolls… From the Mediterranean: Kebabs, gyros, pastas, and pizzas.</p><p><b>STYLE:</b> SELF-SERVICE</p><p><b>DEPARTURE LEVEL AIR SIDE</b> – Food Hall</p>");
   

    $("#mapBtn").hide();
  });
  $('#c6').click(function(){
    $('.part2 #icon').attr("src","photo/plenty.png");

    $('.bdy #title').text("Plenty");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Fresh Market is a concept committed to source the best ingredients to prepare healthy and delicous offerings. At Plenty, it is all about simple, fresh food without artifical flavors. The menu consists of wholesome foods, healthy juice and smoothies, fresh brewed coffee and teas.</p> <p><b>Menu:</b> Extensive range of freshly squeezed juices – all freshly made to order, chunky fruit bowls, smoothies, chia and muesli pots, no sugar added ice cream and sorbets.</p><p><b>STYLE:</b> GRAB & GO</p><p><b>DEPARTURE LEVEL LAND SIDE</b> – Terminal Building</p><p><b>DEPARTURE LEVEL AIR SIDE</b> – West Pier</p><p><b>DEPARTURE LEVEL AIR SIDE</b> – Level 2</p>");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
    
    //$('.list2').toggle();
  });
  $('#c61').click(function(){
    $('.part2 #icon').attr("src","photo/noor.png");
    $('.bdy #title').text("Noor");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Our Lebanese food concept is rooted in the global adoption and popularity of the Mediterranean diet . This fresh concept capitalizes on the popularity of healthy, authenticand deliciously vibrant fare. The warm, welcoming and highly approachable setting is perfect for travelers on-the-go and for families.</p><p><b><Menu:</b> Hot and cold mezze, shawarma, kebab and other traditional lebanese foods.</p> <p><b>STYLE:</b> A-LA-CARTE<p><b>DEPARTURE LEVEL AIR SIDE</b> – Level 2</p>");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
  });
  $('#c62').click(function(){
    $('.part2 #icon').attr("src","photo/Tickerdaze.png");
    $('.bdy #title').text("Tickerdaze");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Gastro sports bar offering a wide range of international and world renowned premium beers both on tap and bottled, a carefully selected cocktail list containing all the old favourites to the new and trendy shots.</p> <p><b>Menu:</b>A light and refreshing pub style menu. Freshly cooked snacks, chicken wings, burger, pizza or salad choices. “Something foreveryone.”</p><p><b>STYLE:</b> A-LA-CARTE</p><p><b>DEPARTURE LEVEL AIR SIDE</b> – Level 2</p>");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
  });
  $('#c63').click(function(){
    $('.part2 #icon').attr("src","photo/luna.png");
    $('.bdy #title').text("Luna Tapas Lounge");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Artfully crafted tapas menu and bespoke cocktails combines with a serene and beautiful atmosphere makes this space an oasis of tranquility. Food offerings feature Southern European, Central & South American small savory dishes, snacks and appetizers - perfect for sharing. Fresh and vibrant carefully sourced ingredients are conjured into enticing and delectable small plates and served alongside craft alcoholic beverages.</p><p><b>Menu:</b> European and South American small dishes such as tiger mussels, octopus carpaccio, duck breast and traditional Arabic mezzes.</p><p><b>STYLE:</b> A-LA-CARTE</p><p><b>DEPARTURE LEVEL AIR SIDE</b> – Level 2</p>");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
  });
  $('#c7').click(function(){
    $('.part2 #icon').attr("src","photo/mazoon.png");
    $('.bdy #title').text("Mazoon");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Offering a variety of freshly prepared Italian style ice creams, gourmet coffees and a selection of fine pastries and dessert items, Mazoon welcomes you in a stylish oasis courtyard with simplistic yet elegant finish.</p><p><b>Menu:</b> Freshly prepares Italian style ice creams, gourmet coffees, fine pastries and desserts such as brioche, biscotti, cannoli, croissants, etc.</p><p><b>STYLE:</b> SELF-SERVICE AND A-LA-CARTE SERVICE<p><b>DEPARTURE LEVEL AIR SIDE</b> – Level 2</p>");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();           
  });
  $('#c8').click(function(){
    $('.part2 #icon').attr("src","photo/caffe-nero.png");

    $('.bdy #title').text("Caffé Nero");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Caffè Nero is a European coffee house brand specializing in the creation of high quality Italian coffee. Philosophy is really very simple: Premium Italian coffee. A warm and welcoming atmosphere.</p> <p><strong>Menu:</strong> Espresso, coffee, sandwiches, salads, desserts, cold beverages and more.</strong></p> <p><b>STYLE: SELF-SERVICE</b></p> <p><strong>DEPARTURE LEVEL AIR SIDE</strong> – South Pier</p><p><strong>DEPARTURE LEVEL LAND SIDE </strong>– Terminal Building</p><p><strong>ARRIVAL LEVEL LAND SIDE – </strong>Level 1</p>");
    
    $("#mapBtn").attr('dir','photo/maps/south-pier-departure(level-02).png');
    $("#mapBtn").show();
  });
  $('#c9').click(function(){
    $('.part2 #icon').attr("src","photo/Caribou-Coffee.png");
    $('.bdy #title').text("Caribou Coffee");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Caribou Coffee believes that if passion, hard work and excellence go into an endeavor, the outcome will be a quality experience, and therefore rewarding.</p><p>The breathtaking panoramic view became the entrepreneurial vision for Caribou Coffee - a company that believes excellence is a product of hard work, and that life is too short for anything else. This vision serves as a guide as we strive to create a special experience for you here at Caribou Coffee.</p><p><b>Menu:</b> Wide range of coffees, beverages, sandwiches and fresh pastries.</p><p><b>STYLE:</b> SELF-SERVICE</p> <p><b>DEPARTURE LEVEL AIR SIDE</b> – North Pier</p>");
    $("#mapBtn").attr('dir','photo/maps/north-pier-departure(level-02).png');
    $("#mapBtn").show();

  });
  $('#c10').click(function(){
    $('.part2 #icon').attr("src","photo/kahwaji-cafe.png");

    $('.bdy #title').text("Kahwaiji Cafe");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Kahwaji is a celebration of the historical association of Oman with coffee. Hand selected beans of the highest quality, roasted to perfection for the perfect aroma and taste of original Arabic Kahwa. Our gourmet menu is a tribute to traditional Arabic romance with food, fresh and delectable.</p><p><b>Menu:</b> Wide range of Arabic and classic coffees, Arabic food choices, sandwiches and fresh pastries.<p><p><b>STYLE:</b> SELF-SERVICE</p><p>DEPARTURE LEVEL AIR SIDE – Level 2</p>");
  });
   
  $('#c11').click(function(){
    $('.part2 #icon').attr("src","photo/traveler-club.png");
    $('.bdy #title').text("Travelers Club");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Traveler’s club café is founded on an idea to bring a place where all travelers can meet and simply enjoy them-selves. It is an environment where people begin their journeys and feel relaxed and at ease with time. </p><p>The café presents a comfortable and easy going vibe, serving lights meals, such as sandwiches, salads, and baked goods. We only serve the highest quality of coffee sourced from around the globe. </p> <p><b>Menu:</b>Coffee, tea, juices, sandwiches, salad, ice cream, pastry.</p><p><b>STYLE:</b> GRAB & GO </p><p><b>DEPARTURE LEVEL AIR SIDE</b> – Level 2</p>");
   
  });
  $('#c12').click(function(){
    $('.part2 #icon').attr("src","photo/cakes-&-bakes.png");
    $('.bdy #title').text("Cakes & Bakes");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Wide range of baked goods and an extensive selection of tempting cakes and desserts that caters to everybody no matter what time of day, occasion or type of traveller. The concept has a rustic decor and all the fastidiousness is on display inside of the pastry case.</p><p><p><strong>Menu:</strong> Fresh pastas, pizzas, local and global pastry varieties and an excellent selection of sandwiches, including vegetarian sandwiches that even the carnivores will savour.</p><p><strong>STYLE: SELF-SERVICE <strong></p><p><strong>DEPARTURE LEVEL AIR SIDE – West Pier</strong></p>");
    $("#mapBtn").attr('dir','photo/maps/west-pier-departure(level-02).png');
    $("#mapBtn").show();
    
   
  });
  $('#c13').click(function(){
    $('.part2 #icon').attr("src","photo/seaside-park.png");
    $('.bdy #title').text("Seaside Park");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Seaside Park is a fun play area where visitors can experience sandy. coasts and grassy patches, all within the comfort of the airport. Parents can sit back and relax with a meal or beverage while comfortably keeping an eye on their children as they run, climb, and play with colourful beach themed toys and an interactive television. </p> <p><b>Menu:</b>Popcorn, candy flosses, healthy snacks and sandwiches. Fruit juices and milk. </p><p><b>STYLE:</b> SELF-SERVICE</p><p><b>DEPARTURE LEVEL AIR SIDE</b> – North Pier</p>");
    $("#mapBtn").attr('dir','photo/maps/north-pier-departure(level-02).png');
    $("#mapBtn").show()
    
  });
  $('#c14').click(function(){
    $('.part2 #icon').attr("src","photo/hall.png");
    $('.bdy #title').text("Prime Class Lounge");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("CIP Passenger? Relax, dine, nap, shower, play and more in our world class lounge.");
   
  });
  $('#c15').click(function(){
    $('.part2 #icon').attr("src","photo/hall.png");
    $('.bdy #title').text("Aerotel Muscat Hotel");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Have long layover or want to sleep without any disturbance? Then visit Aerotel Muscat and you will enjoy the best rooms or swim in an In-Door swimming pool.");

  });
              

              //Change to English
              $('#change-us').click(function(){
               


                
            });

              //Change to Arabic
              $('#change-ar').click(function(){
                location.href = "index.htm";
                writeCookie("lang","arabic");
                window.external.ChangeLanguage("ar-eg");
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
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}