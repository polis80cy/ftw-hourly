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
              <p>
                Check back soon for more FAQs.
              </p>
              <h2>
                Studios / Hosts
              </h2>
              <h2>
                Photographers / Creatives
              </h2>
              <h2>
                Account / Payments / Reviews
              </h2>
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
