# Introduction
This is a [Next.js](https://nextjs.org) project bootstrapped with [`webflow cloud init`](https://developers.webflow.com/webflow-cloud/intro).

Webflow is a very good platform to create a website. In the recent months, they started to include more and more coding features. I'm going to present my two favorites below with different use cases.

⚠️ **Webflow limitation: GitHub repo is mandatory for Webflow Cloud** ⚠️

## Use case: user account management, complex e-commerce,...
For my case, I'm going to present the user account management. It's not a native feature from webflow and we cannot blame them for it it usually have differents requirements for each companies. Usually this kind of subwebsite run in a different platofm and different subdomain in order to handle the end to end flow including localStorage, cookies,...

Thanks to Webflow they released in 2025 Webflow Cloud to solve this problem. The code is going to run on webflow infrastructure and just need to follow couple of restrictions.

## Getting Started
First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/login/en](http://localhost:3000/login/en) with your browser to see the result.

You can start editing the page by modifying `app/[locale]/page.tsx`. The page auto-updates as you edit the file.

How to link to the webflow project
```bash
npm install -g @webflow/webflow-cli
webflow cloud init
webflow auth login
webflow devlink sync
```

## Use Webflow component in next project

In the LoginForm there is a Card component that is coming from Webflow. This allow to use native component in your website for better consistency and style.

## APIs
- Articles: http://localhost:3000/api/articles: to query webflow CMS Articles collection
- Login: http://localhost:3000/api/login: to post credentials to a custom backend

## Deploy to Webflow
1. Go to Webflow Settings in Webflow Cloud
1. Sign In to GitHub
1. Install Webflow Cloud App on GitGub
1. Create a project: select repo and set name

You can deploy your app by running [`webflow cloud deploy`](https://developers.webflow.com/webflow-cloud/environment).