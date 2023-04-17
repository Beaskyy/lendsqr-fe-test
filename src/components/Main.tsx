import Home from "./Home"
import Sidebar from "./Sidebar"

type Props = {}

const Main = (props: Props) => {
  return (
    <div className="main">
      <div className="left">
      <Sidebar />
      </div>
      <div className="main-page mx-4">
        <Home />
      </div>
    </div>
  )
}

export default Main