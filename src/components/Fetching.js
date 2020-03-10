import React, { useState, useEffect } from 'react';

export default function Fetching() {
    const [meme, setMeme] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getMeme() {
            const response = await fetch('https://api.imgflip.com/get_memes');

        }
    })
    return (
        <div>
            <p>{isLoading}</p>
        </div>
    )
}
