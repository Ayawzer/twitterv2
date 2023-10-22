export const CreateFormPopup = (props: any) => {
  return (props.trigger) ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-slate-900/75 flex justify-center items-center">
      <div className="relative w-full max-w-2xl flex justify-center">
        <button className="absolute top-4 right-4 text-white bg-violet-700 rounded-full p-5 text-center inline-flex items-center" onClick={props.togglePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
};
