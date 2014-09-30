$(".operand").click(function() {
  var x = $("#cal-input").val() + $(this).val();
  $("#cal-input").val(x);
});

$(".operator").click(function() {
  var operator = $(this).val();
  var x = parseInt($("#cal-input").val()) + operator;

  if (operator == '=') {
    output = eval($("#cal-input").val());
    $("#cal-input").val(output);
  } else if (operator == 'c') {
    $("#cal-input").val('');
  } else {
    $("#cal-input").val(x);
  }
});

var source = $("#calc-btn").html();
var template = Handlebars.compile(source);

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
    btn_class: 'operand'
  }, {
    btn_val: '=',
    btn_class: 'operator'
  }]
}

$('.calculator').append(template(data1));
$('.calculator').append(template(data2));
$('.calculator').append(template(data3));
$('.calculator').append(template(data4));