import copy

# Kern On kerns runes with Latin letters, and this adds ca. 3000 kerns and measurably
# increases file size. But it's okay for runes to kern only with themselves, so this
# script deletes all kerns of runes with anything but other runes.
#
# For good measure, it copies kerning from master[0] (Regular) to master[5] (Grade)

cfont = Glyphs.font

rune_names = ["fehu-runic",
"v-runic",
"uruz-runic",
"yr-runic",
"y-runic",
"w-runic",
"thurisazThursThorn-runic",
"eth-runic",
"ansuzA-runic",
"osO-runic",
"acA-runic",
"aesc-runic",
"ossOLongBranch-runic",
"ossOShortTwig-runic",
"o-runic",
"oe-runic",
"on-runic",
"raidoRadReidR-runic",
"kauna-runic",
"cen-runic",
"kaunK-runic",
"g-runic",
"eng-runic",
"geboGyfuG-runic",
"gar-runic",
"wunjoWynnW-runic",
"haglazH-runic",
"haeglH-runic",
"hagallHLongBranch-runic",
"hagallHShortTwig-runic",
"naudNNaudizNyd-runic",
"naudNShortTwig-runic",
"nDotted-runic",
"isazIsIssI-runic",
"e-runic",
"jeranJ-runic",
"ger-runic",
"aeLongBranchAr-runic",
"aShortTwigAr-runic",
"iwazEoh-runic",
"perthoPeorthP-runic",
"algizEolhx-runic",
"sowiloS-runic",
"sigelLongBranchSol-runic",
"sShortTwigSol-runic",
"c-runic",
"z-runic",
"tiwazTirTyr-runic",
"tShortTwigTyr-runic",
"d-runic",
"berkananBeorcBjarkanB-runic",
"bjarkanBshortTwig-runic",
"pDotted-runic",
"pOpen-runic",
"ehwazEhE-runic",
"mannazManM-runic",
"mLongBranchMadr-runic",
"mShortTwigMadr-runic",
"laukazLaguLogrL-runic",
"lDotted-runic",
"ingwaz-runic",
"ing-runic",
"dagazDaegD-runic",
"othalanEthelO-runic",
"ear-runic",
"ior-runic",
"cweorth-runic",
"calc-runic",
"cealc-runic",
"stan-runic",
"yrLongBranch-runic",
"yrShortTwig-runic",
"yrIcelandic-runic",
"q-runic",
"x-runic",
"punctSingle-runic",
"punctMultiple-runic",
"punctCross-runic",
"arlaug-runic",
"tvimadur-runic",
"belgthor-runic"]

rune_ids = []

def is_rune(kern_id):
    return kern_id in rune_ids or 'runic' in kern_id

def del_kerns_in_master(master_index):
    master_id = cfont.masters[master_index].id
    master_kerns = cfont.kerning[master_id]
    del_pairs = []
    left_kern_keys = master_kerns.keys()
    for l in left_kern_keys:
        right_kern_keys = master_kerns[l].keys()
        for r in right_kern_keys:
            if (is_rune(l) and not is_rune(r)) or (is_rune(r) and not is_rune(l)):
                this_pair = [l, r]
                del_pairs.append(this_pair)
    for p in del_pairs:
        del master_kerns[p[0]][p[1]]
    
for n in rune_names:
    rune_ids.append(cfont.glyphs[n].id)

del_kerns_in_master(0)
print("Done with master 0")
del_kerns_in_master(1)
print("Done with master 1")
del_kerns_in_master(2)
print("Done with master 2")
del_kerns_in_master(3)
print("Done with master 3")
del_kerns_in_master(4)
print("Done with master 4")
try:
    del_kerns_in_master(6)
    print("Done with master 6")
except:
    print("No master 6")

cfont.kerning[cfont.masters[5].id] = copy.copy(cfont.kerning[cfont.masters[0].id])
print("Done")
