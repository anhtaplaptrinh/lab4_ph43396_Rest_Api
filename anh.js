const mongoose = require('mongoose');

const AnhSchema = mongoose.Schema({
    anh: {
        type: String, // Đường dẫn đến tệp ảnh hoặc URL ảnh
        required: true,
    }
})
const anhModel = mongoose.model('anh',AnhSchema);
module.exports = anhModel;