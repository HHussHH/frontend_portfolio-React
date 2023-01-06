import { useEffect, useRef } from "react"
import { useLocalStorage } from "../../utils/useLocalStorage"

import sun from "../../img/icons/sun.svg"
import moon from "../../img/icons/moon.svg"

import "./style.scss"

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");





    const btnRef = useRef(null);

    const toggleDarkMode = () => {
        setDarkMode(darkMode => {
            return darkMode === "light" ? "dark" : "light"
        })
    }

    useEffect(() => {
        if (darkMode === "dark") {
            document.body.classList.add("dark")
            btnRef.current.classList.add("dark-mode-btn--active")
        }

        else {
            document.body.classList.remove("dark")
            btnRef.current.classList.remove("dark-mode-btn--active")
        }
    }, [darkMode]);

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={() => toggleDarkMode()}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default BtnDarkMode