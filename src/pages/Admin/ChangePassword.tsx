import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"


const ChangePassword = () => {

  const navigate = useNavigate()

  const [text,setText] = useState('')
  
  const { changePassword, logout } = useAuth()

  const handleChange = (e: any) => {
    setText(e.target.value)
    // console.log(text)
  }

  const handleSubmit = async () => {
    // console.log(text)
    const password = text
    const repp = await changePassword({ password })
    // console.log(repp)
    alert(repp.message)
    logout()
    navigate('/')
  }

  return (
    <div>
      <div className=" space-x-5 ml-4">
        <input className=" w-48 h-10" type="text" value={text} onChange={handleChange} />
        <button onClick={handleSubmit} className=" bg-blue-950 text-slate-100 px-4 py-2 rounded-lg">Change Password</button>
      </div>
    </div>
  )
}

export default ChangePassword