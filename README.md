## Getting Started

First, configure [`auth0`](https://auth0.com/docs/quickstart/webapp/nextjs/01-login) and [`prisma`](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres):

> `auth0` and `prisma` above are linked to their respective documentation on how to configure them.

### **prisma**
Create `.env` in the root directory then add the following variables:
```bash
DATABASE_URL=
SHADOW_DATABASE_URL=
```

### **auth0**
Create `.env.local` in the root directory then add the following variables:
```bash
AUTH0_SECRET=
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_POST_LOGOUT_REDIRECT=http://localhost:3000/logout
```

Once done, proceed installing the application's packages and initialise database schema using prisma.
### Install packages
```bash
yarn
```
### Initialise database schema using prisma
```bash
yarn prisma:migrate
```

### Run application
```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.