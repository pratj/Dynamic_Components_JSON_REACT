import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
    margin: "auto"
  }
});
export default (props) => {
  const classes = useStyles();
  const initialCardInfo = {
    category: "",
    partner: ""
  };
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [count, setCount] = useState(0);
  const handleCardState = (cardInfo) => {
    setCardInfo({
      category: props.block.title,
      partner: props.block.body2
    });
    // console.log("------------------", cardInfo);
  };

  return (
    <Grid>
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
            <Button
              size="small"
              color="primary"
              onClick={() => setCount(count + 1)}
            >
              Share {count}
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleCardState()}
            >
              Learn More {cardInfo.category} {cardInfo.partner}
              {console.log("------------------", cardInfo)}
            </Button>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};
