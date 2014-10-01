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
  btn = $(this)
  btn_function = btn.data("btn_function")
  output = calculator[btn_function](btn)
  $("#cal-input").val output
  return
