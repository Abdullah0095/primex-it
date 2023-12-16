import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the necessary FontAwesome packages and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the library
library.add(faLocationDot, faClock, faEnvelope, faPhone);

import emailjs from '@emailjs/browser';


const Contact = () => {
    // const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vod9mml', 'template_yz2pj3i', e.target, 'ER5auPwQ65rasVe9m')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        alert("Email has sent successfully, We will contact soon!!!!")

    };

    //     "https://i.ibb.co/349vJ3M/contact.jpg" 
    // "https://i.ibb.co/G2yy6Sv/admin.jpg" 

    return (
        <div className='min-h-screen mt-[-50px] bg-white' >
            
            <div>
                <h1 className='text-center text-teal-900 py-12 text-5xl font-bold font-serif'>Contact Us</h1>
            </div>

            <section>
                <div className='grid md:grid-cols-5 justify-items-center'>


                    <div className='text-black col-span-2 mx-24 md:py-12'>

                        <div className='flex gap-4 py-2'>
                            <div>
                                <FontAwesomeIcon className='h-8 py-3' icon="fa-solid fa-location-dot" />
                            </div>
                            <div>
                                <h1 className='text-xl text-orange-400 font-semibold'>Location:</h1>
                                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                            </div>
                        </div>

                        <div className='flex gap-4 py-2'>
                            <div><FontAwesomeIcon className='h-8 py-4' icon="fa-solid fa-clock" /></div>
                            <div>
                                <h1 className='text-xl text-orange-400 font-semibold'>Open Hours:</h1>
                                <p>Sunday-Friday: <br />11:00 AM - 23:00 PM</p>
                            </div>
                        </div>

                        <div className='flex gap-4 py-2'>
                            <div><FontAwesomeIcon className='h-8 py-3' icon="fa-solid fa-envelope" /></div>
                            <div>
                                <h1 className='text-xl text-orange-400 font-semibold'>Email:</h1>
                                <p>primexitconsultagency@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex gap-4 py-2'>
                            <div><FontAwesomeIcon className='h-8 py-3' icon="fa-solid fa-phone" /></div>
                            <div>
                                <h1 className='text-xl text-orange-400 font-semibold'>Call:</h1>
                                <p>+1 1234 55488 55</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-span-3  border-4 border-orange-400  px-4 py-5 m-1'>
                        <form onSubmit={sendEmail}>
                            <div className='grid md:grid-cols-2'>
                                <div>
                                    <input className='bg-orange-700 outline-none rounded-md  h-12 w-72 md:w-96  text-black m-2 px-4 font-bold text-lg' placeholder='Your Full Name' type="text" name="user_name" required />
                                </div>
                                <div>
                                    <input className='bg-orange-700 outline-none rounded-md h-12 w-72 md:w-96  text-black m-2 px-2 font-bold text-lg' placeholder='Your Email' type="email" name="user_email" required />
                                </div>
                            </div>
                            <input className='bg-orange-700 outline-none rounded-md h-12 w-72 md:w-96  text-black m-2 px-4 font-bold text-lg' placeholder='subject' type="text" name="user_subject" required /> <br />
                            <textarea className='bg-orange-700 outline-none rounded-md text-black h-48 w-72 md:w-96 m-2 px-4 font-bold font-serif text-lg' placeholder='Write Your Message here' name="message" required /> <br />
                            <input className='bg-green-700 p-2 mx-2 h-12 w-32 rounded text-white text-xl' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;