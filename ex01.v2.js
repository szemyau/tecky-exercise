const data = [
    {
      name: "Hong Kong",
      topLevelDomain: [".hk"],
      alpha2Code: "HK",
      alpha3Code: "HKG",
      callingCodes: ["852"],
      capital: "City of Victoria",
      altSpellings: ["HK", "香港"],
      region: "Asia",
      subregion: "Eastern Asia",
      population: 7324300,
      latlng: [22.25, 114.16666666],
      demonym: "Chinese",
      area: 1104.0,
      gini: 53.3,
      timezones: ["UTC+08:00"],
      borders: ["CHN"],
      nativeName: "香港",
      numericCode: "344",
      currencies: [
        {
          code: "HKD",
          name: "Hong Kong dollar",
          symbol: "$",
        },
      ],
      languages: [
        {
          iso639_1: "en",
          iso639_2: "eng",
          name: "English",
          nativeName: "English",
        },
        {
          iso639_1: "zh",
          iso639_2: "zho",
          name: "Chinese",
          nativeName: "中文 (Zhōngwén)",
        },
      ],
      translations: {
        de: "Hong Kong",
        es: "Hong Kong",
        fr: "Hong Kong",
        ja: "香港",
        it: "Hong Kong",
        br: "Hong Kong",
        pt: "Hong Kong",
        nl: "Hongkong",
        hr: "Hong Kong",
        fa: "هنگ‌کنگ",
      },
      flag: "https://flagcdn.com/hk.svg",
      regionalBlocs: [],
      cioc: "HKG",
    },
  ];


// console.log(data[0]["currencies"][0]["code"])
//console.log(data[0]["currencies"])

let country = data[0]; //1. remove array layer, jump to object layer


function objectLoop(title, data) {
  //4. here's object loop
  
  for (let key in data){
    const value = data[key];
    const message = `${title}_${key}:${value}`;
    console.log(message)
  }
}


for (let key in country) { //2. loop object layer to get value

    const title = key[0].toUpperCase()+key.substring(1);
    const value = country[key];
    const message = `${title}:${value}`;

  if (message.includes(`[object Object]`) ){  //3.focus on handling [object object]

    if (Array.isArray(value)) {
      for (let element of value) {
        objectLoop(title,value);
      }

    } else {
      objectLoop(title,value);
    }
  }
  else{
    console.log(message);
  }
}
 
    


/*
let value = `${key}: ${country[key]}`
if (value.includes('[object Object]')) {
  // console.log(`${key}: special cases`)
  for (let list of value) {
    console.log(`${list}: ${value[list]}`) // how to loop array outside??
  }
} else {
  console.log(`${key}: ${country[key]}`)}
*


/*
for (let key in country) {
  // console.log(`${key}: ${country[key]}`) //but show [object Object] in value
  console.log(`${key}: ${country[key]}`)
  let value = `${country[key]}`
  // console.log(value)

  // condition = value.includes('[object Object]')
  if (value.includes('[object Object]')){
    for (let subKey of value ) { //try to solve array problem first
    console.log(`${subKey}:${value[subKey]}`)}
    /*
    for (let subKey in value) {
      console.log(`${value[subKey]}`)
    }
    */
  // }}

  
  /*
  let specialCases = country[key]
  if (specialCases.includes('[object Object]')) {
   console.log(`special cases: `)}
  
}
*/

/*
for (let key in country) {
  console.log(`${key}: ${country[key]}`);
    if (country[key] == Array.isArray(data)){
      function subKey(element) {
        for (let subKey in country[key]) {
          console.log(`${subKey}: ${country[key][subKey]}`);
        }
      }
    }
}
*/


