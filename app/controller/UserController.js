Ext.define('Mm.controller.UserController', {
    extend: 'Ext.app.Controller',
    init: function () {
        console.log('控制器初始化完成了');
    },
    control: {
        'grid button[id=add]': {
            click: 'onAdd'
        },
        'grid button[id=save]': {
            click: 'onSave'
        },
        'grid button[id=update]': {
            click: 'onUpdate'
        },
        'grid button[id=delete]': {
            click: 'onDelete'
        },
    },
    //下面三行很重要，控制器是粘合剂，没这个运行不起来
    views: ['Mm.view.main.List'],
    models: ['Mm.model.UserModel'],
    stores: ['Mm.store.UserStore'],

    onAdd:function(){
        alert('add')
    },
    onSave:function(){
        alert('save')
    },
    onUpdate:function(){
        alert('update')
    },
    onDelete:function(){
        alert('delete')
    },
})