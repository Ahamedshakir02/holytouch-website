// The 8 core services. `slug` powers /services#<slug> anchors.
export const services = [
  {
    slug: 'contractor',
    title: 'Contractor',
    short: 'Reliable construction with quality workmanship and timely delivery.',
    description:
      'Our core building service. We execute residential and commercial construction with disciplined site management, vetted materials and skilled labour — so your project is delivered to spec, on schedule and within budget.',
    points: ['Quality workmanship', 'Transparent costing', 'On-time delivery', 'Vetted materials'],
    icon: 'hardhat',
  },
  {
    slug: 'design-consultancy',
    title: 'Design Consultancy',
    short: 'Creative & functional designs tailored to your needs and budget.',
    description:
      'Strategic design guidance from day one. We translate your lifestyle, goals and budget into a clear, buildable design direction — balancing aesthetics, function and cost before a single brick is laid.',
    points: ['Concept development', 'Budget alignment', 'Functional planning', 'Material guidance'],
    icon: 'compass',
  },
  {
    slug: 'structural-architectural-design',
    title: 'Structural / Architectural Design',
    short: 'Safe, strong, sustainable structures — aesthetics with strength.',
    description:
      'Architecture and structural engineering under one roof. We design buildings that are beautiful and built to last — code-compliant, climate-responsive and structurally sound for Kerala conditions.',
    points: ['Architectural design', 'Structural engineering', 'Sustainable & safe', 'Code compliant'],
    icon: 'ruler',
  },
  {
    slug: 'mep',
    title: 'MEP (Mechanical, Electrical, Plumbing)',
    short: 'Integrated MEP for comfort, safety & efficiency.',
    description:
      'Coordinated mechanical, electrical and plumbing design and execution. Properly engineered MEP keeps your home comfortable, safe and efficient for decades — no costly surprises after handover.',
    points: ['Electrical systems', 'Plumbing & drainage', 'Ventilation & HVAC', 'Energy efficiency'],
    icon: 'bolt',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    short: 'Beautiful interiors blending aesthetics with practicality.',
    description:
      'Interiors that feel like home. From space planning and joinery to lighting, finishes and furnishing, we craft interiors that are striking, liveable and tailored to how you actually use each room.',
    points: ['Space planning', 'Bespoke joinery', 'Lighting & finishes', 'Turnkey furnishing'],
    icon: 'sofa',
  },
  {
    slug: 'landscape-design',
    title: 'Landscape Design',
    short: 'Elegant outdoor landscapes that enhance beauty and value.',
    description:
      'The finishing touch to any property. We design gardens, courtyards and outdoor living spaces that complement the architecture, suit the local climate and add lasting value to your home.',
    points: ['Garden & hardscape', 'Outdoor living', 'Native planting', 'Water features'],
    icon: 'leaf',
  },
  {
    slug: 'pmc',
    title: 'PMC (Project Management Consultancy)',
    short: 'Complete planning, coordination & execution.',
    description:
      'A single point of accountability for your build. We plan, schedule, coordinate every vendor and monitor quality and cost — keeping your project moving smoothly from start to finish.',
    points: ['Scheduling & planning', 'Vendor coordination', 'Cost & quality control', 'Progress reporting'],
    icon: 'clipboard',
  },
  {
    slug: 'epc',
    title: 'EPC (Engineering, Procurement, Construction)',
    short: 'End-to-end turnkey — concept to completion.',
    description:
      'Our fully turnkey offering. We take complete ownership of engineering, procurement and construction, handing you a finished project — one contract, one team, zero coordination headaches.',
    points: ['Turnkey delivery', 'Single contract', 'Engineering to handover', 'Procurement managed'],
    icon: 'building',
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
