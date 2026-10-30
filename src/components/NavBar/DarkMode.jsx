import React from 'react'
import lightmode from '../../assets/light-mode-button-X4OXHFfW.png'
import darkmode from '../../assets/dark-mode-button-85jBkhOs.png'

function DarkMode() {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    console.log(element);

    React.useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);


    return (
        <div className='flex justify-between items-center gap-5 relative z-10'>

            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={lightmode}
                alt="Light Mode"
                className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
            />
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={darkmode}
                alt="Dark Mode"
                className={`w-12 cursor-pointer absolute ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-all duration-300`}
            />
        </div>

    )
}

export default DarkMode