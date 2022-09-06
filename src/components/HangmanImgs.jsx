import img0 from "../assets/0.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";

const imgs = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

export const HangmanImgs = (imgNum) => {
  if (imgNum >= 9) imgNum = 9;
  return (
    <>
      <img src={imgs[imgNum]} className="w-56" />
    </>
  );
};
