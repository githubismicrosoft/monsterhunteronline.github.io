function navbarContent() {
	document.getElementById("navbar").innerHTML = '<div class="headerspace"></div>' +
	'<a href="http://monsterhunteronline.in">Home</a>' +
	'<a href="http://monsterhunteronline.in/monsters/">Monsters</a>' +
	'<a href="http://monsterhunteronline.in/weapons">Weapons</a>' +
	'<a href="http://monsterhunteronline.in/armor/">Armor</a>' +
	'<a href="http://monsterhunteronline.in/set-builder/">Set Builder</a>' +
	'<a href="http://monsterhunteronline.in/quests/">Quests</a>' +
	'<a href="http://monsterhunteronline.in/crafting/">Crafting</a>' +
	'<a href="http://monsterhunteronline.in/gathering/">Gathering</a>' +
	'<a href="http://monsterhunteronline.in/jewelry/">Jewelry</a>' +
	'<a href="http://monsterhunteronline.in/hunting-groups/">Hunting Groups</a>' +
	'<a href="http://monsterhunteronline.in/npcs/">NPCs</a>' +
	'<a href="http://monsterhunteronline.in/cats/">Cats</a>' +
	'<a href="http://monsterhunteronline.in/food/">Food</a>' +
	'<a href="http://monsterhunteronline.in/skills/">Skills</a>' +
	'<a href="http://monsterhunteronline.in/materials/">Materials</a>' +
	'<a href="http://monsterhunteronline.in/install/">Install</a>' +
	'<a href="http://monsterhunteronline.in/translation/">Translation</a>' +
	'<a href="http://monsterhunteronline.in/vip/">VIP</a>'
}
function w3_toggle() {
	var el = document.getElementsByClassName("w3-sidenav")[0]
	if ( el.style.display != 'block' ) {

		el.style.display = 'block';

	}

	else {

		el.style.display = 'none';

	}
}
function w3_open() {
  document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
}
function w3_close() {
  document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
}
function armorContent(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i += 5) {
	//Level
		out += '<div class="w3-row border_bottom">' +
		'<div class="w3-col l1 m1 s5">' + arr[i].data[57] + '</div>' +
		'<div class="w3-col l2 m2 s7 armorname "><span class="Lv' + arr[i].data[57].substring(3,5) + '">Prototype </span>' + arr[i].data[2] + ' Armor <span class="type' + arr[i].data[3] + '">' +  typeArray[arr[i].data[3]].type + '</span>' + '</div>' +
	//first column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i].data[13] + '.png">' +
				'</li>' +
	//first column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i].data[7] + arr[i].data[8] + arr[i].data[9] + arr[i].data[10] + arr[i].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i].data[7] + '">Water Resistance: ' + arr[i].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[38] + ' skill' + arr[i].data[39] + '">' +
							'<td>' + arr[i].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[40] + ' skill' + arr[i].data[41] + '">' +
							'<td>' + arr[i].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[42] + ' skill' + arr[i].data[43] + '">' +
							'<td>' + arr[i].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[44] + ' skill' + arr[i].data[45] + '">' +
							'<td>' + arr[i].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[46] + ' skill' + arr[i].data[47] + '">' +
							'<td>' + arr[i].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[21] + '">' +
							'<td colspan="2">' + arr[i].data[21] + 'x' + arr[i].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[24] + '">' +
							'<td colspan="2">' + arr[i].data[24] + 'x' + arr[i].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[27] + '">' +
							'<td colspan="2">' + arr[i].data[27] + 'x' + arr[i].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[30] + '">' +
							'<td colspan="2">' + arr[i].data[30] + 'x' + arr[i].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[33] + '">' +
							'<td colspan="2">' + arr[i].data[33] + 'x' + arr[i].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[37] + '">' +
							'<td colspan="2">' + arr[i].data[36] + 'x' + arr[i].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//second column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+1].data[13] + '.png">' +
				'</li>' +
	//first column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+1].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+1].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+1].data[7] + arr[i+1].data[8] + arr[i+1].data[9] + arr[i+1].data[10] + arr[i+1].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+1].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+1].data[7] + '">Water Resistance: ' + arr[i+1].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+1].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+1].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+1].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+1].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+1].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+1].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+1].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+1].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+1].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[38] + ' skill' + arr[i+1].data[39] + '">' +
							'<td>' + arr[i+1].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[40] + ' skill' + arr[i+1].data[41] + '">' +
							'<td>' + arr[i+1].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[42] + ' skill' + arr[i+1].data[43] + '">' +
							'<td>' + arr[i+1].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[44] + ' skill' + arr[i+1].data[45] + '">' +
							'<td>' + arr[i+1].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[46] + ' skill' + arr[i+1].data[47] + '">' +
							'<td>' + arr[i+1].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[21] + '">' +
							'<td colspan="2">' + arr[i+1].data[21] + 'x' + arr[i+1].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[24] + '">' +
							'<td colspan="2">' + arr[i+1].data[24] + 'x' + arr[i+1].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[27] + '">' +
							'<td colspan="2">' + arr[i+1].data[27] + 'x' + arr[i+1].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[30] + '">' +
							'<td colspan="2">' + arr[i+1].data[30] + 'x' + arr[i+1].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[33] + '">' +
							'<td colspan="2">' + arr[i+1].data[33] + 'x' + arr[i+1].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[37] + '">' +
							'<td colspan="2">' + arr[i+1].data[36] + 'x' + arr[i+1].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//third column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+2].data[13] + '.png">' +
				'</li>' +
	//third column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+2].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+2].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+2].data[7] + arr[i+2].data[8] + arr[i+2].data[9] + arr[i+2].data[10] + arr[i+2].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+2].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+2].data[7] + '">Water Resistance: ' + arr[i+2].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+2].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+2].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+2].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+2].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+2].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+2].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+2].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+2].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+2].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[38] + ' skill' + arr[i+2].data[39] + '">' +
							'<td>' + arr[i+2].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[40] + ' skill' + arr[i+2].data[41] + '">' +
							'<td>' + arr[i+2].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[42] + ' skill' + arr[i+2].data[43] + '">' +
							'<td>' + arr[i+2].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[44] + ' skill' + arr[i+2].data[45] + '">' +
							'<td>' + arr[i+2].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[46] + ' skill' + arr[i+2].data[47] + '">' +
							'<td>' + arr[i+2].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[21] + '">' +
							'<td colspan="2">' + arr[i+2].data[21] + 'x' + arr[i+2].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[24] + '">' +
							'<td colspan="2">' + arr[i+2].data[24] + 'x' + arr[i+2].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[27] + '">' +
							'<td colspan="2">' + arr[i+2].data[27] + 'x' + arr[i+2].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[30] + '">' +
							'<td colspan="2">' + arr[i+2].data[30] + 'x' + arr[i+2].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[33] + '">' +
							'<td colspan="2">' + arr[i+2].data[33] + 'x' + arr[i+2].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[37] + '">' +
							'<td colspan="2">' + arr[i+2].data[36] + 'x' + arr[i+2].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//fourth column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+3].data[13] + '.png">' +
				'</li>' +
	//fouth column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+3].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+3].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+3].data[7] + arr[i+3].data[8] + arr[i+3].data[9] + arr[i+3].data[10] + arr[i+3].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+3].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+3].data[7] + '">Water Resistance: ' + arr[i+3].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+3].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+3].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+3].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+3].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+3].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+3].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+3].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+3].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+3].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[38] + ' skill' + arr[i+3].data[39] + '">' +
							'<td>' + arr[i+3].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[40] + ' skill' + arr[i+3].data[41] + '">' +
							'<td>' + arr[i+3].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[42] + ' skill' + arr[i+3].data[43] + '">' +
							'<td>' + arr[i+3].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[44] + ' skill' + arr[i+3].data[45] + '">' +
							'<td>' + arr[i+3].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[46] + ' skill' + arr[i+3].data[47] + '">' +
							'<td>' + arr[i+3].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[21] + '">' +
							'<td colspan="2">' + arr[i+3].data[21] + 'x' + arr[i+3].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[24] + '">' +
							'<td colspan="2">' + arr[i+3].data[24] + 'x' + arr[i+3].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[27] + '">' +
							'<td colspan="2">' + arr[i+3].data[27] + 'x' + arr[i+3].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[30] + '">' +
							'<td colspan="2">' + arr[i+3].data[30] + 'x' + arr[i+3].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[33] + '">' +
							'<td colspan="2">' + arr[i+3].data[33] + 'x' + arr[i+3].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[37] + '">' +
							'<td colspan="2">' + arr[i+3].data[36] + 'x' + arr[i+3].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//fifth column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+4].data[13] + '.png">' +
				'</li>' +
	//fifth column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+4].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+4].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+4].data[7] + arr[i+4].data[8] + arr[i+4].data[9] + arr[i+4].data[10] + arr[i+4].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+4].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+4].data[7] + '">Water Resistance: ' + arr[i+4].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+4].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+4].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+4].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+4].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+4].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+4].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+4].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+4].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+4].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[38] + ' skill' + arr[i+4].data[39] + '">' +
							'<td>' + arr[i+4].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[40] + ' skill' + arr[i+4].data[41] + '">' +
							'<td>' + arr[i+4].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[42] + ' skill' + arr[i+4].data[43] + '">' +
							'<td>' + arr[i+4].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[44] + ' skill' + arr[i+4].data[45] + '">' +
							'<td>' + arr[i+4].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[46] + ' skill' + arr[i+4].data[47] + '">' +
							'<td>' + arr[i+4].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[21] + '">' +
							'<td colspan="2">' + arr[i+4].data[21] + 'x' + arr[i+4].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[24] + '">' +
							'<td colspan="2">' + arr[i+4].data[24] + 'x' + arr[i+4].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[27] + '">' +
							'<td colspan="2">' + arr[i+4].data[27] + 'x' + arr[i+4].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[30] + '">' +
							'<td colspan="2">' + arr[i+4].data[30] + 'x' + arr[i+4].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[33] + '">' +
							'<td colspan="2">' + arr[i+4].data[33] + 'x' + arr[i+4].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[37] + '">' +
							'<td colspan="2">' + arr[i+4].data[36] + 'x' + arr[i+4].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//skills
		'<div class="w3-col l4 m4 s12 armorskill">' + arr[i].data[56] + '</div></div>';
	}
	document.getElementById("armortable").innerHTML = out;
}
function materialsContent(arr) {
	var out = '<tr><td width="40px">Icon</td><td width="132px">Name</td><td width="800px">Explanation</td><td>Place</td></tr>';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' +
			'<img src="../images/' + arr[i].data[4] + '.png">' +
		'</td>' +
		'<td>' + arr[i].data[1] + '</td>' +
		'<td>' + arr[i].data[2] + '</td>' +
		'<td>' + arr[i].data[8] + '</td>' +
	'</tr>';
	}
	document.getElementById("materialtable").innerHTML = out;
}
function materialsContent2(arr) {
	var out = '<tr><td width="40px">Icon</td><td width="132px">Name</td><td width="800px">Explanation</td><td>Place</td></tr>';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' +
			'<img src="../../images/' + arr[i].data[6] + '.png">' +
		'</td>' +
		'<td>' + arr[i].data[1] + '</td>' +
		'<td>' + arr[i].data[5] + '</td>' +
		'<td>' + arr[i].data[4] + '</td>' +
	'</tr>';
	}
	document.getElementById("materialtable").innerHTML = out;
}
function monsterContent(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' + arr[i].data[0] + '</td>' +
		'<td>' + arr[i].data[1] + '</td>' +
		'<td>' + arr[i].data[2] + '</td>' +
		'<td>' + arr[i].data[3] + '</td>' +
		'<td>' + arr[i].data[4] + '</td>' +
		'<td>' + arr[i].data[5] + '</td>' +
		'<td>' + arr[i].data[6] + '</td>' +
		'<td>' + arr[i].data[7] + '</td>' +
		'<td>' + arr[i].data[8] + '</td>' +
	'</tr>';
	}
	document.getElementById("monstertable").innerHTML = out;
}
function weaponContent(arr) {
	var out = "";
	var i;
	//sharpness formula
	for(i = 0; i < arr.length; i ++) {
		var width = ["0", "0", "0", "0", "0", "0", "0", "0"]
		width[0] = arr[i].data[17] * 100 / 4000000;
		width[1] = (arr[i].data[18] - arr[i].data[17]) * 100 / 4000000;
		width[2] = (arr[i].data[19] - arr[i].data[18]) * 100 / 4000000;
		width[3] = (arr[i].data[20] - arr[i].data[19]) * 100 / 4000000;
		width[4] = (arr[i].data[21] - arr[i].data[20]) * 100 / 4000000;
		width[5] = (arr[i].data[22] - arr[i].data[21]) * 100 / 4000000;
		width[7] = (arr[i].data[23] - arr[i].data[22]) * 100 / 4000000;
		width[6] = 100 - arr[i].data[16] * 100 / 4000000;
	//bow variables
	var name = ['','Pierce Lv1','Pierce Lv2','Pierce Lv3','Pierce Lv4','Rapid Lv1','Rapid Lv2','Rapid Lv3','Rapid Lv4','Scatter Lv1','Scatter Lv2','Scatter Lv3','Scatter Lv4'];
	//hunting horn variables
	var songs = {1:{"line1":"red","line2":"red","line3":"","line5":"Reinforce Self"},101:{"line1":"green","line2":"green","line3":"","line5":"Attack Up (s)"},102:{"line1":"green","line2":"green","line3":"","line5":"Critical Rate Up & Heal Up (s)"},103:{"line1":"green","line2":"green","line3":"","line5":"Attack Up (L)"},104:{"line1":"green","line2":"green","line3":"","line5":"Defense Up (s)"},105:{"line1":"green","line2":"green","line3":"","line5":"Defense Up (L)"},106:{"line1":"green","line2":"green","line3":"","line5":"Elemental Attack Up"},107:{"line1":"green","line2":"green","line3":"","line5":"Status Attack Up"},108:{"line1":"green","line2":"green","line3":"","line5":"Ice/Water Defense Up (s)"},109:{"line1":"green","line2":"green","line3":"","line5":"Ice/Water Defense Up (L)"},110:{"line1":"green","line2":"green","line3":"","line5":"Fire/Thunder Defense up (s)"},111:{"line1":"green","line2":"green","line3":"","line5":"Fire/Thunder Defense up (L)"},112:{"line1":"green","line2":"green","line3":"","line5":"Dragon Defense Up (s)"},113:{"line1":"green","line2":"green","line3":"","line5":"Dragon Defense Up (L)"},114:{"line1":"green","line2":"green","line3":"","line5":"All Resistance Up"},115:{"line1":"green","line2":"green","line3":"","line5":"Heal (s)"},116:{"line1":"green","line2":"green","line3":"","line5":"Heal (L)"},117:{"line1":"green","line2":"green","line3":"","line5":"Heal (m) & Antidote"},118:{"line1":"green","line2":"green","line3":"","line5":"Recovery Rate Up (m) & Anti-bacterial"},119:{"line1":"green","line2":"green","line3":"","line5":"Health Recovery Rate Up (s)"},120:{"line1":"green","line2":"green","line3":"","line5":"Recovery Rate Up (L)"},121:{"line1":"green","line2":"green","line3":"","line5":"Stamina Consumption Negate (S)"},122:{"line1":"green","line2":"green","line3":"","line5":"Stamina Consumption Negate (L)"},123:{"line1":"green","line2":"green","line3":"","line5":"Psychic & Cold Cancel"},124:{"line1":"green","line2":"green","line3":"","line5":"Psychic & Heat Cancel"},125:{"line1":"green","line2":"green","line3":"","line5":"Mud/Snow Negated"},126:{"line1":"green","line2":"green","line3":"","line5":"Tremor/Paralyse Negated"},127:{"line1":"green","line2":"green","line3":"","line5":"Negate Wind Pressure"},128:{"line1":"green","line2":"green","line3":"","line5":"Negate Dragon Wind Pressure"},129:{"line1":"green","line2":"green","line3":"","line5":"Hearing Protection (s)"},130:{"line1":"green","line2":"green","line3":"","line5":"Hearing Protection (L)"},131:{"line1":"green","line2":"green","line3":"","line5":"All Status Effects Negated"},201:{"line1":"blue","line2":"blue","line3":"","line5":"Attack Up (s)"},202:{"line1":"blue","line2":"blue","line3":"","line5":"Critical Rate Up & Heal Up (s)"},203:{"line1":"blue","line2":"blue","line3":"","line5":"Attack Up (L)"},204:{"line1":"blue","line2":"blue","line3":"","line5":"Defense Up (s)"},205:{"line1":"blue","line2":"blue","line3":"","line5":"Defense Up (L)"},206:{"line1":"blue","line2":"blue","line3":"","line5":"Elemental Attack Up"},207:{"line1":"blue","line2":"blue","line3":"","line5":"Status Attack Up"},208:{"line1":"blue","line2":"blue","line3":"","line5":"Ice/Water Defense Up (s)"},209:{"line1":"blue","line2":"blue","line3":"","line5":"Ice/Water Defense Up (L)"},210:{"line1":"blue","line2":"blue","line3":"","line5":"Fire/Thunder Defense up (s)"},211:{"line1":"blue","line2":"blue","line3":"","line5":"Fire/Thunder Defense up (L)"},212:{"line1":"blue","line2":"blue","line3":"","line5":"Dragon Defense Up (s)"},213:{"line1":"blue","line2":"blue","line3":"","line5":"Dragon Defense Up (L)"},214:{"line1":"blue","line2":"blue","line3":"","line5":"All Resistance Up"},215:{"line1":"blue","line2":"blue","line3":"","line5":"Heal (s)"},216:{"line1":"blue","line2":"blue","line3":"","line5":"Heal (L)"},217:{"line1":"blue","line2":"blue","line3":"","line5":"Heal (m) & Antidote"},218:{"line1":"blue","line2":"blue","line3":"","line5":"Recovery Rate Up (m) & Anti-bacterial"},219:{"line1":"blue","line2":"blue","line3":"","line5":"Health Recovery Rate Up (s)"},220:{"line1":"blue","line2":"blue","line3":"","line5":"Recovery Rate Up (L)"},221:{"line1":"blue","line2":"blue","line3":"","line5":"Stamina Consumption Negate (S)"},222:{"line1":"blue","line2":"blue","line3":"","line5":"Stamina Consumption Negate (L)"},223:{"line1":"blue","line2":"blue","line3":"","line5":"Psychic & Cold Cancel"},224:{"line1":"blue","line2":"blue","line3":"","line5":"Psychic & Heat Cancel"},225:{"line1":"blue","line2":"blue","line3":"","line5":"Mud/Snow Negated"},226:{"line1":"blue","line2":"blue","line3":"","line5":"Tremor/Paralyse Negated"},227:{"line1":"blue","line2":"blue","line3":"","line5":"Negate Wind Pressure"},228:{"line1":"blue","line2":"blue","line3":"","line5":"Negate Dragon Wind Pressure"},229:{"line1":"blue","line2":"blue","line3":"","line5":"Hearing Protection (s)"},230:{"line1":"blue","line2":"blue","line3":"","line5":"Hearing Protection (L)"},231:{"line1":"blue","line2":"blue","line3":"","line5":"All Status Effects Negated"},301:{"line1":"red","line2":"green","line3":"red","line5":"Attack Up (s)"},302:{"line1":"red","line2":"green","line3":"red","line5":"Critical Rate Up & Heal Up (s)"},303:{"line1":"red","line2":"green","line3":"red","line5":"Attack Up (L)"},304:{"line1":"red","line2":"green","line3":"red","line5":"Defense Up (s)"},305:{"line1":"red","line2":"green","line3":"red","line5":"Defense Up (L)"},306:{"line1":"red","line2":"green","line3":"red","line5":"Elemental Attack Up"},307:{"line1":"red","line2":"green","line3":"red","line5":"Status Attack Up"},308:{"line1":"red","line2":"green","line3":"red","line5":"Ice/Water Defense Up (s)"},309:{"line1":"red","line2":"green","line3":"red","line5":"Ice/Water Defense Up (L)"},310:{"line1":"red","line2":"green","line3":"red","line5":"Fire/Thunder Defense up (s)"},311:{"line1":"red","line2":"green","line3":"red","line5":"Fire/Thunder Defense up (L)"},312:{"line1":"red","line2":"green","line3":"red","line5":"Dragon Defense Up (s)"},313:{"line1":"red","line2":"green","line3":"red","line5":"Dragon Defense Up (L)"},314:{"line1":"red","line2":"green","line3":"red","line5":"All Resistance Up"},315:{"line1":"red","line2":"green","line3":"red","line5":"Heal (s)"},316:{"line1":"red","line2":"green","line3":"red","line5":"Heal (L)"},317:{"line1":"red","line2":"green","line3":"red","line5":"Heal (m) & Antidote"},318:{"line1":"red","line2":"green","line3":"red","line5":"Recovery Rate Up (m) & Anti-bacterial"},319:{"line1":"red","line2":"green","line3":"red","line5":"Health Recovery Rate Up (s)"},320:{"line1":"red","line2":"green","line3":"red","line5":"Recovery Rate Up (L)"},321:{"line1":"red","line2":"green","line3":"red","line5":"Stamina Consumption Negate (S)"},322:{"line1":"red","line2":"green","line3":"red","line5":"Stamina Consumption Negate (L)"},323:{"line1":"red","line2":"green","line3":"red","line5":"Psychic & Cold Cancel"},324:{"line1":"red","line2":"green","line3":"red","line5":"Psychic & Heat Cancel"},325:{"line1":"red","line2":"green","line3":"red","line5":"Mud/Snow Negated"},326:{"line1":"red","line2":"green","line3":"red","line5":"Tremor/Paralyse Negated"},327:{"line1":"red","line2":"green","line3":"red","line5":"Negate Wind Pressure"},328:{"line1":"red","line2":"green","line3":"red","line5":"Negate Dragon Wind Pressure"},329:{"line1":"red","line2":"green","line3":"red","line5":"Hearing Protection (s)"},330:{"line1":"red","line2":"green","line3":"red","line5":"Hearing Protection (L)"},331:{"line1":"red","line2":"green","line3":"red","line5":"All Status Effects Negated"},401:{"line1":"red","line2":"blue","line3":"red","line5":"Attack Up (s)"},402:{"line1":"red","line2":"blue","line3":"red","line5":"Critical Rate Up & Heal Up (s)"},403:{"line1":"red","line2":"blue","line3":"red","line5":"Attack Up (L)"},404:{"line1":"red","line2":"blue","line3":"red","line5":"Defense Up (s)"},405:{"line1":"red","line2":"blue","line3":"red","line5":"Defense Up (L)"},406:{"line1":"red","line2":"blue","line3":"red","line5":"Elemental Attack Up"},407:{"line1":"red","line2":"blue","line3":"red","line5":"Status Attack Up"},408:{"line1":"red","line2":"blue","line3":"red","line5":"Ice/Water Defense Up (s)"},409:{"line1":"red","line2":"blue","line3":"red","line5":"Ice/Water Defense Up (L)"},410:{"line1":"red","line2":"blue","line3":"red","line5":"Fire/Thunder Defense up (s)"},411:{"line1":"red","line2":"blue","line3":"red","line5":"Fire/Thunder Defense up (L)"},412:{"line1":"red","line2":"blue","line3":"red","line5":"Dragon Defense Up (s)"},413:{"line1":"red","line2":"blue","line3":"red","line5":"Dragon Defense Up (L)"},414:{"line1":"red","line2":"blue","line3":"red","line5":"All Resistance Up"},415:{"line1":"red","line2":"blue","line3":"red","line5":"Heal (s)"},416:{"line1":"red","line2":"blue","line3":"red","line5":"Heal (L)"},417:{"line1":"red","line2":"blue","line3":"red","line5":"Heal (m) & Antidote"},418:{"line1":"red","line2":"blue","line3":"red","line5":"Recovery Rate Up (m) & Anti-bacterial"},419:{"line1":"red","line2":"blue","line3":"red","line5":"Health Recovery Rate Up (s)"},420:{"line1":"red","line2":"blue","line3":"red","line5":"Recovery Rate Up (L)"},421:{"line1":"red","line2":"blue","line3":"red","line5":"Stamina Consumption Negate (S)"},422:{"line1":"red","line2":"blue","line3":"red","line5":"Stamina Consumption Negate (L)"},423:{"line1":"red","line2":"blue","line3":"red","line5":"Psychic & Cold Cancel"},424:{"line1":"red","line2":"blue","line3":"red","line5":"Psychic & Heat Cancel"},425:{"line1":"red","line2":"blue","line3":"red","line5":"Mud/Snow Negated"},426:{"line1":"red","line2":"blue","line3":"red","line5":"Tremor/Paralyse Negated"},427:{"line1":"red","line2":"blue","line3":"red","line5":"Negate Wind Pressure"},428:{"line1":"red","line2":"blue","line3":"red","line5":"Negate Dragon Wind Pressure"},429:{"line1":"red","line2":"blue","line3":"red","line5":"Hearing Protection (s)"},430:{"line1":"red","line2":"blue","line3":"red","line5":"Hearing Protection (L)"},431:{"line1":"red","line2":"blue","line3":"red","line5":"All Status Effects Negated"},501:{"line1":"green","line2":"red","line3":"green","line5":"Attack Up (s)"},502:{"line1":"green","line2":"red","line3":"green","line5":"Critical Rate Up & Heal Up (s)"},503:{"line1":"green","line2":"red","line3":"green","line5":"Attack Up (L)"},504:{"line1":"green","line2":"red","line3":"green","line5":"Defense Up (s)"},505:{"line1":"green","line2":"red","line3":"green","line5":"Defense Up (L)"},506:{"line1":"green","line2":"red","line3":"green","line5":"Elemental Attack Up"},507:{"line1":"green","line2":"red","line3":"green","line5":"Status Attack Up"},508:{"line1":"green","line2":"red","line3":"green","line5":"Ice/Water Defense Up (s)"},509:{"line1":"green","line2":"red","line3":"green","line5":"Ice/Water Defense Up (L)"},510:{"line1":"green","line2":"red","line3":"green","line5":"Fire/Thunder Defense up (s)"},511:{"line1":"green","line2":"red","line3":"green","line5":"Fire/Thunder Defense up (L)"},512:{"line1":"green","line2":"red","line3":"green","line5":"Dragon Defense Up (s)"},513:{"line1":"green","line2":"red","line3":"green","line5":"Dragon Defense Up (L)"},514:{"line1":"green","line2":"red","line3":"green","line5":"All Resistance Up"},515:{"line1":"green","line2":"red","line3":"green","line5":"Heal (s)"},516:{"line1":"green","line2":"red","line3":"green","line5":"Heal (L)"},517:{"line1":"green","line2":"red","line3":"green","line5":"Heal (m) & Antidote"},518:{"line1":"green","line2":"red","line3":"green","line5":"Recovery Rate Up (m) & Anti-bacterial"},519:{"line1":"green","line2":"red","line3":"green","line5":"Health Recovery Rate Up (s)"},520:{"line1":"green","line2":"red","line3":"green","line5":"Recovery Rate Up (L)"},521:{"line1":"green","line2":"red","line3":"green","line5":"Stamina Consumption Negate (S)"},522:{"line1":"green","line2":"red","line3":"green","line5":"Stamina Consumption Negate (L)"},523:{"line1":"green","line2":"red","line3":"green","line5":"Psychic & Cold Cancel"},524:{"line1":"green","line2":"red","line3":"green","line5":"Psychic & Heat Cancel"},525:{"line1":"green","line2":"red","line3":"green","line5":"Mud/Snow Negated"},526:{"line1":"green","line2":"red","line3":"green","line5":"Tremor/Paralyse Negated"},527:{"line1":"green","line2":"red","line3":"green","line5":"Negate Wind Pressure"},528:{"line1":"green","line2":"red","line3":"green","line5":"Negate Dragon Wind Pressure"},529:{"line1":"green","line2":"red","line3":"green","line5":"Hearing Protection (s)"},530:{"line1":"green","line2":"red","line3":"green","line5":"Hearing Protection (L)"},531:{"line1":"green","line2":"red","line3":"green","line5":"All Status Effects Negated"},601:{"line1":"blue","line2":"red","line3":"blue","line5":"Attack Up (s)"},602:{"line1":"blue","line2":"red","line3":"blue","line5":"Critical Rate Up & Heal Up (s)"},603:{"line1":"blue","line2":"red","line3":"blue","line5":"Attack Up (L)"},604:{"line1":"blue","line2":"red","line3":"blue","line5":"Defense Up (s)"},605:{"line1":"blue","line2":"red","line3":"blue","line5":"Defense Up (L)"},606:{"line1":"blue","line2":"red","line3":"blue","line5":"Elemental Attack Up"},607:{"line1":"blue","line2":"red","line3":"blue","line5":"Status Attack Up"},608:{"line1":"blue","line2":"red","line3":"blue","line5":"Ice/Water Defense Up (s)"},609:{"line1":"blue","line2":"red","line3":"blue","line5":"Ice/Water Defense Up (L)"},610:{"line1":"blue","line2":"red","line3":"blue","line5":"Fire/Thunder Defense up (s)"},611:{"line1":"blue","line2":"red","line3":"blue","line5":"Fire/Thunder Defense up (L)"},612:{"line1":"blue","line2":"red","line3":"blue","line5":"Dragon Defense Up (s)"},613:{"line1":"blue","line2":"red","line3":"blue","line5":"Dragon Defense Up (L)"},614:{"line1":"blue","line2":"red","line3":"blue","line5":"All Resistance Up"},615:{"line1":"blue","line2":"red","line3":"blue","line5":"Heal (s)"},616:{"line1":"blue","line2":"red","line3":"blue","line5":"Heal (L)"},617:{"line1":"blue","line2":"red","line3":"blue","line5":"Heal (m) & Antidote"},618:{"line1":"blue","line2":"red","line3":"blue","line5":"Recovery Rate Up (m) & Anti-bacterial"},619:{"line1":"blue","line2":"red","line3":"blue","line5":"Health Recovery Rate Up (s)"},620:{"line1":"blue","line2":"red","line3":"blue","line5":"Recovery Rate Up (L)"},621:{"line1":"blue","line2":"red","line3":"blue","line5":"Stamina Consumption Negate (S)"},622:{"line1":"blue","line2":"red","line3":"blue","line5":"Stamina Consumption Negate (L)"},623:{"line1":"blue","line2":"red","line3":"blue","line5":"Psychic & Cold Cancel"},624:{"line1":"blue","line2":"red","line3":"blue","line5":"Psychic & Heat Cancel"},625:{"line1":"blue","line2":"red","line3":"blue","line5":"Mud/Snow Negated"},626:{"line1":"blue","line2":"red","line3":"blue","line5":"Tremor/Paralyse Negated"},627:{"line1":"blue","line2":"red","line3":"blue","line5":"Negate Wind Pressure"},628:{"line1":"blue","line2":"red","line3":"blue","line5":"Negate Dragon Wind Pressure"},629:{"line1":"blue","line2":"red","line3":"blue","line5":"Hearing Protection (s)"},630:{"line1":"blue","line2":"red","line3":"blue","line5":"Hearing Protection (L)"},631:{"line1":"blue","line2":"red","line3":"blue","line5":"All Status Effects Negated"},703:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Attack Up (L)"},706:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Elemental Attack Up"},707:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Status Attack Up"},714:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"All Resistance Up"},716:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Heal (L)"},730:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Hearing Protection (L)"},731:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"All Status Effects Negated"},741:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Sonic Waves"},742:{"line1":"yellow","line2":"yellow","line3":"yellow","line5":"Extend Songs Duration"},803:{"line1":"purple","line2":"purple","line3":"purple","line5":"Attack Up (L)"},806:{"line1":"purple","line2":"purple","line3":"purple","line5":"Elemental Attack Up"},807:{"line1":"purple","line2":"purple","line3":"purple","line5":"Status Attack Up"},814:{"line1":"purple","line2":"purple","line3":"purple","line5":"All Resistance Up"},816:{"line1":"purple","line2":"purple","line3":"purple","line5":"Heal (L)"},830:{"line1":"purple","line2":"purple","line3":"purple","line5":"Hearing Protection (L)"},831:{"line1":"purple","line2":"purple","line3":"purple","line5":"All Status Effects Negated"},841:{"line1":"purple","line2":"purple","line3":"purple","line5":"Flinch Negated"},842:{"line1":"purple","line2":"purple","line3":"purple","line5":"Extend Songs Duration"}};
	//placeholders so code doesn't break on other pages
	var song1 = songs[1];
	var song2 = songs[1];
	var song3 = songs[1];
	var song4 = songs[1];
	var song5 = songs[1];
	//actual variables
	if (arr[i].data[143]!='') {
	var song1 = songs[arr[i].data[143]];
	}
	if (arr[i].data[144]!='') {
	var song2 = songs[arr[i].data[144]];
	}
	if (arr[i].data[145]!='') {
	var song3 = songs[arr[i].data[145]];
	}
	if (arr[i].data[146]!='') {
	var song4 = songs[arr[i].data[146]];
	}
	if (arr[i].data[147]!='') {
	var song5 = songs[arr[i].data[147]];
	}
	//output
		out = '' +
 '<div class="matpiccell weapon">' +
	'<div class="weaponpic">' +
		'<ul class="list">' + 
			'<li class="item">' +
	//can forge icon
				'<span class="forgeicon no' + arr[i].data[94] + '"></span>' +
				'<img src="../../images/' + arr[i].data[4] + '.png">' + '</li>' + 
			'<li class="info">' + 
				'<table class="weaponinfo weapon' + arr[i].data[2] + '">' +
					'<tr>' +
	//title
						'<td class="piecename" colspan="4">' + arr[i].data[1] + '<hr /></td>' +
					'</tr>' +
					'<tr>' +
	//char level
						'<td colspan="4">Character Level: <span class="white">' + arr[i].data[7] + '</span><hr /></td>' +
					'</tr>' +
	//attributes
					'<tr class="no' + arr[i].data[7] + arr[i].data[8] + arr[i].data[9] + arr[i].data[10] + arr[i].data[11] + '">' +
						'<td colspan="4">[Attributes]</td>' +
					'</tr>' +
	//sharpness
					'<tr class="no' + arr[i].data[17] + '">' +
						'<td colspan="4">Sharpness</td>' +
					'</tr>' +
	//sharpness bar
					'<tr class="no' + arr[i].data[17] + '">' +
						'<td class="sharpbar" colspan="4">' +
							'<div class="basePro clearfix">' +
								'<div class="barWidth">' +
									'<span class="colorBar bar-1" style="width:' + width[0] + '%"></span>' +
									'<span class="colorBar bar-2" style="width:' + width[1] + '%"></span>' +
									'<span class="colorBar bar-3" style="width:' + width[2] + '%"></span>' +
									'<span class="colorBar bar-4" style="width:' + width[3] + '%"></span>' +
									'<span class="colorBar bar-5" style="width:' + width[4] + '%"></span>' +
									'<span class="colorBar bar-6" style="width:' + width[5] + '%"></span>' +
									'<span class="colorBar bar-7" style="width:' + width[7] + '%"></span>' +
									'<span class="leaveBar" style="width:' + width[6] + '%"></span>' +
								'</div>' +
							'</div>' +
						'</td>' +
					'</tr>' +
					'<tr>' +
						'<td colspan="4">' +
							'<table class="innertable">' +
								'<tr>' +
	//attack
									'<td>Attack:</td>' +
									'<td class="white">' + arr[i].data[5] + '</td>' +
								'</tr>' +
								'<tr>' +
	//critical rate
									'<td>Critical Rate:</td>' +
									'<td class="white">' + arr[i].data[6] + '</td>' +
								'</tr>' +
	//water attack
								'<tr class="no' + arr[i].data[8] + '">' +
									'<td>Water Attack:</td>' +
									'<td class="white">' + arr[i].data[8] + '</td>' +
								'</tr>' +
	//fire attack
								'<tr class="no' + arr[i].data[9] + '">' +
									'<td>Fire Attack:</td>' +
									'<td class="white">' + arr[i].data[9] + '</td>' +
								'</tr>' +
	//thunder attack
								'<tr class="no' + arr[i].data[10] + '">' +
									'<td>Thunder Attack:</td>' +
									'<td class="white">' + arr[i].data[10] + '</td>' +
								'</tr>' +
	//dragon attack
								'<tr class="no' + arr[i].data[11] + '">' +
									'<td>Dragon Attack:</td>' +
									'<td class="white">' + arr[i].data[11] + '</td>' +
								'</tr>' +
	//ice attack
								'<tr class="no' + arr[i].data[12] + '">' +
									'<td>Ice Attack:</td>' +
									'<td class="white">' + arr[i].data[12] + '</td>' +
								'</tr>' +
	//poison up
								'<tr class="poison no' + arr[i].data[13] + '">' +
									'<td>Poison+:</td>' +
									'<td>' + arr[i].data[13] + '</td>' +
								'</tr>' +
	//paralysis up
								'<tr class="paralysis no' + arr[i].data[15] + '">' +
									'<td>Paralysis+:</td>' +
									'<td>' + arr[i].data[15] + '</td>' +
								'</tr>' +
	//sleep up
								'<tr class="sleep no' + arr[i].data[14] + '">' +
									'<td>Sleep+:</td>' +
									'<td>' + arr[i].data[14] + '</td>' +
								'</tr>' +
	//reload speed
								'<tr class="no' + arr[i].data[27] + '">' +
									'<td>Reload Speed:</td>' +
									'<td class="white">' + arr[i].data[27] + '</td>' +
								'</tr>' +
	//shelling properties
								'<tr class="no' + arr[i].data[137] + '">' +
									'<td colspan="4"><hr />[Shelling Properties]</td>' +
								'</tr>' +
								'<tr class="no' + arr[i].data[137] + '">' +
									'<td>Shelling Type:</td>' +
									'<td class="white">' + arr[i].data[137] + 
								'</tr>' +
	//shelling rating
								'<tr class="no' + arr[i].data[138] + '">' +
									'<td>Shelling Rating:</td>' +
									'<td class="white">' + arr[i].data[138] + '</td>' +
								'</tr>' +
	//bow guage level
								'<tr class="no' + arr[i].data[74] + '">' +
									'<td>Max Guage:</td>' +
									'<td class="white">' + arr[i].data[74] + '</td>' +
								'</tr>' +
							'</table>' +
						'</td>' +
					'</tr>' +
	//bowgun basic ammo
					'<tr class="no' + arr[i].data[30] + '">' +
						'<td>[Basic Ammo]</td>' +
						'<td>[Load]</td>' +
						'<td>[Recoil]</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[30] + ' ' + arr[i].data[32] + '">' +
						'<td class="white">' + arr[i].data[30] + '</td>' +
						'<td class="white">' + arr[i].data[31] + '</td>' +
						'<td class="white">' + arr[i].data[33] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[34] + ' ' + arr[i].data[36] + '">' +
						'<td class="white">' + arr[i].data[34] + '</td>' +
						'<td class="white">' + arr[i].data[35] + '</td>' +
						'<td class="white">' + arr[i].data[37] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[38] + ' ' + arr[i].data[40] + '">' +
						'<td class="white">' + arr[i].data[38] + '</td>' +
						'<td class="white">' + arr[i].data[39] + '</td>' +
						'<td class="white">' + arr[i].data[41] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[42] + ' ' + arr[i].data[44] + '">' +
						'<td class="white">' + arr[i].data[42] + '</td>' +
						'<td class="white">' + arr[i].data[43] + '</td>' +
						'<td class="white">' + arr[i].data[45] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[46] + ' ' + arr[i].data[48] + '">' +
						'<td class="white">' + arr[i].data[46] + '</td>' +
						'<td class="white">' + arr[i].data[47] + '</td>' +
						'<td class="white">' + arr[i].data[49] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[50] + ' ' + arr[i].data[52] + '">' +
						'<td class="white">' + arr[i].data[50] + '</td>' +
						'<td class="white">' + arr[i].data[51] + '</td>' +
						'<td class="white">' + arr[i].data[53] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[54] + ' ' + arr[i].data[56] + '">' +
						'<td class="white">' + arr[i].data[54] + '</td>' +
						'<td class="white">' + arr[i].data[55] + '</td>' +
						'<td class="white">' + arr[i].data[57] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[58] + ' ' + arr[i].data[60] + '">' +
						'<td class="white">' + arr[i].data[58] + '</td>' +
						'<td class="white">' + arr[i].data[59] + '</td>' +
						'<td class="white">' + arr[i].data[61] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[62] + ' ' + arr[i].data[64] + '">' +
						'<td class="white">' + arr[i].data[62] + '</td>' +
						'<td class="white">' + arr[i].data[63] + '</td>' +
						'<td class="white">' + arr[i].data[65] + '</td>' +
					'</tr>' +
					'<tr class="no' + arr[i].data[66] + ' ' + arr[i].data[68] + '">' +
						'<td class="white">' + arr[i].data[66] + '</td>' +
						'<td class="white">' + arr[i].data[67] + '</td>' +
						'<td class="white">' + arr[i].data[69] + '</td>' +
					'</tr>' +
	//bowgun other ammo
					'<tr class="no' + arr[i].data[30] + '">' +
						'<td>[' + arr[i].data[36].substring(0, 11) + 'Ammo]</td>' +
						'<td>[Load]</td>' +
						'<td>[Recoil]</td>' +
						'<td class="no' + 	arr[i].data[32].substring(11, 12) + 
											arr[i].data[36].substring(11, 12) + 
											arr[i].data[40].substring(11, 12) + 
											arr[i].data[44].substring(11, 12) + 
											arr[i].data[48].substring(11, 12) + 
											arr[i].data[52].substring(11, 12) + 
											arr[i].data[56].substring(11, 12) + 
											arr[i].data[60].substring(11, 12) + 
											arr[i].data[64].substring(11, 12) + 
											arr[i].data[68].substring(11, 12) + '">[Burst]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[32] + '">' +
							'<td class="white">' + arr[i].data[30] + '</td>' +
							'<td class="white">' + arr[i].data[31] + '</td>' +
							'<td class="white">' + arr[i].data[33] + '</td>' +
							'<td class="white">' + arr[i].data[32].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[36] + '">' +
							'<td class="white">' + arr[i].data[34] + '</td>' +
							'<td class="white">' + arr[i].data[35] + '</td>' +
							'<td class="white">' + arr[i].data[37] + '</td>' +
							'<td class="white">' + arr[i].data[36].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[40] + '">' +
							'<td class="white">' + arr[i].data[38] + '</td>' +
							'<td class="white">' + arr[i].data[39] + '</td>' +
							'<td class="white">' + arr[i].data[41] + '</td>' +
							'<td class="white">' + arr[i].data[40].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[44] + '">' +
							'<td class="white">' + arr[i].data[42] + '</td>' +
							'<td class="white">' + arr[i].data[43] + '</td>' +
							'<td class="white">' + arr[i].data[45] + '</td>' +
							'<td class="white">' + arr[i].data[44].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[48] + '">' +
							'<td class="white">' + arr[i].data[46] + '</td>' +
							'<td class="white">' + arr[i].data[47] + '</td>' +
							'<td class="white">' + arr[i].data[49] + '</td>' +
							'<td class="white">' + arr[i].data[48].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[52] + '">' +
							'<td class="white">' + arr[i].data[50] + '</td>' +
							'<td class="white">' + arr[i].data[51] + '</td>' +
							'<td class="white">' + arr[i].data[53] + '</td>' +
							'<td class="white">' + arr[i].data[52].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[56] + '">' +
							'<td class="white">' + arr[i].data[54] + '</td>' +
							'<td class="white">' + arr[i].data[55] + '</td>' +
							'<td class="white">' + arr[i].data[57] + '</td>' +
							'<td class="white">' + arr[i].data[56].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[60] + '">' +
							'<td class="white">' + arr[i].data[58] + '</td>' +
							'<td class="white">' + arr[i].data[59] + '</td>' +
							'<td class="white">' + arr[i].data[61] + '</td>' +
							'<td class="white">' + arr[i].data[60].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[64] + '">' +
							'<td class="white">' + arr[i].data[62] + '</td>' +
							'<td class="white">' + arr[i].data[63] + '</td>' +
							'<td class="white">' + arr[i].data[65] + '</td>' +
							'<td class="white">' + arr[i].data[64].substring(11, 12) + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[68] + '">' +
							'<td class="white">' + arr[i].data[66] + '</td>' +
							'<td class="white">' + arr[i].data[67] + '</td>' +
							'<td class="white">' + arr[i].data[69] + '</td>' +
							'<td class="white">' + arr[i].data[68].substring(11, 12) + '</td>' +
						'</tr>' +
	//bow ammo
						'<tr class="no' + arr[i].data[70] + '">' +
							'<td colspan="2">[Charge Level]</td>' +
							'<td colspan="2">[Attack Type]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[70] + '">' +
							'<td colspan="2" class="white">Lv1</td>' +
							'<td colspan="2" class="white">' + name[arr[i].data[70]] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[70] + '">' +
							'<td colspan="2" class="white">Lv2</td>' +
							'<td colspan="2" class="white">' + name[arr[i].data[71]] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[70] + '">' +
							'<td colspan="2" class="white">Lv3</td>' +
							'<td colspan="2" class="white">' + name[arr[i].data[72]] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[70] + '">' +
							'<td colspan="2" class="gray">Lv4</td>' +
							'<td colspan="2" class="gray">' + name[arr[i].data[73]] + '</td>' +
						'</tr>' +
	//bow coating
						'<tr class="no' + arr[i].data[70] + '">' +
							'<td colspan="2">[Coating Type]</td>' +
							'<td colspan="2">[Load Amount]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[78] + '">' +
							'<td colspan="2" class="white">' + arr[i].data[78] + '</td>' +
							'<td colspan="2" class="white">' + arr[i].data[79] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[80] + '">' +
							'<td colspan="2" class="white">' + arr[i].data[80] + '</td>' +
							'<td colspan="2" class="white">' + arr[i].data[81] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[82] + '">' +
							'<td colspan="2" class="white">' + arr[i].data[82] + '</td>' +
							'<td colspan="2" class="white">' + arr[i].data[83] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[84] + '">' +
							'<td colspan="2" class="white">' + arr[i].data[84] + '</td>' +
							'<td colspan="2" class="white">' + arr[i].data[85] + '</td>' +
						'</tr>' +
	//bow charge
						'<tr class="no' + arr[i].data[76] + '">' +
							'<td colspan="2">[Charge Level]</td>' +
							'<td colspan="2">[Arc Shot Type]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[76] + '">' +
							'<td colspan="2" class="gray">Lv1</td>' +
							'<td colspan="2" class="gray">No</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[76] + '">' +
							'<td colspan="2" class="gray">Lv2</td>' +
							'<td colspan="2" class="gray">No</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[76] + '">' +
							'<td colspan="2" class="white">Lv3</td>' +
							'<td colspan="2" class="white">' + arr[i].data[76] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[76] + '">' +
							'<td colspan="2" class="gray">Lv4</td>' +
							'<td colspan="2" class="gray">' + arr[i].data[77] + '</td>' +
						'</tr>' +
	//hunting horn songs
						'<tr class="no' + arr[i].data[143] + '">' +
							'<td colspan="4">' +
								'<table class="innertable">' +
									'<tr class="no' + arr[i].data[143] +'">' +
										'<td><img src="../../images/' + song1.line1 + '.png"></td>' +
										'<td><img src="../../images/' + song1.line2 + '.png"></td>' +
										'<td>' + (song1.line3!=""?('<img src="../../images/' + song1.line3 + '.png">'):"") + '</td>' +
										'<td>' + song1.line5 + '</td>' +
									'</tr>' +
									'<tr class="no' + arr[i].data[144] +'">' +
										'<td><img src="../../images/' + song2.line1 + '.png"></td>' +
										'<td><img src="../../images/' + song2.line2 + '.png"></td>' +
										'<td>' + (song2.line3!=""?('<img src="../../images/' + song2.line3 + '.png">'):"") + '</td>' +
										'<td>' + song2.line5 + '</td>' +
									'</tr>' +
									'<tr class="no' + arr[i].data[145] +'">' +
										'<td><img src="../../images/' + song3.line1 + '.png"></td>' +
										'<td><img src="../../images/' + song3.line2 + '.png"></td>' +
										'<td>' + (song3.line3!=""?('<img src="../../images/' + song3.line3 + '.png">'):"") + '</td>' +
										'<td>' + song3.line5 + '</td>' +
									'</tr>' +
									'<tr class="no' + arr[i].data[146] +'">' +
										'<td><img src="../../images/' + song4.line1 + '.png"></td>' +
										'<td><img src="../../images/' + song4.line2 + '.png"></td>' +
										'<td>' + (song4.line3!=""?('<img src="../../images/' + song4.line3 + '.png">'):"") + '</td>' +
										'<td>' + song4.line5 + '</td>' +
									'</tr>' +
									'<tr class="no' + arr[i].data[147] +'">' +
										'<td><img src="../../images/' + song5.line1 + '.png"></td>' +
										'<td><img src="../../images/' + song5.line2 + '.png"></td>' +
										'<td>' + (song5.line3!=""?('<img src="../../images/' + song5.line3 + '.png">'):"") + '</td>' +
										'<td>' + song5.line5 + '</td>' +
									'</tr>' +
								'</table>' +
						'</tr>' +
	//forging mats
						'<tr class="no' + arr[i].data[94] + '">' +
							'<td colspan="4"><hr />[Forging Material]</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[94] + '">' +
							'<td colspan="4">' + arr[i].data[94] + 'x' + arr[i].data[95] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[97] + '">' +
							'<td colspan="4">' + arr[i].data[97] + 'x' + arr[i].data[98] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[100] + '">' +
							'<td colspan="4">' + arr[i].data[100] + 'x' + arr[i].data[101] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[103] + '">' +
							'<td colspan="4">' + arr[i].data[103] + 'x' + arr[i].data[104] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[106] + '">' +
							'<td colspan="4">' + arr[i].data[106] + 'x' + arr[i].data[107] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[109] + '">' +
							'<td colspan="4">' + arr[i].data[109] + 'x' + arr[i].data[110] + '</td>' +
						'</tr>' +
	//upgrade mats
						'<tr class="no' + arr[i].data[113] + '">' +
							'<td colspan="4"><hr />[Upgrade Material]</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[117] + '">' +
							'<td colspan="4">' + arr[i].data[117] + 'x' + arr[i].data[116] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[120] + '">' +
							'<td colspan="4">' + arr[i].data[120] + 'x' + arr[i].data[119] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[123] + '">' +
							'<td colspan="4">' + arr[i].data[123] + 'x' + arr[i].data[122] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[126] + '">' +
							'<td colspan="4">' + arr[i].data[126] + 'x' + arr[i].data[125] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[129] + '">' +
							'<td colspan="4">' + arr[i].data[129] + 'x' + arr[i].data[128] + '</td>' +
						'</tr>' +
						'<tr class="white no' + arr[i].data[132] + '">' +
							'<td colspan="4">' + arr[i].data[132] + 'x' + arr[i].data[131] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</div>' +
		'<div>';
	document.getElementById('id' + arr[i].data[0]).innerHTML = out;
	}
}

function footerContent() {
	//because I am lazy
	document.getElementById("footer").innerHTML = '' +
		'<center><p>This page is maintained and paid for by @Reaver01. If you would like to buy me a beer please click below.</p>' +
			'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
				'<input type="hidden" name="cmd" value="_s-xclick">' +
				'<input type="hidden" name="hosted_button_id" value="CRDPXKLXJTTY2">' +
				'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
				'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
			'</form></center>'
}
function preload(sources) {
	jQuery.each(sources, function(i,source) { jQuery.get(source); });
}
function addOrUpdateUrlParam(zname, value)
{
  var href = window.location.href;
  var regex = new RegExp("[&\\?]" + zname + "=");
  if(regex.test(href))
  {
    regex = new RegExp("([&\\?])" + zname + "=\\d+");
    window.location.href = href.replace(regex, "$1" + zname + "=" + value);
  }
  else
  {
    if(href.indexOf("?") > -1)
      window.location.href = href + "&" + zname + "=" + value;
    else
      window.location.href = href + "?" + zname + "=" + value;
  }
}
$(function(){
      $('.helmetbutton').click(function(e){
      	document.cookie= "helmetstate="+$( '#helmetselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.vambracesbutton').click(function(e){
      	document.cookie= "vambracesstate="+$( '#vambracesselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.armorbutton').click(function(e){
      	document.cookie= "armorstate="+$( '#armorselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.waistbutton').click(function(e){
      	document.cookie= "waiststate="+$( '#waistselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.greavesbutton').click(function(e){
      	document.cookie= "greavesstate="+$( '#greavesselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
});
function cookieState(){
      $helmetcookie = getCookie('helmetstate')
      if ($helmetcookie=='true'){$( '#helmetselection' ).parents().slideDown('fast')};
      $vambracescookie = getCookie('vambracesstate')
      if ($vambracescookie=='true'){$( '#vambracesselection' ).parents().slideDown('fast')};
      $armorcookie = getCookie('armorstate')
      if ($armorcookie=='true'){$( '#armorselection' ).parents().slideDown('fast')};
      $waistcookie = getCookie('waiststate')
      if ($waistcookie=='true'){$( '#waistselection' ).parents().slideDown('fast')};
      $greavescookie = getCookie('greavesstate')
      if ($greavescookie=='true'){$( '#greavesselection' ).parents().slideDown('fast')};
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}