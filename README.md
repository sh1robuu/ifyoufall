# 🫀 If You Fall — Game Mô Phỏng Sức Khỏe & Dự Đoán Tuổi Thọ

> **Dự án thi chung kết quốc gia** — Ứng dụng web giáo dục sức khỏe kết hợp game mô phỏng đời sống và AI dự đoán tuổi thọ.

## 📖 Giới thiệu

**If You Fall** là một nền tảng giáo dục sức khỏe tương tác, bao gồm:

- 🎮 **Game mô phỏng đời sống** — Người chơi trải nghiệm cuộc sống hàng ngày, đối mặt với các quyết định ảnh hưởng sức khỏe (ăn uống, vận động, làm việc, nghỉ ngơi)
- 🧬 **AI Dự đoán tuổi thọ** — Mô hình AI phân tích các yếu tố sức khỏe (BMI, hút thuốc, rượu bia, bệnh nền) để ước tính tuổi thọ thống kê
- 🩺 **Bác Sĩ AI** — Chatbot tư vấn sức khỏe tích hợp, trả lời câu hỏi về dinh dưỡng, lối sống và phòng bệnh
- 📰 **Tin tức y tế** — Cập nhật bài viết và thông tin về đột quỵ, tim mạch, và sức khỏe cộng đồng

## 🛠 Công nghệ

| Layer | Công nghệ |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Game Engine | Canvas 2D với pixel art |
| AI/ML | Ollama API (Gemini 3 Flash Preview) |
| Backend Proxy | Vercel Serverless Functions |
| Deployment | Vercel |
| Data Security | AES-256 mã hóa dữ liệu bệnh nhân |

## 🚀 Cài đặt & Chạy

### Chạy local
```bash
# Clone project
git clone <repo-url>
cd ifyoufallhuhu-main

# Cài dependencies
npm install

# Mở bằng Live Server (VS Code) hoặc bất kỳ HTTP server
# File chính: index.html
```

### Deploy lên Vercel
1. Push lên GitHub/GitLab
2. Import project trên [vercel.com](https://vercel.com)
3. Cấu hình Environment Variables:
   - `OLLAMA_API_KEY` — API key cho Ollama
   - `OLLAMA_BASE_URL` — `https://ollama.com/api/chat`
   - `OLLAMA_MODEL` — `gemini-3-flash-preview:cloud`

## 📁 Cấu trúc dự án

```
├── index.html              # Trang chính (local dev)
├── frontend/
│   ├── index.html          # Trang chính (Vercel production)
│   ├── css/style.css       # Stylesheet
│   ├── js/
│   │   ├── game.js         # Game engine chính
│   │   ├── data.js         # Dữ liệu game (buildings, items)
│   │   ├── story_data.js   # Cốt truyện
│   │   ├── medical_data.js # Dữ liệu y tế
│   │   └── storyIntro.js   # Pixel art intro
│   └── assets/             # Hình ảnh, âm thanh
├── api/
│   ├── predict.js          # Proxy AI predictor (Vercel)
│   └── chat.js             # Proxy chatbot (Vercel)
├── backend/
│   ├── server.js           # Backend server
│   ├── encrypt_db.js       # Mã hóa dữ liệu bệnh nhân
│   └── train_ai.js         # Training pipeline
└── vercel.json             # Vercel routing config
```

## ⚠️ Lưu ý

- Tính năng **Dự đoán tuổi thọ** và **Bác Sĩ AI** chỉ là mô phỏng thống kê, **không phải chẩn đoán y khoa**.
- AI trả lời dựa trên dữ liệu công khai từ WHO, World Bank, và IHME Global Burden of Disease.

## 📄 License

© 2026 — Dự án thi chung kết quốc gia
