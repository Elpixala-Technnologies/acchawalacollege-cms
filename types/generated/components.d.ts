import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonApplicationDate extends Schema.Component {
  collectionName: 'components_common_application_dates';
  info: {
    displayName: 'applicationDate';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

export interface CommonBannerComponent extends Schema.Component {
  collectionName: 'components_common_banner_components';
  info: {
    displayName: 'banner_component';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    button_text: Attribute.String;
    section: Attribute.Relation<
      'common.banner-component',
      'oneToMany',
      'api::college.college'
    >;
  };
}

export interface CommonDislikes extends Schema.Component {
  collectionName: 'components_common_dislikes';
  info: {
    displayName: 'dislikes';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    questions: Attribute.Component<'faq.faq-elements', true>;
    section: Attribute.String;
  };
}

export interface CommonField extends Schema.Component {
  collectionName: 'components_common_fields';
  info: {
    displayName: 'field';
  };
  attributes: {
    field_label: Attribute.String;
    filed_type: Attribute.Enumeration<['pdf', 'jpg', 'png']>;
  };
}

export interface CommonFormStape extends Schema.Component {
  collectionName: 'components_common_form_stapes';
  info: {
    displayName: 'form_stape';
  };
  attributes: {
    field: Attribute.Component<'common.field', true>;
    step_label: Attribute.String;
    step_banner: Attribute.Media;
    step_heading: Attribute.String;
    step_description: Attribute.Component<'common.step-description', true>;
  };
}

export interface CommonGallery extends Schema.Component {
  collectionName: 'components_common_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    gallery: Attribute.Media;
    section: Attribute.String;
  };
}

export interface CommonGoogleAds extends Schema.Component {
  collectionName: 'components_common_google_ads';
  info: {
    displayName: 'GoogleAds';
    description: '';
  };
  attributes: {
    section: Attribute.String;
  };
}

export interface CommonLikes extends Schema.Component {
  collectionName: 'components_common_likes';
  info: {
    displayName: 'likes';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonNavItem extends Schema.Component {
  collectionName: 'components_common_nav_items';
  info: {
    displayName: 'nav_item';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonNavbar extends Schema.Component {
  collectionName: 'components_common_navbars';
  info: {
    displayName: 'navbar';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    nav_item: Attribute.Component<'common.nav-item', true>;
    section: Attribute.String;
  };
}

export interface CommonNewOverview extends Schema.Component {
  collectionName: 'components_common_new_overviews';
  info: {
    displayName: 'new_overview';
    description: '';
  };
  attributes: {
    overview_text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    writer_name: Attribute.String & Attribute.DefaultTo<'null'>;
    date: Attribute.Date;
    section: Attribute.String;
  };
}

export interface CommonRecommendedCollege extends Schema.Component {
  collectionName: 'components_common_recommended_colleges';
  info: {
    displayName: 'recommended_college';
    description: '';
  };
  attributes: {
    colleges: Attribute.Relation<
      'common.recommended-college',
      'oneToMany',
      'api::college.college'
    >;
    sections: Attribute.Relation<
      'common.recommended-college',
      'oneToMany',
      'api::college.college'
    >;
  };
}

export interface CommonRecommendedCourses extends Schema.Component {
  collectionName: 'components_common_recommended_courses';
  info: {
    displayName: 'recommended_courses';
  };
  attributes: {
    courses: Attribute.Relation<
      'common.recommended-courses',
      'oneToMany',
      'api::course.course'
    >;
  };
}

export interface CommonRecommendedExams extends Schema.Component {
  collectionName: 'components_common_recommended_exams';
  info: {
    displayName: 'recommended_exams';
  };
  attributes: {
    exams: Attribute.Relation<
      'common.recommended-exams',
      'oneToMany',
      'api::exam.exam'
    >;
  };
}

export interface CommonResultDate extends Schema.Component {
  collectionName: 'components_common_result_dates';
  info: {
    displayName: 'resultDate';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

export interface CommonReviewComponent extends Schema.Component {
  collectionName: 'components_common_review_components';
  info: {
    displayName: 'review_component';
  };
  attributes: {
    likes: Attribute.Component<'common.likes', true>;
    dislikes: Attribute.Component<'common.dislikes', true>;
  };
}

export interface CommonStepDescription extends Schema.Component {
  collectionName: 'components_common_step_descriptions';
  info: {
    displayName: 'step_description';
  };
  attributes: {
    heading: Attribute.String;
    details: Attribute.String;
  };
}

export interface CommonTabData extends Schema.Component {
  collectionName: 'components_common_tab_data';
  info: {
    displayName: 'tabData';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CourseCourse extends Schema.Component {
  collectionName: 'components_course_courses';
  info: {
    displayName: 'Course';
    icon: 'seed';
    description: '';
  };
  attributes: {
    course_name: Attribute.Relation<
      'course.course',
      'oneToOne',
      'api::course.course'
    >;
    exam_accepted: Attribute.Relation<
      'course.course',
      'oneToMany',
      'api::exam.exam'
    >;
    specializations: Attribute.Relation<
      'course.course',
      'oneToMany',
      'api::specialization.specialization'
    >;
    course_fee: Attribute.BigInteger;
    course_lebel: Attribute.String;
  };
}

export interface CourseCourses extends Schema.Component {
  collectionName: 'components_course_addcourses';
  info: {
    displayName: 'courses';
    description: '';
  };
  attributes: {
    section: Attribute.Text;
  };
}

export interface CourseSpecialisation extends Schema.Component {
  collectionName: 'components_course_specialisations';
  info: {
    displayName: 'specialisation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface FaqFaqElements extends Schema.Component {
  collectionName: 'components_faq_faq_elements';
  info: {
    displayName: 'FAQ_Elements';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.Text;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    page_title: Attribute.Text & Attribute.Required;
    page_og_title: Attribute.Text;
    page_description: Attribute.Text;
    page_og_description: Attribute.Text;
    page_canonical_url: Attribute.Text & Attribute.Unique;
    page_og_url: Attribute.Text & Attribute.Unique;
    favicon: Attribute.Media;
    favicon_alt_text: Attribute.Text;
  };
}

export interface TableColumn extends Schema.Component {
  collectionName: 'components_table_columns';
  info: {
    displayName: 'column';
    icon: 'stack';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    is_heading: Attribute.Enumeration<['yes', 'no']> &
      Attribute.DefaultTo<'no'>;
  };
}

export interface TableRow extends Schema.Component {
  collectionName: 'components_table_rows';
  info: {
    displayName: 'row';
    description: '';
  };
  attributes: {
    col: Attribute.Component<'table.column', true>;
  };
}

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_table';
  info: {
    displayName: 'table';
    description: '';
  };
  attributes: {
    row: Attribute.Component<'table.row', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.application-date': CommonApplicationDate;
      'common.banner-component': CommonBannerComponent;
      'common.dislikes': CommonDislikes;
      'common.faq': CommonFaq;
      'common.field': CommonField;
      'common.form-stape': CommonFormStape;
      'common.gallery': CommonGallery;
      'common.google-ads': CommonGoogleAds;
      'common.likes': CommonLikes;
      'common.nav-item': CommonNavItem;
      'common.navbar': CommonNavbar;
      'common.new-overview': CommonNewOverview;
      'common.recommended-college': CommonRecommendedCollege;
      'common.recommended-courses': CommonRecommendedCourses;
      'common.recommended-exams': CommonRecommendedExams;
      'common.result-date': CommonResultDate;
      'common.review-component': CommonReviewComponent;
      'common.step-description': CommonStepDescription;
      'common.tab-data': CommonTabData;
      'course.course': CourseCourse;
      'course.courses': CourseCourses;
      'course.specialisation': CourseSpecialisation;
      'faq.faq-elements': FaqFaqElements;
      'seo.seo': SeoSeo;
      'table.column': TableColumn;
      'table.row': TableRow;
      'table.table': TableTable;
    }
  }
}
