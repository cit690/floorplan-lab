import Kitchen from './Kitchen'
import Bedroom from './Bedroom'
import Bath from './Bath'
import LivingRoom from './LivingRoom'
import Appliance from './Appliance'

const Room = (props) => {
  return ( 
    <>
    <div>
      {props.floorplan.room}
    </div>
    {props.floorplan.appliances.map(appliance => <Appliance room={props.floorplan.room} appliance={appliance} />)}
    </>
   )
}
 
export default Room;