// extends -> satisfies

type City = {
  name: string;
  country: string;
};

type CapitalCity = City & { population: number; airport: boolean };

function logCityName<CityType extends City>(city: CityType) {
  console.log(`${city.name} is in the country of ${city.country}`);
  return city;
}

const london: CapitalCity = {
  name: "London",
  country: "UK",
  population: 10_000_000,
  airport: true,
};

const bristol: City = {
  name: "Bristol",
  country: "UK",
};

logCityName(london);
logCityName(bristol);
logCityName({
  name: "Newcastle",
  country: "UK",
  population: 10_000_000,
  region: "NE",
});

type CapitalExclude = Exclude<City, CapitalCity>;

type Cities = "London" | "Belfast" | "Bristol" | "Glasgow" | "Newcastle";
type CapitalCities = "Belfast" | "London";

type NonCapitals = Exclude<Cities, CapitalCities>;

type APIResponse<DataType> = {
  statusCode: number;
  statusText: string;
  results?: number;
  data: Array<DataType>;
};

type ProgramAPI = {
  episode: number;
  length: number;
  channel: string;
  id: string;
};

// No error!
const data: APIResponse<ProgramAPI> = await(await fetch("")).json();

// data.data[0].
