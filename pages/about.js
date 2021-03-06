/* eslint-disable react/no-unescaped-entities */
import { Container } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import BrowseCategories from '../components/BrowseCategories';

export default function About() {
  return (
    <AppLayout>
      <Container>

      <div className="mt-2 d-flex">
          <div className="mr-2"><BrowseCategories /></div>
          <div className="flex-grow-1">
          <div className="about__header">
          <h2>About Us</h2>
        </div>
        <div className="about__body">
            <p>2 Dollars is you, the community of on-line shoppers in Australia. This is the place where we share the cheaper market options in Australia and share them with each other. Our goal is simple - bringing the best deals in Australia to consumers.</p>
            <h5>How does it work?</h5>
            <p>Register an account. <br />
            Create or Submit market places.<br />
            Discuss deals with other shoppers. <br />
            While all the deals posted are community moderated, we do however have guidelines on what you should post and what are categorised as *$2*.</p>

            <h5>I am not looking for things to buy. I am selling!</h5>
            If you are a merchant, an online store owner, an employee of a retail shop, etc, and would like to share your specials, you are free to submit them as well! However, they will be moderated by the same community so if you post bad deals, you will receive negative feedback!

            For more information, see our merchant FAQ page.

            <h5>Can I trust users? Are merchants paying to get their deals on here?</h5>
            <p>Anyone, including representatives of companies are free to post deals and comments on 2 Dollars. We do not charge anything to use this site. Whether you are a new user or long time representative, you will get treated equally. Every vote, comment, and post is audited for any irregularities. Shill accounts, meatpuppets and sockpuppets will be banned accordingly.</p>

            <h5>What's the history of 2 Dollars?</h5>
            <p>While 2 Dollars started as scotty's part time project and a community-driven website back in 2020, it has continued to grow and demand resources – in both hosting and development. While web hosting is relatively cheap (and scotty has been quite good hunting down cheap hosting offers), time and stress to run this site comes at a much greater cost.</p>

            <p>scotty has been working full time on OzBargain since mid-2011, and OzBargain (as part of Delvu Media Pty Ltd founded by scotty) is currently employing 4 full-time staff developing the website to make this community better. OzBargain is the most popular bargain site in Australia and continues to increase both its amount of users and traffic.</p>

        </div>
          </div>
        </div>
      </Container>
    </AppLayout>
  );
}
