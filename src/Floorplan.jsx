
import Bedroom from './Bedroom'
import Bath from './Bath'
import LivingRoom from './LivingRoom'
import Kitchen from './Kitchen'

// import Appliance from './Appliance'

const Floorplan = (props) => {
  return (
    <>
    < Kitchen  />
    < Bedroom bedNum={3} />
    < Bedroom bedNum={2} />
    < Bedroom bedNum={1} />
    < LivingRoom />
    < Bath size={'Half Bath'} />
    < Bath size={'Full Bath'} />


    </>
  )
}

export default Floorplan