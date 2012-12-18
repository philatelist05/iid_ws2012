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

var showSelectedStatisticsDateType = function(){
	var curr=$("input[name=statistics_datetype_select]:checked").attr("id");
	if(curr == "statistics_radio_quarter") {
			$("#div_statistics_month").fadeOut(300, function() {
			$("#div_statistics_quarter").fadeIn();});
	} else if(curr == "statistics_radio_month") {
			$("#div_statistics_quarter").fadeOut(300, function() {
			$("#div_statistics_month").fadeIn();});
	} else if(curr == "statistics_radio_year") {
			$("#div_statistics_quarter").fadeOut(300);
			$("#div_statistics_month").fadeOut(300);
	}
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
	
	/* ColorPickers */
	$('#colorChooserDiv').ColorPicker({
		flat: true,
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#chosenColor').css('background-color', '#' + hex);
		}
	});
	$(".fixedColor").click(function(){
			$("#chosenColor").css({'background-color' : $(this).css("background-color")});
	});
	$(".fixedColor").on({
		mouseenter: function(ev) {
			$(this).css({"opacity" : 0.4});
		},
		mouseleave: function(ev) {
			$(this).css({"opacity" : 1});
	}});
	
	
	
	/*PopOvers*/	
	$("#recuringInterval").popover({
				title: '<div style="width:100%;text-align:right;"><a href="#" onclick="$(\'#recuringInterval\').popover(\'hide\')">x</a></div>',
				content: $("#repeatRangePlaceHolder").html(),
				placement: "top",
				html: true
	});
	$("#shouldRecur").popover({
				title: '<div style="width:100%;text-align:right;"><a href="#" onclick="$(\'#shouldRecur\').popover(\'hide\')">x</a></div>',
				content: $("#intervalPlaceHolder").html(),
				placement: "top",
				html: true
	});
	
	/* DatePickers */
	$(".date").datepicker();

	/* Statistics-Month-Quarter-Year-Selection */
	$("#statistics_radio_month").attr("checked","checked");
	$("#statistics_radio_quarter").change(showSelectedStatisticsDateType);
	$("#statistics_radio_month").change(showSelectedStatisticsDateType);
	$("#statistics_radio_year").change(showSelectedStatisticsDateType);
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
		

