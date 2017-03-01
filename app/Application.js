Ext.define('Mm.Application', {
    extend: 'Ext.app.Application',
    name: 'Mm',
    init: function () {
        console.log('init function')
    },
    launch: function () {
        console.log('launch function')
    },
    controllers:[
        'Mm.controller.UserController'
    ]
})