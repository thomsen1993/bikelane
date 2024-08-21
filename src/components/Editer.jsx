import React, { useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { FaRegWindowClose } from "react-icons/fa";

const Editer = ({
  title,
  subtitle,
  content,
  contentQuill,
  link,
  buttontext,
  buttonlink,
  id,
  goals,
  order,
  setEditer,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedSubtitle, setEditedSubtitle] = useState(subtitle);
  const [editedContent, setEditedContent] = useState(content);
  //   const [editedContentQuill, setEditedContentQuill] = useState(contentQuill);
  const [editedLink, setEditedLink] = useState(link);
  const [editedButtonText, setEditedButtonText] = useState(buttontext);
  const [editedButtonLink, setEditedButtonLink] = useState(buttonlink);
  const [editedGoals, setEditedGoals] = useState(goals);
  const [editedOrder, setEditedOrder] = useState(order);

  const { makeRequest } = useRequestData();

  const refQuill = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", editedTitle);
    fd.append("subtitle", editedSubtitle);
    fd.append("content", editedContent);
    fd.append("content", refQuill.current.value);
    fd.append("buttontext", editedButtonText);
    fd.append("buttonlink", editedButtonLink);
    fd.append("videolink", editedLink);
    fd.append("goals", editedGoals);
    fd.append("order", editedOrder);
    fd.append("image", e.target.elements.image.files[0]);

    makeRequest("http://localhost:5888/heroes/admin/" + id, "PUT", fd);
    setEditer(null);
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-sm z-50">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-darkPurple bg-white wrapper h-screen overflow-y-scroll p-4"
      >
        <div className="flex justify-between items-center text-2xl mb-5">
          <p className="text-accent">Edit</p>
          <FaRegWindowClose
            onClick={() => setEditer(null)}
            className="cursor-pointer"
          />
        </div>
        {id && (
          <p className="text-sm text-thirdary border border-thirdary rounded-md w-fit p-1">
            id: {id}
          </p>
        )}
        {title && (
          <>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </>
        )}
        {subtitle && (
          <>
            <label htmlFor="subtitle">Subtitle</label>
            <input
              id="subtitle"
              type="text"
              name="subtitle"
              value={editedSubtitle}
              onChange={(e) => setEditedSubtitle(e.target.value)}
            />
          </>
        )}
        {content && (
          <>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              rows={10}
            ></textarea>
          </>
        )}
        {contentQuill && (
          <>
            <label htmlFor="contentQuill">Content</label>
            <ReactQuill
              id="contentQuill"
              theme="snow"
              ref={refQuill}
            />
            <textarea
              id="content"
              name="content"
              value={contentQuill}
              onChange={(e) => setEditedContentQuill(e.target.value)}
              rows={10}
            ></textarea>
          </>
        )}
        {buttontext && (
          <>
            <label htmlFor="buttontext">Button text</label>
            <input
              id="buttontext"
              type="text"
              name="buttontext"
              value={editedButtonText}
              onChange={(e) => setEditedButtonText(e.target.value)}
            />
          </>
        )}
        {buttonlink && (
          <>
            <label htmlFor="buttonlink">Button link</label>
            <input
              id="buttonlink"
              type="text"
              name="buttonlink"
              value={editedButtonLink}
              onChange={(e) => setEditedButtonLink(e.target.value)}
            />
          </>
        )}
        {link && (
          <>
            <label htmlFor="link">Link</label>
            <input
              id="link"
              type="text"
              name="videolink"
              value={editedLink}
              onChange={(e) => setEditedLink(e.target.value)}
            />
            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" />
          </>
        )}
        {goals && (
          <>
            <label htmlFor="goal">Goal</label>
            <input
              type="number"
              name="goalcount"
              id="goal"
              value={editedGoals}
              onChange={(e) => setEditedGoals(e.target.value)}
            />
          </>
        )}
        {order && (
          <>
            <label htmlFor="order">Order</label>
            <input
              type="number"
              name="order"
              id="order"
              value={editedOrder}
              onChange={(e) => setEditedOrder(e.target.value)}
            />
          </>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editer;
