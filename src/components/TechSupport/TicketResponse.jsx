import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { respondToTicket } from "../../actions/TicketActions";

const TicketResponse = () => {
  const [response, setResponse] = useState("");
  const dispatch = useDispatch();

  const handleResponse = async () => {
    try {
      const APIUrl = "";

      const responseData = { response };

      const response = await axios.post(APIUrl, responseData);

      dispatch(respondToTicket(response.data));

      setResponse("");
    } catch (error) {
      console.error("Error responding to ticket:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Respond to Ticket</h2>
        <textarea
          className="w-full mb-4 px-3 py-2 border rounded-md"
          rows="4"
          placeholder="Enter your response..."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        ></textarea>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleResponse}
        >
          Submit Response
        </button>
      </div>
    </div>
  );
};

export default TicketResponse;
