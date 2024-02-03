import { Grid, GridItem } from 'components';
import { Fragment } from 'react';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, flag }) => {
        return (
          <Fragment key={id}>
            {id === 'Russia' ? null : (
              <GridItem key={id}>
                <img src={flag} alt={id} />
              </GridItem>
            )}
          </Fragment>
        );
      })}
    </Grid>
  );
};
