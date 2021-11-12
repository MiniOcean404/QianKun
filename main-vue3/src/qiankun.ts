import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "vue app", // 这个子应用的名称
    entry: "//localhost:4000", // 默认加载里面的html，解析js动态执行
    container: "#vue", // 子应用将要挂载在主应用中的哪个ID
    activeRule: "/vue", // 子应用的路由
    props: {}, // 给子应用传参
  },
  {
    name: "react app",
    entry: "//localhost:5000",
    container: "#react",
    activeRule: "/react",
  },
];

export default function startQianKun(): void {
  registerMicroApps(apps);
  start({
    prefetch: true, //是否开启预加载
  });
}
