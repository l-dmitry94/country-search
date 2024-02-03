import { Grid, GridItem } from 'components';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, flag }) => {
        return (
          <Fragment key={id}>
            {id === 'Russia' ? null : (
              <GridItem key={id}>
                <Link to={`/country/${id}`}>
                  <img src={flag} alt={id} />
                </Link>
              </GridItem>
            )}
          </Fragment>
        );
      })}
    </Grid>
  );
};
