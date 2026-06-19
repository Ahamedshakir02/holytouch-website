// PLACEHOLDER PROJECTS — swap `image`, `title`, `location`, `meta` with real
// Holytouch project photos & details. Images are Unsplash placeholders.
const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Landscape']

// Project lifecycle stage — drives the Projects nav dropdown + on-page filter.
export const statuses = ['Ongoing', 'Completed', 'Upcoming']

export const projects = [
  {
    id: 'aranya-villa',
    title: 'Aranya Courtyard Villa',
    category: 'Residential',
    status: 'Completed',
    location: 'Thrissur, Kerala',
    year: '2024',
    area: '3,200 sq.ft',
    image: img('1600585154340-be6161a56a0c'),
    summary:
      'A contemporary tropical villa organised around a shaded central courtyard, blending exposed concrete with warm teak.',
  },
  {
    id: 'lakeside-residence',
    title: 'Lakeside Residence',
    category: 'Residential',
    status: 'Completed',
    location: 'Kochi, Kerala',
    year: '2023',
    area: '4,100 sq.ft',
    image: img('1512917774080-9991f1c4c750'),
    summary:
      'A double-height living pavilion that frames uninterrupted backwater views with deep sun-shading verandahs.',
  },
  {
    id: 'meridian-offices',
    title: 'Banyan Courtyard Workspace',
    category: 'Commercial',
    status: 'Ongoing',
    location: 'Kozhikode, Kerala',
    year: '2025',
    area: '9,000 sq.ft',
    image: img('1518780664697-55e3ad937233'),
    summary:
      'A low-rise, naturally ventilated workspace wrapped around a shaded courtyard — built for the Kerala climate.',
  },
  {
    id: 'terra-retail',
    title: 'Tharavadu Boutique Stay',
    category: 'Commercial',
    status: 'Completed',
    location: 'Alappuzha, Kerala',
    year: '2022',
    area: '7,500 sq.ft',
    image: img('1449844908441-8829872d2607'),
    summary:
      'A boutique hospitality project blending traditional Kerala forms with contemporary comfort, set amid greenery.',
  },
  {
    id: 'noor-interior',
    title: 'Noor Apartment Interiors',
    category: 'Interior',
    status: 'Ongoing',
    location: 'Kochi, Kerala',
    year: '2025',
    area: '2,400 sq.ft',
    image: img('1600607687939-ce8a6c25118c'),
    summary:
      'A warm, layered interior scheme with bespoke joinery, concealed lighting and natural stone surfaces.',
  },
  {
    id: 'amara-living',
    title: 'Amara Living Spaces',
    category: 'Interior',
    status: 'Completed',
    location: 'Kannur, Kerala',
    year: '2023',
    area: '1,900 sq.ft',
    image: img('1600566753086-00f18fb6b3ea'),
    summary:
      'A serene material palette of oak, lime plaster and brass elevates a compact family apartment.',
  },
  {
    id: 'verde-courtyard',
    title: 'Verde Courtyard Landscape',
    category: 'Landscape',
    status: 'Upcoming',
    location: 'Thrissur, Kerala',
    year: '2026',
    area: '6,000 sq.ft',
    image: img('1558904541-efa843a96f01'),
    summary:
      'A lush native-planted courtyard with a reflecting pool and layered evening lighting for outdoor living.',
  },
  {
    id: 'palm-grove',
    title: 'Palm Grove Garden',
    category: 'Landscape',
    status: 'Completed',
    location: 'Alappuzha, Kerala',
    year: '2022',
    area: '8,500 sq.ft',
    image: img('1416879595882-3373a0480b5b'),
    summary:
      'A resort-style garden masterplan with shaded seating, water features and tropical planting.',
  },
  {
    id: 'serene-villa',
    title: 'Serene Hillside Villa',
    category: 'Residential',
    status: 'Upcoming',
    location: 'Wayanad, Kerala',
    year: '2026',
    area: '3,800 sq.ft',
    image: img('1564013799919-ab600027ffc6'),
    summary:
      'A stepped hillside home with cantilevered decks that follow the contours and capture valley views.',
  },
  {
    id: 'coastal-bungalow',
    title: 'Coastal Breeze Bungalow',
    category: 'Residential',
    status: 'Completed',
    location: 'Kollam, Kerala',
    year: '2023',
    area: '2,800 sq.ft',
    image: img('1580587771525-78b9dba3b914'),
    summary:
      'A breezy single-storey bungalow with wide verandahs and louvered screens tuned to the coastal climate.',
  },
  {
    id: 'highland-villa',
    title: 'Highland View Villa',
    category: 'Residential',
    status: 'Ongoing',
    location: 'Munnar, Kerala',
    year: '2025',
    area: '3,600 sq.ft',
    image: img('1568605114967-8130f3a36994'),
    summary:
      'A hillside family home with deep verandahs and large openings that frame the surrounding plantations.',
  },
  {
    id: 'aurelia-penthouse',
    title: 'Aurelia Penthouse Interiors',
    category: 'Interior',
    status: 'Completed',
    location: 'Kochi, Kerala',
    year: '2024',
    area: '2,600 sq.ft',
    image: img('1502672260266-1c1ef2d93688'),
    summary:
      'A light-filled penthouse interior layering oak, travertine and brass with bespoke concealed storage.',
  },
  {
    id: 'lumen-workspace',
    title: 'Lumen Workspace Fit-out',
    category: 'Commercial',
    status: 'Ongoing',
    location: 'Kozhikode, Kerala',
    year: '2025',
    area: '14,000 sq.ft',
    image: img('1524758631624-e2822e304c36'),
    summary:
      'A corporate fit-out delivered turnkey — acoustics, lighting and joinery designed and built as one package.',
  },
  {
    id: 'saffron-restaurant',
    title: 'Saffron Restaurant & Lounge',
    category: 'Commercial',
    status: 'Completed',
    location: 'Thrissur, Kerala',
    year: '2023',
    area: '6,800 sq.ft',
    image: img('1517248135467-4c7edcad34c4'),
    summary:
      'A warm hospitality interior with textured plaster, soft layered lighting and a sculpted brass-clad bar.',
  },
  {
    id: 'maple-kitchen',
    title: 'Maple Kitchen & Living',
    category: 'Interior',
    status: 'Completed',
    location: 'Kannur, Kerala',
    year: '2024',
    area: '1,700 sq.ft',
    image: img('1484154218962-a197022b5858'),
    summary:
      'A compact kitchen and living renovation with handleless joinery, a quartz island and warm task lighting.',
  },
  {
    id: 'riverside-garden',
    title: 'Riverside Garden Retreat',
    category: 'Landscape',
    status: 'Upcoming',
    location: 'Thrissur, Kerala',
    year: '2026',
    area: '7,200 sq.ft',
    image: img('1466692476868-aef1dfb1e735'),
    summary:
      'A riverside landscape masterplan with native planting, stepped lawns and a layered evening lighting scheme.',
  },
]
