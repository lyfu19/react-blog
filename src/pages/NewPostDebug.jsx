import { useReducer, useRef } from 'react';
import { usePosts } from '../context/PostContext';

const initialState = {
  title: '',
  body: '',
  error: '',
  success: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.message, success: '' };
    case 'SET_SUCCESS':
      return { ...state, success: action.message, error: '' };
    case 'CLEAR_FORM':
      return { ...initialState, success: '✅ Post submitted successfully!' };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export default function NewPostDebug() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { posts, setPosts } = usePosts();
  const titleInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.title.trim() === '' || state.body.trim() === '') {
      dispatch({
        type: 'SET_ERROR',
        message: 'Title and content are required.',
      });
      return;
    }

    if (state.body.length < 20) {
      dispatch({
        type: 'SET_ERROR',
        message: 'Content must be at least 20 characters.',
      });
      return;
    }

    const newPost = {
      id: posts.length + 1,
      title: state.title,
      body: state.body,
    };
    setPosts([newPost, ...posts]);

    dispatch({ type: 'CLEAR_FORM' });
    titleInputRef.current?.focus();
  };

  return (
    <div>
      <h1>Debug: Create Post (No Redirect)</h1>
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.success && <p style={{ color: 'green' }}>{state.success}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            id="title"
            type="text"
            ref={titleInputRef}
            value={state.title}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FIELD',
                field: 'title',
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            rows={5}
            cols={20}
            value={state.body}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FIELD',
                field: 'body',
                value: e.target.value,
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
