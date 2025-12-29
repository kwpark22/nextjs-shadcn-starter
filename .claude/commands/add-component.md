---
argument-hint: 컴포넌트-이름
---

$1 컴포넌트를 src/components/ 폴더에 생성해줘.

요구사항:
- 파일명: $1.tsx (kebab-case로 변환)
- React 함수형 컴포넌트 사용
- TypeScript 타입 정의 포함
- Tailwind CSS 기본 스타일 적용
- 컴포넌트 이름은 PascalCase로 변환

기본 템플릿:
```tsx
interface ${컴포넌트이름}Props {
  // props 타입 정의
}

export function ${컴포넌트이름}({ }: ${컴포넌트이름}Props) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">${컴포넌트이름}</h2>
    </div>
  );
}
```

파일을 생성한 후 경로를 알려줘.
