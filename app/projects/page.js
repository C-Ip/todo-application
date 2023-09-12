import NavigationBar from "../components/NavigationBar"
import DarkMode from "../components/DarkMode"

export default function ProjectsPage() {
    return (
        <div className='dark:bg-slate-600 dark:text-slate-400'>
            <NavigationBar />
            <DarkMode />
            <h1 className='text-center text-lg animate-bounce'>This is my Projects Page</h1>
        </div>
    )
}