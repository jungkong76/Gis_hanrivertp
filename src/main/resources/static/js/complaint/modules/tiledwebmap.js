/**
 * Highcharts JS v11.2.0 (2023-10-30)
 *
 * (c) 2009-2022
 *
 * License: www.highcharts.com/license
 */!function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/modules/tiledwebmap",["highcharts"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function o(e,t,o,i){e.hasOwnProperty(t)||(e[t]=i.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}o(t,"Maps/TilesProviders/OpenStreetMap.js",[],function(){return class{constructor(){this.defaultCredits='Map data &copy2023 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',this.initialProjectionName="WebMercator",this.subdomains=["a","b","c"],this.themes={Standard:{url:"https://tile.openstreetmap.org/{zoom}/{x}/{y}.png",minZoom:0,maxZoom:19},Hot:{url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",minZoom:0,maxZoom:19},OpenTopoMap:{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",minZoom:0,maxZoom:17,credits:`Map data: &copy; <a href="https://www.openstreetmap.org/copyright">
                        OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org">SRTM</a> 
                        | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> 
                        (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)`}}}}}),o(t,"Maps/TilesProviders/Stamen.js",[],function(){return class{constructor(){this.defaultCredits='&copy; Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://www.openstreetmap.org/copyright">ODbL</a>',this.initialProjectionName="WebMercator",this.subdomains=["a","b","c","d"],this.themes={Toner:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",minZoom:0,maxZoom:20},TonerBackground:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png",minZoom:0,maxZoom:20},TonerLite:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png",minZoom:0,maxZoom:20},Terrain:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png",minZoom:0,maxZoom:18},TerrainBackground:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png",minZoom:0,maxZoom:18},Watercolor:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",minZoom:1,maxZoom:16,credits:'&copy Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'}}}}}),o(t,"Maps/TilesProviders/LimaLabs.js",[],function(){return class{constructor(){this.defaultCredits='Map data &copy;2023 <a href="https://maps.lima-labs.com/">LimaLabs</a>',this.initialProjectionName="WebMercator",this.requiresApiKey=!0,this.themes={Standard:{url:"https://cdn.lima-labs.com/{zoom}/{x}/{y}.png?api={apikey}",minZoom:0,maxZoom:20}}}}}),o(t,"Maps/TilesProviders/Thunderforest.js",[],function(){return class{constructor(){this.defaultCredits='Maps &copy <a href="https://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',this.initialProjectionName="WebMercator",this.requiresApiKey=!0,this.subdomains=["a","b","c"],this.themes={OpenCycleMap:{url:"https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Transport:{url:"https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},TransportDark:{url:"https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},SpinalMap:{url:"https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Landscape:{url:"https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Outdoors:{url:"https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Pioneer:{url:"https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},MobileAtlas:{url:"https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Neighbourhood:{url:"https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22}}}}}),o(t,"Maps/TilesProviders/Esri.js",[],function(){return class{constructor(){this.defaultCredits="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS,  Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",this.initialProjectionName="WebMercator",this.themes={WorldStreetMap:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20},DeLorme:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}",minZoom:1,maxZoom:11,credits:"Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme"},WorldTopoMap:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20,credits:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"},WorldImagery:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20,credits:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},WorldTerrain:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:13,credits:"Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS"},WorldShadedRelief:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:13,credits:"Tiles &copy; Esri &mdash; Source: Esri"},WorldPhysical:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:8,credits:"Tiles &copy; Esri &mdash; Source: US National Park Service"},NatGeoWorldMap:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:16,credits:"Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"},WorldGrayCanvas:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:16,credits:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"}}}}}),o(t,"Maps/TilesProviders/USGS.js",[],function(){return class{constructor(){this.defaultCredits='Tiles courtesy of the <a href="https://usgs.gov/">U.S. GeologicalSurvey</a>',this.initialProjectionName="WebMercator",this.themes={USTopo:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20},USImagery:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20},USImageryTopo:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20}}}}}),o(t,"Maps/TilesProviders/TilesProviderRegistry.js",[t["Maps/TilesProviders/OpenStreetMap.js"],t["Maps/TilesProviders/Stamen.js"],t["Maps/TilesProviders/LimaLabs.js"],t["Maps/TilesProviders/Thunderforest.js"],t["Maps/TilesProviders/Esri.js"],t["Maps/TilesProviders/USGS.js"]],function(e,t,o,i,r,s){return{Esri:r,LimaLabs:o,OpenStreetMap:e,Stamen:t,Thunderforest:i,USGS:s}}),o(t,"Series/TiledWebMap/TiledWebMapSeriesDefaults.js",[],function(){return{states:{inactive:{enabled:!1}}}}),o(t,"Series/TiledWebMap/TiledWebMapSeries.js",[t["Core/Series/SeriesRegistry.js"],t["Maps/TilesProviders/TilesProviderRegistry.js"],t["Series/TiledWebMap/TiledWebMapSeriesDefaults.js"],t["Core/Utilities.js"]],function(e,t,o,i){let{map:r}=e.seriesTypes,{addEvent:s,defined:a,error:n,merge:l,pick:p,pushUnique:m}=i,h=[];function c(e){let o=(this.options.series||[]).filter(e=>"tiledwebmap"===e.type)[0],{geoBounds:i}=e;if(o&&o.provider&&o.provider.type&&!o.provider.url){let e=t[o.provider.type];if(a(e)){let t=new e,{initialProjectionName:o}=t;if(this.options.mapView){if(i){let{x1:e,y1:t,x2:r,y2:s}=i;this.options.mapView.recommendedMapView={projection:{name:o,parallels:[t,s],rotation:[-(e+r)/2]}}}else this.options.mapView.recommendedMapView={projection:{name:o},minZoom:0}}return!1}n("Highcharts warning: Tiles Provider not defined in the Provider Registry.",!1)}return!0}class d extends r{constructor(){super(...arguments),this.options=void 0,this.redrawTiles=!1,this.isAnimating=!1}static compose(e){m(h,e)&&s(e,"beforeMapViewInit",c)}lonLatToTile(e,t){let{lon:o,lat:i}=e;return{x:Math.floor((o+180)/360*Math.pow(2,t)),y:Math.floor((1-Math.log(Math.tan(i*Math.PI/180)+1/Math.cos(i*Math.PI/180))/Math.PI)/2*Math.pow(2,t))}}tileToLonLat(e,t,o){let i=Math.PI-2*Math.PI*t/Math.pow(2,o);return{lon:e/Math.pow(2,o)*360-180,lat:180/Math.PI*Math.atan(.5*(Math.exp(i)-Math.exp(-i)))}}drawPoints(){let e=this.chart,o=e.mapView;if(!o)return;let i=this.tiles=this.tiles||{},r=this.transformGroups=this.transformGroups||[],s=this,l=this.options,m=l.provider,{zoom:h}=o,c=p(o.projection.options.rotation&&o.projection.options.rotation[0],0),d=e.renderer.forExport?0:200,u=e=>{for(let t of Object.keys(i))parseFloat(t)===(o.zoom<0?0:Math.floor(o.zoom))||s.minZoom&&(o.zoom<0?0:Math.floor(o.zoom))<s.minZoom&&parseFloat(t)===s.minZoom||s.maxZoom&&(o.zoom<0?0:Math.floor(o.zoom))>s.maxZoom&&parseFloat(t)===s.maxZoom?Object.keys(i[t].tiles).forEach((o,r)=>{i[t].tiles[o].animate({opacity:1},{duration:e},()=>{r===Object.keys(i[t].tiles).length-1&&(i[t].isActive=!0)})}):Object.keys(i[t].tiles).forEach((o,r)=>{i[t].tiles[o].animate({opacity:0},{duration:e,defer:e/2},()=>{i[t].tiles[o].destroy(),delete i[t].tiles[o],r===Object.keys(i[t].tiles).length-1&&(i[t].isActive=!1,i[t].loaded=!1)})})},y=h<0?0:Math.floor(h),f=Math.pow(2,y),g=.638436911716859*Math.pow(2,h)/(.638436911716859*Math.pow(2,y)),M=256*g;if(m&&(m.type||m.url)){if(m.type&&!m.url){let i=t[m.type];if(!a(i)){n("Highcharts warning: Tiles Provider '"+m.type+"' not defined in the ProviderRegistry.",!1);return}let r=new i,s=r.initialProjectionName,l,h="";if(m.theme&&a(r.themes[m.theme]))l=r.themes[m.theme];else{let e=Object.keys(r.themes)[0];l=r.themes[e],n("Highcharts warning: The Tiles Provider's Theme '"+m.theme+"' is not defined in the Provider definition - falling back to '"+e+"'.",!1)}m.subdomain&&r.subdomains&&-1!==r.subdomains.indexOf(m.subdomain)?h=m.subdomain:a(r.subdomains)&&-1!==l.url.indexOf("{s}")&&(h=p(r.subdomains&&r.subdomains[0],""),n("Highcharts warning: The Tiles Provider's Subdomain '"+m.subdomain+"' is not defined in the Provider definition - falling back to '"+h+"'.",!1)),r.requiresApiKey&&(m.apiKey?l.url=l.url.replace("{apikey}",m.apiKey):(n("Highcharts warning: The Tiles Provider requires API Key to use tiles, use provider.apiKey to provide a token.",!1),l.url=l.url.replace("?apikey={apikey}",""))),m.url=l.url.replace("{s}",h),this.minZoom=l.minZoom,this.maxZoom=l.maxZoom;let c=p(e.userOptions.credits&&e.userOptions.credits.text,"Highcharts.com "+p(l.credits,r.defaultCredits));e.credits?e.credits.update({text:c}):e.addCredits({text:c,style:p(e.options.credits?.style,{})}),o.projection.options.name!==s&&n("Highcharts warning: The set projection is different than supported by Tiles Provider.",!1)}else o.projection.options.name||n("Highcharts warning: The set projection is different than supported by Tiles Provider.",!1);if(a(this.minZoom)&&y<this.minZoom?(f=Math.pow(2,y=this.minZoom),M=256*(g=.638436911716859*Math.pow(2,h)/(.638436911716859*Math.pow(2,y)))):a(this.maxZoom)&&y>this.maxZoom&&(f=Math.pow(2,y=this.maxZoom),M=256*(g=.638436911716859*Math.pow(2,h)/(.638436911716859*Math.pow(2,y)))),o.projection&&o.projection.def){o.projection.hasCoordinates=!0,r[y]||(r[y]=e.renderer.g().add(this.group));let t=(e,t,o,i)=>e.replace("{x}",t.toString()).replace("{y}",o.toString()).replace("{zoom}",i.toString()).replace("{z}",i.toString()),a=(a,n,l,p,h)=>{let c=a%f,y=n%f,g=c<0?c+f:c,T=y<0?y+f:y;if(!i[`${l}`].tiles[`${a},${n}`]&&m.url){let c=t(m.url,g,T,l);i[l].loaded=!1,i[`${l}`].tiles[`${a},${n}`]=e.renderer.image(c,a*M-p,n*M-h,M,M).attr({zIndex:2,opacity:0}).on("load",function(){m.onload&&m.onload.apply(this),(l===(o.zoom<0?0:Math.floor(o.zoom))||l===s.minZoom)&&(i[`${l}`].actualTilesCount++,i[`${l}`].howManyTiles===i[`${l}`].actualTilesCount&&(i[l].loaded=!0,s.isAnimating?s.redrawTiles=!0:(s.redrawTiles=!1,u(d)),i[`${l}`].actualTilesCount=0))}).add(r[l]),i[`${l}`].tiles[`${a},${n}`].posX=a,i[`${l}`].tiles[`${a},${n}`].posY=n,i[`${l}`].tiles[`${a},${n}`].originalURL=c}},n=o.pixelsToProjectedUnits({x:0,y:0}),l=o.projection.def.inverse([n.x,n.y]),p={lon:l[0]-c,lat:l[1]},h=o.pixelsToProjectedUnits({x:e.plotWidth,y:e.plotHeight}),g=o.projection.def.inverse([h.x,h.y]),T={lon:g[0]-c,lat:g[1]};(p.lat>o.projection.maxLatitude||T.lat<-1*o.projection.maxLatitude)&&(p.lat=o.projection.maxLatitude,T.lat=-1*o.projection.maxLatitude);let x=this.lonLatToTile(p,y),v=this.lonLatToTile(T,y),S=this.tileToLonLat(x.x,x.y,y),b=o.projection.def.forward([S.lon+c,S.lat]),Z=o.projectedUnitsToPixels({x:b[0],y:b[1]}),w=x.x*M-Z.x,j=x.y*M-Z.y;i[`${y}`]||(i[`${y}`]={tiles:{},isActive:!1,howManyTiles:0,actualTilesCount:0,loaded:!1}),i[`${y}`].howManyTiles=(v.x-x.x+1)*(v.y-x.y+1),i[`${y}`].actualTilesCount=0;for(let e=x.x;e<=v.x;e++)for(let t=x.y;t<=v.y;t++)a(e,t,y,w,j)}for(let t of Object.keys(i))for(let r of Object.keys(i[t].tiles))if(o.projection&&o.projection.def){let n=.638436911716859*Math.pow(2,h)/(.638436911716859*Math.pow(2,parseFloat(t))),l=256*n,p=i[t].tiles[Object.keys(i[t].tiles)[0]],{posX:m,posY:f}=i[t].tiles[r];if(a(m)&&a(f)&&a(p.posX)&&a(p.posY)){let a=this.tileToLonLat(p.posX,p.posY,parseFloat(t)),n=o.projection.def.forward([a.lon+c,a.lat]),h=o.projectedUnitsToPixels({x:n[0],y:n[1]}),g=p.posX*l-h.x,M=p.posY*l-h.y;if(e.renderer.globalAnimation&&e.hasRendered){let e=Number(i[t].tiles[r].attr("x")),o=Number(i[t].tiles[r].attr("y")),a=Number(i[t].tiles[r].attr("width")),n=Number(i[t].tiles[r].attr("height")),p=(s,p)=>{i[t].tiles[r].attr({x:e+(m*l-g-e)*p.pos,y:o+(f*l-M-o)*p.pos,width:a+(Math.ceil(l)+1-a)*p.pos,height:n+(Math.ceil(l)+1-n)*p.pos})};s.isAnimating=!0,i[t].tiles[r].attr({animator:0}).animate({animator:1},{step:p},function(){s.isAnimating=!1,s.redrawTiles&&(s.redrawTiles=!1,u(d))})}else(s.redrawTiles||parseFloat(t)!==y||(i[t].isActive||parseFloat(t)===y)&&Object.keys(i[t].tiles).map(e=>i[t].tiles[e]).some(e=>0===e.opacity))&&(s.redrawTiles=!1,u(d)),i[t].tiles[r].attr({x:m*l-g,y:f*l-M,width:Math.ceil(l)+1,height:Math.ceil(l)+1})}}}else n("Highcharts warning: Tiles Provider not defined in the Provider Registry.",!1)}update(){let{transformGroups:e}=this,o=this.chart,i=o.mapView,r=arguments[0],{provider:s}=r;if(e&&(e.forEach(e=>{0!==Object.keys(e).length&&e.destroy()}),this.transformGroups=[]),i&&!a(i.options.projection)&&s&&s.type){let e=t[s.type];if(e){let t=new e,{initialProjectionName:o}=t;i.update({projection:{name:o}})}}super.update.apply(this,arguments)}}return d.defaultOptions=l(r.defaultOptions,o),e.registerSeriesType("tiledwebmap",d),d}),o(t,"masters/modules/tiledwebmap.src.js",[t["Core/Globals.js"],t["Series/TiledWebMap/TiledWebMapSeries.js"],t["Maps/TilesProviders/TilesProviderRegistry.js"]],function(e,t,o){e.TilesProviderRegistry=o,t.compose(e.Chart)})});//# sourceMappingURL=tiledwebmap.js.map