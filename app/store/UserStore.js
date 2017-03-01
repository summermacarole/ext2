Ext.define('Mm.store.UserStore', {
    extend: 'Ext.data.Store',
    alias:'store.user',
    model: 'Mm.model.UserModel',//经过测试，此处的model必须是类名的全名
    data: [
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'}
    ]
})