import { Github } from "lucide";
import coverphoto from "../assets/coverphoto.jpg";
import tushar from "../assets/IMG_20240709_225905_538.jpg";
import { GithubIcon, Linkedin, TwitterIcon } from "lucide-react";

const Profile = () => {
  return (
    <div className="w-full h-screen   ">
      <div className="relative m-4">
        
        <img
          className="  rounded-xl w-full"
          src={coverphoto}
          alt="cover"
        />
        
        <img
          className="w-24 h-24 border-white border-4 absolute -bottom-12 left-1/4 transform -translate-x-1/2 rounded-full"
          src={tushar}
          alt="Tushar"
        />
      </div>
      <div>
  <h1 className="font-bold text-2xl mt-12 mx-4">Hello there!</h1>
  <p className="m-4">
    I'm Tushar Pal, a passionate software developer based in Gujarat, India.  
  </p>
  <p className="ml-4">
    At 21, I'm on an exciting journey of building impactful projects and deepening my expertise in ReactJS and web development. 
    <br />
    I love sharing my knowledge and experiences on Twitter and occasionally write insightful blogs on Dev.to. 
  </p>
</div>

     <div>
      <button className="m-2 border-2 p-2 rounded-full">

        <a href="https://github.com/Tusharpal353"  ><GithubIcon/></a>
      </button>
        <button className="m-2 border-2 p-2 rounded-full">

        <a href="https://x.com/xo_tushar_wrld"  ><TwitterIcon/></a>
        </button>
        <button className="m-2 border-2 p-2 rounded-full"><a href="https://www.linkedin.com/in/tushar-pal-/"><Linkedin/></a></button>
     </div>
    </div>
  );
};

export default Profile;
