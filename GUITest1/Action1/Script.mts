Option Explicit
Dim user, password, encryptedPassword,agentNameObject,reportName

user = "john"
password = "hp"
reportName = "Login Window"
encryptedPassword = Crypt.Encrypt(password)
print(encryptedPassword)

Call checkWindowIsPresentBySpecifiedObject(WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName"),reportName)

'Login
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("user", dtLocalSheet) @@ hightlight id_;_2130093840_;_script infofile_;_ZIP::ssf67.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set user

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet) @@ hightlight id_;_1880609848_;_script infofile_;_ZIP::ssf68.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set password


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
'WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click

'Check login

'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application")
'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application")
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Output CheckPoint("John Smith_2")
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_1899196472_;_script infofile_;_ZIP::ssf69.xml_;_


'WpfWindow("HPE MyFlight Sample Applicatio").Close
