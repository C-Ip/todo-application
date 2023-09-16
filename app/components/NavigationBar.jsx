import Link from "next/link";

export default function NavigationBar() {
    return (
        <div>
            <nav className="bg-white text-black dark:bg-slate-600 dark:text-[#b1cddf] flex md:justify-center space-x-5 text-xl p-5">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}