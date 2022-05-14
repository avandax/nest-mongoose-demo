module.exports = {
  apps: [
    {
      name: "nest-mongoose-demo",
      script: "./dist/main.js",
      node_args:"-r tsconfig-paths/register",
      exec_mode: "cluster",
      instances: "2",
      merge_logs: true,
      max_memory_restart: "150M",
      instance_var: "INSTANCE_ID",
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      }
    }
  ]
};
