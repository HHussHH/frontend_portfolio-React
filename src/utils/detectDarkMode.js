const detectDarkMode = () => {
    if (
        window.matchMedia && Window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark"
    }
    return "light"
}

export default detectDarkMode