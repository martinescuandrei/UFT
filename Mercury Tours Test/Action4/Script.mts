Option  Explicit
Dim findFlightPage, Iterator

'Set Up
Set findFlightPage = Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury")

'Test
For Iterator = 1 To DataTable.GetSheet(dtLocalSheet).GetRowCount Step 1

	DataTable.SetCurrentRow(Iterator) 
	
	findFlightPage.WebRadioGroup("tripType").Select "roundtrip"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "oneway"
	findFlightPage.WebList("passCount").Select "2"
	findFlightPage.WebList("fromPort").Select fromLocation(findFlightPage.WebList("fromPort"))
	findFlightPage.WebList("fromMonth").Select Day(leavingDate(DataTable("leavingDate", dtLocalSheet)))
	findFlightPage.WebList("fromDay").Select Month(leavingDate(DataTable("leavingDate", dtLocalSheet)))
	findFlightPage.WebList("toPort").Select toLocation(findFlightPage.WebList("toPort"))
	findFlightPage.WebList("toMonth").Select Month(returnDate(DataTable("returningDate", dtLocalSheet)))
	findFlightPage.WebList("toDay").Select Day(returnDate(DataTable("returningDate", dtLocalSheet)))
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Coach"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Business"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "First"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines"
	findFlightPage.Image("findFlights").Click
	
	Browser("Select a Flight: Mercury").Back

next
