Option Explicit
Dim user, password, encryptedPassword
user = "john"
password = "hp"
encryptedPassword = Crypt.Encrypt(password)
print(encryptedPassword)

'Login
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("user", dtLocalSheet)
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set user

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet) @@ hightlight id_;_2060717024_;_script infofile_;_ZIP::ssf56.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set password


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_2135729536_;_script infofile_;_ZIP::ssf57.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click

'Check login

'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_2820886_;_script infofile_;_ZIP::ssf58.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application")
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Output CheckPoint("John Smith_2")
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_2133666872_;_script infofile_;_ZIP::ssf59.xml_;_


'WpfWindow("HPE MyFlight Sample Applicatio").Close
