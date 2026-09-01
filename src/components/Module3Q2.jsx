import { useState } from "react"

export default function Module3Q2() {
  // TODO: Define form state (e.g., email & password)
  // TODO: Define errors state (object for storing inline error messages)
  // TODO: Write validate() function to check email & password requirements
  // TODO: Write handleSubmit(e) function with e.preventDefault()
  const [formData, setFormData] = useState({
    email: "", password: ""
  });
  const [error, setError] = useState({
    email: "", password: ""
  });
  const validate = () => {
    const errors={
    email: "", password: ""
  }
    if (formData.email != "") {
      const isValidEmail = formData.email.includes('@');
      if (!isValidEmail) {
        errors.email="Invalid Email"
      }
    } else {
        errors.email="Email is mandatory"
    }

    if (formData.password != "") {
      const isValidPassword = formData.password.length > 0 && formData.password.length <= 8;
      if (!isValidPassword) {
        errors.password="Invalid Password"
      }
    } else {
        errors.password="Password is mandatory"
    }
    return errors;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors=validate();
    if (errors.password == "" && errors.email == "") {
      console.log(formData);
    }else{
      setError(errors)
      console.log(errors);
    }

  }
  return (
    <div className="p-6 bg-slate-900 text-white rounded-2xl max-w-md mx-auto space-y-4 text-center font-sans">
      <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full">
        Module 3 • Question 2
      </div>
      <h2 className="text-xl font-bold text-white">Form Submission & Inline Validation</h2>
      <p className="text-xs text-slate-400">Practice handling e.preventDefault(), error object states, and field validation</p>
      <form onSubmit={handleSubmit} className="flex flex-col item-center">
        <input type="text" value={formData.email} placeholder="Enter Email" onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
        {error.email!=""&& <h1 className="text-xs text-red">{error.email}</h1>}
        <input type="text" value={formData.password} placeholder="Enter Password" onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />
         {error.password!=""&& <h1 className="text-xs text-red">{error.password}</h1>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
