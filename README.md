![Elstob Header](TitlePageFacsimile.jpg)

New! Visit the [specimen page](https://psb1558.github.io/Elstob-font/) for a preview of Elstob 2, now nearing completion.

The Elstob font (named for the eighteenth-century Anglo-Saxonist [Elizabeth Elstob](https://www.oxforddnb.com/view/10.1093/ref:odnb/9780198614128.001.0001/odnb-9780198614128-e-8761)) is based on the Double Pica commissioned by Bishop [John Fell](https://en.wikipedia.org/wiki/John_Fell_(bishop)) in the seventeenth century. Elstob is designed as a webfont. Thus:
1. It is a variable font, with weights ranging from ExtraLight to ExtraBold, optical sizes from "Fine Print" (circa 6 points) to "Display" (circa 18 points or greater) and also a grade axis (1-500). (A non-variable desktop version is also available.)
2. Outlines have been kept simple to limit file size.
4. The intention of the font is to include everything in Unicode useful to a substantial number of medievalists, but the character set has been limited to around 1000 glyphs to keep file size reasonable. Many characters from the [Medieval Unicode Font Initiative](https://skaldic.abdn.ac.uk/m.php?p=mufi), present in the designer's [Junicode](https://github.com/psb1558/Junicode-New/tree/master/legacy) font, can be represented with combining diacritics.

# Links

Visit the [specimen page](https://psb1558.github.io/Elstob-font/) to see how a variable font works and put Elstob through its paces.

I'll share new developments on [Twitter](https://twitter.com/InPbaker) from time to time and will welcome your feedback there.

# Downloading and Installing

It is strongly suggested that you avoid downloading Elstob from commercial sites,
as these do not generally offer the latest version, and some downloads may carry
viruses.

For the Mac, a [Homebrew](https://brew.sh/) package is available. Use this if
possible, as it will simplify updating to the latest version.

For Linux users, packages exist for Debian, Arch Linux, Parrot, and others. Check
your distribution for availability.

Windows users, Mac users who cannot use Homebrew, and Linux users whose distributions
do not offer Elstob should download from
[this site](https://github.com/psb1558/Elstob-font/releases/) and follow the
instructions for installing on their systems.

# Building

To build Elstob, you'll need [fontmake](https://github.com/googlefonts/fontmake), which requires
Python 3.7 or later. (If your system supplies Python 2.N, install the latest version of Python in
a virtual environment.) Install fontmake via pip, and, if you want hinting in the variable font,
install [Xgridfit version 3](https://github.com/psb1558/xgridfit-3), following the instructions at
the Xgridfit 3 site.

In addition to fontmake and its dependencies, you will need ttfautohint (for hinting of
TrueType static fonts), psautohint (for hinting of CFF fonts), Xgridfit (for hinting the
variable fonts), GNU sed (already installed on Linux systems; on the Mac install gsed
via Homebrew), and xsltproc (already installed on Linux systems and on the Mac).

To run `build_font`, open a terminal, navigate to the `source` directory, make the file `build_font` executable
(`chmod +x build_font`), and run it: `./build_font -h`.
The help message that appears will tell you  how to build the various flavors of Elstob.

If you are building static fonts, you may customize a couple of aspects before building. First, to adjust
the slant of the italic, open the script `fix-italic-slant.xsl` and change the number on line 14 from the
default **6** to any number (including decimals) between **0** (very slanted) and **15** (very upright).

Second, for wider space characters, do the same with the script `fix-spacing.xsl`, but this time choose
a value between **0** (the default, rather narrow space) and **1** (a much wider space, typical of
old-style printing). For example, **0.424** yields a space equal to one quarter of an em.

Copyright 2020–2022 by Peter S. Baker.

This Font Software is licensed under the SIL Open Font License, Version 1.1. See the file OFL.txt or visit [http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).
