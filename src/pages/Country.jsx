import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { countryId } = useParams();
  const location = useLocation();
  const backButton = location?.state?.from ?? '/';
  useEffect(() => {
    const getCountry = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCountry(countryId);
        setCountry(data);

        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, [countryId]);
  const { flag, capital, countryName, id, languages, population } = country;
  return (
    <>
      {loading && <Loader />}
      {error && <Heading>Something went wrong {error}</Heading>}
      <Section>
        <Container>
          <CountryInfo
            flag={flag}
            capital={capital}
            countryName={countryName}
            id={id}
            languages={languages}
            population={population}
          />
        </Container>
        <Link to={backButton}>goback</Link>
      </Section>
    </>
  );
};
