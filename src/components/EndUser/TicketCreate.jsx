import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { createTicket } from "../../actions/TicketActions";

const TicketCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const APIUrl = "";

      const ticketData = { title, description };

      const response = await axios.post(APIUrl, ticketData);

      dispatch(createTicket(response.data));

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Ticket</h2>
        <input
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full mb-4 px-3 py-2 border rounded-md"
          rows="4"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketCreate;
