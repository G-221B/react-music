import React, { memo } from 'react';

import GGThemeHeaderRcm from '@/components/theme-header-rcm';

export default memo(function GGNewAlbum() {
  return (
    <div>
      <GGThemeHeaderRcm title='新碟上架' />
      <h2>GGNewAlbum</h2>
    </div>
  );
});
