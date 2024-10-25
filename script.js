// Example API endpoint for sample data
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
//const apiUrl ='https://data.gdscnsut.com/';
// Fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.slice(0, 10); // Limit data for simplicity
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Render charts using Chart.js
async function renderCharts() {
  const data = await fetchData();

  // Extract data for the charts
  const labels = data.map((item, index) => `Item ${index + 1}`);
  const values = data.map((item) => item.id);

  // Line Chart
  const ctx1 = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'User Activity',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }]
    },
  });

  // Bar Chart
  const ctx2 = document.getElementById('barChart').getContext('2d');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Post ID Count',
        data: values,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }]
    },
  });
}

renderCharts();
