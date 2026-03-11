## 📸 Instantgram (Instagram Clone)
Next.js와 Sanity CMS를 활용한 풀스택 인스타그램 클론 코딩 프로젝트입니다.

### 🚀 Tech StackCategoryTech StackFrameworkNext.js
1. 15 (App Router)AuthenticationNext-auth (Google OAuth)
2. StylingTailwind CSS
3. Data FetchingSWR
4. Database/CMSSanity (Headless CMS)
5. DeploymentVercel✨

###  key FeaturesSocial
1. Login: Next-auth를 통한 간편한 구글 소셜 로그인 구현.
2. Feed Content: Sanity CMS를 연동하여 포스트 데이터 관리 및 렌더링.
3. Real-time Interaction: SWR의 Optimistic UI 업데이트를 활용한 좋아요 및 북마크 기능 (지연 없는 사용자 경험).
4. Responsive Design: Tailwind CSS 활용한 반응형 디자인 구축
5. UI.Search & Discovery: 사용자 및 포스트 검색 기능 제공.
6. Profile Management: 사용자별 포스트 목록 및 팔로우/팔로잉 정보 관리.

### 🏗 Architecture & Data Flow
이 프로젝트는 Headless CMS와 Next.js의 강력한 기능을 결합하여 성능과 확장성을 모두 챙겼습니다.

Sanity Content Lake: 데이터의 원천으로, 유연한 스키마 설계를 통해 포스트와 사용자 데이터를 저장합니다.
SWR Strategies: 서버 데이터의 캐싱 및 자동 갱신을 담당하며, 특히 '좋아요' 기능에서 즉각적인 피드백을 위해 Optimistic Update를 적용했습니다.
