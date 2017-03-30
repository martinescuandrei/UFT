Option Explicit
Dim user, password, encryptedPassword,agentNameObject,reportName,startTime, endTime @@ hightlight id_;_265902_;_script infofile_;_ZIP::ssf76.xml_;_

user = "john"
password = "hp"
reportName = "Login Window"
encryptedPassword = Crypt.Encrypt(password)
print(encryptedPassword)

Call checkWindowIsPresentBySpecifiedObject(WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName"),reportName)
 @@ hightlight id_;_1879700792_;_script infofile_;_ZIP::ssf72.xml_;_
Services.StartTransaction "LoginTime"
startTime = Timer
 
'Login
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("user", dtLocalSheet) @@ hightlight id_;_2085869992_;_script infofile_;_ZIP::ssf73.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set user

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet) @@ hightlight id_;_2085848056_;_script infofile_;_ZIP::ssf74.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set password


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
'WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click

endTime = Timer

print(endTime-startTime)
print(Services.EndTransaction ("LoginTime"))

'Check login
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_1988335584_;_script infofile_;_ZIP::ssf75.xml_;_

