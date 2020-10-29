import React, { memo } from 'react';

import { UserLoginWrapper } from './style';

export default memo(function GGUserLogin() {
  return (
    <UserLoginWrapper className='sprite_02'>
      <div className='detail'>
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className='sprite_02 login'>用户登陆</div>
    </UserLoginWrapper>
  );
});
