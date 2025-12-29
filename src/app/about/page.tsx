import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 - Starter Kit",
  description: "Next.js 15 Starter Kit에 대한 소개",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">소개</h1>
        <p className="text-lg text-muted-foreground mb-8">
          이 프로젝트는 회사 작업을 빠르게 시작할 수 있도록 설계된 Next.js 15 스타터 킷입니다.
        </p>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
                기술 스택
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                최신 웹 기술 스택 사용
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Next.js 15 (App Router)</li>
                <li>TypeScript 5</li>
                <li>Tailwind CSS 3</li>
                <li>shadcn/ui</li>
                <li>Zustand (상태관리)</li>
                <li>React Hook Form + Zod (폼 관리)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
                주요 특징
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                생산성을 높이는 기능들
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>완전한 TypeScript 타입 안정성</li>
                <li>반응형 디자인 기본 제공</li>
                <li>재사용 가능한 컴포넌트 구조</li>
                <li>ESLint + Prettier 코드 품질 관리</li>
                <li>모듈화된 폴더 구조</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
