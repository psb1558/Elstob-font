from fontTools.otlLib import builder
from fontTools import ttLib
import sys

whichFont = "both"
if len(sys.argv) > 1:
    whichFont = sys.argv[1]

inItalicFont =  "Elstob-Italic-VF.ttf"
outItalicFont = "Elstob-Italic-VF-withSTAT.ttf"
inRomanFont =   "Elstob-VF.ttf"
outRomanFont =  "Elstob-VF-withSTAT.ttf"

commonWeightDict = dict(
    tag="wght",
    name="Weight",
    values=[
        dict(nominalValue=200, name="ExtraLight", rangeMinValue=200, rangeMaxValue=250),
        dict(nominalValue=300, name="Light", rangeMinValue=250, rangeMaxValue=350),
        dict(nominalValue=400, name="Regular", flags=0x2, rangeMinValue=350, rangeMaxValue=450),
        dict(nominalValue=500, name="Medium", rangeMinValue=450, rangeMaxValue=550),
        dict(nominalValue=600, name="SemiBold", rangeMinValue=550, rangeMaxValue=650),
        dict(nominalValue=700, name="Bold", rangeMinValue=650, rangeMaxValue=750),
        dict(nominalValue=800, name="ExtraBold", rangeMinValue=750, rangeMaxValue=800),
        dict(value=400, name="Regular", linkedValue=700, flags=0x2)
    ]
)

commonOpticalSizeDict = dict(
    tag="opsz",
    name="Optical size",
    values=[
        dict(nominalValue=6, name="6pt", rangeMinValue=6, rangeMaxValue=7),
        dict(nominalValue=8, name="8pt", rangeMinValue=7, rangeMaxValue=9),
        dict(nominalValue=10, name="10pt", rangeMinValue=9, rangeMaxValue=11),
        dict(nominalValue=12, name="12pt", flags=0x2, rangeMinValue=11, rangeMaxValue=13),
        dict(nominalValue=14, name="14pt", rangeMinValue=13, rangeMaxValue=16),
        dict(nominalValue=18, name="18pt", rangeMinValue=16, rangeMaxValue=18)
    ]
)

commonGradeDict = dict(
    tag="GRAD",
    name="Grade",
    values=[
        dict(nominalValue=0, name="LightGrade", flags=0x2, rangeMinValue=0, rangeMaxValue=0.5),
        dict(nominalValue=1, name="HeavyGrade", rangeMinValue=0.5, rangeMaxValue=1)
    ]
)

commonSpacingDict = dict(
    tag="SPAC",
    name="Spacing",
    values=[
        dict(nominalValue=0, name="NarrowSpacing", flags=0x2, rangeMinValue=0, rangeMaxValue=0.5),
        dict(nominalValue=1, name="WideSpacing", rangeMinValue=0.5, rangeMaxValue=1)
    ]
)

slantDict = dict(
    tag="slnt",
    name="Slant",
    values=[
        dict(nominalValue=0, name="Slanted", flags=0x2, rangeMinValue=0, rangeMaxValue=7.5),
        dict(nominalValue=15, name="Upright", rangeMinValue=7.5, rangeMaxValue=15)
    ]
)

format2RomanAxes = [
    commonOpticalSizeDict, commonWeightDict, commonGradeDict, commonSpacingDict,
    dict(
        tag="ital",
        name="Italic",
        values=[dict(value=0, name="Roman", linkedValue=1, flags=0x2)]
    )
]

format2ItalicAxes = [
    commonOpticalSizeDict, commonWeightDict, commonGradeDict, commonSpacingDict, slantDict,
    dict(
        tag="ital",
        name="Italic",
        values=[dict(value=1, name="Italic")]
    )
]

# Add a STAT table with (mainly) Format 2 AxisValues.
# Add entry for nameID=25 ("Variations PostScript Name Prefix"), needed by
#     InDesign and perhaps other Adobe apps.
# Add postscriptNameID to each instance record in fvar (needed by InDesign
#     and perhaps other Adobe apps).
# As the Mac (platformID=1) names are obsolete, make sure there are none.

if whichFont == "italic" or whichFont == "both":
    ttfont = ttLib.TTFont(inItalicFont)
    builder.buildStatTable(ttfont,format2ItalicAxes)
    # ttfont['name'].setName("ElstobItalic", 25, 1, 0, 0)
    ttfont['name'].setName("ElstobItalic", 25, 3, 1, 0x409)
    for inst in ttfont['fvar'].instances:
        subfamilyName = ttfont['name'].getName(
            inst.subfamilyNameID,3,1,0x409).toUnicode().replace(" Italic","").replace(" ","")
        if subfamilyName == "Italic":
            subfamilyName = "Regular"
        inst.postscriptNameID = ttfont['name'].addName("ElstobItalic" + "-" + subfamilyName,
                                                       platforms=((3,1,0x409),))
    ttfont['name'].removeNames(platformID=1)
    ttfont.save(outItalicFont)

if whichFont == "roman" or whichFont == "both":
    ttfont = ttLib.TTFont(inRomanFont)
    builder.buildStatTable(ttfont,format2RomanAxes)
    # ttfont['name'].setName("ElstobRoman", 25, 1, 0, 0)
    ttfont['name'].setName("ElstobRoman", 25, 3, 1, 0x409)
    for inst in ttfont['fvar'].instances:
        subfamilyName = ttfont['name'].getName(
            inst.subfamilyNameID,3,1,0x409).toUnicode().replace(" ","")
        inst.postscriptNameID = ttfont['name'].addName("ElstobRoman" + "-" + subfamilyName,
                                                       platforms=((3,1,0x409),))
    ttfont['name'].removeNames(platformID=1)
    ttfont.save(outRomanFont)
