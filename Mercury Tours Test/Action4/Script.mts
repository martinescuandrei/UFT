Dim leavingDateVariable
leavingDateVariable = "3/5/2017"

Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "roundtrip"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "oneway"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("passCount").Select "2"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromPort").Select "Frankfurt"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromMonth").Select Day(leavingDate(leavingDateVariable))
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("fromDay").Select Month(leavingDate(leavingDateVariable))
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toPort").Select "London"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toMonth").Select "June"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("toDay").Select "12"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Coach"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Business"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "First"
'Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines"
Browser("Find a Flight: Mercury").Page("Find a Flight: Mercury").Image("findFlights").Click

