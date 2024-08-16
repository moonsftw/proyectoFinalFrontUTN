async function getData() {
    const response = await fetch("./../Data/serverJSON.json");
    const json = await response.json();
    console.log(json);
}
getData();