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
  goalcount,
  order,
  icon,
  setEditer,
  deleteBtn,
  date,
  destination,
  coordinates,
  distance,
  difficulty,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedSubtitle, setEditedSubtitle] = useState(subtitle);
  const [editedContent, setEditedContent] = useState(content);
  const [editedContentQuill, setEditedContentQuill] = useState(contentQuill);
  const [editedLink, setEditedLink] = useState(link);
  const [editedButtonText, setEditedButtonText] = useState(buttontext);
  const [editedButtonLink, setEditedButtonLink] = useState(buttonlink);
  const [editedGoalcount, setEditedGoalcount] = useState(goalcount);
  const [editedDate, setEditedDate] = useState(date);
  const [editedDestination, setEditedDestination] = useState(destination);
  const [editedCoordinates, setEditedCoordinates] = useState(coordinates);
  const [editedDistance, setEditedDistance] = useState(distance);
  const [editedDifficulty, setEditedDifficulty] = useState(difficulty);
  const [imageFile, setImageFile] = useState(null);

  const { makeRequest } = useRequestData();
  const { makeRequest: delMakeRequest } = useRequestData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    if (title) fd.append("title", editedTitle);
    if (subtitle) fd.append("subtitle", editedSubtitle);
    if (content) {
      fd.append("content", editedContent);
      fd.append("buttontext", editedButtonText);
      fd.append("buttonlink", editedButtonLink);
      fd.append("videolink", editedLink);
    }
    if (contentQuill) {
      fd.append("content", editedContentQuill);
      fd.append("destination", editedDestination);
      fd.append("distance", editedDistance);
      fd.append("difficulty", editedDifficulty);
      fd.append("coordinates", editedCoordinates);
    }
    if (goals) {
      fd.append("goals", goals);
      fd.append("goalcount", editedGoalcount);
      fd.append("order", order);
      fd.append("icon", icon);
    }
    if (imageFile) {
      fd.append("image", imageFile);
    }

    if (goals) {
      makeRequest("http://localhost:5888/goals/admin/" + id, "PUT", fd);
    }
    if (content) {
      makeRequest("http://localhost:5888/heroes/admin/" + id, "PUT", fd);
    }
    if (contentQuill) {
      makeRequest("http://localhost:5888/events/admin/" + id, "PUT", fd);
    }
    setEditer(null);
    window.location.reload();
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      delMakeRequest("http://localhost:5888/events/admin/" + id, "DELETE");
      window.location.reload();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-sm z-50">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-darkPurple bg-white wrapper h-[90%] overflow-y-scroll p-4"
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
              required
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
              required
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
              value={editedContentQuill}
              onChange={setEditedContentQuill}
              required
            />
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
          </>
        )}
        {goals && (
          <>
            <label htmlFor="goal">Goal</label>
            <input type="text" name="goal" id="goal" value={goals} disabled />
            <label htmlFor="goalcount">Goal count</label>
            <input
              type="number"
              name="goalcount"
              id="goalcount"
              value={editedGoalcount}
              onChange={(e) => setEditedGoalcount(e.target.value)}
            />
            <label htmlFor="order">Order</label>
            <input
              type="number"
              name="order"
              id="order"
              value={order}
              disabled
            />
            <label htmlFor="icon">Icon</label>
            <input type="text" name="icon" id="icon" value={icon} disabled />
          </>
        )}
        {date && (
          <>
            <label htmlFor="eventdate">Event date {editedDate}</label>
            <input
              type="date"
              name="eventdate"
              id="eventdate"
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
              required
            />
          </>
        )}
        {destination && (
          <>
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              name="destination"
              id="destination"
              value={editedDestination}
              onChange={(e) => setEditedDestination(e.target.value)}
              required
            />
          </>
        )}
        {coordinates && (
          <>
            <label htmlFor="coordinates">Coordinates</label>
            <input
              type="text"
              name="coordinates"
              id="coordinates"
              value={editedCoordinates}
              onChange={(e) => setEditedCoordinates(e.target.value)}
              required
            />
          </>
        )}
        {distance && (
          <>
            <label htmlFor="distance">Distance</label>
            <input
              type="number"
              name="distance"
              id="distance"
              value={editedDistance}
              onChange={(e) => setEditedDistance(e.target.value)}
              required
            />
          </>
        )}
        {difficulty && (
          <>
            <label htmlFor="difficulty">Difficulty</label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              value={editedDifficulty}
              onChange={(e) => setEditedDifficulty(e.target.value)}
              required
            />
          </>
        )}
        {!goals && (
          <>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </>
        )}
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded"
          >
            Save
          </button>
          {deleteBtn && (
            <button
              className="px-4 py-2 bg-red-700 text-white rounded"
              onClick={handleDelete}
            >
              {deleteBtn}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Editer;
