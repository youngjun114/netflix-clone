import React, { useState } from 'react';
import MainHeader from '../main_header/main_header';
import MainBanner from '../main_banner/main_banner';
import styles from './home.module.css';
import VideoList from '../video_list/video_list';
import requests from '../../service/fetch_url';

const Home = () => {
  return (
    <>
      <MainHeader />
      <MainBanner fetchUrl={requests.fetchNetflix} />
      <VideoList
        isLarge={true}
        label='Only On Netflix'
        fetchUrl={requests.fetchNetflix}
      />
      <VideoList label='Trending' fetchUrl={requests.fetchTrending} />
      <VideoList label='Comedy' fetchUrl={requests.fetchComedy} />
      <VideoList label='Action' fetchUrl={requests.fetchAction} />
      <VideoList label='Animation' fetchUrl={requests.fetchAnimation} />
    </>
  );
};

export default Home;
