$( function() {
    $( "#romweight" ).slider({
        min: 300,
        max: 800,
        value: 380,
        slide: function(event,info){
            var n = info.value.toString();
            $('html').css("--romwght", n);
            $('#romwghttext').text(n);
        }});
    $( "#romopticalsize" ).slider({
        min: 1,
        max: 100,
        value: 60,
        slide: function(event,info){
            var n = info.value.toString();
            $('html').css('--romopsz', n);
            $('#romopsztext').text(n);
        }});
    $( "#romgrade" ).slider({
        min: 1,
        max: 500,
        value: 1,
        slide: function(event,info){
            var n = info.value.toString();
            $('html').css('--romGRAD', n);
            $('#romGRADtext').text(n);
        }});
    $( "#romsize" ).slider({
        min: 5,
        max: 100,
        value: 20,
        slide: function(event,info){
            $('html').css('--romsize', info.value);
            $('#romsizetext').text(info.value);
	}});
    $( "#italweight" ).slider({
        min: 300,
        max: 800,
        value: 380,
        slide: function(event,info){
            var n = info.value.toString();
            $('html').css("--italwght", n);
            $('#italwghttext').text(n);
        }});
    $( "#italopticalsize" ).slider({
        min: 1,
        max: 100,
        value: 60,
        slide: function(event,info){
            var n = info.value.toString();
            $('html').css('--italopsz', n);
            $('#italopsztext').text(n);
        }});
    $( "#italslant" ).slider({
        min: -40,
        max: 60,
        value: 0,
        slide: function(event,info){
            var n = info.value.toString();
            $('html').css('--italslnt', n);
            $('#italslnttext').text(n);
	}});
    $( "#italsize" ).slider({
        min: 5,
        max: 100,
        value: 20,
        slide: function(event,info){
            $('html').css('--italsize', info.value);
            $('#italsizetext').text(info.value);
	}});
//    $(".featurebox").controlgroup();
//    $(".slidecontainer").controlgroup();

    function featureString (s, tag, v) {
	var ss = s;
	if (ss.length > 0)
	    ss += ", ";
	ss += '"' + tag + '" ' + v;
	return ss;
    }
    
    $(".featurebutton").on("click", function() {
	// var f = featuretags[this.id];
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
