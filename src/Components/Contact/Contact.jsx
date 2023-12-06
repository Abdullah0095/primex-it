import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='min-h-screen bg-white'>
            <div>
                <h1 className='text-center text-teal-900 text-5xl font-bold font-serif'>Contact me</h1>
            </div>
            <section>
                <div className='grid grid-cols-4'>
                    <div>detail</div>
                    <div className='col-span-3 border border-teal-900 p-4 m-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex'>
                                <div>
                                    <input className='bg-white border border-black h-12 w-96 text-black mx-2 px-4 font-bold text-lg' placeholder='Your Full Name' type="text" name="user_name" />
                                </div>
                                <div>
                                    <input className='bg-white border border-black h-12 w-96 text-black mx-2 px-4 font-bold text-lg' placeholder='Your Email' type="email" name="user_email" />
                                </div>
                            </div>
                            <textarea className='bg-white border border-black text-black m-2 px-4 font-bold font-serif text-lg' placeholder='Write Your Message here' cols={66} rows={10} name="message" /> <br />
                            <input className='bg-green-700 p-2 mx-2 h-12 w-32 rounded text-white text-xl' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;