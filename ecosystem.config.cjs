module.exports = {
  apps: [
    {
      name: "valosync-global",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: "max", // Automatically scales across available CPU cores (or set to 2 for smaller VPS)
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
