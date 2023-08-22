import * as React from 'react';

import ProductTags from './ProductTags';
import { Avatar, Box, Button, ButtonGroup, Divider, Rating, Stack, Tab, Tabs, Typography } from '@mui/material';

import red from '../static/images/swatches/red.png';
import pink from '../static/images/swatches/pink.png';
import blue from '../static/images/swatches/blue.png';
import green from '../static/images/swatches/green.png';
import lightgreen from '../static/images/swatches/lightgreen.png';
import purple from '../static/images/swatches/purple.png';
import yellow from '../static/images/swatches/yellow.png';
import orange from '../static/images/swatches/orange.png';

export default function Metadata(props) {
    const [value, setValue] = React.useState('Regular');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const buttonVariant = props.isSizeSelected ? "contained" : "outlined";

    return (
        <div>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridAutoColumns: '1fr',
                        gap: 1,
                        marginTop: 4,
                        marginLeft: 2,
                        marginBottom: 2
                    }}
                >
                    <Box sx={{ gridRow: '1', gridColumn: 'span 3' }}>
                        <Typography variant="h6" gutterBottom>
                            <b>
                                {props.isPocketTshirtSelected ?  props.styleData.styleName : 'Original T-Shirt'}
                            </b>
                        </Typography>
                    </Box>
                    <Box sx={{ gridRow: '1', gridColumn: '4 / 5' }}>
                        <Rating name="read-only" value={props.isPocketTshirtSelected ? props.styleData.reviewScore : 4} readOnly />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridAutoColumns: '1fr',
                        gap: 1,
                        marginLeft: 2,
                        marginBottom: 2
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        $19.95
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {props.isPocketTshirtSelected ?  props.styleData.styleDesc : 'Original T-Shirt'}
                    </Typography>
                </Box>
                <Typography sx={{ marginLeft: 2, marginRight: 2 }} variant="body2" display="block" gutterBottom>
                    $8
                </Typography>
                <Divider sx={{ marginLeft: 2, marginRight: 2, marginBottom: 2 }} />
                <Stack direction="row" spacing={1} sx={{ marginLeft: 19, marginRight: 2, marginTop: 2, marginBottom: 2 }}>
                    <Avatar
                        alt="Remy Sharp"
                        src={blue}
                        sx={{ width: 35, height: 35 }}
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src={red}
                        sx={{ width: 35, height: 35 }}
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src={yellow}
                        sx={{ width: 35, height: 35 }}
                    />
                </Stack>
                <Typography sx={{ marginLeft: 2, marginRight: 2 }} variant="body2" display="block" gutterBottom>
                    $15
                </Typography>
                <Divider sx={{ marginLeft: 2, marginRight: 2, marginBottom: 2 }} />
                <Stack direction="row" spacing={1} sx={{ marginLeft: 19, marginRight: 2, marginTop: 2, marginBottom: 2 }}>
                    <Avatar
                        alt="Remy Sharp"
                        src={green}
                        sx={{ width: 35, height: 35 }}
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src={lightgreen}
                        sx={{ width: 35, height: 35 }}
                    />
                </Stack>
                <Typography sx={{ marginLeft: 2, marginRight: 2 }} variant="body2" display="block" gutterBottom>
                    $22
                </Typography>
                <Divider sx={{ marginLeft: 2, marginRight: 2, marginBottom: 2 }} />
                <Stack direction="row" spacing={1} sx={{ marginLeft: 19, marginRight: 2, marginTop: 2, marginBottom: 2 }}>
                    <Avatar
                        alt="Remy Sharp"
                        src={orange}
                        sx={{ width: 35, height: 35 }}
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src={pink}
                        sx={{ width: 35, height: 35 }}
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src={purple}
                        sx={{ width: 35, height: 35 }}
                    />
                </Stack>

                <Box sx={{ marginLeft: 2, marginRight: 2 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value}
                            onChange={handleChange}>
                            <Tab value="Regular" label="Regular" />
                            <Tab value="Tall" label="Tall" />
                        </Tabs>
                    </Box>
                    <ButtonGroup sx={{ marginTop: 1, marginLeft: 15 }} variant="text" aria-label="text button group">
                        <Button variant="outlined">S</Button>
                        <Button variant={buttonVariant} onClick={props.handleSizeSelection}>L</Button>
                        <Button variant="outlined">XL</Button>
                    </ButtonGroup>
                </Box>
            </div>
            <ProductTags />
        </div>
    );
}