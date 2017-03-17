Dim fromCity, toCity @@ hightlight id_;_2072223800_;_script infofile_;_ZIP::ssf21.xml_;_
fromCity = "San Francisco"
toCity = "Seattle"
'from - to @@ hightlight id_;_1889133248_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select fromCity @@ hightlight id_;_1889131760_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select toCity @@ hightlight id_;_1889132912_;_script infofile_;_ZIP::ssf12.xml_;_

'calendar
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_2").Click 82,56

'search
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2070399024_;_script infofile_;_ZIP::ssf13.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_2070397968_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2069322040_;_script infofile_;_ZIP::ssf15.xml_;_

 @@ hightlight id_;_2754080_;_script infofile_;_ZIP::ssf23.xml_;_
 @@ hightlight id_;_2015814496_;_script infofile_;_ZIP::ssf8.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_2754080_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("SFO").Check CheckPoint("SFO_2")
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Check CheckPoint("06:15")

'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("SFO").Check CheckPoint("SFO") @@ hightlight id_;_2072239320_;_script infofile_;_ZIP::ssf16.xml_;_
Dim checkDepartureTime
checkDepartureTime = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").GetROProperty("name")
Msgbox(checkDepartureTime)

'SearchFlight
'WpfWindow("HPE MyFlight Sample Applicatio").Close
