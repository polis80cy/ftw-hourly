import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import sgImage from './images/sg-jiffy.jpg';
import laImage from './images/la-yogi.jpg';
import sfImage from './images/sf-yogi.jpg';
import lonImage from './images/lon-jiffy.jpeg';
import readImage from './images/read-jiffy.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Singapore',
          sgImage,
          '?address=Singapore&bounds=1.4779199%2C104.406654%2C1.1308576%2C103.5742042'
        )}
        {locationLink(
          'London',
          lonImage,
          '?address=London%2C%20Greater%20London%2C%20England%2C%20United%20Kingdom&bounds=51.669993%2C0.152641%2C51.384598%2C-0.35167'
        )}
        {locationLink(
          'Reading',
          readImage,
          '?address=Reading%2C%20Reading%2C%20England%2C%20United%20Kingdom&bounds=51.5597%2C-0.771487%2C51.328191%2C-1.248574'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
