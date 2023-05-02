import { useContext } from "react";
import { Context } from "../Context/Context";

export const PreviousLocation = () => {
  const { location, setLocation } = useContext(Context);

  const handleDeleteLoc = (index: any) => {
    if (location) {
      const updatedLocations = location.filter((_, id) => id !== index);
      setLocation(updatedLocations);
    }
  };

  const handleDeleteAllLoc = () => {
    setLocation([]);
  };

  return (
    <div>
      <h1 style={{ marginLeft: "-39%" }}>Previous Location</h1>
      {location?.map(({ location_name, time }, id) => (
        <div key={`${location_name}-${time + Math.random() * 1000}`}>
          <div>
            <h3
              style={{
                marginLeft: "-4%",
                fontSize: "60",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              {location_name}
            </h3>
            <div
              style={{
                marginLeft: "-45%",
                marginTop: "-15px",
                fontSize: "20",
                fontWeight: "bold",
                color: "grey",
              }}
            >
              {time}
            </div>
          </div>
          <button
            style={{
              height: "30px",
              width: "100px",
              padding: 5,
              backgroundColor: "black",
              color: "white",
              alignItems: "center",
              marginTop: "10px",
              marginBottom: "-15px",
            }}
            onClick={() => handleDeleteLoc(id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        style={{
          height: "50px",
          width: "130px",
          padding: 5,
          backgroundColor: "yellow",
          color: "black",
          marginTop: "50px",
          marginBottom: "20px",
        }}
        onClick={handleDeleteAllLoc}
      >
        Clear All
      </button>
    </div>
  );
};
