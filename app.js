Ext.Loader.setConfig({
    enabled: true,
});
Ext.application({
    extend:'Mm.Application',
    name:'Mm',
    paths:'app',
    requires:[
        'Mm.view.Viewport'
    ],
    mainView:'Mm.view.Viewport'
})
