import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Button from "./ui/button";

export default function ThemeToggler() {
    const [theme, setTheme] = useState<"dark" | "light">(() =>
        document.documentElement.className === "dark" ? "dark" : "light",
    );

    useEffect(() => {
        document.documentElement.className = theme === "dark" ? "dark" : "";
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleToggleClick}
            className="absolute right-5 top-5 bg-card/80"
        >
            {theme === "dark" ? (
                <Moon className="transition-all size-5" />
            ) : (
                <Sun className="transition-all size-5" />
            )}
        </Button>
    );
}
