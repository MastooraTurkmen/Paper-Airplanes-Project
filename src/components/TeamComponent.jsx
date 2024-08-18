import { socials } from "../constants";
import { StudentsUsingComputer } from "../assets"
import { team } from "../constants/team";

const TeamComponent = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {team.map(({id, image, name, position}) => {
              return (
                  <div
                    key={id}
                    className="text-white text-center px-8 py-5 flex flex-col
                    items-center border-2 z-0 border-[#86868B] tooltip m-8 rounded-xl">
                    <img src={image} className="h-28 m-5 object-cover w-28 rounded-md" alt="" />
                      <h1 className="text-xl">{name}</h1>
                      <p className="text-sm text-[#F5F5F5]">{position}</p>
                        <div className="flex items-center gap-2">
                        {socials.map((social) => (
                        <img
                            src={social.src}
                            alt={social.title}
                            key={social.id}
                            className="w-5 h-10 md:w-5 mt-5 md:h-5"
                            />
                        ))}
                    </div>
                </div>
              )
          })}
</div>
  )
}

export default TeamComponent