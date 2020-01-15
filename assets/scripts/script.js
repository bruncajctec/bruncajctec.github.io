var brDict = [
  {
    word: "zapato",
    br: "dsad",
    pron: "bdf",
    pos: "verb",
    eje: ["sdasdasjjh jhjhdas", "La hambruna fue grande", "dashd idjas das"]
  },
  {
    word: "hambre",
    br: "bri",
    pron: "bri",
    pos: "noun",
    eje: ["Brion qui crie'ra", "La hambruna fue grande", "dashd idjas das"]
  },
  {
    word: "flor",
    br: "srut",
    pron: "srut",
    pos: "noun",
    eje: ["Srut xi qui", "La florecita"]
  },
  {
    word: "palmera",
    br: "Ó'c",
    pron: "o'c",
    pos: "noun",
    eje: ["ó'c cuas shan' ishcon", "Periodico"]
  }
];


// fill the dictionary
var init = ""
init = function () {
  for (let i = 0; i < brDict.length; i++) {
    document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" + brDict[i].word + "</li>";
  }
}
// call the init function when page loads
init();


// display findings
show = function (i) {
  document.getElementById("word_text").innerHTML = brDict[i].word;
  document.getElementById("pos").innerHTML = brDict[i].pos;
  document.getElementById("br").innerHTML = brDict[i].br;
  document.getElementById("pron").innerHTML = "[" + brDict[i].pron + "]";

  let list = "";

  for (let j = 0; j < brDict[i].eje.length; j++) {
    list += "<li>" + brDict[i].eje[j] + "</li>";
    document.getElementById("eje").innerHTML = list;
  }
}
// show first word in the dictionary when  page loads
//show(0);

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
      document.getElementById("word_text").innerHTML = "Not found!"
      document.getElementById("br").innerHTML = "";
      document.getElementById("pron").innerHTML = "";
      document.getElementById("pos").innerHTML = "";
      document.getElementById("eje").innerHTML = "";
    }
  }

  // if found, it displays the found word
  if (found >= 0) {
    show(found);

  }
}



