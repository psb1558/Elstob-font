$(document).ready(function(){

/*jshint multistr: true */

var modtext = "The Elstob font, named for Elizabeth Elstob (1683–1756), a celebrated \
early scholar of Old English language and literature, is based on the Double Pica \
commissioned by Bishop John Fell (1625–1686) and cut by Peter de Walpergen, and used \
for many years by the Oxford University Press. Wherever possible, it is modeled on a \
specimen book printed in 1925 with type cast in the 1890s from the seventeenth-century \
matrices; digital images from the 1693 and 1706 Fell specimen books served as backup, \
and also an early eighteenth-century folio in which a lengthy dedication was printed \
in Fell’s Double Pica. The Fell types are not a font family in the modern sense; rather, \
each of the different sizes (Pica, French, Canon, Great Primer, and so on) is at least \
subtly different from the others in design, and the “English” face is entirely different. \
For the closest approximation to the original type, set the sliders to Weight 500, \
Optical Size 18, and Grade 0.";

var earlymodtext = "When the right vertuous E.W. and I were at the Emperours Court togither, \
wee gave our selves to learne horsemanship of Jon Pietro Pugliano, one that with great commendation \
had the place of an Esquire in his stable: and hee according to the fertilnes of the Italian wit, did \
not onely affoord us the demonstration of his practise, but sought to enrich our mindes with the \
contemplations therein, which he thought most precious. But with none I remember mine eares were at \
any time more loaden, then when (either angred with slow paiment, or mooved with our learnerlike \
admiration) hee exercised his speech in the praise of his facultie. He said souldiers were the \
noblest estate of mankind, and horsemen the noblest of souldiers. He said they were the maisters \
of warre, and ornaments of peace, speedie goers, and strong abiders, triumphers both in Camps and \
Courts: nay to so unbleeved a point he proceeded, as that no earthly thing bred such wonder to a \
Prince, as to be a good horseman. Skill of government was but a Pedenteria in comparison, then \
would he adde certaine praises by telling us what a peerless beast the horse was, the one \
serviceable Courtier without flattery, the beast of most bewtie, faithfulnesse, courage, and such \
more, that if I had not beene a peece of a Logician before I came to him, I thinke he would have \
perswaded me to have wished myselfe a horse. But thus much at least, with his no few words he drave \
into me, that selflove is better than any guilding, to make that seem gorgious wherein ourselves be \
parties.";

var germantext = "Es hat ſich vil volcks geſamlet / alſo / das ſy ſich vnder einandern \
trattēd / do fieng er an / vnd ſagt zuͦ ſinen jüngeren zum erſten: Huͤtend üch vor dē ſurteig ꝺ̕ \
phariſeern / welches iſt die heuchley. Es iſt aber nichts verborgens / das nitt offenbar werde: \
noch heimlichs / das man nitt wüſſen werde. Darumb was jr in der finſter nuß geſagt habēd / das \
wirt man am liecht hoͤren: was jr habend geredt ins or in der kam̄er / das wirt man predigen vff den \
taͤchern. Ich ſag üch aber / minen fründen / Foͤrchtēd üch nit vor denen die den lyb toͤdend / vnd \
darnach nichts habennd das ſy mer thuͤgind. Ich wil üch aber zeigē vor welchem jr üch frchten \
ſollend. Foͤrchtend üch vor dem / der / nach dem er toͤdet hat / ouch macht hat zewerffen inn die \
hell: ja ich sag üch / vor dem ſelben foͤrchtēd üch.";

var gothictext = "Warþ þan in dagans jainans, urrann gagrefts fram kaisara Agustau, \
gameljan allana midjungard. soh þan gilstrameleins frumista warþ at wisandin kindina Swriais \
raginondin Saurim Kwreinaiau. jah iddjedun allai, ei melidai weseina, ƕarjizuh in seinai baurg. \
Urrann þan jah Iosef us Galeilaia, us baurg Nazaraiþ, in Iudaian, in baurg Daweidis sei haitada \
Beþlaihaim, duþe ei was us garda fadreinais Daweidis, anameljan miþ Mariin sei in fragiftim \
was imma qeins, wisandein inkilþon. warþ þan, miþþanei þo wesun jainar, usfullnodedun dagos \
du bairan izai. jah gabar sunu seinana þana frumabaur jah biwand ina jah galagida ina in uzetin, \
unte ni was im rumis in stada þamma. jah hairdjos wesun in þamma samin landa, þairhwakandans \
jah witandans wahtwom nahts ufaro hairdai seinai. iþ aggilus fraujins anaqam ins jah wulþus \
fraujins biskain ins, jah ohtedun agisa mikilamma. jah qaþ du im sa aggilus: ni ogeiþ, \
unte sai, spillo izwis faheid mikila, sei wairþiþ allai managein, þatei gabaurans ist izwis \
himma daga nasjands, saei ist Xristus frauja, in baurg Daweidis.";

var norsetext = "Þá mælti Hárr: Þá er þeir gengu með sævarstrǫndu Borssynir, fundu þeir \
tré tvau ok tóku upp trén ok skǫpuðu af menn. Gaf inn fyrsti ǫnd ok líf, annarr vit ok \
hræring, þriði ásjónu, mál ok heyrn ok sjón, gáfu þeim klæði ok nǫfn. Hét karlmaðrinn Askr, \
en konan Embla, ok ólst þaðan af mannkindin, sú er byggðin var gefinn undir Miðgarði. Þar \
næst gerðu þeir sér borg í miðjum heimi, er kǫlluð er Ásgarðr. Þat kǫllum vér Trója. Þar byggðu \
goðin ok ættir þeira, ok gerðust þaðan af mǫrg tíðendi ok greinir bæði á jǫrðu ok í lofti. Þar \
er einn staðr, er Hliðskjálf heitir, ok þá er Óðinn settist þar í hásæti, þá sá hann of alla \
heima ok hvers manns athæfi ok vissi alla hluti, þá er hann sá. Kona hans hét Frigg Fjǫrgvinsdóttir, \
ok af þeira ætt er sú kynslóð komin, er vér kǫllum ása ættir, er byggt hafa Ásgarð inn forna ok þau \
ríki, er þar liggja til, ok er þat allt goðkunnug ætt. Ok fyrir því má hann heita Alfǫðr, at hann er \
faðir allra goðanna ok manna ok alls þess, er af honum ok hans krafti var fullgert.";

var latintext = "Humanas laudes et mortalium \
ınsulas uıdımus aut ére ıncıso \
conscrıptas· aut auro radıantıb: \
lıtterıs· ad posterıtatıs memorıam cōmendatas· Et ısta \
attendentes mıror quare non erubescımꝰ \
mılıtum xpı uıctorıas sılentıo tégere & n̄ \
ad laudem ımperatorıs eoꝝ qualıt̄ \
pugnauerınt contra hostes & uıcerınt· sedulıs \
saltım uılıbus tradere & ad ıncıtandos \
anımos bellatoꝝ dılıgentıus explıcare· \
Multa bona talıū narratıonū scrıpta conuertant; \
Laus deı est cum ısta leguntur· \
memorıa scōꝝ excolıtur⹎ aedıfıcacıo m̄tıb: \
tradıtur. honor martırıbus exhıb&ur· \
Hınc ınfıdelıbus nascıtur meror. ıncredulıs \
lıuor⹎ ındıscıplınatıs angustıa· & scı̄s om̅ıb: \
cum xpō gaudentıb: solus dıabolus \
ıngemıscıt. quı uıd& pugnā suā eo usq: armıs \
celestıbus debellatā· ut ex ıpsa pugna ılle \
melıus uıctor exıster& quı putatꝰ ÷ uıctꝰ; \
Denıq: putabat se tunc hostıs scōs deı \
occıdendo uıncere· ıllı autē melıus occısı \
uıncebant· Int̄rogatı ılıco confıtebantur· \
dānatı grās referebant; Sıc denıq: legımus \
antıquas dn̄ı uıctorıas celebratas· qᷓndo \
dıx̄ ınımıcus ꝑsequens comp̄hendā· \
partıbor spolıa· replebo anımā meā· Int̄fıcıā \
gladıo meo· domınabıt᷑ manꝰ mea· Sed \
extendıt dexterā suā & deuorauıt eos  t̄ra· \
& popꝉm suum sanguınıs suı pr&ıo lıƀerauıt;";

var oldenglishtext = "Her on ðisum geare forðferde \
Ælfgiue Ymma Eadwardes cynges modor ⁊ Hardacnutes cynges. ⁊ on \
þam sylfan geare gerædde se cyng ⁊ his witan þæt mann sceolde \
forðian ut to Sandwic scipu. ⁊ setton Raulf eorl ⁊ Oddan eorl to \
heafodmannum þærto. Ða gewende Godwine eorl ut fram Brycge mid \
his scypum to Yseran. and let ut ane dæge ær midsumeres \
mæsseæfene þæt he com to Næsse. þe is besuðan Rumenea. Þa com \
hit to witenne þam eorlum ut to Sandwic. ⁊ hi þa gewendon ut \
æfter þam oðrum scipum. ⁊ bead man landfyrde ut ongean þa \
scipu. Þa amang þison þa wearð Godwine eorl gewarnod. ⁊ gewende \
him þa into Pefenesea. ⁊ wearð þæt wæder swiðe strang. þæt þa \
eorlas ne mihton gewitan hwet Godwine eorl gefaren hæfde. ⁊ \
gewende þa Godwine eorl ut agean þæt he com eft to Brycge. ⁊ ða \
oðra scipu gewenden heom eft ongean to Sandwic. ⁊ gerædde man þa \
þæt þa scipu gewendan eft ongean to Lundene. ⁊ sceolde man \
setton oðre eorlas ⁊ oðre hasæton to þam scipum.";

var middleenglishtext = "Nan ancre bi mi read ne schal makien \
ꝓfessiun. ꝥ is bihaten ase heast⹎ but þreo þinges. ꝥ beoð obedience. \
chastete. ⁊ stude steaðeluestnesse. ꝥ ha ne schal ꝥ stude neau͛ \
mare changin bute for nede ane. as strengðe ⁊ deaðes dred. obedience of \
hire bischop oðer of his herre. for hƿa se nimeð þing on hond ⁊ bihat hit \
Godd as heast forte don hit⹎ ha bint hire þerto. ⁊ sunegeð deadliche i þe \
bruche. ȝef ha hit brekeð ƿilles. ȝef ha hit ne bihat naƿt. ha hit mei do þah \
⁊ leauen hƿen ha ƿel ƿule. as of mete. of drunch. flesch forgan oðer fisch. \
alle oþer sƿucche þinges. of ƿerunge. of liggunge. of ures. of oþre beoden. \
segge sƿa monie oðer o sƿucche ƿise. þeos ⁊ þulliche oþre beoð alle i freo \
ƿil to don oðer to leten hƿil me ƿule ant hƿen me ƿule bute ha beon bihaten. \
ah chearite ꝥ is luue. ⁊ eadmodnesse ⁊ þolemodnesse. treoƿeschipe ⁊ \
haldunge of þe alde ten heastes. Schrift ⁊ penitence. þeos ⁊ þulliche oþre \
þe beoð summe of þe alde lahe summe of þe neoƿe⹎ ne beoð naƿt monnes fundles ne \
riƿle ꝥ mon stalde⹎ ah beoð Godes heastes. ant for þi euch mon mot ham nede \
halden.";

var oldsaxontext = "Thuo uuard that heƀancuningas bodon   harm an is muode,\n\
that hie is giuuerkes so   uundran scolda\n\
endi that ni uuelda gihuggean,   that ina mahti helag god\n\
so alaiungan   so hie fan erist uuas\n\
selƀo giuuirkean,   ef hie so uueldi.\n\
Scerida im thuo te uuitie   that hie ni mohta enig uuord gisprekean,\n\
gimahlean mid is muđu,   ‘er than thu magu uuirđit\n\
fan thinero aldero idis   erl afuodit,\n\
kindiung giboran   kunneas guodes,\n\
uuanom te thesaro uueroldi.   Than skalt thu eft uuord sprekan,\n\
hebbean thinera stemna giuuald:   ni tharft thu stum uuesan\n\
langron huila.’   Thuo uuarth it san gilestid so,\n\
giuuorđan te uuaron   so thar on them uuihe gisprak\n\
engil thes alouualdon:  uuart ald gumo\n\
spraka bilosid,   thuo hie spahan hugi\n\
bari an is briostun.";

    $("label").addClass("ui-widget");
    $(".sliderlabel").addClass("ui-widget");
    $( ".featurebutton").checkboxradio();

    $( "#romweight" ).slider({
        min: 200,
        max: 800,
        value: 400});
    $( "#romopticalsize" ).slider({
        min: 6,
        max: 18,
        step: 0.01,
        value: 10});
    $( "#romgrade" ).slider({
        min: 0,
        max: 1,
        step: 0.01,
        value: 0});
    $( "#romsize" ).slider({
        min: 0.2,
        max: 5,
        step: 0.05,
        value: 1.5});
    $( "#romspacing" ).slider({
        min: -0.2,
        max: 0.2,
        step: 0.001,
        value: 0});

    $(".slidecontainer").on("slide", ".myslider", function(event,info) {
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
        case "romspacing":
          $('html').css('--romspacing', valstring + "em");
          $('#romspacingtext').text(valstring + "em");
          break;
        }
      }
    );

    $("#rompresets").selectmenu();
    $("#languages").selectmenu();

    $("#romsliders").on("change", function(event, size, wght, opsz, GRAD, spacing) {
        $('html').css('--romsize', size.toString() + "em");
        $('#romsizetext').text(size + "em");
        $('html').css('--romspacing', spacing.toString() + "em");
        $('#romspacingtext').text(spacing + "em");
        $('html').css("--romwght", wght.toString());
        $('#romwghttext').text(wght);
        $('html').css('--romopsz', opsz.toString());
        $('#romopsztext').text(opsz);
        $('html').css('--romGRAD', GRAD.toString());
        $('#romGRADtext').text(GRAD);
      }
    );

    $("#rompresets").selectmenu({	select: function(event, ui) {
	      switch (this.value) {
          case "Any":
            break;
          case "6pt Medium 0.6em":
            $("#romsize").slider("value", 0.6);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romopticalsize").slider("value", 6);
            $("#romweight").slider("value", 500);
            $("#romsliders").trigger("change", [0.6, 500, 6, 0, 0]);
            break;
          case "8pt Medium 0.8em":
            $("#romsize").slider("value", 0.8);
	          $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romopticalsize").slider("value", 8);
            $("#romweight").slider("value", 500);
            $("#romsliders").trigger("change", [0.8, 500, 8, 0, 0]);
            break;
          case "10pt Regular 1.2em":
            $("#romsize").slider("value", 1.2);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romopticalsize").slider("value", 10);
            $("#romweight").slider("value", 400);
            $("#romsliders").trigger("change", [1.2, 400, 10, 0, 0]);
            break;
          case "Regular 1.5em":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
      		  $("#romgrade").slider("value", 0);
      		  $("#romopticalsize").slider("value", 12);
      		  $("#romweight").slider("value", 400);
      		  $("#romsliders").trigger("change", [1.5, 400, 12, 0, 0]);
      		  break;
	        case "Medium 1.5em":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
        		$("#romopticalsize").slider("value", 12);
        		$("#romweight").slider("value", 500);
        		$("#romsliders").trigger("change", [1.5, 500, 12, 0, 0]);
        		break;
          case "14pt Regular 1.8em":
            $("#romsize").slider("value", 1.8);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
        		$("#romopticalsize").slider("value", 14);
        		$("#romweight").slider("value", 400);
        		$("#romsliders").trigger("change", [1.8, 400, 14, 0, 0]);
        		break;
          case "14pt Bold 1.8em":
            $("#romsize").slider("value", 1.8);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
        		$("#romopticalsize").slider("value", 14);
        		$("#romweight").slider("value", 700);
        		$("#romsliders").trigger("change", [1.8, 700, 14, 0, 0]);
        		break;
          case "18pt Light 2.3em":
            $("#romsize").slider("value", 2.3);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
        		$("#romopticalsize").slider("value", 18);
        		$("#romweight").slider("value", 300);
        		$("#romsliders").trigger("change", [2.3, 300, 18, 0, 0]);
        		break;
          }
        }
      }
    );

    var fstring = "normal";
    $("#romtextarea").text(modtext);

    $("#languages").selectmenu({select: function(event, ui) {
        var l = "en";
  		  var t = "";
  		  var whitespace = "normal";
  		  var currentfstring = fstring;

	      switch (this.value) {
          case "ModEnglish":
            t = modtext;
            // $( "input[type='checkbox']" ).prop("checked", false).first().change();
            $( ".featurebutton" ).prop("checked", false).last().change();
            break;
          case "eModEnglish":
            t = earlymodtext;
            $( ".featurebutton" ).not("#romss08, #romdlig").prop("checked", false).change();
            $("#romss08, #romdlig").prop("checked",true).change();
            break;
          case "OldEnglish":
            // lang code is ang, but we use en to trigger English thorn and eth.
            t = oldenglishtext;
            $( ".featurebutton" ).prop("checked", false).change();
            break;
          case "MiddleEnglish":
            t = middleenglishtext;
            // r rotunda with rules; always long s; crossed Tironian nota
            $( ".featurebutton" ).not("#romhist, #romss16, #romcv402").prop("checked", false).change();
            $("#romhist, #romss16, #romcv402").prop("checked",true).change();
            break;
          case "Latin":
            l = "la";
            t = latintext;
            $( ".featurebutton" ).not("rom#hist").prop("checked", false).change();
            $("#romhist").prop("checked",true).change();
            break;
          case "Gothic":
            // lang code for Gothic is got. Here it simply means "not English."
            t = gothictext;
            l = "got";
            $( ".featurebutton" ).prop("checked", false).change();
            break;
          case "OldIcelandic":
            l = "is";
            t = norsetext;
            $( ".featurebutton" ).prop("checked", false).change();
            break;
          case "OldSaxon":
            // lang code is osx.
            l = "osx";
            t = oldsaxontext;
            whitespace = "pre-wrap";
            $( ".featurebutton" ).prop("checked", false).change();
            break;
          case "German":
            l = "de";
            t = germantext;
            // Long s is done manually for German. Use r rotunda with rules.
            $( ".featurebutton" ).not("#romss16").prop("checked", false).change();
            $("#romss16").prop("checked",true).change();
          }

        $("#romtextarea").attr("lang",l)
          .css({"white-space": whitespace})
          .text(t);
        }
      }
    );


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
      // Actually no reason to let folks turn them off.
      /*
      if ($("#romcalt").is(":checked"))
        fstring = featureString(fstring, "calt", "on");
      else
        fstring = featureString(fstring, "calt", "off");
	    if ($("#romliga").is(":checked"))
	      fstring = featureString(fstring, "liga", "on");
	    else
	      fstring = featureString(fstring, "liga", "off");
      */
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
	// if ($("#romss05").is(":checked"))
	//    fstring = featureString(fstring, "ss05", "on");
      if ($("#romhist").is(":checked"))
	      fstring = featureString(fstring, "hist", "on");
      if ($("#romcv33").is(":checked"))
	      fstring = featureString(fstring, "cv33", "on");
      if ($("#romcv401").is(":checked"))
  	    fstring = featureString(fstring, "cv40", "1");
      if ($("#romcv402").is(":checked"))
    	  fstring = featureString(fstring, "cv40", "2");
      if ($("#romss12").is(":checked"))
	      fstring = featureString(fstring, "ss12", "on");
      if ($("#romss13").is(":checked"))
	      fstring = featureString(fstring, "ss13", "on");
      if ($("#romss14").is(":checked"))
        fstring = featureString(fstring, "ss14", "on");
      if ($("#romss15").is(":checked"))
	      fstring = featureString(fstring, "ss15", "on");
      if ($("#romss11").is(":checked"))
	      fstring = featureString(fstring, "ss11", "on");
      if ($("#romss08").is(":checked"))
        fstring = featureString(fstring, "ss08", "on");
      if ($("#romss16").is(":checked"))
        fstring = featureString(fstring, "ss16", "on");

	    $("#romtextarea").css("font-feature-settings", fstring);
    });

    $(".featurebutton").prop("checked", false);
//  $("#romcalt,#romliga").prop("checked", true);
    $(".featurebutton").change();
  }
);
