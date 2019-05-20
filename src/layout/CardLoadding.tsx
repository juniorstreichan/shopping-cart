import React, { Fragment } from 'react';
import { Grid, Segment, Placeholder } from 'semantic-ui-react';

const CardLoadding: React.FC<{ numOfCards?: number }> = ({ numOfCards = 3 }) => {
  const arr = new Array(numOfCards).fill({});
  return (
    <Fragment>
      {arr.map((_, index) => (
        <Grid.Column key={index + 1 * 9} mobile={16} tablet={8} computer={5}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      ))}
    </Fragment>
  );
};

export default CardLoadding;
