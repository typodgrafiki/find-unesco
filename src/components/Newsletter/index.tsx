'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "@/styles/newsletter.scss"

const Newsletter: React.FC = () => {
    
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // try {            
        //     const response = await axios.post('/api/newsletter', { email });
        //     if (response.data.success) {
        //         toast.success('Successfully subscribed to the newsletter!');
        //     }else{
        //         console.log('no1')
        //     }
        // } catch (error) {
        //   toast.error('An error occurred. Please try again.');
        // }
    };
  
    return (
        <>
            <section className="newsletter relative">
                <div className="container">
                    <h4>Newsletter</h4>
                    <p>Sign up for the newsletter and receive the latest information</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="formControl"
                            placeholder="john@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btnPrimary nowrap"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Newsletter
