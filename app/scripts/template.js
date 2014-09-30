Handlebars.registerHelper('btn_method', function(data) {
  if (data.btn_function) {
    return data.btn_function;
  } else {
    return 'regular';
  }
});

var data1 = {
  data: [{
    btn_val: '7',
    btn_class: 'operand'
  }, {
    btn_val: '8',
    btn_class: 'operand'
  }, {
    btn_val: '9',
    btn_class: 'operand'
  }, {
    btn_val: '+',
    btn_class: 'operator'
  }]
}

var data2 = {
  data: [{
    btn_val: '4',
    btn_class: 'operand'
  }, {
    btn_val: '5',
    btn_class: 'operand'
  }, {
    btn_val: '6',
    btn_class: 'operand'
  }, {
    btn_val: '-',
    btn_class: 'operator'
  }]
}

var data3 = {
  data: [{
    btn_val: '1',
    btn_class: 'operand'
  }, {
    btn_val: '2',
    btn_class: 'operand'
  }, {
    btn_val: '3',
    btn_class: 'operand'
  }, {
    btn_val: '*',
    btn_class: 'operator'
  }]
}

var data4 = {
  data: [{
    btn_val: '0',
    btn_class: 'operand'
  }, {
    btn_val: '.',
    btn_class: 'operand'
  }, {
    btn_val: 'C',
    btn_class: 'operator',
    btn_function: 'cancel'
  }, {
    btn_val: '=',
    btn_class: 'operator',
    btn_function: 'equals'
  }]
}

var source = $("#calc-btn").html();
var template = Handlebars.compile(source);

$('.calculator').append(template(data1));
$('.calculator').append(template(data2));
$('.calculator').append(template(data3));
$('.calculator').append(template(data4));