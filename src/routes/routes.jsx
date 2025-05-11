import App from '../App';
import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import PostDetail from '../pages/PostDetail';
import NotFound from '../pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import NewPostDebug from '../pages/NewPostDebug';
import EditPost from '../pages/EditPost';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'new', element: <NewPost /> },
      { path: 'new-debug', element: <NewPostDebug /> },
      { path: 'posts/:id', element: <PostDetail /> },
      { path: 'edit/:id', element: <EditPost /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
