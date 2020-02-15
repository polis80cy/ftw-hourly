import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Jiffystudio',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Rent a photo studio anywhere or make your studio accessible to everyone.</h1>
          <img className={css.coverImage} src={image} alt="About us." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Think of us as Airbnb for photo studios!</p>
            </div>

            <div className={css.contentMain}>
            <h2>
                About Us
              </h2>

              <p>
                We are currently a tiny team of 2 working from different countries. We have big plans
                however. We've always been intrigued by the idea of a marketplace, the power of community
                and bringing people together. Our love of photography has recently exposed us to the
                challenge of renting a studio, a creative space, for a couple of hours with no complexity
                (the struggle is real). Setting up a platform to solve that challenge felt like the right
                thing to do. We started executing on the idea towards the end of 2019, and went online
                mid-January 2020. We want Jiffystudio to be a win-win; Studio hosts can earn extra income,
                and photographers can access creative spaces globally, effortlessly.
              </p>

              <h2>
                Rent a photo studio everywhere
              </h2>

              <p>
                If you're on the hunt for a creative space in your city or further away, <u>you can use
                Jiffystudio to find it and book it</u>. With real-time bookings, and reviews from hosts and
                other users, you can rest assured that you're getting a good deal.
              </p>
              
              <h2>
                Host your space
              </h2>

              <p>
                Be it a professional space or just your living room, if you have the
                equipment necessary to call it a photography studio, <u>you can monetize your
                space</u> by hosting it on Jiffystudio. Make it available to a global
                community of photographers looking for creative spaces for their next photoshoot.
                Make it work for you by choosing when to make your studio available for bookings,
                and how much to charge for it, all through our platform.
              </p>

              <h3 id="fees" className={css.subtitle}>
                Questions?
              </h3>
              <p>
                Got questions on the listing process? Want to find out our commission fee? Want to
                hear more about payments and payouts? Want to find out why something works the way
                it does? Have a look at 
                our <a href="https://www.jiffy.studio/help">FAQs</a> for a list of commonly asked
                questions and answers.
              </p>

              <h2 id="contact">
                Get in touch
              </h2>
              <p>
                We love feedback! We are a new platform and your feedback is critical to our success.
                If you have questions, suggestions, bugs to report or just want to say hi, just send
                us an email to <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>. We are very
                responsive.
              </p>

              {/*<h3 id="contact" className={css.subtitle}>
                Get social
              </h3>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>*/}
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
