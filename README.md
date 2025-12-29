# Next.js 15 Starter Kit

회사 작업용 Next.js 15 스타터 킷입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui
- **State Management**: Zustand (필요시 추가)
- **Form Management**: React Hook Form + Zod (필요시 추가)
- **Code Quality**: ESLint + Prettier

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 3. 프로덕션 빌드

```bash
npm run build
npm run start
```

## 폴더 구조

```
src/
├── app/              # App Router (페이지)
├── components/       # React 컴포넌트
│   ├── layout/      # 레이아웃 컴포넌트
│   └── ui/          # shadcn/ui 컴포넌트
├── lib/             # 유틸리티 함수
├── hooks/           # 커스텀 훅
├── types/           # TypeScript 타입
└── store/           # Zustand 스토어
```

## 코딩 규칙

- **들여쓰기**: 2칸
- **네이밍**: camelCase, PascalCase (컴포넌트)
- **타입**: any 타입 사용 금지
- **컴포넌트**: 분리 및 재사용 원칙
- **반응형**: 모든 UI는 반응형으로 제작
- **주석**: 한국어로 작성

## 유용한 명령어

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 린트 검사
npm run lint
```

## shadcn/ui 컴포넌트 추가

프로젝트에 추가 shadcn/ui 컴포넌트가 필요한 경우:

```bash
npx shadcn@latest add [component-name]
```

예시:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## 추가 기능 구현

### Zustand 스토어 추가

```bash
npm install zustand
```

`src/store/` 디렉토리에 스토어 파일을 생성하여 사용합니다.

### React Hook Form + Zod 추가

```bash
npm install react-hook-form zod @hookform/resolvers
```

폼 검증이 필요한 페이지에서 사용합니다.

## 라이센스

MIT
