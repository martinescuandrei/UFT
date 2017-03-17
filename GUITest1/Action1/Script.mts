
'Login
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"
'WpfWindow("HPE MyFlight Sample Applicatio").CaptureBitmap
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp" @@ hightlight id_;_2072565592_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
'WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click @@ hightlight id_;_197988_;_script infofile_;_ZIP::ssf5.xml_;_

'Check login
 @@ hightlight id_;_2061168992_;_script infofile_;_ZIP::ssf39.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application_2") @@ hightlight id_;_1050282_;_script infofile_;_ZIP::ssf41.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_1050282_;_script infofile_;_ZIP::ssf40.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Output CheckPoint("John Smith_2") @@ hightlight id_;_2072220696_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_2072220696_;_script infofile_;_ZIP::ssf19.xml_;_

 @@ hightlight id_;_2066094656_;_script infofile_;_ZIP::ssf7.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_1246920_;_script infofile_;_ZIP::ssf31.xml_;_
