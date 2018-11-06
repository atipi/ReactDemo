import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: "auto"
  },
  media: {
    height: 140
  }
};

class IntegrationQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "Y"
    };
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/images/integration_pic.png"
            title="Integration packages"
          />

          <CardContent>
            <div>
              <Typography variant="caption">
                We provide many kind of integrations from easy to complex ones.
                Basic one for starting are payment and logistic.
              </Typography>
            </div>
            <div>
              <Typography>
                Would you like to have customised integration in used?
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>
            <Radio
              checked={this.state.selectedValue === "Y"}
              onChange={this.handleChange}
              value="Y"
              name="YesOption"
              aria-label="Y"
            />
            <span>Yes</span>
            <Radio
              checked={this.state.selectedValue === "N"}
              onChange={this.handleChange}
              value="N"
              name="NoOption"
              aria-label="N"
            />
            <span>No</span>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(IntegrationQuestion);
