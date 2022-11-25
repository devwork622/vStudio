import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/card.module.scss";

type TechnologyCardProps = {
  name: string;
  description: string;
  color: string;
  path: string;
  url: string;
  property: string;
};

const Card: React.FC<TechnologyCardProps> = ({
  name,
  description,
  color,
  path,
  url,
  property,
}) => {
  const router = useRouter();

  if (url == "") {
    return (
      <Link href=""
        className={property}
        onClick={(e) => router.push(path)}
      >
        <div className="flex flex-col justify-center">
          <div className="pb-5">
            <div className="text-lg text-[20px] font-cy uppercase flex justify-start" style={{ color }}>{name}</div>
          </div>
          <div className="pb-5">
            <div className={styles.description} style={{ color }}>{description}</div>
          </div>
        </div>
      </Link>
    )
  }

  else {
    return (
      <Link href=""
        className={property}
        onClick={() => router.push(path)}
      >
        <div className="flex flex-col justify-center">
          <div className="pb-5">
            <div className="text-lg text-[20px] font-cy uppercase flex justify-start" style={{ color }}>{name}</div>
          </div>
          <div className="pb-5">
            <div className={styles.description} style={{ color }}>{description}</div>
          </div>
        </div>
        <div className="flex items-center" >
          <Image src={url} className={styles.communityCardImg} alt="card1"></Image>
        </div>
      </Link>
    )
  }
};

export default Card;

