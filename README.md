# Portfolio ESG – Võ Thị Huỳnh Như (giao diện tối, xanh lá)

Bộ file tĩnh (HTML/CSS/JS thuần), mở `index.html` là chạy.

## Cấu trúc
```
esg-portfolio/
├── index.html
├── style.css
├── data.js          # chỉ cần sửa file này để thêm dự án
├── script.js
└── assets/
    ├── avatar.jpg   # ảnh chân dung (tỉ lệ 4:5)
    ├── hero.jpg     # (tùy chọn) ảnh nền hero, ảnh phong cảnh tối/xanh lá
    └── projects/    # ảnh bìa dự án
```
Chưa có ảnh thì trang tự dùng nền gradient và chữ "VN".

## Việc cần làm
1. Thêm `assets/avatar.jpg` (và `assets/hero.jpg` nếu muốn nền ảnh như mẫu).
2. Điền email, LinkedIn, Facebook ở khối cuối trang trong `index.html`.
3. Khi có dự án: thêm vào mảng `PROJECTS` trong `data.js`; khối "ESG Dashboard" trong mục Công cụ hiện là khung minh họa, hãy thay bằng ảnh chụp dự án thật.

## Giao diện sáng/tối
Nút ☀/☾ trên thanh menu; lựa chọn được lưu trong trình duyệt.

## Đưa lên GitHub Pages
Đẩy thư mục lên repo → Settings → Pages → chọn nhánh `main` / root.
