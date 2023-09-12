import NavigationBar from "../components/NavigationBar"
import DarkMode from "../components/DarkMode"

export default function ContactPage() {
    return (
        <div className='text-center dark:bg-slate-600 dark:text-slate-400'>
            <NavigationBar />
            <DarkMode />
            <h1 className='text-lg'>This is my Contact Page</h1>
            <p>Calvin Ip</p>
            <p>Technical Support Engineer 4</p>
        </div>
    )
}