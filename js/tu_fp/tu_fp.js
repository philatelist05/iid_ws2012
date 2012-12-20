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

function dispDate(now){	
	var months = new Array();
	months[0] = "January";
	months[1] = "February";
	months[2] = "March";
	months[3] = "April";
	months[4] = "May";
	months[5] = "June";
	months[6] = "July";
	months[7] = "August";
	months[8] = "September";
	months[9] = "October";
	months[10] = "November";
	months[11] = "December";
	return months[now.getMonth()] + " " + now.getFullYear();
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

var simulatePeriodChange = function() {
	$("#statistics-image").fadeOut(300, function() {
		$("#statistics-image").fadeIn(300);
	});
}

$(document).ready(function() {
	/* Global Date */
	var now = Date.today();
	
	$(".akkupositiv").slideDown();
	$(".show-grid").on({
		mouseenter: function(ev) {
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".plusBild").fadeIn(400);
		},
		mouseleave: function(ev) {
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".plusBild").fadeOut(30);
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
	
	
	
	/* DatePickers */
	$(".date").datepicker();

	/* Statistics-Month-Quarter-Year-Selection */
	$("#statistics_radio_month").attr("checked","checked");
	$("#statistics_radio_quarter").change(showSelectedStatisticsDateType);
	$("#statistics_radio_month").change(showSelectedStatisticsDateType);
	$("#statistics_radio_year").change(showSelectedStatisticsDateType);
	
	/* Click Events in Month-View */
	$(".grid").click(function(event){
		if(event.target.nodeName.toLowerCase() != "img") {
			$('#myTab a:first').tab('show');
		}
	});
	
	/* Current Date Functions */
	$("#prevMonth").click(function(){
		now = now.prev().month();
		$("#currentDate").text(dispDate(now));
	});
	
	$("#nextMonth").click(function(){
		now = now.next().month();
		$("#currentDate").text(dispDate(now));
	});
	
	$("#today").click(function(){
		now = Date.today();
		$("#currentDate").text(dispDate(now));
	});
	$("#currentDate").text(dispDate(now));

	//evaluation - category-chooser:
	$("#category-chooser").change(function() {
		if($("#category-chooser").find("option:selected").text() == "[All]") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-all.png");
				$("#statistics-image").fadeIn(300);
			});
		} else if($("#category-chooser").find("option:selected").text() == "Income") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-income.png");
				$("#statistics-image").fadeIn(300);
			});
		} else if($("#category-chooser").find("option:selected").text() == "Common") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-common.png");
				$("#statistics-image").fadeIn(300);
			});
		} else if($("#category-chooser").find("option:selected").text() == "Rent") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-rent.png");
				$("#statistics-image").fadeIn(300);
			});
		} else if($("#category-chooser").find("option:selected").text() == "Car") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-car.png");
				$("#statistics-image").fadeIn(300);
			});
		} else if($("#category-chooser").find("option:selected").text() == "Energy") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-energy.png");
				$("#statistics-image").fadeIn(300);
			});
		} else if($("#category-chooser").find("option:selected").text() == "Insurances") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-insurances.png");
				$("#statistics-image").fadeIn(300);
			});
		}
	});

	//evaluation - date-choosers-simulate period-change:
	$("#category-chooser").val(1);
	$("#statistics_radio_month").change(simulatePeriodChange);
	$("#statistics_radio_quarter").change(simulatePeriodChange);
	$("#statistics_radio_year").change(simulatePeriodChange);
	$("#div_statistics_month").change(simulatePeriodChange);
	$("#div_statistics_quarter").change(simulatePeriodChange);
	$("#div_statistics_year").change(simulatePeriodChange);
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
		

