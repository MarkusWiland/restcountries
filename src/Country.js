import React from 'react';
import styled from 'styled-components';
function Country({ country }) {
  return (
    <Content img={country.flag}>
      <div className="content-imgBox">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="content-info">
        <h1>{country.name}</h1>
        <div>
          Språk:
          {country.languages.map((lang) => (
            <span key={lang}> {lang.name}</span>
          ))}
        </div>
        <div>
          Valuta:
          {country.currencies.map((curr) => (
            <span key={curr}> {curr.code}</span>
          ))}
        </div>
        <p>Huvudstad: {country.capital}</p>
        <p>Region: {country.subregion}</p>
        <p>
          Invånare: {new Intl.NumberFormat('sv-SV').format(country.population)}
        </p>
      </div>
    </Content>
  );
}
const Content = styled.div`
  padding: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  position: relative;
  :before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    opacity: 0.3;
  }
`;
export default Country;
