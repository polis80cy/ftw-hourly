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
          <h1 className={css.pageTitle}>Make your studio accessible to every photographer out there.</h1>
          <img className={css.coverImage} src={image} alt="About us." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Host your studio on Jiffystudio and earn extra income.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Do you have a creative space you can call studio?
              </h2>

              <p>
                Whether it is a professional space or just your living room, if you have the
                equipment necessary to call it a photography studio, you can monetize your place by hosting
                it on Jiffystudio and making it available to a global community of photographers
                looking for creative spaces for their next photoshoot. Make it work for you by
                choosing when to make your studio available for bookings, and how much to charge for it,
                all through Jiffystudio.
              </p>

              <h3 className={css.subtitle}>Still not convinced?</h3>

              <p>
                Jiffystudio offers you a platform through which you can reach photographaphy
                practitioners and creatives globally. Offering your studio through Jiffystudio
                presents you with the real possibility to earn extra income.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Get social
              </h3>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
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

export default AboutPage;
