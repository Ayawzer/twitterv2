import { Link } from 'react-router-dom';
import { auth } from '../Config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import ScreenSize from '../Components/ScreenSize';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const signUseerOut = async () => { 
        await signOut(auth);
        const dropdown = document.getElementById('dropdown');
        dropdown?.classList.add('hidden');
    };

    const toggleDropdown = (e: any) => {
        e.preventDefault();
        const dropdown = document.getElementById('dropdown');
        if (dropdown?.classList.contains('hidden')) {
            dropdown?.classList.remove('hidden');
        } else {
            dropdown?.classList.add('hidden');
        }
    };

    const screenSize = ScreenSize();

    return (
        <div className='flex justify-center md:justify-end bg-violet-700 h-20 w-screen items-center md:pr-12 gap-20 text-white flex-wrap fixed bottom-0 left-0 right-0 md:static'>
            <div className='flex items-center gap-4 font-bold hidden md:block'>
                <Link to="/" className="capitalize py-2 px-4 rounded-full  hover:bg-violet-800">Main</Link>
                {!user ?  (
                    <Link to="/login" className="capitalize py-2 px-4 rounded-full  hover:bg-violet-800">Login</Link>
                ) : null
                }
            </div>
            
            <div className='flex items-center gap-4 flex-col-reverse flex-wrap md:flex-row'>
                <p className='hidden md:block'>{user?.displayName}</p>
                {user &&
                <button onClick={toggleDropdown}>
                    <img src={user?.photoURL || ''} alt="avatar" className='w-12 rounded-full'/>
                </button>
                }
                <div id='dropdown' className='hidden w-44 bg-violet-700 text-center rounded-md absolute -top-[75px] md:top-[75px] md:right-4'>
                    <ul className='py-1 text-sm text-white font-bold' >
                        {
                            screenSize.winWidth <= 767 ?
                            (
                                <li className='py-2 px-4'>
                                    {user?.displayName}
                                </li>
                            ) : null
                        }
                        <li 
                        {...user ? {className: 'py-2 px-4 hover:bg-violet-800 '} : {className: 'hidden'}}
                        >
                            <button onClick={signUseerOut}>
                            Log Out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;