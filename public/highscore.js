function setup() {
  noCanvas();
  
  const button = document.getElementById('submit_score');
  button.addEventListener('click', async event => {
    const mood = document.getElementById('username').value;
    const score= document.getElementById('score_text').value
   
    const data = {  mood, score };
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

}