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
  Optical Size 18, Grade 0, Spacing 1, and (for the italic) Slant 0.";

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
  trattēd / do fieng er an / vnd ſagt zuͦ ſinen jüngeren zum erſten: Huͤtend üch vor dē ſurteig \
  ꝺ̕  phariſeern / welches iſt die heuchley. Es iſt aber nichts verborgens / das nitt offenbar werde: \
  noch heimlichs / das man nitt wüſſen werde. Darumb was jr in der finſter nuß geſagt habēd / das \
  wirt man am liecht hoͤren: was jr habend geredt ins or in der kam̄er / das wirt man predigen vff den \
  taͤchern. Ich ſag üch aber / minen fründen / Foͤrchtēd üch nit vor denen die den lyb toͤdend / vnd \
  darnach nichts habennd das ſy mer thuͤgind. Ich wil üch aber zeigē vor welchem jr üch förchten \
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

  var norsetext = "Ulꝼr het mͬ ⁊ vͬ bialꝼa son ⁊ hallb͛v ꝺott᷑ vlꝼs híns v arɡa. hͦ vͬ sẏstir \
  halbiarnͬ halꝼtravllz oꝛ hraꝼnistv. ꝼaðir ketils hǽnɡs. vlꝼr vͬ svo mikill \
  ⁊ sterkr at æͥ vͦ h̵s ȷaꝼninɡíar i þ̵n tīa i lꝺ̵inu en er h̵ vͬ aꝼ vnɡa allꝺͥ \
  la h̵ i vikinɡu ⁊ h͛ naði. M; h̵m vͬ sa mͬ i vikínɡv ⁊ ꝼelaɡ skap e͛ kari hͭ \
  ⁊ uͬ kallaðꝛ berzlv kari. h̵ vͬ ɡoꝼuɡ men̄i ⁊ hin̄ mesti aꝼreks mͬ. þ̵r vlꝼr \
  ⁊ kari attu ein̄ seoꝺ ⁊ uͬ þ̵ra vinatta mikil. En er þ̵r reðuz oꝛ hernaꝺi. þa ꝼoꝛ kari tͥ \
  buss sins i herðzlu. h̵ vͬ storauðiɡꝛ mͬ ⁊ atti þriu boꝛn. Eẏvinꝺꝛ lambi het s. h̵s an̄aʀ \
  het aulꝼv͛ hnuꝼa. sabioꝛɡ hͭ ꝺ. h̵s. hͦ vͬ ꝼͥð. h̵ar ꝼekk vlꝼr ⁊ ꝼoꝛ m; h̵a heī tͥ buss sins \
  vlꝼr vͬ mͬ auðiɡꝛ bæꝺi at lꝺ̵m ⁊ lausa ꝼé. h̵ tok lenꝺz mᷦ rett sem h̵s lanɡꝼeꝺɡͬ. ɡ͛ꝺiz h̵ \
  rikr ⁊ burisnu mͬ mikill. vͬ þ̵ siꝺꝛ at risa upp ꜳrꝺeɡíss ⁊ ɡɡ̄a ū sẏslur \
  at sea v͛km̄. eðꝛ þ̵ɡat sem smiꝺir vͦ sa h̵ ẏꝼ͛ tun ⁊ akra. en vͬ atali vͥ vitᷓ m̄ þa er raða \
  h̵s þẏrꝼtu. kun̄i h̵ tͥ ꝼlez ɡoꝺ raꝺ at leɡɡͣ. En hv͛n ꝺaɡ e͛ at kuellꝺi kō þa ɡ͛ꝺi \
  h̵ sͣ stẏɡɡꝛ at ꝼair m̄ mattu orðū vͥ h̵ skipta h̵ vͬ akaꝼliɡa kuellꝺsuæꝼr ⁊ mẏrɡín \
  vakr. þ̵ vͬ mꜳl mͣ at h̵ v͛i hamram̄r. þͥ vͬ h̵ kvellꝺulꝼr kallaðꝛ þau ulꝼr attu tua .ss."

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
  ælfgiue ymma Eadwardes cynges modor ⁊ hardacnutes cynges. ⁊ on \
  þam sylfan geare gerædde se cyng ⁊ his witan ꝥ mann sceolde \
  forðian ut to Sandwic scipu. ⁊ setton raulf eorl ⁊ oddan eorl to \
  heafodmannū þærto. Ða gewende Godwine eorl út frā brycge mid \
  his scypum to yseran. and let ut ane dæge ær midsumeres \
  mæsseæfene ꝥ he cō to næsse. þe is besuðan rumenea. Þa cō \
  hit to witenne þā eorlū ut to sandwic. ⁊ hi þa gewendon ut \
  æfter þam oðrum scipum. ⁊ bead man landfyrde ut ongean þa \
  scipu. Þa amang þison þa wearð Godwine eorl gewarnod. ⁊ gewende \
  him þa into pefenesea. ⁊ wearð ꝥ wæder swiðe strang. ꝥ þa \
  eorlas ne mihton gewitan hwet Godwine eorl gefaren hæfde. ⁊ \
  gewende þa godwine eorl ut agean ꝥ he cō eft to brycge. ⁊ ða \
  oðra scipu gewenden heom eft ongean to sandwic. ⁊ gerædde man þa \
  ꝥ þa scipu gewendan eft ongean to lundene. ⁊ sceolde man \
  setton oðre eorlas ⁊ oðre hasæton to þā scipū. þa lenged hit \
  man swa lange. ꝥ seo scipfyrd eall belaf. ⁊ gewendon ealle heō \
  ham. Ða geaxode Godwine eorl þet ⁊ teah þa úp his segl ⁊ his \
  lið. ⁊ gewendon heom þa west to wiht. ⁊ eodon þær úp. ⁊ hergodon \
  swa lange þær ꝥ ꝥ folc geald heom swa mycel. swa hi heō on legden. \
  ⁊ gewendon heō þa westwearð oð þet hi comon to portlande.";

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

var greektext = "Ὃ ἦν ἀπ’ ἀρχῆς, ὃ ἀκηκόαμεν, ὃ ἑωράκαμεν τοῖς ὀφθαλμοῖς ἡμῶν, ὃ ἐθεασάμεθα καὶ αἱ χεῖρες \
ἡμῶν ἐψηλάφησαν, περὶ τοῦ λόγου τῆς ζωῆς καὶ ἡ ζωὴ ἐφανερώθη, καὶ ἑωράκαμεν καὶ μαρτυροῦμεν καὶ ἀπαγγέλλομεν \
ὑμῖν τὴν ζωὴν τὴν αἰώνιον ἥτις ἦν πρὸς τὸν πατέρα καὶ ἐφανερώθη ἡμῖν ὃ ἑωράκαμεν καὶ ἀκηκόαμεν ἀπαγγέλλομεν \
καὶ ὑμῖν, ἵνα καὶ ὑμεῖς κοινωνίαν ἔχητε μεθ’ ἡμῶν. καὶ ἡ κοινωνία δὲ ἡ ἡμετέρα μετὰ τοῦ πατρὸς καὶ μετὰ τοῦ υἱοῦ \
αὐτοῦ Ἰησοῦ Χριστοῦ. καὶ ταῦτα γράφομεν ἡμεῖς ἵνα ἡ χαρὰ ἡμῶν ᾖ πεπληρωμένη. Καὶ ἔστιν αὕτη ἡ ἀγγελία ἣν \
ἀκηκόαμεν ἀπ’ αὐτοῦ καὶ ἀναγγέλλομεν ὑμῖν, ὅτι ὁ θεὸς φῶς ἐστιν καὶ σκοτία ἐν αὐτῷ οὐκ ἔστιν οὐδεμία. Ἐὰν \
εἴπωμεν ὅτι κοινωνίαν ἔχομεν μετ’ αὐτοῦ καὶ ἐν τῷ σκότει περιπατῶμεν, ψευδόμεθα καὶ οὐ ποιοῦμεν τὴν ἀλήθειαν: \
ἐὰν δὲ ἐν τῷ φωτὶ περιπατῶμεν ὡς αὐτός ἐστιν ἐν τῷ φωτί, κοινωνίαν ἔχομεν μετ’ ἀλλήλων καὶ τὸ αἷμα Ἰησοῦ τοῦ \
υἱοῦ αὐτοῦ καθαρίζει ἡμᾶς ἀπὸ πάσης ἁμαρτίας. ἐὰν εἴπωμεν ὅτι ἁμαρτίαν οὐκ ἔχομεν, ἑαυτοὺς πλανῶμεν καὶ ἡ \
ἀλήθεια οὐκ ἔστιν ἐν ἡμῖν. ἐὰν ὁμολογῶμεν τὰς ἁμαρτίας ἡμῶν, πιστός ἐστιν καὶ δίκαιος ἵνα ἀφῇ ἡμῖν τὰς ἁμαρτίας \
καὶ καθαρίσῃ ἡμᾶς ἀπὸ πάσης ἀδικίας. ἐὰν εἴπωμεν ὅτι οὐχ ἡμαρτήκαμεν, ψεύστην ποιοῦμεν αὐτὸν καὶ ὁ λόγος αὐτοῦ \
οὐκ ἔστιν ἐν ἡμῖν.";

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
        min: 0,
        max: 1,
        step: 0.01,
        value: 0});
    $( "#romslnt").slider({
        min: 0,
        max: 15,
        step: 0.01,
        value: 8});

    $("#rompresets").selectmenu();
    $("#languages").selectmenu();
    var fstring = "normal";
    $("#romtextarea").text(modtext);
    $("#languages").val("ModEnglish");
    $("#languages").selectmenu("refresh");
    $("#rompresets").val("Reg");
    $("#rompresets").selectmenu("refresh");

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
        case "romslnt":
          $('html').css('--romslnt', valstring);
          $('#romslnttext').text(valstring);
          break;
        case "romsize":
          $('html').css('--romsize', valstring + "em");
          $('#romsizetext').text(valstring + "em");
          break;
        case "romspacing":
          $('html').css('--romspacing', valstring);
          $('#romspacingtext').text(valstring);
          break;
        }
      }
    );

    $("#romsliders").on("change", function(event, size, wght, opsz, GRAD, spacing, slnt) {
        ts = size.toString();
        if (ts.indexOf('em') < 0)
          ts = ts + 'em'
        $('html').css('--romsize', ts);
        $('#romsizetext').text(ts);
        $('html').css('--romspacing', spacing.toString());
        $('#romspacingtext').text(spacing);
        $('html').css("--romwght", wght.toString());
        $('#romwghttext').text(wght);
        $('html').css('--romopsz', opsz.toString());
        $('#romopsztext').text(opsz);
        $('html').css('--romGRAD', GRAD.toString());
        $('#romGRADtext').text(GRAD);
        $('html').css('--romslnt', slnt.toString());
        $('#romslnttext').text(slnt);
      }
    );

    $("#rompresets").selectmenu({	select: function(event, ui) {
	      switch (this.value) {
          case "Reg":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 12);
            $("#romweight").slider("value", 400);
            // Order: size, wght, opsz, grad, spacing
            $("#romsliders").trigger("change", [1.5, 400, 12, 0, 0, 8]);
            break;
          // case "6pt (Fine Print)":
          case "Reg6pt":
            $("#romsize").slider("value", 0.6);
	          $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 6);
            $("#romweight").slider("value", 400);
            $("#romsliders").trigger("change", [0.6, 400, 6, 0, 0, 8]);
            break;
          case "Reg8pt":
            $("#romsize").slider("value", 0.9);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 8);
            $("#romweight").slider("value", 400);
            $("#romsliders").trigger("change", [0.8, 400, 8, 0, 0, 8]);
            break;
          case "Reg10pt":
            $("#romsize").slider("value", 1.2);
            $("#romspacing").slider("value", 0);
      		  $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
      		  $("#romopticalsize").slider("value", 10);
      		  $("#romweight").slider("value", 400);
      		  $("#romsliders").trigger("change", [1.0, 400, 10, 0, 0, 8]);
      		  break;
	        case "Reg14pt":
            $("#romsize").slider("value", 1.8);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
        		$("#romopticalsize").slider("value", 14);
        		$("#romweight").slider("value", 400);
        		$("#romsliders").trigger("change", [1.8, 400, 14, 0, 0, 8]);
        		break;
          case "Reg18pt":
            $("#romsize").slider("value", 2.3);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
        		$("#romopticalsize").slider("value", 18);
        		$("#romweight").slider("value", 400);
        		$("#romsliders").trigger("change", [2.3, 400, 18, 0, 0, 8]);
        		break;
          case "ExtraLight":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
        		$("#romopticalsize").slider("value", 12);
        		$("#romweight").slider("value", 200);
        		$("#romsliders").trigger("change", [1.5, 200, 12, 0, 0, 8]);
        		break;
          case "Light":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
        		$("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
        		$("#romopticalsize").slider("value", 12);
        		$("#romweight").slider("value", 300);
        		$("#romsliders").trigger("change", [1.5, 300, 12, 0, 0, 8]);
        		break;
          case "Medium":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
          	$("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
          	$("#romopticalsize").slider("value", 12);
          	$("#romweight").slider("value", 500);
          	$("#romsliders").trigger("change", [1.5, 500, 12, 0, 0, 8]);
          	break;
          case "SemiBold":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 12);
            $("#romweight").slider("value", 600);
            $("#romsliders").trigger("change", [1.5, 600, 12, 0, 0, 8]);
            break;
          case "Bold":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 12);
            $("#romweight").slider("value", 700);
            $("#romsliders").trigger("change", [1.5, 700, 12, 0, 0, 8]);
            break;
          case "Bold6pt":
            $("#romsize").slider("value", 0.6);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 6);
            $("#romweight").slider("value", 700);
            $("#romsliders").trigger("change", [0.6, 700, 6, 0, 0, 8]);
            break;
          case "Bold8pt":
            $("#romsize").slider("value", 0.9);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 8);
            $("#romweight").slider("value", 700);
            $("#romsliders").trigger("change", [0.9, 700, 8, 0, 0, 8]);
            break;
          case "Bold10pt":
            $("#romsize").slider("value", 1.2);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 10);
            $("#romweight").slider("value", 700);
            $("#romsliders").trigger("change", [1.2, 700, 10, 0, 0, 8]);
            break;
          case "Bold14pt":
            $("#romsize").slider("value", 1.8);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 14);
            $("#romweight").slider("value", 700);
            $("#romsliders").trigger("change", [1.8, 700, 14, 0, 0, 8]);
            break;
          case "Bold18pt":
            $("#romsize").slider("value", 2.3);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 18);
            $("#romweight").slider("value", 700);
            $("#romsliders").trigger("change", [2.3, 700, 18, 0, 0, 8]);
            break;
          case "ExtraBold":
            $("#romsize").slider("value", 1.5);
            $("#romspacing").slider("value", 0);
            $("#romgrade").slider("value", 0);
            $("#romslnt").slider("value", 8);
            $("#romopticalsize").slider("value", 12);
            $("#romweight").slider("value", 800);
            $("#romsliders").trigger("change", [1.5, 800, 12, 0, 0, 8]);
            break;
          }
        }
      }
    );

    $("#languages").selectmenu({select: function(event, ui) {
        var l = "en";
  		  var t = "";
  		  var whitespace = "normal";
  		  var currentfstring = fstring;

	      switch (this.value) {
          case "ModEnglish":
            t = modtext;
            // $( "input[type='checkbox']" ).prop("checked", false).first().change();
            $( ".featurebutton" ).not("#romital").prop("checked", false).change();
            break;
          case "eModEnglish":
            t = earlymodtext;
            $( ".featurebutton" ).not("#romital, #romss08, #romss18, #romdlig").prop("checked", false).change();
            $("#romss08, #romss18, #romdlig").prop("checked",true).change();
            $("#romspacing").slider("value", 1);
            $("#romsliders").trigger("change", [$('html').css('--romsize'), $('html').css("--romwght"),
                                     $('html').css('--romopsz'), $('html').css('--romGRAD'),
                                     1, $('html').css('--romslnt')]);
            break;
          case "OldEnglish":
            // lang code is ang, but we use en to trigger English thorn and eth.
            t = oldenglishtext;
            $( ".featurebutton" ).not("#romital").prop("checked", false).change();
            break;
          case "MiddleEnglish":
            t = middleenglishtext;
            // r rotunda with rules; always long s; crossed Tironian nota
            $( ".featurebutton" ).not("#romital, #romcv382, #romss16, #romcv692").prop("checked", false).change();
            $("#romcv382, #romss16, #romcv692").prop("checked",true).change();
            break;
          case "Latin":
            l = "la";
            t = latintext;
            $( ".featurebutton" ).not("#romital, #romcv382").prop("checked", false).change();
            $("#romcv382").prop("checked",true).change();
            break;
          case "Gothic":
            // lang code for Gothic is got. Here it simply means "not English."
            t = gothictext;
            l = "got";
            $( ".featurebutton" ).not("#romital").prop("checked", false).change();
            break;
          case "OldIcelandic":
            l = "is";
            t = norsetext;
            $( ".featurebutton" ).not("#romital, #romcv181, #romcv692").prop("checked", false).change();
            $("#romcv382, #romcv181, #romcv692").prop("checked",true).change();
            break;
          case "OldSaxon":
            // lang code is osx.
            l = "osx";
            t = oldsaxontext;
            whitespace = "pre-wrap";
            $( ".featurebutton" ).not("#romital").prop("checked", false).change();
            break;
          case "German":
            l = "de";
            t = germantext;
            // Long s is done manually for German. Use r rotunda with rules.
            $( ".featurebutton" ).not("#romital, #romss16").prop("checked", false).change();
            $("#romss16").prop("checked",true).change();
            break;
          case "Greek":
            l = "el"
            t = greektext;
            $( ".featurebutton" ).not("#romital").prop("checked", false).change();
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
        $("#romslntlabel, #romslnt").css("display", "block");
      }
      else {
        $("#romtextarea").css("font-style", "normal");
        $("#aespan, #romslntlabel, #romslnt").css("display", "none");
      }
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
      if ($("#romcv382").is(":checked"))
	      fstring = featureString(fstring, "cv38", "2");
      if ($("#romcv57").is(":checked"))
	      fstring = featureString(fstring, "cv57", "1");
      if ($("#romcv691").is(":checked"))
  	    fstring = featureString(fstring, "cv69", "1");
      if ($("#romcv692").is(":checked"))
    	  fstring = featureString(fstring, "cv69", "2");
      if ($("#romcv181").is(":checked"))
      	fstring = featureString(fstring, "cv18", "1");
      if ($("#romss12").is(":checked"))
	      fstring = featureString(fstring, "ss12", "on");
      if ($("#romss13").is(":checked"))
	      fstring = featureString(fstring, "ss13", "on");
      if ($("#romss14").is(":checked"))
        fstring = featureString(fstring, "ss14", "on");
      if ($("#romss15").is(":checked"))
	      fstring = featureString(fstring, "ss15", "on");
      if ($("#romcv362").is(":checked"))
	      fstring = featureString(fstring, "cv36", "2");
      if ($("#romss08").is(":checked"))
        fstring = featureString(fstring, "ss08", "on");
      if ($("#romss16").is(":checked"))
        fstring = featureString(fstring, "ss16", "on");
      if ($("#romss18").is(":checked"))
        fstring = featureString(fstring, "ss18", "on");

	    $("#romtextarea").css("font-feature-settings", fstring);
    });

    $(".featurebutton").prop("checked", false);
    $(".featurebutton").change();

  }
);
