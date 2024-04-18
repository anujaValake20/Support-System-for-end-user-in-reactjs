import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TicketDetail = () => {
  const { id } = useParams();
  const ticket = useSelector(state => state.ticket.tickets.find(ticket => ticket.id === id));

  if (!ticket) {
    return (
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ticket Not Found</h2>
          <p>The ticket you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">title</h2>
        <p className="text-gray-600 mb-4">description</p>
        {ticket.attachment && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Attachment</h3>
            <a href={ticket.attachment} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download Attachment</a>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default TicketDetail;
