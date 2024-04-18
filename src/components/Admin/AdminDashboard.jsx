import { useSelector } from 'react-redux';

const AdminDashboard = () => {
 
  const tickets = useSelector(state => state.ticket.tickets);

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Recent Tickets</h3>
          {tickets.map(ticket => (
            <div key={ticket.id} className="border-b py-4">
              <h4 className="text-lg font-semibold">Title</h4>
              <p className="text-gray-600">Description</p>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default AdminDashboard;
