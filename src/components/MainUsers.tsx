import Sidebar from "./Sidebar"
import User from "./User"

type Props = {}

const MainUsers = (props: Props) => {
  return (
    <div className="main">
      <div className="left">
      <Sidebar />
      </div>
      <div className="main-page mx-md-5">
        <User />
      </div>
    </div>
  )
}

export default MainUsers