from fontTools.designspaceLib import (DesignSpaceDocument, AxisDescriptor, SourceDescriptor, InstanceDescriptor)

doc = DesignSpaceDocument()

# Three axes: weight, optical size, grade

wght = AxisDescriptor()
wght.minimum = 200
wght.maximum = 800
wght.default = 400
wght.name = "weight"
wght.tag = "wght"
wght.map = [(200, 200), (300, 300), (400, 400), (500, 500), (600, 590), (700, 695), (800, 800)]
doc.addAxis(wght)

opsz = AxisDescriptor()
opsz.minimum = 6
opsz.maximum = 18
opsz.default = 12
opsz.name = "opticalsize"
opsz.tag = "opsz"
doc.addAxis(opsz)

GRAD = AxisDescriptor()
GRAD.minimum = 1
GRAD.maximum = 500
GRAD.default = 1
GRAD.name = "grade"
GRAD.tag = "GRAD"
GRAD.labelNames['en'] = u"Grade"
doc.addAxis(GRAD)

# Sources

reg = SourceDescriptor()
reg.path = "Elstob-Regular.ufo"
reg.location = dict(weight=400, opticalsize=12, grade=1)
reg.name="reg"
reg.info = True
doc.addSource(reg)

wmin = SourceDescriptor()
wmin.path = "Elstob-wght-min.ufo"
wmin.location = dict(weight=200, opticalsize=12, grade=1)
wmin.name="wght-min"
doc.addSource(wmin)

wmax = SourceDescriptor()
wmax.path = "Elstob-wght-max.ufo"
wmax.location = dict(weight=800, opticalsize=12, grade=1)
wmax.name="wght-max"
doc.addSource(wmax)

omin = SourceDescriptor()
omin.path = "Elstob-opsz-min.ufo"
omin.location = dict(weight=400, opticalsize=6, grade=1)
omin.name="opsz-min"
doc.addSource(omin)

omax = SourceDescriptor()
omax.path = "Elstob-opsz-max.ufo"
omax.location = dict(weight=400, opticalsize=18, grade=1)
omax.name="opsz-max"
doc.addSource(omax)

gmax = SourceDescriptor()
gmax.path = "Elstob-grademax.ufo"
gmax.location = dict(weight=400, opticalsize=12, grade=500)
gmax.name="GRAD-max"
doc.addSource(gmax)

# One instance at present.

r = InstanceDescriptor()
r.familyName = "Elstob"
r.styleName = "Regular"
r.location = dict(weight=400, opticalsize=12, grade=1)
r.kerning = True
r.info = True
r.postScriptFontName = "Elstob-Regular"
doc.addInstance(r)

extralight = InstanceDescriptor()
extralight.familyName = "Elstob"
extralight.styleName = "ExtraLight"
extralight.location = dict(weight=200, opticalsize=12, grade=1)
extralight.kerning = True
extralight.postScriptFontName = "Elstob-ExtraLight"
doc.addInstance(extralight)

light = InstanceDescriptor()
light.familyName = "Elstob"
light.styleName = "Light"
light.location = dict(weight=300, opticalsize=12, grade=1)
light.kerning = True
light.postScriptFontName = "Elstob-Light"
doc.addInstance(light)

medium = InstanceDescriptor()
medium.familyName = "Elstob"
medium.styleName = "Medium"
medium.location = dict(weight=500, opticalsize=12, grade=1)
medium.kerning = True
medium.postScriptFontName = "Elstob-Medium"
doc.addInstance(medium)

semibold = InstanceDescriptor()
semibold.familyName = "Elstob"
semibold.styleName = "SemiBold"
semibold.location = dict(weight=590, opticalsize=12, grade=1)
semibold.kerning = True
semibold.postScriptFontName = "Elstob-SemiBold"
doc.addInstance(semibold)

bold = InstanceDescriptor()
bold.familyName = "Elstob"
bold.styleName = "Bold"
bold.location = dict(weight=695, opticalsize=12, grade=1)
bold.kerning = True
bold.postScriptFontName = "Elstob-Bold"
doc.addInstance(bold)

extrabold = InstanceDescriptor()
extrabold.familyName = "Elstob"
extrabold.styleName = "ExtraBold"
extrabold.location = dict(weight=800, opticalsize=12, grade=1)
extrabold.kerning = True
extrabold.postScriptFontName = "Elstob-ExtraBold"
doc.addInstance(extrabold)

# Export the designspace file.

p = "test.designspace"
doc.write(p)
