import type { Schema, Attribute } from '@strapi/strapi';

export interface CollegesTitle extends Schema.Component {
  collectionName: 'components_colleges_titles';
  info: {
    displayName: 'title';
    description: '';
  };
  attributes: {
    t1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    t2: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    t3: Attribute.String & Attribute.Required;
  };
}

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

export interface CommonAuthor extends Schema.Component {
  collectionName: 'components_common_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    avatar: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
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

export interface CommonBannerSection extends Schema.Component {
  collectionName: 'components_common_banner_sections';
  info: {
    displayName: 'bannerSection';
  };
  attributes: {
    title: Attribute.Component<'colleges.title'>;
    author: Attribute.Component<'common.author'>;
    article: Attribute.Text & Attribute.Required;
    readMoreLink: Attribute.Text & Attribute.Required;
  };
}

export interface CommonBanner1 extends Schema.Component {
  collectionName: 'components_common_banner1s';
  info: {
    displayName: 'banner1';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text1: Attribute.String & Attribute.Required;
    button: Attribute.Component<'common.button'>;
    bgImg: Attribute.Media & Attribute.Required;
  };
}

export interface CommonBanner2 extends Schema.Component {
  collectionName: 'components_common_banner2s';
  info: {
    displayName: 'banner2';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'colleges.title'>;
    text: Attribute.String & Attribute.Required;
    steps: Attribute.Relation<'common.banner2', 'oneToMany', 'api::step.step'>;
    bg: Attribute.Media & Attribute.Required;
  };
}

export interface CommonBlogsAndOthers extends Schema.Component {
  collectionName: 'components_common_blogs_and_others';
  info: {
    displayName: 'BlogsAndOthers';
  };
  attributes: {};
}

export interface CommonBrochureSection extends Schema.Component {
  collectionName: 'components_common_brochure_sections';
  info: {
    displayName: 'brochureSection';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    buttons: Attribute.Component<'common.buttons2'>;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    href: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
  };
}

export interface CommonButton1 extends Schema.Component {
  collectionName: 'components_common_button1s';
  info: {
    displayName: 'button1';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    href: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonButton2 extends Schema.Component {
  collectionName: 'components_common_button2s';
  info: {
    displayName: 'button2';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    href: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonButtons2 extends Schema.Component {
  collectionName: 'components_common_buttons2s';
  info: {
    displayName: 'buttons2';
    description: '';
  };
  attributes: {
    button1: Attribute.Relation<
      'common.buttons2',
      'oneToOne',
      'api::button.button'
    >;
  };
}

export interface CommonCard1 extends Schema.Component {
  collectionName: 'components_common_card1s';
  info: {
    displayName: 'card1';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonCard2 extends Schema.Component {
  collectionName: 'components_common_card2s';
  info: {
    displayName: 'card2';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonCard3 extends Schema.Component {
  collectionName: 'components_common_card3s';
  info: {
    displayName: 'card3';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonColleges extends Schema.Component {
  collectionName: 'components_common_colleges';
  info: {
    displayName: 'colleges';
    description: '';
  };
  attributes: {
    id_no: Attribute.Integer;
    collegeName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    icon: Attribute.Media & Attribute.Required;
    img: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    text1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    degreeType: Attribute.Relation<
      'common.colleges',
      'oneToMany',
      'api::degree.degree'
    >;
  };
}

export interface CommonCounsellingPackagesCards extends Schema.Component {
  collectionName: 'components_common_counselling_packages_cards';
  info: {
    displayName: 'CounsellingPackagesCards';
    description: '';
  };
  attributes: {
    id_no: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    PackageName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    isPopular: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    price: Attribute.Integer & Attribute.Required;
    text1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    lists: Attribute.Relation<
      'common.counselling-packages-cards',
      'oneToMany',
      'api::list.list'
    >;
    button: Attribute.Relation<
      'common.counselling-packages-cards',
      'oneToOne',
      'api::button.button'
    >;
    styling: Attribute.Relation<
      'common.counselling-packages-cards',
      'oneToOne',
      'api::styling.styling'
    >;
  };
}

export interface CommonCounsellingPackages extends Schema.Component {
  collectionName: 'components_common_counselling_packages';
  info: {
    displayName: 'CounsellingPackages';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    CounsellingPackagesCards: Attribute.Component<
      'common.counselling-packages-cards',
      true
    >;
  };
}

export interface CommonCourseDuration extends Schema.Component {
  collectionName: 'components_common_course_durations';
  info: {
    displayName: 'courseDuration';
  };
  attributes: {};
}

export interface CommonCourse extends Schema.Component {
  collectionName: 'components_common_courses';
  info: {
    displayName: 'course';
  };
  attributes: {};
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
    description: '';
  };
  attributes: {
    field_label: Attribute.String;
    filed_type: Attribute.Enumeration<
      [
        'name',
        'email',
        'phone',
        'otp',
        'stream',
        'course_level',
        'course',
        'short_text',
        'filled_exams',
        'preffered_colleges',
        'gender',
        'isWhatsAppSame',
        'board',
        'passing_year',
        'score'
      ]
    >;
  };
}

export interface CommonFilterBy extends Schema.Component {
  collectionName: 'components_common_filter_bies';
  info: {
    displayName: 'filterBy';
    description: '';
  };
  attributes: {
    streams: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::stream.stream'
    >;
    courses: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::course.course'
    >;
    course_durations: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::course-duration.course-duration'
    >;
    states: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::state.state'
    >;
    cities: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::city.city'
    >;
    colleges_types: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::colleges-type.colleges-type'
    >;
    college_categories: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::college-category.college-category'
    >;
    affiliations: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::affiliation.affiliation'
    >;
    genders: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::gender.gender'
    >;
    rankings: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::ranking.ranking'
    >;
    exams: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::exam.exam'
    >;
    avg_fee_per_years: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::avg-fee-per-year.avg-fee-per-year'
    >;
    program_types: Attribute.Relation<
      'common.filter-by',
      'oneToMany',
      'api::program-type.program-type'
    >;
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

export interface CommonHomebanner extends Schema.Component {
  collectionName: 'components_common_homebanners';
  info: {
    displayName: 'homebanner';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'common.title'>;
    text1: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    button1: Attribute.Component<'common.button1'>;
    button2: Attribute.Component<'common.button2'>;
    img: Attribute.Media & Attribute.Required;
    text2: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    text3: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonIndividualReviews extends Schema.Component {
  collectionName: 'components_common_individual_reviews';
  info: {
    displayName: 'individualReviews';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    rating: Attribute.Decimal;
    basedOn: Attribute.BigInteger & Attribute.Required;
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

export interface CommonLocation extends Schema.Component {
  collectionName: 'components_common_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    state: Attribute.Relation<
      'common.location',
      'oneToOne',
      'api::state.state'
    >;
    city: Attribute.Relation<'common.location', 'oneToOne', 'api::city.city'>;
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

export interface CommonPartners extends Schema.Component {
  collectionName: 'components_common_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface CommonPhotoGallery extends Schema.Component {
  collectionName: 'components_common_photo_galleries';
  info: {
    displayName: 'photoGallery';
  };
  attributes: {
    title: Attribute.Component<'colleges.title'>;
    photos: Attribute.Media & Attribute.Required;
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

export interface CommonReviews extends Schema.Component {
  collectionName: 'components_common_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {
    title: Attribute.Component<'colleges.title'>;
    overallRating: Attribute.Integer & Attribute.Required;
    individualReviews: Attribute.Component<'common.individual-reviews', true>;
  };
}

export interface CommonScholarshipDetails extends Schema.Component {
  collectionName: 'components_common_scholarship_details';
  info: {
    displayName: 'scholarshipDetails';
    description: '';
  };
  attributes: {
    navItem: Attribute.String & Attribute.Required;
    title: Attribute.Relation<
      'common.scholarship-details',
      'oneToOne',
      'api::title.title'
    >;
    readMoreLink: Attribute.String;
  };
}

export interface CommonScholarshipPage extends Schema.Component {
  collectionName: 'components_common_scholarship_pages';
  info: {
    displayName: 'scholarshipPage';
  };
  attributes: {
    scholarshipDetails: Attribute.Component<'common.scholarship-details'>;
  };
}

export interface CommonSection2 extends Schema.Component {
  collectionName: 'components_common_section2s';
  info: {
    displayName: 'section2';
  };
  attributes: {
    card1: Attribute.Component<'common.card1'>;
    card2: Attribute.Component<'common.card2'>;
    card3: Attribute.Component<'common.card3'>;
  };
}

export interface CommonSection3 extends Schema.Component {
  collectionName: 'components_common_section3s';
  info: {
    displayName: 'section3';
    description: '';
  };
  attributes: {
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    text1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    button: Attribute.Component<'common.button'>;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
    description: '';
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

export interface CommonStream extends Schema.Component {
  collectionName: 'components_common_streams';
  info: {
    displayName: 'stream';
  };
  attributes: {};
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

export interface CommonTitle extends Schema.Component {
  collectionName: 'components_common_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    t1: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    t2: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    t3: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonTopColleges extends Schema.Component {
  collectionName: 'components_common_top_colleges';
  info: {
    displayName: 'topColleges';
  };
  attributes: {
    title: Attribute.Component<'colleges.title'>;
    colleges: Attribute.Component<'common.colleges'>;
  };
}

export interface CommonTopRecruiters extends Schema.Component {
  collectionName: 'components_common_top_recruiters';
  info: {
    displayName: 'topRecruiters';
  };
  attributes: {
    title: Attribute.Component<'colleges.title'>;
    companyLogos: Attribute.Media & Attribute.Required;
  };
}

export interface CommonVideoGallery extends Schema.Component {
  collectionName: 'components_common_video_galleries';
  info: {
    displayName: 'videoGallery';
  };
  attributes: {
    title: Attribute.Component<'colleges.title'>;
    videos: Attribute.Component<'common.videos', true>;
  };
}

export interface CommonVideos extends Schema.Component {
  collectionName: 'components_common_videos';
  info: {
    displayName: 'videos';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    videoId: Attribute.String & Attribute.Required;
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
      'colleges.title': CollegesTitle;
      'common.application-date': CommonApplicationDate;
      'common.author': CommonAuthor;
      'common.banner-component': CommonBannerComponent;
      'common.banner-section': CommonBannerSection;
      'common.banner1': CommonBanner1;
      'common.banner2': CommonBanner2;
      'common.blogs-and-others': CommonBlogsAndOthers;
      'common.brochure-section': CommonBrochureSection;
      'common.button': CommonButton;
      'common.button1': CommonButton1;
      'common.button2': CommonButton2;
      'common.buttons2': CommonButtons2;
      'common.card1': CommonCard1;
      'common.card2': CommonCard2;
      'common.card3': CommonCard3;
      'common.colleges': CommonColleges;
      'common.counselling-packages-cards': CommonCounsellingPackagesCards;
      'common.counselling-packages': CommonCounsellingPackages;
      'common.course-duration': CommonCourseDuration;
      'common.course': CommonCourse;
      'common.dislikes': CommonDislikes;
      'common.faq': CommonFaq;
      'common.field': CommonField;
      'common.filter-by': CommonFilterBy;
      'common.form-stape': CommonFormStape;
      'common.gallery': CommonGallery;
      'common.google-ads': CommonGoogleAds;
      'common.homebanner': CommonHomebanner;
      'common.individual-reviews': CommonIndividualReviews;
      'common.likes': CommonLikes;
      'common.location': CommonLocation;
      'common.nav-item': CommonNavItem;
      'common.navbar': CommonNavbar;
      'common.new-overview': CommonNewOverview;
      'common.partners': CommonPartners;
      'common.photo-gallery': CommonPhotoGallery;
      'common.recommended-college': CommonRecommendedCollege;
      'common.recommended-courses': CommonRecommendedCourses;
      'common.recommended-exams': CommonRecommendedExams;
      'common.result-date': CommonResultDate;
      'common.review-component': CommonReviewComponent;
      'common.reviews': CommonReviews;
      'common.scholarship-details': CommonScholarshipDetails;
      'common.scholarship-page': CommonScholarshipPage;
      'common.section2': CommonSection2;
      'common.section3': CommonSection3;
      'common.seo': CommonSeo;
      'common.step-description': CommonStepDescription;
      'common.stream': CommonStream;
      'common.tab-data': CommonTabData;
      'common.title': CommonTitle;
      'common.top-colleges': CommonTopColleges;
      'common.top-recruiters': CommonTopRecruiters;
      'common.video-gallery': CommonVideoGallery;
      'common.videos': CommonVideos;
      'course.course': CourseCourse;
      'course.courses': CourseCourses;
      'course.specialisation': CourseSpecialisation;
      'faq.faq-elements': FaqFaqElements;
      'table.column': TableColumn;
      'table.row': TableRow;
      'table.table': TableTable;
    }
  }
}
