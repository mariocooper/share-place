import React from "react";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "The world's most magnificent Art Deco skyscraper",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
      address: "20 W 34th St., New York, NY 10001, USA",
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: "u1"
    },
    {
      id: "p2",
      title: "Statue of Liberty",
      description: "The statue is a personification of liberty in the form of a woman",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Statue_of_liberty_side.jpg",
      address: "New York, NY 10004, USA",
      location: {
        lat: 40.6892494,
        lng: -74.0445004
      },
      creator: "u2",
    }
  ];

  return (
    <PlaceList items={DUMMY_PLACES} />
  );
};

export default UserPlaces;
