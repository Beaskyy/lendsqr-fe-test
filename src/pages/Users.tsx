import { useEffect } from "react"
import MainUsers from "../components/MainUsers"
import Navbar from "../components/Navbar"

type Props = {}

const Users = (props: Props) => {
  let isLoggedIn = sessionStorage.getItem("isLoggedIn")

  useEffect(() => {
    if(!isLoggedIn) {
      window.location.href="/login"
    }
  }, [isLoggedIn])

  return (
    <div>
      <Navbar />
      <MainUsers />
    </div>
  )
}

export default Users