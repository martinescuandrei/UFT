﻿Option Explicit
Dim fromCity, toCity, checkDepartureTime @@ hightlight id_;_2072223800_;_script infofile_;_ZIP::ssf21.xml_;_
fromCity = "San Francisco"
toCity = "Seattle"


If WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Exist Then @@ script infofile_;_ZIP::ssf43.xml_;_
	
		Reporter.ReportEvent micPass , "Test SelectionPage" , "Pass, SelectionPage page present"
	
	else
	
		Reporter.ReportEvent micFail , "Test SelectionPage" , "Failed , SelectionPage page not present"
	
End If


'from - to
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("fromCity", dtLocalSheet) @@ hightlight id_;_2023808232_;_script infofile_;_ZIP::ssf33.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("toCity", dtLocalSheet) @@ hightlight id_;_2023809336_;_script infofile_;_ZIP::ssf34.xml_;_

'calendar
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_2").Click 82,56 @@ hightlight id_;_2023808328_;_script infofile_;_ZIP::ssf35.xml_;_

'search
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2023810248_;_script infofile_;_ZIP::ssf36.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_2023812552_;_script infofile_;_ZIP::ssf37.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2023811544_;_script infofile_;_ZIP::ssf38.xml_;_

'check departureTime  @@ hightlight id_;_2133663768_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Check CheckPoint("06:15") @@ hightlight id_;_2135482712_;_script infofile_;_ZIP::ssf40.xml_;_

checkDepartureTime = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").GetROProperty("name")
print(checkDepartureTime)

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2023813656_;_script infofile_;_ZIP::ssf42.xml_;_

