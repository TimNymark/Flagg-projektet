import "./Region.css";

const Region = ({ setRegion }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleRegionChange = (e) => {
    setRegion(e.target.value); // Updates region in HomePage
  };

  return (
    <div className="region-filter">
      <select id="region-select" onChange={handleRegionChange}>
        <option value="" disabled selected>
          Region
        </option>
        {regions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Region;
