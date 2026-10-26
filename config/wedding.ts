export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  BaraatTime?: string;
  VarmalaTime?: string;
  location: string;
  addressDetails?: string;
  dressCode: string;
  googleMapsUrl?: string;
  image: string;
  iconName: 'sparkles' | 'ring' | 'glass' | 'heart' | 'map-pin';
  description?: string;
}

export interface StoryMoment { id: string; caption: string; title: string; image: string; rotation: string; }
export interface GalleryPhoto { id: string; src: string; alt: string; title: string; caption?: string; }
export interface AccommodationOption { name: string; category: string; distance: string; address: string; phone?: string; website?: string; }
export interface FAQItem { question: string; answer: string; }

export const weddingConfig = {
  bride: { name: "Ayushi Agarwal", shortName: "Ayushi" },
  groom: { name: "Ayush Goyal", shortName: "Ayush" },
  initials: "A + A",
  countdownTargetDate: "2026-12-11T20:00:00",
  mainWeddingDate: "December 11, 2026",
  weddingLocationShort: "KAYAMKULAM, KERALA",
  rsvpDeadline: "December 08, 2026",
  tagline: "ARE GETTING MARRIED",
  heroSubtitle: "We invite you to join us in celebrating our wedding story",
  storyHeading: "Every chapter has led us here.",
  storyParagraph1: "What started with a quiet conversation grew into a beautiful friendship, filled with laughter, shared dreams and countless cherished moments. Somewhere along the way, friendship found its way to something even more beautiful - a love we now get to carry with us for a lifetime.",
  storyParagraph2: "As we begin our forever, we are grateful to have our beloved family and friends by our side to celebrate this beautiful chapter with us.",
  backgroundAudio: "/audio/background-music.mp3",
  events: [
    {
    id: "haldi",
    name: "Haldi Ceremony",
    date: "2026-12-10",
    time: "11:00 AM – 03:00 PM",
    location: "",
    addressDetails: "Hotel ground",
    dressCode: "Yellow Indian Ethnic Wear",
    googleMapsUrl: "",
    image: "/images/event-haldi.jpg",
    iconName: "sparkles",
    description:
      "A joyful traditional Haldi ceremony filled with blessings, laughter, and beautiful moments with family and friends.",
  },
  {
    id: "Lagun Tika",
    name: "Lagun Tika Ceremony",
    date: "2026-12-10",
    time: "07:00 PM",
    location: "",
    addressDetails: "",
    dressCode: "Indian Ethnic Wear",
    googleMapsUrl: "",
    image: "/images/event-lagun-tika.jpg",
    iconName: "flower",
    description:
      "An elegant celebration of beautiful Mehendi designs, traditions, music, and joyful moments with loved ones.",
  },
  {
    id: "sangeeth",
    name: "Sangeeth Ceremony",
    date: "2026-12-10",
    time: "9:00 PM – 11:00 PM",
    location: "Bride's Home",
    addressDetails: "Alalimadathil, Puthuppally P O, Kayamkulam, Kerala",
    dressCode: "Indian Ethnic Wear Only",
    googleMapsUrl:
      "https://goo.gl/maps/WWByjNQwqjKxoWAs5?g_st=aw",
    image: "/images/event-sangeeth.jpg",
    iconName: "sparkles",
    description:
      "An evening filled with music, dance, laughter, and celebratory festive Indian ethnic attire.",
  },
  {
    id: "wedding",
    name: "Wedding Ceremony",
    date: "2026-12-11",
    time: "07:00 PM onwards",
    BaraatTime: "06:00 PM onwards",
    VarmalaTime: "09:00 PM onwards",
    location: "Oryx Convention Centre",
    addressDetails: "Oryx Convention Centre, Oachira, Kerala",
    googleMapsUrl:
      "https://maps.app.goo.gl/PsknWMtZVRTJen1v6",
    image: "/images/event-wedding.jpg",
    iconName: "ring",
    description:
      "The sacred wedding ceremony and Muhurtham (12:10 PM – 12:34 PM), followed by a traditional feast and blessings.",
  },
  {
    id: "reception",
    name: "Wedding Reception",
    date: "2026-12-12",
    time: "6:00 PM onwards",
    location: "Al Saj Mini Comet Hall",
    addressDetails: "Kazhakootam, Trivandrum (Tvm), Kerala",
    googleMapsUrl:
      "https://maps.app.goo.gl/4o78spCE4tUZkQZ48",
    image: "/images/event-reception.jpg",
    iconName: "glass",
    description:
      "A grand celebratory evening dinner to share joy and celebrate the beginning of our newlyweds' journey together.",
  },
  ] as WeddingEvent[],
  storyMoments: [
    { id: "1", caption: "Childish", title: "Where The Love Began", image: "/images/gallery/img9.jpg", rotation: "-rotate-3" },
    { id: "2", caption: "together", title: "Our Favorite Moments", image: "/images/gallery/img5.jpg", rotation: "rotate-2" },
    { id: "3", caption: "sweet moments", title: "The Little Things", image: "/images/gallery/img3.jpg", rotation: "-rotate-2" },
    { id: "4", caption: "forever", title: "Holding On Forever", image: "/images/gallery/img4.jpg", rotation: "rotate-3" },
  ] as StoryMoment[],
  galleryPhotos: [
    { id: "g1", src: "/images/gallery/img1.jpg", alt: "Ayushi and Ayush together", title: "Together", caption: "A moment we will always keep close." },
    { id: "g2", src: "/images/gallery/img2.jpg", alt: "Ayushi and Ayush holding hands", title: "Holding On Forever", caption: "Two hands, one beautiful journey." },
    { id: "g3", src: "/images/gallery/img3.jpg", alt: "Ayushi and Ayush sharing a sweet moment", title: "Sweet Moments", caption: "The little moments that mean everything." },
    { id: "g4", src: "/images/gallery/img4.jpg", alt: "Childhood memory", title: "A Memory to Treasure", caption: "A glimpse into the story behind us." },
    { id: "g5", src: "/images/gallery/img5.jpg", alt: "Ayushi and Ayush together", title: "Together", caption: "A moment we will always keep close." },
    { id: "g6", src: "/images/gallery/img6.jpg", alt: "Ayushi and Ayush holding hands", title: "Holding On Forever", caption: "Two hands, one beautiful journey." },
    { id: "g7", src: "/images/gallery/img7.jpg", alt: "Ayushi and Ayush sharing a sweet moment", title: "Sweet Moments", caption: "The little moments that mean everything." },
    { id: "g8", src: "/images/gallery/img8.jpg", alt: "Childhood memory", title: "A Memory to Treasure", caption: "A glimpse into the story behind us." },
    { id: "g9", src: "/images/gallery/img9.jpg", alt: "Ayushi and Ayush together", title: "Together", caption: "A moment we will always keep close." },
    { id: "g10", src: "/images/gallery/img10.jpg", alt: "Ayushi and Ayush holding hands", title: "Holding On Forever", caption: "Two hands, one beautiful journey." },
    { id: "g11", src: "/images/gallery/img11.jpg", alt: "Ayushi and Ayush sharing a sweet moment", title: "Sweet Moments", caption: "The little moments that mean everything." },
    { id: "g12", src: "/images/gallery/img12.jpg", alt: "Childhood memory", title: "A Memory to Treasure", caption: "A glimpse into the story behind us." },
  ] as GalleryPhoto[],
  footerText: "With lots of love",
  contactEmail: "celebrate@aparna-rohit.com",
};
