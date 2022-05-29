from fontTools import ttLib
from fontTools.ttLib import ttFont, tables
import argparse

# Just clipped out of gftools, where it has gone non-functional.

def add_dummy_dsig(ttFont):
    """Add a dummy dsig table to a font. Older versions of MS Word
    require this table.

    Args:
        ttFont: a TTFont instance
    """
    newDSIG = ttLib.newTable("DSIG")
    newDSIG.ulVersion = 1
    newDSIG.usFlag = 0
    newDSIG.usNumSigs = 0
    newDSIG.signatureRecords = []
    ttFont.tables["DSIG"] = newDSIG

argparser = argparse.ArgumentParser(prog='add_dsig',
                                    description='Add dummy DSIG table to a font.')
argparser.add_argument("inputfont", help='The font to process.')
args = argparser.parse_args()

inputfont    = args.inputfont

thisFont = ttLib.TTFont(inputfont)
add_dummy_dsig(thisFont)
thisFont.save(inputfont, 1)
