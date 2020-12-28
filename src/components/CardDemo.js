import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//       marginTop: 20,
//       margin: 'auto'
//     }
//   });
export default (props) => {
  //const classes = useStyles();

  return (
    <div className="cardDemo">
      <Card style={{ maxWidth: 345, margin: "auto", marginTop: 20 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.block.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.block.body2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

//export default CardDemo;
