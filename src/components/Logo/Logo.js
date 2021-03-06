import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconLogo from './IconLogo';
import css from './Logo.css';
// additions
import config from '../../config';
import LogoImage from './jiffy-logo.png';

const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  // If you want to use image instead of svg as a logo you can use the following code.
  // Also, remember to import the image as LogoImage here.
  if (format === 'desktop') {
    return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />
  }

  return (
    <IconLogo
      className={format === 'desktop' ? className : mobileClasses}
      format={format}
      {...rest}
    />
  );
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
