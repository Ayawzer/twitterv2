import { auth, provider } from '../Config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const signIn = async () => {
        const res = await signInWithPopup(auth, provider);
        navigate('/');
    };

    return (
        <div className="flex justify-center flex-col items-center text-center">
            <p> Zaloguj się za pomocą Google aby kontynuować </p>
            <button 
                onClick={signIn}
                className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-full"
            > 
                Zaloguj się 
            </button>
        </div>
    );
};

export default Login;