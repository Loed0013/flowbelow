chartIt();
async function chartIt(){
  const data = await getLevelData();
  const ctx = document.getElementById('Chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.Time,
        datasets: [{
            label: 'Exempel på sensordata',
            data: data.Level,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        }]
    },

  });

}


  async function getLevelData(){
    const Time = [];
    const Level = [];
    const response = await fetch ('Data34.csv');
    const data = await response.text();

    const table = data.split('\n');
    for(let i = 0;i<table.length-1;i++){
      const cols = table[i].split(',');
      const ts = cols[0];
      const ls = cols[1];

      Time.push(ts);
      Level.push(ls);




    }
    return {Time,Level};
  }
