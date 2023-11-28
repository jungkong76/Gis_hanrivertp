    //지도 띄우기
    var cctvMarkers = [];
    var riverMarkers = [];
    var pop = null;
    vw.ol3.CameraPosition.center = [14134718.970064852, 4512139.392021515];
    vw.ol3.CameraPosition.zoom =10;
    vw.ol3.MapOptions = {
        basemapType: vw.ol3.BasemapType.GRAPHIC,
        controlDensity: vw.ol3.DensityType.EMPTY,
        interactionDensity: vw.ol3.DensityType.FULL,
        controlsAutoArrange: true,
        homePosition: vw.ol3.CameraPosition,
        initPosition: vw.ol3.CameraPosition,
        size: [800, 800]
    };

    var vmap = new vw.ol3.Map("vmap", vw.ol3.MapOptions);
    markerLayer = new vw.ol3.layer.Marker(vmap);
    vmap.addLayer(markerLayer);
    function setMode(basemapType) {
        vmap.setBasemapType(basemapType);
    }
    var popupWindow;


    function openWindowPop(url, title) {
        if (popupWindow && !popupWindow.closed) {
            popupWindow.close();
        }
        const left = (window.screen.width - 400) / 2;
        const top = (window.screen.height - 400) / 2;
        popupWindow = window.open(
            url,
            title,
            `width=1000, height=580, top=${top}, left=${left}`);

        if (window.focus) {
            popupWindow.focus();
        }
    }

    //레이어 오픈
    var seoulRiver;
    document.getElementById('seoul_river').addEventListener('click', function () {
        if (!seoulRiver) {
            seoulRiver = new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://localhost:9898/geoserver/gis/wms',
                    params: {
                        'LAYERS': 'gis:lsmd_cont_uj201_11_202310',
                        'FORMAT': 'image/png',

                    },
                }),
            });

            vmap.addLayer(seoulRiver);
        } else {
            vmap.removeLayer(seoulRiver);
            seoulRiver = undefined;
        }
    });
    var gyeongiRiver;
    document.getElementById('gyeonggi_river').addEventListener('click', function () {
        if (!gyeongiRiver) {
            gyeongiRiver = new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://localhost:9898/geoserver/gis/wms',
                    params: {
                        'LAYERS': 'gis:lsmd_cont_uj201_41_202310',
                        'FORMAT': 'image/png',

                    },
                }),
            });

            vmap.addLayer(gyeongiRiver);
        } else {
            vmap.removeLayer(gyeongiRiver);
            gyeongiRiver = undefined;
        }
    });

    var seouldrainage;
    document.getElementById('seoul_drainage').addEventListener('click', function () {
        if (!seouldrainage) {
            seouldrainage = new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://localhost:9898/geoserver/gis/wms',
                    params: {
                        'LAYERS': 'sundo:lsmd_cont_um730_11_202310',
                        'FORMAT': 'image/png',

                    },
                }),
            });

            vmap.addLayer(seouldrainage);
        } else {
            vmap.removeLayer(seouldrainage);
            seouldrainage = undefined;
        }
    });

    var gyeonggidrainage;
    document.getElementById('gyeonggi_drainage').addEventListener('click', function () {
        if (!gyeonggidrainage) {
            gyeonggidrainage = new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://localhost:9898/geoserver/gis/wms',
                    params: {
                        'LAYERS': 'sundo:lsmd_cont_um730_41_202310',
                        'FORMAT': 'image/png',

                    },
                }),
            });

            vmap.addLayer(gyeonggidrainage);
        } else {
            vmap.removeLayer(gyeonggidrainage);
            gyeonggidrainage = undefined;
        }
    });

    function addRiverMarker(code, longitude, latitude, text) {
        var markerOption = {
            x: longitude,
            y: latitude,
            epsg: "EPSG:4326",
            iconUrl: '/img/map-icon2.png',
            title: text,
            contents: '<div onclick="openWindowPop(\'/hanRiver/detail/river/' + code + '\', \'' + text + '\')">수위 정보</div> ' +
                        '<div onclick="openWindowPop(\'/River/load?id=' + code + '\', \'' + text + '\')">하천 정보</div>' ,
            attr: { "code": code, "name": text },
        };

        var marker = markerLayer.addMarker(markerOption);
        riverMarkers.push(marker);
        marker.data = {
            code: code,
            name: text
        };
    }
    function addCCTVMarker(code, longitude, latitude, text) {
        var markerOption = {
            x: longitude,
            y: latitude,
            epsg: "EPSG:4326",
            iconUrl: '/img/cctv-icon.png',
            title: text,
            contents: '<div onclick="openWindowPop(\'http://hrfco.go.kr/popup/cctvMainView.do?Obscd=' + code + '\', \'' + text + '\')">실시간 cctv 영상</div>',
            attr: { "code": code, "name": text },
        };

        var marker = markerLayer.addMarker(markerOption);
        cctvMarkers.push(marker);
        marker.data = {
            code: code,
            name: text
        };
    }
    var riverCheckBox = document.getElementById("allRiver");
    riverCheckBox.addEventListener("change", function () {
        if (riverCheckBox.checked) {
            // river 마커를 추가하는 로직
            $.getJSON("/HanRiverMap/marker", function (response) {
                for (var i = 0; i < response.length; i++) {
                    var markerData = response[i];
                    var longitude = markerData.r_longitude;
                    var latitude = markerData.r_latitude;
                    var text = markerData.r_name;
                    var code = markerData.r_code;
                    // river 마커를 추가
                    addRiverMarker(code, longitude, latitude, text);
                }
            });
        } else {
            // river 마커 제거
            removeRiverMarkers();
        }
    });
    var cctvCheckBox = document.getElementById("addCctv");
    cctvCheckBox.addEventListener("change", function () {
        // cctv 마커를 추가하는 로직
        if (cctvCheckBox.checked) {
        $.getJSON("/Addr/lat", function (response) {
            removeCCTVMarkers(); // 기존 cctv 마커 제거
            for (var i = 0; i < response.length; i++) {
                var markerData = response[i];
                var longitude = markerData.response.result.point.x;
                var latitude = markerData.response.result.point.y;
                var text = markerData.name;
                var code = markerData.code;
                // cctv 마커를 추가
                addCCTVMarker(code, longitude, latitude, text);
            }
        });
    } else{
            removeCCTVMarkers();
        }
    });
    function removeCCTVMarkers() {
        cctvMarkers.forEach(function (cctvMarker) {
            markerLayer.removeMarker(cctvMarker);
        });
        cctvMarkers = []; // 배열 초기화
    }

    function removeRiverMarkers() {
        riverMarkers.forEach(function (riverMarker) {
            markerLayer.removeMarker(riverMarker);
        });
        riverMarkers = []; // 배열 초기화
    }

    rainFallMarkerLayer = new vw.ol3.layer.Marker(vmap);
    vmap.addLayer(rainFallMarkerLayer);

    function addRainFallMarker(){
        $.getJSON("http://api.hrfco.go.kr/8794F4D7-ED45-43EB-8E2F-1B721623F802/rainfall/info.json", function(response){
            response.content.forEach(function (markerData) {
                var addr = markerData.addr;
                if(addr.includes("경기도") || addr.includes("서울")) {
                    var rfobscd = markerData.rfobscd;
                    var longitude = parseCoordinate(markerData.lon);
                    var latitude = parseCoordinate(markerData.lat);
                    var text = markerData.obsnm;
                    RainFallMarker(rfobscd, longitude, latitude, text);
                    console.log(longitude);
                }

            });
        });
    }



    function RainFallMarker(rfobscd, longitude, latitude, text) {

        var markerOption = {
            x: longitude,
            y: latitude,
            epsg:"EPSG:4326",
            title: text,
            iconUrl: '//map.vworld.kr/images/ol3/marker_blue.png',
            contents :'<div onclick="openWindowPop(\'/hanRiver/detail/rainFall/' + rfobscd + '\', \'' + text + '\')">강수량</div>',

            text : {   offsetX: 0.5,
                offsetY: 20,
                font: '12px Calibri,sans-serif',
                fill: { color: '#000' },
                stroke: { color: '#fff', width: 2 },
                text: text
            },
            attr: {"code":rfobscd, "name":text},
        };
        var marker = rainFallMarkerLayer.addMarker(markerOption);

        marker.data = {
            code: rfobscd,
            name: text
        };
    }

    $('#rainFallBtn').click(function() {
        var isChecked =$(this).prop('checked');
        if(isChecked) {
            vmap.removeLayer(rainFallMarkerLayer);
            rainFallMarkerLayer = new vw.ol3.layer.Marker(vmap);
            vmap.addLayer(rainFallMarkerLayer);
            addRainFallMarker();
        } else {
            vmap.removeLayer(rainFallMarkerLayer);
        }
    });

    function parseCoordinate(coordinateString) {
        var lonParts = coordinateString.split('-');
        var lonDegrees = parseFloat(lonParts[0]);
        var lonMinutes = parseFloat(lonParts[1]);
        var lonSeconds = parseFloat(lonParts[2]);
        var lonDecimal = lonDegrees + lonMinutes / 60 + lonSeconds / 3600;
        return lonDecimal; // 부동 소수점 값으로 변환
    };


    document.addEventListener("DOMContentLoaded", function () {
        // 페이지 로딩이 완료되면 실행
        // updateWeatherImage(); // 초기 이미지 업데이트
        setInterval(updateWeatherImage, 5000); // 5초마다 이미지 업데이트
        // updateRainFallImage();
        setInterval(updateRainFallImage, 5000); // 5초마다 이미지 업데이트
    });

    function updateWeatherImage() {
        console.log("updateWeatherImage() excuted")
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        let day = currentDate.getDate().toString().padStart(2, '0');
        let hours = currentDate.getHours().toString().padStart(2, '0');
        let minutes = currentDate.getMinutes().toString().padStart(2, '0');
        let dateTime = 0;
        dateTime = year + month + day + hours + minutes;

        let url = `http://apihub.kma.go.kr/api/typ03/cgi/wrn/nph-wrn7?out=0&tmef=1&city=1&name=0&tm=${dateTime}&on=127.7&lat=36.1&range=300&size=685&wrn=W,R,C,D,O,V,T,S,Y,H,&authKey=tjD4kNMOSCqw-JDTDugq4g`;

        let weatherView = document.querySelector(".weatherView");
        weatherView.innerHTML = `<img src="${url}" alt="날씨 이미지"  width="410"/>`;
    }

    function updateRainFallImage() {
        console.log("updateRainFallImage() excuted")
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        let day = currentDate.getDate().toString().padStart(2, '0');
        let hours = currentDate.getHours().toString().padStart(2, '0');
        let minutes = currentDate.getMinutes().toString().padStart(2, '0');
        let dateTime = year + month + day + hours + minutes;

        let url = `http://www.hrfco.go.kr/servlet/sumun/rainfallSituationImg.do?Sdt=202311021510&Edt=${dateTime}`;

        let rainFallView = document.querySelector(".rainFallView");
        rainFallView.innerHTML = `<img src="${url}" alt="날씨 이미지" />`;
    }
