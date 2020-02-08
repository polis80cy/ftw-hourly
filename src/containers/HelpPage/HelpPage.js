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
                What is Jiffystudio?
              </h2>
              <p>
                Think of us as Airbnb for photo studios. Our vision is to become the largest global
                marketplace for booking photo studios. Our mission is to make photo studios accessible
                by all photographers around the world, and help studios generate more bookings by hosting
                global talent.
              </p>
              <h2>
                What are your charges?
              </h2>
              <p>
                We currently charge studio hosts a 15% commission fee for all bookings completed on Jiffystudio.
                This fee is automatically deducted from your booking total once you accept the request. There is
                no commission charge for photographers looking to book studios.
              </p>
              <h2>
                [For studio hosts] How do I add payout information?
              </h2>
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
                If at any time you need help with this, please email us at <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>.
              </p>
              <h2>
                How can I request to book a photo studio?
              </h2>
              <p>
                You can book a photo studio by creating a user account, if you have not done so already.
                Once you do, find a studio you'd like to visit, select a date and time, and click
                “Request to book”. On the next page, you will be able to enter a message to the studio
                regarding how you intend to use the studio, any specific details, requirements,
                or needs regarding the booking request. You can enter your payment information and send
                the booking request to the studio host.
                You will only be charged if the studio accepts your booking request. If they do not
                accept or deny your booking request, it will automatically expire and you will not be
                charged.
              </p>
              <h2>
                Do I need to create an account?
              </h2>
              <p>
                You can discover and browse photo studios without an account. However, to message a studio,
                request a booking, or list your own studio, you will be prompted to create a user account.
                All user accounts require email verification. You must also add further verification and
                payment information when listing your studio (required by Stripe for payouts).
              </p>
              <h2>
                How can I create an account?
              </h2>
              <p>
                You can create a user account in seconds with the following steps:
                <ol type="1">
                  <li>Click "Sign up" in the top right (accessible through the menu on the top left if on mobile).</li>
                  <li>Enter your email address and create a secure password.</li>
                  <li>Check your inbox and confirm you email address.</li>
                </ol>
              </p>
              <h2>
                How can I delete my account?
              </h2>
              <p>
                If you would like to permanently delete your Jiffystudio user account, please email us
                at <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>.
              </p>
              <h2>
              [For studio hosts] Can I list my studio for free?
              </h2>
              <p>
                Yes, listings are free. We only charge a commission when a booking has been accepted.
              </p>
              <h2>
              [For studio hosts] How can I enforce a cancellation policy?
              </h2>
              <p>
                We have a standard Cancellation Policy (see our terms & policies page). We empower studios
                and photographer to communicate their availability directly. Changes in dates, booking
                modifications, cancellations, and rescheduling, all happen in accordance with our
                Cancellation Policy. In the event that this can not be agreed upon directly with the other party,
                you can email us at <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>.
              </p>
              <h2>
                I accepted a booking request. When will the money enter my bank account?
              </h2>
              <p>
                The amount that you made from the booking will appear in the bank account that you entered
                in your payout information within a few business days following the booking date (typically
                7-10 business days for the first booking, and much sooner for subsequent bookings). This
                process is handled by Stripe. Rest assured that once you accept a booking request, the person
                that booked your studio has already been charged for the booking and paid for it. If you
                have any questions about this at any time, please email us at <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>.
              </p>
              <p>
                <b>Check back soon for more FAQs.</b>
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
