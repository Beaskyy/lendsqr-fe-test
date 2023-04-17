import { useEffect } from "react"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

console.log()

type Props = {}

const Dashboard = (props: Props) => {
  let isLoggedIn = sessionStorage.getItem("isLoggedIn")

  useEffect(() => {
    if(!isLoggedIn) {
      window.location.href="/login"
    }
  }, [isLoggedIn])
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default Dashboard