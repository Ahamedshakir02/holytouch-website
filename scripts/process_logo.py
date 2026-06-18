"""Derive transparent, recolourable logo marks from the supplied flat black/white PNGs.

The mark is a solid disc whose inner symbol is negative space in the SAME colour as the
background. So instead of just deleting the outer background, we build an alpha mask from
the artwork's darkness: ink (the disc) becomes opaque, the white background AND the white
symbol cut-outs become transparent. That gives a clean disc with see-through cut-outs that
we can tint to any brand colour.
"""
from PIL import Image

SRC = "public/logo-black.png"  # black disc on white, white symbol cut-outs

gray = Image.open(SRC).convert("L")
# alpha = darkness; drop near-white halo to avoid a fuzzy edge
alpha = gray.point(lambda p: 0 if p > 247 else 255 - p)
alpha = alpha.crop(alpha.getbbox())
w, h = alpha.size


def tinted(rgb):
    im = Image.new("RGBA", alpha.size, rgb + (0,))
    im.putalpha(alpha)
    return im


TEAL_900 = (10, 33, 29)
CREAM_100 = (247, 244, 237)

tinted(TEAL_900).save("public/logo-mark-dark.png")    # for light surfaces
tinted(CREAM_100).save("public/logo-mark-light.png")  # for dark surfaces

# Favicon: cream mark centred on a deep-teal tile so it reads on any browser tab.
SIZE = 256
fav = Image.new("RGBA", (SIZE, SIZE), (7, 26, 23, 255))
mark = tinted(CREAM_100)
target = int(SIZE * 0.6)
scale = target / max(w, h)
mark = mark.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
fav.alpha_composite(mark, ((SIZE - mark.width) // 2, (SIZE - mark.height) // 2))
fav.save("public/favicon.png")

print(f"mark {w}x{h} -> logo-mark-dark.png, logo-mark-light.png, favicon.png")
