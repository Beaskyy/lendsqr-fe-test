import Sidebar from "./Sidebar"
import UserDetails from "./UserDetails"

type Props = {}

const MainUserDetails = (props: Props) => {
  return (
    <div className="main">
      <div className="left">
      <Sidebar />
      </div>
      <div className="main-page mx-4">
        <UserDetails />
      </div>
    </div>
  )
}

export default MainUserDetails