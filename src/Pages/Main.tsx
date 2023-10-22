import { CreateForm } from "./Create-post/Create-form";
import ScreenSize from "../Components/ScreenSize";
import { CreateFormPopup } from "./Create-post/Create-form-popup";
import { useState } from "react";

const Main = () => {
    const screenSize = ScreenSize();
    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(!popup);
    };

    return (
        <div 
        {...screenSize.winWidth <= 767 ? 
            {className: 'flex  text-center fixed bottom-24 right-4'} 
                : 
            {className: 'flex  text-center fixed bottom-2 w-screen'}}
        >
            {
                screenSize.winWidth <= 767 ? (
                    <button type="button" className="text-white bg-violet-700 rounded-full p-5 text-center inline-flex items-center top-0" onClick={togglePopup}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                ) : (
                    <CreateForm />
                )
            }
            <CreateFormPopup trigger={popup} togglePopup={togglePopup} >
                <CreateForm />
            </CreateFormPopup>    
        </div>
    );
};

export default Main;