'use client'

var darkMode = false;

function setDarkMode() {
    if (darkMode) {
        darkMode = false;
        document.documentElement.classList.remove("dark");
    } else {
        darkMode = true;
        document.documentElement.classList.add("dark");
    }
}

function DarkMode() {
    return (
        <div>
            <button className=" w-20 absolute flex top-3 right-20 shadow-lg shadow-slate-700 bg-slate-500 dark:bg-sky-900 dark:shadow-slate-500 border-2 rounded-full" onClick={setDarkMode}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded-full w-9 h-9 fill-yellow-300 bg-yellow-300 transform dark:translate-x-full dark:bg-sky-600 duration-300 ease-in-out">
                    <path className="dark:invisible transition-transform ease-in-out" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path className=" fill-slate-400 invisible dark:visible transition-transform ease-in-out" strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    <path className="fill-slate-400 invisible dark:visible transition-transform ease-in-out" fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"></path>
                </svg>
            </button>
        </div>
    )
}

export default DarkMode;