import { useState } from "react";

const SignIn = ({ changeAccess }) => {
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
    <div className='w-screen h-screen flex justify-center items-center'>
      <form className='bg-white border-2 border-slate-900 xl:w-5/12 md:w-3/5 sm:w-3/4 w-4/5 h-1/2 signin-h rounded-lg flex flex-col justify-center items-center gap-5 shadow-lg shadow-slate-900 mx-4 '>
        <label htmlFor='accName' className='text-lg font-normal'>
          Name
        </label>
        <input
          type='text'
          name='accName'
          id='accName'
          className='w-3/6 sm:h-8 border border-slate-900 rounded-lg '
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyPress={pressingKey}
        />
        <label htmlFor='accPassword' className='text-lg font-normal'>
          Password
        </label>
        <input
          type='password'
          name='accPassword'
          id='accPassword'
          className='w-3/6 sm:h-8 border border-slate-900 rounded-lg'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onKeyPress={pressingKey}
        />
        <button
          className='w-28 h-9 bg-green-500 rounded-md'
          onClick={submitForm}
        >
          Sign in
        </button>
        {!correction && (
          <p className='text-red-500'>Name/Password is/are incorrect</p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
