'use strict';

Handlebars.registerHelper 'btn_method', (data) ->
  if data.btnFunction then data.btnFunction else 'regular'

Handlebars.registerHelper 'btn_class', (data) ->
  if data.isOperator then 'operator' else 'operand'

row1 = data: [
  {
    btnVal: '7'
  },
  {
    btnVal: '8'
  },
  {
    btnVal: '9'
  },
  {
    btnVal: '+',
    isOperator: true
  }
]

row2 = data: [
  {
    btnVal: '4'
  },
  {
    btnVal: '5'
  },
  {
    btnVal: '6'
  },
  {
    btnVal: '-',
    isOperator: true
  }
]

row3 = data: [
  {
    btnVal: '1'
  },
  {
    btnVal: '2'
  },
  {
    btnVal: '3'
  },
  {
    btnVal: '*',
    isOperator: true
  }
]

row4 = data: [
  {
    btnVal: '0'
  },
  {
    btnVal: '.'
  },
  {
    btnVal: 'C',
    isOperator: true,
    btnFunction: 'cancel'
  },
  {
    btnVal: '=',
    isOperator: true,
    btnFunction: 'evaluate'
  }
]

# row0 = data: [
#   {
#     btnVal: '/',
#     isOperator: true
#   }
# ]

source = $('#calc-btn').html()
template = Handlebars.compile(source)
# $('.calculator').append template(row0)
$('.calculator').append template(row1)
$('.calculator').append template(row2)
$('.calculator').append template(row3)
$('.calculator').append template(row4)
