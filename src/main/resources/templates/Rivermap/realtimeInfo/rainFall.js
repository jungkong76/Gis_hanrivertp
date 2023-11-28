var rfobscd = [];
var obsnm = [];
var agcnm = [];
var searchType = "1H";

var metro = [10134020, 10154020, 10154030, 10154010, 10134030, 10184150, 10074110, 10164080,
	10164010, 10164020, 10184170, 10194010, 10184060, 10184110, 10184220, 10174020,
	10184160, 10184230, 10184130, 10184180, 10184040, 12024010, 12024020, 11014120,
	10074080, 11014130, 11014020, 10184090, 10224050, 10064030, 10074010, 10074040,
	10074070, 10074120, 10074030, 10074100, 10204010, 10204020, 10214010, 10164050,
	11014090, 10164070, 10164060, 10164040, 11014030, 11014100, 10164030, 10184210,
	10184125, 10184010, 10074060, 10074090, 10234020, 10234030, 10234040, 11014140,
	10234010, 11014080, 11014010, 11014070, 10184020, 10224040, 10224070, 10224020,
	10224010, 10184120, 10224060, 10224090, 11014060, 11014040, 10184080, 10184100,
	10184190, 10184140, 10184200];
var seoul = [10184080, 10184100, 10184190, 10184140, 10184200];
var gyeonggi = [10134020, 10154020, 10154030, 10154010, 10134030, 10184150, 10074110, 10164080,
	10164010, 10164020, 10184170, 10194010, 10184060, 10184110, 10184220, 10174020,
	10184160, 10184230, 10184130, 10184180, 10184040, 12024010, 12024020, 11014120,
	10074080, 11014130, 11014020, 10184090, 10224050, 10064030, 10074010, 10074040,
	10074070, 10074120, 10074030, 10074100, 10204010, 10204020, 10214010, 10164050,
	11014090, 10164070, 10164060, 10164040, 11014030, 11014100, 10164030, 10184210,
	10184125, 10184010, 10074060, 10074090, 10234020, 10234030, 10234040, 11014140,
	10234010, 11014080, 11014010, 11014070, 10184020, 10224040, 10224070, 10224020,
	10224010, 10184120, 10224060, 10224090, 11014060, 11014040];

var startToday = new Date();
startToday.setDate(startToday.getDate() - 1);
var syear = startToday.getFullYear();
var smonth = (startToday.getMonth() + 1).toString().padStart(2, '0');
var sday = startToday.getDate().toString().padStart(2, '0');
var sminutes = startToday.getMinutes();
var shour = startToday.getHours();
var shourString = shour.toString().padStart(2, '0');
var adjustSString = sminutes.toString().padStart(2, '0');
var startD = syear + smonth + sday + shourString + adjustSString;

var endToday = new Date();
var eyear = endToday.getFullYear();
var emonth = (endToday.getMonth() + 1).toString().padStart(2, '0');
var eday = endToday.getDate().toString().padStart(2, '0');
var eminutes = endToday.getMinutes();
var ehour = endToday.getHours();
var ehourString = ehour.toString().padStart(2, '0');
var adjustMString = eminutes.toString().padStart(2, '0');
var endD = eyear + emonth + eday + ehourString + adjustMString;
var apiUrl2 = "http://api.hrfco.go.kr/89D58E93-6886-47F5-B9F4-A965F0D3FD60/rainfall/info.json";

$(document).ready(function() {
	$.getJSON(apiUrl2, function(result) {
		//console.log(result.content);
		for (let i = 0; i < result.content.length; i++) {
			if (metro.includes(parseInt(result.content[i].rfobscd))) {
				rfobscd.push(result.content[i].rfobscd);
				obsnm.push(result.content[i].obsnm);
				agcnm.push(result.content[i].agcnm);
		//		console.log(result.content[i].rfobscd);
				fetchAndDisplayData(searchType, result.content[i].rfobscd, startD, endD);
			}
		}
		//console.log(rfobscd);
		//console.log(obsnm);

		setDefaultDates();
	});
});

function setDefaultDates() {
	var currentDate = new Date();
	var yesterday = new Date(currentDate);
	yesterday.setDate(currentDate.getDate() - 1);
	var startDate = formatDate(yesterday);
	var endDate = formatDate(currentDate);
	$("#startDate").val(endDate);
}

function formatDate(date) {
	var year = date.getFullYear();
	var month = (date.getMonth() + 1).toString().padStart(2, '0');
	var day = date.getDate().toString().padStart(2, '0');
	return year + "-" + month + "-" + day;
}

function formatYMDHM(ymdhm) {
	if (ymdhm.length === 12) {
		var year = ymdhm.slice(0, 4);
		var month = ymdhm.slice(4, 6);
		var day = ymdhm.slice(6, 8);
		var hour = ymdhm.slice(8, 10);
		var minute = ymdhm.slice(10, 12);
		return year + '.' + month + '.' + day + ' ' + hour + ':' + minute;
	} if (ymdhm.length === 10) {
		var year = ymdhm.slice(0, 4);
		var month = ymdhm.slice(4, 6);
		var day = ymdhm.slice(6, 8);
		var hour = ymdhm.slice(8, 10);
		return year + '.' + month + '.' + day + ' ' + hour + '시';
	} if (ymdhm.length === 8) {
		var year = ymdhm.slice(0, 4);
		var month = ymdhm.slice(4, 6);
		var day = ymdhm.slice(6, 8);
		return year + '.' + month + '.' + day;
	} else {
		return ymdhm;
	}
}

function fetchAndDisplayData(searchType, rcd, startD, endD) {
    var apiUrl1 = "http://api.hrfco.go.kr/89D58E93-6886-47F5-B9F4-A965F0D3FD60/rainfall/list/" + searchType + "/" + rcd + "/" + startD + "/" + endD + ".json";
    console.log(apiUrl1);
    var table = document.getElementById("tableTitle");
    var headerRow = table.rows[0];
    var headers = [];
    for (var i = 0; i < headerRow.cells.length; i++) {
        headers.push(headerRow.cells[i].textContent);
    }

    $.get(apiUrl1, function (result) {
        //console.log(result.content[0]);
        var rainFall = [];

        for (let i = result.content.length - 1; i > 0 ; i--) {
		  rainFall.push(parseFloat(result.content[i].rf) + '/'+result.content[i].rfobscd);
        }
		//console.log(rainFall);
		console.log("Url1결과!!");

        $("table tbody").empty();
        var table = "";

        $.each(metro, function (index, value) {
            table += "<tr>";
            table += "<th class='f' value='" + rfobscd[index] + "'>" + obsnm[index] + "</th>";
            table += "<td>" + agcnm[index] + "</td>";

            let currentRainfall = rainFall[index] ? rainFall[index] : 0;

            table += "<td value='" + rfobscd[index] + "'>" + (currentRainfall === null ? '-' : currentRainfall) + "</td>";

            let three = 0;
            for (let j = 0; j < 3; j++) {
                if (index - j >= 0 && rainFall[index - j]) {
                    three += parseFloat(rainFall[index - j]);
                }
            }
            table += "<td>" + (three) + "</td>";

            let six = 0;
            for (let j = 0; j < 6; j++) {
                if (index - j >= 0 && rainFall[index - j]) {
                    six += parseFloat(rainFall[index - j]);
                }
            }
            table += "<td>" + (six) + "</td>";

            let twelve = 0;
            for (let j = 0; j < 12; j++) {
                if (index - j >= 0 && rainFall[index - j]) {
                    twelve += parseFloat(rainFall[index - j]);
                }
            }
            table += "<td>" + (twelve) + "</td>";

            let twentyfour = 0;
            for (let j = 0; j < 24; j++) {
                if (index - j >= 0 && rainFall[index - j]) {
                    twentyfour += parseFloat(rainFall[index - j]);
                }
            }
            table += "<td>" + (twentyfour) + "</td>";

            table += "</tr>";
        });

        $("table tbody").append(table);
    });
}

/* 
$(".searchBtn").click(function() {
	const date1 = document.getElementById("startDate").value;
	const newDate1 = new Date(date1);
	const date1Year = newDate1.getFullYear();
	const date1Month = String(newDate1.getMonth()+1).padStart(2,'0');
	const date1Day = String(newDate1.getDate()).padStart(2,'0');
	const searchDate1 = date1Year + date1Month + date1Day;
	startD = searchDate1;


	const date2 = document.getElementById("endDate").value;
	const newDate2 = new Date(date2);
	const currentDate = new Date();

	const date2Year = newDate2.getFullYear();
	const date2Month = String(newDate2.getMonth()+1).padStart(2,'0');
	const date2Day = String(newDate2.getDate()).padStart(2,'0');
	var date2Hour = endToday.getHours();
	var date2Min = endToday.getMinutes();
	if (newDate2.getFullYear() !== currentDate.getFullYear() ||
		newDate2.getMonth() !== currentDate.getMonth() ||
		newDate2.getDate() !== currentDate.getDate()) {
		date2Hour = '23';
		date2Min = '50';
	}

	var ehourString = date2Hour.toString().padStart(2, '0');
	var adjustMString = date2Min.toString().padStart(2, '0');
	const searchDate2 = date2Year + date2Month + date2Day + ehourString + adjustMString;
	endD = searchDate2

	const dayDifference = calculateDateDifference();
	if(dayDifference >= 30) {
		alert('전체 기간 조회는 30일 이내여야 합니다');
	} else {
		fetchAndDisplayData(searchType, rfobscd, startD, endD);
	}
});
*/

function findRowIndexByValue(valueToFind, data) {
	for (let i = 0; i < data.length; i++) {
		if (data[i][0] === valueToFind) {
			return i;
		}
	}
	return -1;
}
