import React, { useRef, useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Add = ({ setAdd }) => {
  const { makeRequest } = useRequestData();
  const { data: catData, makeRequest: catMakeRequest } = useRequestData();

  const refQuill = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    fd.append("content", refQuill.current.value);
    makeRequest("http://localhost:5888/events/admin/", "POST", fd);
    alert("New post added!");
    window.location.reload();
  };

  useEffect(() => {
    catMakeRequest("http://localhost:5888/eventcategories", "GET", null);
  }, []);

  if (!catData) return null;

  return (
    <form onSubmit={handleSubmit} className="my-4 p-4 border-2">
      <h3>Add new hero</h3>
      {form.map((event, index) => (
        <>
          <label key={index} htmlFor={event.name}>
            {event.placeholder}
          </label>
          <input id={event.name} type={event.type} name={event.name} required />
        </>
      ))}
      <label htmlFor="content">Content</label>
      <ReactQuill
        id="content"
        theme="snow"
        placeholder="Content"
        ref={refQuill}
        required
      />
      <label htmlFor="option">Choose a category: </label>
      <select
        name="category"
        id="option"
        className="w-full border border-thirdary p-2 mb-2"
      >
        {catData.map((event) => (
          <option key={event._id} value={event._id} className="p-2">
            {event.category}
          </option>
        ))}
      </select>
      <div className="flex justify-end gap-5">
        <button
          type="submit"
          className="px-4 py-2 bg-green-700 text-white rounded"
        >
          Save
        </button>
        <button onClick={() => setAdd(null)}>Close</button>
      </div>
    </form>
  );
};
const form = [
  {
    type: "text",
    name: "title",
    placeholder: "Title",
  },
  {
    type: "date",
    name: "eventdate",
    placeholder: "Event date",
  },
  {
    type: "text",
    name: "destination",
    placeholder: "Destination",
  },
  {
    type: "text",
    name: "coordinates",
    placeholder: "Coordinates",
  },
  {
    type: "number",
    name: "distance",
    placeholder: "Distance",
  },
  {
    type: "number",
    name: "difficulty",
    placeholder: "Difficulty",
  },
  {
    type: "file",
    name: "image",
    placeholder: "Image",
  },
];

export default Add;
