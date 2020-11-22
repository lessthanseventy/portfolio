import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-carbon/home';
import bookIcon from '@iconify/icons-carbon/book';

const PortfolioHeader = () => (
  <Header aria-label="lessthanseventy">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="<70"></HeaderName>
    <HeaderNavigation aria-label="lessthanseventy"></HeaderNavigation>
    <HeaderGlobalBar>
      <Link to="/projects">
        <HeaderGlobalAction aria-label="Blog">
          <Icon icon={bookIcon} color="#FFF" />
        </HeaderGlobalAction>
      </Link>
    </HeaderGlobalBar>
  </Header>
);

export default PortfolioHeader;
