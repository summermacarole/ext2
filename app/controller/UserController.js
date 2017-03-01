Ext.define('Mm.controller.UserController', {
    extend: 'Ext.app.Controller',
    init: function () {
        console.log('控制器初始化完成了');
    },
    control: {
        // 'viewport > panel': {
        //     render: 'onPanelRendered'
        // }
    },
    views: ['Mm.view.main.List'],
    models: ['Mm.model.UserModel'],
    stores: ['Mm.store.UserStore']
})