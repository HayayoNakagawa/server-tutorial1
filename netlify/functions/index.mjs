export default async (event) => {
    const name = event.queryStringParameters?.name || "Bob";
    const unitSystem = event.queryStringParameters?.unitSystem || "us";
    
    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = [
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away"
    ];
  
    const randomValueFromArray = (array) => array[Math.floor(Math.random() * array.length)];
  
    const xItem = randomValueFromArray(xItems);
    const yItem = randomValueFromArray(yItems);
    const zItem = randomValueFromArray(zItems);
  
    const initialTemperature = 94;
    const initialWeight = 300;
    let temperature = initialTemperature;
    let weight = initialWeight;
    let tempType = "fahrenheit";
    let weightType = "pounds";
  
    if (unitSystem === "uk") {
      temperature = Math.round((initialTemperature - 32) * (5 / 9));
      weight = Math.round(initialWeight / 14);
      tempType = "celsius";
      weightType = "stone";
    }
  
    const story = `It was ${temperature} ${tempType} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight} ${weightType}, and it was a hot day.`;
  
    const data = {
      message: story,
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };
  