function openSearch(e,hideID,showID,inputID,outputID){
	var key=e.keyCode || e.which;
		if (key==13){
			setSearchTerm(inputID,outputID);
			hideShowDiv(hideID,showID);
		}
}

function hideShowDiv(hideID,showID){
	document.getElementById(hideID).style.display = "none";
	document.getElementById(showID).style.display = "block";
}

function setSearchTerm(inputID,outputID){
	$('#example').dataTable().fnFilter(document.getElementById(inputID).value);
	document.getElementById(inputID).value = '';
}

var showStatisticBars = function() {
	$(".statisticsbarup").slideDown();
	$(".statisticsbardown").slideDown();
}

$(document).ready(function() {
	$(".akkupositiv").slideDown();
	$(".show-grid").on({
		mouseenter: function(ev) {
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".plusBild").fadeIn(80);
		},
		mouseleave: function(ev) {
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".plusBild").fadeOut(80);
	}});
	$(".date").datepicker();
});
$(function() {
				var slider  = $('#slider');
	var $div = $("<div id='tooltip'/>")
                    .css({ position : 'absolute' , top : -20, left : 0, display : "block" })
                    .text("12:00");
                    
                    slider.slider()
                    .find(".ui-slider-handle")
          .append($div);
                    
			slider.slider({
				range: "min",
				min: 1,
				max: 48,
				value: 24,

				slide: function(event, ui) {
					var number = ui.value / 2;
					var hour  = Math.floor(number);
					
					var minute = "00";
					dec = (number + "").split(".");
					if(dec.length == 2) {
						minute = dec[1] * 60;
						minute = (minute + "").substring(0, 2); 
					}
					
					$('#tooltip').text(hour + ":" + minute);
				}
			});
			
		});
		
