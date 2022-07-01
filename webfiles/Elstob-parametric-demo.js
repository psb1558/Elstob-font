$(document).ready(function(){

  /*jshint multistr: true */

  var modtext = "The Elstob font, named for Elizabeth Elstob (1683–1756), a celebrated \
  scholar of the earliest English language and literature, is a free treatment of the Double Pica \
  cut by Peter de Walpergen for Bishop John Fell (1625–1686) and used \
  for many years by the Oxford University Press. Wherever possible, it is modeled on a \
  specimen book printed in 1925 with type cast in the 1890s from the seventeenth-century \
  matrices; digital images from the 1693 and 1706 Fell specimen books served as backup, \
  and also an early eighteenth-century folio in which a lengthy dedication was printed \
  in Fell’s Double Pica. The Fell types are not a font family in the modern sense; rather, \
  each of the different sizes (Pica, French, Canon, Great Primer, and so on) is at least \
  subtly different from the others in design, and the “English” face is entirely different. \
  For the closest approximation to the original type, select “18pt (Display)” from the \
  “Instances” menu.";

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

  var germantext = "Doctor Faustus ist eines Bawren Sohn gewesen zu Rod bey Weimar vrburdig / Der zu \
  Wittemberg ein grosse Freundtschafft gehabt / Dieweil seine Eltern Gottselige vnnd Cristliche Leuth \
  gewesen / ja sein Vetter Der zu Wittemberg seshafft ein Burger wol vermugens gewest / jn Den Doctor \
  Faustum auferzogen / vnnd gehalten wie ain kindt / Dann Er ohne Erben ward / Nam Er disen Faustum zu \
  ainem kindt vnnd Erben auf / Ließ jn jnn die Schuel geen Theologiam zu studiern / Er ist aber von \
  sollichem Gottseligen Furnemen abgedretten / Gottes wort misbraucht / Derohalben wir solliche Eltern \
  vnnd Freund die gern alles guetts / vnnd das besst gesehen hetten (.wie solches alle Frombe Elttern \
    gern sehen.) ohne Tadel sein sollen lassen / Sie jnn die Historj nicht mischen / So haben auch seine \
    Eltern dises Gottlosen kinds Grewel nicht erlebt noch gesehen / Dann einmahl gewiß / wie auch die \
    Eltern dess Doctor Faustj (wie menigclich zu Wittemberg bewust) sich ganntz hertzlich erfreudt \
    haben / Das jr Vetter jn als ein kind aufnam / vnnd darnach die Eltern an jm spurten wie er ein \
    treffenlichs Ingenium vnnd Memoriam hette / auss sollichem gewislich gefolgt ist / das Dise Elttern \
    grosse fursorg fur jn gehabt haben / gleich wie Job. cap: j. fur seine kinder getragen hatte /";

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

  var frenchtext = "Tu vois, ma bonne amie, que je te tiens parole, et que les bonnets et les \
  pompons ne prennent pas tout mon temps; il m’en restera toujours pour toi. J’ai pourtant vu plus \
  de parures dans cette seule journée que dans les quatre ans que nous avons passés ensemble; et je \
  crois que la superbe Tanville aura plus de chagrin à ma première visite, où je compte bien la \
  demander, qu’elle n’a cru nous en faire toutes les fois qu’elle est venue nous voir in fiocchi. \
  Maman m’a consultée sur tout; elle me traite beaucoup moins en pensionnaire que par le passé. \
  J’ai une femme de chambre à moi; j’ai une chambre et un cabinet dont je dispose, et je t’écris à \
  un secrétaire très joli, dont on m’a remis la clef, et où je peux renfermer tout ce que je veux. \
  Maman m’a dit que je la verrais tous les jours à son lever; qu’il suffisait que je fusse coiffée \
  pour dîner, parce que nous serions toujours seules, et qu’alors elle me dirait chaque jour \
  l’heure où je devrais l’aller joindre l’après-midi. Le reste du temps est à ma disposition, \
  et j’ai ma harpe, mon dessin et des livres comme au couvent, si ce n’est que la mère Perpétue \
  n’est pas là pour me gronder, et qu’il ne tiendrait qu’à moi d’être toujours à rien faire; mais \
  comme je n’ai pas ma Sophie pour causer et pour rire, j’aime autant m’occuper.";

  var latintext = "Anno memorato praefatae eclypsis et mox sequentis pestilentiae, quo et Colman \
  episcopus unanima catholicorum intentione superatus ad suos reuersus est, Deusdedit sextus \
  ecclesiae Doruuernensis episcopus obiit pridie Iduum Iuliarum; sed et Erconberct rex \
  Cantuariorum eodem mense ac die defunctus, Ecgbercto filio sedem regni reliquit, quam ille \
  susceptam per .viiii. annos tenuit. Tunc cessante non pauco tempore episcopatu, missus est Romam \
  ab ipso simul et a rege Nordanhymbrorum Osuio, ut in praecedente libro paucis diximus, Uighard \
  presbyter, uir in ecclesiasticis disciplinis doctissimus, de genere Anglorum, petentibus hunc \
  ecclesiae Anglorum archiepiscopum ordinari; missis pariter apostolico papae donariis, et aureis \
  atque argenteis uasis non paucis. Qui ubi Romam peruenit, cuius sedi apostolicae tempore illo \
  Uitalianus praeerat, postquam itineris sui causam praefato papae apostolico patefecit, non multo \
  post et ipse, et omnes pene qui cum eo aduenerant socii, pestilentia superueniente deleti sunt. ";

  var oldenglishtext = "Her on ðisum geare forðferde \
  Ælfgiue Ymma Eadwardes cynges modor ⁊ Hardacnutes cynges. ⁊ on \
  þam sylfan geare gerædde se cyng ⁊ his witan ꝥ mann sceolde \
  forðian ut to Sandwic scipu. ⁊ setton Raulf eorl ⁊ Oddan eorl to \
  heafodmannū þærto. Ða gewende Godwine eorl út frā brycge mid \
  his scypum to Yseran. and let ut ane dæge ær midsumeres \
  mæsseæfene ꝥ he cō to Næsse. þe is besuðan Rumenea. Þa cō \
  hit to witenne þā eorlū ut to Sandwic. ⁊ hi þa gewendon ut \
  æfter þam oðrum scipum. ⁊ bead man landfyrde ut ongean þa \
  scipu. Þa amang þison þa wearð Godwine eorl gewarnod. ⁊ gewende \
  him þa into Pefenesea. ⁊ wearð ꝥ wæder swiðe strang. ꝥ þa \
  eorlas ne mihton gewitan hwet Godwine eorl gefaren hæfde. ⁊ \
  gewende þa Godwine eorl ut agean ꝥ he cō eft to brycge. ⁊ ða \
  oðra scipu gewenden heom eft ongean to Sandwic. ⁊ gerædde man þa \
  ꝥ þa scipu gewendan eft ongean to Lundene. ⁊ sceolde man \
  setton oðre eorlas ⁊ oðre hasæton to þā scipū. þa lenged hit \
  man swa lange. ꝥ seo scipfyrd eall belaf. ⁊ gewendon ealle heō \
  ham. Ða geaxode Godwine eorl þet ⁊ teah þa úp his segl ⁊ his \
  lið. ⁊ gewendon heom þa west to Wiht. ⁊ eodon þær úp. ⁊ hergodon \
  swa lange þær ꝥ ꝥ folc geald heom swa mycel. swa hi heō on legden. \
  ⁊ gewendon heō þa westwearð oð þet hi comon to Portlande.";

  var middleenglishtext = "Nan ancre bi mi read ne schal makien \
  professiun. ꝥ is bihaten ase heast⹎ but þreo þinges. ꝥ beoð obedience. \
  chastete. ⁊ stude steaðeluestnesse. ꝥ ha ne schal ꝥ stude neauer \
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

    $( "#pCapHeight" ).slider({
        min: -1000,
        max: 588,
        value: 0});
    $( "#pCharWidth" ).slider({
        min: -1000,
        max: 1000,
        value: 0});
    $( "#pFigHeight" ).slider({
        min: -1000,
        max: 588,
        value: 0});
    $( "#pAscenderHeight" ).slider({
        min: -1000,
        max: 562,
        value: 0});
    $( "#pDescenderDepth" ).slider({
        min: -602,
        max: 1000,
        value: 0});
    $( "#pxHeight").slider({
        min: -895,
        max: 1000,
        value: 0});
    $( "#pThickStroke").slider({
        min: -456,
        max: 1000,
        value: 0});
    $( "#pThinStroke").slider({
        min: -1000,
        max: 600,
        value: 0});
    $( "#romsize" ).slider({
        min: 0.2,
        max: 5,
        step: 0.05,
        value: 1.5});

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
        case "pCapHeight":
          $('html').css("--axisYTUC", valstring);
          $('#textCapHeight').text(valstring);
          break;
        case "pCharWidth":
          $('html').css('--axisXTRA', valstring);
          $('#textCharWidth').text(valstring);
          break;
        case "pFigHeight":
          $('html').css('--axisYTFI', valstring);
          $('#textFigHeight').text(valstring);
          break;
        case "pAscenderHeight":
          $('html').css('--axisYTAS', valstring);
          $('#textAscenderHeight').text(valstring);
          break;
        case "pDescenderDepth":
          $('html').css('--axisYTDE', valstring);
          $('#textDescenderDepth').text(valstring);
          break;
        case "pxHeight":
          $('html').css('--axisYTLX', valstring);
          $('textxHeight').text(valstring);
          break;
        case "pThickStroke":
          $('html').css('--axisXOPQ', valstring);
          $('#textThickStroke').text(valstring);
          break;
        case "pThinStroke":
          $('html').css('--axisYOPQ', valstring);
          $('#textThinStroke').text(valstring);
          break;
        case "romsize":
          $('html').css('--romsize', valstring + "em");
          $('#romsizetext').text(valstring + "em");
          break;
        }
      }
    );

    $("#romsliders").on("change", function(event, size, ytuc, xtra, ytfi, ytas, ytde, ytlx, xopq, yopq ) {
        $('html').css('--romsize', size.toString() + "em");
        $('#romsizetext').text(size + "em");
        $('html').css("--axisYTUC", ytuc.toString());
        $('#textCapHeight').text(ytuc);
        $('html').css('--axisXTRA', xtra.toString());
        $('#textCharWidth').text(xtra);
        $('html').css('--axisYTFI', ytfi.toString());
        $('#textFigHeight').text(ytfi);
        $('html').css('--axisYTAS', ytas.toString());
        $('#textAscenderHeight').text(ytas);
        $('html').css('--axisYTDE', ytde.toString());
        $('#textDescenderDepth').text(ytde);
        $('html').css('--axisYTLX', ytlx.toString());
        $('#textxHeight').text(ytlx);
        $('html').css('--axisXOPQ', xopq.toString());
        $('#textThickStroke').text(xopq);
        $('html').css('--axisYOPQ', yopq.toString());
        $('#textThinStroke').text(yopq);
      }
    );

    $("#rompresets").selectmenu({	select: function(event, ui) {
	      switch (this.value) {
          case "Reg":
            $("#romsize").slider("value", 1.5);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 0);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 0);
            $("#pxHeight").slider("value", 0);
            $("#pThickStroke").slider("value", 0);
            $("#pThinStroke").slider("value", 0);
            $("#romsliders").trigger("change", [1.5, 0, 0, 0, 0, 0, 0, 0, 0]);
            break;
          // case "6pt (Fine Print)":
          case "Reg6pt":
            $("#romsize").slider("value", 0.6);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 377.77777);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 150.60242);
            $("#pxHeight").slider("value", 276.3158);
            $("#pThickStroke").slider("value", 38.88889);
            $("#pThinStroke").slider("value", 600);
            $("#romsliders").trigger("change", [0.6, 0, 377.77777, 0, 0, 150.60242, 276.3158, 38.88889, 600]);
            break;
          case "Reg8pt":
            $("#romsize").slider("value", 0.9);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 277.77777);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 102.40964);
            $("#pxHeight").slider("value", 184.21053);
            $("#pThickStroke").slider("value", 33.33333);
            $("#pThinStroke").slider("value", 400.0);
            $("#romsliders").trigger("change", [0.9, 0, 277.77777, 0, 0, 102.40964, 184.21053, 33.33333, 400.0]);
            break;
          case "Reg10pt":
            $("#romsize").slider("value", 1.2);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 144.44444);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 48.19276);
            $("#pxHeight").slider("value", 92.10527);
            $("#pThickStroke").slider("value", 17.77777);
            $("#pThinStroke").slider("value", 200);
            $("#romsliders").trigger("change", [1.2, 0, 144.44444, 0, 0, 0, 92.10527, 17.77777, 200]);
      		  break;
          case "Reg14pt":
            $("#romsize").slider("value", 1.8);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", -276);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", -144);
            $("#pxHeight").slider("value", -276);
            $("#pThickStroke").slider("value", -11);
            $("#pThinStroke").slider("value", 0);
            $("#romsliders").trigger("change", [1.8, 0, -276, 0, 0, -144, -276, -11, 0]);
          	break;
	        case "Reg18pt":
            $("#romsize").slider("value", 2.3);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", -356);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", -144);
            $("#pxHeight").slider("value", -276);
            $("#pThickStroke").slider("value", -44);
            $("#pThinStroke").slider("value", -267);
            $("#romsliders").trigger("change", [2.3, 0, -356, 0, 0, -144, -276, -44, -1000]);
        		break;
          case "ExtraLight":
            $("#romsize").slider("value", 1.5);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 0);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 0);
            $("#pxHeight").slider("value", 0);
            $("#pThickStroke").slider("value", -456);
            $("#pThinStroke").slider("value", -1000);
            $("#romsliders").trigger("change", [1.5, 0, 0, 0, 0, 0, 0, -456, -1000]);
        		break;
          case "Light":
            $("#romsize").slider("value", 1.5);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 0);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 0);
            $("#pxHeight").slider("value", 0);
            $("#pThickStroke").slider("value", -222.43);
            $("#pThinStroke").slider("value", -500);
            $("#romsliders").trigger("change", [1.5, 0, 0, 0, 0, 0, 0, -222.43, -500]);
        		break;
          case "Light10pt":
            $("#romsize").slider("value", 1.2);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 144);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 48);
            $("#pxHeight").slider("value", 92);
            $("#pThickStroke").slider("value", -204);
            $("#pThinStroke").slider("value", -300);
            $("#romsliders").trigger("change", [1.2, 0, 144, 0, 0, 48, 92, -204, -300]);
        		break;
          case "Medium":
            $("#romsize").slider("value", 1.5);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 0);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 0);
            $("#pxHeight").slider("value", 0);
            $("#pThickStroke").slider("value", 211.11);
            $("#pThinStroke").slider("value", 33.33);
            $("#romsliders").trigger("change", [1.5, 0, 0, 0, 0, 0, 0, 211.11, 33.33]);
          	break;
          case "Medium14pt":
            $("#romsize").slider("value", 1.8);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", -122);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", -48);
            $("#pxHeight").slider("value", -92);
            $("#pThickStroke").slider("value", 189);
            $("#pThinStroke").slider("value", -300);
            $("#romsliders").trigger("change", [1.8, 0, -122, 0, 0, -48, -92, 189, -300]);
          	break;
          case "SemiBold":
            $("#romsize").slider("value", 1.5);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 0);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 0);
            $("#pxHeight").slider("value", 0);
            $("#pThickStroke").slider("value", 500);
            $("#pThinStroke").slider("value", 66.66);
            $("#romsliders").trigger("change", [1.5, 0, 0, 0, 0, 0, 0, 500, 66.66]);
            break;
          case "SemiBold18pt":
            $("#romsize").slider("value", 2.3);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", -122);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", -48);
            $("#pxHeight").slider("value", -276);
            $("#pThickStroke").slider("value", 456);
            $("#pThinStroke").slider("value", -933);
            $("#romsliders").trigger("change", [2.3, 0, -122, 0, 0, -48, -276, 456, -933]);
            break;
          case "Bold":
            $("#romsize").slider("value", 1.5);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 0);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 0);
            $("#pxHeight").slider("value", 0);
            $("#pThickStroke").slider("value", 750);
            $("#pThinStroke").slider("value", 100);
            $("#romsliders").trigger("change", [1.5, 0, 0, 0, 0, 0, 0, 750, 100]);
            break;
          case "Bold8pt":
            $("#romsize").slider("value", 0.9);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 278);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 102);
            $("#pxHeight").slider("value", 184);
            $("#pThickStroke").slider("value", 783);
            $("#pThinStroke").slider("value", 500);
            $("#romsliders").trigger("change", [0.9, 0, 278, 0, 0, 102, 184, 783, 500]);
            break;
          case "Bold10pt":
            $("#romsize").slider("value", 1.2);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 144);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 48);
            $("#pxHeight").slider("value", 92);
            $("#pThickStroke").slider("value", 768);
            $("#pThinStroke").slider("value", 300);
            $("#romsliders").trigger("change", [1.2, 0, 144, 0, 0, 48, 92, 768, 300]);
            break;
          case "Bold18pt":
            $("#romsize").slider("value", 2.3);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", -356);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", -144);
            $("#pxHeight").slider("value", -276);
            $("#pThickStroke").slider("value", 706);
            $("#pThinStroke").slider("value", -176);
            $("#romsliders").trigger("change", [2.3, 0, -356, 0, 0, -144, -276, 706, -176]);
            break;
          case "ExtraBold":
            $("#romsize").slider("value", 1.5);
            $("#pCapHeight").slider("value", 0);
            $("#pCharWidth").slider("value", 0);
            $("#pFigHeight").slider("value", 0);
            $("#pAscenderHeight").slider("value", 0);
            $("#pDescenderDepth").slider("value", 0);
            $("#pxHeight").slider("value", 0);
            $("#pThickStroke").slider("value", 1000);
            $("#pThinStroke").slider("value", 133.33);
            $("#romsliders").trigger("change", [1.5, 0, 0, 0, 0, 0, 0, 1000, 133.33]);
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
            $( ".featurebutton" ).prop("checked", false).change();
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
            $( ".featurebutton" ).not("#romcv382, #romss16, #romcv692").prop("checked", false).change();
            $("#romcv382, #romss16, #romcv692").prop("checked",true).change();
            break;
          case "Latin":
            l = "la";
            t = latintext;
            $( ".featurebutton" ).not("#romcv382").prop("checked", false).change();
            $("#romcv382").prop("checked",true).change();
            break;
          case "Gothic":
            // lang code for Gothic is got. Here it simply means "not English."
            t = gothictext;
            l = "got";
            $( ".featurebutton" ).prop("checked", false).change();
            break;
          case "ModFrench":
            l = "fr";
            t = frenchtext;
            $( ".featurebutton" ).prop("checked", false).change();
            $("#romss08").prop("checked",true).change();
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
        $("#romslntlabel, #romslnt").css("display", "block");
      }
      else {
        $("#romtextarea").css("font-style", "normal");
        $("#aespan, #romslntlabel, #romslnt").css("display", "none");
      }
      // if ($("#romdlig").is(":checked"))
      //  fstring = featureString(fstring, "dlig", "on");
      if ($("#romsmcp").is(":checked"))
        fstring = featureString(fstring, "smcp", "on");
      if ($("#romc2sc").is(":checked"))
        fstring = featureString(fstring, "c2sc", "on");
      // if ($("#rompnum").is(":checked"))
      //  fstring = featureString(fstring, "pnum", "on");
      if ($("#romonum").is(":checked"))
        fstring = featureString(fstring, "onum", "on");
      if ($("#romzero").is(":checked"))
        fstring = featureString(fstring, "zero", "on");
      // if ($("#romss02").is(":checked"))
      //  fstring = featureString(fstring, "ss02", "on");
      // if ($("#romss01").is(":checked"))
      //  fstring = featureString(fstring, "ss01", "on");
      // if ($("#romcv382").is(":checked"))
	    //  fstring = featureString(fstring, "cv38", "2");
      // if ($("#romcv57").is(":checked"))
	    //  fstring = featureString(fstring, "cv57", "1");
      if ($("#romcv691").is(":checked"))
  	    fstring = featureString(fstring, "cv69", "1");
      if ($("#romcv692").is(":checked"))
    	  fstring = featureString(fstring, "cv69", "2");
      // if ($("#romcv181").is(":checked"))
      //	fstring = featureString(fstring, "cv18", "1");
      // if ($("#romss12").is(":checked"))
	    //  fstring = featureString(fstring, "ss12", "on");
      // if ($("#romss13").is(":checked"))
	    //  fstring = featureString(fstring, "ss13", "on");
      // if ($("#romss14").is(":checked"))
      //  fstring = featureString(fstring, "ss14", "on");
      // if ($("#romss15").is(":checked"))
	    //  fstring = featureString(fstring, "ss15", "on");
      // if ($("#romcv362").is(":checked"))
	    //  fstring = featureString(fstring, "cv36", "2");
      if ($("#romss08").is(":checked"))
        fstring = featureString(fstring, "ss08", "on");
      // if ($("#romss16").is(":checked"))
      //  fstring = featureString(fstring, "ss16", "on");

	    $("#romtextarea").css("font-feature-settings", fstring);
    });

    $(".featurebutton").prop("checked", false);
    $(".featurebutton").change();

  }
);
