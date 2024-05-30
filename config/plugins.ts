module.exports = ({ env }) => ({
    graphql: {
      enabled: true,
      config: {
        endpoint: "/graphql",
        generateArtifacts: true,
        artifacts: {
          schema: true,
          typegen: true,
        },
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 9,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
    upload: {
      config: {
        provider: "strapi-provider-upload-aws-s3",
        providerOptions: {
          accessKeyId: env('DO_SPACE_ACCESS_KEY'),
          secretAccessKey: env('DO_SPACE_SECRET_KEY'),
          region: env('DO_SPACE_REGION'),
          params: {
            Bucket: env('DO_SPACE_BUCKET'),
            Endpoint: env('DO_SPACE_ENDPOINT'),
          },
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
  