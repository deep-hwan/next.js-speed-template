# <div align="center">

<h1 align="center">Next.js + Typescript Template</h1>Library

<p align="center">
개발하기 편하도록 미리 셋팅된 Next.js + Typescript 개발 템플릿입니다.
</p>
</div>

## Install

    npm install typescript @types/react @types/react-dom @emotion/styled @emotion/react

---

## Setting Library

현재 패키지에 설치 및 적용된 **NPM 패키지 라이브러리 / 버전 정보** 입니다.

- Next : 13.4.9
- TypeScript : 5.1.6
- Next-PWA : 5.6.0
- Axios : 1.4.0
- React-query : 3.39.3
- Recoil: 0.7.7
- Next-Auth : 4.22.1
- Next-Seo : 6.1.0
- Emotion : 11.11.2
- React-cookie : 4.1.1
- React-raise-editor: 0.1.4
- next-sitemap: 4.1.8

---

## Design Systems

### Theme (테마)

##### src > lib > theme

상황에 따른 컬러 및 사이즈를 사용할 수 있는 디자인 시스템입니다.

---

### Weidgets (위젯)

##### src > lib > widgets

즉시 사용할 수 있는 UI 위젯입니다.

- Appbar : 헤더의 앱바
- AppDrawer : 메뉴 드로어

- ScrollTopTab : 스크롤 > 클리 시 화면 최상위로 이동하는 탭

- SkeletonUI : 로딩 스켈레톤 UI
- LoaddingSpinner : 로딩 스피너
- LoadingLayer : 로딩 중 레이어

- Layout : 팝업 및 모달 시 노출되는 백그라운드 레이아웃
- Section : 섹션 레이아웃
- Container / Wrap / Box : 레이아웃 위젯
- BoxShadow : 그림자 형태의 박스 레이아웃 위젝
- Form : form 위젯
- Items, Item : ul / li 레이아웃

- Spacing : 공간 및 여백을 설정하는 박스 레이아웃

- Input : label + input / label + Textarea 커스텀 위젯
- SearchBar : 검색 인풋 위젯
- Select : select / option 인풋 위젯
- CheckBox : 체크박스 인풋 위젯

- Button : 버튼 위젯
- Tab : 아이콘 탭을 커스텀할 수 있는 버튼

- Txt : h1~6 , p 테크
- TxtSpan : span 테크

- Accordion : 아코디언 드롭다운 UI 위젯

- Dialog : Dialog 타입의 모달 팝업

---

## Site-map

1. src > pages > api > sitemap.ts 에서 staticPages 라우트 추가 / dynamicRoutes 동적 라우트의 서버 api URL 추가

2. next.config.js 에서 siteUrl > 도메인 주소로 변경

3. next-sitemap.config.js에서 siteUrl : 도메인 주소로 변경 / additionalSitemaps : 도메인 주소/sitemap.xml로 변경

4. npm run build

---

## 배포 전 주의사항

배포 전 반드시 아래에 내용을 배포하는 서비스에 맞게 수정한 후 빌드하세요!

1. pages > api > sitemap.ts 에서 사이트 맵을 수정하세요.

2. public > manifest.json 에서 PWA 내용 수정

3. next.config.js 에서 사이트명 수정

4. npm run build
