import Image from "next/image"
import { IUnescoObjestProps } from "@/app/utils/interfaces"

const ProductBox: React.FC<IUnescoObjestProps> = ({
    name,
    category,
    image,
    states_name,
    short_description,
}) => {
    return (
        <>
            <div className="productBox">
                <div className="image">
                    <Image
                        src={image ? image : "/blank.png"}
                        alt={name}
                        width={200}
                        height={100}
                    />
                </div>
                <div className="caption">
                    <h3>{name}</h3>
                    <p>{short_description}</p>
                    <p>{category}</p>
                    <p>{states_name}</p>
                </div>
            </div>
        </>
    )
}

export default ProductBox
