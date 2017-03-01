Ext.define('Mm.view.main.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: 'list for students',
    requires:[
        'Mm.store.UserStore'
    ],
    store:{
        type:'user'
    },
    columns:[
        {text:'name',dataIndex:'name'},
        {text:'age',dataIndex:'age'},
        {text:'addr',dataIndex:'addr'}
    ]
})