import React, { useState } from "react";

export default function Form({ setTodoData }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //submit시 reload 방지
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    //새로운 할 일 데이터 기존 배열에 추가하기
    setTodoData((prev) => [...prev, newTodo]);

    //value 초기화
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="해야 할 일을 입력하세요"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        type="submit"
        value="입력"
        style={{ flex: "1" }}
      />
    </form>
  );
}
