import React from "react";

export default function Navbar({ children }: {
    children: React.ReactNode;
}) {
    return (
        <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {children}
            </div>
        </nav>
    );
}