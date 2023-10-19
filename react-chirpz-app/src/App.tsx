import { useEffect, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { getChirpzData } from "./Redux/Action";
import { Spinner } from "./Components/Spinner/Spinner";
import { Modal } from "./Components/Modal/Modal";
import { Chirpz } from "./Components/Chirpz/Chirpz";
import Header from "./Components/Header/Header";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const chirpzData = useSelector((store: any) => store.chirpzData);
  const isLoading = useSelector((store: any) => store.isLoading);

  useEffect(() => {
    getChirpzData();
  }, []);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);
  return (
    <div>
      <Header setOpenModal={setOpenModal} />
      {isLoading && <Spinner />}
      {chirpzData?.length > 0 &&
        chirpzData?.map((data: any) => {
          return (
            <section className="comments-section" key={data.id}>
              <Chirpz
                userName={data.userName}
                caption={data.caption}
                tags={data.tags}
                tick={data.isVerified}
              />
            </section>
          );
        })}
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
