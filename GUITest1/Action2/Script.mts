Option Explicit
Dim fromCity, toCity, checkDepartureTime,reportName @@ hightlight id_;_2072223800_;_script infofile_;_ZIP::ssf21.xml_;_
fromCity = "San Francisco"
toCity = "Seattle"
reportName = "Search Window"

Call checkWindowIsPresentBySpecifiedObject(WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity"),reportName)

'from - to
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("fromCity", dtLocalSheet) @@ hightlight id_;_2085845848_;_script infofile_;_ZIP::ssf80.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("toCity", dtLocalSheet) @@ hightlight id_;_2085845752_;_script infofile_;_ZIP::ssf81.xml_;_

'calendar
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_2").Click 82,56 @@ hightlight id_;_2085846568_;_script infofile_;_ZIP::ssf82.xml_;_

'search
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2085846328_;_script infofile_;_ZIP::ssf83.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_2085855688_;_script infofile_;_ZIP::ssf84.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2085858136_;_script infofile_;_ZIP::ssf85.xml_;_

'check departureTime
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Check CheckPoint("06:15") @@ hightlight id_;_1988330928_;_script infofile_;_ZIP::ssf86.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Output CheckPoint("departureTime") @@ hightlight id_;_1988330928_;_script infofile_;_ZIP::ssf87.xml_;_

checkDepartureTime = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").GetROProperty("name") @@ hightlight id_;_1988330928_;_script infofile_;_ZIP::ssf88.xml_;_
print(checkDepartureTime)

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1994456496_;_script infofile_;_ZIP::ssf89.xml_;_

