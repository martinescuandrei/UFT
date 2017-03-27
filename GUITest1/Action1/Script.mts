Option Explicit
Dim user, password, encryptedPassword
user = "john"
password = "hp"
encryptedPassword = Crypt.Encrypt(password)
print(encryptedPassword)

'Login
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("user", dtLocalSheet) @@ hightlight id_;_2029007304_;_script infofile_;_ZIP::ssf60.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set user

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet) @@ hightlight id_;_2007334624_;_script infofile_;_ZIP::ssf61.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set password


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_2023807416_;_script infofile_;_ZIP::ssf62.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click

'Check login

'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_2820886_;_script infofile_;_ZIP::ssf58.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application")
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Output CheckPoint("John Smith_2")
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_2135484264_;_script infofile_;_ZIP::ssf63.xml_;_


'WpfWindow("HPE MyFlight Sample Applicatio").Close
