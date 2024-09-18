"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [password, setPassword] = useState("Password");
  const [firstName, setFirstName] = useState("First name");
  const [lastName, setLastName] = useState("Last name");

  const handlegetingdata = async () => {
    try {
      const { data } = await axios.get("api/fullname");
      const response = await axios.get("api/password");

      setFirstName(data.firstName || "");
      setLastName(data.lastName || "");
      setPassword(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  handlegetingdata();

  const handlecopypassword = () => {
    navigator.clipboard.writeText(password);
  };
  const handlecopyfirstname = () => {
    navigator.clipboard.writeText(firstName);
  };
  const handlecopylastname = () => {
    navigator.clipboard.writeText(lastName);
  };
  return (
    <main className="container mx-auto w-full min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-2 top-[9px]"
            onClick={handlecopyfirstname}
          >
            <Copy size={24} />
          </motion.div>
          <input
            disabled
            type="text"
            placeholder={firstName}
            className="input"
          />
        </div>
        <div className="relative">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-2 top-[9px]"
            onClick={handlecopylastname}
          >
            <Copy size={24} />
          </motion.div>
          <input
            disabled
            type="text"
            placeholder={lastName}
            className="input"
          />
        </div>
      </div>
      <div className="relative w-full max-w-[470px]">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="absolute right-2 top-[9px]"
          onClick={handlecopypassword}
        >
          <Copy size={24} />
        </motion.div>
        <input
          disabled
          type="text"
          placeholder={password}
          className="input max-w-[470px]"
        />
      </div>

      <button className="btn">Generate</button>
    </main>
  );
}
