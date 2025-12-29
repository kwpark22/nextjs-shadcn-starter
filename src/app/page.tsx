import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Next.js 15 Starter Kit
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          TypeScript, Tailwind CSS, shadcn/ui로 구성된 회사 작업용 스타터 킷입니다.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            시작하기
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
              TypeScript
            </h3>
            <p className="text-sm text-muted-foreground mb-4">타입 안정성</p>
            <p className="text-sm text-muted-foreground">
              any 타입 없이 완전한 타입 안정성을 제공합니다.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
              Tailwind CSS
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              유틸리티 우선 CSS
            </p>
            <p className="text-sm text-muted-foreground">
              빠른 개발과 일관된 디자인을 제공합니다.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
              shadcn/ui
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              재사용 가능한 컴포넌트
            </p>
            <p className="text-sm text-muted-foreground">
              아름답고 접근 가능한 UI 컴포넌트를 제공합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
