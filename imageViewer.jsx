// src/ImageViewer.jsx
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase"; // Import the initialized Firebase app

const db = getFirestore(app);

function ImageViewer() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "images"));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("$$$$$", data);
          setImageUrl(data.image); // Assuming field is named `image`
        });
      } catch (error) {
        console.error("Error fetching image URL from Firestore:", error);
      }
    };

    fetchImageFromFirestore();
  }, []);

  return (
    <div>
      <h2>Image from Firestore</h2>
      {imageUrl ? <img src={imageUrl} alt="From Firestore" /> : "Loading..."}
    </div>
  );
}

export default ImageViewer;
