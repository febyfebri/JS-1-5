const students = [
    {
      id: '1',
      name: 'Sherlock',
      score: 90,
    },
    {
      id: '2',
      name: 'Genta',
      score: 75,
    },
    {
      id: '3',
      name: 'Ai',
      score: 80,
    },
    {
      id: '4',
      name: 'Budi',
      score: 85,
    },
  ];
  
  function average() {
    let score = students.map(item => item.score);
    let sum = 0;
    for (i = 0; i < score.length; i++) {
      sum += score[i];
    }
    let average = sum / score.length;
    return average;
  }
  
  let student = students.filter(function (el) {
    return el.score > average();
  });
  
  console.log(student);