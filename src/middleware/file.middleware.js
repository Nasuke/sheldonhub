
const multer = require('@koa/multer')
const UPLOAD_PATH = require('../config/path')



// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, cb) {
//             cb(null, './uploads')
//         },
//         filename(req, file, cb) {
//             cb(null, Date.now() + "_" + file.originalname)
//         }
//     })
// })
const upload = multer({
    dest: UPLOAD_PATH
})

const handleAvatar = upload.single('avatar')

module.exports = handleAvatar