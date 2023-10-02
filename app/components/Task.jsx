import Image from "next/image";
import deleteIcon from "../../public/recycle-bin.png";

export default function Task(props) {
    return (
        <div className="flex flex-row items-center">
            <div className="basis-1/5">
                <label>
                    <input type="checkbox" value={false}></input>
                </label>
            </div>
            <div className="basis-3/5">{props.description}</div>
            <div className="basis-1/5 p-2">
                <button value="deleteTask" type="button" placeholder="Delete">
                <Image
                    src={deleteIcon}
                    alt="Image of a trash can to represent delete."
                    width={30}
                    height={30}
                /></button>
            </div>
        </div>
    )
}