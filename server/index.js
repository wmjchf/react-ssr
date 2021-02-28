import Koa from "koa";
import fs from "fs";
import KoaStatic from "koa-static";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes, matchRoutes } from "react-router-config";
import Routes from "../src/routes/index.jsx";
import { getStore } from "../src/store";

const app = new Koa();
const rootPath = process.cwd();
// 静态文件路径
const staticPath1 = path.join(rootPath, "client-build");
// 模板html的路径
const templatePath = path.join(rootPath, "public/index.html");
// 读取模板html内容
const template = fs.readFileSync(templatePath).toString();
// 访问静态文件
app.use(KoaStatic(staticPath1));
app.use(async (ctx) => {
  // 创建一个store
  const store = getStore();
  // 匹配路由
  const matchedRoute = matchRoutes(Routes, ctx.path);
  // 根据路由去后台获取数据
  const executeList = [];
  matchedRoute.forEach((route) => {
    executeList.push(route.route.loadData(store));
  });
  // 当所有数据获取成功之后，生成html字符串返回给客户端
  await Promise.all(executeList);
  const router = (
    <StaticRouter location={ctx.path}>{renderRoutes(Routes)}</StaticRouter>
  );
  const provider = <Provider store={store}>{router}</Provider>;
  const ssrContent = renderToString(provider);
  // 把模板html的内容替换成组件内容
  const html = template.replace("<!-- ssr slot -->", ssrContent);
  const state = `
   <script>
     window.context={state: ${JSON.stringify(store.getState())}}
   </script>
  `;
  const htmlState = html.replace("<!-- window.context.state -->", state);
  // html.replace(" store", JSON.stringify(store.getState()));
  console.log(htmlState);
  // 返回给浏览器
  ctx.body = htmlState;
});

app.listen(3000);
