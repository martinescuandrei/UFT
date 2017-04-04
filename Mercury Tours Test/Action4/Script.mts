For Iterator = 1 To DataTable.GetSheet(dtLocalSheet).GetRowCount Step 1

	DataTable.SetCurrentRow(Iterator) 
	
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "roundtrip"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "oneway"
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("passCount").Select "2"
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromPort").Select "Frankfurt"
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromMonth").Select Day(leavingDate(DataTable("leavingDate", dtLocalSheet)))
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromDay").Select Month(leavingDate(DataTable("leavingDate", dtLocalSheet)))
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toPort").Select "London"
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toMonth").Select Month(returnDate(DataTable("returningDate", dtLocalSheet)))
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toDay").Select Day(returnDate(DataTable("returningDate", dtLocalSheet)))
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Coach"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Business"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "First"
	'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines"
	Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").Image("findFlights").Click
	
	Browser("Select a Flight: Mercury").Back

next
