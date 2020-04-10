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

    var brDict = data;
    // display findings
    show = function (i) {
      document.getElementById("word").innerHTML = brDict[i].word;
      document.getElementById("pos").innerHTML = brDict[i].pos;
      document.getElementById("bri").innerHTML = brDict[i].bri;
      document.getElementById("idiom-sep").innerHTML = "  | ";
      document.getElementById("pron").innerHTML = "[" + brDict[i].pron + "]";

      let list = "";

      for (let j = 0; j < brDict[i].eje.length; j++) {
        list += "<li>" + brDict[i].eje[j] + "</li>";
        document.getElementById("eje").innerHTML = list;
      }
    }

    //this adds keyup and click event to be able to run the function
    document.getElementById("query").addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        search();
      }
    });
    document.getElementById("searchBtn").addEventListener("click", function (event) {
      search();
    });

    // search functionality
    search = function () {
      query = document.getElementById("query").value;

      if (query == "") {
        return;
      }

      found = -1; // initialize found to false

      for (let i = 0; i < brDict.length; i++) {
        if (query == brDict[i].word) {
          found = i;
          break;
        } else {
          // displays not found message
          document.getElementById("word").innerHTML = "Esta palabra no ha sido registrada!"
        }
      }

      // if found, it displays the found word
      if (found >= 0) {
        show(found);

      }
    }

  }).catch(err => {
    // What do when the request fails
    console.log('The request failed!');
  });




    // Pending things to do //

    // - insensitive search verify accent search
    // - display two results for the same word