import Link from "next/link";
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
 
  if(name != "Hashd0x DAO") {
      return (
        <Link href=""
          className={property}
          onClick={(e) => router.push(path)}
        >        
          <div className="flex flex-col justify-center">
            <div className="pb-5">
              <div className="text-lg text-[20px] font-cy uppercase flex justify-start" style={{color}}>{name}</div>    
            </div>
            <div className="pb-5">
              <div className={styles.description} style={{color}}>{description}</div>
            </div>
          </div>
          <div className="flex items-center" >
            <img src={url} className={styles.communityCardImg}></img>
          </div>
        </Link>
      )
  }
  else {
    return (
        <Link href=""
          className={property}
          onClick={(e) => router.push(path)}
        >        
          <div className="flex flex-col justify-center">
            <div className="pb-5">
              <div className="text-lg text-[20px] font-cy uppercase flex justify-start" style={{color}}>{name}</div>    
            </div>
            <div className="pb-5">
              <div className={styles.description} style={{color}}>{description}</div>
            </div>
          </div>
          <div className="flex items-center" style={{marginLeft:"100px"}}>
            <img src={url} className={styles.communityCardImg}></img>
          </div>
        </Link>
      )
  }
};

export default Card;