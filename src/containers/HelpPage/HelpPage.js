import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import Collapsible from 'react-collapsible';

import css from './HelpPage.css';
import coll from './Collapsible.scss';

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
              <h2>For everyone</h2>

                <Collapsible
                  tabIndex={0}
                  trigger="What is Jiffystudio?"
                  className={coll.Collapsible}
                  triggerClassName={coll.Collapsible__trigger}
                  triggerOpenedClassName={coll.Collapsible__trigger}
                  contentOuterClassName={coll.Collapsible__contentInner}
                  contentInnerClassName={coll.Collapsible__contentInner}
                >
                  Think of us as Airbnb for photo studios. We are on a mission to become the largest global
                  marketplace for photo studios. We want to make photo studios accessible to any photographer
                  around the world, and at the same time help studio hosts generate more income.
                </Collapsible>
              
                <Collapsible
                  tabIndex={1}
                  trigger="How can I request to book a photo studio?"
                  className={coll.Collapsible}
                  triggerClassName={coll.Collapsible__trigger}
                  triggerOpenedClassName={coll.Collapsible__trigger}
                  contentOuterClassName={coll.Collapsible__contentInner}
                  contentInnerClassName={coll.Collapsible__contentInner}
                >
                  You can book a photo studio by creating a user account, if you have not done so already.
                  Once you do, find a studio you'd like to visit, select a date and time, and click
                  “Request to book”. On the next page, you will be able to enter a message to the studio
                  regarding how you intend to use the studio, any specific details, requirements,
                  or needs regarding the booking request. You can enter your payment information and send
                  the booking request to the studio host.
                  You will only be charged if the studio accepts your booking request. If they do not
                  accept or deny your booking request, it will automatically expire and you will not be
                  charged.
                </Collapsible>
              
                <Collapsible
                  tabIndex={2}
                  trigger="Do I need to create an account?"
                  className={coll.Collapsible}
                  triggerClassName={coll.Collapsible__trigger}
                  triggerOpenedClassName={coll.Collapsible__trigger}
                  contentOuterClassName={coll.Collapsible__contentInner}
                  contentInnerClassName={coll.Collapsible__contentInner}
                >
                  You can discover and browse photo studios without an account. However, to message a studio,
                  request a booking, or list your own studio, you will be prompted to create a user account.
                  All user accounts require email verification. You must also add further verification and
                  payment information when listing your studio (required by Stripe for payouts).
                </Collapsible>

                <Collapsible
                  tabIndex={3}
                  trigger="How can I create an account?"
                  className={coll.Collapsible}
                  triggerClassName={coll.Collapsible__trigger}
                  triggerOpenedClassName={coll.Collapsible__trigger}
                  contentOuterClassName={coll.Collapsible__contentInner}
                  contentInnerClassName={coll.Collapsible__contentInner}
                >
                  You can create a user account in seconds with the following steps:
                    <ol type="1">
                      <li>Click "Sign up" in the top right (accessible through the menu on the top left on mobile).</li>
                      <li>Enter your email address and create a secure password.</li>
                      <li>Check your inbox and confirm you email address.</li>
                    </ol>
                </Collapsible>

                <Collapsible
                  tabIndex={4}
                  trigger="How can I delete my account?"
                  className={coll.Collapsible}
                  triggerClassName={coll.Collapsible__trigger}
                  triggerOpenedClassName={coll.Collapsible__trigger}
                  contentOuterClassName={coll.Collapsible__contentInner}
                  contentInnerClassName={coll.Collapsible__contentInner}
                >
                  If you would like to permanently delete your Jiffystudio user account, please email us
                  at <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>.
                </Collapsible>

                <Collapsible
                  tabIndex={5}
                  trigger="What are your charges?"
                  className={coll.Collapsible}
                  triggerClassName={coll.Collapsible__trigger}
                  triggerOpenedClassName={coll.Collapsible__trigger}
                  contentOuterClassName={coll.Collapsible__contentInner}
                  contentInnerClassName={coll.Collapsible__contentInner}
                >
                  We charge studio hosts with a 15% commission fee for all bookings completed on Jiffystudio.
                  This fee is automatically deducted from the booking total once a host accepts the request.
                  There are no fee charges for photographers looking to book studios.
                </Collapsible>

              <h2>For hosts</h2>

              <Collapsible
                tabIndex={6}
                trigger="Can I list my studio for free?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}
              >
                Yes, listings are free. We only charge a commission when a booking has been accepted.
              </Collapsible>

              <Collapsible
                tabIndex={7}
                trigger="Why do you need my banking info?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}
              >
                If we were to remove the banking info capture from the listing process, there would be no
                payments of any kind. Photographers wouldn't be able to pay at the time of booking
                (and secure your time and services in advance). You wouldn't be able to get
                (pre)paid for your studio services. And we wouldn't be able to maintain a free platform.
              </Collapsible>

              <Collapsible
                tabIndex={8}
                trigger="Why do you ask for my banking info upfront?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}
              >
                To discourage fraudulent listings, and power automatic payouts to you at the time of booking.
              </Collapsible>

              <Collapsible
                tabIndex={9}
                trigger="What happens to my banking info once I share it?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}>
                  We do <b><u>not</u></b> keep any banking info on our platform. The process of capturing
                  your banking info comes from Stripe; The onboarding popup screens you get asking you
                  for that info are presented and hosted by Stripe, completely hidden from us. Your 
                  banking info is kept with Stripe, an international certified payment processor, just
                  like Square, Paypal, and Visa.
              </Collapsible>

              <Collapsible
                tabIndex={10}
                trigger="Why Stripe? Why not Paypal, Square or offline payments?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}
              >
                Stripe has built <a href="https://stripe.com/gb/connect">payment functionality</a> that caters
                specifically to the marketplace model we use. By using <i>Stripe Connect</i>, we power money
                acceptance, commissions, and payouts to third parties automatically. Paypal and Square
                do not offer this functionality. Offline doesn't scale (we are a small team) and would be
                costly to maintain.
              </Collapsible>

              <Collapsible
                tabIndex={11}
                trigger="How do I add payout information?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}
              >
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
              </Collapsible>

              <Collapsible
                tabIndex={12}
                trigger="I accepted a booking request. When will I receive the money?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}
              >
                  The amount that you made from the booking will appear in the bank account that you entered
                  in your payout information within a few business days following the booking date (typically
                  7-10 business days for the first booking, and much sooner for subsequent bookings). This
                  process is handled by Stripe. Rest assured that once you accept a booking request, the person
                  that booked your studio has already been charged for the booking and paid for it. If you
                  have any questions about this at any time, please email us at <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>.
              </Collapsible>

              <Collapsible
                tabIndex={13}
                trigger="How can I enforce a cancellation policy?"
                className={coll.Collapsible}
                triggerClassName={coll.Collapsible__trigger}
                triggerOpenedClassName={coll.Collapsible__trigger}
                contentOuterClassName={coll.Collapsible__contentInner}
                contentInnerClassName={coll.Collapsible__contentInner}
              >
                  We have a <a href="https://www.jiffy.studio/cancellation-privacy-policy">
                  Cancellation Policy</a>. We empower studios and photographers to communicate their
                  availability directly. Changes in dates, booking modifications, cancellations, and
                  rescheduling, all happen in accordance with our Cancellation Policy. In the event
                  that this can not be agreed upon directly with the other party, you can email us
                  at <a href="mailto:hello@jiffy.studio">hello@jiffy.studio</a>.
              </Collapsible>
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
