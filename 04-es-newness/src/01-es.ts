// ES2024

// 1. Default parameters

function areaOfRect(length = 1, width = length) {
  return length * width;
}

const rect1 = areaOfRect(3, 4);
const rect2 = areaOfRect(); // 1 * 1
const rect3 = areaOfRect(5); // 5 * 5

// 2. Template Literals

const name = "Duncan";
const location = "Glasgow";
const team = "Data Capabilities";

let description = `${name} lives in ${location} and works in the ${team} team.

`;

type Greeting = "Hello" | "Bonjour" | "Gutentag";
type Target = "World" | "Planet" | "Scotland" | "Switzerland";
type GreetOptions = `${Greeting} ${Target}`;

type Area = "news" | "sport" | "iplayer";
type ValidUrls = `https://${Area}.bbc.co.uk`;
type NewUrls = `https://bbc.co.uk/${Area}`;
type AllValid = ValidUrls | NewUrls;

// 3. Arrow Functions

// lambda   ->
{
  function areaOfRect(length = 1, width = length): number {
    return length * width;
  }

  type BinaryOperation = (a: number, b: number) => number;

  type ComponentProps = {
    onClick: (e: Event) => void;
  };

  let areaOfRectArrow: BinaryOperation = (length = 1, width) => length * width;
  const perimeterOfRect: BinaryOperation = (length, width) =>
    2 * length + 2 * width;
}

// 4. var/let/const

function simulateDom() {
  const pseudoDom = {
    button1: { click: () => "" },
    button2: { click: () => "" },
    button3: { click: () => "" },
  };

  let team = "World Team";
  console.log(team);

  for (let i = 1; i <= 3; i++) {
    // Kyle Simpson -> You Don't Really Know JS
    // i = 4
    const element = pseudoDom[`button${i}`];
    element.click = function () {
      return `Item ${i} is clicked.`;
    };
  }

  console.log(pseudoDom.button1.click()); // Item {1,2,3/1,1,1/3,3,3/"", "", ""/1,4,7/4,4,4} is clicked.
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click());
}

simulateDom();
