// Image manifest — all images served from Zyrosite CDN
// Local /public/images folder has been removed; use these URLs everywhere.

const CDN = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/m7VDn8EOk5uxpvLl";

// ─── Named hero / section images ────────────────────────────────
export const IMAGES = {
  // Full-width hero — dramatic hillside group shot
  hero: `${CDN}/20260822_183119.jpg-x7HYA2ea2SloJ9i8.jpeg`,

  // Fleet cards
  fleet: {
    atv:   `${CDN}/20260702_185540-RQWVobaEYIqiPrvN.jpg`,
    buggy: `${CDN}/20260702_185412-MDOnWEEgEdZk8wbJ.jpg`,
    jeep:  `${CDN}/whatsapp-image-2025-10-09-at-00.24.28_6d7c849a-Awv8zjJR2oHoJwPb.jpg`,
  },

  // Tour section cards
  tours: {
    dayTrip:  `${CDN}/444-rk9JD2zmkTHpYfn7.jpeg`,
    multiDay: `${CDN}/20260802_210056.jpg-JQxLuJhWBnFro765.jpeg`,
    night:    `${CDN}/20251221_155122.jpg-KX9sVXu4pIgeYIox.jpeg`,
  },

  // Gallery grid — all 36 CDN photos
  gallery: [
    { src: `${CDN}/20260822_183119.jpg-x7HYA2ea2SloJ9i8.jpeg`,                         alt: "Riders above Tbilisi at sunset",                      wide: true  },
    { src: `${CDN}/444-rk9JD2zmkTHpYfn7.jpeg`,                                          alt: "Group of ATVs and buggies on a hilltop",              wide: false },
    { src: `${CDN}/20260702_185412-MDOnWEEgEdZk8wbJ.jpg`,                               alt: "Buggy convoy on a green hillside",                    wide: false },
    { src: `${CDN}/20260702_185540-RQWVobaEYIqiPrvN.jpg`,                               alt: "ATV riders on a mountain trail",                      wide: false },
    { src: `${CDN}/whatsapp-image-2025-10-09-at-00.24.28_6d7c849a-Awv8zjJR2oHoJwPb.jpg`, alt: "Extreme jeep on a rugged off-road track",           wide: true  },
    { src: `${CDN}/20260623_140559.jpg-veWGyIAKhvYagJN5.jpeg`,                          alt: "ATVs parked on a dusty trail with mountains",         wide: false },
    { src: `${CDN}/20260622_143138.jpg-8rxZqO7USZ75xoot.jpeg`,                          alt: "Riders on ATVs on a hillside trail",                  wide: false },
    { src: `${CDN}/20260802_210056.jpg-JQxLuJhWBnFro765.jpeg`,                          alt: "Multi-day expedition riders on a scenic route",       wide: false },
    { src: `${CDN}/20251221_155122.jpg-KX9sVXu4pIgeYIox.jpeg`,                          alt: "Winter off-road riding in snow-covered landscape",    wide: true  },
    { src: `${CDN}/20260118_165352.jpg-jRR9EmbIV0id8HCf.jpeg`,                          alt: "Buggy on an off-road track in winter",                wide: false },
    { src: `${CDN}/20260718_193808.jpg-a7hbpdnnocqvvhg5.jpeg`,                          alt: "ATV group ride through lush green terrain",           wide: false },
    { src: `${CDN}/20260623_164721.jpg-RRKUzgqGiVaMK8b8.jpeg`,                          alt: "Group tour on ATVs with Tbilisi in the background",   wide: false },
    { src: `${CDN}/20260623_164721-KliV4bNGlp2bBxak.jpg`,                               alt: "ATV riders descending a hillside trail",              wide: true  },
    { src: `${CDN}/fb_img_1748678246099.jpg-Pqg572KohjbXUPyu.jpeg`,                     alt: "Riders celebrating on buggies",                       wide: false },
    { src: `${CDN}/20260822_183407-GXpH9lml1Ftnlcrp.jpg`,                               alt: "Buggies lined up at golden hour",                     wide: false },
    { src: `${CDN}/20260522_094550.jpg-DMukTQGSyhFRE0Ra.jpeg`,                          alt: "ATVs on a morning trail",                             wide: false },
    { src: `${CDN}/20260522_095002.jpg-9isbgnmaj2vIuNor.jpeg`,                          alt: "ATV convoy through a forest path",                    wide: true  },
    { src: `${CDN}/20260611_182523.jpg-hakmQtByQYI5Wbff.jpeg`,                          alt: "Riders on a mountain ridge at sunset",                wide: false },
    { src: `${CDN}/20260308_181848.jpg-OZMIOx9ZmECZjjtG.jpeg`,                          alt: "Off-road track through rocky terrain",                wide: false },
    { src: `${CDN}/20260308_183033.jpg-lJK07vSmoPA8eqEa.jpeg`,                          alt: "Buggy climbing a steep hill",                         wide: false },
    { src: `${CDN}/20260228_174424.jpg-HamzlrUD4n6Uu3Tb.jpeg`,                          alt: "ATV riders on a winter trail",                        wide: true  },
    { src: `${CDN}/20260119_164654.jpg-J2UF6v16NbAAcBid.jpeg`,                          alt: "Buggy on a snowy off-road trail",                     wide: false },
    { src: `${CDN}/20260102_133739-1-tFp9Z0fDVoGOpHbT.jpg`,                             alt: "New year off-road adventure",                         wide: false },
    { src: `${CDN}/20251130_131819.jpg-YvWM2UmkdPxxewaI.jpeg`,                          alt: "Autumn group ride on the trails",                     wide: false },
    { src: `${CDN}/20251130_154138-FpfVrUI8RuTYqrx1.jpg`,                               alt: "Riders taking a break on a scenic overlook",          wide: true  },
    { src: `${CDN}/20250903_191319-oTXOfVcR1oRSKAoS.jpg`,                               alt: "Late summer evening trail ride",                      wide: false },
    { src: `${CDN}/20250822_183524.jpg-72Md6GydCv4Ms35k.jpeg`,                          alt: "Group of ATVs on a dusty summer trail",               wide: false },
    { src: `${CDN}/20250817_163617-1-WG4mtAo33U2LFmQe.jpg`,                             alt: "ATV riders on a hilltop overlooking the valley",      wide: false },
    { src: `${CDN}/20250807_194807.jpg-0FJeWqjMGvc6EZsN.jpeg`,                          alt: "Evening trail ride with the city lights below",       wide: true  },
    { src: `${CDN}/bu6i0411-cHticMUUhRVZyFMo.jpg`,                                      alt: "Professional buggy action shot",                      wide: false },
    { src: `${CDN}/img-20260708-wa0047.jpg-CUH6WHxBWFSkhf1Z.jpeg`,                      alt: "Group photo after a trail session",                   wide: false },
    { src: `${CDN}/screenshot_20250226_214231_gallery.jpg-mSVqO4l5WmVKcMIi.jpeg`,       alt: "Riders at a popular trail viewpoint",                 wide: false },
    { src: `${CDN}/screenshot_20260211_171800_video-maker.jpg-R9CShk0wj5jAuAVC.jpeg`,   alt: "Action frame from a buggy video shoot",               wide: true  },
    { src: `${CDN}/screenshot_20260315_234329_photos.jpg-EZITNjs35Bf6pVJO.jpeg`,        alt: "Night shot of buggies with headlights on",            wide: false },
    { src: `${CDN}/screenshot-2025-10-29-010323-d95ZbD76ZLuKrXR0.jpg`,                  alt: "Trail map overview of the riding area",               wide: false },
    { src: `${CDN}/1787144987905-DWTAodLVTkK15nPx.png`,                                 alt: "Buggyland Tbilisi promotional image",                 wide: false },
  ],
} as const;

export type GalleryImage = (typeof IMAGES.gallery)[number];
