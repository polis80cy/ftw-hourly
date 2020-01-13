import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CancellationPolicy.css';

const CancellationPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: January 11, 2020</p>
      
      <p>
        If a confirmed booking needs to be cancelled either by a photographer booking a studio
        or the studio itself, then this Cancellation Policy applies. We encourage both
        photographers and studios to communicate directly in the event of a cancellation as
        soon as possible, and also immediately <a href="mailto:hello@jiffy.studio">contact Jiffystudio</a> to
        initiate the cancellation process.
      </p>
      
      <p className={css.table}>
        <table >
          <tr>
            <th>Cancellation Date</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>Refund Amount</th>
          </tr>
          <tr>
            <td>Booking request still pending</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>100% incl. platform fee</td>
          </tr>
          <tr>
            <td>14 days or less to booking date</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>100% excl. platform fee</td>
          </tr>
          <tr>
            <td>7 days or less to booking date</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>50% excl. platform fee</td>
          </tr>
          <tr>
            <td>2 days or less to booking date</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>0%</td>
          </tr>
        </table>
      </p>
      
      <p>
        <h3>Jiffystudio Initiated Cancellations</h3>
      </p>
      <p>
        In some circumstances, Jiffystudio may decide to cancel a booking and initiate a
        refund to both parties in accordance with this Cancellation Policy. Such circumstances
        may include knowledge of potential illegal activity or harm, risk or safety concerns,
        or any other scenario requiring such response.
      </p>

    </div>
  );
};

CancellationPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

CancellationPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default CancellationPolicy;
