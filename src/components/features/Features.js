import React from 'react';

import pic1 from '../../images/capsule.jpg';
import pic2 from '../../images/accountabudmobile.jpg';
import pic4 from '../../images/pixionary.jpg';
import pic3 from '../../images/gardenizer.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic1,
      heading: 'Capsule Closet',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic2,
      heading: 'Accountabud',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },

    {
      href: '/#',
      image: pic4,
      heading: 'Pixionary',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic3,
      heading: 'Gardenizer',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="two" className="wrapper style1 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
