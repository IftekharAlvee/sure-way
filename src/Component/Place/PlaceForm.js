import React from "react";
import { Form } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const PlaceForm = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>From</Form.Label>
          <Form.Control type="text" placeholder="From" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>To</Form.Label>
          <Form.Control type="text" placeholder="To" />
        </Form.Group>
      </Form>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
};

export default PlaceForm;
