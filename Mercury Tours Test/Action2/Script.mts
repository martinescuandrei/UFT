Dim objectMainPage, webElements
Set objectMainPage=Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")

For Iterator = 1 To DataTable.GetSheet(dtLocalSheet).GetRowCount Step 1

	DataTable.SetCurrentRow(Iterator) 
	
	call checkElementIsPresentBySpecifiedObject(objectMainPage.WebElement(DataTable.Value("WebElementName",dtLocalSheet)), DataTable.Value("WebElementName",dtLocalSheet))
	
Next

