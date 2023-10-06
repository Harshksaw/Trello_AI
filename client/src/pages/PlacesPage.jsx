import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import PhotosUploader from "../photosUploader";
import axios from "axios";

export default function PlacesPage() {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setperks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirectToPlacesList, setRedirectToPlacesList] = useState(false);
  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="test-gray-500 text-sm"> {text} </p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
  async function addNewPlaces(ev) {
    ev.preventDefault();
    const placedata = {
      title,
      address,
      addedPhotos,
      description,
      extraInfo,
      perks,
      checkIn,
      checkOut,
      maxGuests,
    };
    await axios.post("/places", placedata);

    //back to page ->
    setRedirectToPlacesList(true);
  }
  if (redirectToPlacesList  && action  !== 'new') {
    return <Navigate to={'/account/places'} />;
  }

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className=" inline-flex gap-1 bg-primary  text-white py-2 px-4 "
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form onSubmit={addNewPlaces}>
            {preInput(
              "Title",
              "Title for your place , should be short and catchy"
            )}

            <input type="text" placeholder="title , example my apartment" />

            {preInput("Address", "Address to this place")}

            <input type="text" placeholder="address" />
            {preInput("Photos", "MOre = Better")}

            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />

            {preInput("Description", "Description of the Place")}

            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            {preInput("Perks", "Select all the perk of place")}

            <div className="grid grid-cols-2 mt-2 md:grid-cols-4 lg:grid">
              <Perks selected={perks} OnChange={setperks} />
            </div>
            {preInput("Extra Info", "House Rules , etc")}
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />

            {preInput(
              "Check in&Out times",
              "add check in and check out time and some time windows for cleaning room"
            )}
            <div className="grid sm:grid-cols-3 gap-2">
              <div>
                <h3 className="mt-2 -mb-1 ">check In Time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  placeholder="14"
                />
              </div>

              <div className="mt-2 -mb-1">
                <h3>Check out time</h3>
                <input
                  type="text"
                  placeholder="11"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
