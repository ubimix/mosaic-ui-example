$(function() {
    var appConfig = {
        templatesSelector : '#templates',
        mapSelector : '#map',
        listSelector : '#list',
        datalayersSelector : '#map [data-map-layer]'
    }
    Mosaic.DataSet.registerResourceStates([ {
        field : '_hello',
        on : 'helloResource',
        off : 'byeResource',
        priority : 10
    } ]);
    var application = new Mosaic.AppConfigurator(appConfig);
    application.start();
});
