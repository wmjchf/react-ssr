import Koa from "koa";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./page/home/index.jsx";

const app = new Koa();
const rootPath = process.cwd();
// 模板html的路径
const templatePath = path.join(rootPath, "public/index.html");
// 读取模板html内容
const template = fs.readFileSync(templatePath).toString();

app.use(async (ctx) => {
  const ssrContent = renderToString(<Home />);
  // 把模板html的内容替换成组件内容
  const html = template.replace("<!-- ssr slot -->", ssrContent);
  // 返回给浏览器
  ctx.body = html;
});

app.listen(3000);
