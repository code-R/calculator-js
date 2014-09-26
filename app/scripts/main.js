$(".operand").click(function(){
  var x = $("#cal-input").val() + $(this).val();
  $("#cal-input").val(x);
});

$(".operator").click(function(){
  var operator = $(this).val();
  var x = $("#cal-input").val() + operator;

  if(operator == '='){
    output = eval($("#cal-input").val());
    $("#cal-input").val(output);
  }
  else if(operator == 'c'){
    $("#cal-input").val('');
  }
  else{
    $("#cal-input").val(x);
  }
});