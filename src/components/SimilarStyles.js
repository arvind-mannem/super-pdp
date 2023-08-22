import { Avatar, Box, Button, Card, CardActions, CardMedia, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";

import blueStyle from '../static/images/blueTshirt1.png';
import greenStyle from '../static/images/greenTshirt.png'
import pinkStyle from '../static/images/pinkTshirt.png'
import blackStyle from '../static/images/blackTshirt.png'
import whiteStyle from '../static/images/whiteTshirt.png'
import spidermanTshirt from '../static/images/spidermanTshirt.png'

import red from '../static/images/swatches/red.png';
import black from '../static/images/swatches/black.png';
import blackStrike from '../static/images/swatches/blackStrike.png';
import redStrike from '../static/images/swatches/redStrike.png';
import blueStrike from '../static/images/swatches/blueStrike.png';
import white from '../static/images/swatches/white.png';
import pink from '../static/images/swatches/pink.png';
import brown from '../static/images/swatches/brown.png';
import blue from '../static/images/swatches/blue.png';
import green from '../static/images/swatches/green.png';
import lightgreen from '../static/images/swatches/lightgreen.png';
import purple from '../static/images/swatches/purple.png';
import orange from '../static/images/swatches/orange.png';

export default function SimilarStyles(props) {

    const theme = createTheme({
        typography: {
            fontFamily: 'Arial',
            fontSize: 18
        }
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Typography sx={{ marginLeft: 5 }}>SIMILAR STYLES</Typography>
            </ThemeProvider>
            <Box sx={{ marginTop: 1, marginLeft: 5, marginRight: 3, marginBottom: 20, display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Card sx={{ maxWidth: 230 }}>
                        <CardMedia
                            sx={{ height: 280 }}
                            image={props.isPocketTshirtSelected ? blueStyle :greenStyle}
                            title="green iguana"
                        />
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                                <Button onClick={props.handlePocketTshirtSelected}></Button>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={green}
                                    sx={{ width: 20, height: 20 }}
                                />
                                <Avatar
                                    alt="Remy Sharp"
                                    src={lightgreen}
                                    sx={{ width: 20, height: 20 }}
                                />
                                {
                                    props.isSizeSelected ?
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={blackStrike}
                                            sx={{ width: 25, height: 25 }}
                                        /> : <Avatar
                                            alt="Remy Sharp"
                                            src={black}
                                            sx={{ width: 20, height: 20 }}
                                        />
                                }
                            </Stack>
                        </CardActions>
                    </Card>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Card sx={{ maxWidth: 230 }}>
                        <CardMedia
                            sx={{ height: 280 }}
                            image={pinkStyle}
                            title="green iguana"
                        />
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                            {
                                    props.isSizeSelected ?
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={redStrike}
                                            sx={{ width: 25, height: 25 }}
                                        /> : <Avatar
                                            alt="Remy Sharp"
                                            src={red}
                                            sx={{ width: 20, height: 20 }}
                                        />
                                }
                                <Avatar
                                    alt="Remy Sharp"
                                    src={pink}
                                    sx={{ width: 20, height: 20 }}
                                />
                                <Avatar
                                    alt="Remy Sharp"
                                    src={purple}
                                    sx={{ width: 20, height: 20 }}
                                />
                            </Stack>
                        </CardActions>
                    </Card>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Card sx={{ maxWidth: 230 }}>
                        <CardMedia
                            sx={{ height: 280 }}
                            image={blackStyle}
                            title="green iguana"
                        />
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={black}
                                    sx={{ width: 20, height: 20 }}
                                />
                                {
                                    props.isSizeSelected ?
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={blueStrike}
                                            sx={{ width: 25, height: 25 }}
                                        /> : <Avatar
                                            alt="Remy Sharp"
                                            src={blue}
                                            sx={{ width: 20, height: 20 }}
                                        />
                                }
                                <Avatar
                                    alt="Remy Sharp"
                                    src={orange}
                                    sx={{ width: 20, height: 20 }}
                                />
                            </Stack>
                        </CardActions>
                    </Card>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Card sx={{ maxWidth: 230 }}>
                        <CardMedia
                            sx={{ height: 280 }}
                            image={whiteStyle}
                            title="green iguana"
                        />
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={white}
                                    sx={{ width: 20, height: 20 }}
                                />
                                <Avatar
                                    alt="Remy Sharp"
                                    src={purple}
                                    sx={{ width: 20, height: 20 }}
                                />
                                <Avatar
                                    alt="Remy Sharp"
                                    src={green}
                                    sx={{ width: 20, height: 20 }}
                                />
                            </Stack>
                        </CardActions>
                    </Card>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Card sx={{ maxWidth: 230 }}>
                        <CardMedia
                            sx={{ height: 280 }}
                            image={spidermanTshirt}
                            title="green iguana"
                        />
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={black}
                                    sx={{ width: 20, height: 20 }}
                                />
                                <Avatar
                                    alt="Remy Sharp"
                                    src={blue}
                                    sx={{ width: 20, height: 20 }}
                                />
                                <Avatar
                                    alt="Remy Sharp"
                                    src={brown}
                                    sx={{ width: 20, height: 20 }}
                                />
                            </Stack>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </>
    );
}