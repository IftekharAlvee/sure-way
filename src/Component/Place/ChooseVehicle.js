import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
// import Timeline from '@material-ui/lab/Timeline';
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Checkbox from "@material-ui/core/Checkbox";

// export default function Checkboxes() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

const ChooseVehicle = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const { id, name, image } = props.check;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      {props.confirm ? (
        <div>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Pickup</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Your location</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Your destination</TimelineContent>
            </TimelineItem>
          </Timeline>

          <List className={classes.root}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={image} />
              </ListItemAvatar>
              <ListItemText
                primary="Platinum"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Price
                    </Typography>
                    {" - 67$"}
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={image} />
              </ListItemAvatar>
              <ListItemText
                primary="Gold"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Price
                    </Typography>
                    {" — 43$"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={image} />
              </ListItemAvatar>
              <ListItemText
                primary="Bronz"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Price
                    </Typography>
                    {" — 20$"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      ) : (
        <p>Order Done</p>
      )}
    </div>
  );
};

export default ChooseVehicle;
