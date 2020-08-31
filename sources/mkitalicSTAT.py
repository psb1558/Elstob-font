from fontTools.otlLib import builder
from fontTools import ttLib

font = "Elstob-Italic[GRAD,opsz,wght].ttf"

axes = [
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

locations = [
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

ttfont.save(font + ".withSTAT")
