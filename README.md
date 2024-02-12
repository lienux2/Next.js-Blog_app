# Description
Project made with Next.js with MongoDB for data storing.

## First Things first

First, install dependancies:

```bash
npm i
```

Second, run the development server:

```bash
npm run dev
```

Third: create file named .env.local like so in picture below and inside should be:
MONGODB_URI = (link to your mongoDB)

Open [http://localhost:3000] with your browser to see the result.

## Client side pages (accessible through page naviagtions):

Home: [http://localhost:3000]

Tag pages:
[http://localhost:3000/entertainment]
[http://localhost:3000/exotic]
[http://localhost:3000/health]
[http://localhost:3000/educational]

About page: [http://localhost:3000/about]

## Admin side pages (few accesible only with links, others via navigation):

Login page: [http://localhost:3000/login] (credentials currently not working)

Main page(with navigation): [http://localhost:3000/main]

All Posts page: [http://localhost:3000/all-posts] - see all posts here with option to delete (WIP) and edit (WIP) posts.

All Comments page: [http://localhost:3000/all-comments] - see all comments here with option to delete (WIP) comments.

Create Post page: [http://localhost:3000/create-post]

## WIP List

1. Edit function on Posts.
2. Delete function on Posts.
3. Delete function on Comments.
4. Add authentification.
5. Adding React-Draft-Wysiwyg for advanced post text creation.

## Project structure

- (client) - page routes to client side pages. See **## Client side pages**
- components - components used in pages.
- (admin) - page routes to admin side pages. See **## Admin side pages**
- api - includes routes to:
  1. blog
  2. comment
- lib - includes:
  1. Schema models for mongoose
  2. Mongo connection
  3. Blog get calls
  4. Comment get calls
- types - defining types MONGODB.
- next.config.js = added domains for image usage. Check NextJS documentation on how to add domains for <Image>.

## Extensions, libraries and frameworks used

- Next.js
- Mongo DB
- Mongoose
- date-fns
- Typescript
- CSS modules
- Prettier
- MongoDB for VS Code

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
