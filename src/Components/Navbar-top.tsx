import { Link } from 'react-router-dom';
import { auth } from '../Config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavbarTop = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='flex w-screen bg-violet-600 sticky top-0 h-20 justify-center'>
             <div className='flex items-center gap-4 font-bold text-white'>
                <Link to="/" className="capitalize py-2 px-4 rounded-full  hover:bg-violet-700">Main</Link>
                {
                    !user ?  (
                        <Link to="/login" className="capitalize py-2 px-4 rounded-full  hover:bg-violet-700">Login</Link>
                    ) : null
                }
            </div>
        </div>
    );
};

export default NavbarTop;