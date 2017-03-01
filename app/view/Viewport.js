Ext.define('Mm.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items: [
        {
            xtype: 'userlist',
            text: 'hello',
            region:'center'
        }
    ]
})