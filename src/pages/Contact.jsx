import React from 'react'

export default function Contact() {
  return (
    
<div>

          <header>
              <a href="index.html">&#x2190; Home</a>
              <h1>Contact Me</h1>
          </header>

          <nav>
              <a href="about.html">About</a>
              <a href="projects.html">Projects</a>
              <a href="contact.html">Contact</a>
          </nav>


          <section>
              <div className="contact-info">
                  <h2>Get in Touch</h2>
                  <p><strong>Name:</strong> Your Name</p>
                  <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
                  <p><strong>Email:</strong> <a href="mailto:yourname@hotmail.com">yourname@hotmail.com</a></p>
                  <p><strong>Phone:</strong> +123-456-7890</p>
              </div>

              <form action="/send-email" method="post">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />

                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required />

                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>

                  <button type="submit">Send Email</button>
              </form>
          </section>

      <footer>
              <p>&copy; 2024 Your Name. All rights reserved.</p>
          </footer>

    </div>



  )
}
