import { useEffect } from "react"
import MainUserDetails from "../components/MainUserDetails"
import Navbar from "../components/Navbar"

type Props = {}

const UserInfo = (props: Props) => {
  let isLoggedIn = sessionStorage.getItem("isLoggedIn")

  useEffect(() => {
    if(!isLoggedIn) {
      window.location.href="/login"
    }
  }, [isLoggedIn])
  return (
    <div>
      <Navbar />
      <MainUserDetails />
    </div>
  )
}

export default UserInfo