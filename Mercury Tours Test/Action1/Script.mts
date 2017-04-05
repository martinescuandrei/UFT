Option  Explicit
Dim browserType, site, modeMaximized, pageTitle, EXPECTED_TITLE, mainPage, Iterator

browserType = "iexplore"
site = "http://newtours.demoaut.com/mercurywelcome.php"
modeMaximized = 3

'Open browser 
SystemUtil.Run browserType,site,"","",modeMaximized

'wait 3

'Check browser opened at specified site

pageTitle = Browser("Welcome: Mercury Tours").GetTOProperty("title")
EXPECTED_TITLE = "Welcome: Mercury Tours"

If pageTitle = EXPECTED_TITLE Then
	
		Reporter.ReportEvent micPass , "Test Page title" ,"Correct "+EXPECTED_TITLE+" Page displayed"
	
	Else 
	
		Reporter.ReportEvent micFail , "Test Page title" , "Incorrect "&pageTitle+" Page displayed"
		
End If


'Check web elements
Set mainPage = Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")

For Iterator = 1 To DataTable.GetSheet(dtLocalSheet).GetRowCount Step 1

	DataTable.SetCurrentRow(Iterator) 
	
	call checkElementIsPresentBySpecifiedObject(mainPage.WebElement(DataTable.Value("WebElementName",dtLocalSheet)), DataTable.Value("WebElementName",dtLocalSheet))
	
Next

