Ext.define('Mm.store.UserStore', {
    extend: 'Ext.data.Store',
    alias:'store.user',
    model: 'Mm.model.UserModel',
    data: [
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'},
        {name: 'jack', age: 23, addr: 'beijing'}
    ]
})