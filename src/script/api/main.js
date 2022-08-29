import "../componets/tracker/pandemic-covid.js";

const main = () => {
  const url = "https://covid19.mathdro.id/api/countries/Indonesia/";

  const getData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((results) => {
        const pandemicDataElement = document.querySelector("pandemic-covid");
        pandemicDataElement.pandemicItemValue = results;
      })
      .catch((error) => showMessage(error));
  };
  getData();
};

export default main;
