import { Box } from "@mui/material";

import Images from "./Images";
import Metadata from "./Metadata";
import TabHeader from "./TabHeader";
import SimilarStyles from "./SimilarStyles";
import { useState } from "react";

function Page() {

    const pocketStyle = {
        "styleName": "Heavyweight Relaxed Fit Pocket T-Shirt",
        "styleDesc": "Heavyweight Relaxed Fit Pocket T-Shirt",
        "reviewScore": 5
    };
    const [sizeSelected, setSizeSelected] = useState(false);
    const [pocketTshirtSelected, setPocketTshirtSelected] = useState(false);

    const handleSizeSelection = () => {
        setSizeSelected(!sizeSelected);
    }

    const handlePocketTshirtSelected = () => {
        setPocketTshirtSelected(!pocketTshirtSelected);
    }

    return (
        <div className="Page">
            <TabHeader />
            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Images isPocketTshirtSelected={pocketTshirtSelected} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Metadata isPocketTshirtSelected={pocketTshirtSelected} handleSizeSelection={handleSizeSelection} isSizeSelected={sizeSelected} styleData={pocketStyle}/>
                    </Box>
                </Box>
                <SimilarStyles isPocketTshirtSelected={pocketTshirtSelected} handlePocketTshirtSelected={handlePocketTshirtSelected} isSizeSelected={sizeSelected} />
            </div>
        </div>
    );
}

export default Page;
