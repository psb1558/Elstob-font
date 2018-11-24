$( function() {
//    $(".slidecontainer").controlgroup();
//    $(".featurebox").controlgroup();
    //    $(".selectbox").controlgroup();
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
    $( "#italweight" ).slider({
        min: 300,
        max: 800,
        value: 380});
    $( "#italopticalsize" ).slider({
        min: 1,
        max: 100,
        value: 60});
    $( "#italslant" ).slider({
        min: -40,
        max: 60,
        value: 0});
    $( "#italsize" ).slider({
        min: 0.2,
        max: 5,
	step: 0.05,
        value: 1.5});
    // Had slide and change events here, but change event is not being fired, so omitted for now.
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
			  case "italweight":
			      $('html').css("--italwght", valstring);
			      $('#italwghttext').text(valstring);
			      break;
			  case "italopticalsize":
			      $('html').css('--italopsz', valstring);
			      $('#italopsztext').text(valstring);
			      break;
			  case "italslant":
			      $('html').css('--italslnt', valstring);
			      $('#italslnttext').text(valstring);
			      break;
			  case "italsize":
			      $('html').css('--italsize', valstring + "em");
			      $('#italsizetext').text(valstring + "em");
			      break;
			  }
		      });
    $("#italpresets", "#rompresets").selectmenu();
    $("#italsliders").on("change", function(event, size, wght, opsz, slnt){
	// $("#errmsg").text(wght);
	$('html').css('--italsize', size.toString() + "em");
	$('#italsizetext').text(size + "em");
	$('html').css("--italwght", wght.toString());
	$('#italwghttext').text(wght);
	$('html').css('--italopsz', opsz.toString());
	$('#italopsztext').text(opsz);
	$('html').css('--italslnt', slnt.toString());
	$('#italslnttext').text(slnt);
    });
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

    // The following is sort of working, but it messes things up. Some of the variable features
    // don't get applied, and the sliders are disabled for a while after a selection is made
    // from the menu. This behavior is the same in all tested browsers (Firefox, Safari, Chrome).
    
    $("#rompresets, #italpresets").selectmenu({
	select: function(event, ui){
	    if ($(this).attr('id') == "italpresets") {
		switch (this.value) {
		case "Any":
		    break;
		case "FinePrint Medium 0.6em":
		    $("#italsize").slider("value", 0.6);
		    $("#italslant").slider("value", 0);
		    $("#italopticalsize").slider("value", 1);
		    $("#italweight").slider("value", 500);
		    $("#italsliders").trigger("change", [0.6, 500, 1, 0]);
		    break;
		case "Footnote Medium 0.8em":
		    $("#italsize").slider("value", 0.8);
		    $("#italslant").slider("value", 0);
		    $("#italopticalsize").slider("value", 20);
		    $("#italweight").slider("value", 500);
		    $("#italsliders").trigger("change", [0.8, 500, 20, 0]);
		    break;
		case "BlockQuote Regular 1.2em":
		    $("#italsize").slider("value", 1.2);
		    $("#italslant").slider("value", 0);
		    $("#italopticalsize").slider("value", 40);
		    $("#italweight").slider("value", 380);
		    $("#italsliders").trigger("change", [1.2, 380, 40, 0]);
		    break;
		case "Regular 1.5em":
		    $("#italsize").slider("value", 1.5);
		    $("#italslant").slider("value", 0);
		    $("#italopticalsize").slider("value", 60);
		    $("#italweight").slider("value", 380);
		    $("#italsliders").trigger("change", [1.5, 380, 60, 0]);
		    break;
		case "Medium 1.5em":
		    $("#italsize").slider("value", 1.5);
		    $("#italslant").slider("value", 0);
		    $("#italopticalsize").slider("value", 60);
		    $("#italweight").slider("value", 500);
		    $("#italsliders").trigger("change", [1.5, 500, 60, 0]);
		    break;
		case "Subhead Regular 1.8em":
		    $("#italsize").slider("value", 1.8);
		    $("#italslant").slider("value", 0);
		    $("#italopticalsize").slider("value", 80);
		    $("#italweight").slider("value", 380);
		    $("#italsliders").trigger("change", [1.8, 380, 80, 0]);
		    break;
		case "Subhead Bold 1.8em":
		    $("#italsize").slider("value", 1.8);
		    $("#italslant").slider("value", 0);
		    $("#italopticalsize").slider("value", 80);
		    $("#italweight").slider("value", 700);
		    $("#italsliders").trigger("change", [1.8, 700, 80, 0]);
		    break;
		case "Display Light 2.3em":
		    $("#italsize").slider("value", 2.3);
		    $("#italslant").slider("value", -40);
		    $("#italopticalsize").slider("value", 100);
		    $("#italweight").slider("value", 300);
		    $("#italsliders").trigger("change", [2.3, 300, 100, -40]);
		    break;
		}
	    }
	    else
	    {
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
	var targetbox = "#romtextarea";
	if ($(this).parent().parent().attr('id') == "ifb") {
	    targetbox = "#italtextarea";
	    if ($("#italcalt").is(":checked"))
		fstring = featureString(fstring, "calt", "on");
	    else
		fstring = featureString(fstring, "calt", "off");
	    if ($("#italliga").is(":checked"))
		fstring = featureString(fstring, "liga", "on");
	    else
		fstring = featureString(fstring, "liga", "off");
	    if ($("#italdlig").is(":checked"))
		fstring = featureString(fstring, "dlig", "on");
	    if ($("#italsmcp").is(":checked"))
		fstring = featureString(fstring, "smcp", "on");
	    if ($("#italpnum").is(":checked"))
		fstring = featureString(fstring, "pnum", "on");
	    if ($("#italonum").is(":checked"))
		fstring = featureString(fstring, "onum", "on");
	    if ($("#italzero").is(":checked"))
		fstring = featureString(fstring, "zero", "on");
	    if ($("#italss02").is(":checked"))
		fstring = featureString(fstring, "ss02", "on");
	    if ($("#italss01").is(":checked"))
		fstring = featureString(fstring, "ss01", "on");
	    if ($("#italhist").is(":checked"))
		fstring = featureString(fstring, "hist", "on");
	    $("#errmsg").text(fstring);
	}
	else {
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
	    $("#errmsg").text(fstring);
	}
	$(targetbox).css("font-feature-settings", fstring);	    
    });
} );
