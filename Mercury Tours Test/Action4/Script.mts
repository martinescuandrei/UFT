Dim leavingDateValue, returnDateValue
leavingDateValue = "3/5/2017"
returnDateValue = "3/6/2017"


Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "roundtrip"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "oneway"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("passCount").Select "2"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromPort").Select "Frankfurt"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromMonth").Select Day(leavingDate(leavingDateValue))
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromDay").Select Month(leavingDate(leavingDateValue))
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toPort").Select "London"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toMonth").Select Month(returnDate(returnDateValue))
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toDay").Select Day(returnDate(returnDateValue))
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Coach"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Business"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "First"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").Image("findFlights").Click

