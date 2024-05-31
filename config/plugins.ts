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
        provider: "strapi-provider-upload-do",
        providerOptions: {
          key: env('DO_SPACE_ACCESS_KEY'),
          secret: env('DO_SPACE_SECRET_KEY'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          space: env('DO_SPACE_BUCKET'),
          directory: env('DO_SPACE_DIRECTORY'),
          cdn: env('DO_SPACE_CDN'),
        }
      },
    },
  });
  