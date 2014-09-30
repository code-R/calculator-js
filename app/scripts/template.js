Handlebars.registerHelper('btn_method', function(data) {
  if (data.btn_function) {
    return data.btn_function;
  } else {
    return 'regular';
  }
});

Handlebars.registerHelper('btn_class', function(data) {
  if (data.is_operator) {
    return 'operator';
  } else {
    return 'operand';
  }
});

var row1 = {
  data: [{
    btn_val: '7'
  }, {
    btn_val: '8'
  }, {
    btn_val: '9'
  }, {
    btn_val: '+',
    is_operator: true
  }]
}

var row2 = {
  data: [{
    btn_val: '4'
  }, {
    btn_val: '5'
  }, {
    btn_val: '6'
  }, {
    btn_val: '-',
    is_operator: true
  }]
}

var row3 = {
  data: [{
    btn_val: '1'
  }, {
    btn_val: '2'
  }, {
    btn_val: '3'
  }, {
    btn_val: '*',
    is_operator: true
  }]
}

var row4 = {
  data: [{
    btn_val: '0'
  }, {
    btn_val: '.'
  }, {
    btn_val: 'C',
    is_operator: true,
    btn_function: 'cancel'
  }, {
    btn_val: '=',
    is_operator: true,
    btn_function: 'evaluate'
  }]
}

var source = $("#calc-btn").html();
var template = Handlebars.compile(source);

$('.calculator').append(template(row1));
$('.calculator').append(template(row2));
$('.calculator').append(template(row3));
$('.calculator').append(template(row4));