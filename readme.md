# xyl 的全功能后台管理系统

## 学点什么

- 默认的 `npm run dev` 命令会启动一个热重载的开发服务器。它会读取开发环境的配置，文件对应是.env.dev，而生产环境的配置文件是.env.pro。
- 环境文件的变量名必须以 `VITE_` 开头，才能被Vite识别并注入到应用中。
- 可以通过`import.meta.env.VITE_APP_TITLE`获取到Vite配置的 `app title` 环境变量。
