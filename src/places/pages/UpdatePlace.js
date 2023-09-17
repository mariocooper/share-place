import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
