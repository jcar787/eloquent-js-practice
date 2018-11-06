const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall'
];

const mailRoute = [
  "Alice's House",
  'Cabin',
  "Alice's House",
  "Bob's House",
  'Town Hall',
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  'Shop',
  "Grete's House",
  'Farm',
  'Marketplace',
  'Post Office'
];

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  static random(parcelCount = 5) {
    let parcels = [];
    const keys = Object.keys(roadGraph);
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(keys);
      let place;
      do {
        place = randomPick(keys);
      } while (place === address);
    }
    return new VillageState('Post Office', parcels);
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map(parcel => {
          if (parcel.place != this.place) {
            return parcel;
          }
          return { place: destination, address: parcel.address };
        })
        .filter(parcel => parcel.place != parcel.address);
      return new VillageState(destination, parcels);
    }
  }
}

const buildGraph = edges => {
  const graph = {};

  const addEdge = (from, to) => {
    if (graph[from] === undefined || graph[from] === null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  };

  for (let [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
};

const runRobot = (state, robot, memory) => {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
};

const randomPick = array => {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
};

const randomRobot = state => {
  return { direction: randomPick(roadGraph[state.place]) };
};

const routeRobot = (state, memory) => {
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
};

const findRoute = (graph, from, to) => {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) {
        return [...route, place];
      }
      if (!work.some(w => w.at === place)) {
        work.push({ at: place, route: [...route, place] });
      }
    }
  }
};

const goalOrientedRobot = ({ place, parcels }, route) => {
  if (route.length === 0) {
    let parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
};

const roadGraph = buildGraph(roads);

console.log(roadGraph);
const first = new VillageState('Post Office', [
  { place: 'Post Office', address: "Alice's House" }
]);
let next = first.move("Alice's House");

console.log(first);
console.log(next);
