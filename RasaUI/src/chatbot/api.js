// api/api.js

const BASE_URL = "https://landbotserver-6ed1b0f89b90.herokuapp.com";

export const fetchLgas = async () => {
  const url = `${BASE_URL}/lgas`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    return { error: error.message };
  }
};

export const fetchWards = async (lga_name) => {
  const url = `${BASE_URL}/lga/${encodeURIComponent(lga_name)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    return { error: error.message };
  }
};

export const fetchHc = async (ward_name) => {
  const url = `${BASE_URL}/lga/ward/${encodeURIComponent(ward_name)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    return { error: error.message };
  }
};

export const fetchSettlement = async (hc_name) => {
  const url = `${BASE_URL}/lga/ward/hospital/${encodeURIComponent(
    hc_name
  )}/settlements`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    return { error: error.message };
  }
};
