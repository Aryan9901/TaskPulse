import React, { useState, useEffect } from 'react';
import { Typography } from '@/components/ui/Typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@/context/ThemeProvider';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const storageKey = 'theme'; // Make sure to define the key

const isLoggedIn = true;

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem(storageKey);
        return savedTheme === 'light';
    });

    useEffect(() => {
        localStorage.setItem(storageKey, theme);
    }, [theme]);

    const toggleDarkMode = (checked) => {
        if (theme === 'light') {
            setTheme('dark');
            setDarkMode(false);
        } else {
            setTheme('light');
            setDarkMode(true);
        }
    };

    return (
        <header className='w-full px-8 py-4 flex items-center border-b-[1px]'>
            <Link to="/" className='flex-grow'>
                <Typography variant="h1" className='text-xl lg:text-2xl'>
                    Nexus
                </Typography>
            </Link>
            <nav className='mx-auto flex-grow'>
                <ul className='flex items-center justify-center gap-1'>
                    <li className='cursor-pointer'>
                        <NavLink to="/projects">
                            <Button className="text-foreground text-base" variant="link">
                                Projects
                            </Button>
                        </NavLink>
                    </li>
                    <li className='cursor-pointer'>
                        <NavLink to="/upgrade">
                            <Button className="text-foreground text-base" variant="link">
                                Upgrade to PRO
                            </Button>
                        </NavLink>
                    </li>
                    <DarkModeSwitch
                        className='rotate-45 text-5xl'
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={24}
                        sunColor='yellow'
                        moonColor='black'
                    />
                </ul>
            </nav>
            <div className='flex items-center justify-end flex-grow gap-4'>
                {isLoggedIn ? (
                    <>
                        <div>
                            <Typography variant="lead" className='text-base'>
                                Aryan Gupta
                            </Typography>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </>
                ) : (
                    <>
                        <NavLink to="/login">
                            <Button className="text-foreground text-base" variant="secondary">
                                Login
                            </Button>
                        </NavLink>
                        <NavLink to="/signup">
                            <Button className="text-white text-base">
                                Sign Up
                            </Button>
                        </NavLink>
                    </>
                )}
            </div>
        </header>
    );
}
