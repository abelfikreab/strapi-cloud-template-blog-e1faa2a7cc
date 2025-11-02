import type { Schema, Struct } from '@strapi/strapi';

export interface CaseStudyAdditionalInfo extends Struct.ComponentSchema {
  collectionName: 'components_case_study_additional_infos';
  info: {
    displayName: 'additional_info';
  };
  attributes: {
    additional_info_entry: Schema.Attribute.Component<
      'case-study.additional-info-entry',
      true
    >;
  };
}

export interface CaseStudyAdditionalInfoEntry extends Struct.ComponentSchema {
  collectionName: 'components_case_study_additional_info_entries';
  info: {
    displayName: 'additional_info_entry';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CaseStudyContent extends Struct.ComponentSchema {
  collectionName: 'components_case_study_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

export interface CaseStudyGallery extends Struct.ComponentSchema {
  collectionName: 'components_case_study_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CaseStudyOutcomes extends Struct.ComponentSchema {
  collectionName: 'components_case_study_outcomes';
  info: {
    displayName: 'outcomes';
  };
  attributes: {
    outcome: Schema.Attribute.String;
  };
}

export interface CaseStudyOverviewCards extends Struct.ComponentSchema {
  collectionName: 'components_case_study_overview_cards';
  info: {
    displayName: 'overview_cards';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CaseStudyProjectDescription extends Struct.ComponentSchema {
  collectionName: 'components_case_study_project_descriptions';
  info: {
    displayName: 'project_description';
  };
  attributes: {
    contents: Schema.Attribute.Component<'case-study.content', true>;
    title: Schema.Attribute.String;
  };
}

export interface CaseStudyProjectInfo extends Struct.ComponentSchema {
  collectionName: 'components_case_study_project_infos';
  info: {
    displayName: 'project_info';
  };
  attributes: {
    additional_infos: Schema.Attribute.Component<
      'case-study.additional-info',
      true
    >;
    duration: Schema.Attribute.String;
    focus: Schema.Attribute.String;
    team_size: Schema.Attribute.String;
  };
}

export interface CaseStudyResults extends Struct.ComponentSchema {
  collectionName: 'components_case_study_results';
  info: {
    displayName: 'results';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'case-study.additional-info': CaseStudyAdditionalInfo;
      'case-study.additional-info-entry': CaseStudyAdditionalInfoEntry;
      'case-study.content': CaseStudyContent;
      'case-study.gallery': CaseStudyGallery;
      'case-study.outcomes': CaseStudyOutcomes;
      'case-study.overview-cards': CaseStudyOverviewCards;
      'case-study.project-description': CaseStudyProjectDescription;
      'case-study.project-info': CaseStudyProjectInfo;
      'case-study.results': CaseStudyResults;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
