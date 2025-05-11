# 📝 React Blog Project

A minimal blog application built with **React 19 + Vite**, featuring client-side routing, dynamic post management, form validation, UI modularity, and search functionality.

This project was developed as part of a hands-on learning exercise to **solidify core React concepts** and best practices in frontend development.

---

## 🚀 Features

- 🛣️ **Routing with React Router**

  - Dynamic routes (`/posts/:id`)
  - Nested routes + 404 handling

- ✏️ **Create / Edit / Delete Posts**

  - Controlled forms using `useState` and `useRef`
  - Inline validation and error feedback
  - Context-based post management (`PostContext`)

- 🎯 **Search & Highlight**

  - Real-time title search with debounce
  - Keyword highlighting using RegExp + split

- 🧠 **Reusable Components**

  - Custom `<Button />` and `<Input />` components with style variants
  - CSS Modules for scoped and maintainable styling

- ⚙️ **Project Setup & Tooling**
  - ESLint + Prettier configured with Flat Config
  - Responsive layout and clean visual hierarchy
  - React performance optimization with `useMemo`

---

## 📁 Project Structure

```bash
src/
├── components/        # Reusable UI components (Button, Input)
├── context/           # PostContext and usePosts hook
├── pages/             # Route pages (Home, PostDetail, NewPost, EditPost)
├── routes/            # Route config
├── App.jsx            # App shell layout
├── main.jsx           # App entry point
```

---

## 🛠️ Tech Stack

- React 19 + Vite
- React Router DOM v6+
- ESLint (Flat config)
- CSS Modules
- PropTypes
- Optional chaining, dynamic imports
- Native browser APIs (e.g. RegExp, split, debounce via `useEffect`)

---

## 🧪 Future Improvements

- Add unit tests with React Testing Library + Vitest
- Use `localStorage` or Supabase to persist posts
- Migrate to `useReducer` for form state logic
- Extract `<HighlightText />` as reusable component
- Transition to TypeScript for type safety

---

## 🧑‍💻 Getting Started

```bash
npm install
npm run dev
```

---

## 📄 License

MIT – for learning and educational purposes
