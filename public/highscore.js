function setup() {
    noCanvas();
    
   
    const button = document.getElementById('submit_score');
    button.addEventListener('click', async event => {
      const username = document.getElementById('username').value;
      const userScore= document.getElementById('score_text')
      
      const data = { userScore, username };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch('/api', options);
      const json = await response.json();
      console.log(json);
    });
  
    if ('userScore' in navigator) {
        document.getElementById("userScore")
      console.log('userScore available');
     // navigator.score_text.getCurrentPosition(position => {
        //lat = position.coords.latitude;
       // lon = position.coords.longitude;
       // console.log(score_text);
        //document.getElementById('latitude').textContent = lat;
        //document.getElementById('longitude').textContent = lon;
     // });
    } else {
      console.log('userScore not available');
    }
  }