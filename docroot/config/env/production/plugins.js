module.exports = ({ env }) => (
  {
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 587),
          secure: false,
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'strapi@iyc.com',
          defaultReplyTo: 'noreply@iyc.com',
        },
      },
    },
    'iyc': {
      enabled: true,
      resolve: './src/plugins/iyc'
    },
    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::announcement.announcement',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/announcements/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/announcements/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::blog-post.blog-post',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/blog/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/blog/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::blog-tag.blog-tag',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/blog/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/blog/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::boat-show.boat-show',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::broker.broker',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/broker/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/broker/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::builder.builder',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/builder/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/builder/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::destination.destination',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::faq.faq',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/luxury-yacht-charters/?#faq`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/luxury-yacht-charters/?#faq`,
              copy: false
            },
          },
          {
            uid: 'api::job-position.job-position',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/careers/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/careers/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::office.office',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/office/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/office/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::page.page',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::post.post',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::team-member.team-member',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/team/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/team/{slug}`,
              copy: false
            },
          },
          {
            uid: 'api::yacht-type.yacht-type',
            draft: {
              url: `${env('WEBSITE_STAGING_URL')}/{locale}/yacht-types/{slug}`,
              copy: false,
              alwaysVisible: true
            },
            published: {
              url: `${env('WEBSITE_PRODUCTION_URL')}/{locale}/yacht-types/{slug}`,
              copy: false
            },
          }
        ],
      },
    },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            baseUrl: env('AWS_BASE_URL'),
            endpoint:env('AWS_ENDPOINT'),
            forcePathStyle: env('AWS_FORCE_PATH_STYLE'),
            region: env('AWS_REGION'),
            params: {
              ACL: env('AWS_ACL', 'public-read'),
              signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
              Bucket: env('AWS_BUCKET_NAME'),
            },
            credentials: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
            }
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });
