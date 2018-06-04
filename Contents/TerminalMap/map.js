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
          $('#txt03').text("Passenger Terminal Building Arrivals | Level 01");
          $('#txt04').text("West Pier Departure | Level 04");
          $('#txt05').text("Passenger Terminal Building Departure | Level 05");
          $('#txt06').text("Passenger Terminal Building Departure | Level 04");
          $('#txt07').text("Passenger Terminal Building Departure | Level 02");
        });
        //Change to English
        $('#change-ar').click(function(){
          writeCookie("lang","arabic");
          $('#change-us').removeClass('active');
          $('#change-ar').addClass('active');
          $('#txt01').html("مبنى المغادرون -  الجناح الشمالي / المستوى الثاني");
          $('#txt02').html("مبنى المغادرون - الجناح الجنوبي | المستوى الثاني");
          $('#txt03').html("مبنى المسافرون - القادمون /المستوى الأول");
          $('#txt04').html("مبنى المغادرون- الجناح الغربي / المستوى الثاني");
          $('#txt05').html("مبنى المسافرون / المغادرون / المستوى الخامس");
          $('#txt06').html("مبنى المسافرون/ المغادرون/ المستوى الثاني");
          $('#txt07').html("مبنى المسافرين - المغادرون / المستوى الرابع");
        });
  });
function OnUserDisappeared()
{
  setTimeout(function(){
    location.href = "../../maincontents.html";
  }, 60000)
}