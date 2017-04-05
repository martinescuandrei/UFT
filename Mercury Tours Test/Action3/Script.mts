Option  Explicit
Dim user, password, mainPage, findFlightPage, Iterator

user = "a"
password = "a"


'SetUp Login @@ hightlight id_;_65884_;_script infofile_;_ZIP::ssf1.xml_;_
Set mainPage = Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")

'Send user, password and click sign in
mainPage.WebEdit("userName").Set user @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf2.xml_;_
mainPage.WebEdit("password").Set password @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf3.xml_;_
mainPage.Image("Sign-In").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf4.xml_;_

wait 10

'check if a javascript Security Warning is present
If Browser("Find a Flight: Mercury").Window("Security Warning").Exist then

	Browser("Find a Flight: Mercury").Window("Security Warning").Click
	
End If


'Check if login was made

Set findFlightPage = Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury")

For Iterator = 1 To DataTable.GetSheet(dtLocalSheet).GetRowCount Step 1

	DataTable.SetCurrentRow(Iterator) 
	
	call checkElementIsPresentBySpecifiedObject(findFlightPage.WebList(DataTable.Value("WebElementName",dtLocalSheet)), DataTable.Value("WebElementName",dtLocalSheet))
	
Next
 @@ hightlight id_;_591172_;_script infofile_;_ZIP::ssf29.xml_;_
