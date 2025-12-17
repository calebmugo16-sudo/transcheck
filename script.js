
document.getElementById("year").textContent = new Date().getFullYear();

const baseDict = {
  teacher: "mwalimu",
  student: "mwanafunzi",
  friend: "rafiki",
  mother: "mama",
  father: "baba",
  child: "mtoto",
  school: "shule",
  home: "nyumbani",
  food: "chakula",
  water: "maji",
  work: "kazi",
  love: "upendo",
  book: "kitabu",
  books: "vitabu",
  tool: "zana",
  tools: "zana",
  equipment: "vifaa",
  phone: "simu",
  computer: "kompyuta",
  at: "kwa",
  with: "pamoja na",
  and: "na",
  in: "ndani ya",
  on: "juu ya",
  for: "kwa",
  from: "kutoka",
  to: "kwa",
  i: "mimi",
  am: "niko",
  is: "ni",
  are: "ni"
};

function handleSuffix(word) {
  if (baseDict[word]) return baseDict[word];

  // plural nouns
  if (word.endsWith("s")) {
    let singular = word.slice(0, -1);
    if (baseDict[singular]) {
      return "wa" + baseDict[singular].slice(2);
    }
  }

  // verb -ing
  if (word.endsWith("ing")) {
    let root = word.slice(0, -3);
    if (baseDict[root]) {
      return "kufanya " + baseDict[root];
    }
    return "kufanya";
  }

  // verb -ed
  if (word.endsWith("ed")) {
    let root = word.slice(0, -2);
    if (baseDict[root]) {
      return "alifanya " + baseDict[root];
    }
    return "alifanya";
  }

  return word;
}

function translate() {
  const text = document.getElementById("text").value.toLowerCase().trim();
  const result = document.getElementById("result");

  if (!text) {
    result.textContent = "Type something first";
    return;
  }

  const words = text.split(" ");
  const translated = words.map(w => handleSuffix(w));

  result.textContent = translated.join(" ");
}
