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
