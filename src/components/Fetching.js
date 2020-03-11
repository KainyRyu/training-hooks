import React, { useState, useEffect } from 'react';

export default function Fetching() {
    const [meme, setMeme] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getMeme()
        async function getMeme() {
            const response = await fetch('https://api.imgflip.com/get_memes');
            // const data = await response.json();
            // setMeme(data.url)      -> destructure ->
            const { data } = await response.json();
            // setMeme(data);
            setIsLoading(false);
            setMeme(data.memes[oneToHundred(0, 99)].url)
            console.log(data.memes[oneToHundred(0, 99)].url);
        }
    },[isLoading]);

    function oneToHundred(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function handleLoading() {
        setIsLoading('Loading...');
    }

    return (
        <div>
            <h1>Random Meme</h1>
            <button onClick={handleLoading}>Next</button>
            {
                isLoading ? 
                    <div>{isLoading}</div> : 
                    meme ?
                        <div>
                            <img src={meme} alt='meme' />
                        </div> :
                        null
            }
        </div>
    )
}
