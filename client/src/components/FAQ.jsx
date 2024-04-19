import React from 'react';

const FAQ = () => {
    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <h3>What is Hostelify?</h3>
                <p>Hostelify is a comprehensive platform designed to streamline the hostel management process. It offers a range of features tailored to the specific needs of hostels, including reservation management, guest check-ins, billing, and more.</p>
            </div>
            <div className="faq-item">
                <h3>How can I benefit from using Hostelify?</h3>
                <p>By using Hostelify, hostel owners and managers can simplify their operations, improve efficiency, and enhance the overall guest experience. With features such as online booking, automated check-ins, and customizable billing, Hostelify empowers hostel owners to focus more on delivering exceptional service to their guests.</p>
            </div>
            {/* Add more FAQ items as needed */}
        </div>
    );
}

const privacy =()=>{
    return (
        <div>
        <h2>Privacy Policy</h2>
        <p>
          At Hostelify, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our website.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We collect information such as your name, email address, and location when you sign up for an account or make a booking. This data helps us provide our services and improve user experience.
        </p>
        <h3>How We Use Your Data</h3>
        <p>
          We use your data to process bookings, communicate with you about reservations, and personalize your experience on Hostelify. Additionally, we analyze aggregated data to enhance our services.
        </p>
        <h3>Third-Party Services</h3>
        <p>
          We may share your information with trusted third-party services, such as payment processors and analytics tools. These partners are bound by strict privacy agreements and use your data only for authorized purposes.
        </p>
        <h3>Security Measures</h3>
        <p>
          We implement robust security measures to protect your data. However, no method of transmission over the internet is 100% secure. Please use Hostelify responsibly and keep your login credentials confidential.
        </p>
        <h3>Updates to Privacy Policy</h3>
        <p>
          We may update this policy periodically to reflect changes in our practices or legal requirements. Check back regularly for any modifications.
        </p>
      </div>
    )
}

const help=()=>{
    return (
        <div>
          <h2>Need Help?</h2>
          <p>
            Welcome to Hostelify! If you have any questions or need assistance, we're here to help. Check out the following resources:
          </p>
          <ul>
            <li>
              <strong>FAQs:</strong> Visit our <a href="/faq">FAQ page</a> for answers to common queries.
            </li>
            <li>
              <strong>Contact Support:</strong> Reach out to our support team via email or chat. We're available 24/7.
            </li>
            <li>
              <strong>User Guides:</strong> Explore our user guides and tutorials for step-by-step instructions.
            </li>
            <li>
              <strong>Community Forum:</strong> Join our community forum to connect with other users and share experiences.
            </li>
          </ul>
          <p>
            We're committed to making your Hostelify experience smooth and enjoyable. Don't hesitate to ask for help!
          </p>
        </div>
      );
}

export {FAQ,privacy,help};
