jQuery(function () {
    jQuery('#myTab a:first').tab('show')
})

$(document).ready(function(){
        //Change to English
        $('#change-us').click(function(){
          writeCookie("lang","english");
          $('#change-us').addClass('active');
          $('#change-ar').removeClass('active');
          $('#txt01').text("North Pier Departure | Level 04");
          $('#txt02').text("South Pier Departure | Level 04 ");
          $('#txt03').text("Passenger Terminal Building Departure | level 04");
          $('#txt04').text("West Pier Departure | Level 04");
          $('#txt05').text("Passenger Terminal Building Arrivals | Mezzanine Level");
          $('#txt06').text("Passenger Terminal Building Arrivals | Level 01");
          $('#txt07').text("Passenger Terminal Building Departure | Level 02");
        });
        //Change to English
        $('#change-ar').click(function(){
          writeCookie("lang","arabic");
          $('#change-us').removeClass('active');
          $('#change-ar').addClass('active');
          $('#txt01').html("المغادرةشمال الميناء <b> | </b> المستورى  04");
          $('#txt02').html("المغادرةجنوب الميناء <b> | </b> المستورى 04");
          $('#txt03').html("المغادرةجنوب الميناء <b> | </b> المستورى 04");
          $('#txt04').html("المغادرةغرب الميناء <b> | </b> المستورى 04");
          $('#txt05').html("مبنى الركاب - مبنى الوصول | مستوى الميزانين");
          $('#txt06').html("مبنى الركاب - مبنى الوصول | المستوى 01");
          $('#txt07').html("مبنى الركاب - مبنى المغادرة|  المستوى 02");
        });

	});

function OnUserDisappeared()
{
  setTimeout(function(){
    location.href = "../../maincontents.html";
  }, 60000)
}