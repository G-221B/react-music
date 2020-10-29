import React, { memo } from 'react';

import { footerLinks, footerImages } from '@/common/local-data';

import { FooterWarpper } from './style';

export default memo(function GGFooter() {
  return (
    <FooterWarpper>
      <div className='box wrap-v2'>
        <div className='box-left'>
          <div className='music-link'>
            {footerLinks.map((item) => {
              return (
                <div key={item.title}>
                  <a href={item.link}>{item.title}</a>
                  <span>|</span>
                </div>
              );
            })}
          </div>
          <p>
            <span>网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
          </p>
          <p>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：<a href='#/'>ncm5990@163.com</a>
            </span>
          </p>
          <p>
            <span>粤B2-20090191-18</span>
            <span>
              <a href='#/'>工业和信息化部备案管理系统网站</a>
            </span>
            <span>
              <a href='#/'>浙公网安备 33010902002564号</a>
            </span>
          </p>
        </div>
        <div className='box-right'>
          <div className='image-link'>
            {footerImages.map((item) => {
              return (
                <div key={item.link} className='image-item'>
                  <a href={item.link} className='image'>
                    {''}
                  </a>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FooterWarpper>
  );
});
