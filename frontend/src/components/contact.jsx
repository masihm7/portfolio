import { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = {
      name,
      email,
      message,
    };
    // console.log(formData)

    try {
      const response = await fetch('http://localhost:5400/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <section id="contact" className="contact main-section">
      <div className="main-container">
        <h2 className="heading-secondary">
          <span className="heading-secondary__sm">Contact 📞</span>
          <span className="heading-secondary__main">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </span>
        </h2>
        <div className="main-section__content">
          <div className="contact__form-cont">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-field">
                <label className="contact__form-field-label">Name</label>
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact__form-field-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Update state on input change
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-field-label">Email</label>
                <input
                  placeholder="Enter Your Email"
                  type="email"
                  className="contact__form-field-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update state on input change
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-field-label">Message</label>
                <textarea
                  placeholder="Enter Your Message"
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact__form-field-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Update state on input change
                ></textarea>
              </div>
              <button type="submit" className="contact__form-submit">Submit</button>
            </form>
            <div className="contact__form-visual"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
