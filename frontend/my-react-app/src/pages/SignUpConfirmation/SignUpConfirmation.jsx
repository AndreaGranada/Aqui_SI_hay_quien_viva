import { Link } from "react-router-dom"


function SignUpConfirmation() {
  return (
    <>
    <div>SignUpConfirmation</div>
    <Link to={"/login"}>
    <button>Logearme</button>
    </Link>
    </>
  )
}

export default SignUpConfirmation