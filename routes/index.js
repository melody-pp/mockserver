const Router = require('koa-router')
const router = new Router()

const ctrl = require('../controllers')

router.get('/api/getImgUrls', ctrl.getImgUrls)
router.get('/api/getKeywords', ctrl.getKeywords)
router.get('/api/getContact', ctrl.getContact)
router.get('/api/getCases', ctrl.getCases)

module.exports = router