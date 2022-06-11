import { useState } from "react";

const Login = ({ changeAccess }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [correction, setCorrection] = useState(true);
  const submitForm = (e) => {
    e.preventDefault();
    setCorrection(changeAccess(name, password));
    // setCorrection also calls changeAccess
  };
  const pressingKey = (e) => {
    if (e.key === "Enter") {
      submitForm(e);
    }
  };
  return (
    <form className='bg-amber-500 xl:w-5/12 md:w-3/5 sm:w-3/4 h-3/6 translate-y-1/2 mx-auto rounded-lg flex flex-col justify-center items-center gap-5 shadow-lg shadow-amber-500'>
      <label htmlFor='accName'>Name</label>
      <input
        type='text'
        name='accName'
        id='accName'
        className='w-3/6 sm:h-8'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyPress={pressingKey}
      />
      <label htmlFor='accPassword'>Password</label>
      <input
        type='password'
        name='accPassword'
        id='accPassword'
        className='w-3/6 sm:h-8'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onKeyPress={pressingKey}
      />
      <button className='w-28 h-9 bg-green-500 rounded-md' onClick={submitForm}>
        Login
      </button>
      {!correction && (
        <p className='text-red-500'>Name/Password is/are incorrect</p>
      )}
    </form>
  );
};

export default Login;
