# create-next-app-template

빠른 속도와 높은 성능으로 Next.js App을 만들 수 있도록 셋팅된 템플릿입니다<br/>
현재 템플릿은 **Page Route** 구조로 제공하고 있어요<br/>

**미리보기:**
[여기에서 확인 가능해요☝🏻](https://next-typescript-tamplate.vercel.app)

## 시작하기

    npx create-next-app-template my-app
    cd my-app
    npm run dev

---

## 사용된 주요 라이브러리

- langauage : **Typescript**
- State : **Recoil**
- Asynchronous State : **TanStack Query v5**
- Api : **Axios**
- Style(Css) : **Emotion/react**
- Authentication : **NextAuth**
- Bundler Doctor : **bundle-analyzer**
- SVG : **@svgr/webpack**
- Layout : **dble-layout**

---

## 디자인 시스템 (위젯)

🗂️ **경로 : src > @widgets**

개발에 도움이 되는 위젯 템플릿이에요<br/>
당신의 UI 경험과 작업 능률을 책임질게요<br/>
`🔥 디자인 UI 위젯은 앞으로 꾸준히 업데이트 및 추가될 예정이에요`

---

## Themes (테마)

🗂️ **Root : src > lib > themes**

🔥 빠르게 ui를 완성하는 데에 도움을 제공하는 각 style 요소에요

- globalStyles : 기본적으로 셋팅해야하는 스타일을 글로벌로 관리하고 있어요
- colors : 감각적인 디자인 컬러 모음
- fontSize : 각 폰트 사이즈를 rem 형태로로 제공
- media : 각 기기의 화면비를 CSS에서 즉시 사용할 수 있는 형태의 mediaQuery
- styleSheet : 빠른 class와 emotion css를 적용할 수 있는 styleSheet

---

## Utils (유틸 기능)

🗂️ **Root : src > lib > utils**

🔥 프론트 개발에 도움을 제공하는 다양한 유틸 기능이에요

- enum : 미리 셋팅 해둔 key, value를 enum 형태로 관리하기 위한 모음

- regEx : ex) regEx.email.test(email) << 자주 사용되는 정규식을 즉시 사용 가능한 형태의 모음

- scrollToRef : 스크롤 위치를 포커스할 수 있어요

---

## Custom Hooks (커스텀 훅)

### [🔎 커스텀 훅 미리보기 ☝🏻](https://github.com/deep-hwan/create-next-app-template/tree/main/document/ko/hooks/README.md)

🗂️ **경로 : src > lib > hooks**

🔥 개발에 도움을 제공하는 커스텀 훅 모음이에요<br/>
`커스텀 훅은 꾸준히 업데이트 될 예정이에요!`

---

## SEO 최적화 및 사이트맵 생성 방법

SEO를 최적화 및 셋팅하는 방법과, 동적 및 정적 사이트맵을 생성하고 셋팅하는 방법을 알려줄게요<br/>
`🔥 웹사이트를 검색엔진에 노출하기 위한 중요한 부분이니 반드시 처리할 것을 권장해요!`

---

## 🙏🏻 배포 전 주의사항

배포 전 반드시 아래에 내용을 확인 및 알맞게 수정 후, 빌드 하세요

1. **src > libs > site > site.ts** 에서 웹서비스 정보를 입력 하세요

2. **src > libs > site > menus.ts** 에서 웹사이트의 메뉴 정보를 입력 하세요

3. **next-sitemap.config.js** 에서 웹서비스 내용에 맞게 수정 및 확인하세요

4. **public > manifest.json** 에서 PWA 정보인 앱 내용을 수정하세요

5. **(선택) page > api > rss.ts** 에서 rss를 생성할 수 있어요 >> 내용을 알맞게 수정하세요

6. **npm run build** 명령어를 처리 하세요

7. sitemap 정보가 public에 생생 및 배포됩니다
