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
});

// $('#test').in({
    // shown: function(){
        // $(this).css('overflow','visible !important');
    // },
    // hide: function(){
        // $(this).css('overflow','hidden !important');
    // }
// });
