# CONDO

Open Source condominium management platform.

![condo](./docs/images/screen1.png)

## Getting started

You should have `docker-compose`, `git`, `node` and `python3` commands.

> **Node version must be 16.X**. You can check node version using `node -v` command in your terminal.

```bash
# 1) Clone the repo
git clone git@github.com:open-condo-software/open-condo-platform.git condo
cd condo

# 2) Install dependencies and link workspaces
yarn
python3 -m pip install django
python3 -m pip install psycopg2-binary

# 3) startup redis and postgres
docker-compose up -d postgresdb redis

# 4.1) prepare common packages
yarn workspace @open-condo/icons build
yarn workspace @open-condo/ui build
yarn workspace @open-condo/bridge build

# 4.2) prepare databases for all apps and generate `.env` and `apps/<name>/.env` files
node ./bin/prepare.js

# 5.0) prepare autogenerated files for condo
yarn workspace @app/condo build
yarn workspace @app/condo maketypes
# 5.1) launch project
yarn workspace @app/condo start
```

Now open your browser and navigate to http://localhost:4006. 
(You can verify the `SERVER_URL` in the `apps/condo/.env` file)

To log in, go to http://localhost:4006/admin/signin and enter the following credentials:
- **Email:** `DEFAULT_TEST_ADMIN_IDENTITY`
- **Password:** `DEFAULT_TEST_ADMIN_SECRET`

These credentials can be found in the `app/condo/.env` file, which is generated by the `./bin/prepare.js` script.

## Developing

Check [developing.md](docs/develop.md)

## Deploying

Check [deploy.md](docs/deploy.md)

## Contributing

Check [contributing.md](docs/contributing.md)
