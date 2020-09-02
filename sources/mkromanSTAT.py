from fontTools.otlLib import builder
from fontTools import ttLib

<<<<<<< HEAD
infont = "Elstob-Italic[GRAD,opsz,wght].ttf"
outfont = "Elstob-Italic[GRAD,opsz,wght]-withSTAT.ttf"

format1axes = [
    dict(
        tag="opsz",
        name="Optical size",
        values=[
            dict(value=6, name="6pt"),
            dict(value=8, name="8pt"),
            dict(value=10, name="10pt"),
            dict(value=12, name="12pt", flags=0x2),
            dict(value=14, name="14pt"),
            dict(value=18, name="18pt"),
        ]
    ),
    dict(
        tag="wght",
        name="Weight",
        values=[
            dict(value=200, name="ExtraLight"),
            dict(value=300, name="Light"),
            dict(value=400, name="Regular", flags=0x2),
            dict(value=500, name="Medium"),
            dict(value=600, name="SemiBold"),
            dict(value=700, name="Bold"),
            dict(value=800, name="ExtraBold"),
        ]
    ),
    dict(
        tag="GRAD",
        name="Grade",
        values=[
            dict(value=0, name="LightGrade", flags=0x2),
            dict(value=1, name="HeavyGrade", flags=0x2),
        ]
    ),
    dict(
        tag="ital",
        name="Italic",
        values=[dict(value=1, name="Italic")]
    )
]

format2axes = [
    dict(
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
    ),
    dict(
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
    ),
    dict(
        tag="GRAD",
        name="Grade",
        values=[
            dict(nominalValue=0, name="LightGrade", flags=0x2, rangeMinValue=0, rangeMaxValue=0.5),
            dict(nominalValue=1, name="HeavyGrade", flags=0x2, rangeMinValue=0.5, rangeMaxValue=1)
        ]
    ),
    dict(
        tag="ital",
        name="Italic",
        values=[dict(value=1, name="Italic")]
    )
]

format4axes = [
=======
font = "Elstob[GRAD,opsz,wght].ttf"

axes = [
>>>>>>> parent of 2cd8349... Produces format 1, 2 or 4 AxisValue
  dict(
    tag="opsz", name="Optical size"
  ),
  dict(
    tag="wght", name="Weight"
  ),
  dict(
    tag="GRAD", name="Grade"
  )
]

format4locations = [
  dict(
    name="Italic", location=dict(opsz=12,wght=400,GRAD=0)
  ),
  dict(
    name="ExtraLight Italic", location=dict(opsz=12,wght=200,GRAD=0)
  ),
  dict(
    name="Light Italic", location=dict(opsz=12,wght=300,GRAD=0)
  ),
  dict(
    name="Medium Italic", location=dict(opsz=12,wght=500,GRAD=0)
  ),
  dict(
    name="SemiBold Italic", location=dict(opsz=12,wght=600,GRAD=0)
  ),
  dict(
    name="Bold Italic", location=dict(opsz=12,wght=700,GRAD=0)
  ),
  dict(
    name="ExtraBold Italic", location=dict(opsz=12,wght=800,GRAD=0)
  ),
  dict(
    name="6pt Italic", location=dict(opsz=6,wght=400,GRAD=0)
  ),
  dict(
    name="6pt ExtraLight Italic", location=dict(opsz=6,wght=200,GRAD=0)
  ),
  dict(
    name="6pt Light Italic", location=dict(opsz=6,wght=300,GRAD=0)
  ),
  dict(
    name="6pt Medium Italic", location=dict(opsz=6,wght=500,GRAD=0)
  ),
  dict(
    name="6pt SemiBold Italic", location=dict(opsz=6,wght=600,GRAD=0)
  ),
  dict(
    name="6pt Bold Italic", location=dict(opsz=6,wght=700,GRAD=0)
  ),
  dict(
    name="6pt ExtraBold Italic", location=dict(opsz=6,wght=800,GRAD=0)
  ),
  dict(
    name="8pt Italic", location=dict(opsz=8,wght=400,GRAD=0)
  ),
  dict(
    name="8pt ExtraLight Italic", location=dict(opsz=8,wght=200,GRAD=0)
  ),
  dict(
    name="8pt Light Italic", location=dict(opsz=8,wght=300,GRAD=0)
  ),
  dict(
    name="8pt Medium Italic", location=dict(opsz=8,wght=500,GRAD=0)
  ),
  dict(
    name="8pt SemiBold Italic", location=dict(opsz=8,wght=600,GRAD=0)
  ),
  dict(
    name="8pt Bold Italic", location=dict(opsz=8,wght=700,GRAD=0)
  ),
  dict(
    name="8pt ExtraBold Italic", location=dict(opsz=8,wght=800,GRAD=0)
  ),
  dict(
    name="10pt Italic", location=dict(opsz=10,wght=400,GRAD=0)
  ),
  dict(
    name="10pt ExtraLight Italic", location=dict(opsz=10,wght=200,GRAD=0)
  ),
  dict(
    name="10pt Light Italic", location=dict(opsz=10,wght=300,GRAD=0)
  ),
  dict(
    name="10pt Medium Italic", location=dict(opsz=10,wght=500,GRAD=0)
  ),
  dict(
    name="10pt SemiBold Italic", location=dict(opsz=10,wght=600,GRAD=0)
  ),
  dict(
    name="10pt Bold Italic", location=dict(opsz=10,wght=700,GRAD=0)
  ),
  dict(
    name="10pt ExtraBold Italic", location=dict(opsz=10,wght=800,GRAD=0)
  ),
  dict(
    name="14pt Italic", location=dict(opsz=14,wght=400,GRAD=0)
  ),
  dict(
    name="14pt ExtraLight Italic", location=dict(opsz=14,wght=200,GRAD=0)
  ),
  dict(
    name="14pt Light Italic", location=dict(opsz=14,wght=300,GRAD=0)
  ),
  dict(
    name="14pt Medium Italic", location=dict(opsz=14,wght=500,GRAD=0)
  ),
  dict(
    name="14pt SemiBold Italic", location=dict(opsz=14,wght=600,GRAD=0)
  ),
  dict(
    name="14pt Bold Italic", location=dict(opsz=14,wght=700,GRAD=0)
  ),
  dict(
    name="14pt ExtraBold Italic", location=dict(opsz=14,wght=800,GRAD=0)
  ),
  dict(
    name="18pt Italic", location=dict(opsz=18,wght=400,GRAD=0)
  ),
  dict(
    name="18pt ExtraLight Italic", location=dict(opsz=18,wght=200,GRAD=0)
  ),
  dict(
    name="18pt Light Italic", location=dict(opsz=18,wght=300,GRAD=0)
  ),
  dict(
    name="18pt Medium Italic", location=dict(opsz=18,wght=500,GRAD=0)
  ),
  dict(
    name="18pt SemiBold Italic", location=dict(opsz=18,wght=600,GRAD=0)
  ),
  dict(
    name="18pt Bold Italic", location=dict(opsz=18,wght=700,GRAD=0)
  ),
  dict(
    name="18pt ExtraBold Italic", location=dict(opsz=18,wght=800,GRAD=0)
  ),
  dict(
    name="Grade Italic", location=dict(opsz=12,wght=400,GRAD=1)
  )
]

ttfont = ttLib.TTFont(font)

builder.buildStatTable(ttfont,axes,locations)

ttfont['name'].setName("ElstobItalic", 25, 1, 0, 0)
ttfont['name'].setName("ElstobItalic", 25, 3, 1, 0x409)

for inst in ttfont['fvar'].instances:
    subfamilyName = ttfont['name'].getName(inst.subfamilyNameID,1,0,0).toUnicode().replace(" Italic","").replace(" ","")
    if subfamilyName == "Italic":
        subfamilyName = "Regular"
    inst.postscriptNameID = ttfont['name'].addName("ElstobItalic" + "-" + subfamilyName)


ttfont.save(font + ".withSTAT")
