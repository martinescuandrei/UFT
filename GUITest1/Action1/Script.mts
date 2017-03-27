Option Explicit
Dim user, password, encryptedPassword,agentNameObject

user = "john"
password = "hp"
encryptedPassword = Crypt.Encrypt(password)
print(encryptedPassword)

'Set agentNameObject = WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName")

'checkWindowIsPresentBySpecifiedObject(agentNameObject)

If WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Exist(2) Then
	
		Reporter.ReportEvent micPass , "Test LoginPage" , "Pass, Login page present"
	
	else
	
		Reporter.ReportEvent micFail , "Test LoginPage" , "Failed , Login page not present"
	
End If

'Login
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("user", dtLocalSheet) @@ hightlight id_;_2083866104_;_script infofile_;_ZIP::ssf64.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set user

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet) @@ hightlight id_;_2084990504_;_script infofile_;_ZIP::ssf65.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set password


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
'WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click

'Check login

'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application")
'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application")
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Output CheckPoint("John Smith_2")
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_2131731032_;_script infofile_;_ZIP::ssf66.xml_;_


'WpfWindow("HPE MyFlight Sample Applicatio").Close
