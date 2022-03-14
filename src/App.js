import './App.css';
import Floorplan from './Floorplan.jsx'

function App() {
  const floorplans = [
    {
      room: 'Kitchen',
      appliances: ['Oven', 'Sink']
    },
    {
      room: 'Living Room',
    },
    {
      room: 'Bedroom',
      bedNum: ['1', '2', '3']
    },
    {
      room: 'Bath',
      size: ['full bath', 'half bath']
    }
  ]
  return (
    <div>
      < Floorplan floorplans = {floorplans} />
    </div>
);
}

export default App;
