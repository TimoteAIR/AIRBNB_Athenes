var wms_layers = [];


        var lyr_POSITRONnolabel_0 = new ol.layer.Tile({
            'title': 'POSITRON no label',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png?key=cb1_3usm_1_0d7e153a37374395c55bee13'
            })
        });
var format_neighbourhoods_1 = new ol.format.GeoJSON();
var features_neighbourhoods_1 = format_neighbourhoods_1.readFeatures(json_neighbourhoods_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_neighbourhoods_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_neighbourhoods_1.addFeatures(features_neighbourhoods_1);
var lyr_neighbourhoods_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_neighbourhoods_1, 
                style: style_neighbourhoods_1,
                popuplayertitle: 'neighbourhoods',
                interactive: true,
                title: '<img src="styles/legend/neighbourhoods_1.png" /> neighbourhoods'
            });
var format_Coucheissuedelajointure_2 = new ol.format.GeoJSON();
var features_Coucheissuedelajointure_2 = format_Coucheissuedelajointure_2.readFeatures(json_Coucheissuedelajointure_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coucheissuedelajointure_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coucheissuedelajointure_2.addFeatures(features_Coucheissuedelajointure_2);
var lyr_Coucheissuedelajointure_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coucheissuedelajointure_2, 
                style: style_Coucheissuedelajointure_2,
                popuplayertitle: 'Couche issue de la jointure',
                interactive: true,
    title: 'Couche issue de la jointure<br />\
    <img src="styles/legend/Coucheissuedelajointure_2_0.png" /> 59 - 75.6<br />\
    <img src="styles/legend/Coucheissuedelajointure_2_1.png" /> 75.6 - 83.5<br />\
    <img src="styles/legend/Coucheissuedelajointure_2_2.png" /> 83.5 - 103.4<br />\
    <img src="styles/legend/Coucheissuedelajointure_2_3.png" /> 103.4 - 115.8<br />\
    <img src="styles/legend/Coucheissuedelajointure_2_4.png" /> 115.8 - 407<br />' });

lyr_POSITRONnolabel_0.setVisible(true);lyr_neighbourhoods_1.setVisible(true);lyr_Coucheissuedelajointure_2.setVisible(true);
var layersList = [lyr_POSITRONnolabel_0,lyr_neighbourhoods_1,lyr_Coucheissuedelajointure_2];
lyr_neighbourhoods_1.set('fieldAliases', {'neighbourhood': 'neighbourhood', 'neighbourhood_group': 'neighbourhood_group', });
lyr_Coucheissuedelajointure_2.set('fieldAliases', {'neighbourhood': 'neighbourhood', 'neighbourhood_group': 'neighbourhood_group', 'price_count': 'price_count', 'price_median': 'price_median', 'Densité': 'Densité', 'Densite': 'Densite', });
lyr_neighbourhoods_1.set('fieldImages', {'neighbourhood': 'TextEdit', 'neighbourhood_group': 'TextEdit', });
lyr_Coucheissuedelajointure_2.set('fieldImages', {'neighbourhood': 'TextEdit', 'neighbourhood_group': 'TextEdit', 'price_count': 'TextEdit', 'price_median': 'TextEdit', 'Densité': 'TextEdit', 'Densite': 'TextEdit', });
lyr_neighbourhoods_1.set('fieldLabels', {'neighbourhood': 'no label', 'neighbourhood_group': 'no label', });
lyr_Coucheissuedelajointure_2.set('fieldLabels', {'neighbourhood': 'no label', 'neighbourhood_group': 'no label', 'price_count': 'no label', 'price_median': 'no label', 'Densité': 'no label', 'Densite': 'no label', });
lyr_Coucheissuedelajointure_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});