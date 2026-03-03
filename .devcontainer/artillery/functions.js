// functions.js
module.exports = {
  randomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  guardarToken: function (req, res, context, ee, next) {
    const body = JSON.parse(res.body || "{}");
    context.vars.token = body.accessToken;
    return next();
  },
};
