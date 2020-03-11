import React, { useState, useEffect } from 'react';

export default function Fetching() {
    const [meme, setMeme] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        isLoading && getMeme();
        async function getMeme() {
            const response = await fetch('https://api.imgflip.com/get_memes');
            // const data = await response.json();
            // setMeme(data.url)      -> destructure ->
            const { data } = await response.json();
            const generated = data.memes[randomNum(0, 99)]
            setIsLoading(false);
            setMeme(generated.url)
            setName(generated.name)
            console.log(name, meme)
        }
    },[isLoading]);
    
    function randomNum(min, max) {
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
                            <h2>{name}</h2>
                            <img src={meme} alt='meme' style={{ width: '300px', margin: '5vh auto'}} />
                        </div> :
                        null
            }
        </div>
    )
}
