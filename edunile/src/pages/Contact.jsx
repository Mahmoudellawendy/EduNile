export default function Contact() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Contact Us</h1>
      <p className="lead">Have a question? Reach out to our team!</p>

      <div className="mb-4">
        <button className="btn btn-primary me-2">Email Support</button>
        <button className="btn btn-success me-2">Live Chat</button>
        <button className="btn btn-warning me-2">Call Us</button>
      </div>

      <div className="mb-4">
        <div className="alert alert-info">We usually respond within 24 hours.</div>
        <div className="alert alert-success">Your satisfaction is our priority!</div>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}
