
import {  Route,  Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TicketCreate from './components/EndUser/TicketCreate';
import TicketList from './components/EndUser/TicketList';
import TicketDetail from './components/EndUser/TicketDetail';
import AssignedTickets from './components/TechSupport/AssignedTickets';
import TicketResponse from './components/TechSupport/TicketResponse';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  return (
    <Provider store={store}>
     
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ticket/create" element={<TicketCreate />} />
          <Route path="/ticket/list" element={<TicketList />}/>
          <Route path="/ticket/:id" element={<TicketDetail />} />
          <Route path="/tech-support/assigned-tickets" element={<AssignedTickets />} />
          <Route path="/tech-support/ticket-response/:id" element={<TicketResponse />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      
    </Provider>
  );
}

export default App;
