$( function() {
    $("label").addClass("ui-widget");
    $(".sliderlabel").addClass("ui-widget");
    $( ".featurebutton").checkboxradio();
    $( "#romweight" ).slider({
        min: 300,
        max: 800,
        value: 380});
    $( "#romopticalsize" ).slider({
        min: 1,
        max: 100,
        value: 60});
    $( "#romgrade" ).slider({
        min: 1,
        max: 500,
        value: 1});
    $( "#romsize" ).slider({
        min: 0.2,
        max: 5,
	step: 0.05,
        value: 1.5});

    $(".slidecontainer").on("slide", ".myslider",
		      function(event,info){
			  // $("#errmsg").text(event.type + " " + $(this).attr("id"));
			  var sliderid = $(this).attr("id");
			  var valstring = info.value.toString();
			  switch (sliderid) {
			  case "romweight":
			      $('html').css("--romwght", valstring);
			      $('#romwghttext').text(valstring);
			      break;
			  case "romopticalsize":
			      $('html').css('--romopsz', valstring);
			      $('#romopsztext').text(valstring);
			      break;
			  case "romgrade":
			      $('html').css('--romGRAD', valstring);
			      $('#romGRADtext').text(valstring);
			      break;
			  case "romsize":
			      $('html').css('--romsize', valstring + "em");
			      $('#romsizetext').text(valstring + "em");
			      break;
			  }
		      });

    $("#rompresets").selectmenu();

    $("#romsliders").on("change", function(event, size, wght, opsz, GRAD){
	$('html').css('--romsize', size.toString() + "em");
	$('#romsizetext').text(size + "em");
	$('html').css("--romwght", wght.toString());
	$('#romwghttext').text(wght);
	$('html').css('--romopsz', opsz.toString());
	$('#romopsztext').text(opsz);
	$('html').css('--romGRAD', GRAD.toString());
	$('#romGRADtext').text(GRAD);
    });

    $("#rompresets").selectmenu({
	select: function(event, ui){
	    switch (this.value) {
	    case "Any":
		break;
	    case "FinePrint Medium 0.6em":
		$("#romsize").slider("value", 0.6);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 1);
		$("#romweight").slider("value", 500);
		$("#romsliders").trigger("change", [0.6, 500, 1, 1]);
		break;
	    case "Footnote Medium 0.8em":
		$("#romsize").slider("value", 0.8);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 20);
		$("#romweight").slider("value", 500);
		$("#romsliders").trigger("change", [0.8, 500, 20, 1]);
		break;
	    case "BlockQuote Regular 1.2em":
		$("#romsize").slider("value", 1.2);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 40);
		$("#romweight").slider("value", 380);
		$("#romsliders").trigger("change", [1.2, 380, 40, 1]);
		break;
	    case "Regular 1.5em":
		$("#romsize").slider("value", 1.5);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 60);
		$("#romweight").slider("value", 380);
		$("#romsliders").trigger("change", [1.5, 380, 60, 1]);
		break;
	    case "Medium 1.5em":
		$("#romsize").slider("value", 1.5);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 60);
		$("#romweight").slider("value", 500);
		$("#romsliders").trigger("change", [1.5, 500, 60, 1]);
		break;
	    case "Subhead Regular 1.8em":
		$("#romsize").slider("value", 1.8);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 80);
		$("#romweight").slider("value", 380);
		$("#romsliders").trigger("change", [1.8, 380, 80, 1]);
		break;
	    case "Subhead Bold 1.8em":
		$("#romsize").slider("value", 1.8);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 80);
		$("#romweight").slider("value", 700);
		$("#romsliders").trigger("change", [1.8, 700, 80, 1]);
		break;
	    case "Display Light 2.3em":
		$("#romsize").slider("value", 2.3);
		$("#romgrade").slider("value", 1);
		$("#romopticalsize").slider("value", 100);
		$("#romweight").slider("value", 300);
		$("#romsliders").trigger("change", [2.3, 300, 100, 1]);
		break;
	    }
	}
    });
    

    function featureString (s, tag, v) {
	var ss = s;
	if (ss.length > 0)
	    ss += ", ";
	ss += '"' + tag + '" ' + v;
	return ss;
    }
    
    $(".featurebutton").on("change", function() {
	var fstring = "";
	if ($("#romital").is(":checked")) {
	    $("#romtextarea").css("font-style", "italic");
	    $("#aespan").css("display", "inline");
	}
	else {
	    $("#romtextarea").css("font-style", "normal");
	    $("#aespan").css("display", "none");
	}
	// Explicit with calt and liga since they are on by default.
	if ($("#romcalt").is(":checked"))
	    fstring = featureString(fstring, "calt", "on");
	else
	    fstring = featureString(fstring, "calt", "off");
	if ($("#romliga").is(":checked"))
	    fstring = featureString(fstring, "liga", "on");
	else
	    fstring = featureString(fstring, "liga", "off");
	if ($("#romdlig").is(":checked"))
	    fstring = featureString(fstring, "dlig", "on");
	if ($("#romsmcp").is(":checked"))
	    fstring = featureString(fstring, "smcp", "on");
	if ($("#romc2sc").is(":checked"))
	    fstring = featureString(fstring, "c2sc", "on");
	if ($("#rompnum").is(":checked"))
	    fstring = featureString(fstring, "pnum", "on");
	if ($("#romonum").is(":checked"))
	    fstring = featureString(fstring, "onum", "on");
	if ($("#romzero").is(":checked"))
	    fstring = featureString(fstring, "zero", "on");
	if ($("#romss02").is(":checked"))
	    fstring = featureString(fstring, "ss02", "on");
	if ($("#romss01").is(":checked"))
	    fstring = featureString(fstring, "ss01", "on");
	if ($("#romhist").is(":checked"))
	    fstring = featureString(fstring, "hist", "on");
	if ($("#romss11").is(":checked"))
	    fstring = featureString(fstring, "ss11", "on");
	if ($("#romss20").is(":checked"))
	    fstring = featureString(fstring, "ss20", "on");
	if ($("#romss12").is(":checked"))
	    fstring = featureString(fstring, "ss12", "on");
	if ($("#romss13").is(":checked"))
	    fstring = featureString(fstring, "ss13", "on");
	if ($("#romss14").is(":checked"))
	    fstring = featureString(fstring, "ss14", "on");
	if ($("#romss15").is(":checked"))
	    fstring = featureString(fstring, "ss15", "on");

	// $("#errmsg").text(fstring);
	$("#romtextarea").css("font-feature-settings", fstring);	    
    });

    $(".featurebutton").prop("checked", false);
    $("#romcalt,#romliga").prop("checked", true);
    $(".featurebutton").change();
} );
