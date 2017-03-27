

SystemUtil.Run "C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application/FlightsGUI.exe","HPE MyFlight Sample Applicatio","","",7

If WpfWindow("HPE MyFlight Sample Applicatio").Exist Then
	
		Reporter.ReportEvent micPass, "Exist Property" , "Application exist"
	
	else
	
		Reporter.ReportEvent micFail, "Exist Property" , "Application error"
	
End If

'WpfWindow("HPE MyFlight Sample Applicatio").Exist


