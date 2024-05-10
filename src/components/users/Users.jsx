import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromeUsers } from "../../context/userSlice";
function Users({ data }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profession}</p>
          <p>{user.age}</p>
          <button onClick={() => dispatch(removeFromeUsers(user))}>
            Remove
          </button>
          <button
            style={{ marginLeft: "12px" }}
            onClick={() => setToggle(!toggle)}
          >
            More
          </button>
          <div className={`big_box ${toggle ? "show" : " "}`}>
            <button
              style={{ marginLeft: "12px" }}
              onClick={() => setToggle(!toggle)}
            >
              Back
            </button>
            <h3 style={{ paddingTop: "10px" }}>Instagram</h3>
            <h2 style={{ color: "red" }}>@abboskadirov04 Obuna bolamis</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo ratione doloribus quibusdam et laudantium reprehenderit
              vel delectus ullam, eum in debitis alias dicta perferendis
              eligendi ipsa fuga sapiente molestiae unde corrupti! Quis
              molestiae consequatur accusamus et. In eaque possimus deserunt
              explicabo delectus minima a adipisci laboriosam repellat quod
              aspernatur rem numquam quae distinctio tempora molestias suscipit,
              maxime voluptatum dolore mollitia debitis, repellendus omnis, eius
              consequuntur? Doloribus nobis quidem incidunt deserunt, rem quia?
              Quidem molestiae nemo dolores enim eum illo pariatur sint illum
              ipsam quo provident harum doloribus ducimus laboriosam, in
              explicabo rerum esse. Quas repudiandae quibusdam fugiat a velit
              dolor.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
