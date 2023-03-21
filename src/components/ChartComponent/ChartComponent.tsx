import React, { useId } from 'react';
import { a11yProps, chunk } from './chartComponentHelpers';
import moment from 'moment-timezone';
import { TimeFormatEnum } from '../../types/timeFormatEnum';
import { TabPanelDataType } from './chartComponentTypes';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import TabPanelComponent from './TabPanelComponent';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ChartComponentPropTypes = {
  hours: Date[];
  data: number[];
  unit: string;
  expanded: boolean;
  setExpanded: () => void;
  title: string;
};

const ChartComponent = ({
  hours,
  data,
  unit,
  setExpanded,
  expanded,
  title,
}: ChartComponentPropTypes) => {
  const id = useId();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const dailyHours = chunk(hours, 24);
  const dailyData = chunk(data, 24);
  const ariaTitle = title.replace(' ', '-').toLowerCase();

  const chartData = dailyHours.map((hours, i) => {
    const res: TabPanelDataType = {
      label: '',
      data: [],
    };

    res.label = moment(hours[0]).format(TimeFormatEnum.DATE);

    res.data = hours.map((h, j) => ({
      name: moment(h).format(TimeFormatEnum.TIME),
      value: dailyData[i][j],
    }));

    return res;
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Accordion expanded={expanded} onChange={setExpanded}>
      <AccordionSummary
        aria-controls={`${ariaTitle}-content`}
        id={id}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant='h6'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label={`${ariaTitle}-tab`}
              variant='scrollable'
              scrollButtons='auto'
              allowScrollButtonsMobile
            >
              {chartData.map((chart, index) => (
                <Tab key={index} label={chart.label} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>

          {chartData.map((chart, index) => (
            <TabPanelComponent key={index} value={value} index={index}>
              <ResponsiveContainer height={250} width='100%'>
                <LineChart data={chart.data} margin={{ right: 25, top: 10 }}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' stroke={theme.palette.text.primary} />
                  <YAxis stroke={theme.palette.text.primary} />
                  <Tooltip
                    formatter={(value) => `${value}${unit}`}
                    contentStyle={{
                      backgroundColor: theme.palette.background.default,
                      fontWeight: 'bold',
                    }}
                  />
                  <Line
                    type='monotone'
                    dataKey='value'
                    stroke={theme.palette.text.secondary}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabPanelComponent>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ChartComponent;
