import Images from 'constants/images';
import React from 'react';
import Banner from 'components/Banner';
import { Link } from 'react-router-dom';
MainPage.propTypes = {};

function MainPage(props) {
  
  return (
    <div className="photo-main">
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
      </div>
      <h1>MainPage</h1>
    </div>
  );
}

export default MainPage;