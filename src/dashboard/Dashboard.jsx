import './Dashboard.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
function Dashboard() {
  return (
    <div className='mainn'>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default Dashboard;
