import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imageURL1 from '../static/images/blueTshirt1.png';
import imageURL2 from '../static/images/blueTshirt2.png';
import imageURL3 from '../static/images/blueTshirt3.png';
import imageURL4 from '../static/images/blueTshirt4.png';
import imageURL5 from '../static/images/greenTshirt.png';
import imageURL6 from '../static/images/greenTshirt2.png';
import imageURL7 from '../static/images/greenTshirt3.png';
import imageURL8 from '../static/images/greenTshirt4.png';

export default function Images(props) {

  return (
    <ImageList sx={{ width: 1000, height: 1000, marginLeft: 4 }} cols={2} rowHeight={200}>
      {
        props.isPocketTshirtSelected ?
        pocketStyleData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))
      :
      itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))
    }
    </ImageList>
  );
}

const itemData = [
  {
    img: imageURL1,
    title: 'blue shirt 1',
  },
  {
    img: imageURL2,
    title: 'blue shirt 2',
  },
  {
    img: imageURL3,
    title: 'blue shirt 3',
  },
  {
    img: imageURL4,
    title: 'blue shirt 4',
  }
];

const pocketStyleData = [
  {
    img: imageURL5,
    title: 'green shirt 1',
  },
  {
    img: imageURL6,
    title: 'green shirt 2',
  },
  {
    img: imageURL7,
    title: 'green shirt 3',
  },
  {
    img: imageURL8,
    title: 'green shirt 4',
  }
];