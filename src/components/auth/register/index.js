// import React, { useState } from 'react'
// import { Navigate, Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../../contexts/authContext'
// import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

// const Register = () => {

//     const navigate = useNavigate()

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setconfirmPassword] = useState('')
//     const [isRegistering, setIsRegistering] = useState(false)
//     const [errorMessage, setErrorMessage] = useState('')

//     const { userLoggedIn } = useAuth()

//     const onSubmit = async (e) => {
//         e.preventDefault()
//         if(!isRegistering) {
//             setIsRegistering(true)
//             await doCreateUserWithEmailAndPassword(email, password)
//         }
//     }

//     return (
//         <>
//             {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

//             <main className="w-full h-screen flex self-center place-content-center place-items-center">
//                 <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
//                     <div className="text-center mb-6">
//                         <div className="mt-2">
//                             <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
//                         </div>

//                     </div>
//                     <form
//                         onSubmit={onSubmit}
//                         className="space-y-4"
//                     >
//                         <div>
//                             <label className="text-sm text-gray-600 font-bold">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 autoComplete='email'
//                                 required
//                                 value={email} onChange={(e) => { setEmail(e.target.value) }}
//                                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
//                             />
//                         </div>

//                         <div>
//                             <label className="text-sm text-gray-600 font-bold">
//                                 Password
//                             </label>
//                             <input
//                                 disabled={isRegistering}
//                                 type="password"
//                                 autoComplete='new-password'
//                                 required
//                                 value={password} onChange={(e) => { setPassword(e.target.value) }}
//                                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//                             />
//                         </div>

//                         <div>
//                             <label className="text-sm text-gray-600 font-bold">
//                                 Confirm Password
//                             </label>
//                             <input
//                                 disabled={isRegistering}
//                                 type="password"
//                                 autoComplete='off'
//                                 required
//                                 value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
//                                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//                             />
//                         </div>

//                         {errorMessage && (
//                             <span className='text-red-600 font-bold'>{errorMessage}</span>
//                         )}

//                         <button
//                             type="submit"
//                             disabled={isRegistering}
//                             className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
//                         >
//                             {isRegistering ? 'Signing Up...' : 'Sign Up'}
//                         </button>
//                         <div className="text-sm text-center">
//                             Already have an account? {'   '}
//                             <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
//                         </div>
//                     </form>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Register


// Here's your component with the CSS converted to internal styles:

// ```jsx
import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(email, password);
        }
    };

    return (
        <>
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}

            <main style={{ width: '100%', height: '100%', display: 'flex', selfAlign: 'center', justifyContent: 'center', alignItems: 'center',marginTop: '4rem' }}>
                <div style={{ width: '24rem', color: '#4B5563', marginTop: '2rem', padding: '1rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB', borderRadius: '0.5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ marginTop: '0.5rem' }}>
                            <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600' }}>Create a New Account</h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} style={{ marginTop: '1rem' }}>
                        <div>
                            <label style={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: '600' }}>Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', color: '#6B7280', backgroundColor: 'transparent', outline: 'none', border: '1px solid #D1D5DB', focusBorderColor: '#2563EB', boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
                            />
                        </div>

                        <div>
                            <label style={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: '600' }}>Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', color: '#6B7280', backgroundColor: 'transparent', outline: 'none', border: '1px solid #D1D5DB', focusBorderColor: '#2563EB', boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
                            />
                        </div>

                        <div>
                            <label style={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: '600' }}>Confirm Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete="off"
                                required
                                value={confirmPassword}
                                onChange={(e) => setconfirmPassword(e.target.value)}
                                style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', color: '#6B7280', backgroundColor: 'transparent', outline: 'none', border: '1px solid #D1D5DB', focusBorderColor: '#2563EB', boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
                            />
                        </div>

                        {errorMessage && <span style={{ color: '#EF4444', fontWeight: '600' }}>{errorMessage}</span>}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                color: '#fff',
                                fontWeight: '500',
                                borderRadius: '0.375rem',
                                backgroundColor: isRegistering ? '#D1D5DB' : '#2563EB',
                                cursor: isRegistering ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.3s',
                                marginTop: '1rem',
                            }}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Already have an account? {'   '}</p>
                            <Link to={'/login'} style={{ color: '#2563EB', fontWeight: '600', textDecoration: 'underline' }}>Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;
// ```

// I've translated your Tailwind CSS styles into inline styles. Let me know if there's anything else you need!