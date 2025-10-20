let string = {};

type NewType = string;
interface NewInterface {}

{
  type VALID_API_VALUE = number | string | boolean;
  type RESULTS_VALUE = number | string;

  interface API_RESULT {
    results: number | string;
    items: VALID_API_VALUE[];
    other_items: Array<VALID_API_VALUE>;
  }

  type BirdType = {
    wings: 2;
  };

  interface BirdInterface {
    wings: 2;
  }

  const bird1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2 };
  const bird3: BirdType = bird2;
  // Duck typing -> if it looks like, sounds like, moves like

  type Owl = BirdType & { nocturnal: true };
  type Robin = BirdInterface & { noctural: true };

  interface Chicken extends BirdInterface {
    colourful: false;
    flies: false;
  }

  interface Peacock extends BirdType {
    colourful: true;
    flies: false;
  }

  interface Chicken {
    // open!
    laysEggs: true;
  }

  let plucky: Chicken = {};
  let rob: Robin = { wings: 2, noctural: true };
}
