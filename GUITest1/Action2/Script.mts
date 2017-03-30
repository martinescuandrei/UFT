Option Explicit
Dim fromCity, toCity, checkDepartureTime,reportName @@ hightlight id_;_2072223800_;_script infofile_;_ZIP::ssf21.xml_;_
fromCity = "San Francisco"
toCity = "Seattle"
reportName = "Search Window"

Call checkWindowIsPresentBySpecifiedObject(WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity"),reportName)

'from - to
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("fromCity", dtLocalSheet) @@ hightlight id_;_1885856712_;_script infofile_;_ZIP::ssf100.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("toCity", dtLocalSheet) @@ hightlight id_;_2146239328_;_script infofile_;_ZIP::ssf101.xml_;_

'calendar
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_2").Click 82,56 @@ hightlight id_;_2146239472_;_script infofile_;_ZIP::ssf102.xml_;_

'search
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2146239136_;_script infofile_;_ZIP::ssf103.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1937710744_;_script infofile_;_ZIP::ssf104.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1937710888_;_script infofile_;_ZIP::ssf105.xml_;_

'check departureTime
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Check CheckPoint("06:15") @@ hightlight id_;_2125864328_;_script infofile_;_ZIP::ssf106.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Output CheckPoint("departureTime") @@ hightlight id_;_2125864328_;_script infofile_;_ZIP::ssf107.xml_;_

checkDepartureTime = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").GetROProperty("name") @@ hightlight id_;_2125864328_;_script infofile_;_ZIP::ssf108.xml_;_
print(checkDepartureTime)

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1880052584_;_script infofile_;_ZIP::ssf109.xml_;_

