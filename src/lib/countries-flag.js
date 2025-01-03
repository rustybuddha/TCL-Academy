export const getCountryInfoByCode = (countryName) => {
  const countries = [
    {
        "countryname": "India",
        "countrycode": "91",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/IN.png"
    },
    {
      "countryname": "United Kingdom",
      "countrycode": "44",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GB.png"
  },
    {
      "countryname": "Canada",
      "countrycode": "1",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/CA.png"
    },
    {
      "countryname": "United States",
      "countrycode": "1",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/US.png"
    },
    {
      "countryname": "Bahamas",
      "countrycode": "1242",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/BS.png"
    },
    {
      "countryname": "Barbados",
      "countrycode": "1246",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/BB.png"
    },
    {
      "countryname": "Anguilla",
      "countrycode": "1264",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/AI.png"
    },
    {
      "countryname": "Antigua and Barbuda",
      "countrycode": "1268",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/AG.png"
    },
    {
      "countryname": "Virgin Islands, British",
      "countrycode": "1284",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/VG.png"
    },
    {
      "countryname": "Virgin Islands, U.S.",
      "countrycode": "1340",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/VI.png"
    },
    {
      "countryname": "Bermuda",
      "countrycode": "1441",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/BM.png"
    },
    {
      "countryname": "Grenada",
      "countrycode": "1473",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GD.png"
    },
    {
      "countryname": "Turks and Caicos Islands",
      "countrycode": "1649",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/TC.png"
    },
    {
      "countryname": "Montserrat",
      "countrycode": "1664",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MS.png"
    },
    {
      "countryname": "Northern Mariana Islands",
      "countrycode": "1670",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MP.png"
    },
    {
      "countryname": "Guam",
      "countrycode": "1671",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GU.png"
    },
    {
      "countryname": "American Samoa",
      "countrycode": "1684",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/AS.png"
    },
    {
      "countryname": "Saint Lucia",
      "countrycode": "1758",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/LC.png"
    },
    {
      "countryname": "Dominica",
      "countrycode": "1767",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/DM.png"
    },
    {
      "countryname": "Saint Vincent and the Grenadines",
      "countrycode": "1784",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/VC.png"
    },
    {
      "countryname": "Dominican Republic",
      "countrycode": "1849",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/DO.png"
    },
    {
      "countryname": "Trinidad and Tobago",
      "countrycode": "1868",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/TT.png"
    },
    {
      "countryname": "Saint Kitts and Nevis",
      "countrycode": "1869",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/KN.png"
    },
    {
      "countryname": "Jamaica",
      "countrycode": "1876",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/JM.png"
    },
    {
      "countryname": "Puerto Rico",
      "countrycode": "1939",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/PR.png"
    },
    {
      "countryname": "Egypt",
      "countrycode": "20",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/EG.png"
    },
    {
      "countryname": "South Sudan",
      "countrycode": "211",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/SS.png"
    },
    {
      "countryname": "Morocco",
      "countrycode": "212",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MA.png"
    },
    {
      "countryname": "Algeria",
      "countrycode": "213",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/DZ.png"
    },
    {
      "countryname": "Tunisia",
      "countrycode": "216",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/TN.png"
    },
    {
      "countryname": "Libyan Arab Jamahiriya",
      "countrycode": "218",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/LY.png"
    },
    {
      "countryname": "Gambia",
      "countrycode": "220",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GM.png"
    },
    {
      "countryname": "Senegal",
      "countrycode": "221",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/SN.png"
    },
    {
      "countryname": "Mauritania",
      "countrycode": "222",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MR.png"
    },
    {
      "countryname": "Mali",
      "countrycode": "223",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/ML.png"
    },
    {
      "countryname": "Guinea",
      "countrycode": "224",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GN.png"
    },
    {
      "countryname": "Cote d'Ivoire",
      "countrycode": "225",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/CI.png"
    },
    {
      "countryname": "Burkina Faso",
      "countrycode": "226",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/BF.png"
    },
    {
      "countryname": "Niger",
      "countrycode": "227",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/NE.png"
    },
    {
      "countryname": "Togo",
      "countrycode": "228",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/TG.png"
    },
    {
      "countryname": "Benin",
      "countrycode": "229",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/BJ.png"
    },
    {
      "countryname": "Mauritius",
      "countrycode": "230",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MU.png"
    },
    {
      "countryname": "Liberia",
      "countrycode": "231",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/LR.png"
    },
    {
      "countryname": "Sierra Leone",
      "countrycode": "232",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/SL.png"
    },
    {
      "countryname": "Ghana",
      "countrycode": "233",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GH.png"
    },
    {
      "countryname": "Nigeria",
      "countrycode": "234",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/NG.png"
    },
    {
      "countryname": "Chad",
      "countrycode": "235",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/TD.png"
    },
    {
      "countryname": "Central African Republic",
      "countrycode": "236",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/CF.png"
    },
    {
      "countryname": "Cameroon",
      "countrycode": "237",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/CM.png"
    },
    {
      "countryname": "Cape Verde",
      "countrycode": "238",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/CV.png"
    },
    {
      "countryname": "Sao Tome and Principe",
      "countrycode": "239",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/ST.png"
    },
    {
      "countryname": "Equatorial Guinea",
      "countrycode": "240",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GQ.png"
    },
    {
      "countryname": "Gabon",
      "countrycode": "241",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GA.png"
    },
    {
      "countryname": "Congo, Republic of the",
      "countrycode": "242",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/CG.png"
    },
    {
      "countryname": "Congo, Democratic Republic of the",
      "countrycode": "243",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/CD.png"
    },
    {
      "countryname": "Angola",
      "countrycode": "244",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/AO.png"
    },
    {
      "countryname": "Guinea-Bissau",
      "countrycode": "245",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/GW.png"
    },
    {
      "countryname": "Seychelles",
      "countrycode": "248",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/SC.png"
    },
    {
      "countryname": "Sudan",
      "countrycode": "249",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/SD.png"
    },
    {
      "countryname": "Rwanda",
      "countrycode": "250",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/RW.png"
    },
    {
      "countryname": "Ethiopia",
      "countrycode": "251",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/ET.png"
    },
    {
      "countryname": "Somalia",
      "countrycode": "252",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/SO.png"
    },
    {
      "countryname": "Djibouti",
      "countrycode": "253",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/DJ.png"
    },
    {
      "countryname": "Kenya",
      "countrycode": "254",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/KE.png"
    },
    {
      "countryname": "Tanzania, United Republic of",
      "countrycode": "255",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/TZ.png"
    },
    {
      "countryname": "Uganda",
      "countrycode": "256",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/UG.png"
    },
    {
      "countryname": "Burundi",
      "countrycode": "257",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/BI.png"
    },
    {
      "countryname": "Mozambique",
      "countrycode": "258",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MZ.png"
    },
    {
      "countryname": "Zambia",
      "countrycode": "260",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/ZM.png"
    },
    {
      "countryname": "Madagascar",
      "countrycode": "261",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MG.png"
    },
    {
      "countryname": "Reunion",
      "countrycode": "262",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/RE.png"
    },
    {
      "countryname": "Zimbabwe",
      "countrycode": "263",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/ZW.png"
    },
    {
      "countryname": "Namibia",
      "countrycode": "264",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/NA.png"
    },
    {
      "countryname": "Malawi",
      "countrycode": "265",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/MW.png"
    },
    {
      "countryname": "Lesotho",
      "countrycode": "266",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/LS.png"
    },
    {
      "countryname": "Botswana",
      "countrycode": "267",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/BW.png"
    },
    {
      "countryname": "Swaziland",
      "countrycode": "268",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/SZ.png"
    },
    {
      "countryname": "Mayotte",
      "countrycode": "269",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/YT.png"
    },
    {
      "countryname": "Comoros",
      "countrycode": "269",
      "flagurl": "https://flaglog.com/codes/official-ratio-120px/KM.png"
    },
    {
        "countryname": "South Africa",
        "countrycode": "27",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/ZA.png"
    },
    {
        "countryname": "Saint Helena",
        "countrycode": "290",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/SH.png"
    },
    {
        "countryname": "Eritrea",
        "countrycode": "291",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/ER.png"
    },
    {
        "countryname": "Aruba",
        "countrycode": "297",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AW.png"
    },
    {
        "countryname": "Faroe Islands",
        "countrycode": "298",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/FO.png"
    },
    {
        "countryname": "Greenland",
        "countrycode": "299",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/GL.png"
    },
    {
        "countryname": "Greece",
        "countrycode": "30",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/GR.png"
    },
    {
        "countryname": "Netherlands",
        "countrycode": "31",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/NL.png"
    },
    {
        "countryname": "Belgium",
        "countrycode": "32",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/BE.png"
    },
    {
        "countryname": "France",
        "countrycode": "33",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/FR.png"
    },
    {
        "countryname": "Spain",
        "countrycode": "34",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/ES.png"
    },
    {
        "countryname": "Gibraltar",
        "countrycode": "350",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/GI.png"
    },
    {
        "countryname": "Portugal",
        "countrycode": "351",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/PT.png"
    },
    {
        "countryname": "Luxembourg",
        "countrycode": "352",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/LU.png"
    },
    {
        "countryname": "Ireland",
        "countrycode": "353",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/IE.png"
    },
    {
        "countryname": "Iceland",
        "countrycode": "354",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/IS.png"
    },
    {
        "countryname": "Albania",
        "countrycode": "355",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AL.png"
    },
    {
        "countryname": "Malta",
        "countrycode": "356",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/MT.png"
    },
    {
        "countryname": "Cyprus",
        "countrycode": "357",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/CY.png"
    },
    {
        "countryname": "Finland",
        "countrycode": "358",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/FI.png"
    },
    {
        "countryname": "Bulgaria",
        "countrycode": "359",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/BG.png"
    },
    {
        "countryname": "Hungary",
        "countrycode": "36",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/HU.png"
    },
    {
        "countryname": "Lithuania",
        "countrycode": "370",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/LT.png"
    },
    {
        "countryname": "Latvia",
        "countrycode": "371",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/LV.png"
    },
    {
        "countryname": "Estonia",
        "countrycode": "372",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/EE.png"
    },
    {
        "countryname": "Moldova, Republic of",
        "countrycode": "373",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/MD.png"
    },
    {
        "countryname": "Armenia",
        "countrycode": "374",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AM.png"
    },
    {
        "countryname": "Belarus",
        "countrycode": "375",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/BY.png"
    },
    {
        "countryname": "Andorra",
        "countrycode": "376",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AD.png"
    },
    {
        "countryname": "Monaco",
        "countrycode": "377",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/MC.png"
    },
    {
        "countryname": "San Marino",
        "countrycode": "378",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/SM.png"
    },
    {
        "countryname": "Vatican City",
        "countrycode": "379",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/VA.png"
    },
    {
        "countryname": "Ukraine",
        "countrycode": "380",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/UA.png"
    },
    {
        "countryname": "Serbia",
        "countrycode": "381",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/RS.png"
    },
    {
        "countryname": "Montenegro",
        "countrycode": "382",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/ME.png"
    },
    {
        "countryname": "Kosovo",
        "countrycode": "383",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/XK.png"
    },
    {
        "countryname": "Croatia",
        "countrycode": "385",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/HR.png"
    },
    {
        "countryname": "Slovenia",
        "countrycode": "386",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/SI.png"
    },
    {
        "countryname": "Bosnia and Herzegovina",
        "countrycode": "387",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/BA.png"
    },
    {
        "countryname": "Macedonia, The Former Yugoslav Republic of",
        "countrycode": "389",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/MK.png"
    },
    {
        "countryname": "Italy",
        "countrycode": "39",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/IT.png"
    },
    {
        "countryname": "Romania",
        "countrycode": "40",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/RO.png"
    },
    {
        "countryname": "Switzerland",
        "countrycode": "41",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/CH.png"
    },
    {
        "countryname": "Austria",
        "countrycode": "43",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AT.png"
    },
    {
        "countryname": "Denmark",
        "countrycode": "45",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/DK.png"
    },
    {
        "countryname": "Sweden",
        "countrycode": "46",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/SE.png"
    },
    {
        "countryname": "Norway",
        "countrycode": "47",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/NO.png"
    },
    {
        "countryname": "Poland",
        "countrycode": "48",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/PL.png"
    },
    {
        "countryname": "Germany",
        "countrycode": "49",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/DE.png"
    },
    {
        "countryname": "Peru",
        "countrycode": "51",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/PE.png"
    },
    {
        "countryname": "Mexico",
        "countrycode": "52",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/MX.png"
    },
    {
        "countryname": "Cuba",
        "countrycode": "53",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/CU.png"
    },
    {
        "countryname": "Argentina",
        "countrycode": "54",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AR.png"
    },
    {
        "countryname": "Brazil",
        "countrycode": "55",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/BR.png"
    },
    {
        "countryname": "Chile",
        "countrycode": "56",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/CL.png"
    },
    {
        "countryname": "Colombia",
        "countrycode": "57",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/CO.png"
    },
    {
        "countryname": "Venezuela",
        "countrycode": "58",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/VE.png"
    },
    {
        "countryname": "Malaysia",
        "countrycode": "60",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/MY.png"
    },
    {
        "countryname": "Australia",
        "countrycode": "61",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AU.png"
    },
    {
        "countryname": "Indonesia",
        "countrycode": "62",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/ID.png"
    },
    {
        "countryname": "Philippines",
        "countrycode": "63",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/PH.png"
    },
    {
        "countryname": "New Zealand",
        "countrycode": "64",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/NZ.png"
    },
    {
        "countryname": "Singapore",
        "countrycode": "65",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/SG.png"
    },
    {
        "countryname": "Thailand",
        "countrycode": "66",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/TH.png"
    },
    {
        "countryname": "Japan",
        "countrycode": "81",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/JP.png"
    },
    {
        "countryname": "South Korea",
        "countrycode": "82",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/KR.png"
    },
    {
        "countryname": "Vietnam",
        "countrycode": "84",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/VN.png"
    },
    {
        "countryname": "China",
        "countrycode": "86",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/CN.png"
    },
    {
        "countryname": "Turkey",
        "countrycode": "90",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/TR.png"
    },
    {
        "countryname": "Pakistan",
        "countrycode": "92",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/PK.png"
    },
    {
        "countryname": "Afghanistan",
        "countrycode": "93",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/AF.png"
    },
    {
        "countryname": "Sri Lanka",
        "countrycode": "94",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/LK.png"
    },
    {
        "countryname": "Myanmar",
        "countrycode": "95",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/MM.png"
    },
    {
        "countryname": "Iran",
        "countrycode": "98",
        "flagurl": "https://flaglog.com/codes/official-ratio-120px/IR.png"
    }
]

  return countries.find(country => country.countryname === countryName) || null;
};







