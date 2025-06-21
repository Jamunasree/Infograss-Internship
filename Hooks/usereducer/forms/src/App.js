import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: ''
};
function reducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'updateField',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${state.name}, Email: ${state.email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>User Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={state.name}
        onChange={handleChange}
      />
      <br /><br />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={state.email}
        onChange={handleChange}
      />
      <br /><br />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: 'reset' })} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </form>
  );
}

export default UserForm;
