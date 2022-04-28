import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="white"
          indicatorColor="primary"
        >
          <Tab label="question" {...a11yProps(0)} />
          <Tab label="Topics" {...a11yProps(1)} />
          <Tab label="follow up" {...a11yProps(2)} />
          <Tab label="action item" {...a11yProps(3)} />
          <Tab label="tracker" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {props.questions.map((question) => (
          <Chip
            sx={{ color: "white", fontSize: "14px" }}
            label={question}
            key={question}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.topics.map((topic) => (
          <Chip
            sx={{ color: "white", fontSize: "14px" }}
            label={topic}
            key={topic}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.followUps.map((followUp) => (
          <Chip
            sx={{ color: "white", fontSize: "14px" }}
            label={followUp}
            key={followUp}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {props.actionItems.map((actionItem) => (
          <Chip
            sx={{ color: "white", fontSize: "14px" }}
            label={actionItem}
            key={actionItem}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {props.trackers.map((tracker) => (
          <Chip
            sx={{ color: "white", fontSize: "14px" }}
            label={tracker}
            key={tracker}
          />
        ))}
      </TabPanel>
    </Box>
  );
}
