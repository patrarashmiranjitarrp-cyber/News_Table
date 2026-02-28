const apiKey = "pub_0bd8057e08134de48eb94a63f2c796d8";
const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=in`;
async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // check structure in console
    // if (data.nextPage) {
    //   const nextUrl = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=in&page=${data.nextPage}`;
    //   fetch(nextUrl); // get next page
    // }

    const articles = data.results; // IMPORTANT: newsdata uses 'results'

    const tableBody = document.querySelector("#newsTable tbody");

    tableBody.innerHTML = ""; // clear old data

    articles.forEach((article) => {
      const row = document.createElement("tr");

      row.innerHTML = `
                <td>${article.title || "N/A"}</td>
                <td>${article.source_name}|| "N/A"</td>
                <td>${article.pubDate || "N/A"}</td>
                <td><a href="${article.link}" target="_blank">Read More</a></td>
            `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchNews();
