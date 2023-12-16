-- alt_styles.lua
-- Copyright 2023 by Peter S. Baker
--
-- This work may be distributed and/or modified under the
-- conditions of the LaTeX Project Public License, either version 1.3c
-- of this license or (at your option) any later version.
-- The latest version of this license is at
--   https://www.latex-project.org/lppl.txt
--
-- This work consists of the files Elstob.sty and alt_styles.lua.

-- This file is for declaring and instantiating the 50+ alterante styles
-- supplied by the Elstob variable font package.

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
  