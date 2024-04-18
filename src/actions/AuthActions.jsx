export const loginUser = (userData) => {
    return async (dispatch) => {
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Unable to login. Please try again.');
        }
  
        const user = await response.json();
       
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      } catch (error) {
        console.error('Error logging in:', error);
       
        dispatch({ type: 'LOGIN_USER_FAILURE', payload: error.message });
      }
    };
  };
  
  export const registerUser = (userData) => {
    return async (dispatch) => {
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Unable to register. Please try again.');
        }
  
        const user = await response.json();
       
        dispatch({ type: 'REGISTER_USER_SUCCESS', payload: user });
      } catch (error) {
        console.error('Error registering user:', error);
       
        dispatch({ type: 'REGISTER_USER_FAILURE', payload: error.message });
      }
    };
  };
  
  export const logoutUser = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Unable to logout. Please try again.');
        }
  
       
        dispatch({ type: 'LOGOUT_USER_SUCCESS' });
      } catch (error) {
        console.error('Error logging out:', error);
        

        dispatch({ type: 'LOGOUT_USER_FAILURE', payload: error.message });
      }
    };
  };
  