

export default function Header() {

    return (

        <header className="w-full h-auto bg-[#2D2D2E] flex flex-row justify-between p-8 sombraHeader">
    
            <div>

                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">CRYPTO TRACKER</h1>

            </div>

            <nav className="text-lg flex flex-row gap-10 justify-center items-center font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">

                <a href="#">Home</a>
                <a href="#">Prices</a>
                <a href="#">Communnity</a>

            </nav>

            <div>

                <div>



                </div>

                <button type="button" className="p-2 bg-[#1E1E1E] rounded-full hover:cursor-pointer"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFB900" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                        <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                        <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                        <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                    </svg>
                </button>

            </div>

        </header>

    )

}