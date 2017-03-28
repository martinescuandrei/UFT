Option Explicit
Dim fromCity, toCity, checkDepartureTime,reportName @@ hightlight id_;_2072223800_;_script infofile_;_ZIP::ssf21.xml_;_
fromCity = "San Francisco"
toCity = "Seattle"
reportName = "Search Window"

Call checkWindowIsPresentBySpecifiedObject(WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity"),reportName)


'If WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Exist Then @@ script infofile_;_ZIP::ssf43.xml_;_
	
		'Reporter.ReportEvent micPass , "Test SelectionPage" , "Pass, SelectionPage page present"
	
	'else
	
		'Reporter.ReportEvent micFail , "Test SelectionPage" , "Failed , SelectionPage page not present"
	
'End If


'from - to
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("fromCity", dtLocalSheet) @@ hightlight id_;_2030801304_;_script infofile_;_ZIP::ssf61.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("toCity", dtLocalSheet) @@ hightlight id_;_1880637304_;_script infofile_;_ZIP::ssf62.xml_;_

'calendar
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_2").Click 82,56 @@ hightlight id_;_2059775952_;_script infofile_;_ZIP::ssf63.xml_;_

'search
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1893439416_;_script infofile_;_ZIP::ssf64.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1893440040_;_script infofile_;_ZIP::ssf65.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1893440088_;_script infofile_;_ZIP::ssf66.xml_;_

'check departureTime @@ hightlight id_;_2133663768_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").Check CheckPoint("06:15") @@ hightlight id_;_1899190264_;_script infofile_;_ZIP::ssf67.xml_;_

checkDepartureTime = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("09:51").GetROProperty("name") @@ hightlight id_;_1899190264_;_script infofile_;_ZIP::ssf68.xml_;_
print(checkDepartureTime)

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2036444040_;_script infofile_;_ZIP::ssf69.xml_;_

