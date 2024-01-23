export const MANGA_CATEGORIES = [
  {
    label: "Action",
    value: "action_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=action_manga`,
        imageSrc: "/manga/slime-action.jpg",
      },
      {
        name: "Latest Releases",
        href: `/products?category=action_manga&sort=desc`,
        imageSrc: "/manga/berserk.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=action_manga`,
        imageSrc: "/manga/one-punch-man-action.jpg",
      },
    ],
  },
  {
    label: "Romance",
    value: "romance_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=romance_manga`,
        imageSrc: "/manga/romance1.jpg",
      },
      {
        name: "Latest Releases",
        href: `/products?category=romance_manga&sort=desc`,
        imageSrc: "/manga/lv999-romance.jpeg",
      },
      {
        name: "Popular Now",
        href: `/products?category=romance_manga`,
        imageSrc: "/manga/horimiya-romance.avif",

      },
    ],
  },
  {
    label: "Fantasy",
    value: "fantasy_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=fantasy_manga`,
        imageSrc: "/manga/Goblin-slayer-fantasy.jpg",
      },
      {
        name: "Latest Releases",
        href: `/products?category=fantasy_manga&sort=desc`,
        imageSrc: "/manga/The-Greatest- Estate-Developer-fantasy.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=fantasy_manga`,
        imageSrc: "/manga/Frieren-fantasy.jpg",
      },
    ],
  },
  {
    label: "Sci-Fi",
    value: "sci_fi_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=sci_fi_manga`,
        imageSrc: "/manga/nano-machine-sci-fi.jpg",
      },
      {
        name: "Latest Releases",
        href: `/products?category=sci_fi_manga&sort=desc`,
        imageSrc: "/manga/undead-unluck-sci-fi.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=sci_fi_manga`,
        imageSrc: "/manga/dr-stone-sci-fi.jpg",
      },
    ],
  },
  {
    label: "Horror",
    value: "horror_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=horror_manga`,
        imageSrc: "/manga/tokyo-ghoul-horror.jpg",
    },
    {
        name: "Latest Releases",
        href: `/products?category=horror_manga&sort=desc`,
        imageSrc: "/manga/berserk-horror.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=horror_manga`,
        imageSrc: "/manga/chainsaw-man-horror.jpg",
      },
    ],
  },
  {
    label: "Adventure",
    value: "adventure_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=adventure_manga`,
        imageSrc: "/manga/omniscient-reader-adventure.jpg",
      },
      {
        name: "Latest Releases",
        href: `/products?category=adventure_manga&sort=desc`,
        imageSrc: "/manga/Solo-Leveling.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=adventure_manga`,
        imageSrc: "/manga/vinland-saga.jpg",
      },
    ],
  },
  {
    label: "Comedy",
    value: "comedy_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=comedy_manga`,
        imageSrc: "/manga/don't-toy-with-me-miss-nagatoro-comady.jpg",
      },
      {
        name: "Latest Release",
        href: `/products?category=comedy_manga&sort=desc`,
        imageSrc: "/manga/Bocchi-the-rock-comady.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=comedy_manga`,
        imageSrc: "/manga/The-Beginning-after-the-end-comady.jpg",
      },
    ],
  },
  {
    label: "Drama",
    value: "drama_manga" as const,
    featured: [
      {
        name: "Top Picks",

        href: `/products?category=drama_manga`,
        imageSrc: "/manga/Bungo-stray-dogs-drama.jpg",
      },
      {
        name: "Latest Release",
        href: `/products?category=drama_manga&sort=desc`,
        imageSrc: "/manga/The-Fragrant-Flower-Blooms-With-Dignity-drama.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=drama_manga`,
        imageSrc: "/manga/jojo's-Bizarre-adventure-drama.jpg",
      },
    ],
  },
  {
    label: "Mystery ",
    value: "mystery_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/products?category=mystery_manga`,
        imageSrc: "/manga/another.webp",
      },
      {
        name: "Latest Release",
        href: `/products?category=mystery_manga&sort=desc`,
        imageSrc: "/manga/hells-Paradise-mystery.jpg",
      },
      {
        name: "Popular Now",
        href: `/products?category=mystery_manga`,
        imageSrc: "/manga/player.jpg",
      },
    ],
  },
];
