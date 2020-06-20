from fontTools.otlLib import builder
from fontTools import ttLib

font = "Elstob[GRAD,opsz,wght].ttf"

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
    name="Regular", location=dict(opsz=12,wght=400,GRAD=0)
  ),
  dict(
    name="ExtraLight", location=dict(opsz=12,wght=200,GRAD=0)
  ),
  dict(
    name="Light", location=dict(opsz=12,wght=300,GRAD=0)
  ),
  dict(
    name="Medium", location=dict(opsz=12,wght=500,GRAD=0)
  ),
  dict(
    name="SemiBold", location=dict(opsz=12,wght=600,GRAD=0)
  ),
  dict(
    name="Bold", location=dict(opsz=12,wght=700,GRAD=0)
  ),
  dict(
    name="ExtraBold", location=dict(opsz=12,wght=800,GRAD=0)
  ),
  dict(
    name="6pt", location=dict(opsz=6,wght=400,GRAD=0)
  ),
  dict(
    name="6pt ExtraLight", location=dict(opsz=6,wght=200,GRAD=0)
  ),
  dict(
    name="6pt Light", location=dict(opsz=6,wght=300,GRAD=0)
  ),
  dict(
    name="6pt Medium", location=dict(opsz=6,wght=500,GRAD=0)
  ),
  dict(
    name="6pt SemiBold", location=dict(opsz=6,wght=600,GRAD=0)
  ),
  dict(
    name="6pt Bold", location=dict(opsz=6,wght=700,GRAD=0)
  ),
  dict(
    name="6pt ExtraBold", location=dict(opsz=6,wght=800,GRAD=0)
  ),
  dict(
    name="8pt", location=dict(opsz=8,wght=400,GRAD=0)
  ),
  dict(
    name="8pt ExtraLight", location=dict(opsz=8,wght=200,GRAD=0)
  ),
  dict(
    name="8pt Light", location=dict(opsz=8,wght=300,GRAD=0)
  ),
  dict(
    name="8pt Medium", location=dict(opsz=8,wght=500,GRAD=0)
  ),
  dict(
    name="8pt SemiBold", location=dict(opsz=8,wght=600,GRAD=0)
  ),
  dict(
    name="8pt Bold", location=dict(opsz=8,wght=700,GRAD=0)
  ),
  dict(
    name="8pt ExtraBold", location=dict(opsz=8,wght=800,GRAD=0)
  ),
  dict(
    name="10pt", location=dict(opsz=10,wght=400,GRAD=0)
  ),
  dict(
    name="10pt ExtraLight", location=dict(opsz=10,wght=200,GRAD=0)
  ),
  dict(
    name="10pt Light", location=dict(opsz=10,wght=300,GRAD=0)
  ),
  dict(
    name="10pt Medium", location=dict(opsz=10,wght=500,GRAD=0)
  ),
  dict(
    name="10pt SemiBold", location=dict(opsz=10,wght=600,GRAD=0)
  ),
  dict(
    name="10pt Bold", location=dict(opsz=10,wght=700,GRAD=0)
  ),
  dict(
    name="10pt ExtraBold", location=dict(opsz=10,wght=800,GRAD=0)
  ),
  dict(
    name="14pt", location=dict(opsz=14,wght=400,GRAD=0)
  ),
  dict(
    name="14pt ExtraLight", location=dict(opsz=14,wght=200,GRAD=0)
  ),
  dict(
    name="14pt Light", location=dict(opsz=14,wght=300,GRAD=0)
  ),
  dict(
    name="14pt Medium", location=dict(opsz=14,wght=500,GRAD=0)
  ),
  dict(
    name="14pt SemiBold", location=dict(opsz=14,wght=600,GRAD=0)
  ),
  dict(
    name="14pt Bold", location=dict(opsz=14,wght=700,GRAD=0)
  ),
  dict(
    name="14pt ExtraBold", location=dict(opsz=14,wght=800,GRAD=0)
  ),
  dict(
    name="18pt", location=dict(opsz=18,wght=400,GRAD=0)
  ),
  dict(
    name="18pt ExtraLight", location=dict(opsz=18,wght=200,GRAD=0)
  ),
  dict(
    name="18pt Light", location=dict(opsz=18,wght=300,GRAD=0)
  ),
  dict(
    name="18pt Medium", location=dict(opsz=18,wght=500,GRAD=0)
  ),
  dict(
    name="18pt SemiBold", location=dict(opsz=18,wght=600,GRAD=0)
  ),
  dict(
    name="18pt Bold", location=dict(opsz=18,wght=700,GRAD=0)
  ),
  dict(
    name="18pt ExtraBold", location=dict(opsz=18,wght=800,GRAD=0)
  ),
  dict(
    name="Grade", location=dict(opsz=12,wght=400,GRAD=1)
  )
]

ttfont = ttLib.TTFont(font)

builder.buildStatTable(ttfont,axes,locations)

ttfont.save(font + ".withSTAT")
