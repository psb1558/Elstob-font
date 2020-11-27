Sub Elstob_Replace_Code()
'
' Elstob_Replace_Code Macro
'
'

  Application.ScreenUpdating = False

  Dim rngStory As Range
  Dim i As Long, ArrFnd(69) As Variant, ArrRep(69) As Variant

  ArrFnd(1) = "&AA;"
  ArrFnd(2) = "&aa;"
  ArrFnd(3) = "&AO;"
  ArrFnd(4) = "&ao;"
  ArrFnd(5) = "&AU;"
  ArrFnd(6) = "&au;"
  ArrFnd(7) = "&AV;"
  ArrFnd(8) = "&av;"
  ArrFnd(9) = "&AY;"
  ArrFnd(10) = "&ay;"
  ArrFnd(11) = "&AElig;"
  ArrFnd(12) = "&aelig;"
  ArrFnd(13) = "&ETH;"
  ArrFnd(14) = "&eth;"
  ArrFnd(15) = "&YO;"
  ArrFnd(16) = "&yo;"
  ArrFnd(17) = "&kl;"
  ArrFnd(18) = "&OO;"
  ArrFnd(19) = "&oo;"
  ArrFnd(20) = "&OB;"
  ArrFnd(21) = "&ob;"
  ArrFnd(22) = "&pr;"
  ArrFnd(23) = "&po;"
  ArrFnd(24) = "&q1;"
  ArrFnd(25) = "&q2;"
  ArrFnd(26) = "&rr;"
  ArrFnd(27) = "&sd;"
  ArrFnd(28) = "&THORN;"
  ArrFnd(29) = "&thorn;"
  ArrFnd(30) = "&ct;"
  ArrFnd(31) = "&VY;"
  ArrFnd(32) = "&vy;"
  ArrFnd(33) = "&WN;"
  ArrFnd(34) = "&wn;"
  ArrFnd(35) = "&et;"
  ArrFnd(36) = "&ti;"
  ArrFnd(37) = "&US;"
  ArrFnd(38) = "&co;"
  ArrFnd(39) = "&ru;"
  ArrFnd(40) = "&_oa;"
  ArrFnd(41) = "&_us;"
  ArrFnd(42) = "&_ur;"
  ArrFnd(43) = "&_zz;"
  ArrFnd(44) = "&_ZZ;"
  ArrFnd(45) = "&_a;"
  ArrFnd(46) = "&_ao;"
  ArrFnd(47) = "&_av;"
  ArrFnd(48) = "&_aelig;"
  ArrFnd(49) = "&_c;"
  ArrFnd(50) = "&_ccedil;"
  ArrFnd(51) = "&_dins;"
  ArrFnd(52) = "&_eth;"
  ArrFnd(53) = "&_e;"
  ArrFnd(54) = "&_g;"
  ArrFnd(55) = "&_h;"
  ArrFnd(56) = "&_i;"
  ArrFnd(57) = "&_k;"
  ArrFnd(58) = "&_l;"
  ArrFnd(59) = "&_m;"
  ArrFnd(60) = "&_n;"
  ArrFnd(61) = "&_o;"
  ArrFnd(62) = "&_r;"
  ArrFnd(63) = "&_rr;"
  ArrFnd(64) = "&_s;"
  ArrFnd(65) = "&_longs;"
  ArrFnd(66) = "&_t;"
  ArrFnd(67) = "&_v;"
  ArrFnd(68) = "&_x;"
  ArrFnd(69) = "&_z;"
  ArrFnd(70) = "&is;"


  ArrRep(1) = ChrW(&HA732)
  ArrRep(2) = ChrW(&HA733)
  ArrRep(3) = ChrW(&HA734)
  ArrRep(4) = ChrW(&HA735)
  ArrRep(5) = ChrW(&HA736)
  ArrRep(6) = ChrW(&HA737)
  ArrRep(7) = ChrW(&HA738)
  ArrRep(8) = ChrW(&HA739)
  ArrRep(9) = ChrW(&HA73C)
  ArrRep(10) = ChrW(&HA73D)
  ArrRep(11) = ChrW(&HC6)
  ArrRep(12) = ChrW(&HE6)
  ArrRep(13) = ChrW(&HD0)
  ArrRep(14) = ChrW(&HF0)
  ArrRep(15) = ChrW(&H21C)
  ArrRep(16) = ChrW(&H21D)
  ArrRep(17) = ChrW(&HA741)
  ArrRep(18) = ChrW(&HA74E)
  ArrRep(19) = ChrW(&HA74F)
  ArrRep(20) = ChrW(&HA74A)
  ArrRep(21) = ChrW(&HA74B)
  ArrRep(22) = ChrW(&HA751)
  ArrRep(23) = ChrW(&HA753)
  ArrRep(24) = ChrW(&HA757)
  ArrRep(25) = ChrW(&HA759)
  ArrRep(26) = ChrW(&HA75B)
  ArrRep(27) = ChrW(&H1E9C)
  ArrRep(28) = ChrW(&HDE)
  ArrRep(29) = ChrW(&HFE)
  ArrRep(30) = ChrW(&HA765)
  ArrRep(31) = ChrW(&HA760)
  ArrRep(32) = ChrW(&HA761)
  ArrRep(33) = ChrW(&H1F7)
  ArrRep(34) = ChrW(&H1BF)
  ArrRep(35) = ChrW(&HA76B)
  ArrRep(36) = ChrW(&H204A)
  ArrRep(37) = ChrW(&HA770)
  ArrRep(38) = ChrW(&HA76F)
  ArrRep(39) = ChrW(&HA75D)
  ArrRep(40) = ChrW(&H1DD3)
  ArrRep(41) = ChrW(&H1DD2)
  ArrRep(42) = ChrW(&H1DD1)
  ArrRep(43) = ChrW(&H35B)
  ArrRep(44) = ChrW(&H1DCF)
  ArrRep(45) = ChrW(&H363)
  ArrRep(46) = ChrW(&H1DD5)
  ArrRep(47) = ChrW(&H1DD6)
  ArrRep(48) = ChrW(&H1DD4)
  ArrRep(49) = ChrW(&H368)
  ArrRep(50) = ChrW(&H1DD7)
  ArrRep(51) = ChrW(&H1DD8)
  ArrRep(52) = ChrW(&H1DD9)
  ArrRep(53) = ChrW(&H364)
  ArrRep(54) = ChrW(&H1DDA)
  ArrRep(55) = ChrW(&H36A)
  ArrRep(56) = ChrW(&H365)
  ArrRep(57) = ChrW(&H1DDC)
  ArrRep(58) = ChrW(&H1DDD)
  ArrRep(59) = ChrW(&H36B)
  ArrRep(60) = ChrW(&H1DE0)
  ArrRep(61) = ChrW(&H366)
  ArrRep(62) = ChrW(&H36C)
  ArrRep(63) = ChrW(&H1DE3)
  ArrRep(64) = ChrW(&H1DE4)
  ArrRep(65) = ChrW(&H1DE5)
  ArrRep(66) = ChrW(&H36D)
  ArrRep(67) = ChrW(&H36E)
  ArrRep(68) = ChrW(&H36F)
  ArrRep(69) = ChrW(&H1DE6)
  ArrRep(70) = ChrW(&HA76D)

  For Each rngStory In ActiveDocument.StoryRanges

    With rngStory.Find

      .ClearFormatting
      .Replacement.ClearFormatting
      .Forward = True
      .MatchCase = True
      .Wrap = wdFindContinue

      For i = 1 To UBound(ArrRep)
        .Text = ArrFnd(i)
        .Replacement.Text = ArrRep(i)
        .Execute Replace:=wdReplaceAll
      Next i
    End With

  Next rngStory

End Sub
