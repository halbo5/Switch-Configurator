function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function setvlan(champs,nbports) {
	if (champs.idvlandata!="" && champs.idvlanvoix!="") {
		if (eval("champs.idvlanvoix") < eval("champs.idvlandata")) {
		$( "#message" ).append( "vlan " + champs.idvlanvoix + " enable name \"Voix\"\n" );
		for (var i = 1; i<= nbports; i++) {
			if (eval("champs.port"+i) == "voixport"+i) $( "#message" ).append( "vlan " + champs.idvlanvoix + " port default 1/"+i+"\n");
		}
		$( "#message" ).append( "vlan " + champs.idvlandata + " enable name \"Data\"\n" );
		for (var i = 1; i<= nbports; i++) {
			if (eval("champs.port"+i) == "dataport"+i) $( "#message" ).append( "vlan " + champs.idvlandata + " port default 1/"+i+"\n");
			if (eval("champs.port"+i) == "mixteport"+i) $( "#message" ).append( "vlan " + champs.idvlandata + " port default 1/"+i+"\n");
		}
		}
		else {
		$( "#message" ).append( "vlan " + champs.idvlandata + " enable name \"Data\"\n" );
		for (var i = 1; i<= nbports; i++) {
			if (eval("champs.port"+i) == "dataport"+i) $( "#message" ).append( "vlan " + champs.idvlandata + " port default 1/"+i+"\n");
		}
		$( "#message" ).append( "vlan " + champs.idvlanvoix + " enable name \"Voix\"\n" );
		for (var i = 1; i<= nbports; i++) {
			if (eval("champs.port"+i) == "voixport"+i) $( "#message" ).append( "vlan " + champs.idvlanvoix + " port default 1/"+i+"\n");
		}
		}
		}
}