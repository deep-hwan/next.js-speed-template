# create-next-app-template

This is a template set up to create Next.js Apps with fast speed and high performance<br/>
The current template is provided with a **Page Route** structure<br/>

**Preview:**
[You can check it here☝🏻](https://next-typescript-tamplate.vercel.app)

## Getting Started

    npx create-next-app-template my-app
    cd my-app
    npm run dev

---

## Main Libraries Used

- Language: **Typescript**
- State: **Recoil**
- Asynchronous State: **TanStack Query v5**
- Api: **Axios**
- Style(Css): **Emotion/react**
- Authentication: **NextAuth**
- Bundler Doctor: **bundle-analyzer**
- SVG: **@svgr/webpack**
- Layout: **dble-layout**

---

## Design System (Widgets)

🗂️ **Path: src > @widgets**

These are widget templates that help with development<br/>
They will take responsibility for your UI experience and work efficiency<br/>
`🔥 Design UI widgets will be continuously updated and added in the future`

---

## Themes

🗂️ **Root: src > lib > themes**

🔥 These are style elements that help you quickly complete your UI

- globalStyles: Manages styles that need to be set up by default globally
- colors: A collection of sensible design colors
- fontSize: Provides each font size in rem format
- media: MediaQuery in a format that can be used immediately in CSS for each device's aspect ratio
- styleSheet: StyleSheet for applying quick classes and emotion css

---

## Utils

🗂️ **Root: src > lib > utils**

🔥 These are various utility functions that help with front-end development

- enum: A collection for managing pre-set key, value in enum form

- regEx: e.g., regEx.email.test(email) << A collection of frequently used regular expressions in a form that can be used immediately

- scrollToRef: You can focus on the scroll position

---

## Custom Hooks

### [🔎 Preview Custom Hooks ☝🏻](https://github.com/deep-hwan/create-next-app-template/tree/main/document/en/hooks/README.md)

🗂️ **Path: src > lib > hooks**

🔥 These are a collection of custom hooks that help with development<br/>
`Custom hooks will be continuously updated!`

---

## SEO Optimization and Sitemap Generation Method

I'll tell you how to optimize and set up SEO, and how to create and set up dynamic and static sitemaps<br/>
`🔥 This is an important part of exposing your website to search engines, so it's highly recommended to handle it!`

---

## 🙏🏻 Precautions Before Deployment

Before deployment, please check and modify the following content appropriately, then build

1. Enter your web service information in **src > libs > site > site.ts**

2. Enter your website menu information in **src > libs > site > menus.ts**

3. Modify and check **next-sitemap.config.js** according to your web service content

4. Modify the app content, which is PWA information, in **public > manifest.json**

5. (Optional) You can create an RSS in **page > api > rss.ts** >> Modify the content appropriately

6. Process the **npm run build** command

7. Sitemap information will be generated and deployed to public
