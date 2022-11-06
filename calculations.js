let airports = [
    {
      "IATA": "ABQ",
      "AIRPORT": "Albuquerque International",
      "CITY": "Albuquerque",
      "STATE": "NM",
      "COUNTRY": "USA",
      "LATITUDE": 35.04022222,
      "LONGITUDE": -106.6091944
    },
    {
      "IATA": "ANC",
      "AIRPORT": "Ted Stevens Anchorage International",
      "CITY": "Anchorage",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 61.17432028,
      "LONGITUDE": -149.9961856
    },
    {
      "IATA": "ATL",
      "AIRPORT": "William B Hartsfield-Atlanta Intl",
      "CITY": "Atlanta",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 33.64044444,
      "LONGITUDE": -84.42694444
    },
    {
      "IATA": "AUS",
      "AIRPORT": "Austin-Bergstrom International",
      "CITY": "Austin",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 30.19453278,
      "LONGITUDE": -97.66987194
    },
    {
      "IATA": "BDL",
      "AIRPORT": "Bradley International",
      "CITY": "Windsor Locks",
      "STATE": "CT",
      "COUNTRY": "USA",
      "LATITUDE": 41.93887417,
      "LONGITUDE": -72.68322833
    },
    {
      "IATA": "BHM",
      "AIRPORT": "Birmingham International",
      "CITY": "Birmingham",
      "STATE": "AL",
      "COUNTRY": "USA",
      "LATITUDE": 33.56294306,
      "LONGITUDE": -86.75354972
    },
    {
      "IATA": "BNA",
      "AIRPORT": "Nashville International",
      "CITY": "Nashville",
      "STATE": "TN",
      "COUNTRY": "USA",
      "LATITUDE": 36.12447667,
      "LONGITUDE": -86.67818222
    },
    {
      "IATA": "BOS",
      "AIRPORT": "Gen Edw L Logan Intl",
      "CITY": "Boston",
      "STATE": "MA",
      "COUNTRY": "USA",
      "LATITUDE": 42.3643475,
      "LONGITUDE": -71.00517917
    },
    {
      "IATA": "BUF",
      "AIRPORT": "Buffalo Niagara Intl",
      "CITY": "Buffalo",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 42.94052472,
      "LONGITUDE": -78.73216667
    },
    {
      "IATA": "BUR",
      "AIRPORT": "Burbank-Glendale-Pasadena",
      "CITY": "Burbank",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 34.20061917,
      "LONGITUDE": -118.3584969
    },
    {
      "IATA": "BWI",
      "AIRPORT": "Baltimore-Washington International",
      "CITY": "Baltimore",
      "STATE": "MD",
      "COUNTRY": "USA",
      "LATITUDE": 39.17540167,
      "LONGITUDE": -76.66819833
    },
    {
      "IATA": "CHS",
      "AIRPORT": "Charleston AFB International",
      "CITY": "Charleston",
      "STATE": "SC",
      "COUNTRY": "USA",
      "LATITUDE": 32.89864639,
      "LONGITUDE": -80.04050583
    },
    {
      "IATA": "CLE",
      "AIRPORT": "Cleveland-Hopkins Intl",
      "CITY": "Cleveland",
      "STATE": "OH",
      "COUNTRY": "USA",
      "LATITUDE": 41.41089417,
      "LONGITUDE": -81.84939667
    },
    {
      "IATA": "CLT",
      "AIRPORT": "Charlotte Douglas International",
      "CITY": "Charlotte",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 35.21401111,
      "LONGITUDE": -80.94312583
    },
    {
      "IATA": "CMH",
      "AIRPORT": "Port Columbus Intl",
      "CITY": "Columbus",
      "STATE": "OH",
      "COUNTRY": "USA",
      "LATITUDE": 39.99798528,
      "LONGITUDE": -82.89188278
    },
    {
      "IATA": "CVG",
      "AIRPORT": "Cincinnati Northern Kentucky Intl",
      "CITY": "Covington",
      "STATE": "KY",
      "COUNTRY": "USA",
      "LATITUDE": 39.04614278,
      "LONGITUDE": -84.6621725
    },
    {
      "IATA": "DAL",
      "AIRPORT": "Dallas Love ",
      "CITY": "Dallas",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 32.84711389,
      "LONGITUDE": -96.85177222
    },
    {
      "IATA": "DCA",
      "AIRPORT": "Ronald Reagan Washington National",
      "CITY": "Arlington",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 38.85208333,
      "LONGITUDE": -77.03772222
    },
    {
      "IATA": "DEN",
      "AIRPORT": "Denver Intl",
      "CITY": "Denver",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 39.85840806,
      "LONGITUDE": -104.6670019
    },
    {
      "IATA": "DFW",
      "AIRPORT": "Dallas-Fort Worth International",
      "CITY": "Dallas-Fort Worth",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 32.89595056,
      "LONGITUDE": -97.0372
    },
    {
      "IATA": "DTW",
      "AIRPORT": "Detroit Metropolitan-Wayne County",
      "CITY": "Detroit",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 42.21205889,
      "LONGITUDE": -83.34883583
    },
    {
      "IATA": "ELP",
      "AIRPORT": "El Paso International",
      "CITY": "El Paso",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 31.80666667,
      "LONGITUDE": -106.3778056
    },
    {
      "IATA": "EWR",
      "AIRPORT": "Newark Intl",
      "CITY": "Newark",
      "STATE": "NJ",
      "COUNTRY": "USA",
      "LATITUDE": 40.69249722,
      "LONGITUDE": -74.16866056
    },
    {
      "IATA": "FLL",
      "AIRPORT": "Fort Lauderdale-Hollywood Int'l",
      "CITY": "Ft. Lauderdale",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 26.07258333,
      "LONGITUDE": -80.15275
    },
    {
      "IATA": "HNL",
      "AIRPORT": "Honolulu International",
      "CITY": "Honolulu",
      "STATE": "HI",
      "COUNTRY": "USA",
      "LATITUDE": 21.31869111,
      "LONGITUDE": -157.9224072
    },
    {
      "IATA": "HOU",
      "AIRPORT": "William P X",
      "CITY": "Houston",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 29.64541861,
      "LONGITUDE": -95.27888889
    },
    {
      "IATA": "IAD",
      "AIRPORT": "Washington Dulles International",
      "CITY": "Chantilly",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 38.94453194,
      "LONGITUDE": -77.45580972
    },
    {
      "IATA": "IAH",
      "AIRPORT": "George Bush Intercontinental",
      "CITY": "Houston",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 29.98047222,
      "LONGITUDE": -95.33972222
    },
    {
      "IATA": "IND",
      "AIRPORT": "Indianapolis International",
      "CITY": "Indianapolis",
      "STATE": "IN",
      "COUNTRY": "USA",
      "LATITUDE": 39.71732917,
      "LONGITUDE": -86.29438417
    },
    {
      "IATA": "JAX",
      "AIRPORT": "Jacksonville International",
      "CITY": "Jacksonville",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 30.49405556,
      "LONGITUDE": -81.68786111
    },
    {
      "IATA": "JFK",
      "AIRPORT": "John F Kennedy Intl",
      "CITY": "New York",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 40.63975111,
      "LONGITUDE": -73.77892556
    },
    {
      "IATA": "LAS",
      "AIRPORT": "McCarran International",
      "CITY": "Las Vegas",
      "STATE": "NV",
      "COUNTRY": "USA",
      "LATITUDE": 36.08036111,
      "LONGITUDE": -115.1523333
    },
    {
      "IATA": "LAX",
      "AIRPORT": "Los Angeles International",
      "CITY": "Los Angeles",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 33.94253611,
      "LONGITUDE": -118.4080744
    },
    {
      "IATA": "LGA",
      "AIRPORT": "LaGuardia",
      "CITY": "New York",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 40.77724306,
      "LONGITUDE": -73.87260917
    },
    {
      "IATA": "LIT",
      "AIRPORT": "Adams ",
      "CITY": "Little Rock",
      "STATE": "AR",
      "COUNTRY": "USA",
      "LATITUDE": 34.72939611,
      "LONGITUDE": -92.22424556
    },
    {
      "IATA": "MCI",
      "AIRPORT": "Kansas City International",
      "CITY": "Kansas City",
      "STATE": "MO",
      "COUNTRY": "USA",
      "LATITUDE": 39.29760528,
      "LONGITUDE": -94.71390556
    },
    {
      "IATA": "MCO",
      "AIRPORT": "Orlando International",
      "CITY": "Orlando",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 28.42888889,
      "LONGITUDE": -81.31602778
    },
    {
      "IATA": "MDW",
      "AIRPORT": "Chicago Midway",
      "CITY": "Chicago",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 41.7859825,
      "LONGITUDE": -87.75242444
    },
    {
      "IATA": "MEM",
      "AIRPORT": "Memphis International",
      "CITY": "Memphis",
      "STATE": "TN",
      "COUNTRY": "USA",
      "LATITUDE": 35.04241667,
      "LONGITUDE": -89.97666667
    },
    {
      "IATA": "MIA",
      "AIRPORT": "Miami International",
      "CITY": "Miami",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 25.79325,
      "LONGITUDE": -80.29055556
    },
    {
      "IATA": "MKE",
      "AIRPORT": "General Mitchell International",
      "CITY": "Milwaukee",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 42.94722222,
      "LONGITUDE": -87.89658333
    },
    {
      "IATA": "MSP",
      "AIRPORT": "Minneapolis-St Paul Intl",
      "CITY": "Minneapolis",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 44.88054694,
      "LONGITUDE": -93.2169225
    },
    {
      "IATA": "MSY",
      "AIRPORT": "New Orleans International ",
      "CITY": "New Orleans",
      "STATE": "LA",
      "COUNTRY": "USA",
      "LATITUDE": 29.99338889,
      "LONGITUDE": -90.25802778
    },
    {
      "IATA": "OAK",
      "AIRPORT": "Metropolitan Oakland International",
      "CITY": "Oakland",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 37.72129083,
      "LONGITUDE": -122.2207167
    },
    {
      "IATA": "OGG",
      "AIRPORT": "Kahului",
      "CITY": "Kahului",
      "STATE": "HI",
      "COUNTRY": "USA",
      "LATITUDE": 20.89864972,
      "LONGITUDE": -156.4304578
    },
    {
      "IATA": "OKC",
      "AIRPORT": "Will Rogers World",
      "CITY": "Oklahoma City",
      "STATE": "OK",
      "COUNTRY": "USA",
      "LATITUDE": 35.39308833,
      "LONGITUDE": -97.60073389
    },
    {
      "IATA": "OMA",
      "AIRPORT": "Eppley Airfield",
      "CITY": "Omaha",
      "STATE": "NE",
      "COUNTRY": "USA",
      "LATITUDE": 41.30251861,
      "LONGITUDE": -95.89417306
    },
    {
      "IATA": "ONT",
      "AIRPORT": "Ontario International",
      "CITY": "Ontario",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 34.056,
      "LONGITUDE": -117.6011944
    },
    {
      "IATA": "ORD",
      "AIRPORT": "Chicago O'Hare International",
      "CITY": "Chicago",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 41.979595,
      "LONGITUDE": -87.90446417
    },
    {
      "IATA": "ORF",
      "AIRPORT": "Norfolk International",
      "CITY": "Norfolk",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 36.89461111,
      "LONGITUDE": -76.20122222
    },
    {
      "IATA": "PBI",
      "AIRPORT": "Palm Beach International",
      "CITY": "West Palm Beach",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 26.68316194,
      "LONGITUDE": -80.09559417
    },
    {
      "IATA": "PDX",
      "AIRPORT": "Portland Intl",
      "CITY": "Portland",
      "STATE": "OR",
      "COUNTRY": "USA",
      "LATITUDE": 45.58872222,
      "LONGITUDE": -122.5975
    },
    {
      "IATA": "PHL",
      "AIRPORT": "Philadelphia Intl",
      "CITY": "Philadelphia",
      "STATE": "PA",
      "COUNTRY": "USA",
      "LATITUDE": 39.87195278,
      "LONGITUDE": -75.24114083
    },
    {
      "IATA": "PHX",
      "AIRPORT": "Phoenix Sky Harbor International",
      "CITY": "Phoenix",
      "STATE": "AZ",
      "COUNTRY": "USA",
      "LATITUDE": 33.43416667,
      "LONGITUDE": -112.0080556
    },
    {
      "IATA": "PIT",
      "AIRPORT": "Pittsburgh International",
      "CITY": "Pittsburgh",
      "STATE": "PA",
      "COUNTRY": "USA",
      "LATITUDE": 40.49146583,
      "LONGITUDE": -80.23287083
    },
    {
      "IATA": "PVD",
      "AIRPORT": "Theodore F Green State",
      "CITY": "Providence",
      "STATE": "RI",
      "COUNTRY": "USA",
      "LATITUDE": 41.72399917,
      "LONGITUDE": -71.42822111
    },
    {
      "IATA": "RDU",
      "AIRPORT": "Raleigh-Durham International",
      "CITY": "Raleigh",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 35.87763889,
      "LONGITUDE": -78.78747222
    },
    {
      "IATA": "RIC",
      "AIRPORT": "Richmond International",
      "CITY": "Richmond",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 37.50516667,
      "LONGITUDE": -77.31966667
    },
    {
      "IATA": "RNO",
      "AIRPORT": "Reno Tahoe International",
      "CITY": "Reno",
      "STATE": "NV",
      "COUNTRY": "USA",
      "LATITUDE": 39.49857611,
      "LONGITUDE": -119.7680647
    },
    {
      "IATA": "RSW",
      "AIRPORT": "Southwest Florida International",
      "CITY": "Ft. Myers",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 26.53616667,
      "LONGITUDE": -81.75516667
    },
    {
      "IATA": "SAN",
      "AIRPORT": "San Diego International-Lindbergh ",
      "CITY": "San Diego",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 32.73355611,
      "LONGITUDE": -117.1896567
    },
    {
      "IATA": "SAT",
      "AIRPORT": "San Antonio International",
      "CITY": "San Antonio",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 29.53369444,
      "LONGITUDE": -98.46977778
    },
    {
      "IATA": "SDF",
      "AIRPORT": "Louisville International-Standiford ",
      "CITY": "Louisville",
      "STATE": "KY",
      "COUNTRY": "USA",
      "LATITUDE": 38.17438889,
      "LONGITUDE": -85.736
    },
    {
      "IATA": "SEA",
      "AIRPORT": "Seattle-Tacoma Intl",
      "CITY": "Seattle",
      "STATE": "WA",
      "COUNTRY": "USA",
      "LATITUDE": 47.44898194,
      "LONGITUDE": -122.3093131
    },
    {
      "IATA": "SFO",
      "AIRPORT": "San Francisco International",
      "CITY": "San Francisco",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 37.61900194,
      "LONGITUDE": -122.3748433
    },
    {
      "IATA": "SJC",
      "AIRPORT": "San Jose International",
      "CITY": "San Jose",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 37.36186194,
      "LONGITUDE": -121.9290089
    },
    {
      "IATA": "SJU",
      "AIRPORT": "Luis Munoz Marin International",
      "CITY": "San Juan",
      "STATE": "PR",
      "COUNTRY": "USA",
      "LATITUDE": 18.43941667,
      "LONGITUDE": -66.00183333
    },
    {
      "IATA": "SLC",
      "AIRPORT": "Salt Lake City Intl",
      "CITY": "Salt Lake City",
      "STATE": "UT",
      "COUNTRY": "USA",
      "LATITUDE": 40.78838778,
      "LONGITUDE": -111.9777731
    },
    {
      "IATA": "SMF",
      "AIRPORT": "Sacramento International",
      "CITY": "Sacramento",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 38.69542167,
      "LONGITUDE": -121.5907669
    },
    {
      "IATA": "SNA",
      "AIRPORT": "John Wayne  Orange Co",
      "CITY": "Santa Ana",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 33.67565861,
      "LONGITUDE": -117.8682225
    },
    {
      "IATA": "STL",
      "AIRPORT": "Lambert-St Louis International",
      "CITY": "St Louis",
      "STATE": "MO",
      "COUNTRY": "USA",
      "LATITUDE": 38.74768694,
      "LONGITUDE": -90.35998972
    },
    {
      "IATA": "TPA",
      "AIRPORT": "Tampa International ",
      "CITY": "Tampa",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 27.97547222,
      "LONGITUDE": -82.53325
    },
    {
      "IATA": "TUL",
      "AIRPORT": "Tulsa International",
      "CITY": "Tulsa",
      "STATE": "OK",
      "COUNTRY": "USA",
      "LATITUDE": 36.19837222,
      "LONGITUDE": -95.88824167
    },
    {
      "IATA": "TUS",
      "AIRPORT": "Tucson International",
      "CITY": "Tucson",
      "STATE": "AZ",
      "COUNTRY": "USA",
      "LATITUDE": 32.11608333,
      "LONGITUDE": -110.9410278
    },
    {
      "IATA": "ABE",
      "AIRPORT": "Lehigh Valley International",
      "CITY": "Allentown",
      "STATE": "PA",
      "COUNTRY": "USA",
      "LATITUDE": 40.65236278,
      "LONGITUDE": -75.44040167
    },
    {
      "IATA": "ABI",
      "AIRPORT": "Abilene Regional",
      "CITY": "Abilene",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 32.41132,
      "LONGITUDE": -99.68189722
    },
    {
      "IATA": "ABR",
      "AIRPORT": "Aberdeen Regional",
      "CITY": "Aberdeen",
      "STATE": "SD",
      "COUNTRY": "USA",
      "LATITUDE": 45.44905556,
      "LONGITUDE": -98.42183333
    },
    {
      "IATA": "ABY",
      "AIRPORT": "Southwest Georgia Regional",
      "CITY": "Albany",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 31.535515,
      "LONGITUDE": -84.19447333
    },
    {
      "IATA": "ACK",
      "AIRPORT": "Nantucket Memorial",
      "CITY": "Nantucket",
      "STATE": "MA",
      "COUNTRY": "USA",
      "LATITUDE": 41.25305194,
      "LONGITUDE": -70.06018139
    },
    {
      "IATA": "ACT",
      "AIRPORT": "Waco Regional",
      "CITY": "Waco",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 31.61128833,
      "LONGITUDE": -97.23051917
    },
    {
      "IATA": "ACV",
      "AIRPORT": "Arcata",
      "CITY": "Arcata Eureka",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 40.97811528,
      "LONGITUDE": -124.1086189
    },
    {
      "IATA": "ACY",
      "AIRPORT": "Atlantic City International",
      "CITY": "Atlantic City",
      "STATE": "NJ",
      "COUNTRY": "USA",
      "LATITUDE": 39.45758333,
      "LONGITUDE": -74.57716667
    },
    {
      "IATA": "ADK",
      "AIRPORT": "Adak",
      "CITY": "Adak",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 51.87796389,
      "LONGITUDE": -176.6460306
    },
    {
      "IATA": "ADQ",
      "AIRPORT": "Kodiak ",
      "CITY": "Kodiak",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 57.74996778,
      "LONGITUDE": -152.4938553
    },
    {
      "IATA": "AEX",
      "AIRPORT": "Alexandria International",
      "CITY": "Alexandria",
      "STATE": "LA",
      "COUNTRY": "USA",
      "LATITUDE": 31.32737167,
      "LONGITUDE": -92.54855611
    },
    {
      "IATA": "AGS",
      "AIRPORT": "Bush ",
      "CITY": "Augusta",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 33.369955,
      "LONGITUDE": -81.96449611
    },
    {
      "IATA": "AKN",
      "AIRPORT": "King Salmon",
      "CITY": "King Salmon",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 58.67680167,
      "LONGITUDE": -156.6492175
    },
    {
      "IATA": "ALB",
      "AIRPORT": "Albany Cty",
      "CITY": "Albany",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 42.74811944,
      "LONGITUDE": -73.80297861
    },
    {
      "IATA": "ALO",
      "AIRPORT": "Waterloo Municipal",
      "CITY": "Waterloo",
      "STATE": "IA",
      "COUNTRY": "USA",
      "LATITUDE": 42.55708139,
      "LONGITUDE": -92.40034361
    },
    {
      "IATA": "AMA",
      "AIRPORT": "Amarillo International",
      "CITY": "Amarillo",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 35.2193725,
      "LONGITUDE": -101.7059272
    },
    {
      "IATA": "APN",
      "AIRPORT": "Alpena County Regional ",
      "CITY": "Alpena",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 45.0780675,
      "LONGITUDE": -83.56028583
    },
    {
      "IATA": "ART",
      "AIRPORT": "Watertown Intl",
      "CITY": "Watertown",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 43.99192222,
      "LONGITUDE": -76.02173861
    },
    {
      "IATA": "ASE",
      "AIRPORT": "Aspen-Pitkin Co Sardy ",
      "CITY": "Aspen",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 39.22316,
      "LONGITUDE": -106.868845
    },
    {
      "IATA": "ATW",
      "AIRPORT": "Outagamie County Regional",
      "CITY": "Appleton",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 44.25740806,
      "LONGITUDE": -88.51947556
    },
    {
      "IATA": "AVL",
      "AIRPORT": "Asheville Regional",
      "CITY": "Asheville",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 35.43619444,
      "LONGITUDE": -82.54180556
    },
    {
      "IATA": "AVP",
      "AIRPORT": "Wilkes-Barre Scranton Intl",
      "CITY": "Wilkes-Barre Scranton",
      "STATE": "PA",
      "COUNTRY": "USA",
      "LATITUDE": 41.33814944,
      "LONGITUDE": -75.7242675
    },
    {
      "IATA": "AZO",
      "AIRPORT": "Kalamazoo County",
      "CITY": "Kalamazoo",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 42.234875,
      "LONGITUDE": -85.5520575
    },
    {
      "IATA": "BET",
      "AIRPORT": "Bethel",
      "CITY": "Bethel",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 60.77977639,
      "LONGITUDE": -161.8379975
    },
    {
      "IATA": "BFL",
      "AIRPORT": "Meadows ",
      "CITY": "Bakersfield",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 35.43359806,
      "LONGITUDE": -119.0567681
    },
    {
      "IATA": "BGM",
      "AIRPORT": "Binghamton Regional",
      "CITY": "Binghamton",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 42.20848278,
      "LONGITUDE": -75.97961361
    },
    {
      "IATA": "BGR",
      "AIRPORT": "Bangor International",
      "CITY": "Bangor",
      "STATE": "ME",
      "COUNTRY": "USA",
      "LATITUDE": 44.80744444,
      "LONGITUDE": -68.82813889
    },
    {
      "IATA": "BIL",
      "AIRPORT": "Billings Logan Intl",
      "CITY": "Billings",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 45.8076625,
      "LONGITUDE": -108.5428611
    },
    {
      "IATA": "BIS",
      "AIRPORT": "Bismarck Municipal",
      "CITY": "Bismarck",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 46.77411111,
      "LONGITUDE": -100.7467222
    },
    {
      "IATA": "BJI",
      "AIRPORT": "Bemidji-Beltrami County",
      "CITY": "Bemidji",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 47.50942417,
      "LONGITUDE": -94.93372333
    },
    {
      "IATA": "BLI",
      "AIRPORT": "Bellingham Intl",
      "CITY": "Bellingham",
      "STATE": "WA",
      "COUNTRY": "USA",
      "LATITUDE": 48.79275,
      "LONGITUDE": -122.5375278
    },
    {
      "IATA": "BMI",
      "AIRPORT": "Central Illinois Regional",
      "CITY": "Bloomington",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 40.47798556,
      "LONGITUDE": -88.91595278
    },
    {
      "IATA": "BOI",
      "AIRPORT": "Boise Air Terminal",
      "CITY": "Boise",
      "STATE": "ID",
      "COUNTRY": "USA",
      "LATITUDE": 43.56444444,
      "LONGITUDE": -116.2227778
    },
    {
      "IATA": "BPT",
      "AIRPORT": "Southeast Texas Regional",
      "CITY": "Beaumont Port Arthur",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 29.95083333,
      "LONGITUDE": -94.02069444
    },
    {
      "IATA": "BQK",
      "AIRPORT": "Glynco Jetport",
      "CITY": "Brunswick",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 31.25902778,
      "LONGITUDE": -81.46630556
    },
    {
      "IATA": "BQN",
      "AIRPORT": "Rafael Hernandez",
      "CITY": "Aguadilla",
      "STATE": "PR",
      "COUNTRY": "USA",
      "LATITUDE": 18.49486111,
      "LONGITUDE": -67.12944444
    },
    {
      "IATA": "BRD",
      "AIRPORT": "Brainerd-Crow Wing County Regional",
      "CITY": "Brainerd",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 46.39785806,
      "LONGITUDE": -94.1372275
    },
    {
      "IATA": "BRO",
      "AIRPORT": "Brownsville S.Padre Island International",
      "CITY": "Brownsville",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 25.90683333,
      "LONGITUDE": -97.42586111
    },
    {
      "IATA": "BRW",
      "AIRPORT": "Wiley Post Will Rogers Memorial",
      "CITY": "Barrow",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 71.2854475,
      "LONGITUDE": -156.7660019
    },
    {
      "IATA": "BTM",
      "AIRPORT": "Bert Mooney",
      "CITY": "Butte",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 45.95479528,
      "LONGITUDE": -112.49746
    },
    {
      "IATA": "BTR",
      "AIRPORT": "Baton Rouge Metropolitan",
      "CITY": "Baton Rouge",
      "STATE": "LA",
      "COUNTRY": "USA",
      "LATITUDE": 30.53316083,
      "LONGITUDE": -91.14963444
    },
    {
      "IATA": "BTV",
      "AIRPORT": "Burlington International",
      "CITY": "Burlington",
      "STATE": "VT",
      "COUNTRY": "USA",
      "LATITUDE": 44.47300361,
      "LONGITUDE": -73.1503125
    },
    {
      "IATA": "BZN",
      "AIRPORT": "Gallatin ",
      "CITY": "Bozeman",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 45.77690139,
      "LONGITUDE": -111.1530072
    },
    {
      "IATA": "CAE",
      "AIRPORT": "Columbia Metropolitan",
      "CITY": "Columbia",
      "STATE": "SC",
      "COUNTRY": "USA",
      "LATITUDE": 33.93884,
      "LONGITUDE": -81.11953944
    },
    {
      "IATA": "CAK",
      "AIRPORT": "Akron-Canton Regional",
      "CITY": "Akron",
      "STATE": "OH",
      "COUNTRY": "USA",
      "LATITUDE": 40.91631194,
      "LONGITUDE": -81.44246556
    },
    {
      "IATA": "CDC",
      "AIRPORT": "Cedar City Muni",
      "CITY": "Cedar City",
      "STATE": "UT",
      "COUNTRY": "USA",
      "LATITUDE": 37.70097028,
      "LONGITUDE": -113.098575
    },
    {
      "IATA": "CDV",
      "AIRPORT": "Merle K (Mudhole) Smith",
      "CITY": "Cordova",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 60.49183389,
      "LONGITUDE": -145.4776503
    },
    {
      "IATA": "CEC",
      "AIRPORT": "Jack McNamara ",
      "CITY": "Crescent City",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 41.78015722,
      "LONGITUDE": -124.2365333
    },
    {
      "IATA": "CHA",
      "AIRPORT": "Lovell ",
      "CITY": "Chattanooga",
      "STATE": "TN",
      "COUNTRY": "USA",
      "LATITUDE": 35.03526833,
      "LONGITUDE": -85.20378778
    },
    {
      "IATA": "CHO",
      "AIRPORT": "Charlottesville-Albermarle",
      "CITY": "Charlottesville",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 38.13863889,
      "LONGITUDE": -78.45286111
    },
    {
      "IATA": "CIC",
      "AIRPORT": "Chico Municipal",
      "CITY": "Chico",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 39.79538278,
      "LONGITUDE": -121.8584231
    },
    {
      "IATA": "CID",
      "AIRPORT": "Eastern Iowa ",
      "CITY": "Cedar Rapids",
      "STATE": "IA",
      "COUNTRY": "USA",
      "LATITUDE": 41.88458833,
      "LONGITUDE": -91.71087222
    },
    {
      "IATA": "CIU",
      "AIRPORT": "Chippewa County International",
      "CITY": "Sault Ste. Marie",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 46.25075194,
      "LONGITUDE": -84.47238528
    },
    {
      "IATA": "CLD",
      "AIRPORT": "MC Clellan-Palomar Airport",
      "CITY": "NA",
      "STATE": "NA",
      "COUNTRY": "USA",
      "LATITUDE": 33.127231,
      "LONGITUDE": -117.278727
    },
    {
      "IATA": "CLL",
      "AIRPORT": "Easterwood ",
      "CITY": "College Station",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 30.58858944,
      "LONGITUDE": -96.36382417
    },
    {
      "IATA": "CMI",
      "AIRPORT": "University of Illinois-Willard",
      "CITY": "Champaign Urbana",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 40.03925,
      "LONGITUDE": -88.27805556
    },
    {
      "IATA": "CMX",
      "AIRPORT": "Houghton County Memorial",
      "CITY": "Hancock",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 47.16841722,
      "LONGITUDE": -88.48906083
    },
    {
      "IATA": "CNY",
      "AIRPORT": "Canyonlands ",
      "CITY": "Moab",
      "STATE": "UT",
      "COUNTRY": "USA",
      "LATITUDE": 38.75495611,
      "LONGITUDE": -109.7548439
    },
    {
      "IATA": "COD",
      "AIRPORT": "Yellowstone Regional",
      "CITY": "Cody",
      "STATE": "WY",
      "COUNTRY": "USA",
      "LATITUDE": 44.52019417,
      "LONGITUDE": -109.0237961
    },
    {
      "IATA": "COS",
      "AIRPORT": "City of Colorado Springs Muni",
      "CITY": "Colorado Springs",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 38.80580556,
      "LONGITUDE": -104.70025
    },
    {
      "IATA": "COU",
      "AIRPORT": "Columbia Regional",
      "CITY": "Columbia",
      "STATE": "MO",
      "COUNTRY": "USA",
      "LATITUDE": 38.81809306,
      "LONGITUDE": -92.21962917
    },
    {
      "IATA": "CPR",
      "AIRPORT": "Natrona County Intl",
      "CITY": "Casper",
      "STATE": "WY",
      "COUNTRY": "USA",
      "LATITUDE": 42.90835556,
      "LONGITUDE": -106.4644661
    },
    {
      "IATA": "CRP",
      "AIRPORT": "Corpus Christi International",
      "CITY": "Corpus Christi",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 27.77036083,
      "LONGITUDE": -97.50121528
    },
    {
      "IATA": "CRW",
      "AIRPORT": "Yeager",
      "CITY": "Charleston",
      "STATE": "WV",
      "COUNTRY": "USA",
      "LATITUDE": 38.37315083,
      "LONGITUDE": -81.59318972
    },
    {
      "IATA": "CSG",
      "AIRPORT": "Columbus Metropolitan",
      "CITY": "Columbus",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 32.51633333,
      "LONGITUDE": -84.93886111
    },
    {
      "IATA": "CWA",
      "AIRPORT": "Central Wisconsin",
      "CITY": "Mosinee",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 44.77761917,
      "LONGITUDE": -89.66677944
    },
    {
      "IATA": "CYS",
      "AIRPORT": "Cheyenne",
      "CITY": "Cheyenne",
      "STATE": "WY",
      "COUNTRY": "USA",
      "LATITUDE": 41.1557225,
      "LONGITUDE": -104.8118381
    },
    {
      "IATA": "DAB",
      "AIRPORT": "Daytona Beach International",
      "CITY": "Daytona Beach",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 29.17991667,
      "LONGITUDE": -81.05805556
    },
    {
      "IATA": "DAY",
      "AIRPORT": "James M Cox Dayton Intl",
      "CITY": "Dayton",
      "STATE": "OH",
      "COUNTRY": "USA",
      "LATITUDE": 39.90237583,
      "LONGITUDE": -84.219375
    },
    {
      "IATA": "DBQ",
      "AIRPORT": "Dubuque Municipal",
      "CITY": "Dubuque",
      "STATE": "IA",
      "COUNTRY": "USA",
      "LATITUDE": 42.40295944,
      "LONGITUDE": -90.70916722
    },
    {
      "IATA": "DHN",
      "AIRPORT": "Dothan ",
      "CITY": "Dothan",
      "STATE": "AL",
      "COUNTRY": "USA",
      "LATITUDE": 31.32133917,
      "LONGITUDE": -85.44962889
    },
    {
      "IATA": "DIK",
      "AIRPORT": "Dickinson Municipal",
      "CITY": "Dickinson",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 46.79738889,
      "LONGITUDE": -102.8019528
    },
    {
      "IATA": "DLG",
      "AIRPORT": "Dillingham",
      "CITY": "Dillingham",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 59.0454125,
      "LONGITUDE": -158.5033389
    },
    {
      "IATA": "DLH",
      "AIRPORT": "Duluth International",
      "CITY": "Duluth",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 46.84209028,
      "LONGITUDE": -92.19364861
    },
    {
      "IATA": "DRO",
      "AIRPORT": "Durango-La Plata County",
      "CITY": "Durango",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 37.15151667,
      "LONGITUDE": -107.7537692
    },
    {
      "IATA": "DRT",
      "AIRPORT": "Del Rio International",
      "CITY": "Del Rio",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 29.37181222,
      "LONGITUDE": -100.9232339
    },
    {
      "IATA": "DSM",
      "AIRPORT": "Des Moines International",
      "CITY": "Des Moines",
      "STATE": "IA",
      "COUNTRY": "USA",
      "LATITUDE": 41.53493306,
      "LONGITUDE": -93.66068222
    },
    {
      "IATA": "DVL",
      "AIRPORT": "Devils Lake Municipal-Knoke ",
      "CITY": "Devils Lake",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 48.11424528,
      "LONGITUDE": -98.90877833
    },
    {
      "IATA": "EAU",
      "AIRPORT": "Chippewa Valley Regional",
      "CITY": "Eau Claire",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 44.86525722,
      "LONGITUDE": -91.48507194
    },
    {
      "IATA": "EGE",
      "AIRPORT": "Eagle County Regional",
      "CITY": "Eagle",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 39.64256778,
      "LONGITUDE": -106.9176953
    },
    {
      "IATA": "EKO",
      "AIRPORT": "Elko Regional",
      "CITY": "Elko",
      "STATE": "NV",
      "COUNTRY": "USA",
      "LATITUDE": 40.82492611,
      "LONGITUDE": -115.7916964
    },
    {
      "IATA": "ELM",
      "AIRPORT": "Elmira Corning Regional",
      "CITY": "Elmira",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 42.15991361,
      "LONGITUDE": -76.89144333
    },
    {
      "IATA": "ERI",
      "AIRPORT": "Erie Intl",
      "CITY": "Erie",
      "STATE": "PA",
      "COUNTRY": "USA",
      "LATITUDE": 42.08202139,
      "LONGITUDE": -80.17621556
    },
    {
      "IATA": "ESC",
      "AIRPORT": "Delta County",
      "CITY": "Escanaba",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 45.72266972,
      "LONGITUDE": -87.09373139
    },
    {
      "IATA": "EUG",
      "AIRPORT": "Mahlon Sweet ",
      "CITY": "Eugene",
      "STATE": "OR",
      "COUNTRY": "USA",
      "LATITUDE": 44.12326,
      "LONGITUDE": -123.2186856
    },
    {
      "IATA": "EVV",
      "AIRPORT": "Evansville Regional",
      "CITY": "Evansville",
      "STATE": "IN",
      "COUNTRY": "USA",
      "LATITUDE": 38.03799139,
      "LONGITUDE": -87.53062667
    },
    {
      "IATA": "EWN",
      "AIRPORT": "Craven County Regional",
      "CITY": "New Bern",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 35.07297222,
      "LONGITUDE": -77.04294444
    },
    {
      "IATA": "EYW",
      "AIRPORT": "Key West International",
      "CITY": "Key West",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 24.55611111,
      "LONGITUDE": -81.75955556
    },
    {
      "IATA": "FAI",
      "AIRPORT": "Fairbanks International",
      "CITY": "Fairbanks",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 64.8136775,
      "LONGITUDE": -147.8596694
    },
    {
      "IATA": "FAR",
      "AIRPORT": "Hector International",
      "CITY": "Fargo",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 46.91934889,
      "LONGITUDE": -96.81498889
    },
    {
      "IATA": "FAT",
      "AIRPORT": "Fresno Yosemite International",
      "CITY": "Fresno",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 36.77619444,
      "LONGITUDE": -119.7181389
    },
    {
      "IATA": "FAY",
      "AIRPORT": "Fayetteville Municipal",
      "CITY": "Fayetteville",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 34.99147222,
      "LONGITUDE": -78.88
    },
    {
      "IATA": "FCA",
      "AIRPORT": "Glacier Park Intl",
      "CITY": "Kalispell",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 48.31140472,
      "LONGITUDE": -114.2550694
    },
    {
      "IATA": "FLG",
      "AIRPORT": "Flagstaff Pulliam",
      "CITY": "Flagstaff",
      "STATE": "AZ",
      "COUNTRY": "USA",
      "LATITUDE": 35.13845472,
      "LONGITUDE": -111.6712183
    },
    {
      "IATA": "FLO",
      "AIRPORT": "Florence Regional",
      "CITY": "Florence",
      "STATE": "SC",
      "COUNTRY": "USA",
      "LATITUDE": 34.18536111,
      "LONGITUDE": -79.72388889
    },
    {
      "IATA": "FNT",
      "AIRPORT": "Bishop",
      "CITY": "Flint",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 42.96550333,
      "LONGITUDE": -83.74345639
    },
    {
      "IATA": "FOE",
      "AIRPORT": "Forbes ",
      "CITY": "Topeka",
      "STATE": "KS",
      "COUNTRY": "USA",
      "LATITUDE": 38.95095194,
      "LONGITUDE": -95.66361444
    },
    {
      "IATA": "FSD",
      "AIRPORT": "Joe Foss ",
      "CITY": "Sioux Falls",
      "STATE": "SD",
      "COUNTRY": "USA",
      "LATITUDE": 43.58135111,
      "LONGITUDE": -96.74170028
    },
    {
      "IATA": "FSM",
      "AIRPORT": "Fort Smith Regional",
      "CITY": "Fort Smith",
      "STATE": "AR",
      "COUNTRY": "USA",
      "LATITUDE": 35.33659028,
      "LONGITUDE": -94.36744111
    },
    {
      "IATA": "FWA",
      "AIRPORT": "Fort Wayne International",
      "CITY": "Fort Wayne",
      "STATE": "IN",
      "COUNTRY": "USA",
      "LATITUDE": 40.97846583,
      "LONGITUDE": -85.19514639
    },
    {
      "IATA": "GCC",
      "AIRPORT": "Gillette-Campbell County",
      "CITY": "Gillette",
      "STATE": "WY",
      "COUNTRY": "USA",
      "LATITUDE": 44.34889806,
      "LONGITUDE": -105.5393614
    },
    {
      "IATA": "GCK",
      "AIRPORT": "Garden City Regional",
      "CITY": "Garden City",
      "STATE": "KS",
      "COUNTRY": "USA",
      "LATITUDE": 37.92751556,
      "LONGITUDE": -100.7244147
    },
    {
      "IATA": "GEG",
      "AIRPORT": "Spokane Intl",
      "CITY": "Spokane",
      "STATE": "WA",
      "COUNTRY": "USA",
      "LATITUDE": 47.61985556,
      "LONGITUDE": -117.5338425
    },
    {
      "IATA": "GFK",
      "AIRPORT": "Grand Forks International",
      "CITY": "Grand Forks",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 47.949255,
      "LONGITUDE": -97.17611111
    },
    {
      "IATA": "GGG",
      "AIRPORT": "Gregg County",
      "CITY": "Longview",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 32.38486111,
      "LONGITUDE": -94.71171
    },
    {
      "IATA": "GJT",
      "AIRPORT": "Walker ",
      "CITY": "Grand Junction",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 39.1224125,
      "LONGITUDE": -108.5267347
    },
    {
      "IATA": "GNV",
      "AIRPORT": "Gainesville Regional",
      "CITY": "Gainesville",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 29.69005556,
      "LONGITUDE": -82.27177778
    },
    {
      "IATA": "GPT",
      "AIRPORT": "Gulfport-Biloxi Regional",
      "CITY": "Gulfport-Biloxi",
      "STATE": "MS",
      "COUNTRY": "USA",
      "LATITUDE": 30.40728028,
      "LONGITUDE": -89.07009278
    },
    {
      "IATA": "GRB",
      "AIRPORT": "Austin Straubel International",
      "CITY": "Green Bay",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 44.48507333,
      "LONGITUDE": -88.12959
    },
    {
      "IATA": "GRI",
      "AIRPORT": "Central Nebraska Regional ",
      "CITY": "Grand Island",
      "STATE": "NE",
      "COUNTRY": "USA",
      "LATITUDE": 40.96747222,
      "LONGITUDE": -98.30861111
    },
    {
      "IATA": "GRK",
      "AIRPORT": "Robert Gray AAF",
      "CITY": "Killeen",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 31.06489778,
      "LONGITUDE": -97.82779778
    },
    {
      "IATA": "GRR",
      "AIRPORT": "Kent County International",
      "CITY": "Grand Rapids",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 42.88081972,
      "LONGITUDE": -85.52276778
    },
    {
      "IATA": "GSO",
      "AIRPORT": "Piedmont Triad International",
      "CITY": "Greensboro",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 36.09774694,
      "LONGITUDE": -79.9372975
    },
    {
      "IATA": "GSP",
      "AIRPORT": "Greenville-Spartanburg",
      "CITY": "Greer",
      "STATE": "SC",
      "COUNTRY": "USA",
      "LATITUDE": 34.89566722,
      "LONGITUDE": -82.21885833
    },
    {
      "IATA": "GST",
      "AIRPORT": "Gustavus",
      "CITY": "Gustavus",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 58.42438139,
      "LONGITUDE": -135.7073814
    },
    {
      "IATA": "GTF",
      "AIRPORT": "Great Falls Intl",
      "CITY": "Great Falls",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 47.48200194,
      "LONGITUDE": -111.3706853
    },
    {
      "IATA": "GTR",
      "AIRPORT": "Golden Triangle Regional",
      "CITY": "Columbus-Starkville-West Point",
      "STATE": "MS",
      "COUNTRY": "USA",
      "LATITUDE": 33.45033444,
      "LONGITUDE": -88.59136861
    },
    {
      "IATA": "GUC",
      "AIRPORT": "Gunnison County",
      "CITY": "Gunnison",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 38.53396333,
      "LONGITUDE": -106.9331817
    },
    {
      "IATA": "GUM",
      "AIRPORT": "Guam International",
      "CITY": "Agana",
      "STATE": "GU",
      "COUNTRY": "USA",
      "LATITUDE": 13.48345,
      "LONGITUDE": -144.7959825
    },
    {
      "IATA": "HDN",
      "AIRPORT": "Yampa Valley",
      "CITY": "Hayden",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 40.48118028,
      "LONGITUDE": -107.2176597
    },
    {
      "IATA": "HIB",
      "AIRPORT": "Chisholm-Hibbing",
      "CITY": "Hibbing",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 47.38659917,
      "LONGITUDE": -92.83899333
    },
    {
      "IATA": "HLN",
      "AIRPORT": "Helena Regional",
      "CITY": "Helena",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 46.60681806,
      "LONGITUDE": -111.9827503
    },
    {
      "IATA": "HOB",
      "AIRPORT": "Lea County Regional",
      "CITY": "Hobbs",
      "STATE": "NM",
      "COUNTRY": "USA",
      "LATITUDE": 32.68752778,
      "LONGITUDE": -103.2170278
    },
    {
      "IATA": "HPN",
      "AIRPORT": "Westchester Cty",
      "CITY": "White Plains",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 41.06695778,
      "LONGITUDE": -73.70757444
    },
    {
      "IATA": "HRL",
      "AIRPORT": "Valley International",
      "CITY": "Harlingen",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 26.22850611,
      "LONGITUDE": -97.65439389
    },
    {
      "IATA": "HSV",
      "AIRPORT": "Huntsville International ",
      "CITY": "Huntsville",
      "STATE": "AL",
      "COUNTRY": "USA",
      "LATITUDE": 34.6404475,
      "LONGITUDE": -86.77310944
    },
    {
      "IATA": "HTS",
      "AIRPORT": "Tri-State Walker-Long ",
      "CITY": "Huntington",
      "STATE": "WV",
      "COUNTRY": "USA",
      "LATITUDE": 38.36666667,
      "LONGITUDE": -82.55802778
    },
    {
      "IATA": "HYA",
      "AIRPORT": "Barnstable Mun Boardman Polando ",
      "CITY": "Hyannis",
      "STATE": "MA",
      "COUNTRY": "USA",
      "LATITUDE": 41.66933639,
      "LONGITUDE": -70.28035583
    },
    {
      "IATA": "HYS",
      "AIRPORT": "Hays Municipal",
      "CITY": "Hays",
      "STATE": "KS",
      "COUNTRY": "USA",
      "LATITUDE": 38.84494167,
      "LONGITUDE": -99.27403361
    },
    {
      "IATA": "ICT",
      "AIRPORT": "Wichita Mid-Continent",
      "CITY": "Wichita",
      "STATE": "KS",
      "COUNTRY": "USA",
      "LATITUDE": 37.64995889,
      "LONGITUDE": -97.43304583
    },
    {
      "IATA": "IDA",
      "AIRPORT": "Idaho Falls Regional",
      "CITY": "Idaho Falls",
      "STATE": "ID",
      "COUNTRY": "USA",
      "LATITUDE": 43.51455556,
      "LONGITUDE": -112.0701667
    },
    {
      "IATA": "ILG",
      "AIRPORT": "New Castle County ",
      "CITY": "Wilmington",
      "STATE": "DE",
      "COUNTRY": "USA",
      "LATITUDE": 39.67872222,
      "LONGITUDE": -75.60652778
    },
    {
      "IATA": "ILM",
      "AIRPORT": "Wilmington International",
      "CITY": "Wilmington",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 34.27061111,
      "LONGITUDE": -77.90255556
    },
    {
      "IATA": "IMT",
      "AIRPORT": "Ford",
      "CITY": "Iron Mountain Kingsford",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 45.81835417,
      "LONGITUDE": -88.1145425
    },
    {
      "IATA": "INL",
      "AIRPORT": "Falls International",
      "CITY": "International Falls",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 48.56618722,
      "LONGITUDE": -93.40306667
    },
    {
      "IATA": "IPL",
      "AIRPORT": "Imperial County",
      "CITY": "Imperial",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 32.83422028,
      "LONGITUDE": -115.5787456
    },
    {
      "IATA": "ISN",
      "AIRPORT": "Sloulin Field International",
      "CITY": "Williston",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 48.17793861,
      "LONGITUDE": -103.6423467
    },
    {
      "IATA": "ISP",
      "AIRPORT": "Long Island - MacArthur",
      "CITY": "Islip",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 40.7952425,
      "LONGITUDE": -73.10021194
    },
    {
      "IATA": "ITH",
      "AIRPORT": "Tompkins Cty ",
      "CITY": "Ithaca",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 42.49102778,
      "LONGITUDE": -76.45844444
    },
    {
      "IATA": "ITO",
      "AIRPORT": "Hilo International",
      "CITY": "Hilo",
      "STATE": "HI",
      "COUNTRY": "USA",
      "LATITUDE": 19.72026306,
      "LONGITUDE": -155.0484703
    },
    {
      "IATA": "IYK",
      "AIRPORT": "Inyokern",
      "CITY": "Inyokern",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 35.65884306,
      "LONGITUDE": -117.8295122
    },
    {
      "IATA": "JAC",
      "AIRPORT": "Jackson Hole",
      "CITY": "Jackson",
      "STATE": "WY",
      "COUNTRY": "USA",
      "LATITUDE": 43.60732417,
      "LONGITUDE": -110.7377389
    },
    {
      "IATA": "JAN",
      "AIRPORT": "Jackson International",
      "CITY": "Jackson",
      "STATE": "MS",
      "COUNTRY": "USA",
      "LATITUDE": 32.31116667,
      "LONGITUDE": -90.07588889
    },
    {
      "IATA": "JLN",
      "AIRPORT": "Joplin Regional",
      "CITY": "Joplin",
      "STATE": "MO",
      "COUNTRY": "USA",
      "LATITUDE": 37.15181361,
      "LONGITUDE": -94.49826833
    },
    {
      "IATA": "JMS",
      "AIRPORT": "Jamestown Municipal",
      "CITY": "Jamestown",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 46.92971944,
      "LONGITUDE": -98.67819528
    },
    {
      "IATA": "JNU",
      "AIRPORT": "Juneau International",
      "CITY": "Juneau",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 58.35496194,
      "LONGITUDE": -134.5762764
    },
    {
      "IATA": "KOA",
      "AIRPORT": "Kona International At Keahole",
      "CITY": "Kailua Kona",
      "STATE": "HI",
      "COUNTRY": "USA",
      "LATITUDE": 19.73876583,
      "LONGITUDE": -156.0456314
    },
    {
      "IATA": "KTN",
      "AIRPORT": "Ketchikan International",
      "CITY": "Ketchikan",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 55.35556861,
      "LONGITUDE": -131.71374
    },
    {
      "IATA": "LAN",
      "AIRPORT": "Capital City",
      "CITY": "Lansing",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 42.7787,
      "LONGITUDE": -84.58735806
    },
    {
      "IATA": "LAR",
      "AIRPORT": "Laramie Regional",
      "CITY": "Laramie",
      "STATE": "WY",
      "COUNTRY": "USA",
      "LATITUDE": 41.31205,
      "LONGITUDE": -105.6749864
    },
    {
      "IATA": "LAW",
      "AIRPORT": "Lawton-Ft Sill Regional",
      "CITY": "Lawton",
      "STATE": "OK",
      "COUNTRY": "USA",
      "LATITUDE": 34.56771444,
      "LONGITUDE": -98.41663667
    },
    {
      "IATA": "LBB",
      "AIRPORT": "Lubbock International",
      "CITY": "Lubbock",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 33.66363889,
      "LONGITUDE": -101.8227778
    },
    {
      "IATA": "LCH",
      "AIRPORT": "Lake Charles Regional",
      "CITY": "Lake Charles",
      "STATE": "LA",
      "COUNTRY": "USA",
      "LATITUDE": 30.1260975,
      "LONGITUDE": -93.22340361
    },
    {
      "IATA": "LEX",
      "AIRPORT": "Blue Grass ",
      "CITY": "Lexington",
      "STATE": "KY",
      "COUNTRY": "USA",
      "LATITUDE": 38.03697222,
      "LONGITUDE": -84.60538889
    },
    {
      "IATA": "LFT",
      "AIRPORT": "Lafayette Regional",
      "CITY": "Lafayette",
      "STATE": "LA",
      "COUNTRY": "USA",
      "LATITUDE": 30.20527972,
      "LONGITUDE": -91.987655
    },
    {
      "IATA": "LGB",
      "AIRPORT": "Long Beach (Daugherty )",
      "CITY": "Long Beach",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 33.81772222,
      "LONGITUDE": -118.1516111
    },
    {
      "IATA": "LIH",
      "AIRPORT": "Lihue",
      "CITY": "Lihue",
      "STATE": "HI",
      "COUNTRY": "USA",
      "LATITUDE": 21.97598306,
      "LONGITUDE": -159.3389581
    },
    {
      "IATA": "LMT",
      "AIRPORT": "Klamath Falls International",
      "CITY": "Klamath Falls",
      "STATE": "OR",
      "COUNTRY": "USA",
      "LATITUDE": 42.15614361,
      "LONGITUDE": -121.7332081
    },
    {
      "IATA": "LNK",
      "AIRPORT": "Lincoln Municipal",
      "CITY": "Lincoln",
      "STATE": "NE",
      "COUNTRY": "USA",
      "LATITUDE": 40.85097222,
      "LONGITUDE": -96.75925
    },
    {
      "IATA": "LRD",
      "AIRPORT": "Laredo International",
      "CITY": "Laredo",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 27.54373861,
      "LONGITUDE": -99.46154361
    },
    {
      "IATA": "LSE",
      "AIRPORT": "La Crosse Municipal",
      "CITY": "La Crosse",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 43.87937972,
      "LONGITUDE": -91.25653778
    },
    {
      "IATA": "LWB",
      "AIRPORT": "Greenbrier Valley",
      "CITY": "Lewisburg",
      "STATE": "WV",
      "COUNTRY": "USA",
      "LATITUDE": 37.85830556,
      "LONGITUDE": -80.39947222
    },
    {
      "IATA": "LWS",
      "AIRPORT": "Lewiston-Nez Perce County",
      "CITY": "Lewiston",
      "STATE": "ID",
      "COUNTRY": "USA",
      "LATITUDE": 46.37449806,
      "LONGITUDE": -117.0153944
    },
    {
      "IATA": "LYH",
      "AIRPORT": "Lynchburg Municipal-Preston Glenn ",
      "CITY": "Lynchburg",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 37.32668528,
      "LONGITUDE": -79.20043056
    },
    {
      "IATA": "MAF",
      "AIRPORT": "Midland International",
      "CITY": "Midland",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 31.94252778,
      "LONGITUDE": -102.2019139
    },
    {
      "IATA": "MBS",
      "AIRPORT": "Mbs International",
      "CITY": "Saginaw",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 43.53291472,
      "LONGITUDE": -84.07964722
    },
    {
      "IATA": "MCN",
      "AIRPORT": "Middle Georgia Regional",
      "CITY": "Macon",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 32.69284944,
      "LONGITUDE": -83.64921083
    },
    {
      "IATA": "MDT",
      "AIRPORT": "Harrisburg Intl",
      "CITY": "Harrisburg",
      "STATE": "PA",
      "COUNTRY": "USA",
      "LATITUDE": 40.19349528,
      "LONGITUDE": -76.76340361
    },
    {
      "IATA": "MEI",
      "AIRPORT": "Key ",
      "CITY": "Meridian",
      "STATE": "MS",
      "COUNTRY": "USA",
      "LATITUDE": 32.33313333,
      "LONGITUDE": -88.75120556
    },
    {
      "IATA": "MFE",
      "AIRPORT": "McAllen Miller International",
      "CITY": "McAllen",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 26.17583333,
      "LONGITUDE": -98.23861111
    },
    {
      "IATA": "MFR",
      "AIRPORT": "Rogue Valley International",
      "CITY": "Medford",
      "STATE": "OR",
      "COUNTRY": "USA",
      "LATITUDE": 42.37422778,
      "LONGITUDE": -122.8734978
    },
    {
      "IATA": "MGM",
      "AIRPORT": "Montgomery Regional Apt",
      "CITY": "Montgomery",
      "STATE": "AL",
      "COUNTRY": "USA",
      "LATITUDE": 32.30064417,
      "LONGITUDE": -86.39397611
    },
    {
      "IATA": "MHK",
      "AIRPORT": "Manhattan Regional",
      "CITY": "Manhattan",
      "STATE": "KS",
      "COUNTRY": "USA",
      "LATITUDE": 39.14096722,
      "LONGITUDE": -96.67083278
    },
    {
      "IATA": "MHT",
      "AIRPORT": "Manchester",
      "CITY": "Manchester",
      "STATE": "NH",
      "COUNTRY": "USA",
      "LATITUDE": 42.93451639,
      "LONGITUDE": -71.43705583
    },
    {
      "IATA": "MKG",
      "AIRPORT": "Muskegon County",
      "CITY": "Muskegon",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 43.16948806,
      "LONGITUDE": -86.23822306
    },
    {
      "IATA": "MLB",
      "AIRPORT": "Melbourne International ",
      "CITY": "Melbourne",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 28.10275,
      "LONGITUDE": -80.64580556
    },
    {
      "IATA": "MLI",
      "AIRPORT": "Quad City",
      "CITY": "Moline",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 41.44852639,
      "LONGITUDE": -90.50753917
    },
    {
      "IATA": "MLU",
      "AIRPORT": "Monroe Regional",
      "CITY": "Monroe",
      "STATE": "LA",
      "COUNTRY": "USA",
      "LATITUDE": 32.51086556,
      "LONGITUDE": -92.03768778
    },
    {
      "IATA": "MMH",
      "AIRPORT": "Mammoth Yosemite",
      "CITY": "Mammoth Lakes",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 37.62404861,
      "LONGITUDE": -118.8377722
    },
    {
      "IATA": "MOB",
      "AIRPORT": "Mobile Regional",
      "CITY": "Mobile",
      "STATE": "AL",
      "COUNTRY": "USA",
      "LATITUDE": 30.69141667,
      "LONGITUDE": -88.24283333
    },
    {
      "IATA": "MOD",
      "AIRPORT": "Modesto City-County-Harry Sham ",
      "CITY": "Modesto",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 37.62581722,
      "LONGITUDE": -120.9544214
    },
    {
      "IATA": "MOT",
      "AIRPORT": "Minot International",
      "CITY": "Minot",
      "STATE": "ND",
      "COUNTRY": "USA",
      "LATITUDE": 48.25937778,
      "LONGITUDE": -101.2803339
    },
    {
      "IATA": "MQT",
      "AIRPORT": "Marquette County Airport",
      "CITY": "NA",
      "STATE": "NA",
      "COUNTRY": "USA",
      "LATITUDE": 46.353639,
      "LONGITUDE": -87.395361
    },
    {
      "IATA": "MRY",
      "AIRPORT": "Monterey Peninsula",
      "CITY": "Monterey",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 36.5869825,
      "LONGITUDE": -121.8429478
    },
    {
      "IATA": "MSN",
      "AIRPORT": "Dane County Regional",
      "CITY": "Madison",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 43.13985778,
      "LONGITUDE": -89.33751361
    },
    {
      "IATA": "MSO",
      "AIRPORT": "Missoula International",
      "CITY": "Missoula",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 46.91630556,
      "LONGITUDE": -114.0905556
    },
    {
      "IATA": "MTJ",
      "AIRPORT": "Montrose Regional",
      "CITY": "Montrose",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 38.50886722,
      "LONGITUDE": -107.8938333
    },
    {
      "IATA": "MVY",
      "AIRPORT": "Marthas Vineyard",
      "CITY": "Marthas Vineyard",
      "STATE": "MA",
      "COUNTRY": "USA",
      "LATITUDE": 41.39302583,
      "LONGITUDE": -70.6143325
    },
    {
      "IATA": "MWH",
      "AIRPORT": "Grant County",
      "CITY": "Moses Lake",
      "STATE": "WA",
      "COUNTRY": "USA",
      "LATITUDE": 47.20770806,
      "LONGITUDE": -119.3201897
    },
    {
      "IATA": "MYR",
      "AIRPORT": "Myrtle Beach International",
      "CITY": "Myrtle Beach",
      "STATE": "SC",
      "COUNTRY": "USA",
      "LATITUDE": 33.67975,
      "LONGITUDE": -78.92833333
    },
    {
      "IATA": "OAJ",
      "AIRPORT": "Albert J Ellis",
      "CITY": "Jacksonville",
      "STATE": "NC",
      "COUNTRY": "USA",
      "LATITUDE": 34.82916444,
      "LONGITUDE": -77.61213778
    },
    {
      "IATA": "OME",
      "AIRPORT": "Nome",
      "CITY": "Nome",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 64.51220222,
      "LONGITUDE": -165.4452458
    },
    {
      "IATA": "ORH",
      "AIRPORT": "Worcester Regional",
      "CITY": "Worcester",
      "STATE": "MA",
      "COUNTRY": "USA",
      "LATITUDE": 42.26733944,
      "LONGITUDE": -71.87570944
    },
    {
      "IATA": "OTH",
      "AIRPORT": "North Bend Muni",
      "CITY": "North Bend",
      "STATE": "OR",
      "COUNTRY": "USA",
      "LATITUDE": 43.41713889,
      "LONGITUDE": -124.2460278
    },
    {
      "IATA": "OTZ",
      "AIRPORT": "Ralph Wien Memorial",
      "CITY": "Kotzebue",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 66.88467694,
      "LONGITUDE": -162.5985497
    },
    {
      "IATA": "OXR",
      "AIRPORT": "Oxnard",
      "CITY": "Oxnard",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 34.20080083,
      "LONGITUDE": -119.2072164
    },
    {
      "IATA": "PAH",
      "AIRPORT": "Barkley Regional",
      "CITY": "Paducah",
      "STATE": "KY",
      "COUNTRY": "USA",
      "LATITUDE": 37.06083333,
      "LONGITUDE": -88.77375
    },
    {
      "IATA": "PFN",
      "AIRPORT": "Panama City-Bay County International",
      "CITY": "Panama City",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 30.21208333,
      "LONGITUDE": -85.68280556
    },
    {
      "IATA": "PHF",
      "AIRPORT": "Newport News Williamsburg International",
      "CITY": "Newport News",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 37.13189556,
      "LONGITUDE": -76.4929875
    },
    {
      "IATA": "PIA",
      "AIRPORT": "Greater Peoria Regional",
      "CITY": "Peoria",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 40.66424333,
      "LONGITUDE": -89.69330556
    },
    {
      "IATA": "PIB",
      "AIRPORT": "Hattiesburg-Laurel Regional",
      "CITY": "Hattiesburg-Laurel",
      "STATE": "MS",
      "COUNTRY": "USA",
      "LATITUDE": 31.46714944,
      "LONGITUDE": -89.33705778
    },
    {
      "IATA": "PIE",
      "AIRPORT": "St. Petersburg-Clearwater International",
      "CITY": "St. Petersburg",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 27.91076333,
      "LONGITUDE": -82.68743944
    },
    {
      "IATA": "PIH",
      "AIRPORT": "Pocatello Regional",
      "CITY": "Pocatello",
      "STATE": "ID",
      "COUNTRY": "USA",
      "LATITUDE": 42.91130556,
      "LONGITUDE": -112.5958611
    },
    {
      "IATA": "PIR",
      "AIRPORT": "Pierre Regional",
      "CITY": "Pierre",
      "STATE": "SD",
      "COUNTRY": "USA",
      "LATITUDE": 44.38267694,
      "LONGITUDE": -100.285965
    },
    {
      "IATA": "PLN",
      "AIRPORT": "Pellston Regional  of Emmet County",
      "CITY": "Pellston",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 45.5709275,
      "LONGITUDE": -84.796715
    },
    {
      "IATA": "PNS",
      "AIRPORT": "Pensacola Regional",
      "CITY": "Pensacola",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 30.47330556,
      "LONGITUDE": -87.18744444
    },
    {
      "IATA": "PPG",
      "AIRPORT": "Pago Pago International",
      "CITY": "Pago Pago",
      "STATE": "AS",
      "COUNTRY": "USA",
      "LATITUDE": 14.33102278,
      "LONGITUDE": -170.7105258
    },
    {
      "IATA": "PSC",
      "AIRPORT": "Tri-Cities",
      "CITY": "Pasco",
      "STATE": "WA",
      "COUNTRY": "USA",
      "LATITUDE": 46.26468028,
      "LONGITUDE": -119.1190292
    },
    {
      "IATA": "PSE",
      "AIRPORT": "Mercedita",
      "CITY": "Ponce",
      "STATE": "PR",
      "COUNTRY": "USA",
      "LATITUDE": 18.00830278,
      "LONGITUDE": -66.56301194
    },
    {
      "IATA": "PSG",
      "AIRPORT": "James C. Johnson Petersburg",
      "CITY": "Petersburg",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 56.80165194,
      "LONGITUDE": -132.9452781
    },
    {
      "IATA": "PSP",
      "AIRPORT": "Palm Springs International",
      "CITY": "Palm Springs",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 33.82921556,
      "LONGITUDE": -116.5062531
    },
    {
      "IATA": "PUB",
      "AIRPORT": "Pueblo Memorial",
      "CITY": "Pueblo",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 38.28908722,
      "LONGITUDE": -104.4965722
    },
    {
      "IATA": "PWM",
      "AIRPORT": "Portland International Jetport",
      "CITY": "Portland",
      "STATE": "ME",
      "COUNTRY": "USA",
      "LATITUDE": 43.64616667,
      "LONGITUDE": -70.30875
    },
    {
      "IATA": "RAP",
      "AIRPORT": "Rapid City Regional",
      "CITY": "Rapid City",
      "STATE": "SD",
      "COUNTRY": "USA",
      "LATITUDE": 44.04532139,
      "LONGITUDE": -103.0573708
    },
    {
      "IATA": "RDD",
      "AIRPORT": "Redding Municipal",
      "CITY": "Redding",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 40.50898361,
      "LONGITUDE": -122.2934019
    },
    {
      "IATA": "RDM",
      "AIRPORT": "Roberts ",
      "CITY": "Redmond",
      "STATE": "OR",
      "COUNTRY": "USA",
      "LATITUDE": 44.25406722,
      "LONGITUDE": -121.1499633
    },
    {
      "IATA": "RFD",
      "AIRPORT": "Greater Rockford",
      "CITY": "Rockford",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 42.19536389,
      "LONGITUDE": -89.09721111
    },
    {
      "IATA": "RHI",
      "AIRPORT": "Rhinelander-Oneida County",
      "CITY": "Rhinelander",
      "STATE": "WI",
      "COUNTRY": "USA",
      "LATITUDE": 45.63119306,
      "LONGITUDE": -89.46745361
    },
    {
      "IATA": "RKS",
      "AIRPORT": "Rock Springs-Sweetwater County",
      "CITY": "Rock Springs",
      "STATE": "WY",
      "COUNTRY": "USA",
      "LATITUDE": 41.5942175,
      "LONGITUDE": -109.0651928
    },
    {
      "IATA": "ROA",
      "AIRPORT": "Roanoke Regional  Woodrum ",
      "CITY": "Roanoke",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 37.32546833,
      "LONGITUDE": -79.97542833
    },
    {
      "IATA": "ROC",
      "AIRPORT": "Greater Rochester Int'l",
      "CITY": "Rochester",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 43.11886611,
      "LONGITUDE": -77.67238389
    },
    {
      "IATA": "ROW",
      "AIRPORT": "Roswell Industrial Air Center",
      "CITY": "Roswell",
      "STATE": "NM",
      "COUNTRY": "USA",
      "LATITUDE": 33.30155556,
      "LONGITUDE": -104.5305556
    },
    {
      "IATA": "RST",
      "AIRPORT": "Rochester International",
      "CITY": "Rochester",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 43.90882639,
      "LONGITUDE": -92.49798722
    },
    {
      "IATA": "SAF",
      "AIRPORT": "Santa Fe Municipal",
      "CITY": "Santa Fe",
      "STATE": "NM",
      "COUNTRY": "USA",
      "LATITUDE": 35.61677778,
      "LONGITUDE": -106.0881389
    },
    {
      "IATA": "SAV",
      "AIRPORT": "Savannah International",
      "CITY": "Savannah",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 32.12758333,
      "LONGITUDE": -81.20213889
    },
    {
      "IATA": "SBA",
      "AIRPORT": "Santa Barbara Municipal",
      "CITY": "Santa Barbara",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 34.42621194,
      "LONGITUDE": -119.8403733
    },
    {
      "IATA": "SBN",
      "AIRPORT": "South Bend Regional",
      "CITY": "South Bend",
      "STATE": "IN",
      "COUNTRY": "USA",
      "LATITUDE": 41.70895361,
      "LONGITUDE": -86.31847417
    },
    {
      "IATA": "SBP",
      "AIRPORT": "San Luis Obispo Co-McChesney ",
      "CITY": "San Luis Obispo",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 35.23705806,
      "LONGITUDE": -120.6423931
    },
    {
      "IATA": "SCC",
      "AIRPORT": "Deadhorse",
      "CITY": "Deadhorse",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 70.19475583,
      "LONGITUDE": -148.4651608
    },
    {
      "IATA": "SCE",
      "AIRPORT": "University Park",
      "CITY": "NA",
      "STATE": "NA",
      "COUNTRY": "USA",
      "LATITUDE": 40.851206,
      "LONGITUDE": -77.846302
    },
    {
      "IATA": "SGF",
      "AIRPORT": "Springfield-Branson Regional",
      "CITY": "Springfield",
      "STATE": "MO",
      "COUNTRY": "USA",
      "LATITUDE": 37.24432611,
      "LONGITUDE": -93.38685806
    },
    {
      "IATA": "SGU",
      "AIRPORT": "St George Muni",
      "CITY": "St George",
      "STATE": "UT",
      "COUNTRY": "USA",
      "LATITUDE": 37.09058333,
      "LONGITUDE": -113.5930556
    },
    {
      "IATA": "SHD",
      "AIRPORT": "Shenandoah Valley Regional",
      "CITY": "Staunton Harrisonburg",
      "STATE": "VA",
      "COUNTRY": "USA",
      "LATITUDE": 38.26384333,
      "LONGITUDE": -78.89643806
    },
    {
      "IATA": "SHV",
      "AIRPORT": "Shreveport Regional",
      "CITY": "Shreveport",
      "STATE": "LA",
      "COUNTRY": "USA",
      "LATITUDE": 32.4466275,
      "LONGITUDE": -93.82559833
    },
    {
      "IATA": "SIT",
      "AIRPORT": "Sitka",
      "CITY": "Sitka",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 57.04713806,
      "LONGITUDE": -135.3615983
    },
    {
      "IATA": "SJT",
      "AIRPORT": "San Angelo Regional  Mathis ",
      "CITY": "San Angelo",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 31.35775,
      "LONGITUDE": -100.4963056
    },
    {
      "IATA": "SMX",
      "AIRPORT": "Santa Maria Pub Capt G Allan Hancock ",
      "CITY": "Santa Maria",
      "STATE": "CA",
      "COUNTRY": "USA",
      "LATITUDE": 34.89924833,
      "LONGITUDE": -120.4575825
    },
    {
      "IATA": "SPI",
      "AIRPORT": "Capital",
      "CITY": "Springfield",
      "STATE": "IL",
      "COUNTRY": "USA",
      "LATITUDE": 39.84395194,
      "LONGITUDE": -89.67761861
    },
    {
      "IATA": "SPN",
      "AIRPORT": "Tinian International Airport",
      "CITY": "NA",
      "STATE": "NA",
      "COUNTRY": "N Mariana Islands",
      "LATITUDE": 14.996111,
      "LONGITUDE": 145.621384
    },
    {
      "IATA": "SPS",
      "AIRPORT": "Sheppard AFB Wichita Falls Municipal",
      "CITY": "Wichita Falls",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 33.98879611,
      "LONGITUDE": -98.49189333
    },
    {
      "IATA": "SRQ",
      "AIRPORT": "Sarasota Bradenton International",
      "CITY": "Sarasota",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 27.39533333,
      "LONGITUDE": -82.55411111
    },
    {
      "IATA": "STC",
      "AIRPORT": "St Cloud Regional",
      "CITY": "St Cloud",
      "STATE": "MN",
      "COUNTRY": "USA",
      "LATITUDE": 45.54532417,
      "LONGITUDE": -94.05833667
    },
    {
      "IATA": "STT",
      "AIRPORT": "Cyril E. King",
      "CITY": "Charlotte Amalie",
      "STATE": "VI",
      "COUNTRY": "USA",
      "LATITUDE": 18.33730556,
      "LONGITUDE": -64.97336111
    },
    {
      "IATA": "STX",
      "AIRPORT": "Henry E. Rohlsen ",
      "CITY": "Christiansted",
      "STATE": "VI",
      "COUNTRY": "USA",
      "LATITUDE": 17.70188889,
      "LONGITUDE": -64.79855556
    },
    {
      "IATA": "SUN",
      "AIRPORT": "Friedman Memorial",
      "CITY": "Hailey",
      "STATE": "ID",
      "COUNTRY": "USA",
      "LATITUDE": 43.50484139,
      "LONGITUDE": -114.2965903
    },
    {
      "IATA": "SUX",
      "AIRPORT": "Sioux Gateway ",
      "CITY": "Sioux City",
      "STATE": "IA",
      "COUNTRY": "USA",
      "LATITUDE": 42.40260333,
      "LONGITUDE": -96.38436694
    },
    {
      "IATA": "SWF",
      "AIRPORT": "Stewart",
      "CITY": "Newburgh",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 41.50409361,
      "LONGITUDE": -74.10483833
    },
    {
      "IATA": "SYR",
      "AIRPORT": "Syracuse-Hancock Intl",
      "CITY": "Syracuse",
      "STATE": "NY",
      "COUNTRY": "USA",
      "LATITUDE": 43.11118694,
      "LONGITUDE": -76.10631056
    },
    {
      "IATA": "TEX",
      "AIRPORT": "Telluride Regional",
      "CITY": "Telluride",
      "STATE": "CO",
      "COUNTRY": "USA",
      "LATITUDE": 37.95375861,
      "LONGITUDE": -107.90848
    },
    {
      "IATA": "TLH",
      "AIRPORT": "Tallahassee Regional",
      "CITY": "Tallahassee",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 30.39652778,
      "LONGITUDE": -84.35033333
    },
    {
      "IATA": "TOL",
      "AIRPORT": "Toledo Express",
      "CITY": "Toledo",
      "STATE": "OH",
      "COUNTRY": "USA",
      "LATITUDE": 41.58680556,
      "LONGITUDE": -83.80783333
    },
    {
      "IATA": "TRI",
      "AIRPORT": "Tri-Cities Regional",
      "CITY": "Bristol",
      "STATE": "TN",
      "COUNTRY": "USA",
      "LATITUDE": 36.47521417,
      "LONGITUDE": -82.40742056
    },
    {
      "IATA": "TTN",
      "AIRPORT": "Trenton-Mercer County ",
      "CITY": "Trenton",
      "STATE": "NJ",
      "COUNTRY": "USA",
      "LATITUDE": 40.27669111,
      "LONGITUDE": -74.81346833
    },
    {
      "IATA": "TUP",
      "AIRPORT": "Tupelo Municipal ",
      "CITY": "Tupelo",
      "STATE": "MS",
      "COUNTRY": "USA",
      "LATITUDE": 34.26810833,
      "LONGITUDE": -88.769895
    },
    {
      "IATA": "TVC",
      "AIRPORT": "Cherry Capital",
      "CITY": "Traverse City",
      "STATE": "MI",
      "COUNTRY": "USA",
      "LATITUDE": 44.74144472,
      "LONGITUDE": -85.582235
    },
    {
      "IATA": "TWF",
      "AIRPORT": "Joslin Field - Magic Valley",
      "CITY": "Twin Falls",
      "STATE": "ID",
      "COUNTRY": "USA",
      "LATITUDE": 42.48180389,
      "LONGITUDE": -114.4877356
    },
    {
      "IATA": "TXK",
      "AIRPORT": "Texarkana Regional-Webb ",
      "CITY": "Texarkana",
      "STATE": "AR",
      "COUNTRY": "USA",
      "LATITUDE": 33.45370806,
      "LONGITUDE": -93.99102
    },
    {
      "IATA": "TYR",
      "AIRPORT": "Tyler Pounds ",
      "CITY": "Tyler",
      "STATE": "TX",
      "COUNTRY": "USA",
      "LATITUDE": 32.35413889,
      "LONGITUDE": -95.40238611
    },
    {
      "IATA": "TYS",
      "AIRPORT": "McGhee-Tyson",
      "CITY": "Knoxville",
      "STATE": "TN",
      "COUNTRY": "USA",
      "LATITUDE": 35.81248722,
      "LONGITUDE": -83.99285583
    },
    {
      "IATA": "VEL",
      "AIRPORT": "Vernal",
      "CITY": "Vernal",
      "STATE": "UT",
      "COUNTRY": "USA",
      "LATITUDE": 40.44090167,
      "LONGITUDE": -109.5099203
    },
    {
      "IATA": "VLD",
      "AIRPORT": "Valdosta Regional",
      "CITY": "Valdosta",
      "STATE": "GA",
      "COUNTRY": "USA",
      "LATITUDE": 30.7825,
      "LONGITUDE": -83.27672222
    },
    {
      "IATA": "VPS",
      "AIRPORT": "Eglin Air Force Base",
      "CITY": "Valparaiso",
      "STATE": "FL",
      "COUNTRY": "USA",
      "LATITUDE": 30.48325,
      "LONGITUDE": -86.5254
    },
    {
      "IATA": "WRG",
      "AIRPORT": "Wrangell",
      "CITY": "Wrangell",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 56.48432583,
      "LONGITUDE": -132.3698242
    },
    {
      "IATA": "WYS",
      "AIRPORT": "Yellowstone",
      "CITY": "West Yellowstone",
      "STATE": "MT",
      "COUNTRY": "USA",
      "LATITUDE": 44.68839917,
      "LONGITUDE": -111.1176375
    },
    {
      "IATA": "XNA",
      "AIRPORT": "Northwest Arkansas Regional",
      "CITY": "Fayetteville Springdale Rogers",
      "STATE": "AR",
      "COUNTRY": "USA",
      "LATITUDE": 36.28186944,
      "LONGITUDE": -94.30681111
    },
    {
      "IATA": "YAK",
      "AIRPORT": "Yakutat",
      "CITY": "Yakutat",
      "STATE": "AK",
      "COUNTRY": "USA",
      "LATITUDE": 59.50336056,
      "LONGITUDE": -139.6602261
    },
    {
      "IATA": "YUM",
      "AIRPORT": "Yuma MCAS-Yuma International",
      "CITY": "Yuma",
      "STATE": "AZ",
      "COUNTRY": "USA",
      "LATITUDE": 32.65658333,
      "LONGITUDE": -114.6059722
    }
]

let cars = [
    {
       "model": "motorcycle",
       "gpkm": 124.274
     },
     {
       "model": "mini",
       "gpkm": 170.877
     },
     {
       "model": "mid",
       "gpkm": 226.179
     },
     {
       "model": "full",
       "gpkm": 312.550
     },
     {
       "model": "ev",
       "gpkm": 77.711
     }
   ]
   
// GLOBAL VARIABLES
var total = 0;
var last_total = 0;
var driving_annual_emissions = 0;

// Checks if the given latitude and longitude coordinates are valid
// Input: two pairs of latitude and longitude in degrees
// Output: On success, true
// Output: On failure, false
function validateCoordinates(lat1, long1, lat2, long2)
{
    // Lat is between -90 and 90
    if (!(-90 <= lat1 && lat1 <= 90))
    {
        return false;
    }
    if (!(-90 <= lat2 && lat2 <= 90))
    {
        return false;
    }
    // long is between -180 and 180
    if (!(-180 <= long1 && long1 <= 180))
    {
        return false;
    }
    if (!(-180 <= long2 && long2 <= 180))
    {
        return false;
    }

    return true;
}

// Gets the flight distance from two points on earth
// Input: two pairs of latitude and longitude in degrees
// Output: On success, flight distance
// Output: On failure, 0
function getFlightDistance(lat1, long1, lat2, long2) 
{
    distance = 0;
    if (validateCoordinates(lat1, long1, lat2, long2))
    {
        // Haversine Distance formula
        // Returns shortests flight path in kilometers
        radlat1 = Math.PI * lat1/180;
        radlat2 = Math.PI * lat2/180;
        theta = long1-long2;
        radtheta = Math.PI * theta/180;
        distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (distance > 1) {
            distance = 1;
        }
        distance = Math.acos(distance);
        distance = distance * 180/Math.PI;
        distance = distance * 60 * 1.1515 * 1.609344;

        // Corrective routing modifier
        // Accounts for weather, traffic control, etc
        distance = distance * 1.08;
    }

    return distance;
}

// Gets an Airports data from the JSON file based off its IATA code
// Input: IATA Code
// Output: On success, airport data
// Output: On failure, empty
function getAirport(code)
{
    for (i=0 ; i < airports.length ; i++)
    {
        if (airports[i]["IATA"] == code) {
            return airports[i];
        }
    }
    
    return;
}

// Calculate emissions from a given flight
// Input: two airport codes
// Output: on success, CO2 emissions in kg
// Output: on failure, 0
function calculateFlightEmissions(code1, code2, rt_flag = 0)
{
    // Get the airports and check validity
    emissions = 0;
    airport1 = getAirport(code1);
    airport2 = getAirport(code2);
    
    if (!(airport1 && airport2))
    {
        return emissions;
    }
    
    // Calculate the given distance
    distance = getFlightDistance(airport1.LATITUDE, airport1.LONGITUDE, airport2.LATITUDE, airport2.LONGITUDE);

    // Makes a distinction between short and long distance flights as different planes and infrastructure is used
    // Calculate carbon emissions
    if (distance < 2000 && distance > 0) {
        emissions = (.1782 * distance) + 85.95
    } else if (distance > 2000) {
        emissions = (.00000176 * distance * distance) + (.1255 * distance) + 100.5077;
    }

    if(rt_flag) {
        emissions = emissions * 2;
    }
    updateTotal(emissions);
    return [emissions, distance];
}

// Gets an Airports data from the JSON file based off its IATA code
// Input: IATA Code
// Output: On success, airport data
// Output: On failure, empty
function getCar(vehicle)
{
    for (i=0 ; i < cars.length ; i++)
    {
        if (cars[i]["model"] == vehicle) {
            return cars[i];
        }
    }
    
    return;
}

// Calculates the emissions of a car trip
// Input: distance driven, selected vehicle, driving style
// Output: On success, the cars emissions in Kg
// Output: On failure, 0
function calculateCarEmissions(distance, vehicle_choice, drive, rt_flag = 0) 
{
    distance = distance * 1.609344;
    emissions = 0;

    // Get the car and verify
    car = getCar(vehicle_choice);
    if(!car) {
        return emissions;
    }

    // Calculate emissions based off of driving style
    if (drive == "highway") {
        emissions = (car.gpkm * .8 * distance) + (31.689 * distance);
    } else if (drive == "city") {
        emissions = (car.gpkm * 1.2 * distance) + (31.689 * distance);
    } else {
        emissions = (car.gpkm * distance) + (31.689 * distance);
    }
    
    if(rt_flag) {
        emissions = emissions * 2;
    }
    updateTotal(emissions);
    // Calculations are done for grams, this acts as the final conversion
    return emissions/1000;
}

// Calculates the annual emmissions of a car based off a weekly estimate
// Input: weekly estimate, selected vehicle
// Output: On success, the cars emissions in Kg
// Output: On failure, 0
function calculateAnnualCarEmissions(distance, vehicle_choice) 
{
    distance = distance * 1.609344;
    emmissions = calculateCarEmissions(distance, vehicle_choice, "city");
    emmissions = emmissions * 52;

    driving_annual_emissions = emissions;
    updateTotal(0);
    return emmissions;
}

// Gets the specified contents of a cookie
// Input: content name
// Output: On success, content value
// Output: On failure, empty
function getCookie(name) {
    cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
    
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    return null;
}

// Erases a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age = -1'
}

// Updates the total carbon emissions
// Input: calculated emissions
function updateTotal(emissions) {
    if (document) {
        value = getCookie("total")
        if (value) {
            eraseCookie("total");
            total = value + emissions;
            document.cookie = "total = " + (total + driving_annual_emissions).toString();
            last_total = value;
        } else {
            document.cookie = "total = " + emissions.toString();
        }
    }
}

// Input: calculated emissions
function revertTotal() {
    if (document) {
        value = getCookie("total")
        if (last_total != 0) {
            eraseCookie("total");
            temp = total;
            total = last_total;
            document.cookie = "total = " + (total + driving_annual_emissions).toString();
            last_total = temp;
        }
    }
}
// Resets the emissions total to zero
function resetTotal() {
    if (document) {
        value = getCookie("total")
        if (value) {
            eraseCookie("total");
            last_total = value;
            total = 0;
            driving_annual_emissions = 0;
        }
    }
}

var trip = true

function tripSwitch()
{
  if(trip === true)
  {
    trip = false
    document.getElementById("tripOrWeeklyButton").innerText = "Weekly Average"
    document.getElementById("tripHint").innerText = "Insert the estimated total miles you drive in a week"
    document.getElementById("mapDiv").style.display = "none"
  }
  else
  {
    trip = true
    document.getElementById("tripOrWeeklyButton").innerText = "Trip"
    document.getElementById("tripHint").innerText = "Insert the estimated total miles driven for a trip or use the map"
    document.getElementById("mapDiv").style.display = "flex"
  }
}

function carTrip()
{
  var distance = parseInt(document.getElementById("total").text)
  var vehicle = document.getElementById("carType").value
  calculateCarEmissions(distance, vehicle, "highway", 1)
}

function carOd()
{
  var distance = parseInt(document.getElementById("total").text)
  var vehicle = document.getElementById("carType").value

  if(trip === true)
  {
    calculateCarEmissions(distance, vehicle, "highway", 0)
  }
  else
  {
    calculateAnnualCarEmissions(distance, vehicle)
  }
}