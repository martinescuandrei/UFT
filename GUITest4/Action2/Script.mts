WpfWindow("HPE MyFlight Sample Applicatio").Close

If not WpfWindow("HPE MyFlight Sample Applicatio").Exist Then
	
		Reporter.ReportEvent micPass , "Exist property" , "Pass, application is closed"
	else
		
		Reporter.ReportEvent micFail , "Exist Property" , "Faild, application still present"
	
End If

WpfWindow("HPE MyFlight Sample Applicatio").Exist
