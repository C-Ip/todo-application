import Link from "next/link";

function NavigationBar() {
    return (
        <div>
            <nav className="bg-white text-black dark:bg-slate-600 dark:text-slate-400 flex md:justify-center space-x-5 text-xl p-5">
                <Link href="/">Home</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default NavigationBar;