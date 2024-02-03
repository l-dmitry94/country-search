import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) {
      return;
    }
    const searchCountry = async () => {
      try {
        setIsLoading(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    searchCountry();
  }, [searchParams]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading>Something went wrong {error}</Heading>}
        <SearchForm search={setSearchParams} searchParams={searchParams} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
