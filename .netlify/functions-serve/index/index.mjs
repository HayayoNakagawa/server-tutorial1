
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/index.mjs
var functions_default = async (event) => {
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
  const story = `It was ${temperature} ${tempType} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised \u2014 ${xItem} weighs ${weight} ${weightType}, and it was a hot day.`;
  const data = {
    message: story
  };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
export {
  functions_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvaW5kZXgubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgZGVmYXVsdCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnM/Lm5hbWUgfHwgXCJCb2JcIjtcclxuICAgIGNvbnN0IHVuaXRTeXN0ZW0gPSBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnM/LnVuaXRTeXN0ZW0gfHwgXCJ1c1wiO1xyXG4gICAgXHJcbiAgICBjb25zdCB4SXRlbXMgPSBbXCJXaWxseSB0aGUgR29ibGluXCIsIFwiQmlnIERhZGR5XCIsIFwiRmF0aGVyIENocmlzdG1hc1wiXTtcclxuICAgIGNvbnN0IHlJdGVtcyA9IFtcInRoZSBzb3VwIGtpdGNoZW5cIiwgXCJEaXNuZXlsYW5kXCIsIFwidGhlIFdoaXRlIEhvdXNlXCJdO1xyXG4gICAgY29uc3Qgekl0ZW1zID0gW1xyXG4gICAgICBcInNwb250YW5lb3VzbHkgY29tYnVzdGVkXCIsXHJcbiAgICAgIFwibWVsdGVkIGludG8gYSBwdWRkbGUgb24gdGhlIHNpZGV3YWxrXCIsXHJcbiAgICAgIFwidHVybmVkIGludG8gYSBzbHVnIGFuZCBjcmF3bGVkIGF3YXlcIlxyXG4gICAgXTtcclxuICBcclxuICAgIGNvbnN0IHJhbmRvbVZhbHVlRnJvbUFycmF5ID0gKGFycmF5KSA9PiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcclxuICBcclxuICAgIGNvbnN0IHhJdGVtID0gcmFuZG9tVmFsdWVGcm9tQXJyYXkoeEl0ZW1zKTtcclxuICAgIGNvbnN0IHlJdGVtID0gcmFuZG9tVmFsdWVGcm9tQXJyYXkoeUl0ZW1zKTtcclxuICAgIGNvbnN0IHpJdGVtID0gcmFuZG9tVmFsdWVGcm9tQXJyYXkoekl0ZW1zKTtcclxuICBcclxuICAgIGNvbnN0IGluaXRpYWxUZW1wZXJhdHVyZSA9IDk0O1xyXG4gICAgY29uc3QgaW5pdGlhbFdlaWdodCA9IDMwMDtcclxuICAgIGxldCB0ZW1wZXJhdHVyZSA9IGluaXRpYWxUZW1wZXJhdHVyZTtcclxuICAgIGxldCB3ZWlnaHQgPSBpbml0aWFsV2VpZ2h0O1xyXG4gICAgbGV0IHRlbXBUeXBlID0gXCJmYWhyZW5oZWl0XCI7XHJcbiAgICBsZXQgd2VpZ2h0VHlwZSA9IFwicG91bmRzXCI7XHJcbiAgXHJcbiAgICBpZiAodW5pdFN5c3RlbSA9PT0gXCJ1a1wiKSB7XHJcbiAgICAgIHRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZCgoaW5pdGlhbFRlbXBlcmF0dXJlIC0gMzIpICogKDUgLyA5KSk7XHJcbiAgICAgIHdlaWdodCA9IE1hdGgucm91bmQoaW5pdGlhbFdlaWdodCAvIDE0KTtcclxuICAgICAgdGVtcFR5cGUgPSBcImNlbHNpdXNcIjtcclxuICAgICAgd2VpZ2h0VHlwZSA9IFwic3RvbmVcIjtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHN0b3J5ID0gYEl0IHdhcyAke3RlbXBlcmF0dXJlfSAke3RlbXBUeXBlfSBvdXRzaWRlLCBzbyAke3hJdGVtfSB3ZW50IGZvciBhIHdhbGsuIFdoZW4gdGhleSBnb3QgdG8gJHt5SXRlbX0sIHRoZXkgc3RhcmVkIGluIGhvcnJvciBmb3IgYSBmZXcgbW9tZW50cywgdGhlbiAke3pJdGVtfS4gJHtuYW1lfSBzYXcgdGhlIHdob2xlIHRoaW5nLCBidXQgd2FzIG5vdCBzdXJwcmlzZWQgXHUyMDE0ICR7eEl0ZW19IHdlaWdocyAke3dlaWdodH0gJHt3ZWlnaHRUeXBlfSwgYW5kIGl0IHdhcyBhIGhvdCBkYXkuYDtcclxuICBcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG1lc3NhZ2U6IHN0b3J5LFxyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBLElBQU8sb0JBQVEsT0FBTyxVQUFVO0FBQzVCLFFBQU0sT0FBTyxNQUFNLHVCQUF1QixRQUFRO0FBQ2xELFFBQU0sYUFBYSxNQUFNLHVCQUF1QixjQUFjO0FBRTlELFFBQU0sU0FBUyxDQUFDLG9CQUFvQixhQUFhLGtCQUFrQjtBQUNuRSxRQUFNLFNBQVMsQ0FBQyxvQkFBb0IsY0FBYyxpQkFBaUI7QUFDbkUsUUFBTSxTQUFTO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUVBLFFBQU0sdUJBQXVCLENBQUMsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUV0RixRQUFNLFFBQVEscUJBQXFCLE1BQU07QUFDekMsUUFBTSxRQUFRLHFCQUFxQixNQUFNO0FBQ3pDLFFBQU0sUUFBUSxxQkFBcUIsTUFBTTtBQUV6QyxRQUFNLHFCQUFxQjtBQUMzQixRQUFNLGdCQUFnQjtBQUN0QixNQUFJLGNBQWM7QUFDbEIsTUFBSSxTQUFTO0FBQ2IsTUFBSSxXQUFXO0FBQ2YsTUFBSSxhQUFhO0FBRWpCLE1BQUksZUFBZSxNQUFNO0FBQ3ZCLGtCQUFjLEtBQUssT0FBTyxxQkFBcUIsT0FBTyxJQUFJLEVBQUU7QUFDNUQsYUFBUyxLQUFLLE1BQU0sZ0JBQWdCLEVBQUU7QUFDdEMsZUFBVztBQUNYLGlCQUFhO0FBQUEsRUFDZjtBQUVBLFFBQU0sUUFBUSxVQUFVLFdBQVcsSUFBSSxRQUFRLGdCQUFnQixLQUFLLHNDQUFzQyxLQUFLLG1EQUFtRCxLQUFLLEtBQUssSUFBSSxzREFBaUQsS0FBSyxXQUFXLE1BQU0sSUFBSSxVQUFVO0FBRXJRLFFBQU0sT0FBTztBQUFBLElBQ1gsU0FBUztBQUFBLEVBQ1g7QUFFQSxTQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsSUFBSSxHQUFHO0FBQUEsSUFDeEMsUUFBUTtBQUFBLElBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxFQUNoRCxDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg==
