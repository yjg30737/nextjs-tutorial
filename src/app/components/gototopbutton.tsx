import React, { useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export function GoToTopButton() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const yOffset = window.pageYOffset;
        if (yOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed bottom-10 right-10">
            {showButton && (
                <button
                    className="p-4 bg-gray-600 text-white rounded-full shadow-lg focus:outline-none"
                    onClick={handleClick}
                >
                    <ArrowUpIcon className="h-5 w-5" />
                </button>
            )}
        </div>
    );
}
