import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import './contact.css';

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_awx7qas', 'template_zf1h9am', form.current, {
        publicKey: 'he-gL6Ja3TblZUavP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>E-mail</h4>
            <h5>abdalzobair27@gmail.com</h5>
            <h4>Send a message</h4>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Abdullah Al Zobair</h5>
            <h4>Send a message</h4>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>01855864435</h5>
            <h4>Send a message</h4>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact