import React from "react";

export default function Navbar({ links, title, shoppingBagButton }: {
    links: React.ReactNode;
    title: React.ReactNode;
    shoppingBagButton: React.ReactNode;
}) {
    return (
        <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <div className="flex-1 hidden md:flex gap-8">
                    {links}
                </div>
                <div className="flex-1 flex justify-center">
                    {title}
                </div>
                <div className="flex-1 flex justify-end items-center">
                    {shoppingBagButton}
                </div>
            </div>
        </nav>
    );
}