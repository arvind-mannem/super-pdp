import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import logo from '../static/images/logo.png';

export default function TabHeader() {
  const [value, setValue] = React.useState('Men');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: 70, height: 56 }}
        />
        <Tab value="New" label="New" />
        <Tab value="Men" label="Men" />
        <Tab value="Women" label="Women" />
        <Tab value="Girls" label="Girls" />
        <Tab value="Boys" label="Boys" />
        <Tab value="Toddler" label="Toddler" />
        <Tab value="Baby" label="Baby" />
        <Tab value="School" label="School" />
        <Tab value="Maternity" label="Maternity" />
        <Tab value="Jeans" label="Jeans" />
        <Tab value="Sale" label="Sale" />
        <Tab value="Factory" label="Factory" />
        <Tab value="Art" label="Art" />
        <Tab value="Find A Store" label="Find A Store" />
      </Tabs>
    </Box>
  );
}