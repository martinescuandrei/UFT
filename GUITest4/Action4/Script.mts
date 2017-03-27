

print(WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetSelection)

WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select 3
wait 2

print(WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetSelection)

If WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetSelection = "Los Angeles" Then
	
		Reporter.ReportEvent micPass , "Test GetSelection" , "Pass, Selection correct"
	
	else
	
		Reporter.ReportEvent micFail , "Test GetSelection" , "Failed , Incorrect selection"
	
End If
