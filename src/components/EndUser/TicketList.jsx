import { useSelector } from "react-redux";

const TicketList = () => {
  const tickets = useSelector((state) => state.ticket.tickets);

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Ticket List</h2>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border-b py-4">
            <h3 className="text-lg font-semibold">{ticket.title}</h3>
            <p className="text-gray-600">{ticket.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
