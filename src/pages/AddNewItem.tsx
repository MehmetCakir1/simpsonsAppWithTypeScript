import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useState } from "react";
import { ISimpson } from "../types/interfaces";
import { addNewItem } from "../features/simpsonsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddNewItem = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { simpsons } = useAppSelector((state) => state.simpsons);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
console.log(simpsons)


  const handleSubmit = () => {
    dispatch(
      addNewItem({
        id: nanoid(),
        name: name,
        avatar: avatar.startsWith("https://") && avatar.endsWith(".png")|| avatar.endsWith(".jpg") ? avatar : "images/Simpson.png",
        job: job,
        description: description,
      })
    );
    setName("")
    setAvatar("")
    setJob("")
    setDescription("")
    navigate("/")
  };
  
  return (
    <div className="container m-auto">
      <button
        className="bg-green-300 font-semibold text-lg px-4 py-1 rounded-lg my-6"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
      <form className="flex flex-col items-center justify-center w-full max-w-3xl m-auto">
        <h1 className="text-2xl py-2 font-bold text-red-700">
          Add A New Character
        </h1>
        <input
          type="text"
          placeholder="Name Surname"
          className="p-2 w-11/12 m-auto my-1 border border-slate-500 text-xl"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job Title"
          className="p-2 w-11/12 m-auto my-1 border border-slate-500 text-xl"
          value={job}
          onChange={(e)=>setJob(e.target.value)}
          required
        />
        <textarea
          placeholder="About Them"
          className="p-2 w-11/12 m-auto my-1 resize-none  border border-slate-500 text-xl overflow-auto"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image link"
          className="p-2 w-11/12 m-auto my-1 border border-slate-500 text-xl"
          value={avatar}
          onChange={(e)=>setAvatar(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-9 py-1 text-xl mt-3"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddNewItem;
