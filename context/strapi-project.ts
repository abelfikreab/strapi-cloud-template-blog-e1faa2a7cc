import type { ProjectInfo, ProjectLink, ProjectMetric } from "./project"

// Minimal Strapi-style fields for a Portfolio Project
export interface StrapiProject {
  Title: string
  Short_description: string
  Cover_Image: string
  tags?: string[]
}

// Rich project shape that aligns with your UI, composed from Strapi + site fields
export interface ProjectRich extends StrapiProject {
  slug: string
  description: string
  metrics?: ProjectMetric[]
  links?: ProjectLink[]
  projectInfo?: ProjectInfo
  websiteUrl?: string
  websiteLabel?: string
  category?: string
  status?: 'completed' | 'ongoing' | 'launched'
}

export const projectsRich: ProjectRich[] = [
  {
    slug: "ethiocpm-production-platform",
    Title: "EthioCPM: Comprehensive Production Management Platform",
    Short_description:
      "Built a complete production management solution serving 500+ trained professionals with 40% average efficiency gains across manufacturing industries.",
    Cover_Image: "/projects/ethiocpm.webp",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Production Management", "Training Platform"],
    description:
      "We developed EthioCPM, a comprehensive production management platform that integrates six core areas: Strategic Leadership, Quality Management, Production Planning & Control, Maintenance Management, Decent Working Environment, and Resource Management. The platform includes 34+ production modules, interactive training systems, real-time reporting tools, and expert-led consultancy services.",
    metrics: [
      { label: "Professionals Trained", value: "500+" },
      { label: "Efficiency Gain", value: "40%" },
      { label: "Quality Success Rate", value: "98%" },
      { label: "Client Satisfaction", value: "99%" },
      { label: "Production Modules", value: "34+" },
      { label: "Global Locations", value: "3" }
    ],
    links: [
      { label: "Visit Platform", href: "https://www.ethiocpm.com/" },
      { label: "Case Study", href: "/case-studies/ethiocpm-production-platform" }
    ],
    projectInfo: {
      duration: "24 months",
      teamSize: "12 specialists",
      industry: "Manufacturing & Production",
      additionalInfo: [
        { icon: "🏭", label: "Industries", value: "Manufacturing, Packaging, Engineering" },
        { icon: "🌍", label: "Reach", value: "Global with 3 locations" },
        { icon: "📊", label: "Modules", value: "34+ comprehensive production modules" },
        { icon: "🎓", label: "Training", value: "Interactive learning platform" }
      ]
    },
    websiteUrl: "https://www.ethiocpm.com/",
    websiteLabel: "Visit EthioCPM Platform",
    category: "Enterprise Platform",
    status: "launched"
  },
  {
    slug: "ethiopian-heritage-trust-platform",
    Title: "Ethiopian Heritage Trust: Digital Heritage Preservation Platform",
    Short_description:
      "Developed a comprehensive digital platform for Ethiopia's premier heritage conservation organization, serving 400+ members and managing multiple international conservation projects.",
    Cover_Image: "/projects/eht.webp",
    tags: ["React", "Node.js", "MongoDB", "Multilingual", "Heritage Management"],
    description:
      "We created a comprehensive digital platform featuring membership management systems, project tracking for initiatives like the Dessie Museum Renovation Project (British Council's Cultural Protection Fund), community-based conservation programs (GEF/UN funding), and eco-tourism heritage preservation projects (GIZ-Biodiversity program). The platform includes bilingual support (English/Amharic), volunteer coordination, and partnership management tools.",
    metrics: [
      { label: "Active Members", value: "400+" },
      { label: "Active Projects", value: "3+" },
      { label: "International Funders", value: "5+" },
      { label: "Heritage Sites", value: "10+" },
      { label: "Platform Uptime", value: "99.9%" },
      { label: "User Engagement", value: "+75%" }
    ],
    links: [
      { label: "Visit Website", href: "https://www.eht.et/" },
      { label: "Case Study", href: "/case-studies/ethiopian-heritage-trust-platform" }
    ],
    projectInfo: {
      duration: "18 months",
      teamSize: "8 specialists",
      industry: "Heritage & Cultural Preservation",
      additionalInfo: [
        { icon: "🏛️", label: "Focus", value: "Cultural heritage preservation" },
        { icon: "🌍", label: "Scope", value: "National with international partnerships" },
        { icon: "🤝", label: "Partnerships", value: "British Council, UN, GIZ" },
        { icon: "📱", label: "Accessibility", value: "Bilingual (English/Amharic)" }
      ]
    },
    websiteUrl: "https://www.eht.et/",
    websiteLabel: "Visit Ethiopian Heritage Trust",
    category: "Non-Profit Platform",
    status: "launched"
  },
  {
    slug: "ador-sam-hospitality-platform",
    Title: "Ador Sam: Premium Hospitality Management Platform",
    Short_description:
      "Developed a comprehensive digital platform for luxury apartment rentals in Addis Ababa, featuring multi-floor property management, guest services, and booking integration.",
    Cover_Image: "/projects/adorsam.webp",
    tags: ["Next.js", "Booking System", "Property Management", "Guest Services"],
    description:
      "We created a comprehensive hospitality management platform featuring detailed property showcasing with floor-specific amenities, integrated booking systems, guest management tools, and multi-channel communication (WhatsApp, Telegram, Instagram). The platform includes property maintenance tracking, guest review management, team coordination, and location-based service recommendations for the Bole area.",
    metrics: [
      { label: "Property Floors", value: "7" },
      { label: "Unit Size", value: "158m²" },
      { label: "Guest Capacity", value: "6 per unit" },
      { label: "Guest Satisfaction", value: "5★ rating" },
      { label: "Booking Channels", value: "Multiple" },
      { label: "Service Uptime", value: "99.8%" }
    ],
    links: [
      { label: "Visit Website", href: "https://www.adorsam.com/" },
      { label: "Case Study", href: "/case-studies/ador-sam-hospitality-platform" }
    ],
    projectInfo: {
      duration: "12 months",
      teamSize: "6 specialists",
      industry: "Hospitality & Tourism",
      additionalInfo: [
        { icon: "🏨", label: "Property Type", value: "Luxury apartment rentals" },
        { icon: "📍", label: "Location", value: "Bole, Addis Ababa (near airport)" },
        { icon: "🛏️", label: "Capacity", value: "3-bedroom units, up to 6 guests" },
        { icon: "⭐", label: "Service Level", value: "Premium hospitality with 24/7 support" }
      ]
    },
    websiteUrl: "https://www.adorsam.com/",
    websiteLabel: "Visit Ador Sam Apartments",
    category: "Hospitality Platform",
    status: "launched"
  }
]

export function getRichProjectBySlug(slug: string) {
  return projectsRich.find((p) => p.slug === slug)
}
