import React from 'react';
import { Box, Typography } from '@mui/material';

type TabPanelComponentPropsType = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanelComponent = ({ children, value, index, ...other }: TabPanelComponentPropsType) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`chart-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanelComponent;
