import Images from '../../../../constants/images';
import React from 'react';
import Banner from '../../../../components/Banner';

MainPage.propTypes = {};

function MainPage(props) {
  
  return (
    <div className="photo-main">
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <h1>MainPage</h1>
    </div>
  );
}

export default MainPage;