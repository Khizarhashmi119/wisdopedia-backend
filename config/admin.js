module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9f6d01d64dfe25f513f0ea8b98d80ed3'),
  },
});
