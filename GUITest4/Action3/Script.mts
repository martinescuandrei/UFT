Dim itemsCount

SystemUtil.Run "C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application/FlightsGUI.exe","HPE MyFlight Sample Applicatio","","",7

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2034938784_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "58d3fde1801af5d7d0fb" @@ hightlight id_;_2034940800_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_2083769392_;_script infofile_;_ZIP::ssf3.xml_;_

itemsCount = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetItemsCount
print (itemsCount)

