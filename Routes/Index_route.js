const router = require('express').Router();

const Auth = require('./Auth_route');

router.use(
    '/api',
    Auth
)

module.exports = router;