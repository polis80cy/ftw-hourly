import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './HelpPage.css';

const HelpPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="FAQs"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HelpPage',
        description: 'Jiffystudio FAQs',
        name: 'Help page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Frequently Asked Questions</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <h2>
                General
              </h2>
              <h3 id="questions" className={css.subtitle}>
                What is Jiffystudio?
              </h3>
              <p>
                The best analogy for Jiffystudio is the Airbnb for photo studios. We are focused on
                becoming the largest global marketplace for booking photo studios. Our mission is to
                make photo studios accessible by all photographers around the world, and at the same
                time help photo studios generate more bookings and host amazing talent from all over
                the globe.
              </p>
              <h2>
                Studios / Hosts / Fees
              </h2>
              <h3 id="questions" className={css.subtitle}>
                What are your charges?
              </h3>
              <p>
                We currently charge a 15% transaction fee for all bookings completed on Jiffystudio.
                This fee is automatically deducted from your booking total once you accept the request.
              </p>
              <h3 id="questions" className={css.subtitle}>
                How do I add payout information?
              </h3>
              <p>
                All accounts with a studio listing must add payout information in order to receive booking
                requests. We use Stripe Connect to power payments. Adding your payout information is easy
                and can be done in these steps:
                <ol type="1">
                  <li>When logged into your Jiffystudio account, click on the top right account avatar
                    and then “Account Settings” from the dropdown.</li>
                  <li>On the left navigation, click on “Payout details”.</li>
                  <li>Select your country and bank account information (required by Stripe).</li>
                </ol>
                If at any time you need help with this, please email us at hello@jiffy.studio.
              </p>
              <h2>
                Photographers / Creatives
              </h2>
              <h3 id="questions" className={css.subtitle}>
                How do I request to book a photo studio?
              </h3>
              <p>
                You can book a photo studio by creating a user account, if you have not done so already.
                Once you do, find a studio you'd like to visit, select a date and time, and click
                “Request to book”. On the next page, you will be able to enter a message to the studio
                regarding how you intend to use the studio, any specific details, requirements,
                or needs regarding the booking request. You can enter your payment information and send
                the booking request to the studio host.
                <br>You will only be charged if the studio accepts your booking request. If they do not
                accept or deny your booking request, it will automatically expire and you will not be
                charged.</br>
              </p>
              <h2>
                User Accounts / Payments / Reviews
              </h2>
              <h3 id="questions" className={css.subtitle}>
                How do I create an account?
              </h3>
              <p>
                You can create a user account in seconds with the following steps:
                <ol type="1">
                  <li>Click "Sign up" in the top right.</li>
                  <li>Enter your email address and create a secure password.</li>
                  <li>Check your inbox and confirm you email address.</li>
                </ol>
              </p>
              <h3 id="questions" className={css.subtitle}>
                How can I delete my account?
              </h3>
              <p>
                If you would like to permanently delete your Jiffystudio user account, please email us
                at hello@jiffy.studio.
              </p>
              <p>
                Check back soon for more FAQs.
              </p>
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

export default HelpPage;
