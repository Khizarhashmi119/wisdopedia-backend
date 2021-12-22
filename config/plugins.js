module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("wisdopedia"),
      api_key: env("237486297222219"),
      api_secret: env("ZuzJossySba27E9ZwF0fx7rv8Cs"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
