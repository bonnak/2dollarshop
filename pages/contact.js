import { Container } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <AppLayout>
      <Container className="contact">
        <div className="contact__header">
          <h2>Contact Us</h2>
        </div>
        <div className="contact__body">
          <h5>Some things to check before contacting us.</h5>
          <ul>
            <li>
            2 Dollars is an online community website for shoppers and best market options hunters, and we ARE NOT related to merchants, stores or service providers listed on this website. If you have a question regarding products or services that you have seen on 2 Dollars, please contact respective merchants or stores directly. 2 Dollars DOES NOT sell those products, nor will we provide any support for them.
            Have you tried to SEARCH our forums or visit our FAQ PAGE and FAQ PAGE for Merchants, just in case your question has already been answered?
            </li>
            <li>Please do not use the contact form for:</li>
            <li>
            Questions about store posting limits: This includes all questions about why you are currently unable to post a new deal for a store - temporary bans, posting limits, vote averages. Please use the Talk with a Moderator forum to discuss your specific case, or automatic suspension announcement for discussion about this beta feature. (login required).
            Moderation Issues: This includes all inquiries about the Penalty Box, store bans, or why a post or comment has been unpublished. You will need to contact the Moderators by creating a new post in the Talk with a Moderator forum (login required).
            For other enquiries, you can use the contact form below. Please select the appropriate category so that your enquiry can be handled as efficiently as possible. General enquiries can also be sent to contact@two-dollars.com.au directly.
            </li>
          </ul>
        </div>
        <hr />
        <div className="contact__form">
          <ContactForm />
        </div>
      </Container>
    </AppLayout>
  );
}
