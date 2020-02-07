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
        description: 'About Yogatime',
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
              <p>Think of us as the Airbnb for photo studios!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Rent a photo studio everywhere
              </h2>

              <p>
                If you're on the hunt for a creative space in your city or further away, use Jiffystudio to
                find it and book it. With no hidden fees, real-time bookings and real reviews from other users,
                you can rest assured that you're getting a good deal.
              </p>
              
              <h2>
                Host your space
              </h2>

              <p>
                Whether it is a professional space or just your living room, if you have the
                equipment necessary to call it a photography studio, you can monetize your
                place by hosting it on Jiffystudio. Make your space available to a global community
                of photographers looking for creative spaces for their next photoshoot. Make it
                work for you by choosing when to make your studio available for bookings,
                and how much to charge for it, all through our platform.
              </p>

              <h3 id="fees" className={css.subtitle}>
                Our fees
              </h3>
              <p>
                We charge studio hosts with a 15% booking fee most of which goes to platform
                maintenance and payment processing fees. We do not keep any banking information
                on our systems; payments and payouts to hosts are all handled directly by Stripe,
                our payment processor.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Get in touch
              </h3>
              <p>
                We love feedback! We are a new platform and your feedback is critical to ur success.
                If you have questions, suggestions, bugs to report or just want to say hi, just send
                us an email to <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>. We are very
                responsive. We are also in the process of building our social media pages, we will
                update the site once these go up.
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
