calculator =
  evaluate: ->
    eval $("#cal-input").val()

  cancel: ->
    ""

  regular: (btn) ->
    $("#cal-input").val() + btn.val()


$(".operand").click ->
  output = $("#cal-input").val() + $(this).val()
  $("#cal-input").val output
  return

$(".operator").click ->
  operators = ['+', '-', '*', '=']
  btn = $(this)

  cal_input = $("#cal-input").val()
  if _.contains(operators, cal_input[cal_input.length - 1]) && _.contains(operators, btn.val())
    alert('Invalid input')
    return

  btn_function = btn.data("btn_function")
  output = calculator[btn_function](btn)
  $("#cal-input").val output
  return
