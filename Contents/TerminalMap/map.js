jQuery(function () {
    jQuery('#myTab a:first').tab('show')
})

$(document).ready(function(){
				//Change to English
              $('#change-us').click(function(){
                $('#change-us').toggleClass('active');
                $('#change-ar').toggleClass('active');
           		$('#txt0').text("Passenger Terminal Building Arrivals | level 01");
                $('#txt1').text("Passenger Terminal Building Departure | level 02");
                $('#txt2').text("South Pier Departure | Level 02");
                $('#txt3').text("North Pier Departure | Level 02");
                

              });


              	//Change to English
              $('#change-ar').click(function(){
                $('#change-us').toggleClass('active');
                $('#change-ar').toggleClass('active');
              	$('#txt0').text("مبنى الركاب مبنى الوصول | ليفيل 01");
                $('#txt1').text("مبنى الركاب مبنى المغادرة | المستوى 02");
                $('#txt2').text("جنوب الرصيف المغادرة | المستوى 02");
                $('#txt3').text("الرصيف الشمالي | المستوى 02");

              });

	});