Option Explicit
Dim fromCity, toCity, checkDepartureTime @@ hightlight id_;_2072223800_;_script infofile_;_ZIP::ssf21.xml_;_
fromCity = "San Francisco"
toCity = "Seattle"
'from - to @@ hightlight id_;_1889133248_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select fromCity @@ hightlight id_;_2056901584_;_script infofile_;_ZIP::ssf24.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select toCity @@ hightlight id_;_2060718512_;_script infofile_;_ZIP::ssf25.xml_;_

'calendar
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_2").Click 82,56 @@ hightlight id_;_2060718848_;_script infofile_;_ZIP::ssf26.xml_;_

'search
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2060720000_;_script infofile_;_ZIP::ssf27.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_2060720192_;_script infofile_;_ZIP::ssf28.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2060720240_;_script infofile_;_ZIP::ssf29.xml_;_

 @@ hightlight id_;_2754080_;_script infofile_;_ZIP::ssf23.xml_;_
 @@ hightlight id_;_2015814496_;_script infofile_;_ZIP::ssf8.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_2754080_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("SFO").Check CheckPoint("SFO_2") @@ hightlight id_;_2133663768_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Check CheckPoint("06:15") @@ hightlight id_;_2133668424_;_script infofile_;_ZIP::ssf31.xml_;_

'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("SFO").Check CheckPoint("SFO") 
checkDepartureTime = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").GetROProperty("name") @@ hightlight id_;_2133668424_;_script infofile_;_ZIP::ssf32.xml_;_
'Msgbox(checkDepartureTime)
print(checkDepartureTime)

'SearchFlight
'WpfWindow("HPE MyFlight Sample Applicatio").Close
