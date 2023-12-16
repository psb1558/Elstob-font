-- Elstob.lua
-- Copyright 2023 by Peter S. Baker
--
-- This work may be distributed and/or modified under the
-- conditions of the LaTeX Project Public License, either version 1.3c
-- of this license or (at your option) any later version.
-- The latest version of this license is at
--   https://www.latex-project.org/lppl.txt
--
-- This work consists of the files Elstob.sty and Elstob.lua.

-- This file provides helper functions for Elstob.sty.

    alt_styles =
    {
        Reg = {400, 12},
        SixPt = {400, 6},
        EightPt = {400, 8},
        TenPt = {400, 10},
        FourteenPt = {400, 14},
        EighteenPt = {400, 18},
        ExtraLight = {200, 12},
        SixPtExtraLight = {200, 6},
        EightPtExtraLight = {200, 8},
        TenPtExtraLight = {200, 10},
        FourteenPtExtraLight = {200, 14},
        EighteenPtExtraLight = {200, 18},
        Light = {300, 12},
        SixPtLight = {300, 6},
        EightPtLight = {300, 8},
        TenPtLight = {300, 10},
        FourteenPtLight = {300, 14},
        EighteenPtLight = {300, 18},
        Medium = {500, 12},
        SixPtMedium = {500, 6},
        EightPtMedium = {500, 8},
        TenPtMedium = {500, 10},
        FourteenPtMedium = {500, 14},
        EighteenPtMedium = {500, 18},
        Semibold = {600, 12},
        SixPtSemibold = {600, 6},
        EightPtSemibold = {600, 8},
        TenPtSemibold = {600, 10},
        FourteenPtSemibold = {600, 14},
        EighteenPtSemibold = {600, 18},
        Bold = {700, 12},
        SixPtBold = {700, 6},
        EightPtBold = {700, 8},
        TenPtBold = {700, 10},
        FourteenPtBold = {700, 14},
        EighteenPtBold = {700, 18},
        ExtraBold = {800, 12},
        SixPtExtraBold = {800, 6},
        EightPtExtraBold = {800, 8},
        TenPtExtraBold = {800, 10},
        FourteenPtExtraBold = {800, 14},
        EighteenPtExtraBold = {800, 18}
    }

    optical_sizes = {
        elstob_at_RopszOne = 6,
        elstob_at_IopszOne = 6,
        elstob_at_BopszOne = 6,
        elstob_at_BIopszOne = 6,
        elstob_at_RopszTwo = 7,
        elstob_at_IopszTwo = 7,
        elstob_at_BopszTwo = 7,
        elstob_at_BIopszTwo = 7,
        elstob_at_RopszThree = 8,
        elstob_at_IopszThree = 8,
        elstob_at_BopszThree = 8,
        elstob_at_BIopszThree = 8,
        elstob_at_RopszFour = 9,
        elstob_at_IopszFour = 9,
        elstob_at_BopszFour = 9,
        elstob_at_BIopszFour = 9,
        elstob_at_RopszFive = 10,
        elstob_at_IopszFive = 10,
        elstob_at_BopszFive = 10,
        elstob_at_BIopszFive = 10,
        elstob_at_RopszSix = 11,
        elstob_at_IopszSix = 11,
        elstob_at_BopszSix = 11,
        elstob_at_BIopszSix = 11,
        elstob_at_RopszSeven = 12,
        elstob_at_IopszSeven = 12,
        elstob_at_BopszSeven = 12,
        elstob_at_BIopszSeven = 12,
        elstob_at_RopszEight = 13,
        elstob_at_IopszEight = 13,
        elstob_at_BopszEight = 13,
        elstob_at_BIopszEight = 13,
        elstob_at_RopszNine = 14,
        elstob_at_IopszNine = 14,
        elstob_at_BopszNine = 14,
        elstob_at_BIopszNine = 14,
        elstob_at_RopszTen = 15,
        elstob_at_IopszTen = 15,
        elstob_at_BopszTen = 15,
        elstob_at_BIopszTen = 15,
        elstob_at_RopszEleven = 16,
        elstob_at_IopszEleven = 16,
        elstob_at_BopszEleven = 16,
        elstob_at_BIopszEleven = 16,
        elstob_at_RopszTwelve = 17,
        elstob_at_IopszTwelve = 17,
        elstob_at_BopszTwelve = 17,
        elstob_at_BIopszTwelve = 17,
        elstob_at_RopszThirteen = 18,
        elstob_at_IopszThirteen = 18,
        elstob_at_BopszThirteen = 18,
        elstob_at_BIopszThirteen = 18
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
    tex.print("\\DeclareOptionX{" .. romsizefeat .. "}{\\renewcommand*{\\" .. romsizedef .. "}{#1}}")
    tex.print("\\DeclareOptionX{" .. italsizefeat .. "}{\\renewcommand*{\\" .. italsizedef .. "}{#1}}")
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

function mkopszcommands(adjustment)
    for k, oz in pairs(optical_sizes) do
        cmd, n = string.gsub(k, "_at_", "@")
        tex.print("\\newcommand*{\\" .. cmd .. "}{" .. adjustopsz(oz,adjustment) .. "}")
    end
end