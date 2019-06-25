//this file contains additional features written by me

//for variable size of the simulator according to screen size
var x=$(".simcir_outer_div").width();
x=x*0.90;

//the if else block decides which circuit to display according to user settings
if(sessionStorage.getItem("8bitCounter"))
{
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},

    {"type":"DC"},




    {"type":"NOT"},
    
    {"type":"NAND"},

    {"type":"NOR"},

    {"type":"OSC"},

    {"type":"T-FF"},
    {"type":"D-FF"},
    {"type":"8bitCounter"},


    {"type":"NumSrc"},
    
    {"type":"DSO"}
  ],
 "devices":[
    {"type":"8bitCounter","id":"dev0","x":104,"y":24,"label":"8bitCounter"},
    {"type":"D-FF","id":"dev1","x":248,"y":248,"label":"D-FF"},
    {"type":"D-FF","id":"dev2","x":376,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev3","x":112,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev4","x":360,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev5","x":232,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev6","x":128,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev7","x":472,"y":248,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev8","x":488,"y":168,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev9","x":232,"y":152,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev10","x":216,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev11","x":240,"y":192,"label":"Joint","state":{"direction":1}},
    {"type":"Joint","id":"dev12","x":168,"y":200,"label":"Joint","state":{"direction":2}},
    {"type":"Joint","id":"dev13","x":88,"y":208,"label":"Joint","state":{"direction":1}},
    {"type":"Joint","id":"dev14","x":96,"y":248,"label":"Joint","state":{"direction":0}},
    {"type":"DSO","id":"dev15","x":520,"y":144,"label":"DSO","state":{"playing":true,"rangeIndex":0}},
    {"type":"DC","id":"dev16","x":16,"y":16,"label":"DC"},
    {"type":"Joint","id":"dev17","x":48,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"OSC","id":"dev18","x":8,"y":80,"label":"OSC"},
    {"type":"In","id":"dev19","x":40,"y":328,"label":"In"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev17.out0"},
    {"from":"dev0.in1","to":"dev18.out0"},
    {"from":"dev1.in0","to":"dev6.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev1.out0"},
    {"from":"dev2.in1","to":"dev4.out0"},
    {"from":"dev3.in0","to":"dev19.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev5.in0","to":"dev3.out0"},
    {"from":"dev6.in0","to":"dev14.out0"},
    {"from":"dev6.in1","to":"dev3.out0"},
    {"from":"dev7.in0","to":"dev2.out0"},
    {"from":"dev8.in0","to":"dev7.out0"},
    {"from":"dev9.in0","to":"dev10.out0"},
    {"from":"dev10.in0","to":"dev0.out3"},
    {"from":"dev11.in0","to":"dev9.out0"},
    {"from":"dev12.in0","to":"dev11.out0"},
    {"from":"dev13.in0","to":"dev12.out0"},
    {"from":"dev14.in0","to":"dev13.out0"},
    {"from":"dev15.in0","to":"dev9.out0"},
    {"from":"dev15.in1","to":"dev8.out0"},
    {"from":"dev17.in0","to":"dev16.out0"},
    {"from":"dev19.in0","to":"dev18.out0"}
  ]
	};

	//sets the Frequency of the OSC.
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[17]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		counter.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		counter.toolbox.push({
			"type":"8BitRingCounter"
		});
	}
	//set all the settings as string inside div
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");

}

else if(sessionStorage.getItem("8bitRingCounter")){
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    
        {"type":"In"},
    {"type":"Out"},

    {"type":"DC"},
    {"type":"Joint"},




    {"type":"NOT"},
    
    {"type":"NAND"},

    {"type":"NOR"},

    {"type":"OSC"},

    {"type":"T-FF"},
    {"type":"D-FF"},
    {"type":"8bitCounter"},


    {"type":"NumSrc"},
    
    {"type":"DSO"}
  ],
  "devices":[
    {"type":"8bitCounter","id":"dev0","x":104,"y":24,"label":"8bitCounter"},
    {"type":"D-FF","id":"dev1","x":248,"y":248,"label":"D-FF"},
    {"type":"D-FF","id":"dev2","x":376,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev3","x":112,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev4","x":360,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev5","x":232,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev6","x":128,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev7","x":216,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev8","x":96,"y":248,"label":"Joint","state":{"direction":0}},
    {"type":"DC","id":"dev9","x":16,"y":16,"label":"DC"},
    {"type":"Joint","id":"dev10","x":48,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"OSC","id":"dev11","x":8,"y":80,"label":"OSC"},
    {"type":"In","id":"dev12","x":40,"y":328,"label":"In"},
    {"type":"Joint","id":"dev13","x":88,"y":176,"label":"Joint","state":{"direction":1}},
    {"type":"Joint","id":"dev14","x":168,"y":168,"label":"Joint","state":{"direction":2}},
    {"type":"Joint","id":"dev15","x":240,"y":160,"label":"Joint","state":{"direction":1}},
    {"type":"Out","id":"dev16","x":192,"y":192,"label":"Out"},
    {"type":"Out","id":"dev17","x":312,"y":200,"label":"Out"},
    {"type":"DSO","id":"dev18","x":512,"y":64,"label":"DSO","state":{"playing":true,"rangeIndex":0}},
    {"type":"Joint","id":"dev19","x":232,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev20","x":480,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Out","id":"dev21","x":440,"y":200,"label":"Out"},
    {"type":"Joint","id":"dev22","x":496,"y":120,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev23","x":368,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev24","x":384,"y":104,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev25","x":256,"y":200,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev26","x":272,"y":88,"label":"Joint","state":{"direction":0}}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev10.out0"},
    {"from":"dev0.in1","to":"dev11.out0"},
    {"from":"dev1.in0","to":"dev6.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev1.out0"},
    {"from":"dev2.in1","to":"dev4.out0"},
    {"from":"dev3.in0","to":"dev12.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev5.in0","to":"dev3.out0"},
    {"from":"dev6.in0","to":"dev8.out0"},
    {"from":"dev6.in1","to":"dev3.out0"},
    {"from":"dev7.in0","to":"dev0.out3"},
    {"from":"dev8.in0","to":"dev13.out0"},
    {"from":"dev10.in0","to":"dev9.out0"},
    {"from":"dev12.in0","to":"dev11.out0"},
    {"from":"dev13.in0","to":"dev14.out0"},
    {"from":"dev14.in0","to":"dev15.out0"},
    {"from":"dev15.in0","to":"dev19.out0"},
    {"from":"dev16.in0","to":"dev6.out0"},
    {"from":"dev17.in0","to":"dev1.out0"},
    {"from":"dev18.in0","to":"dev19.out0"},
    {"from":"dev18.in1","to":"dev26.out0"},
    {"from":"dev18.in2","to":"dev24.out0"},
    {"from":"dev18.in3","to":"dev22.out0"},
    {"from":"dev19.in0","to":"dev7.out0"},
    {"from":"dev20.in0","to":"dev21.out0"},
    {"from":"dev21.in0","to":"dev2.out0"},
    {"from":"dev22.in0","to":"dev20.out0"},
    {"from":"dev23.in0","to":"dev17.out0"},
    {"from":"dev24.in0","to":"dev23.out0"},
    {"from":"dev25.in0","to":"dev16.out0"},
    {"from":"dev26.in0","to":"dev25.out0"}
  ]
	};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[6]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		counter.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		counter.toolbox.push({
			"type":"8BitRingCounter"
		});
	}
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}



else if(sessionStorage.getItem("piso")){
	var counter={
  "width":x,
  "height":800,
  "showToolbox":true,
  "toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},
    {"type":"DC"},
    
    {"type":"NOT"},
    {"type":"AND"},
    {"type":"NAND"},
    {"type":"OR"},
    {"type":"NOR"},
   
    {"type":"OSC"},
    
    {"type":"T-FF"},
    {"type":"D-FF"},
   
    {"type":"NumSrc"},
   
    {"type":"DSO"}
  ],
  "devices":[
    {"type":"OSC","id":"dev0","x":32,"y":296,"label":"OSC"},
    {"type":"AND","id":"dev1","x":384,"y":80,"label":"AND"},
    {"type":"D-FF","id":"dev2","x":464,"y":232,"label":"D-FF"},
    {"type":"OR","id":"dev3","x":432,"y":96,"label":"OR"},
    {"type":"OR","id":"dev4","x":264,"y":72,"label":"OR"},
    {"type":"AND","id":"dev5","x":216,"y":64,"label":"AND"},
    {"type":"AND","id":"dev6","x":216,"y":96,"label":"AND"},
    {"type":"Joint","id":"dev7","x":448,"y":304,"label":"Joint","state":{"direction":0}},
    {"type":"NumSrc","id":"dev8","x":192,"y":16,"label":"NumSrc","state":{"direction":0,"on":false}},
    {"type":"NumSrc","id":"dev9","x":360,"y":16,"label":"NumSrc","state":{"direction":0,"on":true}},
    {"type":"D-FF","id":"dev10","x":128,"y":232,"label":"D-FF"},
    {"type":"Joint","id":"dev11","x":112,"y":304,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev12","x":352,"y":96,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev13","x":184,"y":80,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev14","x":192,"y":96,"label":"Joint","state":{"direction":0}},
    {"type":"AND","id":"dev15","x":384,"y":112,"label":"AND"},
    {"type":"Joint","id":"dev16","x":360,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev17","x":296,"y":216,"label":"D-FF"},
    {"type":"Joint","id":"dev18","x":280,"y":304,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev19","x":40,"y":344,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev20","x":368,"y":344,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev21","x":200,"y":344,"label":"Joint","state":{"direction":0}},
    {"type":"NumSrc","id":"dev22","x":104,"y":24,"label":"NumSrc","state":{"direction":0,"on":true}},
    {"type":"NOT","id":"dev23","x":152,"y":360,"label":"NOT"},
    {"type":"Joint","id":"dev24","x":336,"y":368,"label":"Joint","state":{"direction":0}},
    {"type":"NumSrc","id":"dev25","x":16,"y":368,"label":"Shift","state":{"direction":0,"on":false}},
    {"type":"DSO","id":"dev26","x":576,"y":224,"label":"DSO","state":{"playing":true,"rangeIndex":0}}
  ],
  "connectors":[
    {"from":"dev1.in0","to":"dev9.out0"},
    {"from":"dev1.in1","to":"dev12.out0"},
    {"from":"dev2.in0","to":"dev3.out0"},
    {"from":"dev2.in1","to":"dev7.out0"},
    {"from":"dev3.in0","to":"dev1.out0"},
    {"from":"dev3.in1","to":"dev15.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev4.in1","to":"dev6.out0"},
    {"from":"dev5.in0","to":"dev8.out0"},
    {"from":"dev5.in1","to":"dev13.out0"},
    {"from":"dev6.in0","to":"dev14.out0"},
    {"from":"dev6.in1","to":"dev21.out0"},
    {"from":"dev7.in0","to":"dev18.out0"},
    {"from":"dev10.in0","to":"dev22.out0"},
    {"from":"dev10.in1","to":"dev11.out0"},
    {"from":"dev11.in0","to":"dev0.out0"},
    {"from":"dev12.in0","to":"dev24.out0"},
    {"from":"dev13.in0","to":"dev23.out0"},
    {"from":"dev14.in0","to":"dev10.out0"},
    {"from":"dev15.in0","to":"dev16.out0"},
    {"from":"dev15.in1","to":"dev20.out0"},
    {"from":"dev16.in0","to":"dev17.out0"},
    {"from":"dev17.in0","to":"dev4.out0"},
    {"from":"dev17.in1","to":"dev18.out0"},
    {"from":"dev18.in0","to":"dev11.out0"},
    {"from":"dev19.in0","to":"dev25.out0"},
    {"from":"dev20.in0","to":"dev21.out0"},
    {"from":"dev21.in0","to":"dev19.out0"},
    {"from":"dev23.in0","to":"dev25.out0"},
    {"from":"dev24.in0","to":"dev23.out0"},
    {"from":"dev26.in0","to":"dev2.out0"}
  ]
};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[6]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		counter.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		counter.toolbox.push({
			"type":"8BitRingCounter"
		});
	}
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}


else if(sessionStorage.getItem("pipo")){
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},
    {"type":"DC"},

  
    {"type":"OSC"},
  
    {"type":"T-FF"},
    {"type":"D-FF"},
    
    {"type":"NumSrc"},
    
    {"type":"DSO"}
  ],
  "devices":[
    {"type":"D-FF","id":"dev0","x":248,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev1","x":112,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev2","x":360,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev3","x":232,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev4","x":128,"y":248,"label":"D-FF"},
    {"type":"OSC","id":"dev5","x":8,"y":80,"label":"OSC"},
    {"type":"In","id":"dev6","x":40,"y":328,"label":"In"},
    {"type":"Out","id":"dev7","x":312,"y":200,"label":"Out"},
    {"type":"DSO","id":"dev8","x":512,"y":64,"label":"DSO","state":{"playing":true,"rangeIndex":0}},
    {"type":"Joint","id":"dev9","x":480,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Out","id":"dev10","x":440,"y":200,"label":"Out"},
    {"type":"Joint","id":"dev11","x":496,"y":120,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev12","x":368,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev13","x":384,"y":104,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev14","x":256,"y":200,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev15","x":272,"y":88,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev16","x":376,"y":248,"label":"D-FF"},
    {"type":"Out","id":"dev17","x":192,"y":192,"label":"Out"},
    {"type":"NumSrc","id":"dev18","x":80,"y":248,"label":"NumSrc","state":{"direction":0,"on":true}},
    {"type":"NumSrc","id":"dev19","x":208,"y":248,"label":"NumSrc","state":{"direction":0,"on":false}},
    {"type":"NumSrc","id":"dev20","x":336,"y":248,"label":"NumSrc","state":{"direction":0,"on":true}}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev19.out0"},
    {"from":"dev0.in1","to":"dev3.out0"},
    {"from":"dev1.in0","to":"dev6.out0"},
    {"from":"dev2.in0","to":"dev3.out0"},
    {"from":"dev3.in0","to":"dev1.out0"},
    {"from":"dev4.in0","to":"dev18.out0"},
    {"from":"dev4.in1","to":"dev1.out0"},
    {"from":"dev6.in0","to":"dev5.out0"},
    {"from":"dev7.in0","to":"dev0.out0"},
    {"from":"dev8.in1","to":"dev15.out0"},
    {"from":"dev8.in2","to":"dev13.out0"},
    {"from":"dev8.in3","to":"dev11.out0"},
    {"from":"dev9.in0","to":"dev10.out0"},
    {"from":"dev10.in0","to":"dev16.out0"},
    {"from":"dev11.in0","to":"dev9.out0"},
    {"from":"dev12.in0","to":"dev7.out0"},
    {"from":"dev13.in0","to":"dev12.out0"},
    {"from":"dev14.in0","to":"dev17.out0"},
    {"from":"dev15.in0","to":"dev14.out0"},
    {"from":"dev16.in0","to":"dev20.out0"},
    {"from":"dev16.in1","to":"dev2.out0"},
    {"from":"dev17.in0","to":"dev4.out0"}
  ]
	};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[6]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		counter.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		counter.toolbox.push({
			"type":"8BitRingCounter"
		});
	}
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}



else{
	var obj={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		    {"type":"In"},
    {"type":"Out"},

    {"type":"DC"},




    {"type":"NOT"},
    
    {"type":"NAND"},

    {"type":"NOR"},

    {"type":"OSC"},

    {"type":"T-FF"},
    {"type":"D-FF"},
    {"type":"8bitCounter"},
    {"type":"SISO 3-Register"},
    {"type":"SIPO 3-Register"},
    {"type":"PISO 3-Register"},
    {"type":"PIPO 3-Register"},




    {"type":"NumSrc"},
    
    {"type":"DSO"}
		],
		"devices":[
		],
		"connectors":[
		]
	};

	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		obj.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	else
	{
		$("#freq").val("");
	}
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		obj.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		obj.toolbox.push({
			"type":"8BitRingCounter"
		});
	}

	var html=JSON.stringify(obj);
	document.querySelector(".simcir").innerHTML=html;
}


$("#counter").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("8bitCounter_module",1);
	}
	else
	{
		sessionStorage.removeItem("8bitCounter_module");
	}
});

$("#ringcounter").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("8bitRingCounter_module",1);
	}
	else
	{
		sessionStorage.removeItem("8bitRingCounter_module");
	}
});

$("#load_counter").click(function(event) {
	sessionStorage.setItem("8bitCounter",1);
	sessionStorage.removeItem("8bitRingCounter");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("pipo");


	location.reload();
});

$("#load_rcounter").click(function(event) {
	sessionStorage.setItem("8bitRingCounter",1);
	sessionStorage.removeItem("8bitCounter");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("pipo");

	location.reload();
});

$("#load_piso").click(function(event) {

	sessionStorage.setItem("piso",1);
	sessionStorage.removeItem("8bitCounter");
	sessionStorage.removeItem("8bitRingCounter");
	sessionStorage.removeItem("pipo");
	location.reload();
});

$("#load_pipo").click(function(event) {

	sessionStorage.setItem("pipo",1);
	sessionStorage.removeItem("8bitCounter");
	sessionStorage.removeItem("8bitRingCounter");
	sessionStorage.removeItem("piso");
	location.reload();
});

$("#clear_workspace").click(function(event) {
	sessionStorage.removeItem("8bitRingCounter");
	sessionStorage.removeItem("8bitCounter");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("pipo");
	location.reload();
});

$("#freq").change(function(event) {
	sessionStorage.setItem("OSCfreq", parseInt(this.value,10));
});

$("#clear_settings").click(function(event) {
	sessionStorage.clear();
});