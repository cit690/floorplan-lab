
import Room from './Room'

const Floorplan = (props) => {
  return (
    <>
      {props.floorplans.map(floorplan => <Room key={floorplan.room} floorplan={floorplan} />)}
    </>
  )
}

export default Floorplan