Ext.define('Mm.view.main.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: 'list for students',
    requires:[
        'Mm.store.UserStore'
    ],
    store:{
        type:'user'//经过测试，使用create创建实例或者storeManger.lookup会报错
    },
    tbar:[
        {text:'添加',iconCls:'fa fa-home',id:'add'},
        {text:'保存',iconCls:'fa fa-home',id:'save'},
        {text:'更新',iconCls:'fa fa-home',id:'update'},
        {text:'删除',iconCls:'fa fa-home',id:'delete'}
    ],
    columns:[
        {text:'name',dataIndex:'name'},
        {text:'age',dataIndex:'age'},
        {text:'addr',dataIndex:'addr'}
    ]
})