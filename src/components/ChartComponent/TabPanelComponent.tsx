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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanelComponent;
