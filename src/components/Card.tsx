import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/card.module.scss";

type TechnologyCardProps = {
  tname: string;
  bname: string;
  description: string;
  path: string;
  url: string;
  property: string;
};

const Card: React.FC<TechnologyCardProps> = ({
  tname,
  bname,
  description,
  path,
  url,
  property,
}) => {
  const router = useRouter();

  if (tname == "join") {
    return (
      <Link href={path}
        className={property}
        // onClick={(e) => router.push(path)}
      >
        <div className="flex items-center">
          <img src={url} className={styles.communityCardImg}></img>
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-5">
            <div className="text-lg text-gray-700 text-[20px] font-cy uppercase flex justify-start">{tname}</div>
            <div className="text-lg text-gray-700 text-[20px] font-cy uppercase flex justify-start">{bname}</div>
          </div>
          <div className="pb-5">
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </Link>
    )
  }
  else {
    return (
      <Link href={path}
        className={property}
      >
        <div className="flex items-center">
          <img src={url} className={styles.communityCardImg}></img>
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-5">
            <div className="text-lg text-white text-[20px] font-cy uppercase flex justify-start">{tname}</div>
            <div className="text-lg text-white text-[20px] font-cy uppercase flex justify-start">{bname}</div>
          </div>
          <div className="pb-5 text-white">
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </Link>
    )
  }

};

export default Card;