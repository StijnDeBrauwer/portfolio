import React, {useState} from 'react';

import HomeSection from 'src/components/sections/home/home.component';
import Hamburger from 'src/components/navigation/hamburger/hamburger.component';
import AboutSection from 'src/components/sections/about/about.component';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Hamburger open={open} setOpen={setOpen} />
      <HomeSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
