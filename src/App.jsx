import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState(""); // 名前の状態
  const [unitSystem, setUnitSystem] = useState("us"); // 単位システム
  const [story, setStory] = useState(""); // ストーリー
  const [message, setMessage] = useState(""); // Netlify関数のメッセージ

  // Netlifyの `/hello` エンドポイントからのメッセージを取得
  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/hello");
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage("Error fetching the hello message");
      }
    })();
  }, []);

  // 名前の入力変更
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // 単位システムの変更
  function handleUnitChange(event) {
    setUnitSystem(event.target.value);
  }

  // ストーリー生成
  async function generateStory(event) {
    event.preventDefault();

    const inputName = name.trim() || "Bob"; // 空白の場合デフォルト名
    console.log(`Name: ${inputName}, Unit System: ${unitSystem}`); // デバッグ

    const response = await fetch(
      `/.netlify/functions/index?name=${encodeURIComponent(inputName)}&unitSystem=${unitSystem}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data); // サーバーレスポンスを確認
      setStory(data.message);
    } else {
      setStory("Error generating story");
    }
  }

  return (
    <div>
      {/* Netlify関数からのメッセージ表示 */}
      <div>
        <h1>{message}</h1>
      </div>

      {/* 名前入力フォーム */}
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          id="customname"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      {/* 単位システム選択 */}
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          id="us"
          value="us"
          checked={unitSystem === "us"}
          onChange={handleUnitChange}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          id="uk"
          value="uk"
          checked={unitSystem === "uk"}
          onChange={handleUnitChange}
        />
      </div>

      {/* ストーリー生成ボタン */}
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>

      {/* 生成されたストーリー表示 */}
      <div>
        <p
          id="storyOutput"
          style={{
            whiteSpace: "pre-wrap",
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
            display: story ? "block" : "none",
          }}
        >
          {story}
        </p>
      </div>
    </div>
  );
}
