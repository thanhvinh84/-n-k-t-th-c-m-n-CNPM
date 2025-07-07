WebCoolmate - Timeline Phát Triển Từng Ngày (7/7 - 21/7)

Dự án bao gồm 3 phần: Client (Người dùng), Admin (Quản trị) và BackEnd_server (API). Mục tiêu commit mỗi ngày theo tiến độ logic dự án.

📅 7/7 - Khởi tạo project

Tạo repository Git

Thêm file .gitignore bỏ qua node_modules, .env, v.v.

Tạo file README.md mô tả toàn project

Commit message:
init project structure, add README and .gitignore

📅 8/7 - Setup Backend Server

Tạo file package.json, cài đặt express, mongoose, dotenv, cors

Tạo index.js khởi tạo server với Express

Tạo file config/db.js kết nối MongoDB

Commit message:
setup backend server and MongoDB config

📅 9/7 - Thêm Models (Backend)

Tạo các file model: User.js, Product.js, Order.js

Mỗi model sử dụng mongoose schema

Commit message:
add backend data models for user, product, order

📅 10/7 - Thêm Routes (Backend)

Tạo routes API: userRoutes.js, productRoutes.js, orderRoutes.js

Sử dụng Express Router

Commit message:
add express routes for user, product, order

📅 11/7 - Thêm Controllers (Backend)

Tạo controller: userController.js, productController.js, orderController.js

Viết hàm logic cho GET, POST, PUT, DELETE

Commit message:
add backend controllers for user, product, order logic

📅 12/7 - Xử lý Upload Ảnh (Backend)

Cài đặt multer

Tạo folder uploads/ và route upload

Commit message:
add image upload feature to backend

📅 13/7 - Setup Client

Cài đặt React App cho client

Tạo App.js, index.js

Tạo folder components/

Commit message:
setup React client with basic structure

📅 14/7 - Component giao diện chung (Client)

Header, Footer, Navbar component

Commit message:
add common layout components: header, footer, navbar

📅 15/7 - Trang danh sách sản phẩm (Client)

Component hiển thị sản phẩm

Gọt dữ liệu từ API backend

Commit message:
add product listing page with backend integration

📅 16/7 - Trang chi tiết sản phẩm (Client)

Hiển thị chi tiết sản phẩm khi click vào

Commit message:
add product detail page

📅 17/7 - Giỏ hàng và thanh toán (Client)

Cart context, logic thêm/xóa SP

Trang Checkout

Commit message:
add cart and checkout functionality

📅 18/7 - Setup Admin Dashboard

Cài đặt React App cho admin

Tạo layout chung, App.js, index.js

Commit message:
setup admin dashboard with basic layout

📅 19/7 - Quản lý sản phẩm (Admin)

Component CRUD cho sản phẩm

Commit message:
add product management feature to admin dashboard

📅 20/7 - Quản lý đơn hàng (Admin)

Component danh sách đơn hàng, chi tiết, cập nhật trạng thái

Commit message:
add order management to admin dashboard

📅 21/7 - Rà soát và tổng hợp

Kiểm tra lỗi, hoàn thiện UI/UX

Viết README chi tiết hơn

Commit message:
final review and polish project