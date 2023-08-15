const baseUrl: string = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/";

export const findAddressCandidates = (address: string | null): string => {
  return `${baseUrl}findAddressCandidates?SingleLine=${address}BGR&f=json`
}

export const suggestAddress = (addressSuggestion: string | null): string => {
  return `${baseUrl}suggest?f=json&text=${addressSuggestion}`
}
