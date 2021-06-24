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
      <section>
        <VideoList label='Only On Netflix' fetchUrl={requests.fetchNetflix} />
      </section>
    </>
  );
};

export default Home;
