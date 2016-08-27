var page = "weapons";
var weaponArray = weaponArray.result;
var weaponStageArray = weaponStageArray.result.rows;
$(document).on('change', 'input#extraSharp', function() {
	var arr = weaponArray;
	if($("#extraSharp").is(':checked')){
		//console.log('checked');  // checked
		for(i = 0; i < arr.length; i ++) {
			$('#id'+arr[i].data[0]).find('span.leaveBar .oth-cut-set').width(1000 / parseInt($('#id'+arr[i].data[0]).find('span.leaveBar').attr('data-i'), 10) + '%');
			$('#id'+arr[i].data[0]).find('span.leaveBar .oth-hav-set').width(99-1000 / parseInt($('#id'+arr[i].data[0]).find('span.leaveBar').attr('data-i'), 10) + '%');
		}
	}
	else {
		//console.log('unchecked');  // unchecked
		for(i = 0; i < arr.length; i ++) {
			$('#id'+arr[i].data[0]).find('span.leaveBar .oth-cut-set').width('0%');
			$('#id'+arr[i].data[0]).find('span.leaveBar .oth-hav-set').width('100%');
		}
	}
});
function weaponjs() {
	var arr = weaponArray; var out = ""; var out2 = ""; var i;
	//sharpness formula
	for(i = 0; i < arr.length; i ++) {
		var width = ["0", "0", "0", "0", "0", "0", "0", "0"];
		width[0] = arr[i].data[17] * 100 / 5000000;
		width[1] = (arr[i].data[18] - arr[i].data[17]) * 100 / 5000000;
		width[2] = (arr[i].data[19] - arr[i].data[18]) * 100 / 5000000;
		width[3] = (arr[i].data[20] - arr[i].data[19]) * 100 / 5000000;
		width[4] = (arr[i].data[21] - arr[i].data[20]) * 100 / 5000000;
		width[5] = (arr[i].data[22] - arr[i].data[21]) * 100 / 5000000;
		width[7] = (arr[i].data[23] - arr[i].data[22]) * 100 / 5000000;
		width[6] = 100 - arr[i].data[16] * 100 / 5000000;
			//bow variables
		var name = ['','Pierce Lv1','Pierce Lv2','Pierce Lv3','Pierce Lv4','Rapid Lv1','Rapid Lv2','Rapid Lv3','Rapid Lv4','Scatter Lv1','Scatter Lv2','Scatter Lv3','Scatter Lv4'],
			//gunlance shell variables
			shells = ["Normal","Long","Wide"],
			//hunting horn variables
			songs = {1:{"line1":"red","line2":"red","line3":"","line5":"Reinforce Self"},101:{"line1":"green","line2":"green","line3":"","line5":"Attack Up (s)"},102:{"line1":"green","line2":"green","line3":"","line5":"Critical Rate Up & Heal Up (s)"},103:{"line1":"green","line2":"green","line3":"","line5":"Attack Up (L)"},104:{"line1":"green","line2":"green","line3":"","line5":"Defense Up (s)"},105:{"line1":"green","line2":"green","line3":"","line5":"Defense Up (L)"},106:{"line1":"green","line2":"green","line3":"","line5":"Elemental Attack Up"},107:{"line1":"green","line2":"green","line3":"","line5":"Status Attack Up"},108:{"line1":"green","line2":"green","line3":"","line5":"Ice/Water Defense Up (s)"},109:{"line1":"green","line2":"green","line3":"","line5":"Ice/Water Defense Up (L)"},110:{"line1":"green","line2":"green","line3":"","line5":"Fire/Thunder Defense up (s)"},111:{"line1":"green","line2":"green","line3":"","line5":"Fire/Thunder Defense up (L)"},112:{"line1":"green","line2":"green","line3":"","line5":"Dragon Defense Up (s)"},113:{"line1":"green","line2":"green","line3":"","line5":"Dragon Defense Up (L)"},114:{"line1":"green","line2":"green","line3":"","line5":"All Resistance Up"},115:{"line1":"green","line2":"green","line3":"","line5":"Heal (s)"},116:{"line1":"green","line2":"green","line3":"","line5":"Heal (L)"},117:{"line1":"green","line2":"green","line3":"","line5":"Heal (m) & Antidote"},118:{"line1":"green","line2":"green","line3":"","line5":"Recovery Rate Up (m) & Anti-bacterial"},119:{"line1":"green","line2":"green","line3":"","line5":"Health Recovery Rate Up (s)"},120:{"line1":"green","line2":"green","line3":"","line5":"Recovery Rate Up (L)"},121:{"line1":"green","line2":"green","line3":"","line5":"Stamina Consumption Negate (S)"},122:{"line1":"green","line2":"green","line3":"","line5":"Stamina Consumption Negate (L)"},123:{"line1":"green","line2":"green","line3":"","line5":"Psychic & Cold Cancel"},124:{"line1":"green","line2":"green","line3":"","line5":"Psychic & Heat Cancel"},125:{"line1":"green","line2":"green","line3":"","line5":"Mud/Snow Negated"},126:{"line1":"green","line2":"green","line3":"","line5":"Tremor/Paralyse Negated"},127:{"line1":"green","line2":"green","line3":"","line5":"Negate Wind Pressure"},128:{"line1":"green","line2":"green","line3":"","line5":"Negate Dragon Wind Pressure"},129:{"line1":"green","line2":"green","line3":"","line5":"Hearing Protection (s)"},130:{"line1":"green","line2":"green","line3":"","line5":"Hearing Protection (L)"},131:{"line1":"green","line2":"green","line3":"","line5":"All Status Effects Negated"},201:{"line1":"blue","line2":"blue","line3":"","line5":"Attack Up (s)"},202:{"line1":"blue","line2":"blue","line3":"","line5":"Critical Rate Up & Heal Up (s)"},203:{"line1":"blue","line2":"blue","line3":"","line5":"Attack Up (L)"},204:{"line1":"blue","line2":"blue","line3":"","line5":"Defense Up (s)"},205:{"line1":"blue","line2":"blue","line3":"","line5":"Defense Up (L)"},206:{"line1":"blue","line2":"blue","line3":"","line5":"Elemental Attack Up"},207:{"line1":"blue","line2":"blue","line3":"","line5":"Status Attack Up"},208:{"line1":"blue","line2":"blue","line3":"","line5":"Ice/Water Defense Up (s)"},209:{"line1":"blue","line2":"blue","line3":"","line5":"Ice/Water Defense Up (L)"},210:{"line1":"blue","line2":"blue","line3":"","line5":"Fire/Thunder Defense up (s)"},211:{"line1":"blue","line2":"blue","line3":"","line5":"Fire/Thunder Defense up (L)"},212:{"line1":"blue","line2":"blue","line3":"","line5":"Dragon Defense Up (s)"},213:{"line1":"blue","line2":"blue","line3":"","line5":"Dragon Defense Up (L)"},214:{"line1":"blue","line2":"blue","line3":"","line5":"All Resistance Up"},215:{"line1":"blue","line2":"blue","line3":"","line5":"Heal (s)"},216:{"line1":"blue","line2":"blue","line3":"","line5":"Heal (L)"},217:{"line1":"blue","line2":"blue","line3":"","line5":"Heal (m) & Antidote"},218:{"line1":"blue","line2":"blue","line3":"","line5":"Recovery Rate Up (m) & Anti-bacterial"},219:{"line1":"blue","line2":"blue","line3":"","line5":"Health Recovery Rate Up (s)"},220:{"line1":"blue","line2":"blue","line3":"","line5":"Recovery Rate Up (L)"},221:{"line1":"blue","line2":"blue","line3":"","line5":"Stamina Consumption Negate (S)"},222:{"line1":"blue","line2":"blue","line3":"","line5":"Stamina Consumption Negate (L)"},223:{"line1":"blue","line2":"blue","line3":"","line5":"Psychic & Cold Cancel"},224:{"line1":"blue","line2":"blue","line3":"","line5":"Psychic & Heat Cancel"},225:{"line1":"blue","line2":"blue","line3":"","line5":"Mud/Snow Negated"},226:{"line1":"blue","line2":"blue","line3":"","line5":"Tremor/Paralyse Negated"},227:{"line1":"blue","line2":"blue","line3":"","line5":"Negate Wind Pressure"},228:{"line1":"blue","line2":"blue","line3":"","line5":"Negate Dragon Wind Pressure"},229:{"line1":"blue","line2":"blue","line3":"","line5":"Hearing Protection (s)"},230:{"line1":"blue","line2":"blue","line3":"","line5":"Hearing Protection (L)"},231:{"line1":"blue","line2":"blue","line3":"","line5":"All Status Effects Negated"},301:{"line1":"red","line2":"green","line3":"red","line5":"Attack Up (s)"},302:{"line1":"red","line2":"green","line3":"red","line5":"Critical Rate Up & Heal Up (s)"},303:{"line1":"red","line2":"green","line3":"red","line5":"Attack Up (L)"},304:{"line1":"red","line2":"green","line3":"red","line5":"Defense Up (s)"},305:{"line1":"red","line2":"green","line3":"red","line5":"Defense Up (L)"},306:{"line1":"red","line2":"green","line3":"red","line5":"Elemental Attack Up"},307:{"line1":"red","line2":"green","line3":"red","line5":"Status Attack Up"},308:{"line1":"red","line2":"green","line3":"red","line5":"Ice/Water Defense Up (s)"},309:{"line1":"red","line2":"green","line3":"red","line5":"Ice/Water Defense Up (L)"},310:{"line1":"red","line2":"green","line3":"red","line5":"Fire/Thunder Defense up (s)"},311:{"line1":"red","line2":"green","line3":"red","line5":"Fire/Thunder Defense up (L)"},312:{"line1":"red","line2":"green","line3":"red","line5":"Dragon Defense Up (s)"},313:{"line1":"red","line2":"green","line3":"red","line5":"Dragon Defense Up (L)"},314:{"line1":"red","line2":"green","line3":"red","line5":"All Resistance Up"},315:{"line1":"red","line2":"green","line3":"red","line5":"Heal (s)"},316:{"line1":"red","line2":"green","line3":"red","line5":"Heal (L)"},317:{"line1":"red","line2":"green","line3":"red","line5":"Heal (m) & Antidote"},318:{"line1":"red","line2":"green","line3":"red","line5":"Heal (m) & Anti-bacterial"},319:{"line1":"red","line2":"green","line3":"red","line5":"Health Recovery Rate Up (s)"},320:{"line1":"red","line2":"green","line3":"red","line5":"Recovery Rate Up (L)"},321:{"line1":"red","line2":"green","line3":"red","line5":"Stamina Consumption Negate (S)"},322:{"line1":"red","line2":"green","line3":"red","line5":"Stamina Consumption Negate (L)"},323:{"line1":"red","line2":"green","line3":"red","line5":"Psychic & Cold Cancel"},324:{"line1":"red","line2":"green","line3":"red","line5":"Psychic & Heat Cancel"},325:{"line1":"red","line2":"green","line3":"red","line5":"Mud/Snow Negated"},326:{"line1":"red","line2":"green","line3":"red","line5":"Tremor/Paralyse Negated"},327:{"line1":"red","line2":"green","line3":"red","line5":"Negate Wind Pressure"},328:{"line1":"red","line2":"green","line3":"red","line5":"Negate Dragon Wind Pressure"},329:{"line1":"red","line2":"green","line3":"red","line5":"Hearing Protection (s)"},330:{"line1":"red","line2":"green","line3":"red","line5":"Hearing Protection (L)"},331:{"line1":"red","line2":"green","line3":"red","line5":"All Status Effects Negated"},401:{"line1":"red","line2":"blue","line3":"red","line5":"Attack Up (s)"},402:{"line1":"red","line2":"blue","line3":"red","line5":"Critical Rate Up & Heal Up (s)"},403:{"line1":"red","line2":"blue","line3":"red","line5":"Attack Up (L)"},404:{"line1":"red","line2":"blue","line3":"red","line5":"Defense Up (s)"},405:{"line1":"red","line2":"blue","line3":"red","line5":"Defense Up (L)"},406:{"line1":"red","line2":"blue","line3":"red","line5":"Elemental Attack Up"},407:{"line1":"red","line2":"blue","line3":"red","line5":"Status Attack Up"},408:{"line1":"red","line2":"blue","line3":"red","line5":"Ice/Water Defense Up (s)"},409:{"line1":"red","line2":"blue","line3":"red","line5":"Ice/Water Defense Up (L)"},410:{"line1":"red","line2":"blue","line3":"red","line5":"Fire/Thunder Defense up (s)"},411:{"line1":"red","line2":"blue","line3":"red","line5":"Fire/Thunder Defense up (L)"},412:{"line1":"red","line2":"blue","line3":"red","line5":"Dragon Defense Up (s)"},413:{"line1":"red","line2":"blue","line3":"red","line5":"Dragon Defense Up (L)"},414:{"line1":"red","line2":"blue","line3":"red","line5":"All Resistance Up"},415:{"line1":"red","line2":"blue","line3":"red","line5":"Heal (s)"},416:{"line1":"red","line2":"blue","line3":"red","line5":"Heal (L)"},417:{"line1":"red","line2":"blue","line3":"red","line5":"Heal (m) & Antidote"},418:{"line1":"red","line2":"blue","line3":"red","line5":"Recovery Rate Up (m) & Anti-bacterial"},419:{"line1":"red","line2":"blue","line3":"red","line5":"Health Recovery Rate Up (s)"},420:{"line1":"red","line2":"blue","line3":"red","line5":"Recovery Rate Up (L)"},421:{"line1":"red","line2":"blue","line3":"red","line5":"Stamina Consumption Negate (S)"},422:{"line1":"red","line2":"blue","line3":"red","line5":"Stamina Consumption Negate (L)"},423:{"line1":"red","line2":"blue","line3":"red","line5":"Psychic & Cold Cancel"},424:{"line1":"red","line2":"blue","line3":"red","line5":"Psychic & Heat Cancel"},425:{"line1":"red","line2":"blue","line3":"red","line5":"Mud/Snow Negated"},426:{"line1":"red","line2":"blue","line3":"red","line5":"Tremor/Paralyse Negated"},427:{"line1":"red","line2":"blue","line3":"red","line5":"Negate Wind Pressure"},428:{"line1":"red","line2":"blue","line3":"red","line5":"Negate Dragon Wind Pressure"},429:{"line1":"red","line2":"blue","line3":"red","line5":"Hearing Protection (s)"},430:{"line1":"red","line2":"blue","line3":"red","line5":"Hearing Protection (L)"},431:{"line1":"red","line2":"blue","line3":"red","line5":"All Status Effects Negated"},501:{"line1":"green","line2":"red","line3":"green","line5":"Attack Up (s)"},502:{"line1":"green","line2":"red","line3":"green","line5":"Critical Rate Up & Heal Up (s)"},503:{"line1":"green","line2":"red","line3":"green","line5":"Attack Up (L)"},504:{"line1":"green","line2":"red","line3":"green","line5":"Defense Up (s)"},505:{"line1":"green","line2":"red","line3":"green","line5":"Defense Up (L)"},506:{"line1":"green","line2":"red","line3":"green","line5":"Elemental Attack Up"},507:{"line1":"green","line2":"red","line3":"green","line5":"Status Attack Up"},508:{"line1":"green","line2":"red","line3":"green","line5":"Ice/Water Defense Up (s)"},509:{"line1":"green","line2":"red","line3":"green","line5":"Ice/Water Defense Up (L)"},510:{"line1":"green","line2":"red","line3":"green","line5":"Fire/Thunder Defense up (s)"},511:{"line1":"green","line2":"red","line3":"green","line5":"Fire/Thunder Defense up (L)"},512:{"line1":"green","line2":"red","line3":"green","line5":"Dragon Defense Up (s)"},513:{"line1":"green","line2":"red","line3":"green","line5":"Dragon Defense Up (L)"},514:{"line1":"green","line2":"red","line3":"green","line5":"All Resistance Up"},515:{"line1":"green","line2":"red","line3":"green","line5":"Heal (s)"},516:{"line1":"green","line2":"red","line3":"green","line5":"Heal (L)"},517:{"line1":"green","line2":"red","line3":"green","line5":"Heal (m) & Antidote"},518:{"line1":"green","line2":"red","line3":"green","line5":"Recovery Rate Up (m) & Anti-bacterial"},519:{"line1":"green","line2":"red","line3":"green","line5":"Health Recovery Rate Up (s)"},520:{"line1":"green","line2":"red","line3":"green","line5":"Recovery Rate Up (L)"},521:{"line1":"green","line2":"red","line3":"green","line5":"Stamina Consumption Negate (S)"},522:{"line1":"green","line2":"red","line3":"green","line5":"Stamina Consumption Negate (L)"},523:{"line1":"green","line2":"red","line3":"green","line5":"Psychic & Cold Cancel"},524:{"line1":"green","line2":"red","line3":"green","line5":"Psychic & Heat Cancel"},525:{"line1":"green","line2":"red","line3":"green","line5":"Mud/Snow Negated"},526:{"line1":"green","line2":"red","line3":"green","line5":"Tremor/Paralyse Negated"},527:{"line1":"green","line2":"red","line3":"green","line5":"Negate Wind Pressure"},528:{"line1":"green","line2":"red","line3":"green","line5":"Negate Dragon Wind Pressure"},529:{"line1":"green","line2":"red","line3":"green","line5":"Hearing Protection (s)"},530:{"line1":"green","line2":"red","line3":"green","line5":"Hearing Protection (L)"},531:{"line1":"green","line2":"red","line3":"green","line5":"All Status Effects Negated"},601:{"line1":"blue","line2":"red","line3":"blue","line5":"Attack Up (s)"},602:{"line1":"blue","line2":"red","line3":"blue","line5":"Critical Rate Up & Heal Up (s)"},603:{"line1":"blue","line2":"red","line3":"blue","line5":"Attack Up (L)"},604:{"line1":"blue","line2":"red","line3":"blue","line5":"Defense Up (s)"},605:{"line1":"blue","line2":"red","line3":"blue","line5":"Defense Up (L)"},606:{"line1":"blue","line2":"red","line3":"blue","line5":"Elemental Attack Up"},607:{"line1":"blue","line2":"red","line3":"blue","line5":"Status Attack Up"},608:{"line1":"blue","line2":"red","line3":"blue","line5":"Ice/Water Defense Up (s)"},609:{"line1":"blue","line2":"red","line3":"blue","line5":"Ice/Water Defense Up (L)"},610:{"line1":"blue","line2":"red","line3":"blue","line5":"Fire/Thunder Defense up (s)"},611:{"line1":"blue","line2":"red","line3":"blue","line5":"Fire/Thunder Defense up (L)"},612:{"line1":"blue","line2":"red","line3":"blue","line5":"Dragon Defense Up (s)"},613:{"line1":"blue","line2":"red","line3":"blue","line5":"Dragon Defense Up (L)"},614:{"line1":"blue","line2":"red","line3":"blue","line5":"All Resistance Up"},615:{"line1":"blue","line2":"red","line3":"blue","line5":"Heal (s)"},616:{"line1":"blue","line2":"red","line3":"blue","line5":"Heal (L)"},617:{"line1":"blue","line2":"red","line3":"blue","line5":"Heal (m) & Antidote"},618:{"line1":"blue","line2":"red","line3":"blue","line5":"Recovery Rate Up (m) & Anti-bacterial"},619:{"line1":"blue","line2":"red","line3":"blue","line5":"Health Recovery Rate Up (s)"},620:{"line1":"blue","line2":"red","line3":"blue","line5":"Recovery Rate Up (L)"},621:{"line1":"blue","line2":"red","line3":"blue","line5":"Stamina Consumption Negate (S)"},622:{"line1":"blue","line2":"red","line3":"blue","line5":"Stamina Consumption Negate (L)"},623:{"line1":"blue","line2":"red","line3":"blue","line5":"Psychic & Cold Cancel"},624:{"line1":"blue","line2":"red","line3":"blue","line5":"Psychic & Heat Cancel"},625:{"line1":"blue","line2":"red","line3":"blue","line5":"Mud/Snow Negated"},626:{"line1":"blue","line2":"red","line3":"blue","line5":"Tremor/Paralyse Negated"},627:{"line1":"blue","line2":"red","line3":"blue","line5":"Negate Wind Pressure"},628:{"line1":"blue","line2":"red","line3":"blue","line5":"Negate Dragon Wind Pressure"},629:{"line1":"blue","line2":"red","line3":"blue","line5":"Hearing Protection (s)"},630:{"line1":"blue","line2":"red","line3":"blue","line5":"Hearing Protection (L)"},631:{"line1":"blue","line2":"red","line3":"blue","line5":"All Status Effects Negated"},703:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Attack Up (L)"},706:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Elemental Attack Up"},707:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Status Attack Up"},714:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"All Resistance Up"},716:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Heal (L)"},730:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Hearing Protection (L)"},731:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"All Status Effects Negated"},741:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Sonic Waves"},742:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Extend Songs Duration"},803:{"line1":"purple","line2":"purple","line3":"purple","line5":"Attack Up (L)"},806:{"line1":"purple","line2":"purple","line3":"purple","line5":"Elemental Attack Up"},807:{"line1":"purple","line2":"purple","line3":"purple","line5":"Status Attack Up"},814:{"line1":"purple","line2":"purple","line3":"purple","line5":"All Resistance Up"},816:{"line1":"purple","line2":"purple","line3":"purple","line5":"Heal (L)"},830:{"line1":"purple","line2":"purple","line3":"purple","line5":"Hearing Protection (L)"},831:{"line1":"purple","line2":"purple","line3":"purple","line5":"All Status Effects Negated"},841:{"line1":"purple","line2":"purple","line3":"purple","line5":"Flinch Negated"},842:{"line1":"purple","line2":"purple","line3":"purple","line5":"Extend Songs Duration"}},
			bowgunAmmo = [],
			stages = [];
		stages = lookupStage(arr[i].data[0]);
		if (stages.length !== 0) {
			stagesOut = '<tr><td colspan="4"><div class="stagesContainer">';
			for (a = 0; a < stages.length; a++) {
				stagesOut += '<table class="stage'+a+'" id="stage'+stages[a].data[0]+'"><tr><td><hr />['+stages[a].data[3]+'-'+stages[a].data[4]+' Upgrade]</td></tr>'+
				'<tr class="white-text no'+stages[a].data[9]+'"><td><a href="/materials/?search='+translate(stages[a].data[9])+'" target="_blank">'+translate(stages[a].data[9])+'</a> x'+stages[a].data[8]+'</td></tr>'+
				'<tr class="white-text no'+stages[a].data[12]+'"><td><a href="/materials/?search='+translate(stages[a].data[12])+'" target="_blank">'+translate(stages[a].data[12])+'</a> x'+stages[a].data[11]+'</td></tr>'+
				'<tr class="white-text no'+stages[a].data[15]+'"><td><a href="/materials/?search='+translate(stages[a].data[15])+'" target="_blank">'+translate(stages[a].data[15])+'</a> x'+stages[a].data[14]+'</td></tr>'+
				'<tr class="white-text no'+stages[a].data[18]+'"><td><a href="/materials/?search='+translate(stages[a].data[18])+'" target="_blank">'+translate(stages[a].data[18])+'</a> x'+stages[a].data[17]+'</td></tr>'+
				'<tr class="white-text no'+stages[a].data[21]+'"><td><a href="/materials/?search='+translate(stages[a].data[21])+'" target="_blank">'+translate(stages[a].data[21])+'</a> x'+stages[a].data[20]+'</td></tr>'+
				'<tr class="black-text no'+stages[a].data[26]+'"><td>'+translate(stages[a].data[26])+' x'+stages[a].data[27]+'</td></tr>'+
				'<tr class="black-text no'+stages[a].data[29]+'"><td>'+translate(stages[a].data[29])+' x'+stages[a].data[30]+'</td></tr>'+
				'</table>';
			}
				stagesOut += '</div></td></tr>'; //<tr><td><a>&#60;&#60;&#60;&#60;</a></td><td><a>&#62;&#62;&#62;&#62;</a></td></tr>';
		} else {
			stagesOut = '';
		}
		for(x = 30; x < 70; x++){
			bowgunAmmo.push(arr[i].data[x]);
		}
		charge = [];
		burst = [];
		for(y = 0; y < bowgunAmmo.length; y += 4) {
			var skillstring = bowgunAmmo[y]+' '+bowgunAmmo[y+1]+' '+bowgunAmmo[y+2]+' '+bowgunAmmo[y+3];
			if (skillstring.indexOf("蓄力") >= 0) {
				charge.push(bowgunAmmo[y]);
				charge.push(bowgunAmmo[y+1]);
				charge.push(bowgunAmmo[y+2]);
				charge.push(bowgunAmmo[y+3]);
			}
			if (skillstring.indexOf("速射2发") >= 0 || skillstring.indexOf("速射3发") >= 0) {
				burst.push(bowgunAmmo[y]);
				burst.push(bowgunAmmo[y+1]);
				burst.push(bowgunAmmo[y+2]);
				burst.push(bowgunAmmo[y+3]);
			}
		}
		chargeOut = '<tr class="no'+charge[0]+'"><td>[Charge Ammo]</td><td>[Load]</td><td>[Recoil]</td></tr>';
		for(y = 0; y < charge.length; y += 4) {
			chargeOut += '<tr><td class="white-text">'+translate(charge[y])+'</td><td class="white-text">'+charge[y+1]+'</td><td class="white-text">'+translate(charge[y+3])+'</td></tr>';
		}
		burstOut = '<tr class="no'+burst[0]+'"><td>[Burst Ammo]</td><td>[Load]</td><td>[Recoil]</td><td>[Burst]</td></tr>';
		for(y = 0; y < burst.length; y += 4) {
			burstOut += '<tr><td class="white-text">'+translate(burst[y])+'</td><td class="white-text">'+burst[y+1]+'</td><td class="white-text">'+translate(burst[y+3])+'</td><td class="white-text">'+burst[y+2].substring(2, 3)+'</td></tr>';
		}
		//placeholders so code doesn't break on other pages
		var song1 = songs[1]; var song2 = songs[1]; var song3 = songs[1]; var song4 = songs[1]; var song5 = songs[1];
		//actual variables
		if (arr[i].data[143]!=='') {song1 = songs[arr[i].data[143]];}
		if (arr[i].data[144]!=='') {song2 = songs[arr[i].data[144]];}
		if (arr[i].data[145]!=='') {song3 = songs[arr[i].data[145]];}
		if (arr[i].data[146]!=='') {song4 = songs[arr[i].data[146]];}
		if (arr[i].data[147]!=='') {song5 = songs[arr[i].data[147]];}

		if (arr[i].data[94]!=="") {
			forgeicon = '<span class="forgeicon"></span>';
		} else {
			forgeicon = '';
		}
		
		//output
		out = '<div class="matpiccell weapon"><div class="weaponpic"><ul class="list"><li class="item">'+
		//can forge icon
		forgeicon+'<img src="../../images/item/'+arr[i].data[4]+'.png"></li><li class="info"><table class="weaponinfo weapon'+arr[i].data[2]+'">'+
			//title
		'<tr><td class="piecename" colspan="4">'+arr[i].data[1]+'<br>'+translate(arr[i].data[136])+'<hr /></td></tr>'+
			//char level
		'<tr><td colspan="4">Character Level: <span class="white-text">'+arr[i].data[7]+'</span><hr /></td></tr>'+
			//attributes
		'<tr class="no'+arr[i].data[7]+arr[i].data[8]+arr[i].data[9]+arr[i].data[10]+arr[i].data[11]+'"><td colspan="4">[Attributes]</td></tr>'+
			//sharpness
		'<tr class="no'+arr[i].data[17]+'"><td colspan="4">Sharpness</td></tr>'+
			//sharpness bar
		'<tr class="no'+arr[i].data[17]+'"><td class="sharpbar" colspan="4"><div class="basePro clearfix"><div class="barWidth"><span class="colorBar bar-1" style="width:'+width[0]+'%"></span><span class="colorBar bar-2" style="width:'+width[1]+'%"></span><span class="colorBar bar-3" style="width:'+width[2]+'%"></span><span class="colorBar bar-4" style="width:'+width[3]+'%"></span><span class="colorBar bar-5" style="width:'+width[4]+'%"></span><span class="colorBar bar-6" style="width:'+width[5]+'%"></span><span class="colorBar bar-7" style="width:'+width[7]+'%"></span><span class="leaveBar" style="width:'+width[6]+'%" data-i="'+width[6]+'"><span class="oth-cut-set" style="width: 0%;"></span><span class="oth-hav-set" style="width: 100%;"></span></span></div></div></td></tr><tr><td colspan="4"><table class="innertable">'+
			//attack
		'<tr><td>Attack:</td><td class="white-text">'+arr[i].data[5]+'</td></tr>'+
			//defense
		'<tr class="no'+arr[i].data[151]+'"><td>Defense:</td><td class="white-text">'+arr[i].data[151]+'</td></tr>'+
			//critical rate
		'<tr><td>Critical Rate:</td><td class="white-text">'+arr[i].data[6]+'</td></tr>'+
			//water attack
		'<tr class="no'+arr[i].data[8]+'"><td>Water Attack:</td><td class="white-text">'+arr[i].data[8]+'</td></tr>'+
			//fire attack
		'<tr class="no'+arr[i].data[9]+'"><td>Fire Attack:</td><td class="white-text">'+arr[i].data[9]+'</td></tr>'+
			//thunder attack
		'<tr class="no'+arr[i].data[10]+'"><td>Thunder Attack:</td><td class="white-text">'+arr[i].data[10]+'</td></tr>'+
			//dragon attack
		'<tr class="no'+arr[i].data[11]+'"><td>Dragon Attack:</td><td class="white-text">'+arr[i].data[11]+'</td></tr>'+
			//ice attack
		'<tr class="no'+arr[i].data[12]+'"><td>Ice Attack:</td><td class="white-text">'+arr[i].data[12]+'</td></tr>'+
			//poison up
		'<tr class="poison no'+arr[i].data[13]+'"><td>Poison+:</td><td>'+arr[i].data[13]+'</td></tr>'+
			//paralysis up
		'<tr class="paralysis no'+arr[i].data[15]+'"><td>Paralysis+:</td><td>'+arr[i].data[15]+'</td></tr>'+
			//sleep up
		'<tr class="sleep no'+arr[i].data[14]+'"><td>Sleep+:</td><td>'+arr[i].data[14]+'</td></tr>'+
			//reload speed
		'<tr class="no'+arr[i].data[27]+'"><td>Reload Speed:</td><td class="white-text">'+translate(arr[i].data[27])+'</td></tr>'+
			//shelling properties
		'<tr class="no'+arr[i].data[137]+'"><td colspan="4"><hr />[Shelling Properties]</td></tr><tr class="no'+arr[i].data[137]+'"><td>Shelling Type:</td><td class="white-text">'+shells[parseInt(arr[i].data[137], 10)-1]+'</tr>'+
			//shelling rating
		'<tr class="no'+arr[i].data[138]+'"><td>Shelling Rating:</td><td class="white-text">Lv'+arr[i].data[138]+'</td></tr>'+
			//bow guage level
		'<tr class="no'+arr[i].data[74]+'"><td>Max Guage:</td><td class="white-text">'+arr[i].data[74]+'</td></tr></table></td></tr>'+
			//bowgun basic ammo
		'<tr class="no'+arr[i].data[30]+'"><td>[Ammo]</td><td>[Load]</td><td>[Recoil]</td></tr>'+
		'<tr class="no'+arr[i].data[30]+' '+arr[i].data[32]+'"><td class="white-text">'+translate(arr[i].data[30])+'</td><td class="white-text">'+arr[i].data[31]+'</td><td class="white-text">'+translate(arr[i].data[33])+'</td></tr>'+
		'<tr class="no'+arr[i].data[34]+' '+arr[i].data[36]+'"><td class="white-text">'+translate(arr[i].data[34])+'</td><td class="white-text">'+arr[i].data[35]+'</td><td class="white-text">'+translate(arr[i].data[37])+'</td></tr>'+
		'<tr class="no'+arr[i].data[38]+' '+arr[i].data[40]+'"><td class="white-text">'+translate(arr[i].data[38])+'</td><td class="white-text">'+arr[i].data[39]+'</td><td class="white-text">'+translate(arr[i].data[41])+'</td></tr>'+
		'<tr class="no'+arr[i].data[42]+' '+arr[i].data[44]+'"><td class="white-text">'+translate(arr[i].data[42])+'</td><td class="white-text">'+arr[i].data[43]+'</td><td class="white-text">'+translate(arr[i].data[45])+'</td></tr>'+
		'<tr class="no'+arr[i].data[46]+' '+arr[i].data[48]+'"><td class="white-text">'+translate(arr[i].data[46])+'</td><td class="white-text">'+arr[i].data[47]+'</td><td class="white-text">'+translate(arr[i].data[49])+'</td></tr>'+
		'<tr class="no'+arr[i].data[50]+' '+arr[i].data[52]+'"><td class="white-text">'+translate(arr[i].data[50])+'</td><td class="white-text">'+arr[i].data[51]+'</td><td class="white-text">'+translate(arr[i].data[53])+'</td></tr>'+
		'<tr class="no'+arr[i].data[54]+' '+arr[i].data[56]+'"><td class="white-text">'+translate(arr[i].data[54])+'</td><td class="white-text">'+arr[i].data[55]+'</td><td class="white-text">'+translate(arr[i].data[57])+'</td></tr>'+
		'<tr class="no'+arr[i].data[58]+' '+arr[i].data[60]+'"><td class="white-text">'+translate(arr[i].data[58])+'</td><td class="white-text">'+arr[i].data[59]+'</td><td class="white-text">'+translate(arr[i].data[61])+'</td></tr>'+
		'<tr class="no'+arr[i].data[62]+' '+arr[i].data[64]+'"><td class="white-text">'+translate(arr[i].data[62])+'</td><td class="white-text">'+arr[i].data[63]+'</td><td class="white-text">'+translate(arr[i].data[65])+'</td></tr>'+
		'<tr class="no'+arr[i].data[66]+' '+arr[i].data[68]+'"><td class="white-text">'+translate(arr[i].data[66])+'</td><td class="white-text">'+arr[i].data[67]+'</td><td class="white-text">'+translate(arr[i].data[69])+'</td></tr>'+
			//bowgun other ammo
		chargeOut+burstOut+
			//bow ammo
		'<tr class="no'+arr[i].data[70]+'"><td colspan="2">[Charge Level]</td><td colspan="2">[Attack Type]</td></tr><tr class="no'+arr[i].data[70]+'"><td colspan="2" class="white-text">Lv1</td><td colspan="2" class="white-text">'+name[arr[i].data[70]]+'</td></tr><tr class="no'+arr[i].data[70]+'"><td colspan="2" class="white-text">Lv2</td><td colspan="2" class="white-text">'+name[arr[i].data[71]]+'</td></tr><tr class="no'+arr[i].data[70]+'"><td colspan="2" class="white-text">Lv3</td><td colspan="2" class="white-text">'+name[arr[i].data[72]]+'</td></tr><tr class="no'+arr[i].data[70]+'"><td colspan="2" class="gray">Lv4</td><td colspan="2" class="gray">'+name[arr[i].data[73]]+'</td></tr>'+
		//bow coating
		'<tr class="no'+arr[i].data[70]+'"><td colspan="2">[Coating Type]</td><td colspan="2">[Load Amount]</td></tr><tr class="no'+arr[i].data[78]+'"><td colspan="2" class="white-text">'+translate(arr[i].data[78])+'</td><td colspan="2" class="white-text">'+arr[i].data[79]+'</td></tr><tr class="no'+arr[i].data[80]+'"><td colspan="2" class="white-text">'+translate(arr[i].data[80])+'</td><td colspan="2" class="white-text">'+arr[i].data[81]+'</td></tr><tr class="no'+arr[i].data[82]+'"><td colspan="2" class="white-text">'+translate(arr[i].data[82])+'</td><td colspan="2" class="white-text">'+arr[i].data[83]+'</td></tr><tr class="no'+arr[i].data[84]+'"><td colspan="2" class="white-text">'+translate(arr[i].data[84])+'</td><td colspan="2" class="white-text">'+arr[i].data[85]+'</td></tr>'+
		//bow charge
		'<tr class="no'+arr[i].data[76]+'"><td colspan="2">[Charge Level]</td><td colspan="2">[Arc Shot Type]</td></tr><tr class="no'+arr[i].data[76]+'"><td colspan="2" class="gray">Lv1</td><td colspan="2" class="gray">No</td></tr><tr class="no'+arr[i].data[76]+'"><td colspan="2" class="gray">Lv2</td><td colspan="2" class="gray">No</td></tr><tr class="no'+arr[i].data[76]+'"><td colspan="2" class="white-text">Lv3</td><td colspan="2" class="white-text">'+translate(arr[i].data[76])+'</td></tr><tr class="no'+arr[i].data[76]+'"><td colspan="2" class="gray">Lv4</td><td colspan="2" class="gray">'+translate(arr[i].data[77])+'</td></tr>'+
		//hunting horn songs
		'<tr class="no'+arr[i].data[143]+'"><td colspan="4"><table class="innertable"><tr class="no'+arr[i].data[143] +'"><td><img src="../../images/weapon/'+song1.line1+'.png"></td><td><img src="../../images/weapon/'+song1.line2+'.png"></td><td>'+(song1.line3!==""?('<img src="../../images/weapon/'+song1.line3+'.png">'):"")+'</td><td>'+song1.line5+'</td></tr><tr class="no'+arr[i].data[144] +'"><td><img src="../../images/weapon/'+song2.line1+'.png"></td><td><img src="../../images/weapon/'+song2.line2+'.png"></td><td>'+(song2.line3!==""?('<img src="../../images/weapon/'+song2.line3+'.png">'):"")+'</td><td>'+song2.line5+'</td></tr><tr class="no'+arr[i].data[145] +'"><td><img src="../../images/weapon/'+song3.line1+'.png"></td><td><img src="../../images/weapon/'+song3.line2+'.png"></td><td>'+(song3.line3!==""?('<img src="../../images/weapon/'+song3.line3+'.png">'):"")+'</td><td>'+song3.line5+'</td></tr><tr class="no'+arr[i].data[146] +'"><td><img src="../../images/weapon/'+song4.line1+'.png"></td><td><img src="../../images/weapon/'+song4.line2+'.png"></td><td>'+(song4.line3!==""?('<img src="../../images/weapon/'+song4.line3+'.png">'):"")+'</td><td>'+song4.line5+'</td></tr><tr class="no'+arr[i].data[147] +'"><td><img src="../../images/weapon/'+song5.line1+'.png"></td><td><img src="../../images/weapon/'+song5.line2+'.png"></td><td>'+(song5.line3!==""?('<img src="../../images/weapon/'+song5.line3+'.png">'):"")+'</td><td>'+song5.line5+'</td></tr></table></tr>'+
		//forging mats
		'<tr class="no'+arr[i].data[94]+'"><td colspan="4"><hr />[Forging Material]</td></tr><tr class="white-text no'+arr[i].data[94]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[94])+'" target="_blank">'+translate(arr[i].data[94])+'</a> x'+arr[i].data[95]+'</td></tr><tr class="white-text no'+arr[i].data[97]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[97])+'" target="_blank">'+translate(arr[i].data[97])+'</a> x'+arr[i].data[98]+'</td></tr><tr class="white-text no'+arr[i].data[100]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[100])+'" target="_blank">'+translate(arr[i].data[100])+'</a> x'+arr[i].data[101]+'</td></tr><tr class="white-text no'+arr[i].data[103]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[103])+'" target="_blank">'+translate(arr[i].data[103])+'</a> x'+arr[i].data[104]+'</td></tr><tr class="white-text no'+arr[i].data[106]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[106])+'" target="_blank">'+translate(arr[i].data[106])+'</a> x'+arr[i].data[107]+'</td></tr><tr class="white-text no'+arr[i].data[109]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[109])+'" target="_blank">'+translate(arr[i].data[109])+'</a> x'+arr[i].data[110]+'</td></tr>'+
		//in between upgrade
		stagesOut+
		//upgrade mats
		'<tr class="no'+arr[i].data[117]+'"><td colspan="4"><hr />[Upgrade Material]</td></tr><tr class="white-text no'+arr[i].data[117]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[117])+'" target="_blank">'+translate(arr[i].data[117])+'</a> x'+arr[i].data[116]+'</td></tr><tr class="white-text no'+arr[i].data[120]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[120])+'" target="_blank">'+translate(arr[i].data[120])+'</a> x'+arr[i].data[119]+'</td></tr><tr class="white-text no'+arr[i].data[123]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[123])+'" target="_blank">'+translate(arr[i].data[123])+'</a> x'+arr[i].data[122]+'</td></tr><tr class="white-text no'+arr[i].data[126]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[126])+'" target="_blank">'+translate(arr[i].data[126])+'</a> x'+arr[i].data[125]+'</td></tr><tr class="white-text no'+arr[i].data[129]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[129])+'" target="_blank">'+translate(arr[i].data[129])+'</a> x'+arr[i].data[128]+'</td></tr><tr class="white-text no'+arr[i].data[132]+'"><td colspan="4"><a href="/materials/?search='+translate(arr[i].data[132])+'" target="_blank">'+translate(arr[i].data[132])+'</a> x'+arr[i].data[131]+'</td></tr></table></li></div><div>';
		out2 += '<li class="collection-item left-align"><table class="weapons left-align"><tbody><tr><td>'+out+'</td><td>&nbsp;&nbsp;</td><td>Level: '+arr[i].data[7]+'<br> Attack: '+arr[i].data[5]+'</td><td class="right sharpbar no'+arr[i].data[17]+'" colspan="4"><div class="basePro clearfix"><div class="barWidth"><span class="colorBar bar-1" style="width:'+width[0]+'%"></span><span class="colorBar bar-2" style="width:'+width[1]+'%"></span><span class="colorBar bar-3" style="width:'+width[2]+'%"></span><span class="colorBar bar-4" style="width:'+width[3]+'%"></span><span class="colorBar bar-5" style="width:'+width[4]+'%"></span><span class="colorBar bar-6" style="width:'+width[5]+'%"></span><span class="colorBar bar-7" style="width:'+width[7]+'%"></span><span class="leaveBar" style="width:'+width[6]+'%"></span></div></div><br>&nbsp;&nbsp;<span class="blue no'+arr[i].data[8]+'">Water Attack: '+arr[i].data[8]+'</span><span class="red no'+arr[i].data[9]+'">Fire Attack: '+arr[i].data[9]+'</span><span class="yellow no'+arr[i].data[10]+'">Thunder Attack: '+arr[i].data[10]+'</span><span class="purple no'+arr[i].data[11]+'">Dragon Attack: '+arr[i].data[11]+'</span><span class="light-blue no'+arr[i].data[12]+'">Ice Attack: '+arr[i].data[12]+'</span><span class="purple lighten-2 no'+arr[i].data[13]+'">Poison+: '+arr[i].data[13]+'</span><span class="light-blue no'+arr[i].data[14]+'">Sleep+: '+arr[i].data[14]+'</span><span class="yellow darken-2 no'+arr[i].data[15]+'">Paralysis+: '+arr[i].data[15]+'</span></td></tr></tbody></table></li>';
		//console.log(arr[i].data[0]);
		if (document.getElementById('id'+arr[i].data[0])) {
			document.getElementById('id'+arr[i].data[0]).innerHTML = out;
		}
	}
	document.getElementById('small-weaponlist').innerHTML = out2;
}
function lookupStage(wID) {
	arrL = weaponStageArray;
	tempArr = [];
	for(i = 0; i < arrL.length; i ++) {
		if (arrL[i].data[2] === wID) {
			tempArr.push(arrL[i]);
		}
	}
	return tempArr;
}