// Central place for brand / contact info — edit here to update site-wide.
export const site = {
  name: 'Holytouch',
  tagline: 'Your Perfect Builder',
  promise: 'Built on Trust, Delivered with Pride.',
  taglines: [
    'You Dream, We Deliver.',
    'We Design. We Plan. We Build.',
    "Let's Build Something Extraordinary.",
  ],
  website: 'www.holytouch.in',
  location: 'Kerala, India',
  email: 'info@holytouch.in', // TODO: confirm real email
  phones: [
    { label: '+91 88912 07208', value: '+918891207208', whatsapp: false },
    { label: '+91 80863 51236', value: '+918086351236', whatsapp: true },
    { label: '+91 89212 13833', value: '+918921213833', whatsapp: true },
  ],
  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 6:30 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],
  social: {
    instagram: 'https://www.instagram.com/holyt.ouch/',
    facebook: '#', // TODO: add real Facebook URL
    linkedin: '#', // TODO: add real LinkedIn URL
    youtube: '#', // TODO: add real YouTube URL
  },
}

// Pre-built WhatsApp link with a friendly default message.
export const whatsappLink = (phone = '918086351236') =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hi Holytouch, I'd like to enquire about your construction & design services.",
  )}`
