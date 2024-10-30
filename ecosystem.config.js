module.exports = {
  apps: [
    {
      name: "book-front",
      script: "node_modules/next/dist/bin/next",
      watch: false,
      args: "start -p 3855",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: "milu0925",
      host: "172.16.11.80",
      port: 3855,
      ref: "origin/main",
      repo: "git@github.com:milu0925/bookcamp.git",
      path: "/home/milu0925/my-app-end",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js",
    },
  },
};
