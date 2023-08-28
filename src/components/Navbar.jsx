function Navbar() {
    return ( <>
       <div className="flex w-full text-xl justify-between fixed top-0 bg-black  items-center p-3">
         <div className="bg-slate-600 font-extrabold text-gray-800 px-4 py-2 rounded-lg">Alhansat Task Manager</div>
         <div className="flex justify-around w-1/2">
            <button>Home</button>
            <button>About</button>
            <button>Tasks</button>
         </div>
       </div>
    </> );
}

export default Navbar;