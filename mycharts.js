//read all the documentation on http://www.chartjs.org/
//my chart about "PEC do teto dos gastos públicos - 2º turno" with chartjs code

var pecTeto2Chart;
var data = [
  {
    value: 53,
    color: "green"
  }, {
    value: 16,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 1,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("pecTeto2Chart")
                  .getContext("2d");

pecTeto2Chart = new Chart(ctx).Doughnut(data, options);



//my chart about "PEC do teto dos gastos públicos - 1º turno" with chartjs code

var pecTeto1Chart;
var data = [
  {
    value: 61,
    color: "green"
  }, {
    value: 14,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 5,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("pecTeto1Chart")
                  .getContext("2d");

pecTeto1Chart = new Chart(ctx).Doughnut(data, options);



//my chart about "inelegibilidade de Dilma Rousseff" with chartjs code

var dilma2Chart;
var data = [
  {
    value: 42,
    color: "green"
  }, {
    value: 36,
    color: "red"
  }, {
    value: 3,
    color: "purple"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("dilma2Chart")
                  .getContext("2d");

dilma2Chart = new Chart(ctx).Doughnut(data, options);




//my chart about "cassação de Dilma Rousseff" with chartjs code

var dilma1Chart;
var data = [
  {
    value: 61,
    color: "green"
  }, {
    value: 20,
    color: "red"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("dilma1Chart")
                  .getContext("2d");

dilma1Chart = new Chart(ctx).Doughnut(data, options);


//my fourth chart with chartjs code

var reformaEnsinoMedioChart;
var data = [
  {
    value: 43,
    color: "green"
  }, {
    value: 13,
    color: "red"
  }, {
    value: 25,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("reformaEnsinoMedioChart")
                  .getContext("2d");

reformaEnsinoMedioChart = new Chart(ctx).Doughnut(data, options);




//my chart about "PEC da vaquejada - 1º turno" with chartjs code

var vaquejada1Chart;
var data = [
  {
    value: 55,
    color: "green"
  }, {
    value: 8,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 3,
    color: "purple"
  }, {
    value: 14,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("vaquejada1Chart")
                  .getContext("2d");

vaquejada1Chart = new Chart(ctx).Doughnut(data, options);


//my chart about "PEC da vaquejada - 2º turno" with chartjs code

var vaquejada2Chart;
var data = [
  {
    value: 55,
    color: "green"
  }, {
    value: 8,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 3,
    color: "purple"
  }, {
    value: 14,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("vaquejada2Chart")
                  .getContext("2d");

vaquejada2Chart = new Chart(ctx).Doughnut(data, options);



//my chart about "PEC do foro privilegiado - 1º turno" with chartjs code

var foroPrivilegiado1Chart;
var data = [
  {
    value: 75,
    color: "green"
  }, {
    value: 6,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("foroPrivilegiado1Chart")
                  .getContext("2d");

foroPrivilegiado1Chart = new Chart(ctx).Doughnut(data, options);





//my chart about "projeto sobre abuso de autoridade" with chartjs code

var abusoDeAutoridadeChart;
var data = [
  {
    value: 54,
    color: "green"
  }, {
    value: 19,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 7,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("abusoDeAutoridadeChart")
                  .getContext("2d");

abusoDeAutoridadeChart = new Chart(ctx).Doughnut(data, options);






//my chart about "projeto sobre socorro aos estados" with chartjs code

var socorroAosEstadosChart;
var data = [
  {
    value: 56,
    color: "green"
  }, {
    value: 9,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 15,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("socorroAosEstadosChart")
                  .getContext("2d");

socorroAosEstadosChart = new Chart(ctx).Doughnut(data, options);





//my chart about "PEC do foro privilegiado - 2º turno" with chartjs code

var foroPrivilegiado2Chart;
var data = [
  {
    value: 69,
    color: "green"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 1,
    color: "purple"
  }, {
    value: 10,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("foroPrivilegiado2Chart")
                  .getContext("2d");

foroPrivilegiado2Chart = new Chart(ctx).Doughnut(data, options);




//my chart about "PEC do foro privilegiado - 2º turno" with chartjs code

var reformaTrabalhistaChart;
var data = [
  {
    value: 50,
    color: "green"
  }, {
    value: 26,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 1,
    color: "purple"
  }, {
    value: 3,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var canvas = document.getElementById("canvas-id-here");
var ctx = canvas && canvas.getContext("2d");

reformaTrabalhistaChart = new Chart(ctx).Doughnut(data, options);


