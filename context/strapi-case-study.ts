import type { CaseStudyOverviewCard, CaseStudyProjectInfo, CaseStudyResult } from "./case-study"

// Strapi Single Type: Case Study (minimal fields used for CMS)
export type StrapiCaseStudyTag = "gained efficiency," | "quality success rate"

export interface StrapiCaseStudy {
  Title: string
  Short_description: string
  tags: StrapiCaseStudyTag
  Cover_Image: string // URL or media URL from Strapi; can be empty string if not set
}

// Optional gallery item shape if you later model media objects instead of plain URLs
export interface CaseStudyGalleryItem {
  url: string
  alt?: string
  width?: number
  height?: number
}

// Rich case study shape combining CMS fields with your site content model
export interface CaseStudyRich extends StrapiCaseStudy {
  // Routing / identity
  slug: string

  // Narrative
  Problem: string
  Solution: string

  // Highlights
  Outcomes: string[]
  Results: CaseStudyResult[]

  // Structured info blocks
  ProjectInfo?: CaseStudyProjectInfo
  OverviewCards?: CaseStudyOverviewCard[]
  ProjectDescription?: {
    title?: string
    content: string | string[]
  }

  // Links
  WebsiteUrl?: string
  WebsiteLabel?: string

  // Media
  Gallery?: string[] | CaseStudyGalleryItem[]
}

// Example data matching the structure above (helpful for seeding or testing)
// Note: Replace Cover_Image and Gallery URLs with your Strapi media URLs when available.
export const exampleCaseStudiesRich: CaseStudyRich[] = [
  {
    slug: "ethiocpm-production-platform",
    Title: "EthioCPM: Comprehensive Production Management Platform",
    Short_description: "Production platform serving 500+ professionals with 40% efficiency gains across manufacturing.",
    tags: "gained efficiency,",
    Cover_Image: "/projects/ethiocpm.webp",
    Problem:
      "Manufacturing companies struggled with fragmented production processes, inconsistent quality management, reactive maintenance approaches, and lack of integrated systems for strategic decision-making. This led to inefficiencies, increased downtime, quality issues, and limited scalability.",
    Solution:
      "We developed EthioCPM, a comprehensive production management platform that integrates six core areas: Strategic Leadership, Quality Management, Production Planning & Control, Maintenance Management, Decent Working Environment, and Resource Management. The platform includes 34+ production modules, interactive training systems, real-time reporting tools, and expert-led consultancy services.",
    Outcomes: [
      "500+ professionals trained",
      "40% efficiency improvement",
      "98% quality success rate",
      "24/7 support system",
      "ISO certified processes",
      "3 global locations"
    ],
    Results: [
      { label: "Professionals Trained", value: "500+" },
      { label: "Efficiency Gain", value: "40%" },
      { label: "Quality Success Rate", value: "98%" },
      { label: "Client Satisfaction", value: "99%" },
      { label: "Production Modules", value: "34+" },
      { label: "Global Locations", value: "3" }
    ],
    ProjectInfo: {
      duration: "24 months",
      teamSize: "12 specialists",
      focus: "Production management optimization and digital transformation",
      additionalInfo: [
        { icon: "🏭", label: "Industries", value: "Manufacturing, Packaging, Engineering" },
        { icon: "🌍", label: "Reach", value: "Global with 3 locations" },
        { icon: "📊", label: "Modules", value: "34+ comprehensive production modules" },
        { icon: "🎓", label: "Training", value: "Interactive learning platform" }
      ]
    },
    OverviewCards: [
      { icon: 'users', title: 'Expert Team', description: '12 production management specialists and consultants' },
      { icon: 'calendar', title: 'Development Timeline', description: '24 months of iterative development and client collaboration' },
      { icon: 'target', title: 'Mission', description: 'Transform production management through comprehensive digital solutions' }
    ],
    ProjectDescription: {
      title: "About EthioCPM Platform",
      content: [
        "EthioCPM represents a revolutionary approach to production management, integrating six core areas into a synergistic system that drives efficiency, quality, and innovation in manufacturing. The platform serves as a comprehensive solution for organizations looking to optimize their production processes and achieve sustainable growth.",
        "The development process involved extensive research into manufacturing industry pain points, collaboration with industry leaders like Hajuta Engineering PLC, Flexible Packaging Manufacturing PLC, and Home Base PLC. We created a platform that not only addresses immediate operational needs but also provides long-term strategic value through continuous improvement frameworks.",
        "Our methodology emphasized user-centric design, ensuring that the platform is accessible to professionals at all levels while maintaining the depth and sophistication required for complex manufacturing operations. The result is a solution that has trained over 500 professionals and consistently delivers measurable improvements in efficiency and quality."
      ]
    },
    WebsiteUrl: "https://www.ethiocpm.com/",
    WebsiteLabel: "Visit EthioCPM Platform",
    Gallery: [
      "/projects/ethiocpm.webp"
    ]
  },
  {
    slug: "ethiopian-heritage-trust-platform",
    Title: "Ethiopian Heritage Trust: Digital Heritage Preservation Platform",
    Short_description: "Digital platform for Ethiopia’s heritage trust, serving 400+ members and managing international conservation projects.",
    tags: "gained efficiency,",
    Cover_Image: "/projects/eht.webp",
    Problem:
      "The Ethiopian Heritage Trust, established in 1992, needed a modern digital platform to manage their growing membership base, coordinate multiple heritage conservation projects funded by international organizations, and effectively communicate their mission to preserve Ethiopia's cultural, historical, and natural heritage for future generations.",
    Solution:
      "We created a comprehensive digital platform featuring membership management systems, project tracking for initiatives like the Dessie Museum Renovation Project (British Council's Cultural Protection Fund), community-based conservation programs (GEF/UN funding), and eco-tourism heritage preservation projects (GIZ-Biodiversity program). The platform includes bilingual support (English/Amharic), volunteer coordination, and partnership management tools.",
    Outcomes: [
      "400+ active members",
      "Multi-project management",
      "International partnerships",
      "Heritage documentation system",
      "Community engagement platform",
      "Bilingual accessibility"
    ],
    Results: [
      { label: "Active Members", value: "400+" },
      { label: "Active Projects", value: "3+" },
      { label: "International Funders", value: "5+" },
      { label: "Heritage Sites", value: "10+" },
      { label: "Platform Uptime", value: "99.9%" },
      { label: "User Engagement", value: "+75%" }
    ],
    ProjectInfo: {
      duration: "18 months",
      teamSize: "8 specialists",
      focus: "Heritage preservation digitization and community engagement",
      additionalInfo: [
        { icon: "🏛️", label: "Focus", value: "Cultural heritage preservation" },
        { icon: "🌍", label: "Scope", value: "National with international partnerships" },
        { icon: "🤝", label: "Partnerships", value: "British Council, UN, GIZ" },
        { icon: "📱", label: "Accessibility", value: "Bilingual (English/Amharic)" }
      ]
    },
    OverviewCards: [
      { icon: 'users', title: 'Expert Team', description: '8 heritage preservation and digital platform specialists' },
      { icon: 'calendar', title: 'Development Period', description: '18 months of collaborative development with heritage experts' },
      { icon: 'target', title: 'Mission', description: 'Safeguard and promote Ethiopia\'s cultural, historical, and natural heritage' }
    ],
    ProjectDescription: {
      title: "About the EHT Digital Platform",
      content: [
        "The Ethiopian Heritage Trust (EHT) is an independent, nonpolitical, nonreligious, and non-profit charity organization established in 1992 and re-registered in 2019. Our digital platform was designed to support their mission of safeguarding and promoting Ethiopia's cultural, historical, and natural heritage for sustainable development.",
        "The platform manages complex, multi-funded projects including the ongoing Dessie Museum Renovation Project (2022-2025) funded by the British Council's Cultural Protection Fund, community-based conservation initiatives supported by the Global Environment Facility/GEF of UN, and eco-tourism heritage conservation projects in partnership with GIZ-Biodiversity and Forestry program.",
        "Our solution emphasizes community participation and international cooperation, providing tools for volunteer coordination, membership management, project tracking, and multilingual content management. The platform serves as a bridge between local communities and international heritage preservation efforts, ensuring Ethiopia's rich cultural legacy is preserved for future generations."
      ]
    },
    WebsiteUrl: "https://www.eht.et/",
    WebsiteLabel: "Visit Ethiopian Heritage Trust",
    Gallery: [
      "/projects/eht.webp"
    ]
  },
  {
    slug: "ador-sam-hospitality-platform",
    Title: "Ador Sam: Premium Hospitality Management Platform",
    Short_description: "Digital platform for luxury apartment rentals in Addis Ababa with property management, guest services, and booking integration.",
    tags: "quality success rate",
    Cover_Image: "/projects/adorsam.webp",
    Problem:
      "Ador Sam, a luxury apartment rental business established in 2018, needed a modern digital platform to manage their 7-floor property with unique 3-bedroom units (Floor 4-10), coordinate guest bookings, handle guest relations, and showcase their premium hospitality services in the competitive Addis Ababa market near Bole International Airport.",
    Solution:
      "We created a comprehensive hospitality management platform featuring detailed property showcasing with floor-specific amenities, integrated booking systems, guest management tools, and multi-channel communication (WhatsApp, Telegram, Instagram). The platform includes property maintenance tracking, guest review management, team coordination, and location-based service recommendations for the Bole area.",
    Outcomes: [
      "7-floor property management",
      "158m² luxury apartments",
      "Multi-channel booking system",
      "Guest satisfaction tracking",
      "Prime location optimization",
      "24/7 guest support system"
    ],
    Results: [
      { label: "Property Floors", value: "7" },
      { label: "Unit Size", value: "158m²" },
      { label: "Guest Capacity", value: "6 per unit" },
      { label: "Guest Satisfaction", value: "5★ rating" },
      { label: "Booking Channels", value: "Multiple" },
      { label: "Service Uptime", value: "99.8%" }
    ],
    ProjectInfo: {
      duration: "12 months",
      teamSize: "6 specialists",
      focus: "Hospitality platform development and guest experience optimization",
      additionalInfo: [
        { icon: "🏨", label: "Property Type", value: "Luxury apartment rentals" },
        { icon: "📍", label: "Location", value: "Bole, Addis Ababa (near airport)" },
        { icon: "🛏️", label: "Capacity", value: "3-bedroom units, up to 6 guests" },
        { icon: "⭐", label: "Service Level", value: "Premium hospitality with 24/7 support" }
      ]
    },
    OverviewCards: [
      { icon: 'users', title: 'Hospitality Team', description: '6 specialists in property management and guest experience' },
      { icon: 'calendar', title: 'Development Period', description: '12 months of platform development and guest service integration' },
      { icon: 'target', title: 'Mission', description: 'Create memorable luxury accommodation experiences in Addis Ababa' }
    ],
    ProjectDescription: {
      title: "About the Ador Sam Platform",
      content: [
        "Ador Sam was established in 2018 with a vision to create not just a place to stay, but a memorable experience for guests visiting Addis Ababa. Our digital platform was designed to support their luxury apartment rental business, featuring a modern 7-floor building with unique 3-bedroom units ranging from Floor 4 to Floor 10.",
        "The platform manages all aspects of their hospitality business, from showcasing the 158m² apartments with premium finishes and modern amenities to coordinating guest services through their dedicated team including founder Samuel (15+ years hospitality experience), David Rodriguez (property maintenance), and Emily Chen (guest relations).",
        "Located in the prime Bole area near Addis Ababa's International Airport, the platform emphasizes their core values of comfort, quality, and experience. It integrates with multiple communication channels and supports their goal of hosting international guests while maintaining the highest standards of luxury accommodation in Ethiopia's capital city."
      ]
    },
    WebsiteUrl: "https://www.adorsam.com/",
    WebsiteLabel: "Visit Ador Sam Apartments",
    Gallery: [
      "/projects/adorsam.webp"
    ]
  }
]
