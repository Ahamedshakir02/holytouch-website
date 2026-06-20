// Reusable content blocks shared across pages.

export const valueProps = [
  {
    title: 'Experienced Team',
    text: 'Architects, engineers and craftsmen who have delivered homes across Kerala.',
    icon: 'team',
  },
  {
    title: 'Quality Assured',
    text: 'Rigorous material checks and on-site supervision at every stage of the build.',
    icon: 'shield',
  },
  {
    title: 'On-Time Delivery',
    text: 'Realistic schedules we commit to — and milestone tracking that keeps them.',
    icon: 'clock',
  },
  {
    title: 'Cost Effective',
    text: 'Transparent, itemised estimates with no hidden costs from concept to handover.',
    icon: 'rupee',
  },
]

export const process = [
  {
    step: '01',
    title: 'Consult',
    short: 'Understand needs & goals',
    text: 'We listen first — understanding your vision, lifestyle, site and budget to set a clear brief and realistic expectations.',
    icon: 'chat',
  },
  {
    step: '02',
    title: 'Plan',
    short: 'Concept, design & estimation',
    text: 'Our team develops the concept, architectural and structural design, and a transparent, itemised cost estimate for your approval.',
    icon: 'compass',
  },
  {
    step: '03',
    title: 'Execute',
    short: 'Quality construction with precision',
    text: 'We build with disciplined site management, vetted materials and continuous quality supervision at every milestone.',
    icon: 'hammer',
  },
  {
    step: '04',
    title: 'Deliver',
    short: 'On-time handover with assurance',
    text: 'A thorough quality walkthrough, snag-free finishing and a confident, on-time handover — backed by our after-care.',
    icon: 'key',
  },
]

export const whyChoose = [
  {
    title: 'One-Stop Solution',
    text: 'Design, structure, MEP, interiors, landscape and project management — every discipline under one roof, one accountable team.',
    icon: 'layers',
  },
  {
    title: 'Transparent & Reliable',
    text: 'Itemised estimates, clear timelines and honest communication. You always know where your project — and your money — stands.',
    icon: 'shield',
  },
  {
    title: 'Innovative Designs',
    text: 'Climate-responsive, future-ready designs tailored to how you live, balancing beauty, function and long-term value.',
    icon: 'spark',
  },
  {
    title: 'Safety & Quality',
    text: 'Sound engineering and uncompromising quality control keep your build safe, durable and built to last.',
    icon: 'check',
  },
]

// Company organisation — led by the Managing Directors / Partners.
// Rendered as a department cards grid on the About page.
export const orgStructure = [
  {
    title: 'Design & Engineering',
    icon: 'compass',
    roles: ['Architecture', 'Interior Design', 'Structural Design', 'MEP Design'],
  },
  {
    title: 'Project Execution',
    icon: 'hammer',
    roles: ['Project Manager', 'Site Engineers', 'Supervisors', 'Skilled Workforce'],
  },
  {
    title: 'Business Development & Estimation',
    icon: 'rupee',
    roles: ['Sales & Marketing', 'Tendering & Estimation'],
  },
  {
    title: 'Administration & Finance',
    icon: 'clipboard',
    roles: ['HR & Administration', 'Accounts & Procurement'],
  },
]

// Operational project journey shown as the timeline on the Process page.
// `caption` is a short subtitle; `text` is the full explanation. Copy is
// editable marketing text — refine as needed.
export const executionFlow = [
  {
    title: 'Client Requirement',
    icon: 'chat',
    caption: 'Brief, site context and goals captured.',
    text: 'We begin by listening. Through a detailed discussion and a site visit, we understand your vision, lifestyle needs, plot conditions and budget — setting a clear brief and realistic expectations before any design work begins.',
  },
  {
    title: 'Design & Planning',
    icon: 'compass',
    caption: 'Concept, architecture, structure & MEP.',
    text: 'Our architects and engineers turn the brief into concept designs, floor plans and 3D visuals, fully coordinated with structural and MEP planning. We refine it together until the design balances aesthetics, function and buildability.',
  },
  {
    title: 'Approval & Estimation',
    icon: 'clipboard',
    caption: 'Itemised costing reviewed and signed off.',
    text: 'We prepare a transparent, itemised cost estimate and project schedule, and handle the statutory drawings and permit approvals. You review and sign off on a clear scope before work starts — no hidden costs or surprises.',
  },
  {
    title: 'Procurement',
    icon: 'layers',
    caption: 'Materials and vendors mobilised.',
    text: 'We source quality-checked materials and engage vetted vendors and subcontractors at the right time, locking in rates and lead times. Disciplined procurement keeps the site supplied without delays or budget creep.',
  },
  {
    title: 'Project Execution',
    icon: 'hammer',
    caption: 'Disciplined, supervised construction.',
    text: 'Construction proceeds under tight site management, led by a dedicated project manager and site engineers. Work follows the approved drawings with continuous supervision and regular progress updates to you at every milestone.',
  },
  {
    title: 'Quality & Safety Check',
    icon: 'shield',
    caption: 'Inspections at every milestone.',
    text: 'At each stage we run structured quality inspections and enforce strict site-safety standards. Materials, workmanship and finishes are checked against specification, so issues are caught and corrected early — not after handover.',
  },
  {
    title: 'Project Handover',
    icon: 'key',
    caption: 'Snag-free, on-time delivery.',
    text: 'After a thorough snagging walkthrough and final quality check, we hand over a clean, completed project on schedule — along with documentation and after-care support, so you can move in with complete confidence.',
  },
]

export const stats = [
  { value: '12+', label: 'Years of combined experience' },
  { value: '150+', label: 'Projects delivered' },
  { value: '8', label: 'Integrated services' },
  { value: '100%', label: 'On-time commitment' },
]

// PLACEHOLDER testimonials — swap with real client quotes.
export const testimonials = [
  {
    quote:
      'From the first consultation to handover, Holytouch made the process transparent and stress-free. Our villa was delivered on time and exactly to the design we approved.',
    name: 'Rahul & Anjali Menon',
    role: 'Villa owners, Thrissur',
  },
  {
    quote:
      'Having design, structure and interiors handled by one team saved us months of coordination. The quality of finishing genuinely exceeded our expectations.',
    name: 'Dr. Suresh Nair',
    role: 'Residential client, Kochi',
  },
  {
    quote:
      'They managed our commercial project end-to-end under EPC. Professional, organised and reliable — we have already engaged them for a second site.',
    name: 'Priya Varghese',
    role: 'Director, Meridian Group',
  },
]
