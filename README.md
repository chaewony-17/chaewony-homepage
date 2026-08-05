# Chaewon Yang — Personal Portfolio

Research-Hub 프로젝트의 `artifacts/homepage`를 완전히 독립된 프로젝트로 분리한 버전입니다.
React + Vite + Tailwind + shadcn/ui로 만들어진 정적 SPA이며, 백엔드/DB가 필요 없습니다.

## 1. 로컬에서 실행해보기

```bash
npm install
npm run dev
```

`http://localhost:5173` 에서 확인할 수 있습니다.

## 2. 새 GitHub 저장소 만들기

1. https://github.com/new 에서 새 저장소 생성
   - Owner: `chaewony-17` (본인 계정)
   - Repository name: `chaewony-portfolio`
   - Public으로 설정
   - README 등 아무것도 체크하지 말고 그냥 "Create repository"

2. 이 폴더를 저장소로 만들어 push:

```bash
cd chaewony-portfolio
git init
git add .
git commit -m "Initial commit: personal portfolio"
git branch -M main
git remote add origin https://github.com/chaewony-17/chaewony-portfolio.git
git push -u origin main
```

## 3. GitHub Pages 활성화

1. 새로 만든 저장소 → **Settings** → **Pages**
2. "Build and deployment" → Source를 **GitHub Actions**로 선택 (Deploy from a branch가 아님!)
3. 저장소에 이미 포함된 `.github/workflows/deploy.yml`이 자동으로 빌드/배포합니다.
4. `main` 브랜치에 push할 때마다 자동으로 다시 배포됩니다.
5. 몇 분 후 다음 주소에서 접속 가능합니다:
   **https://chaewony-17.github.io/chaewony-portfolio/**

## 4. 저장소 이름을 바꾸고 싶다면

`.github/workflows/deploy.yml` 안의 `BASE_PATH: /새이름/` 값과,
`index.html`의 `og:image` 경로(`/새이름/opengraph.jpg`)를 저장소 이름과 동일하게 맞춰주세요.
GitHub Pages 프로젝트 사이트는 저장소 이름이 URL 경로가 되기 때문입니다.

## 5. 콘텐츠 수정하기

프로필, 연구 관심사, 논문, 프로젝트, 뉴스 등 모든 텍스트 콘텐츠는
`src/data/mock-data.ts` 한 파일에 모여 있습니다. 이 파일만 수정하면
사이트 대부분의 내용을 바꿀 수 있습니다.

이미지는 `public/images/`, 논문 PDF는 `public/papers/`에 있습니다.
새 이미지/PDF를 추가한 뒤 `mock-data.ts`에서 파일명을 맞춰 참조하면 됩니다.

## Research-Hub 원본과의 차이점

- Replit 전용 플러그인 3개(`@replit/vite-plugin-*`) 제거 — GitHub Actions에서 필요 없음
- 사용하지 않던 `@workspace/api-client-react` 의존성 제거 (실제로 API 서버를 호출하지 않는 순수 정적 사이트였음)
- pnpm 워크스페이스 `catalog:` 버전 표기를 실제 버전 번호로 변환 (독립 프로젝트라 워크스페이스가 없음)
- 서브패스 배포 시 이미지가 깨지던 버그 1건 수정 (`Publications.tsx`의 논문 썸네일)
- GitHub Pages SPA 라우팅을 위한 404.html 폴백 추가 (빌드 시 자동 생성)
