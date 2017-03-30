Option Explicit
Dim user, password, encryptedPassword,agentNameObject,reportName,startTime, endTime, focused @@ hightlight id_;_265902_;_script infofile_;_ZIP::ssf76.xml_;_

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
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("user", dtLocalSheet) @@ hightlight id_;_1885673688_;_script infofile_;_ZIP::ssf77.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set user

focused = WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").GetROProperty("focused") @@ hightlight id_;_1885673688_;_script infofile_;_ZIP::ssf78.xml_;_
print(focused)

Call checkObjectProperty(focused)

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet) @@ hightlight id_;_1890368368_;_script infofile_;_ZIP::ssf79.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set password


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
'WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click

endTime = Timer

print(endTime-startTime)
print(Services.EndTransaction ("LoginTime"))

'Check login
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_2125868984_;_script infofile_;_ZIP::ssf80.xml_;_

