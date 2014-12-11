'use strict';

calculator =
  evaluate: ->
    EVAL_IS_BAD__AVOID_THIS = eval
    EVAL_IS_BAD__AVOID_THIS($('#cal-input').val());

  cancel: ->
    '0'

  regular: (btn) ->
    $('#cal-input').val() + btn.val()


$('.operand').click ->
  output = $('#cal-input').val() + $(this).val()
  $('#cal-input').val output
  return

$('.operator').click ->
  operators = ['+', '-', '*', '=']
  btn = $(this)

  calInput = $('#cal-input').val()
  if _.contains(operators, calInput[calInput.length - 1]) && _.contains(operators, btn.val())
    window.alert('Invalid input')
    return

  btnFunction = btn.data('btn_function')
  output = calculator[btnFunction](btn)
  $('#cal-input').val output
  return
