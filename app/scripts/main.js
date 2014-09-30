var calculator = {
  'equals': function(btn) {
    return eval($("#cal-input").val());
  },
  'cancel': function(btn) {
    return '';
  },
  'regular': function(btn) {
    return $("#cal-input").val() + btn.val();
  }
}

$(".operand").click(function() {
  var output = $("#cal-input").val() + $(this).val();
  $("#cal-input").val(output);
});

$(".operator").click(function() {
  var btn = $(this);
  var btn_function = btn.data('btn_function');
  var output = calculator[btn_function](btn);
  $("#cal-input").val(output);
});