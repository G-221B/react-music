import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getCurrentSongAction } from '../store/actionCreators';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format_utils';

import { Slider } from 'antd';
import { AppPlayerBarWrapper, Operator, Content, PlayInfo } from './style';
export default memo(function GGAppPlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const viedoRef = useRef();
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const duration = formatDate(currentSong.dt, 'mm:ss');

  useEffect(() => {
    dispatch(getCurrentSongAction(167876));
  }, [dispatch]);

  const playSong = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      viedoRef.current.pause();
    } else {
      setIsPlaying(true);
      viedoRef.current.play();
    }
  }, [viedoRef, isPlaying]);
  const timeUpdate = useCallback(() => {
    if (!isChange) {
      setProgress((viedoRef.current.currentTime * 1000 * 100) / currentSong.dt);
    }
    setCurrentTime(viedoRef.current.currentTime * 1000);
  }, [currentSong.dt, isChange]);
  const change = useCallback((value) => {
    setProgress(value);
    setIsChange(true);
  }, []);
  const afterChange = useCallback(
    (value) => {
      viedoRef.current.currentTime = (value * 0.01 * currentSong.dt) / 1000;
      setIsPlaying(true);
      viedoRef.current.play();
      setIsChange(false);
    },
    [currentSong.dt]
  );
  return (
    <AppPlayerBarWrapper className='sprite_playerbar'>
      <div className='wrap-v2 container'>
        <Content isPlaying={isPlaying}>
          <button className='btn btn-prev sprite_playerbar'></button>
          <button
            className='btn btn-switch sprite_playerbar'
            onClick={playSong}
          ></button>
          <button className='btn btn-next sprite_playerbar'></button>
        </Content>
        <PlayInfo>
          <div className='img-box'>
            <img src={getSizeImage(picUrl, 35)} alt='' />
          </div>
          <div className='info-box'>
            <span className='song-name'>{currentSong.name}</span>
            <span className='singer-name'>{singerName}</span>
            <div className='progress'>
              <Slider
                value={progress}
                onChange={change}
                onAfterChange={afterChange}
              />
              <span className='current-time'>
                {formatDate(currentTime, 'mm:ss')}
              </span>
              <span className='divide'>/</span>
              <span className='duration'>{duration}</span>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='operator-left'>
            <button className='add sprite_playerbar'></button>
            <button className='share sprite_playerbar'></button>
          </div>
          <div className='operator-right'>
            <button className='voice sprite_playerbar'></button>
            <button className='mode sprite_playerbar'></button>
            <button className='playlist sprite_playerbar'></button>
          </div>
        </Operator>
      </div>
      <video
        src={getPlaySong(currentSong.id)}
        ref={viedoRef}
        onTimeUpdate={timeUpdate}
      />
    </AppPlayerBarWrapper>
  );
});
