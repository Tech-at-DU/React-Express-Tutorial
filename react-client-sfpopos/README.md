# React + Vite + React Query

This project reprises the [React Findamentals Tutorial](https://github.com/Tech-at-DU/React-Fundamentals-tutorial) with the change that data is loaded from web server instead a local file. 

This project requires either Flask Server, or Express Server in the adjacent folders to be running. 

The servers run at `localhost:4000` while this client runs on `http://localhost:5173/`. This project defines a `proxy` address in `vite.config.js`. Looking at this file you should see: 

```JS
proxy: {
  '/api': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
},
```

This defines a proxy as `/api` with a target of `http://localhost:4000`, and a `rewrite` of `path.replace(/^\/api/, '')`. The effect of this is that requests made from this client project will be redirected to `localhost:4000` and those addresses will be rewritten to remove `/api`.

For example, look at `src/components/POPOSList/POPOSList.jsx`. Here you will find: 

```JS
const { isLoading, error, data } = useQuery({
  queryKey: ['/api/sfpopos'],
  queryFn: () => {
  return fetch('/api/sfpopos').then(res => res.json())
}
```

This requests `/api/sfpopos` which is rewriten to `/sfpopos` and redirected to `http://localhost:4000`. The final url would be: `http://localhost:4000/sfpopos`, which is what we need to connect to either the Flask, or Express example servers! 

## React Query 

React Query simplifies your work when making network requests. You can use it with any function that returns a Promise. 

```JS
const { isLoading, error, data } = useQuery({
  queryKey: ['/api/sfpopos'],
  queryFn: () => {
  return fetch('/api/sfpopos').then(res => res.json())
}
```

It takes an object with two keys: `queryKey` and `queryFn`. The first is an array used to define a cache key, and the second is a query function, that must return a Promise. 

## Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
