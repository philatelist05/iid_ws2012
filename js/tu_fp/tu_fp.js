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

function showDayView() {	
	$('.myTab a:first').tab('show');
	$('#globalNav a:first').tab('show');
}

function nextDate(now){
	var gran = $(".time .active a").attr("href");
	if(gran == "#month"){
		return now.next().month();
	}
	else if(gran == "#week"){
		return now.next().week();
	}
	else if(gran == "#day"){
		return now.next().day();
	}
}

function prevDate(now){
	var gran = $(".time .active a").attr("href");
	if(gran == "#month"){
		return now.prev().month();
	}
	else if(gran == "#week"){
		return now.prev().week();
	}
	else if(gran == "#day"){
		return now.prev().day();
	}
}

function dispDate(now){	
	var gran = $(".time .active a").attr("href");
	if(gran == "#month"){
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
	else if(gran == "#week"){
		var weekNumber = Number(now.format("%U")) + 1;
		return weekNumber + " Week " + now.getFullYear();
	}
	else if(gran == "#day") {
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
		return Number(now.toString("dd")) + " " + months[now.getMonth()] + " " + now.getFullYear();
	}
}

function move(f, t)
{
     var i = f.options.length;
     while(i--)
     {
        if(f.options[i].selected)
        {
             t.options[t.options.length] = f.options[i];
             f.options[i] = null;
        }
     }

}

var showStatisticBars = function() {
	$(".statisticsbarup").slideDown(350);
	$(".statisticsbardown").slideDown(350);
}

var hideStatisticBars = function() {
	$(".statisticsbarup").fadeOut(10);
	$(".statisticsbardown").fadeOut(10);
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
		hideStatisticBars();
		showStatisticBars();
	});
}

var showDay = function() {
	$("#currentperiodinfotitle").fadeOut(350, function() {
		$("#currentperiodinfotitle").html("current day");
		$("#currentperiodinfotitle").fadeIn(350);
	});
	$("#currentperiodinfomoneypos").fadeOut(350, function() {
		$("#currentperiodinfomoneypos").html(" 0.00 &euro;");
		$("#currentperiodinfomoneypos").fadeIn(350);
	});

	$("#currentperiodinfomoneyneg").fadeOut(350, function() {
		$("#currentperiodinfomoneyneg").html(" 22.53 &euro;");
		$("#currentperiodinfomoneyneg").fadeIn(350);
	});
	$("#currentperiodinfomoneysaldo").fadeOut(350, function() {
		$("#currentperiodinfomoneysaldo").html(" 143.20 &euro;");
		$("#currentperiodinfomoneysaldo").removeClass("moneynegative");
		$("#currentperiodinfomoneysaldo").removeClass("moneypositive");
		$("#currentperiodinfomoneysaldo").addClass("moneynegative");
		$("#currentperiodinfomoneysaldo").fadeIn(350);
	});
};
var showWeek = function() {
	$("#currentperiodinfotitle").fadeOut(350, function() {
		$("#currentperiodinfotitle").html("current week");
		$("#currentperiodinfotitle").fadeIn(350);
	});
	$("#currentperiodinfomoneypos").fadeOut(350, function() {
		$("#currentperiodinfomoneypos").html(" 0.00 &euro;");
		$("#currentperiodinfomoneypos").fadeIn(350);
	});

	$("#currentperiodinfomoneyneg").fadeOut(350, function() {
		$("#currentperiodinfomoneyneg").html(" 143.20 &euro;");
		$("#currentperiodinfomoneyneg").fadeIn(350);
	});
	$("#currentperiodinfomoneysaldo").fadeOut(350, function() {
		$("#currentperiodinfomoneysaldo").html(" 143.20 &euro;");
		$("#currentperiodinfomoneysaldo").removeClass("moneynegative");
		$("#currentperiodinfomoneysaldo").removeClass("moneypositive");
		$("#currentperiodinfomoneysaldo").addClass("moneynegative");
		$("#currentperiodinfomoneysaldo").fadeIn(350);
	});
};
var showMonth = function() {
	$("#currentperiodinfotitle").fadeOut(350, function() {
		$("#currentperiodinfotitle").html("current month");
		$("#currentperiodinfotitle").fadeIn(350);
	});
	$("#currentperiodinfomoneypos").fadeOut(350, function() {
		$("#currentperiodinfomoneypos").html(" 1972.52&euro;");
		$("#currentperiodinfomoneypos").fadeIn(350);
	});

	$("#currentperiodinfomoneyneg").fadeOut(350, function() {
		$("#currentperiodinfomoneyneg").html(" 1598.32&euro;");
		$("#currentperiodinfomoneyneg").fadeIn(350);
	});
	$("#currentperiodinfomoneysaldo").fadeOut(350, function() {
		$("#currentperiodinfomoneysaldo").html(" 374.20&euro;");
		$("#currentperiodinfomoneysaldo").removeClass("moneynegative");
		$("#currentperiodinfomoneysaldo").removeClass("moneypositive");
		$("#currentperiodinfomoneysaldo").addClass("moneypositive");
		$("#currentperiodinfomoneysaldo").fadeIn(350);
	});
};

$(document).ready(function() {
	/* Global Date */
	var now = Date.today();
	
	var granularity = $(".time a:last");
	
	var mode = "grid";

	/* calculate random money-values for month-view */
	$(".money").each(function(index, elem) {
		if(index < 17) {    // heute ist der 17. des Monats
			var value = 0;
			var modif = 0;
			var tmp1 = Math.ceil(Math.random() * 25);
			if(tmp1 < 15)
			modif = -10;
			else if(tmp1 >= 15 && tmp1 < 18)
			modif = -100;
			else if(tmp1 >= 18 && tmp1 < 24)
			modif = 0;
			else
			modif = 100;

			value = Math.ceil(Math.random() * 100 * modif) / 100;
			if(value == 0) {
				$(this).html("");
			} else if (value > 0) {
				$(this).html(value + "&euro;");
				$(this).addClass("moneypositive");
			} else {
				$(this).html(value + "&euro;");
				$(this).addClass("moneynegative");
			}

			/* In der Month-View sollte es kein edit geben, da die angezeigten Beträge die Summe des Tages sind, edit ist ja für das editieren einer bestimmten Rechnung.
				Ein Tag kann mehrere Rechnungen haben, deshalb kann man so nur eine hinzufügen, editieren geht dann nur in der Tages- und Wochenansicht, weil man dort eine bestimmte Rechnung auswählen kann (hab ich dort einegefügt)
				if(value != 0) {
					var img = $(this).prevAll();
					var div = img.last();
					var a = $(div).find("a");
					var image = $(div).find("img");
					image.attr("src", "img/edit.png");
					a.attr("href", "#editRecord");
				} */
		}
	});
	
	$(".firstday").html("1972.23&euro;");
	$(".firstday").removeClass("moneynegative");
	$(".firstday").addClass("moneypositive");
	/* no edit in month-view - see above	
	var img = $(".firstday").prevAll();
	var div = img.last();
	var a = $(div).find("a");
	var image = $(div).find("img");
	image.attr("src", "img/edit.png");
	a.attr("href", "#editRecord");
	*/
	
	
	$(".akkupositiv").slideDown();
	$(".show-grid").on({
		mouseenter: function(ev) {
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".plusBild").fadeIn(400);
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".editBild").fadeIn(400);
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".deleteBild").fadeIn(400);
		},
		mouseleave: function(ev) {
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".plusBild").fadeOut(30);
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".editBild").fadeOut(30);
			$(this).children(".span2").children(".addButtonContainer").children("a").children(".deleteBild").fadeOut(30);
	}});
	
	$(".weekbg").on({
		mouseenter: function(ev) {
			$(this).children(".addButtonContainer").children("a").children(".plusBild").fadeIn(80);
			$(this).children(".addButtonContainer").children("a").children(".editBild").fadeIn(80);
		},
		mouseleave: function(ev) {
			$(this).children(".addButtonContainer").children("a").children(".plusBild").fadeOut(80);
			$(this).children(".addButtonContainer").children("a").children(".editBild").fadeOut(80);
	}});
	
	$(".row_bg").on({
		mouseenter: function(ev) {
			$(this).children("td:first").children("a").children(".editBild").fadeIn(400);
			
		},
		mouseleave: function(ev) {
			$(this).children("td:first").children("a").children(".editBild").fadeOut(30);
			
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
	$('#colorChooserDiv1').ColorPicker({
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
	$(".fixedColor1").click(function(){
			$("#chosenColor1").css({'background-color' : $(this).css("background-color")});
	});
	$(".fixedColor").on({
		mouseenter: function(ev) {
			$(this).css({"opacity" : 0.4});
		},
		mouseleave: function(ev) {
			$(this).css({"opacity" : 1});
	}});
	$(".fixedColor1").on({
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
			$('.myTab a:first').tab('show');
		}
	});
	
	/* Current Date Functions */
	$("#prevMonth").click(function(){
		now = prevDate(now)
		$("#currentDate").text(dispDate(now));
	});
	
	$("#nextMonth").click(function(){
		now = nextDate(now)
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
		} else if($("#category-chooser").find("option:selected").text() == "Salary") {
			$("#statistics-image").fadeOut(300, function() {
				$("#statistics-image").attr("src", "img/tu_fp/evaluation/statistics-salary.png");
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
	
	
	$("#grid").click(function(e){
		mode = "grid";
		href = granularity.attr("href");	
		$(".time a[href='#week']").tab("show");
		$(".time a[href='#day']").tab("show");
		$(".time a[href='#month']").tab("show");
		$(".time a[href='" + href + "']").tab("show");

	});
	
	$("#table").click(function(){
		mode = "table";
	});
	
	
	$(".time a").click(function(){
		$("#currentDate").text(dispDate(now));
		granularity = $(this);
	});
	
	$('.time a[data-toggle="tab"]').on('shown', function (e) {
		if(mode == "table"){
			$(".layout a").tab("show");
		}
		$("#currentDate").text(dispDate(now));
	})

	//evaluation - date-choosers-simulate period-change:
	$("#category-chooser").val(1);
	$("#statistics_radio_month").change(simulatePeriodChange);
	$("#statistics_radio_quarter").change(simulatePeriodChange);
	$("#statistics_radio_year").change(simulatePeriodChange);
	$("#div_statistics_month").change(simulatePeriodChange);
	$("#div_statistics_quarter").change(simulatePeriodChange);
	$("#div_statistics_year").change(simulatePeriodChange);

	//change current viewing-info on tab-change:
	$("#tabPeriodChange").bind('shown', function(e) {
		if(e.target.text == "Day") {
			showDay();
		} else if(e.target.text == "Week") {
			showWeek();
		} else if(e.target.text == "Month") {
			showMonth();
		}
	});
	
	/* Delete Confirm */
	$("a[href='#deleteRecord']").click(function(){
		return confirm("Are you sure you want to delete?")
	});
});


$(function() {
	var slider  = $('.slider');
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
		
$('.accordion').on('show hide', function(e){
    $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-arrow-down icon-arrow-up', 200);
});
