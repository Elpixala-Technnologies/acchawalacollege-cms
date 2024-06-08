import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAffiliationAffiliation extends Schema.CollectionType {
  collectionName: 'affiliations';
  info: {
    singularName: 'affiliation';
    pluralName: 'affiliations';
    displayName: 'affiliation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    affiliation: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::affiliation.affiliation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::affiliation.affiliation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAvgFeePerYearAvgFeePerYear extends Schema.CollectionType {
  collectionName: 'avg_fee_per_years';
  info: {
    singularName: 'avg-fee-per-year';
    pluralName: 'avg-fee-per-years';
    displayName: 'avgFeePerYear';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    avgFeePerYear: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::avg-fee-per-year.avg-fee-per-year',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::avg-fee-per-year.avg-fee-per-year',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    blog_title: Attribute.String & Attribute.Required;
    blog_url: Attribute.String;
    featured_image: Attribute.Media & Attribute.Required;
    excerpt: Attribute.String & Attribute.Required;
    seo: Attribute.Component<'common.seo'>;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    courses: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::course.course'
    >;
    exams: Attribute.Relation<'api::blog.blog', 'manyToMany', 'api::exam.exam'>;
    scholarships: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    countries: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::country.country'
    >;
    tags: Attribute.Relation<'api::blog.blog', 'manyToMany', 'api::tag.tag'>;
    colleges: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::college.college'
    >;
    scholarship: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiButtonButton extends Schema.CollectionType {
  collectionName: 'buttons';
  info: {
    singularName: 'button';
    pluralName: 'buttons';
    displayName: 'button';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    colleges: Attribute.Relation<
      'api::button.button',
      'oneToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::button.button',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::button.button',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    singularName: 'city';
    pluralName: 'cities';
    displayName: 'city';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    city_name: Attribute.String & Attribute.Required;
    college: Attribute.Relation<
      'api::city.city',
      'oneToMany',
      'api::college.college'
    >;
    state: Attribute.Relation<
      'api::city.city',
      'manyToOne',
      'api::state.state'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCollegeCollege extends Schema.CollectionType {
  collectionName: 'colleges';
  info: {
    singularName: 'college';
    pluralName: 'colleges';
    displayName: 'college';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    college_name: Attribute.String & Attribute.Required;
    college_url: Attribute.UID;
    banner: Attribute.Media & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    is_top: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.faq',
        'common.new-overview',
        'common.banner-component',
        'common.recommended-college'
      ]
    >;
    pin_code: Attribute.Integer & Attribute.Required;
    approved_by: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::organisation.organisation'
    >;
    streams: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::stream.stream'
    >;
    city: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::city.city'
    >;
    country: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::country.country'
    >;
    ranking_by: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::ranking-body.ranking-body'
    >;
    courses: Attribute.Component<'course.course', true>;
    seo: Attribute.Component<'common.seo'>;
    news: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::new.new'
    >;
    dawonload_brochure: Attribute.Media & Attribute.Required;
    review_component: Attribute.Component<'common.review-component'> &
      Attribute.Required;
    discussion_forums: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    scholarships: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    user_forms: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::user-form.user-form'
    >;
    testimonials: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::testimonial.testimonial'
    >;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    gallery: Attribute.Media & Attribute.Required;
    states: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::state.state'
    >;
    specializations: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::specialization.specialization'
    >;
    popular_company: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::popular-company.popular-company'
    >;
    testimonial: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::testimonial.testimonial'
    >;
    blogs: Attribute.Relation<
      'api::college.college',
      'manyToMany',
      'api::blog.blog'
    >;
    degrees: Attribute.Relation<
      'api::college.college',
      'oneToMany',
      'api::degree.degree'
    >;
    lists: Attribute.Relation<
      'api::college.college',
      'oneToMany',
      'api::list.list'
    >;
    button: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::button.button'
    >;
    step: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::step.step'
    >;
    styling: Attribute.Relation<
      'api::college.college',
      'manyToOne',
      'api::styling.styling'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::college.college',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::college.college',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollegeCategoryCollegeCategory
  extends Schema.CollectionType {
  collectionName: 'college_categories';
  info: {
    singularName: 'college-category';
    pluralName: 'college-categories';
    displayName: 'collegeCategory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collegeCategory: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::college-category.college-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::college-category.college-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollegeDataCollegeData extends Schema.CollectionType {
  collectionName: 'college_datas';
  info: {
    singularName: 'college-data';
    pluralName: 'college-datas';
    displayName: 'collegeData';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bannerSection: Attribute.Component<'common.banner-section'>;
    filterBy: Attribute.Component<'common.filter-by'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::college-data.college-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::college-data.college-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollegeDetailsPageCollegeDetailsPage
  extends Schema.CollectionType {
  collectionName: 'college_details_pages';
  info: {
    singularName: 'college-details-page';
    pluralName: 'college-details-pages';
    displayName: 'collegeDetailsPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collegeLogo: Attribute.Media & Attribute.Required;
    bgImage: Attribute.Media & Attribute.Required;
    collegeName: Attribute.String & Attribute.Required;
    location: Attribute.Component<'common.location'>;
    colleges_type: Attribute.Relation<
      'api::college-details-page.college-details-page',
      'oneToOne',
      'api::colleges-type.colleges-type'
    >;
    estYear: Attribute.BigInteger & Attribute.Required;
    topRecruiters: Attribute.Component<'common.top-recruiters'>;
    brochureSection: Attribute.Component<'common.brochure-section'>;
    reviews: Attribute.Component<'common.reviews'>;
    photoGallery: Attribute.Component<'common.photo-gallery'>;
    videoGallery: Attribute.Component<'common.video-gallery'>;
    campusSize: Attribute.String & Attribute.Required;
    noOfFaculty: Attribute.BigInteger & Attribute.Required;
    noOfStudents: Attribute.BigInteger & Attribute.Required;
    avgFee: Attribute.BigInteger;
    genderAccepted: Attribute.String & Attribute.Required;
    studyMode: Attribute.Enumeration<['Regular', 'Part-time']>;
    scholarshipPage: Attribute.Component<'common.scholarship-page'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::college-details-page.college-details-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::college-details-page.college-details-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollegesTypeCollegesType extends Schema.CollectionType {
  collectionName: 'colleges_types';
  info: {
    singularName: 'colleges-type';
    pluralName: 'colleges-types';
    displayName: 'colleges_type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    college_type: Attribute.String & Attribute.Required;
    course: Attribute.Relation<
      'api::colleges-type.colleges-type',
      'oneToOne',
      'api::course.course'
    >;
    college_details_page: Attribute.Relation<
      'api::colleges-type.colleges-type',
      'oneToOne',
      'api::college-details-page.college-details-page'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::colleges-type.colleges-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::colleges-type.colleges-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'country';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    states: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::state.state'
    >;
    country_name: Attribute.String;
    colleges: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::college.college'
    >;
    blog: Attribute.Relation<
      'api::country.country',
      'manyToMany',
      'api::blog.blog'
    >;
    scholarships: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    singularName: 'course';
    pluralName: 'courses';
    displayName: 'course';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_url: Attribute.UID & Attribute.Required;
    course_name: Attribute.String & Attribute.Required;
    specializations: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::specialization.specialization'
    >;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.new-overview',
        'common.faq',
        'common.recommended-college',
        'common.banner-component',
        'common.recommended-courses',
        'common.recommended-exams'
      ]
    >;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    logo: Attribute.Media;
    banner: Attribute.Media;
    pin_code: Attribute.Integer;
    streams: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::stream.stream'
    >;
    state: Attribute.Relation<
      'api::course.course',
      'manyToOne',
      'api::state.state'
    >;
    seo: Attribute.Component<'common.seo'>;
    review_component: Attribute.Component<'common.review-component'> &
      Attribute.Required;
    college_type: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'api::colleges-type.colleges-type'
    >;
    news: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::new.new'
    >;
    approvedBy: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::organisation.organisation'
    >;
    user_forms: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::user-form.user-form'
    >;
    courseLevels: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::course-level.course-level'
    >;
    navbars: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::navbar.navbar'
    >;
    blog: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::blog.blog'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseDurationCourseDuration extends Schema.CollectionType {
  collectionName: 'course_durations';
  info: {
    singularName: 'course-duration';
    pluralName: 'course-durations';
    displayName: 'courseDuration';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    duration: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course-duration.course-duration',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course-duration.course-duration',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseLevelCourseLevel extends Schema.CollectionType {
  collectionName: 'course_levels';
  info: {
    singularName: 'course-level';
    pluralName: 'course-levels';
    displayName: 'courseLevel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_level_name: Attribute.String;
    courses: Attribute.Relation<
      'api::course-level.course-level',
      'manyToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course-level.course-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course-level.course-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDegreeDegree extends Schema.CollectionType {
  collectionName: 'degrees';
  info: {
    singularName: 'degree';
    pluralName: 'degrees';
    displayName: 'degree';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    college: Attribute.Relation<
      'api::degree.degree',
      'manyToOne',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::degree.degree',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::degree.degree',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDiscussionForumDiscussionForum
  extends Schema.CollectionType {
  collectionName: 'discussion_forums';
  info: {
    singularName: 'discussion-forum';
    pluralName: 'discussion-forums';
    displayName: 'discussion_forum';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    discussion_forum_title: Attribute.String & Attribute.Required;
    colleges: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::college.college'
    >;
    scholarships: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::discussion-forum.discussion-forum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExamExam extends Schema.CollectionType {
  collectionName: 'exams';
  info: {
    singularName: 'exam';
    pluralName: 'exams';
    displayName: 'exam';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    exam_name: Attribute.String;
    exam_title: Attribute.String;
    logo: Attribute.Media;
    banner: Attribute.Media;
    streams: Attribute.Relation<
      'api::exam.exam',
      'manyToMany',
      'api::stream.stream'
    >;
    navbars: Attribute.Relation<
      'api::exam.exam',
      'manyToMany',
      'api::navbar.navbar'
    >;
    applicationDate: Attribute.Component<'common.application-date'>;
    resultDate: Attribute.Component<'common.result-date'>;
    news: Attribute.Relation<'api::exam.exam', 'manyToMany', 'api::new.new'>;
    isFeaturedExam: Attribute.Boolean & Attribute.DefaultTo<false>;
    examMode: Attribute.Relation<
      'api::exam.exam',
      'manyToOne',
      'api::exam-mode.exam-mode'
    >;
    examLevel: Attribute.Relation<
      'api::exam.exam',
      'manyToMany',
      'api::exam-level.exam-level'
    >;
    url: Attribute.String & Attribute.Unique;
    user_forms: Attribute.Relation<
      'api::exam.exam',
      'oneToMany',
      'api::user-form.user-form'
    >;
    pageData: Attribute.DynamicZone<
      ['common.gallery', 'common.tab-data', 'common.faq']
    >;
    blog: Attribute.Relation<'api::exam.exam', 'manyToMany', 'api::blog.blog'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::exam.exam', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::exam.exam', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiExamLevelExamLevel extends Schema.CollectionType {
  collectionName: 'exam_levels';
  info: {
    singularName: 'exam-level';
    pluralName: 'exam-levels';
    displayName: 'examLevel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    exam_level_name: Attribute.String;
    exams: Attribute.Relation<
      'api::exam-level.exam-level',
      'manyToMany',
      'api::exam.exam'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exam-level.exam-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exam-level.exam-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExamModeExamMode extends Schema.CollectionType {
  collectionName: 'exam_modes';
  info: {
    singularName: 'exam-mode';
    pluralName: 'exam-modes';
    displayName: 'examMode';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    exam_mode: Attribute.String;
    exams: Attribute.Relation<
      'api::exam-mode.exam-mode',
      'oneToMany',
      'api::exam.exam'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exam-mode.exam-mode',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exam-mode.exam-mode',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGenderGender extends Schema.CollectionType {
  collectionName: 'genders';
  info: {
    singularName: 'gender';
    pluralName: 'genders';
    displayName: 'gender';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    gender: Attribute.Enumeration<['Co-ed', 'Boys', 'Girls']> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gender.gender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gender.gender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeroSectionHeroSection extends Schema.CollectionType {
  collectionName: 'hero_sections';
  info: {
    singularName: 'hero-section';
    pluralName: 'hero-sections';
    displayName: 'Hero_section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    homebanner: Attribute.Component<'common.homebanner'>;
    section2: Attribute.Component<'common.section2'>;
    partners: Attribute.Component<'common.partners'>;
    CounsellingPackages: Attribute.Component<'common.counselling-packages'>;
    banner1: Attribute.Component<'common.banner1'>;
    banner2: Attribute.Component<'common.banner2'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hero-section.hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hero-section.hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListList extends Schema.CollectionType {
  collectionName: 'lists';
  info: {
    singularName: 'list';
    pluralName: 'lists';
    displayName: 'list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    isInclude: Attribute.Boolean & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    college: Attribute.Relation<
      'api::list.list',
      'manyToOne',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::list.list', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::list.list', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNavbarNavbar extends Schema.CollectionType {
  collectionName: 'navbars';
  info: {
    singularName: 'navbar';
    pluralName: 'navbars';
    displayName: 'navbar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    colleges: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::college.college'
    >;
    courses: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::course.course'
    >;
    exams: Attribute.Relation<
      'api::navbar.navbar',
      'manyToMany',
      'api::exam.exam'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewNew extends Schema.CollectionType {
  collectionName: 'news';
  info: {
    singularName: 'new';
    pluralName: 'news';
    displayName: 'news';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    excerpt: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 125;
      }>;
    featuredImage: Attribute.Media;
    colleges: Attribute.Relation<
      'api::new.new',
      'manyToMany',
      'api::college.college'
    >;
    exams: Attribute.Relation<'api::new.new', 'manyToMany', 'api::exam.exam'>;
    newsCategories: Attribute.Relation<
      'api::new.new',
      'manyToMany',
      'api::news-category.news-category'
    >;
    courses: Attribute.Relation<
      'api::new.new',
      'manyToMany',
      'api::course.course'
    >;
    specializations: Attribute.Relation<
      'api::new.new',
      'manyToMany',
      'api::specialization.specialization'
    >;
    type: Attribute.Enumeration<['blog', 'news']> & Attribute.Required;
    seo: Attribute.Component<'common.seo'>;
    scholarships: Attribute.Relation<
      'api::new.new',
      'manyToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNewsCategoryNewsCategory extends Schema.CollectionType {
  collectionName: 'news_categories';
  info: {
    singularName: 'news-category';
    pluralName: 'news-categories';
    displayName: 'newsCategory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.String;
    news: Attribute.Relation<
      'api::news-category.news-category',
      'manyToMany',
      'api::new.new'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-category.news-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-category.news-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganisationOrganisation extends Schema.CollectionType {
  collectionName: 'organisations';
  info: {
    singularName: 'organisation';
    pluralName: 'organisations';
    displayName: 'organisation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    organisation_name: Attribute.String & Attribute.Required;
    organisation_logo: Attribute.Media & Attribute.Required;
    colleges: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'api::college.college'
    >;
    courses: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'api::course.course'
    >;
    scholarships: Attribute.Relation<
      'api::organisation.organisation',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPopularCompanyPopularCompany extends Schema.CollectionType {
  collectionName: 'popular_companies';
  info: {
    singularName: 'popular-company';
    pluralName: 'popular-companies';
    displayName: 'popular_company';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company_name: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    company_description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    colleges: Attribute.Relation<
      'api::popular-company.popular-company',
      'manyToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::popular-company.popular-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::popular-company.popular-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramTypeProgramType extends Schema.CollectionType {
  collectionName: 'program_types';
  info: {
    singularName: 'program-type';
    pluralName: 'program-types';
    displayName: 'programType';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    programType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-type.program-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::program-type.program-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRankingRanking extends Schema.CollectionType {
  collectionName: 'rankings';
  info: {
    singularName: 'ranking';
    pluralName: 'rankings';
    displayName: 'ranking';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ranking: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ranking.ranking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ranking.ranking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRankingBodyRankingBody extends Schema.CollectionType {
  collectionName: 'ranking_bodies';
  info: {
    singularName: 'ranking-body';
    pluralName: 'ranking-bodies';
    displayName: 'ranking_body';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ranking_body_name: Attribute.String & Attribute.Required;
    ranking_body_logo: Attribute.Media;
    content_writer: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    colleges: Attribute.Relation<
      'api::ranking-body.ranking-body',
      'manyToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ranking-body.ranking-body',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ranking-body.ranking-body',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScholarshipScholarship extends Schema.CollectionType {
  collectionName: 'scholarships';
  info: {
    singularName: 'scholarship';
    pluralName: 'scholarships';
    displayName: 'scholarship';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
    colleges: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::college.college'
    >;
    blog: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::blog.blog'
    >;
    page_data: Attribute.DynamicZone<
      [
        'common.gallery',
        'common.faq',
        'common.new-overview',
        'common.recommended-college',
        'common.recommended-courses',
        'common.recommended-exams',
        'common.banner-component'
      ]
    >;
    banner: Attribute.Media & Attribute.Required;
    conducted_by: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToOne',
      'api::organisation.organisation'
    >;
    scholarship_title: Attribute.String & Attribute.Required;
    eligibility: Attribute.String & Attribute.Required;
    type: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToOne',
      'api::scholarship-type.scholarship-type'
    >;
    number_of_scholarship: Attribute.BigInteger;
    amount: Attribute.Decimal;
    is_featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    scholarship_url: Attribute.String & Attribute.Required;
    discussion_forums: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::discussion-forum.discussion-forum'
    >;
    seo: Attribute.Component<'common.seo'>;
    user_forms: Attribute.Relation<
      'api::scholarship.scholarship',
      'oneToMany',
      'api::user-form.user-form'
    >;
    country: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToOne',
      'api::country.country'
    >;
    is_top: Attribute.Boolean & Attribute.DefaultTo<false>;
    gallery: Attribute.Media & Attribute.Required;
    blogs: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::blog.blog'
    >;
    review_component: Attribute.Component<'common.review-component', true>;
    news: Attribute.Relation<
      'api::scholarship.scholarship',
      'manyToMany',
      'api::new.new'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::scholarship.scholarship',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::scholarship.scholarship',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScholarshipTypeScholarshipType
  extends Schema.CollectionType {
  collectionName: 'scholarship_types';
  info: {
    singularName: 'scholarship-type';
    pluralName: 'scholarship-types';
    displayName: 'scholarship_type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    scholarship: Attribute.Relation<
      'api::scholarship-type.scholarship-type',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::scholarship-type.scholarship-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::scholarship-type.scholarship-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpecializationSpecialization extends Schema.CollectionType {
  collectionName: 'specializations';
  info: {
    singularName: 'specialization';
    pluralName: 'specializations';
    displayName: 'specialization';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    specialization_name: Attribute.UID & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    courses: Attribute.Relation<
      'api::specialization.specialization',
      'manyToMany',
      'api::course.course'
    >;
    news: Attribute.Relation<
      'api::specialization.specialization',
      'manyToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::specialization.specialization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::specialization.specialization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStateState extends Schema.CollectionType {
  collectionName: 'states';
  info: {
    singularName: 'state';
    pluralName: 'states';
    displayName: 'state';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    cities: Attribute.Relation<
      'api::state.state',
      'oneToMany',
      'api::city.city'
    >;
    colleges: Attribute.Relation<
      'api::state.state',
      'oneToMany',
      'api::college.college'
    >;
    courses: Attribute.Relation<
      'api::state.state',
      'oneToMany',
      'api::course.course'
    >;
    country: Attribute.Relation<
      'api::state.state',
      'manyToOne',
      'api::country.country'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::state.state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::state.state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStepStep extends Schema.CollectionType {
  collectionName: 'steps';
  info: {
    singularName: 'step';
    pluralName: 'steps';
    displayName: 'step';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    colleges: Attribute.Relation<
      'api::step.step',
      'oneToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::step.step', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::step.step', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiStreamStream extends Schema.CollectionType {
  collectionName: 'streams';
  info: {
    singularName: 'stream';
    pluralName: 'streams';
    displayName: 'stream';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    stream_name: Attribute.String & Attribute.Required;
    content_for_colleges: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    content_for_exams: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    content_for_courses: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    icon: Attribute.Media;
    college_names: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::college.college'
    >;
    courses: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::course.course'
    >;
    exams: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::exam.exam'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStylingStyling extends Schema.CollectionType {
  collectionName: 'stylings';
  info: {
    singularName: 'styling';
    pluralName: 'stylings';
    displayName: 'styling';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    border: Attribute.String & Attribute.Required;
    tagBg: Attribute.String & Attribute.Required;
    colleges: Attribute.Relation<
      'api::styling.styling',
      'oneToMany',
      'api::college.college'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::styling.styling',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::styling.styling',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    singularName: 'tag';
    pluralName: 'tags';
    displayName: 'tag';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tags_name: Attribute.String & Attribute.Required;
    blogs: Attribute.Relation<'api::tag.tag', 'manyToMany', 'api::blog.blog'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'testimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Media;
    logo: Attribute.Media;
    commentBy: Attribute.String;
    name: Attribute.String & Attribute.Required;
    colleges: Attribute.Relation<
      'api::testimonial.testimonial',
      'manyToMany',
      'api::college.college'
    >;
    year: Attribute.Date & Attribute.Required;
    testimonial: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTitleTitle extends Schema.CollectionType {
  collectionName: 'titles';
  info: {
    singularName: 'title';
    pluralName: 'titles';
    displayName: 'title';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    t1: Attribute.String & Attribute.Required;
    t2: Attribute.String & Attribute.Required;
    t3: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::title.title',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::title.title',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserDataUserData extends Schema.CollectionType {
  collectionName: 'user_datas';
  info: {
    singularName: 'user-data';
    pluralName: 'user-datas';
    displayName: 'user_data';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    number: Attribute.String;
    email: Attribute.Email;
    password: Attribute.Password;
    otp: Attribute.String;
    gender: Attribute.String;
    city: Attribute.String;
    course_level: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'api::course-level.course-level'
    >;
    users_meta_datum: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'api::users-meta-data.users-meta-data'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-data.user-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserFormUserForm extends Schema.CollectionType {
  collectionName: 'user_forms';
  info: {
    singularName: 'user-form';
    pluralName: 'user-forms';
    displayName: 'user_form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    form_title: Attribute.String;
    form_description: Attribute.Text;
    form_url: Attribute.String;
    colleges: Attribute.Relation<
      'api::user-form.user-form',
      'manyToMany',
      'api::college.college'
    >;
    exam: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::exam.exam'
    >;
    course: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::course.course'
    >;
    form_stape: Attribute.Component<'common.form-stape', true>;
    scholarship: Attribute.Relation<
      'api::user-form.user-form',
      'manyToOne',
      'api::scholarship.scholarship'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-form.user-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-form.user-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUsersMetaDataUsersMetaData extends Schema.CollectionType {
  collectionName: 'users_meta_datas';
  info: {
    singularName: 'users-meta-data';
    pluralName: 'users-meta-datas';
    displayName: 'users_meta_data';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    gender: Attribute.String;
    number: Attribute.String;
    email: Attribute.Email;
    user_datum: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToOne',
      'api::user-data.user-data'
    >;
    courseInterested: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::users-meta-data.users-meta-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::affiliation.affiliation': ApiAffiliationAffiliation;
      'api::avg-fee-per-year.avg-fee-per-year': ApiAvgFeePerYearAvgFeePerYear;
      'api::blog.blog': ApiBlogBlog;
      'api::button.button': ApiButtonButton;
      'api::city.city': ApiCityCity;
      'api::college.college': ApiCollegeCollege;
      'api::college-category.college-category': ApiCollegeCategoryCollegeCategory;
      'api::college-data.college-data': ApiCollegeDataCollegeData;
      'api::college-details-page.college-details-page': ApiCollegeDetailsPageCollegeDetailsPage;
      'api::colleges-type.colleges-type': ApiCollegesTypeCollegesType;
      'api::country.country': ApiCountryCountry;
      'api::course.course': ApiCourseCourse;
      'api::course-duration.course-duration': ApiCourseDurationCourseDuration;
      'api::course-level.course-level': ApiCourseLevelCourseLevel;
      'api::degree.degree': ApiDegreeDegree;
      'api::discussion-forum.discussion-forum': ApiDiscussionForumDiscussionForum;
      'api::exam.exam': ApiExamExam;
      'api::exam-level.exam-level': ApiExamLevelExamLevel;
      'api::exam-mode.exam-mode': ApiExamModeExamMode;
      'api::gender.gender': ApiGenderGender;
      'api::hero-section.hero-section': ApiHeroSectionHeroSection;
      'api::list.list': ApiListList;
      'api::navbar.navbar': ApiNavbarNavbar;
      'api::new.new': ApiNewNew;
      'api::news-category.news-category': ApiNewsCategoryNewsCategory;
      'api::organisation.organisation': ApiOrganisationOrganisation;
      'api::popular-company.popular-company': ApiPopularCompanyPopularCompany;
      'api::program-type.program-type': ApiProgramTypeProgramType;
      'api::ranking.ranking': ApiRankingRanking;
      'api::ranking-body.ranking-body': ApiRankingBodyRankingBody;
      'api::scholarship.scholarship': ApiScholarshipScholarship;
      'api::scholarship-type.scholarship-type': ApiScholarshipTypeScholarshipType;
      'api::specialization.specialization': ApiSpecializationSpecialization;
      'api::state.state': ApiStateState;
      'api::step.step': ApiStepStep;
      'api::stream.stream': ApiStreamStream;
      'api::styling.styling': ApiStylingStyling;
      'api::tag.tag': ApiTagTag;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::title.title': ApiTitleTitle;
      'api::user-data.user-data': ApiUserDataUserData;
      'api::user-form.user-form': ApiUserFormUserForm;
      'api::users-meta-data.users-meta-data': ApiUsersMetaDataUsersMetaData;
    }
  }
}
