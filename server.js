// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const app = express();
// const port = 3000;
// app.use(express.json());
// const uri = 'mongodb+srv://anhttph43396:1234565ATT@lab3-anhttph43396.9jz7xzv.mongodb.net/db';

// const aModel = require('./anh');
// const mongoose = require('mongoose');

// app.get('/',async (req,res)=> {
//   await mongoose.connect(uri);

//   let anhs = await aModel.find();
//   console.log(anhs);
//   res.send(anhs);
// })
// // Khai báo nơi lưu trữ tệp tải lên
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         var dir = './uploads';
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir, { recursive: true });
//         }
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         let fileName = file.originalname;
//         cb(null, fileName)
//     }
// })

// // Khởi tạo middleware Multer
// const upload = multer({ storage: storage });

// // Thiết lập route cho trang gửi biểu mẫu HTML
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/upload.html");
// });

// // Route để xử lý việc tải tệp lên
// app.post('/uploadfile', upload.single('myfile'),async (req, res, next) => {
//     try {
//         const newAnhData = req.body;
  
//         const newAnh= await aModel.create(newAnhData);
  
//         const Anhs = await aModel.find();
  
//         res.send(Anhs);
//     } catch (error) {
//         console.error('Lỗi khi thêm sản phẩm:', error);
//         res.status(500).send('Lỗi máy chủ nội bộ');
//     }
// });

// // Middleware xử lý lỗi
// app.use((err, req, res, next) => {
//     res.status(err.httpStatusCode || 500).json({ error: err.message });
// });

// // Khởi động máy chủ
// app.listen(port, () => {
//     console.log("Server đang chạy trên cổng:", port);
// });
