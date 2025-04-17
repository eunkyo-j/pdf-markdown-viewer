# 📄 PDF Markdown Viewer

사용자가 업로드한 PDF 문서를 Markdown 형식으로 변환하고, 변환된 결과를 웹 화면에서 바로 확인할 수 있는 웹 애플리케이션입니다.

---

## 📌 프로젝트 개요

- 📝 PDF → 📄 Markdown 변환 자동화
- 🧑‍💻 **FastAPI** 백엔드와 **React** 프론트엔드로 구성된 **풀스택 웹 데모**
- 🖱 Drag & Drop 또는 파일 업로드로 쉽게 사용 가능
- 🔍 변환 결과를 실시간으로 웹 화면에 출력

---

## 🛠 기술 스택

| 구분 | 기술 |
|------|------|
| Frontend | React (Vite), Axios |
| Backend | Python, FastAPI, pdfplumber |
| 통신 방식 | REST API (`POST /upload`) |
| 기타 | CORS 설정, Markdown 렌더링 지원 |

---

## 🚀 실행 방법

### 1. 백엔드 실행

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

→ [http://localhost:8000/docs](http://localhost:8000/docs) 에서 API 테스트 가능

### 2. 프론트엔드 실행

```bash
cd frontend
npm install
npm run dev
```

→ [http://localhost:5173](http://localhost:5173) 접속

---

## 🖼️ 사용 예시

> PDF 파일을 선택하여 업로드 후, 변환된 Markdown 내용을 아래쪽에 표시합니다.

![Image](https://github.com/user-attachments/assets/40b0e1e6-6a98-471a-9ea7-ad054caa0b29)

![Image](https://github.com/user-attachments/assets/3006c66a-8d68-4c64-98f0-2447ff3d016c)

![Image](https://github.com/user-attachments/assets/ff8c01f8-2f81-4c6a-90fe-9369966c2a97)

---

## ✨ 주요 기능

- ✅ PDF 텍스트 파싱 (pdfplumber)
- ✅ Markdown 형식으로 가공
- ✅ 실시간 렌더링
- ✅ 에러 처리 및 UX 고려
- ✅ FastAPI + React 분리 개발 및 통신 구현

---

## 🧑‍💻 개발자

| 이름 | 역할 |
|------|------|
| 정은교 (eunkyo-j) | 기획, 설계, 프론트/백엔드 전반 개발 |

---

## ✅ 향후 확장 가능성

- PDF 이미지 OCR → 텍스트 추출
- 마크다운 `.md` 파일 다운로드 기능
- 변환 결과 요약 or 검색 기능 추가 (LLM 활용)
