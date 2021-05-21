import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166922.1530041908!2d-123.27608372021113!3d49.17857622976293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867599f4ef4d3d%3A0x6a5024adba02fab5!2sRichmond%2C%20BC!5e0!3m2!1sen!2sca!4v1621633405705!5m2!1sen!2sca"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        width="600" height="450" loading="lazy"
      ></iframe>

      <h4>Phone</h4>
      <p>778 681 1961</p>

      <h4>Email</h4>
      <p>zzh2929961@gmail.com</p>

      <h4>Address</h4>
      <p>Richmond BC</p>
    </div>
  );
};

export default Contact;