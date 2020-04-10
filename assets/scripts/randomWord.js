fetch('/assets/scripts/data.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with your JSON data here..
    //console.log(data);
    //console.log(data[0].word);
    //console.log(data[0].bri);
    //document.getElementById("br").innerHTML = data[0].bri;
    //end of example code
    const random = data[Math.floor(Math.random() * data.length)];
    console.log(random.word);

    // display findings
    document.getElementById("word").innerHTML = random.word;
    document.getElementById("pos").innerHTML = random.pos;
    document.getElementById("bri").innerHTML = random.bri;
    document.getElementById("idiom-sep").innerHTML = "  | ";
    document.getElementById("pron").innerHTML = "[" + random.pron + "]";

    let list = "";

    for (let j = 0; j < random.eje.length; j++) {
      list += "<li>" + random.eje[j] + "</li>";
      document.getElementById("eje").innerHTML = list;
    }

  })
  .catch(err => {
    // What do when the request fails
    console.log('The request failed!');
  });





  // toDos
  //-display random word