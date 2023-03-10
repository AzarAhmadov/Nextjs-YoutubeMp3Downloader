"use client"

import axios from 'axios';
import { useRef, useState } from "react";
import { YoutubeGetId } from './YoutubeGetId';

export default function Home() {
    const inputRef = useRef();
    const [urlResult, setUrlResult] = useState(null);

    const Submit = (e) => {
        e.preventDefault()

        const youtubeID = YoutubeGetId(inputRef.current.value);


        const options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {
                id: youtubeID
            },
            headers: {
                'X-RapidAPI-Key': 'ea5533f125msh7381b88297d175fp1bdaf6jsn100496398d91',
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
        };

        axios(options)
            .then(res => setUrlResult(res.data.link))
            .catch(err => console.log(err))

        inputRef.current.value = '';

    }
    return (
        <div className="container">
            <div className="content">
                <header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo" />
                    <h1> YouTube to MP3 Converter </h1>
                </header>
                <form onSubmit={Submit}>
                    <input ref={inputRef} type="text" placeholder="Paste a Youtube video URL link..." />
                    <button type='submit' className="search"> Search </button>
                </form>
                {urlResult ? <a className='download' target='_blank' href={urlResult}> Download MP3 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                </a> : null}
            </div>
        </div>
    )
}
