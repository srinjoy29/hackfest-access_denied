// import React, { useState } from 'react'
// import { Navigate, Link } from 'react-router-dom'
// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
// import { useAuth } from '../../../contexts/authContext'

// const Login = () => {
//     const { userLoggedIn } = useAuth()

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [isSigningIn, setIsSigningIn] = useState(false)
//     const [errorMessage, setErrorMessage] = useState('')

//     const onSubmit = async (e) => {
//         e.preventDefault()
//         if(!isSigningIn) {
//             setIsSigningIn(true)
//             await doSignInWithEmailAndPassword(email, password)
//             // doSendEmailVerification()
//         }
//     }

//     const onGoogleSignIn = (e) => {
//         e.preventDefault()
//         if (!isSigningIn) {
//             setIsSigningIn(true)
//             doSignInWithGoogle().catch(err => {
//                 setIsSigningIn(false)
//             })
//         }
//     }

//     return (
//         <div>
//             {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

//             <main className="w-full h-screen flex self-center place-content-center place-items-center">
//                 <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
//                     <div className="text-center">
//                         <div className="mt-2">
//                             <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
//                         </div>
//                     </div>
//                     <form
//                         onSubmit={onSubmit}
//                         className="space-y-5"
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
//                                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//                             />
//                         </div>


//                         <div>
//                             <label className="text-sm text-gray-600 font-bold">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 autoComplete='current-password'
//                                 required
//                                 value={password} onChange={(e) => { setPassword(e.target.value) }}
//                                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//                             />
//                         </div>

//                         {errorMessage && (
//                             <span className='text-red-600 font-bold'>{errorMessage}</span>
//                         )}

//                         <button
//                             type="submit"
//                             disabled={isSigningIn}
//                             className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
//                         >
//                             {isSigningIn ? 'Signing In...' : 'Sign In'}
//                         </button>
//                     </form>
//                     <p className="text-center text-sm">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>
//                     <div className='flex flex-row text-center w-full'>
//                         <div className='border-b-2 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-2 mb-2.5 ml-2 w-full'></div>
//                     </div>
//                     <button
//                         disabled={isSigningIn}
//                         onClick={(e) => { onGoogleSignIn(e) }}
//                         className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
//                         <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clipPath="url(#clip0_17_40)">
//                                 <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
//                                 <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
//                                 <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
//                                 <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
//                             </g>
//                             <defs>
//                                 <clipPath id="clip0_17_40">
//                                     <rect width="48" height="48" fill="white" />
//                                 </clipPath>
//                             </defs>
//                         </svg>
//                         {isSigningIn ? 'Signing In...' : 'Continue with Google'}
//                     </button>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default Login


// Sure, here's the corrected version of your component with internal CSS:

// ```jsx
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(email, password);
            // doSendEmailVerification()
        }
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle().catch((err) => {
                setIsSigningIn(false);
            });
        }
    };

    return (
        <div>
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}

            <main
                style={{ width: '100%', height: '100%', display: 'flex', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: '5rem'}}
            >
                <div
                    style={{ width: '24rem', color: '#4B5563', marginTop: '2rem', padding: '1rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB', borderRadius: '0.5rem' }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginTop: '0.5rem' }}>
                            <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600' }}>Welcome Back</h3> 
                            {/* color: '#374151' */}
                        </div>
                    </div>
                    <form onSubmit={onSubmit} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label style={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: '600' }}>Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', color: '#6B7280', backgroundColor: 'transparent', outline: 'none', border: '1px solid #D1D5DB', focusBorderColor: '#2563EB', boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
                            />
                        </div>

                        <div>
                            <label style={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: '600' }}>Password</label>
                            <input
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', color: '#6B7280', backgroundColor: 'transparent', outline: 'none', border: '1px solid #D1D5DB', focusBorderColor: '#2563EB', boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
                            />
                        </div>

                        {errorMessage && <span style={{ color: '#EF4444', fontWeight: '600' }}>{errorMessage}</span>}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                color: '#fff',
                                fontWeight: '500',
                                borderRadius: '0.375rem',
                                backgroundColor: isSigningIn ? '#D1D5DB' : '#2563EB',
                                cursor: isSigningIn ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.3s',
                                marginTop: '1rem',
                            }}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6B7280' }}>
                        Don't have an account? <Link to={'/register'} style={{ color: '#2563EB', fontWeight: '600', textDecoration: 'underline' }}>Sign up</Link>
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <div style={{ borderBottom: '2px solid #E5E7EB', marginBottom: '0.5rem', marginRight: '0.5rem', width: '100%' }}></div>
                        <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>OR</div>
                        <div style={{ borderBottom: '2px solid #E5E7EB', marginBottom: '0.5rem', marginLeft: '0.5rem', width: '100%' }}></div>
                    </div>
                    <button
                        disabled={isSigningIn}
                        onClick={(e) => {
                            onGoogleSignIn(e);
                        }}
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0.625rem',
                            borderRadius: '0.375rem',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            backgroundColor: isSigningIn ? '#D1D5DB' : '#fff',
                            border: '1px solid #E5E7EB',
                            cursor: isSigningIn ? 'not-allowed' : 'pointer',
                            transition: 'background-color 0.3s',
                            marginTop: '1rem',
                        }}
                    >
                        <svg
                            style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_17_40)">
                                <path
                                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111

V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                                    fill="#FBBC04"
                                />
                                <path
                                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                                    fill="#EA4335"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
// ```

// In this version, I've replaced the Tailwind CSS classes with inline styles. Let me know if you need further adjustments!


//now with Talwind CSS correct code