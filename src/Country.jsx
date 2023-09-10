/* eslint-disable react/prop-types */
const Country = ({ country }) => {
  const { name } = country;
  console.log(country);
  return (
    <>
      <h1>{name.common}</h1>
    </>
  );
};

export default Country;
