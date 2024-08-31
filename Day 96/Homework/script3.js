//Task 4
//Create a 3x3 graph using the nested array matrix.
const graph = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I']
];

//Print the 3rd column of the 2nd row
console.log(graph[1][2]);

//Change the value of the 1st column of the 1st row
graph[0][0] = 'X';
console.log(graph);