
export const createTicket = (ticketData) => {
    return async (dispatch) => {
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ticketData),
        });
  
        if (!response.ok) {
          throw new Error('Unable to create ticket. Please try again.');
        }
  
        const ticket = await response.json();
        
        dispatch({ type: 'CREATE_TICKET_SUCCESS', payload: ticket });
      } catch (error) {
        console.error('Error creating ticket:', error);
       
        dispatch({ type: 'CREATE_TICKET_FAILURE', payload: error.message });
      }
    };
  };
  
  export const respondToTicket = (responseData) => {
    return async (dispatch) => {
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(responseData),
        });
  
        if (!response.ok) {
          throw new Error('Unable to respond to ticket. Please try again.');
        }
  
        const responseData = await response.json(); 
        dispatch({ type: 'RESPOND_TO_TICKET_SUCCESS', payload: responseData });
      } catch (error) {
        console.error('Error responding to ticket:', error);
       
        dispatch({ type: 'RESPOND_TO_TICKET_FAILURE', payload: error.message });
      }
    };
  };
  