module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '92934aacd5aefc769b3c48c31ba33464'),
  },
});
