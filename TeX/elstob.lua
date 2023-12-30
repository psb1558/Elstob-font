-- Elstob.lua
-- Copyright 2023 by Peter S. Baker
--
-- This work may be distributed and/or modified under the
-- conditions of the LaTeX Project Public License, either version 1.3c
-- of this license or (at your option) any later version.
-- The latest version of this license is at
--   https://www.latex-project.org/lppl.txt
--
-- This work consists of the files elstob.sty and elstob.lua.

-- This file provides data and helper functions for elstob.sty.

    alt_styles =
    {
        Reg =                  { 400, 12 },
        SixPt =                { 400, 6  },
        EightPt =              { 400, 8  },
        TenPt =                { 400, 10 },
        FourteenPt =           { 400, 14 },
        EighteenPt =           { 400, 18 },
        ExtraLight =           { 200, 12 },
        SixPtExtraLight =      { 200, 6  },
        EightPtExtraLight =    { 200, 8  },
        TenPtExtraLight =      { 200, 10 },
        FourteenPtExtraLight = { 200, 14 },
        EighteenPtExtraLight = { 200, 18 },
        Light =                { 300, 12 },
        SixPtLight =           { 300, 6  },
        EightPtLight =         { 300, 8  },
        TenPtLight =           { 300, 10 },
        FourteenPtLight =      { 300, 14 },
        EighteenPtLight =      { 300, 18 },
        Medium =               { 500, 12 },
        SixPtMedium =          { 500, 6  },
        EightPtMedium =        { 500, 8  },
        TenPtMedium =          { 500, 10 },
        FourteenPtMedium =     { 500, 14 },
        EighteenPtMedium =     { 500, 18 },
        Semibold =             { 600, 12 },
        SixPtSemibold =        { 600, 6  },
        EightPtSemibold =      { 600, 8  },
        TenPtSemibold =        { 600, 10 },
        FourteenPtSemibold =   { 600, 14 },
        EighteenPtSemibold =   { 600, 18 },
        Bold =                 { 700, 12 },
        SixPtBold =            { 700, 6  },
        EightPtBold =          { 700, 8  },
        TenPtBold =            { 700, 10 },
        FourteenPtBold =       { 700, 14 },
        EighteenPtBold =       { 700, 18 },
        ExtraBold =            { 800, 12 },
        SixPtExtraBold =       { 800, 6  },
        EightPtExtraBold =     { 800, 8  },
        TenPtExtraBold =       { 800, 10 },
        FourteenPtExtraBold =  { 800, 14 },
        EighteenPtExtraBold =  { 800, 18 }
    }

    optical_sizes = { 
        elstob_at_RopszOne       = 6,
        elstob_at_IopszOne       = 6,
        elstob_at_BopszOne       = 6,
        elstob_at_BIopszOne      = 6,
        elstob_at_RopszTwo       = 7,
        elstob_at_IopszTwo       = 7,
        elstob_at_BopszTwo       = 7,
        elstob_at_BIopszTwo      = 7,
        elstob_at_RopszThree     = 8,
        elstob_at_IopszThree     = 8,
        elstob_at_BopszThree     = 8,
        elstob_at_BIopszThree    = 8,
        elstob_at_RopszFour      = 9,
        elstob_at_IopszFour      = 9,
        elstob_at_BopszFour      = 9,
        elstob_at_BIopszFour     = 9,
        elstob_at_RopszFive      = 10,
        elstob_at_IopszFive      = 10,
        elstob_at_BopszFive      = 10,
        elstob_at_BIopszFive     = 10,
        elstob_at_RopszSix       = 11,
        elstob_at_IopszSix       = 11,
        elstob_at_BopszSix       = 11,
        elstob_at_BIopszSix      = 11,
        elstob_at_RopszSeven     = 12,
        elstob_at_IopszSeven     = 12,
        elstob_at_BopszSeven     = 12,
        elstob_at_BIopszSeven    = 12,
        elstob_at_RopszEight     = 13,
        elstob_at_IopszEight     = 13,
        elstob_at_BopszEight     = 13,
        elstob_at_BIopszEight    = 13,
        elstob_at_RopszNine      = 14,
        elstob_at_IopszNine      = 14,
        elstob_at_BopszNine      = 14,
        elstob_at_BIopszNine     = 14,
        elstob_at_RopszTen       = 15,
        elstob_at_IopszTen       = 15,
        elstob_at_BopszTen       = 15,
        elstob_at_BIopszTen      = 15,
        elstob_at_RopszEleven    = 16,
        elstob_at_IopszEleven    = 16,
        elstob_at_BopszEleven    = 16,
        elstob_at_BIopszEleven   = 16,
        elstob_at_RopszTwelve    = 17,
        elstob_at_IopszTwelve    = 17,
        elstob_at_BopszTwelve    = 17,
        elstob_at_BIopszTwelve   = 17,
        elstob_at_RopszThirteen  = 18,
        elstob_at_IopszThirteen  = 18,
        elstob_at_BopszThirteen  = 18,
        elstob_at_BIopszThirteen = 18
    }

    -- 1. Reg   2. Light   3. Medium   4. ExtraLight
    regular_weights = {
        elstob_at_RwghtOne =       { 460,   390,   560,   290   },
        elstob_at_IwghtOne =       { 460,   390,   560,   290   },
        elstob_at_RwghtTwo =       { 452.5, 377.5, 550,   277.5 },
        elstob_at_IwghtTwo =       { 452.5, 377.5, 550,   277.5 },
        elstob_at_RwghtThree =     { 445,   365,   540,   265   },
        elstob_at_IwghtThree =     { 445,   365,   540,   265   },
        elstob_at_RwghtFour =      { 437.5, 352.5, 530,   252.5 },
        elstob_at_IwghtFour =      { 437.5, 352.5, 530,   252.5 },
        elstob_at_RwghtFive =      { 430,   340,   520,   240   },
        elstob_at_IwghtFive =      { 430,   340,   520,   240   },
        elstob_at_RwghtSix =       { 410,   315,   510,   215   },
        elstob_at_IwghtSix =       { 410,   315,   510,   215   },
        elstob_at_RwghtSeven =     { 390,   290,   500,   200   },
        elstob_at_IwghtSeven =     { 390,   290,   500,   200   },
        elstob_at_RwghtEight =     { 370,   270,   490,   170   },
        elstob_at_IwghtEight =     { 370,   270,   490,   170   },
        elstob_at_RwghtNine =      { 365,   265,   480,   165   },
        elstob_at_IwghtNine =      { 365,   265,   480,   165   },
        elstob_at_RwghtTen =       { 360,   260,   470,   160   },
        elstob_at_IwghtTen =       { 360,   260,   470,   160   },
        elstob_at_RwghtEleven =    { 355,   255,   460,   155   },
        elstob_at_IwghtEleven =    { 355,   255,   460,   155   },
        elstob_at_RwghtTwelve =    { 350,   250,   450,   150   },
        elstob_at_IwghtTwelve =    { 350,   250,   450,   150   },
        elstob_at_RwghtThirteen =  { 345,   245,   440,   145   },
        elstob_at_IwghtThirteen =  { 345,   245,   440,   145   },
    }

    -- 1. Bold   2. Semibold   3. Extrabold
    bold_weights = {
        elstob_at_BwghtOne =       { 790,   660,   860 },
        elstob_at_BIwghtOne =      { 790,   660,   860 },
        elstob_at_BwghtTwo =       { 777.5, 650,   850 },
        elstob_at_BIwghtTwo =      { 777.5, 650,   850 },
        elstob_at_BwghtThree =     { 765,   640,   840 },
        elstob_at_BIwghtThree =    { 765,   640,   840 },
        elstob_at_BwghtFour =      { 752.5, 630,   830 },
        elstob_at_BIwghtFour =     { 752.5, 630,   830 },
        elstob_at_BwghtFive =      { 740,   620,   820 },
        elstob_at_BIwghtFive =     { 740,   620,   820 },
        elstob_at_BwghtSix =       { 715,   610,   810 },
        elstob_at_BIwghtSix =      { 715,   610,   810 },
        elstob_at_BwghtSeven =     { 690,   600,   800 },
        elstob_at_BIwghtSeven =    { 690,   600,   800 },
        elstob_at_BwghtEight =     { 670,   590,   790 },
        elstob_at_BIwghtEight =    { 670,   590,   790 },
        elstob_at_BwghtNine =      { 665,   580,   780 },
        elstob_at_BIwghtNine =     { 665,   580,   780 },
        elstob_at_BwghtTen =       { 650,   570,   770 },
        elstob_at_BIwghtTen =      { 650,   560,   770 },
        elstob_at_BwghtEleven =    { 655,   560,   760 },
        elstob_at_BIwghtEleven =   { 655,   560,   760 },
        elstob_at_BwghtTwelve =    { 650,   550,   750 },
        elstob_at_BIwghtTwelve =   { 650,   550,   750 },
        elstob_at_BwghtThirteen =  { 645,   540,   740 },
        elstob_at_BIwghtThirteen = { 645,   540,   740 }
    }

-- Make commands and declare options

function mkaltcommands()
  for k, v in pairs(alt_styles) do
    romdef = k .. "Def"
    romsizedef = k .. "SizeDef"
    italsizedef = k .. "ItalicSizeDef"
    romfeat = k .. "Features"
    romsizefeat = k .. "SizeFeatures"
    italsizefeat = k .. "ItalicSizeFeatures"
    if k == "Reg" then
        romdef = "RegDef"
        italsizedef = "ItalicSizeDef"
        romfeat = "RegularFeatures"
        romsizefeat = "RegularSizeFeatures"
        italsizefeat = "ItalicSizeFeatures"
    end
    tex.print("\\newcommand{\\" .. romdef .. "}{}")
    tex.print("\\newcommand{\\" .. romsizedef .. "}{SizeFeatures={{Size={5-}, RawFeature={axis={wght=" ..
              v[1] .. ",opsz=" .. v[2] .. "}}}}}")
    tex.print("\\newcommand{\\" .. italsizedef .. "}{SizeFeatures={{Size={5-}, RawFeature={axis={wght=" ..
               v[1] .. ",opsz=" .. v[2] .. ",slnt=\\elstob@Islnt}}}}}")
    tex.print("\\DeclareOptionX{" .. romfeat .. "}{\\renewcommand*{\\" .. romdef .. "}{#1,}}")
    tex.print("\\DeclareOptionX{" .. romsizefeat .. "}{\\renewcommand*{\\" .. romsizedef .. "}{\\directlua{mksizecommand({#1})}}}")
    tex.print("\\DeclareOptionX{" .. italsizefeat .. "}{\\renewcommand*{\\" .. italsizedef .. "}{\\directlua{mksizecommand({#1})}}}")
  end
end

-- Make commands for creating the alt fonts.

function mkfontcommands()
    for k, v in pairs(alt_styles) do
        romdef = k .. "Def"
        romsizedef = k .. "SizeDef"
        italsizedef = k .. "ItalicSizeDef"
        romfontname = "e" .. k
        italfontname = "e" .. k .. "Italic"
        if k == "Reg" then
            romdef = "RegDef"
            romsizedef = "RegSizeDef"
            italsizedef = "ItalicSizeDef"
            romfontname = "eRegular"
            italfontname = "eItalic"
        end
        tex.print("\\elstob@newfont{\\" .. romfontname .. "}{Elstob}{\\" .. romdef .. "}{\\" .. romsizedef .. "}")
        tex.print("\\elstob@newfont{\\" .. italfontname .. "}{Elstob-Italic}{\\" .. romdef .."}{\\" .. italsizedef .. "}")
    end
end

function adjustopsz(original, adjustment)
    adjusted = original + adjustment
    if adjusted > 18 then adjusted = 18 end
    if adjusted < 6 then adjusted = 6 end
    return adjusted
end

function adjustwght(original, adjustment)
    adjusted = original + adjustment
    if adjusted > 800 then adjusted = 800 end
    if adjusted < 200 then adjusted = 200 end
    return adjusted
end

function mkopszcommands(adjustment)
    for k, oz in pairs(optical_sizes) do
        cmd, n = string.gsub(k, "_at_", "@")
        tex.print("\\newcommand*{\\" .. cmd .. "}{" .. adjustopsz(oz,adjustment) .. "}")
    end
end

function mkregcommands(wtidx, adjustment)
    for k, wt in pairs(regular_weights) do
        cmd, n = string.gsub(k, "_at_", "@")
        tex.print("\\newcommand*{\\" .. cmd .. "}{" .. adjustwght(wt[wtidx],adjustment) .. "}")
    end
end

function mkboldcommands(wtidx, adjustment)
    for k, wt in pairs(bold_weights) do
        cmd, n = string.gsub(k, "_at_", "@")
        tex.print("\\newcommand*{\\" .. cmd .. "}{" .. adjustwght(wt[wtidx],adjustment) .. "}")
    end
end

function mksizecommand(sizetable)
    result = "Nothing yet"
    if #sizetable > 0 then
        result = "SizeFeatures={"
        lastsize = 0
        for i, v in ipairs(sizetable) do
            if v["size"] then
                axiscount = 0
                sizeitem = "{Size={"
                currentsize = v["size"]
                csnum = v["size"]
                if i == #sizetable then
                    currentsize = currentsize .. "-"
                elseif lastsize == 0 then
                    currentsize = "-" .. currentsize
                else
                    currentsize = lastsize .. "-" .. currentsize
                end
                lastsize = csnum
                sizeitem = sizeitem .. currentsize .. "},RawFeature={axis={"
                if v["wght"] then
                    sizeitem = sizeitem .. "wght=" .. v["wght"]
                    axiscount = axiscount + 1
                end
                if v["opsz"] then
                    if axiscount >= 1 then sizeitem = sizeitem .. "," end
                    sizeitem = sizeitem .. "opsz=" .. v["opsz"]
                    axiscount = axiscount + 1
                end
                if v["slnt"] then
                    if axiscount >= 1 then sizeitem = sizeitem .. "," end
                    sizeitem = sizeitem .. "slnt=" .. v["slnt"]
                    axiscount = axiscount + 1
                end
                if v["GRAD"] then
                    if axiscount >= 1 then sizeitem = sizeitem .. "," end
                    sizeitem = sizeitem .. "GRAD=" .. v["GRAD"]
                    axiscount = axiscount + 1
                end
                if v["SPAC"] then
                    if axiscount >= 1 then sizeitem = sizeitem .. "," end
                    sizeitem = sizeitem .. "SPAC=" .. v["SPAC"]
                end
                sizeitem = sizeitem .. "}}},"
                result = result .. sizeitem
            end
        end
        result = result .. "}"
        tex.print(result)
    end
end


